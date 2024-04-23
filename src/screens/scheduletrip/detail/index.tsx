import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import st from './styles'
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch} from "react-redux";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {BASE_URL, IMAGE} from "../../../constants/api";
import moment from "moment/moment";
import {LinearGradient} from 'expo-linear-gradient';
import useTheme from "../../../hooks/useTheme";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {NAVIGATION_TITLE} from "../../../constants/navigation";

const DetailSchedule = ({route}) => {
    const isFocused = useIsFocused()
    const styles = st();
    const theme = useTheme();
    const schedule = route.params;
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        getDates();
    }, [isFocused]);
    const getDates = () => {
        let currentDate = moment(schedule?.startDate);
        const newRoutes = [];
        while (currentDate.isSameOrBefore(schedule?.endDate)) {
            newRoutes.push({key: currentDate.format("YYYY-MM-DD"), title: currentDate.format("DD/MM")});
            currentDate = currentDate.add(1, 'day');
        }
        setRoutes(newRoutes);
    }
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor: theme.tabActive}}
            style={{backgroundColor: theme.backgroundColor}}
            activeColor={theme.tabActive}
            inactiveColor={theme.tabColor}
            labelStyle={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'white',
            }}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <View style={styles.iconBack}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems: 'flex-start'}}>
                        <Icon name='angle-left' size={24} style={{padding: 10, flex: 1, color: "#fff"}}></Icon>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.native(NAVIGATION_TITLE.UPDATE_SCHEDULE, schedule)} style={{alignItems: 'flex-end'}}>
                        <Icon name='edit' size={24} style={{padding: 10, color: "#fff"}}></Icon>
                    </TouchableOpacity>

                </View>

                <View style={styles.imageContainer}>
                    <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${schedule?.imageLabelId}`}}
                           style={styles.image}>
                    </Image>
                    <LinearGradient colors={['transparent', theme.colorBlue1]} start={{x: 0.5, y: 0.5}}
                                    style={styles.gradient}>
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.detail}>
                {!(schedule.startDate == schedule.endDate) ? (
                    <Text
                        style={[styles.text, {fontSize: 12}]}>{moment(schedule?.startDate).format("DD/MM/YYYY")} - {moment(schedule?.endDate).format("DD/MM/YYYY")} </Text>
                ) : (
                    <Text
                        style={[styles.text, {fontSize: 12}]}>{moment(schedule?.startDate).format("DD/MM/YYYY")} </Text>
                )}
                <Text key={schedule.id} style={[styles.text, {
                    fontSize: 20,
                    fontWeight: 'bold',
                }]}>{schedule?.nameSchedule}</Text>
                <Text style={styles.text}>{schedule?.description}</Text>
            </View>
            <TabView
                navigationState={{index, routes: routes}}
                renderScene={({route}) => (
                    <View>
                        <Text>{route?.key}</Text>
                    </View>
                )}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View>
    );
}
export default DetailSchedule