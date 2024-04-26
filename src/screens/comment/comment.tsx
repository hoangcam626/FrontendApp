import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AvatarWithUsername from "../user/shortinfo";
import LikeComment from "../like/likeComment";
import CommentList from "./commentList";
import {getSubCommentsActions} from "../../services/comment/actions";
import {useDispatch} from "react-redux";

const CommentView = ({comment}) => {
    const [showSubComments, setShowSubComments] = useState(false);
    const [subComments, setSubComments] = useState<any>()
    const dispatch = useDispatch<any>()
    const handleToggleSubComments = () => {
        setShowSubComments(!showSubComments);
        if (showSubComments) {
            getSubComment()
        }
    };
    const getSubComment = async () => {
        const req = new FormData()
        req.append('commentId', comment?.id)
        await dispatch(getSubCommentsActions(req))
            .then(res => {
                setSubComments(res?.payload)
            })
            .catch(err => {
                console.error('Unlike comment failed:', err);
            });
    };

    return (
        <View style={[{margin:20}]}>
            <Text>{comment?.content}</Text>
            <AvatarWithUsername user={comment?.createBy} time={comment?.createdAt}></AvatarWithUsername>
            <Text>Likes: {comment?.likeCount}</Text>
            <LikeComment style={{}} commentId={comment?.id} isLike={comment?.isLike}></LikeComment>
        </View>
    );
}
export default CommentView;