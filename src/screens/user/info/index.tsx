import React, {useCallback, useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert, ToastAndroid, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useFocusEffect, useIsFocused, useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {NAVIGATION_TITLE} from '../../../constants/navigation';
import {useDispatch} from 'react-redux';
import st from './styles'
import Loading from '../../../../utils/loading/Loading';
import Toast from '../../../../utils/toast';
import useTheme from '../../../hooks/useTheme'
import {selfActions, updateAvatarActions} from "../../../services/user/actions";
import {getItemObjectAsyncStorage} from "../../../../utils/asyncStorage";
import {KEY_STORAGE} from "../../../constants/storage";
import {BASE_URL, IMAGE} from "../../../constants/api";
import {getPostCreateByActions, getPostFavouritesActions} from "../../../services/post/actions";
import {getPlaceFavouritesActions} from "../../../services/place/actions";
import moment from "moment";
import {ScrollView} from "react-native-gesture-handler";
import ImageTwoColum from "../../image/imageTwoColum";
import PlaceShortSelf from "../../place/shortself";

const User = () => {
    const isFocused = useIsFocused()
    const styles = st();
    const theme = useTheme();
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [userInfo, setUserInfo] = useState<any>([{
        address: '',
        birthOfDate: '',
        level: '',
        fullName: '',
        phoneNumber: '',
        avatarId: '',
        userId: '',
        username: ""
    }]);
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        {key: 'posts', icon: 'file-text-o'},
        // {key: 'places', icon: 'map-marker'},
        {key: 'heart', icon: 'heart'},
    ]);
    const [heartPlaces, setHeartPlaces] = useState<any>([]);
    const [personalPosts, setPersonalPosts] = useState<any>([]);
    const [heartPosts, setHeartPosts] = useState<any>([]);

    useFocusEffect(
        useCallback(() => {
            getInfoUser();
        }, [])
    );
    useEffect(() => {
        if (image) {
            handleEditAvatarUser();
        }
    }, [image]);
    const getInfoUser = async () => {
        const login = await getItemObjectAsyncStorage(KEY_STORAGE.SAVED_INFO);
        console.log(login.id)
        const req = new FormData()
        req.append("userId", login.id)
        console.log(req)
        setLoading(true)
        await dispatch(selfActions(req))
            .then(res => {
                setUserInfo(res?.payload)
                console.log(userInfo)
                getPersonalPosts(req)
                getHeartPosts(req)
                getHeartPlaces(req)
                setLoading(false)
            })
            .catch(err => setLoading(false))

    }
    const getPersonalPosts = async (req) => {
        await dispatch(getPostCreateByActions(req))
            .then(res => {
                // setLoading(false)
                setPersonalPosts(res?.payload)
                console.log(userInfo)
            })
            .catch(err => setLoading(false))
    }
    const getHeartPosts = async (req) => {

        // setLoading(true)
        await dispatch(getPostFavouritesActions(req))
            .then(res => {
                // setLoading(false)
                setHeartPosts(res?.payload)
                console.log(userInfo)
            })
            .catch(err => setLoading(false))
    }
    const getHeartPlaces = async (req) => {

        await dispatch(getPlaceFavouritesActions(req))
            .then(res => {
                // setLoading(false)
                setHeartPlaces(res?.payload)
                console.log(userInfo)
            })
            .catch(err => setLoading(false))
    }
    const handleEditAvatarUser = async () => {
        const imageToUpload = image
        const imageName = imageToUpload?.split('/').pop()
        const imageType = imageToUpload?.split('.').pop()
        console.log(`image/${imageType}`)
        const req = new FormData()
        // @ts-ignore
        image && req.append('image', {
            uri: imageToUpload,
            type: `image/${imageType}`,
            name: imageName
        });
        console.log('formdata', req)
        setLoading(true)
        dispatch(updateAvatarActions(req))
            .then((res) => {
                if (res?.payload) {
                    setImage(null)
                    getInfoUser()
                    setLoading(false)
                    ToastAndroid.show('Cập nhật thành công!', ToastAndroid.SHORT)
                    console.log(res, 'update avatar')
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'update avatar')
            })
            .catch(err => setLoading(false));
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

        toggleModal();
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const viewAvatar = () => {
        toggleModal();
    };

    const renderFavoritePlacesScene = () => (
        <ScrollView style={{ padding: 10}}>
            {heartPlaces ? (
                heartPlaces.map(place => (
                    <TouchableOpacity style={{margin: 10, padding: 10}} key={place?.id}>

                        <PlaceShortSelf place={place}></PlaceShortSelf>
                    </TouchableOpacity>
                ))
            ) : (
                <Text>Bạn chưa yêu thích địa điểm nào</Text>
            )}
        </ScrollView>
    );

    const renderPersonalPostsScene = () => (
        <ImageTwoColum posts={personalPosts}></ImageTwoColum>
    );
    const renderHeartPostsScene = () => (
        <ImageTwoColum posts={heartPosts}></ImageTwoColum>

    );

    const renderTabBar = props => (
        <TabBar
            {...props}
            renderIcon={({route}) => (
                <Icon name={route.icon} size={24} style={styles.tabIcon}/>
            )}
            indicatorStyle={{backgroundColor: theme.tabActive}}
            style={{backgroundColor: theme.backgroundColor}}
            activeColor={theme.tabActive}
            inactiveColor={theme.tabColor}
        />
    );

    return (

        <View style={styles.container}>

            <View style={styles.userInfo}>
                <TouchableOpacity onPress={toggleModal} style={styles.avatarContainer}>
                    {(userInfo) ?
                        <Image
                            style={styles.avatar}
                            source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${userInfo?.avatarId}`}}
                        />
                        :
                        <Image
                            style={styles.avatar}
                            source={require('../../../../assets/images/tabs/user1.png')}
                        />
                    }

                </TouchableOpacity>
                <Modal isVisible={isModalVisible}
                       onBackdropPress={toggleModal}>
                    <View style={styles.modalContent}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate(NAVIGATION_TITLE.IMAGE, userInfo?.avatarId)}
                            style={styles.modalOption}>
                            <Icon name='eye' style={styles.modalOptionText}/>
                            <Text style={styles.modalOptionText}>Xem ảnh đại diện</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pickImage} style={styles.modalOption}>
                            <Icon name='camera' style={styles.modalOptionText}/>
                            <Text style={styles.modalOptionText}>Thay đổi ảnh đại diện</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate(NAVIGATION_TITLE.IMAGE, userInfo?.avatarId)}
                            style={styles.modalOption}>
                            <Icon name='edit' style={styles.modalOptionText}/>
                            <Text style={styles.modalOptionText}>Chỉnh sửa hồ sơ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleModal} style={[styles.modalCancel]}>
                            <Text style={[styles.modalCancel]}>Hủy</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>

                <Text style={styles.userName}>{userInfo?.username}</Text>
                <Text>Tham gia từ {moment(userInfo?.startDate).format("DD - MM - YYYY")}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{userInfo?.totalPost} post
                    | {userInfo?.totalReview} reviews | {userInfo?.totalVisit} visit</Text>
                {/*<Text>{userInfo?.decription}</Text>*/}

            </View>

            {/* Tab view */}
            <TabView
                navigationState={{index, routes}}
                renderScene={SceneMap({
                    // places: renderFavoritePlacesScene,
                    posts: renderPersonalPostsScene,
                    heart: renderHeartPostsScene
                })}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
            <Loading visiable={loading}></Loading>
        </View>
    );
}
export default User