import React, {useCallback, useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Modal,
    SafeAreaView,
    StatusBar
} from 'react-native';
import st from './styles'
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AvatarWithUsername from '../../user/shortinfo';
import LikeComment from "../../like/likeComment";
import useTheme from "../../../hooks/useTheme";
import {useDispatch} from "react-redux";
import {selfScheduleActions} from "../../../services/schedule/actions";
import {getPostInPlaceActions, getPostsActions, selfPostActions} from "../../../services/post/actions";
import ImageWidth from "../../image/imageWidth";
import {BASE_URL, IMAGE} from "../../../constants/api";
import Comment from "../../comment/comment";
import AddCommentBar from "../../comment/addComment";
import CommentList from "../../comment/commentList";
import {getCommentsActions} from "../../../services/comment/actions";
import CommentView from "../../comment/comment";
import {NAVIGATION_TITLE} from "../../../constants/navigation";
import LikePost from "../../like/likePost";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import {getItemObjectAsyncStorage} from "../../../../utils/asyncStorage";
import {KEY_STORAGE} from "../../../constants/storage";
import ImageTwoColum from "../../image/imageTwoColum";

const PostDetail = ({route}) => {
    const navigation = useNavigation<any>();
    const id = route.params;
    const styles = st();
    console.log(id);
    const theme = useTheme();
    let login = getItemObjectAsyncStorage(KEY_STORAGE.SAVED_INFO);
    const [post, setPost] = useState<any>();
    const [posts, setPosts] = useState<any>([]);

    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [comments, setComments] = useState<any>([])
    const imageWidth = Dimensions.get('window').width - 15;
    const [showComment, setShowComment] = useState<any>(false)
    useFocusEffect(
        useCallback(() => {
            getPost()

        }, [])
    );
    useEffect(() => {
        if (post?.place) {
            getPosts()
        }

    }, [post]);
    useEffect(() => {
        if (showComment) {
            getComments()
        }
        getComments()
    }, [showComment]);
    const getPosts = async () => {
        const req = new FormData()
        req.append('placeId', post?.place?.id)
        await dispatch(getPostInPlaceActions(req))
            .then(res => {
                setPosts(res?.payload);
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }

    const getPost = async () => {
        const req = new FormData();
        req.append("id", id);
        console.log("req", req)
        setLoading(true)
        await dispatch(selfPostActions(req))
            .then(res => {
                setPost(res?.payload);
                getPosts();

                setLoading(false)
            })
            .catch(err => setLoading(false))
    }
    const getComments = async () => {
        const req = new FormData();
        req.append("postId", id);
        console.log("req", req)
        setLoading(true)
        await dispatch(getCommentsActions(req))
            .then(res => {
                setComments(res?.payload);
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }
    const renderComment = ({item, index}) => (
        <View style={{margin: 5}} key={item?.id}>
            <View style={styles.postInfo}>
                <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.INFO_USER, item?.createdBy?.id)}>
                    <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${item?.createdBy?.avatarId}`}}
                           style={styles.profileImage}/>
                </TouchableOpacity>
                <View style={styles.authorDetails}>
                    <Text style={styles.username}>{item?.createdBy?.username}</Text>
                    <Text>{item?.content}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', paddingLeft: 40}}>
                {(item.imageId) && (
                    <ImageWidth image={`${BASE_URL}${IMAGE.RESOURCE}${item?.imageId}`} w={110}></ImageWidth>
                )}
                <View style={{alignItems: 'flex-end', flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{marginRight: 20, color: 'gray'}}>
                            {moment(item?.createdAt).fromNow()}
                        </Text>
                        <Text>{item?.totalLike}</Text>
                        <LikeComment style={{}} commentId={item?.id}
                                     isLike={item?.isLike}></LikeComment>
                    </View>
                </View>
            </View>

        </View>
    )
    const toggleModal = () => {
        setShowComment(!showComment);
    };

    // @ts-ignore
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={"#fff"}></StatusBar>

            <ScrollView contentContainerStyle={styles.container}
                        showsVerticalScrollIndicator={false}>
                <View style={styles.iconBack}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems: 'flex-start', flex: 1}}>
                        <Icon name='angle-left' size={24} style={{padding: 10, flex: 1, color: "#000"}}></Icon>
                    </TouchableOpacity>
                    {(login.id == post?.createBy?.id) && (

                        <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.UPDATE_POST, post)}
                                          style={{alignItems: 'flex-end'}}>
                            <Icon name='pencil' size={20} style={{padding: 10, flex: 1, color: "#000"}}></Icon>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.imageContainer}>
                    <ImageWidth image={`${BASE_URL}${IMAGE.RESOURCE}${post?.imageId}`} w={imageWidth}></ImageWidth>
                    <View style={{margin: 10}}>
                        <AvatarWithUsername
                            user={post?.createBy}
                            time={moment(post?.createdAt).fromNow()}>
                        </AvatarWithUsername>
                    </View>
                </View>

                <View style={styles.stats}>

                    <Text style={{}}>{post?.content}</Text>
                    {(post?.place) &&
                        (<TouchableOpacity
                            onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_PLACE, post?.place?.id)}>
                            <Text style={[styles.text,{textAlign:'right'}]}>Địa điểm: {post?.place?.name}</Text>
                        </TouchableOpacity>)
                    }
                </View>
                <View style={styles.detailsContainer}>
                    <TouchableOpacity onPress={() => setShowComment(true)}>
                        <Text style={styles.details}>{post?.totalComment} Comments {post?.totalLike} Likes</Text>
                    </TouchableOpacity>

                    <View
                        style={{alignItems: 'flex-end', flex: 1}}>
                        <LikePost style={styles.heart} postId={post?.id} isLike={post?.isLike}></LikePost>
                    </View>
                </View>

                <Modal visible={showComment} animationType="slide"
                       transparent={true}
                       onRequestClose={toggleModal}>

                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={toggleModal} style={{alignItems: 'flex-end'}}>
                                <Icon name='times' size={20} color="gray"></Icon>
                            </TouchableOpacity>
                            {(comments.length > 0) ? (
                                <FlatList
                                    data={comments}
                                    renderItem={renderComment}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            ) : (

                                <Text style={styles.details}>Không có bình luận nào</Text>
                            )}
                            <AddCommentBar postId={post?.id}></AddCommentBar>
                        </View>
                    </View>
                </Modal>
                <AddCommentBar postId={post?.id}></AddCommentBar>
                {(posts) && (
                    <View style={{borderTopWidth:1,borderTopColor:"#ccc", padding:10}}>
                        <Text style={styles.text}>Khám phá thêm tại cùng địa điểm</Text>
                        <ImageTwoColum posts={posts}></ImageTwoColum>

                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};


export default PostDetail;