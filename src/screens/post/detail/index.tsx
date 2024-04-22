import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import st from './styles'
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AvatarWithUsername from '../../user/shortinfo';
import LikeComment from "../../like/likeComment";
import useTheme from "../../../hooks/useTheme";

const PostDetail = ({route}) => {
    const navigation = useNavigation();
    const {item} = route.params;
    const styles = st();
    console.log(item);
    const theme = useTheme();
    const [user, setUser] = useState({
        "id": '',
        "username": '',
        "avatar": ''
    });

    return (
        <ScrollView contentContainerStyle={styles.container}
                    showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <Image source={item}
                       style={[styles.image]}/>
            </View>
            <AvatarWithUsername user={item?.user} time={item?.creatdAt}></AvatarWithUsername>

            <Text style={[styles.stats, {fontWeight: 'bold'}]}>MÔ TẢ</Text>

            <View style={styles.detailsContainer}>
                <Text style={styles.details}>Likes: 10| Comments:11</Text>
                <LikeComment style={styles.heart} commentId={1} isLike={true}></LikeComment>
            </View>
        </ScrollView>
    )
        ;
};


export default PostDetail;