import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Dimensions,} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NAVIGATION_TITLE} from '../../constants/navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import st from './styles'
import {getReviewsForPlaceActions} from "../../services/review/actions";
import {useDispatch} from "react-redux";
import {getPostsActions} from "../../services/post/actions";
import {BASE_URL, IMAGE} from "../../constants/api";
import ImageWidth from "../image/imageWidth";
import {ScrollView} from "react-native-gesture-handler";
import ImageTwoColum from "../image/imageTwoColum";

const Location = () => {
    const styles = st();
    const navigation = useNavigation<any>();
    const [searchText, setSearchText] = useState('');
    const imageWidth = (Dimensions.get('window').width / 2) - 15
    const dispatch = useDispatch<any>()
    const [posts, setPosts] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    useFocusEffect(
        useCallback(() => {
            getPost();
        }, [])
    );

    const getPost = async () => {

        await dispatch(getPostsActions())
            .then(res => {
                setPosts(res?.payload);
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_POST, item?.id)}>
            <View style={styles.postContainer}>
                <ImageWidth image={`${BASE_URL}${IMAGE.RESOURCE}${item?.imageId}`} w={imageWidth}></ImageWidth>
            </View>
        </TouchableOpacity>
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
                    <Icon size={24} style={styles.searchButton} name="search"/>
                </TouchableOpacity>
            </View>
            <ImageTwoColum posts={posts}></ImageTwoColum>

        </View>
    );
}
export default Location
