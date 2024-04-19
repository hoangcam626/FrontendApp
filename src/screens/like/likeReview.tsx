import React from 'react';
import { TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {likeReviewActions, unlikeReviewActions} from "../../services/review/actions";

const LikeReview = ({style, isLike, reviewId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch<any>()
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('reviewId', reviewId)
        if (isLike) {
            await dispatch (unlikeReviewActions(req))
                .then(res=>{
                    isLike = !isLike
                })
                .catch(err => {
                    console.error('Unlike review failed:', err);
                });
        } else {
            await dispatch (likeReviewActions(req))
                .then(res=>{
                    isLike = !isLike
                })
                .catch(err => {
                    console.error('Unlike review failed:', err);
                });
        }
    }


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name={isLike ? 'heart' : 'heart-o'} size={25} color={isLike ? 'red' : 'black'}/>
        </TouchableOpacity>
    );
};


export default LikeReview;