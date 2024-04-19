import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const AddCommentBar = ({ onAddComment }) => {
    const [commentText, setCommentText] = useState('');

    const handleAddComment = () => {
        if (commentText.trim() !== '') {
            onAddComment(commentText); // Gửi nội dung bình luận tới hàm được chuyển vào props
            setCommentText(''); // Xóa nội dung của TextInput sau khi thêm bình luận
        }
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
            <TextInput
                style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 10, height: 40 }}
                placeholder="Thêm bình luận..."
                value={commentText}
                onChangeText={text => setCommentText(text)}
            />
            <TouchableOpacity onPress={handleAddComment} style={{ marginLeft: 10 }}>
                <Text style={{ color: 'blue' }}>Gửi</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddCommentBar;