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

    const handleLikeComment = async () => {

        const req = new FormData()
        req.append('placeId', placeId)
        if (like) {
            await dispatch (unlikePlaceActions(req))
                .then(res=>{
                    setLike(false)
                })
                .catch(err => {
                    console.error('Unlike place failed:', err);
                });
        } else {
            await dispatch (likePlaceActions(req))
                .then(res=>{
                    setLike(true)
                })
                .catch(err => {
                    console.error('Unlike place failed:', err);
                });
        }
    }

    return (
        <TouchableOpacity onPress={handleLikeComment} style={style}>
            <Icon name={'heart'}
                  size={25} color={like ? 'red' : '#ccc'}
            />
        </TouchableOpacity>
    );
};


export default LikePlace;