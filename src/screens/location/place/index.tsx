import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import st from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AvatarWithUsername from '../../user/component';


const PostDetail = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;
    const styles = st();
    console.log(item);

    const [user, setUser] = useState({
        "id":'',
        "username":'',
        "avatar":''
    });
    // const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    // const onImageLoad = (event) => {
    //     const { width, height } = event.nativeEvent.source;
    //     setImageSize({ width, height });
    // };

    // const aspectRatio = imageSize.width / imageSize.height;
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <Image source={item}
                    style={[styles.image]} />
            </View>
            {/* <AvatarWithUsername id={1} profileImage={"../../../../../assets/VN.jpg"} username={"Username"}></AvatarWithUsername> */}
            
                    <Text style={styles.stats}>Likes: 10| Comments:11</Text>
            <Text style={styles.description}>description</Text>
            {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity> */}

        </ScrollView>
    );
};



export default PostDetail;