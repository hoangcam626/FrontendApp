// import React, {useEffect, useState} from 'react';
// import {View, TextInput, Button, Image, TouchableOpacity, StyleSheet, Text, Modal} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Icon from "react-native-vector-icons/FontAwesome";
// import st from './styles'
// import navigation from "../../navigation";
// import {useIsFocused, useNavigation} from "@react-navigation/native";
//
// const ModalPost = ({modalVisible}) => {
//     const navigation = useNavigation<any>()
//     const isFocused = useIsFocused()
//     const [image, setImage] = useState(null);
//     const [description, setDescription] = useState('');
//     const [post, setPost] = useState({
//         userId: '',
//
//     })
//     useEffect( () => {
//         if(isFocused){
//             // setModalVisible(true)
//             setImage(null)
//             setDescription('')
//         }
//     }, [isFocused]);
//     const styles = st()
//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [9, 16],
//             quality: 1,
//         });
//
//         if (!result.canceled) {
//             setImage(result.assets[0].uri);
//         }
//     };
//
//     const handlePost = () => {
//         // Gửi hình ảnh và mô tả đến server
//         console.log('Hình ảnh:', image);
//         console.log('Mô tả:', description);
//     };
//
//     return (
//
//     );
// };
//
// const styles = StyleSheet.create({});
//
// export default ModalPost;
