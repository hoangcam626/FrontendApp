import React from 'react';
import {View, FlatList, Modal, Text} from 'react-native';
import CommentView from './comment';
import AvatarWithUsername from "../user/shortinfo";
import LikeComment from "../like/likeComment"; // Import your CommentView component

const CommentList = ({comments}) => {
    const renderComment =({comment}) => (
        <View style={[{margin:20}]} key = {comment?.id}>
            <Text>{comment?.content}</Text>
            <AvatarWithUsername user={comment?.createBy} time={comment?.createdAt}></AvatarWithUsername>
            <Text>{comment?.likeCount}</Text>
            <LikeComment style={{}} commentId={comment?.id} isLike={comment?.isLike}></LikeComment>
        </View>
    )

    return (
        <Modal>
            <FlatList
                data={comments}
                renderItem={({item}) => renderComment(item)}
                keyExtractor={(item, index) => index.toString()}
            />
        </Modal>
    );
};

export default CommentList;