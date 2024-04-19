import React from 'react';
import { TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {likePlaceActions, unlikePlaceActions} from "../../services/place/actions";

const LikePlace = ({style, isLike, placeId}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch<any>()
    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('placeId', placeId)
        if (isLike) {
            await dispatch (unlikePlaceActions(req))
                .then(res=>{
                    isLike = !isLike
                })
                .catch(err => {
                    console.error('Unlike place failed:', err);
                });
        } else {
            await dispatch (likePlaceActions(req))
                .then(res=>{
                    isLike = !isLike
                })
                .catch(err => {
                    console.error('Unlike place failed:', err);
                });
        }
    }


    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name={isLike ? 'heart' : 'heart-o'} size={25} color={isLike ? 'red' : 'black'}/>
        </TouchableOpacity>
    );
};


export default LikePlace;