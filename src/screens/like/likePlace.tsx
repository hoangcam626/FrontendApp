import React, {useCallback, useEffect, useState} from 'react';
import { TouchableOpacity} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {likePlaceActions, unlikePlaceActions} from "../../services/place/actions";

const LikePlace = ({style, isLike, placeId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch<any>()
    const [like, setLike] = useState<boolean>(isLike)
    useEffect(() => {
        setLike(isLike);
    }, [isLike]);
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('placeId', placeId)
        try {
            if (like) {
                await dispatch(unlikePlaceActions(req));
                setLike(false);
            } else {
                await dispatch(likePlaceActions(req));
                setLike(true);
            }
        } catch (error) {
            console.error('Error occurred while liking/unliking comment:', error);
        }
    };


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name={'heart'}
                  size={20} color={like ? 'red' : '#ccc'}
            />
        </TouchableOpacity>
    );
};


export default LikePlace;