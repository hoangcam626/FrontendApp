import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, ToastAndroid} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import useTheme from "../../hooks/useTheme";
import {useDispatch} from "react-redux";
import {createCommentActions} from "../../services/comment/actions";
import Loading from "../../../utils/loading/Loading";

const AddCommentBar = ({postId}) => {
    const [commentText, setCommentText] = useState('');
    const [image, setImage] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const theme = useTheme()
    const dispatch = useDispatch<any>()
    const handleAddComment = async () => {
        const req = new FormData()
        req.append('postId', postId)
        req.append('content', commentText)
        setLoading(true)
        await dispatch(createCommentActions(req)).then(res => {
            ToastAndroid.show('bình luận', ToastAndroid.SHORT)
            setCommentText('')
            setLoading(false)
        })
            .catch(err => setLoading(false))
    };

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            margin: 10
        }}>
            <TextInput
                style={{flex: 1, height: 40}}
                placeholder="Thêm bình luận..."
                value={commentText}
                onChangeText={text => setCommentText(text)}
            />
            <TouchableOpacity onPress={handleAddComment} style={{marginLeft: 10}}>
                <Icon name='send-o' size={20} color="gray"></Icon>
            </TouchableOpacity>
            <Loading visiable={loading}></Loading>
        </View>
    );
};

export default AddCommentBar;