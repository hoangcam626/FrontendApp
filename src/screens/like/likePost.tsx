import React, {useEffect, useState} from 'react';
import { TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {likePostActions, unlikePostActions} from "../../services/post/actions";

const LikePost = ({style, isLike, postId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch<any>()
    const [like, setLike] = useState<boolean>(isLike)
    useEffect(() => {
        setLike(isLike);
    }, [isLike]);
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('postId', postId)
        try {
            if (like) {
                await dispatch(unlikePostActions(req));
                setLike(false);
            } else {
                await dispatch(likePostActions(req));
                setLike(true);
            }
        } catch (error) {
            console.error('Error occurred while liking/unliking comment:', error);
        }
    };



    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name='heart'  size={18} color={like ? 'red' : '#ccc'}/>
        </TouchableOpacity>
    );
};


export default LikePost;