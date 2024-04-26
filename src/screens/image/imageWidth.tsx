import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';

import {useNavigation} from "@react-navigation/native";

const ImageWidth = ({image, w}) => {
    // console.log(image)
    const navigation = useNavigation<any>()
    const [h, setH] = useState<number>();
    useEffect(() => {
        if (!image ) return;
        Image.prefetch(image)
            .then(() => {
                Image.getSize(image, (width, height) => {
                    let aspectRatio = height / width * w;
                    setH(aspectRatio);
                    console.log(w)
                    console.log(h)
                });
            })
            .catch(error => console.log(error))
    }, [image]);

    return (
        <View style={styles.container}>
            <View style={{width: w, height: h}}>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5
        // flex: 1,
        // resizeMode: 'contain'
    },
});
export default ImageWidth;