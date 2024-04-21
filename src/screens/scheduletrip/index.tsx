import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import st from './styles'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import useTheme from '../../hooks/useTheme'


const ScheduleTrip = () => {
    const isFocused = useIsFocused()
    const styles = st();
    const theme = useTheme();
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [image, setImage] = useState(null);
    
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'schedule', title: 'Lên Lịch' },
        { key: 'calendar', title: 'Lịch của bạn' },
        { key: 'heart', title: 'Yêu thích' },
    ]);

    const renderFavoritePlacesScene = () => (
        <View>

        </View>
    );

    const renderPersonalPostsScene = () => (
        <View>

        </View>
    );
    const renderHeartPostsScene = () => (
        <View>

        </View>
    );

    const renderTabBar = props => (
        <TabBar
            {...props}
            renderTabBarItem={({ route }) => (
                <Text >{route.title}</Text>
            )}
            indicatorStyle={{ backgroundColor: theme.tabActive }}
            style={{ backgroundColor: theme.backgroundColor }}
            activeColor={theme.tabActive}
            inactiveColor={theme.tabColor}
        />
    );
    return (
        <View style={styles.container}>
            <Text>Những chuyến đi</Text>
            <TabView
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                    schedule: renderFavoritePlacesScene,
                    calendar: renderPersonalPostsScene,
                    heart: renderHeartPostsScene
                })}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View>
    );
}
export default ScheduleTrip