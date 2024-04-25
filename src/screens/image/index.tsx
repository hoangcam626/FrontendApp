import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import {BASE_URL, IMAGE} from '../../constants/api';
import LikeReview from '../like/likeReview';
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";

const ImageScreen = ({route}) => {
    const image = route.params
    const navigation = useNavigation<any>()
    return (
        <View style={styles.container}>
            <View style={styles.iconBack}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems: 'flex-start'}}>
                    <Icon name='angle-left' size={24} style={{padding: 10, flex: 1, color: "#fff"}}></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
            <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${image}`}} style={styles.image}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        // backgroundColor: 'rgba(0,0,0,0.9)',

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    image: {
        width: '100%',
        height: undefined,
        flex:1,
        resizeMode:'contain'
    },

    iconBack:{
        top:10,
        width: Dimensions.get('window').width,
        position: 'absolute',
        zIndex: 1,
    },
});

export default ImageScreen;