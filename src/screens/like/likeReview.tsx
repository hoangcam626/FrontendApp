import React, {useState} from 'react';
import { TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {likeReviewActions, unlikeReviewActions} from "../../services/review/actions";

const LikeReview = ({style, isLike, reviewId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch<any>()
    const [like, setLike] = useState<boolean>(isLike)
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('reviewId', reviewId)
        if (isLike) {
            await dispatch (unlikeReviewActions(req))
                .then(res=>{
                    setLike(false)
                })
                .catch(err => {
                    console.error('Unlike review failed:', err);
                });
        } else {
            await dispatch (likeReviewActions(req))
                .then(res=>{
                    setLike(true)
                })
                .catch(err => {
                    console.error('Unlike review failed:', err);
                });
        }
    }

    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name= 'heart'  size={20} color={like ? 'red' : 'gray'}/>
        </TouchableOpacity>
    );
};


export default LikeReview;