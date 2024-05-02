import React, {useEffect, useState} from 'react';
import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    ToastAndroid,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from "react-native-vector-icons/FontAwesome";
import st from './styles'
import navigation from "../../../navigation";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {createPostActions, deletePostActions, updatePostActions} from "../../../services/post/actions";
import {ScrollView} from "react-native-gesture-handler";
import SearchPlaceModal from "../../place/search";
import PlaceShortSelf from "../../place/shortself";
import {BASE_URL, IMAGE} from "../../../constants/api";

const UpdatePost = ({route}) => {
    const navigation = useNavigation<any>()
    const isFocused = useIsFocused()
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>()
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [place, setPlace] = useState<any>()
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const post=route.params
    useEffect(() => {
        if (route) {
            setImage(post.imageId)
            setContent(post.content)
            setPlace(post.place)
        }
    }, [route]);

    const styles = st()

    const searchPlaces = (place) => {
        setPlace(place);
    };

    const handlePost = async () => {

        const req = new FormData()
        req.append('id', post?.id)
        req.append('content', content)
        if (place) {
            req.append("placeId", place?.id)
        }
        await dispatch(updatePostActions(req))
            .then((res) => {
                if (res?.payload) {
                    setLoading(false)
                    ToastAndroid.show('Cập nhật thành công!', ToastAndroid.SHORT)
                    navigation.goBack()
                    console.log(res, 'update post')
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'update post')
            })
            .catch(err => setLoading(false));
    };
    const handleDelete = async () => {

        const req = new FormData()

        req.append('id',post?.id)
        await dispatch(deletePostActions(req))
            .then((res) => {
                if (res?.payload) {
                    setLoading(false)
                    ToastAndroid.show('Xóa thành công!', ToastAndroid.SHORT)
                    navigation.goBack()
                    console.log(res, 'delete post')
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'delete post')
            })
            .catch(err => setLoading(false));
    };


    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Icon name='angle-left' size={24} style={styles.icon}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>Chinh sửa</Text>
            </View>
            <ScrollView style={styles.modalContainer}>
                <Text style={styles.titleInput}>Chia sẻ hình ảnh</Text>
                {/*<TouchableOpacity onPress={pickImage}>*/}
                <View style={styles.imagePicker}>
                    {image && (
                        <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${image}`}} style={styles.image}/>
                    )}
                </View>
                {/*</TouchableOpacity>*/}
                <TouchableOpacity style={styles.descriptionInput} onPress={() => setModalVisible(true)}>
                    {place ? (
                        <View style={{padding: 10}}>

                            <PlaceShortSelf place={place}></PlaceShortSelf>
                        </View>
                    ) : (
                        <Text style={[styles.titleInput]}> Chọn địa điểm</Text>

                    )}
                </TouchableOpacity>
                <SearchPlaceModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onSelectPlace={searchPlaces}
                />
                <Text style={styles.titleInput}>Mô tả cho nội dung bạn chia sẻ</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Mô tả"
                    onChangeText={text => setContent(text)}
                    value={content}
                    multiline
                />
            </ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.buttonDelete} onPress={handleDelete}>
                        <Icon style={styles.buttonText} name='trash'></Icon>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePost}>
                    <Text style={styles.buttonText}>Lưu</Text>
                </TouchableOpacity>
                </View>
        </View>

    );
};

export default UpdatePost;
