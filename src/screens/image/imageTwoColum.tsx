import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Dimensions,} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NAVIGATION_TITLE} from '../../constants/navigation';
import {BASE_URL, IMAGE} from "../../constants/api";
import ImageWidth from "../image/imageWidth";
import {ScrollView} from "react-native-gesture-handler";

const ImageTwoColumn = ({posts}) => {
    const navigation = useNavigation<any>();
    const imageWidth = (Dimensions.get('window').width / 2) - 15

    return (
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', paddingRight: 15}}>
                    {posts.filter((item, index) => index % 2 === 0).map((item, index) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_POST, item?.id)}>
                            <View key={item?.id} style={[styles.postContainer, styles.left]}>
                                <ImageWidth image={`${BASE_URL}${IMAGE.RESOURCE}${item?.imageId}`}
                                            w={imageWidth}></ImageWidth>
                            </View>
                        </TouchableOpacity>
                    ))
                    }
                </View>
                <View style={{flexDirection: 'column'}}>

                    {posts.filter((item, index) => index % 2 !== 0).map((item, index) => (

                        <TouchableOpacity
                            onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_POST, item?.id)}>
                            <View key={item?.id} style={[styles.postContainer, styles.right]}>
                                <ImageWidth image={`${BASE_URL}${IMAGE.RESOURCE}${item?.imageId}`}
                                            w={imageWidth}></ImageWidth>
                            </View>
                        </TouchableOpacity>
                    ))
                    }
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    postContainer: {

        margin: 5,
        borderRadius: 3,
    },
    left: {
        left: 5,
        alignItems: 'flex-start'
    },
    right: {
        right: 10,
        alignItems: 'flex-end'
    },
});
export default ImageTwoColumn
