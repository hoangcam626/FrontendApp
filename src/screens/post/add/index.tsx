import React, {useEffect, useState} from 'react';
import {
    View,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    Modal,
    ToastAndroid,
    KeyboardAvoidingView
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from "react-native-vector-icons/FontAwesome";
import st from './styles'
import navigation from "../../../navigation";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {createPostActions} from "../../../services/post/actions";
import {ScrollView} from "react-native-gesture-handler";

const AddPost = () => {
    const navigation = useNavigation<any>()
    const isFocused = useIsFocused()
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>()
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [placeId, setPlaceId] = useState<number>()
    const [modalVisible, setModalVisible] = useState(true);
    const [post, setPost] = useState<any>()
    useEffect(() => {
        if (isFocused) {
            setImage(null)
            setContent('')
        }
    }, [isFocused]);
    const styles = st()
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [9, 16],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handlePost = async () => {
        console.log('Hình ảnh:', image);
        console.log('Mô tả:', content);
        const req = new FormData()
        const imageToUpload = image
        const imageName = imageToUpload?.split('/').pop()
        const imageType = imageToUpload?.split('.').pop()
        console.log(`image/${imageType}`)
        // @ts-ignore
        image && req.append('image', {
            uri: imageToUpload,
            type: `image/${imageType}`,
            name: imageName
        });
        req.append('content', content)

        await dispatch(createPostActions(req))
            .then((res) => {
                if (res?.payload) {
                    setLoading(false)
                    ToastAndroid.show('Đăng tải thành công!', ToastAndroid.SHORT)
                    console.log(res, 'update avatar')
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'update avatar')
            })
            .catch(err => setLoading(false));
    };

    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Icon name='angle-left' size={24} style={styles.icon}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>Bắt đầu chia sẻ</Text>
            </View>
            <ScrollView style={styles.modalContainer}>
                <TouchableOpacity onPress={pickImage}>
                    <View style={styles.imagePicker}>
                        {image ? (
                            <Image source={{uri: image}} style={styles.image}/>
                        ) : (
                            <Icon name='camera' size={50}></Icon>
                        )}
                    </View>
                </TouchableOpacity>
                
                <Text style={styles.titleInput}>Mô tả cho nội dung bạn chia sẻ</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Mô tả"
                    onChangeText={text => setContent(text)}
                    value={content}
                    multiline
                />
                <Button title="Đăng" onPress={handlePost}/>
            </ScrollView>
        </View>

    );
};

export default AddPost;
