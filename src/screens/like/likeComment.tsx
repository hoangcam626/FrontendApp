import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {likeCommentActions, unlikeCommentActions} from "../../services/comment/actions";
import {useDispatch} from "react-redux";


const LikeComment = ({style, isLike, commentId}) => {
    const dispatch = useDispatch<any>()
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('commentId', commentId)
        if (isLike) {
            await dispatch (unlikeCommentActions(req))
                .then(res=>{
                    isLike = !isLike
                })
                .catch(err => {
                    console.error('Unlike comment failed:', err);
                });
        } else {
            await dispatch (likeCommentActions(req))
                .then(res=>{
                    isLike = !isLike
                })
                .catch(err => {
                    console.error('Unlike comment failed:', err);
                });
        }
    }


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name={isLike ? 'heart' : 'heart-o'} size={25} color={isLike ? 'red' : 'black'}/>
        </TouchableOpacity>
    );
};


export default LikeComment;