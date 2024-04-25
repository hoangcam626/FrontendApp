import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native';
import st from './styles'
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {useFocusEffect, useIsFocused, useNavigation} from "@react-navigation/native";
import {BASE_URL, IMAGE} from "../../../constants/api";
import moment from "moment/moment";
import {LinearGradient} from 'expo-linear-gradient';
import useTheme from "../../../hooks/useTheme";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {NAVIGATION_TITLE} from "../../../constants/navigation";
import Loading from "../../../../utils/loading/Loading";
import {getImagePlace, likePlaceActions, selfPlaceActions, unlikePlaceActions} from "../../../services/place/actions";
import Carousel from "react-native-snap-carousel";
import LikePlace from "../../like/likePlace";
import {ScrollView} from "react-native-gesture-handler";
import Reviews from "../../review";

const DetailPlace = ({route}) => {
    const styles = st();
    const theme = useTheme();
    const id = route.params;
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const WIDTH = Dimensions.get('window').width;
    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [place, setPlace] = useState<any>()

    const [loading, setLoading] = useState<boolean>(false)
    const [images, setImages] = useState<any>()
    const [like, setLike] = useState<boolean>(place?.isLike)
    const [routes] = useState([
        {key: "info", title: "thông tin"},
        {key: "review", title: "đánh giá"}
    ]);
    useFocusEffect(
        useCallback(() => {
            getPlace();
        }, [])
    );

    useEffect(() => {
        if (place) {
            getImages();
        }
    }, [place]);
    useEffect(() => {
        if (place) {
            setLike(place?.isLike);
        }
    }, [place]);
    const getPlace = async () => {
        const req = new FormData();
        req.append("id", id);
        console.log("req", req)
        setLoading(true)
        await dispatch(selfPlaceActions(req))
            .then(res => {
                setPlace(res?.payload);
                // getImages();
                setLoading(false)
            })
            .catch(err => setLoading(false))
        //
    }
    const getImages = async () => {
        const req = new FormData();
        req.append("placeId", id);
        console.log("req", req)
        setLoading(true)
        await dispatch(getImagePlace(req))
            .then(res => {
                setImages(res?.payload);
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }


    const handleLikeComment = async () => {
        const req = new FormData()
        req.append('placeId', place?.id)
        if (like) {
            await dispatch(unlikePlaceActions(req))
                .then(res => {
                    setLike(false)
                })
                .catch(err => {
                    console.error('Unlike place failed:', err);
                });
        } else {
            await dispatch(likePlaceActions(req))
                .then(res => {
                    setLike(true)
                })
                .catch(err => {
                    console.error('Unlike place failed:', err);
                });
        }
    }
    const renderItem = ({item}) => (
        <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${item}`}}
               style={styles.image} key={item}>
        </Image>
    );
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor: theme.colorBlue1}}
            style={{backgroundColor: theme.backgroundColor, paddingTop: 0}}
            activeColor={theme.colorBlue1}
            inactiveColor={theme.tabColor}
            labelStyle={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',

            }}
            tabStyle={{width: 120}}
            // scrollEnabled={}

        />
    );
    const renderInfoPlace = () => (
        <ScrollView style={styles.button}>
            {/*<Text style={{fontSize:20, fontWeight:'bold', color:'gray'}}>CHI TIẾT</Text>*/}
            <Text style={styles.buttonText}>{place?.description}</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>

        </ScrollView>
    );
    const renderReview = () => (
        <ScrollView>
            <Reviews placeId={place?.id}></Reviews>
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <View style={styles.iconBack}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems: 'flex-start'}}>
                        <Icon name='angle-left' size={24} style={{padding: 10, flex: 1, color: "#fff"}}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems: 'flex-end'}}>
                        <Icon name='calendar' size={24} style={{padding: 10, flex: 1, color: "#fff"}}></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Carousel
                        ref={carouselRef}
                        data={images}
                        renderItem={renderItem}
                        sliderWidth={WIDTH}
                        itemWidth={WIDTH}
                        loop
                        autoplay
                        autoplayInterval={5000}/>
                </View>
                <View style={styles.detail}>
                    <Text style={[styles.text, {fontSize: 20, fontWeight: 'bold',}]}>
                        {place?.name}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>
                        <Icon name='map-marker' color={theme.colorBlue1}></Icon>
                        <TouchableOpacity>
                            <Text style={styles.text}> {place?.ward?.name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}> - {place?.district?.name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}> - {place?.province?.name}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TabView
                navigationState={{index, routes: routes}}
                renderScene={SceneMap({
                    info: renderInfoPlace,
                    review: renderReview
                })}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
                lazy={true}
            />

            <View style={styles.function}>
                <TouchableOpacity style={styles.functionItem}
                                  onPress={() => navigation.navigate(NAVIGATION_TITLE.ADD_POST, place)}>
                    <Icon name='image' color={place?.hasPost ? '#068DA9' : '#ccc'} size={25}></Icon>
                    <Text style={styles.functionText}>{place?.totalPost} bài đăng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.functionItem}
                                  onPress={() => navigation.navigate(NAVIGATION_TITLE.ADD_REVIEW, place)}>
                    <Icon name='star' color={place?.hasReview ? '#FFC700' : '#ccc'} size={25}></Icon>
                    <Text style={styles.functionText}>{place?.totalReview} đánh giá</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLikeComment} style={styles.functionItem}>
                    <Icon name={'heart'} size={25} color={like ? "#F23A3A" : '#ccc'}/>
                    <Text style={styles.functionText}>{place?.totalLike} yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.functionItem}>
                    <Icon name='check' color={place?.isVisit ? '#007F73' : "#ccc"} size={25}></Icon>
                    <Text style={styles.functionText}>{place?.totalVisit} ghé thăm</Text>
                </TouchableOpacity>
            </View>
            <Loading visiable={loading}></Loading>
        </View>

    );
}
export default DetailPlace;