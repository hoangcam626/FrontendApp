import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../constants/navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import st from './styles'

const Location = () => {
    const styles = st();
    const navigation = useNavigation<any>();
    const [searchText, setSearchText] = useState('');

    const userPostsByLocation = [
        // { id: 1, location: 'New York', image: require('../../../assets/VN.jpg') },
        { id: 1, location: 'Paris', image: require('../../../assets/TempleofliteratureVietnam.jpg') },
        { id: 2, location: 'London', image: require('../../../assets/hue.jpg') },
        { id: 3, location: 'London', image: require('../../../assets/Wandering.jpg') },
        { id: 4, location: 'London', image: require('../../../assets/WondersofVietnam.jpg') },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_POST, { item: item.image })} >
            <View style={styles.postContainer}>
                <Image style={styles.postImage}  source={item.image} />
                <Text style={styles.locationText}>{item.location}</Text>
            </View>
        </TouchableOpacity >
    );
    const handleSearch = (text) => {
   
        console.log('Từ khóa tìm kiếm:', text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Nhập địa điểm tìm kiếm..."
                    onSubmitEditing={() => handleSearch(searchText)}
                />
                <TouchableOpacity onPress={() => handleSearch(searchText)}>
                    <Icon size={24} style={styles.searchButton} name="search" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={userPostsByLocation}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
}
export default Location
