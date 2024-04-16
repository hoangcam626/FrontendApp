import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import st from './styles'
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AvatarWithUsername from '../../user/component';
import MyBottomTabs from "../../../components/bottom/BottomTab";


const PostDetail = ({route}) => {
    const navigation = useNavigation();
    const {item} = route.params;
    const styles = st();
    console.log(item);

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
            <AvatarWithUsername id={1} profileImage={""} username={"Username"}></AvatarWithUsername>

            <Text style={[styles.stats, {fontWeight: 'bold'}]}>MÔ TẢ</Text>
            <Text style={styles.stats}>Likes: 10| Comments:11</Text>
            {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity> */}
            {/*<MyBottomTabs></MyBottomTabs>*/}
        </ScrollView>
    );
};


export default PostDetail;