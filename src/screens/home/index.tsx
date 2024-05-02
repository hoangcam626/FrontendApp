import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import st from './styles'
import Carousel from 'react-native-snap-carousel';
import { getReviewsActions } from "../../services/review/actions";
import { useDispatch } from "react-redux";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import useTheme from "../../hooks/useTheme";
import Loading from "../../../utils/loading/Loading";
import { getPlacesActions, searchPlaceActions } from "../../services/place/actions";
import { BASE_URL, IMAGE } from "../../constants/api";
import { NAVIGATION_TITLE } from "../../constants/navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import ReviewItem from "../review/detail";
import Reviews from "../review";
import LikePlace from "../like/likePlace";
import AvatarWithUsername from '../user/shortinfo';
import moment from 'moment';
import LikeReview from '../like/likeReview';
import review from "../review";

const Home = () => {
    const theme = useTheme();
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = WIDTH * 9 / 16
    const styles = st();
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const carouselRef = useRef(null);
    const [keyword, setKeyword] = useState('')
    const images = [
        { id: '1', image: require('../../../assets/TempleofliteratureVietnam.jpg') },
        { id: '2', image: require('../../../assets/hue.jpg') },
        { id: '3', image: require('../../../assets/Wandering.jpg') },
        { id: '4', image: require('../../../assets/WondersofVietnam.jpg') },
    ];

    const [places, setPlaces] = useState<any>([])
    const [reviews, setReviews] = useState<any>([])

    useFocusEffect(
        useCallback(() => {
            getPlaces();
        }, [])
    );

    useFocusEffect(
        useCallback(() => {
            getReview();
        }, [])
    );

    useEffect(() => {
        const interval = setInterval(() => {
            carouselRef.current.snapToNext();
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    const getPlaces = async () => {
        setLoading(true)
        const req = new FormData()
        req.append("keyword", keyword)
        await dispatch(searchPlaceActions(req))
            .then(res => {
                setPlaces(res?.payload)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }
    const getReview = async () => {
        setLoading(true)
        const req = new FormData()
        await dispatch(getReviewsActions())
            .then(res => {
                setReviews(res?.payload)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }
    const PlaceItem = ({ place }) => {
        return (
            <TouchableOpacity style={styles.placeItem}
                onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_PLACE, place?.id)}
                key={place?.id}>
                <View>
                    <Image source={{ uri: `${BASE_URL}${IMAGE.RESOURCE}${place?.imageId}` }} style={styles.placeImage} />
                    <LikePlace isLike={place?.isLike} placeId={place?.id} style={{ position: 'absolute', padding: 5, right: 0 }}></LikePlace>
                    <Text style={styles.placeName}>{place?.name}</Text>
                    <View style={styles.placeStart}>
                        <Text style={{ fontSize: 15 }}>{place?.rating} </Text>
                        <Icon name='star' size={15} color='#FCDC2A' />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };


    const renderItem = ({ item }) => (
        <Image source={item.image} style={styles.image} />
    );
    const renderImage = ({ item, index }) => (
        <View style={styles.imageContainer} key={item?.id}>
            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.IMAGE, item)}>
                <Image source={{ uri: `${BASE_URL}${IMAGE.RESOURCE}${item}` }} style={styles.image1} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Carousel
                        ref={carouselRef}
                        data={images}
                        renderItem={renderItem}
                        sliderWidth={WIDTH}
                        itemWidth={WIDTH}
                        loop
                        autoplay
                        autoplayInterval={10000}
                    />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Tìm kiếm"
                        placeholderTextColor={theme.colorBlue1}
                        value={keyword}
                        onChangeText={setKeyword}
                        onSubmitEditing={() => getPlaces()}
                    />
                </View>

                <FlatList
                    data={places}
                    renderItem={({ item }) => <PlaceItem place={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    contentContainerStyle={styles.flatListContent}
                    style={styles.placesContainer}
                />
                <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>Review mới nhất</Text>
                <Reviews reviews={reviews} placeId={''}></Reviews>
                <Loading visiable={loading}></Loading>
            </ScrollView>
        </View>
    );
}
export default Home
