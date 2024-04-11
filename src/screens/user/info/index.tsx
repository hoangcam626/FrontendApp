import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    // Mock data for favorite places and personal posts
    const favoritePlaces = [
        { id: 1, name: 'Favorite Place 1' },
        { id: 2, name: 'Favorite Place 2' },
        // Add more favorite places as needed
    ];

    const personalPosts = [
        { id: 1, content: 'Post 1' },
        { id: 2, content: 'Post 2' },
        // Add more personal posts as needed
    ];
    const heartPost = [
        { id: 1, content: 'Post 1' },
        { id: 2, content: 'Post 2' },
        // Add more personal posts as needed
    ];
    // State to manage tab index
    const [index, setIndex] = useState(0);

    // State to manage routes for tab view
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

    // Render tab bar
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
            {/* <Text>User Screen</Text> */}
            {/* User information */}
            <View style={styles.userInfo}>
                <Image
                    source={require('../../../../assets/images/tabs/vietnam.png')}
                    style={styles.avatar}
                />
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
        </View>
    );

}
export default User