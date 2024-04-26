import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import st from './styles'
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../../constants/navigation';
import { BASE_URL, IMAGE } from '../../../constants/api';



const PlaceShortSelf = ({place }) => {
    const navigation = useNavigation<any>();
    const styles = st();

  return (

     <View style={styles.postInfo} key={place?.id}>
                <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${place?.imageId}`}} style={styles.profileImage} />
                <View style={styles.authorDetails}>
                    <Text style={styles.username}>{place?.name}</Text>
                    <Text>{place?.ward?.name} - {place?.district?.name} - {place?.province?.name}</Text>
                </View>
            </View>
  );
};
export default PlaceShortSelf;