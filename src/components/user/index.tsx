import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import st from './styles'
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../constants/navigation';



const AvatarWithUsername = ({id, profileImage, username }) => {
    const navigation = useNavigation<any>();
    const styles = st();
  return (
    <TouchableOpacity onPress={() =>navigation.navigate(NAVIGATION_TITLE.INFO_USER, id)}>

     <View style={styles.postInfo}>
                <Image source={require(profileImage)} style={styles.profileImage} />
                <View style={styles.authorDetails}>
                    <Text style={styles.username}>{username}</Text>
                </View>
            </View>
    </TouchableOpacity>
  );
};
export default AvatarWithUsername;