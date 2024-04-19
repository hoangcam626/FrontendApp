import React from 'react';
import { View, FlatList } from 'react-native';
import CommentView from './comment'; // Import your CommentView component

const CommentList = ({ comments }) => {
    return (
        <FlatList
            data={comments}
            renderItem={({ item }) => <CommentView comment={item} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default CommentList;