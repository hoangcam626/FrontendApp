import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal} from 'react-native';
import st from './styles'
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AvatarWithUsername from '../../user/shortinfo';
import LikeComment from "../../like/likeComment";
import useTheme from "../../../hooks/useTheme";
import {useDispatch} from "react-redux";
import {selfScheduleActions} from "../../../services/schedule/actions";
import {selfPostActions} from "../../../services/post/actions";
import ImageWidth from "../../image/imageWidth";
import {BASE_URL, IMAGE} from "../../../constants/api";
import Comment from "../../comment/comment";
import AddCommentBar from "../../comment/addComment";
import CommentList from "../../comment/commentList";
import {getCommentsActions} from "../../../services/comment/actions";
import CommentView from "../../comment/comment";
import {NAVIGATION_TITLE} from "../../../constants/navigation";
import LikePost from "../../like/likePost";

const PostDetail = ({route}) => {
    const navigation = useNavigation<any>();
    const id = route.params;
    const styles = st();
    console.log(id);
    const theme = useTheme();
    const [post, setPost] = useState<any>();
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [comments, setComments] = useState<any>([])
    const imageWidth = Dimensions.get('window').width - 15;
    const [showComment, setShowComment] = useState<any>(false)
    useEffect(() => {
        getPost()
    }, []);
    useEffect(() => {
        if (showComment) {
            getComments()
        }
        getComments()
    }, [showComment]);
    const getPost = async () => {
        const req = new FormData();
        req.append("id", id);
        console.log("req", req)
        setLoading(true)
        await dispatch(selfPostActions(req))
            .then(res => {
                setPost(res?.payload);
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

    // @ts-ignore
    return (
        <ScrollView contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <ImageWidth image={`${BASE_URL}${IMAGE.RESOURCE}${post?.imageId}`} w={imageWidth}></ImageWidth>
                <View style={{margin: 10}}>
                    <AvatarWithUsername user={post?.createBy} time={post?.createdAt}></AvatarWithUsername>
                </View>
            </View>

            {/*<Text style={[styles.stats, {fontWeight: 'bold'}]}>MÔ TẢ</Text>*/}
            <View style={styles.stats}>

                <Text style={{}}>{post?.content}</Text>
                {(post?.place) &&
                    (<TouchableOpacity  onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_PLACE, post?.place?.id)}>
                        <Text>Địa điểm: {post?.place?.name}</Text>
                    </TouchableOpacity>)
                }
            </View>
            <View style={styles.detailsContainer}>
                <TouchableOpacity onPress={() => setShowComment(true)}>
                    <Text style={styles.details}>{post?.totalComment} Comments</Text>
                </TouchableOpacity>
                <Text>{post?.totalLike}</Text>
                <LikePost style={styles.heart} postId={post?.id} isLike={post?.isLike}></LikePost>
            </View>
            <Modal visible={showComment}>
                <FlatList
                    data={comments}
                    renderItem={({item}) => <CommentView comment={item}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Modal>
            <AddCommentBar postId={post?.id}></AddCommentBar>
        </ScrollView>
    );
};


export default PostDetail;