import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, ToastAndroid, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import useTheme from "../../hooks/useTheme";
import {useDispatch} from "react-redux";
import {createCommentActions} from "../../services/comment/actions";
import Loading from "../../../utils/loading/Loading";
import * as ImagePicker from "expo-image-picker";
import st from "./styles"

const AddCommentBar = ({postId}) => {
    const [commentText, setCommentText] = useState('');
    const [image, setImage] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const theme = useTheme()
    const dispatch = useDispatch<any>()
    const styles = st()
    // useEffect(() => {
    //     setImage()
    // }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            // aspect: [9, 16],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const removeImage = () => {
        setImage(null);
    };
    const handleAddComment = async () => {
        const req = new FormData()
        req.append('postId', postId)
        req.append('content', commentText)
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
        setLoading(true)
        await dispatch(createCommentActions(req)).then(res => {
            ToastAndroid.show('bình luận', ToastAndroid.SHORT)
            setCommentText('')
            removeImage()
            setLoading(false)
        })
            .catch(err => setLoading(false))
    };

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
                margin: 10
            }}>
                <TextInput
                    style={{flex: 1, height: 40}}
                    placeholder="Thêm bình luận..."
                    value={commentText}
                    onChangeText={text => setCommentText(text)}
                />
                <TouchableOpacity onPress={pickImage} style={{marginLeft: 10}}>
                    <Icon name='camera' size={20} color={commentText ? '#0C359E' : "gray"}></Icon>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAddComment} style={{marginLeft: 10}}>
                    <Icon name='send-o' size={20} color={commentText ? '#0C359E' : "gray"}></Icon>
                </TouchableOpacity>
                <Loading visiable={loading}></Loading>
            </View>
            {image && (
                <View style={styles.imagePicker}>
                    <Image source={{uri: image}} style={styles.image}/>
                    <TouchableOpacity onPress={() => removeImage()} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default AddCommentBar;