import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {likeCommentActions, unlikeCommentActions} from "../../services/comment/actions";
import {useDispatch} from "react-redux";


const LikeComment = ({style, isLike, commentId}) => {
    const dispatch = useDispatch<any>()
    const [like, setLike] = useState<boolean>(isLike)
    const handleLikeComment = async () => {

        useEffect(() => {
            setLike(isLike);
        }, [isLike]);
        const req = new FormData()
        req.append('commentId', commentId)
        try {
            if (like) {
                await dispatch(unlikeCommentActions(req));
                setLike(false);
            } else {
                await dispatch(likeCommentActions(req));
                setLike(true);
            }
        } catch (error) {
            console.error('Error occurred while liking/unliking comment:', error);
        }
    };


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name={'heart'} size={18} color={like ? 'red' : '#ccc'}/>
        </TouchableOpacity>
    );
};


export default LikeComment;