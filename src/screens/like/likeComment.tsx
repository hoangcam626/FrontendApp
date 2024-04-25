import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {likeCommentActions, unlikeCommentActions} from "../../services/comment/actions";
import {useDispatch} from "react-redux";


const LikeComment = ({style, isLike, commentId}) => {
    const dispatch = useDispatch<any>()
    const [like, setLike] = useState<boolean>(isLike)
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('commentId', commentId)
        if (isLike) {
            await dispatch (unlikeCommentActions(req))
                .then(res=>{
                    setLike(false)
                })
                .catch(err => {
                    console.error('Unlike comment failed:', err);
                });
        } else {
            await dispatch (likeCommentActions(req))
                .then(res=>{
                    setLike(true)
                })
                .catch(err => {
                    console.error('Unlike comment failed:', err);
                });
        }
    }


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name={'heart'} size={20} color={like ? 'red' : 'black'}/>
        </TouchableOpacity>
    );
};


export default LikeComment;