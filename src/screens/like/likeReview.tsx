import React, {useEffect, useState} from 'react';
import { TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {likeReviewActions, unlikeReviewActions} from "../../services/review/actions";

const LikeReview = ({style, isLike, reviewId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch<any>()
    const [like, setLike] = useState<boolean>(isLike)
    useEffect(() => {
        setLike(isLike);
    }, [isLike]);
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('reviewId', reviewId)
        try {
            if (like) {
                await dispatch(unlikeReviewActions(req));
                setLike(false);
            } else {
                await dispatch(likeReviewActions(req));
                setLike(true);
            }
        } catch (error) {
            console.error('Error occurred while liking/unliking comment:', error);
        }
    };


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name= 'heart'  size={20} color={like ? 'red' : 'gray'}/>
        </TouchableOpacity>
    );
};


export default LikeReview;