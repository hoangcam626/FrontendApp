import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { NAVIGATION_TITLE } from '../../../constants/navigation';
import { useDispatch } from 'react-redux';
import st from './styles'
import Loading from '../../../../utils/loading/Loading';
import Toast from '../../../../utils/toast';
import useTheme from '../../../hooks/useTheme'

const User = () => {
    const styles = st();
    const theme = useTheme();
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()

    const [loading, setLoading] = useState<boolean>(false)
    const [avatar, setAvatar] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.assets[0].uri);
        }
        toggleModal();

    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const viewAvatar = () => {

        toggleModal();

    };

    const favoritePlaces = [
        { id: 1, name: 'Favorite Place 1' },
        { id: 2, name: 'Favorite Place 2' },
    ];

    const personalPosts = [
        { id: 1, content: 'Post 1' },
        { id: 2, content: 'Post 2' },
    ];
    const heartPost = [
        { id: 1, content: 'Post 1' },
        { id: 2, content: 'Post 2' },
    ];
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'posts', icon: 'file-text-o' },
        { key: 'places', icon: 'map-marker' },
        { key: 'heart', icon: 'heart' },
    ]);

    // Render favorite places scene
    const renderFavoritePlacesScene = () => (
        <View style={styles.scene}>
            {favoritePlaces.map(place => (
                <Text key={place.id}>{place.name}</Text>
            ))}
        </View>
    );

    // Render personal posts scene
    const renderPersonalPostsScene = () => (
        <View style={styles.scene}>
            {personalPosts.map(post => (
                <Text key={post.id}>{post.content}</Text>
            ))}
        </View>
    );
    const renderHeartPostsScene = () => (
        <View style={styles.scene}>
            {personalPosts.map(post => (
                <Text key={post.id}>{post.content}</Text>
            ))}
        </View>
    );

    const renderTabBar = props => (
        <TabBar
            {...props}
            renderIcon={({ route }) => (
                <Icon name={route.icon} size={24} style={styles.tabIcon} />
            )}
            indicatorStyle={{ backgroundColor: theme.tabActive }}
            style={{ backgroundColor: theme.backgroundColor }}
            activeColor={theme.tabActive}
            inactiveColor={theme.tabColor}
        />
    );

    return (

        <View style={styles.container}>

            <View style={styles.userInfo}>
                <TouchableOpacity onPress={toggleModal} style={styles.avatarContainer}>
                    <Image
                        source={require('../../../../assets/VN.jpg')}

                        style={styles.avatar}
                    />
                </TouchableOpacity>
                <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={viewAvatar} style={styles.modalOption}>
                            <Icon name='eye' style={styles.modalOptionText} />
                            <Text style={styles.modalOptionText}>Xem ảnh đại diện</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pickImage} style={styles.modalOption}>
                            <Icon name='camera' style={styles.modalOptionText} />

                            <Text style={styles.modalOptionText}>Thay đổi ảnh đại diện</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal} style={[styles.modalCancel]}>
                            <Text style={[styles.modalCancel]}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Text style={styles.userName}>User Name</Text>
                <Text>asdf</Text>
                <Text>asdf</Text>
                <Text>asdf</Text>

            </View>

            {/* Tab view */}
            <TabView
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                    places: renderFavoritePlacesScene,
                    posts: renderPersonalPostsScene,
                    heart: renderHeartPostsScene
                })}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View >
    );

}
export default User