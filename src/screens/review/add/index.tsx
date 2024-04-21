import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, ToastAndroid, TextInput } from 'react-native';
import StarRating from 'react-native-star-rating';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { createReviewActions } from '../../../services/review/actions';
import Icon from "react-native-vector-icons/FontAwesome";
import Loading from '../../../../utils/loading/Loading';
import st from './styles'

export const AddReviewScreen = ({ route }) => {
    const styles = st();
    const { place } = route.params;
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>()
    const [loading, setLoading] = useState(false);
    const handleReviewSubmit = async () => {
        console.log('Đánh giá:', rating, 'sao');
        console.log('Mô tả:', description);
        //@ts-ignore
        const req = new FormData();
        req.append("placeId", place?.id);
        req.append("rating", rating.toString());
        req.append("descripton", description);

        await dispatch(createReviewActions(req))
            .then(res => {
                setLoading(false)
                ToastAndroid.show('Đăng tải thành công!', ToastAndroid.SHORT)
                navigation.goBack()

            })
            .catch(err => console.log(err))
    };


    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='angle-left' size={24} style={styles.icon}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>Đánh giá</Text>
            </View>
            <Text style={styles.title}>Đánh giá địa điểm</Text>
            <Text style={styles.placeName}>{place.name}</Text>
            <StarRating
                maxStars={5}
                rating={rating}
                selectedStar={rating => setRating(rating)}
                fullStarColor="#ffd700"
                emptyStarColor="#ddd" />
            <Text style={styles.titleInput}>Mô tả trải nghiệm</Text>
            <TextInput
                style={styles.descriptionInput}
                placeholder="Mô tả"
                onChangeText={text => setDescription(text)}
                value={description}
                multiline
            />
            <TouchableOpacity onPress={handleReviewSubmit}>
                <Text>Gửi đánh giá</Text>
            </TouchableOpacity>
            <Loading visiable={loading}></Loading>
        </View>
    );
};
