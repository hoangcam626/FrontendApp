import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import {BASE_URL, IMAGE} from '../../constants/api';
import LikeReview from '../like/likeReview';
import {selfPlaceActions} from "../../services/place/actions";
import {getReviewsActions, getReviewsForPlaceActions} from "../../services/review/actions";
import {useDispatch} from "react-redux";
import AvatarWithUsername from "../user/shortinfo";
import st from './styles'
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {NAVIGATION_TITLE} from "../../constants/navigation";
import {ScrollView} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Loading from "../../../utils/loading/Loading";

const Reviews = ({placeId}) => {
    // const placeId = route.params
    const styles = st();
    const navigation = useNavigation<any>();
    const dispatch = useDispatch<any>()
    const [reviews, setReviews] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getReview()
    }, []);
    const getReview = async () => {
        try {
            if (placeId != '') {
                const req = new FormData();
                req.append("placeId", placeId);
                console.log("req", req)
                setLoading(true)
                await dispatch(getReviewsForPlaceActions(req))
                    .then(res => {
                        setReviews(res?.payload);
                        setLoading(false)
                    })
                    .catch(err => setLoading(false))
            } else {
                await dispatch(getReviewsActions())
                    .then(res => {
                        setReviews(res?.payload);
                        setLoading(false)
                    })
                    .catch(err => setLoading(false))
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
            setLoading(false);
        }
    }
    const renderImage = ({item, index}) => (
        <View style={styles.imageContainer} key={item}>
            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.IMAGE, item)}>
                <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${item}`}} style={styles.image}/>
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={styles.container}>
            {reviews ? (
                reviews.map((review, index) => (
                    <View style={styles.itemContainer} key={index}>
                        <AvatarWithUsername user={review?.createBy} time={review?.createdAt}></AvatarWithUsername>
                        {(review?.place?.id == placeId)&&(
                            <Text>{review?.place?.name}</Text>
                        )}
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                            {[...Array(review?.rating)].map((_, index) => (
                                <Icon name='star' size={20} color='#FFC700' style={styles.star}/>
                            ))}
                        </View>
                        <Text style={styles.description}>{review?.description}</Text>
                        <FlatList
                            data={review?.imagesId}
                            renderItem={renderImage}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            contentContainerStyle={styles.gridContainer}
                        />
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.username}>{review?.totalLike} cảm ơn</Text>
                            <LikeReview reviewId={review?.id} isLike={review?.isLike} style={{}}></LikeReview>
                        </View>

                    </View>

                ))

            ) : (<View></View>)}
            <Loading visiable={loading}></Loading>
        </View>
    );
};

export default Reviews;