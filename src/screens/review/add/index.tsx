import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, ToastAndroid, TextInput, StatusBar} from 'react-native';
import StarRating from 'react-native-star-rating';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {createReviewActions} from '../../../services/review/actions';
import Icon from "react-native-vector-icons/FontAwesome";
import Loading from '../../../../utils/loading/Loading';
import st from './styles'
import {ScrollView} from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';


export const AddReview = ({route}) => {
    const styles = st();
    const place = route.params;
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>()
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access media library was denied!');
            }
        })();
    }, []);

    const addImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsMultipleSelection: true,
            // allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        if (!result.canceled) {
            const selectedImage = result.assets.map((asset) => asset.uri);
            setImages([...images, ...selectedImage]);
        }
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };


    const renderImageItem = ({item, index}) => (
        <View style={styles.imageContainer}>
            <Image source={{uri: item}} style={styles.image}></Image>
            <TouchableOpacity onPress={() => removeImage(index)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );
    const handleReviewSubmit = async () => {
        console.log('Đánh giá:', rating, 'sao');
        console.log('Mô tả:', description);

        try {
            const req = new FormData();

            images.forEach((img, index) =>{
                const imageToUpload = img;
                const imageName = imageToUpload.split('/').pop();
                const imageType = imageToUpload.split('.').pop();

                // @ts-ignore
                req.append("images[]", {
                    uri: imageToUpload,
                    type: `image/${imageType}`,
                    name: imageName
                });
            });

            req.append("placeId", place?.id);
            req.append("rating", rating.toString());
            req.append("description", description);

            console.log(req);

            const res = await dispatch(createReviewActions(req));
            setLoading(false);
            ToastAndroid.show('Đăng tải thành công!', ToastAndroid.SHORT);
            navigation.goBack();
        } catch (err) {
            console.log(err);
            // Handle error if needed
        }
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#fff'}></StatusBar>
            <View style={styles.topModal}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='angle-left' size={24} style={styles.icon}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>Đánh giá</Text>
            </View>
            <ScrollView style={styles.modalContainer}>

                <Text style={styles.placeName}>{place?.name}</Text>
                <StarRating
                    maxStars={5}
                    rating={rating}
                    selectedStar={rating => setRating(rating)}
                    fullStarColor="#ffd700"
                    emptyStarColor="#ddd"/>
                <Text style={styles.titleInput}>Mô tả trải nghiệm</Text>

                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Mô tả"
                    onChangeText={text => setDescription(text)}
                    value={description}
                    multiline
                />
                <Text style={styles.titleInput}>Chia sẻ trải nghiệm</Text>

                <ScrollView horizontal
                            contentContainerStyle={{alignItems: 'center'}}
                            style={{borderWidth: 1, borderStyle: 'dashed',borderRadius:5, padding: 10, borderColor: "#ccc"}}>

                    {images.map((image, index) => (
                            <View style={styles.imageContainer} key={index}>
                                <Image source={{uri: image}} style={styles.image}></Image>
                                <TouchableOpacity onPress={() => removeImage(index)} style={styles.removeButton}>
                                    <Text style={styles.removeButtonText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )}
                    <TouchableOpacity onPress={addImage}>
                        <View style={styles.camera}>
                            <Icon name='camera' color = '#ccc' size={50}></Icon>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleReviewSubmit}>
                <Text style={styles.buttonText}>Gửi đánh giá</Text>
            </TouchableOpacity>
            <Loading visiable={loading}></Loading>
        </View>
    );
};
