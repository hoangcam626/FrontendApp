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
import {createPostActions, updatePostActions} from "../../../services/post/actions";
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
    const [post, setPost] = useState<any>()
    useEffect(() => {
        if (route) {
            setImage(route.params?.imageId)
            setContent(route.params?.content)
            setPlace(route.params?.place)
        }
    }, [route]);
    // useEffect(() => {
    //     if(route){
    //         setPlace(route.params)
    //     }
    // }, [route]);
    const styles = st()
    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         // aspect: [9, 16],
    //         quality: 1,
    //     });
    //
    //     if (!result.canceled) {
    //         setImage(result.assets[0].uri);
    //     }
    // };


    const searchPlaces = (place) => {
        setPlace(place);
    };


    const handlePost = async () => {
        // console.log('Hình ảnh:', image);
        // console.log('Mô tả:', content);
        const req = new FormData()
        // const imageToUpload = image
        // const imageName = imageToUpload?.split('/').pop()
        // const imageType = imageToUpload?.split('.').pop()
        // console.log(`image/${imageType}`)
        // @ts-ignore
        // image && req.append('image', {
        //     uri: imageToUpload,
        //     type: `image/${imageType}`,
        //     name: imageName
        // });
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
                {/* <Button title="Đăng" onPress={handlePost}/>
                 */}
                <TouchableOpacity style={styles.button} onPress={handlePost}>
                    <Text style={styles.buttonText}>Cập nhật</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePost}>
                    <Text style={styles.buttonText}>Xoa</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    );
};

export default UpdatePost;
