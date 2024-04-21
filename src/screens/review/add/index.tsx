import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import StarRating from 'react-native-star-rating';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { createReviewActions } from '../../../services/review/actions';
import { useNavigation } from '@react-navigation/native';

export const AddReviewScreen = ({ route }) => {
    const { place } = route.params;
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>()

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
                
            })
            .catch(err => console.log(err))
    };

return (
    <View style={styles.container}>
        <Text style={styles.title}>Đánh giá địa điểm</Text>
        <Text style={styles.placeName}>{place.name}</Text>
        <StarRating
            maxStars={5}
            rating={rating}
            selectedStar={rating => setRating(rating)}
            fullStarColor="#ffd700"
            emptyStarColor="#ddd" />
        <Button title="Gửi đánh giá" onPress={handleReviewSubmit} />

    </View>
);
};
