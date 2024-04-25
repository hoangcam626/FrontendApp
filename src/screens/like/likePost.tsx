import React, {useState} from 'react';
import { TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {likePostActions, unlikePostActions} from "../../services/post/actions";

const LikePost = ({style, isLike, postId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch<any>()
    const [like, setLike] = useState<boolean>(isLike)

    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('postId', postId)
        if (isLike) {
            await dispatch (unlikePostActions(req))
                .then(res=>{
                    setLike(false)
                })
                .catch(err => {
                    console.error('Unlike post failed:', err);
                });
        } else {
            await dispatch (likePostActions(req))
                .then(res=>{
                    setLike(true)
                })
                .catch(err => {
                    console.error('Unlike post failed:', err);
                });
        }
    }


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name='heart'  size={25} color={like ? 'red' : 'black'}/>
        </TouchableOpacity>
    );
};


export default LikePost;