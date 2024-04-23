import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
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
import loading from "../../../../utils/loading/Loading";
import {selfPlaceActions} from "../../../services/place/actions";

const DetailPlace = ({route}) => {
    const styles = st();
    const theme = useTheme();
    const id = route.params;
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([]);
    const [place, setPlace] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    useFocusEffect(
        useCallback(() => {
            getPlace();
        }, [])
    );
    // useEffect(() => {
    //     if (place) {
    //         getDates();
    //     }
    // }, [place]);
    const getPlace = async () => {
        const req = new FormData();
        req.append("id", id);
        console.log("req", req)
        setLoading(true)
        await dispatch(selfPlaceActions(req))
            .then(res => {
                setPlace(res?.payload);
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }
    // const getDates =  () => {
    //     let currentDate = moment(place?.startDate);
    //     const newRoutes = [];
    //     while (currentDate.isSameOrBefore(place?.endDate)) {
    //         newRoutes.push({key: currentDate.format("YYYY-MM-DD"), title: currentDate.format("DD/MM")});
    //         currentDate = currentDate.add(1, 'day');
    //     }
    //     setRoutes(newRoutes);
    // }
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
            tabStyle={{ width: 100 }}
            scrollEnabled={true}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <View style={styles.iconBack}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems: 'flex-start'}}>
                        <Icon name='angle-left' size={24} style={{padding: 10, flex: 1, color: "#fff"}}></Icon>
                    </TouchableOpacity>

                    {/*<TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.UPDATE_SCHEDULE, place)}*/}
                    {/*                  style={{alignItems: 'flex-end'}}>*/}
                    {/*    <Icon name='edit' size={24} style={{padding: 10, color: "#fff"}}></Icon>*/}
                    {/*</TouchableOpacity>*/}

                </View>

                <View style={styles.imageContainer}>
                    <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${place?.imageId}`}}
                           style={styles.image}>
                    </Image>

                </View>
            </View>
            <View style={styles.detail}>
                <Text style={[styles.text, {fontSize: 20, fontWeight: 'bold',}]}>
                    {place?.name}
                </Text>
                <Text style={styles.text}>{place?.description}</Text>
            </View>
            {/*<TabView*/}
            {/*    navigationState={{index, routes: routes}}*/}
            {/*    renderScene={({route}) => (*/}
            {/*        <View>*/}
            {/*            <Text>{route?.key}</Text>*/}
            {/*        </View>*/}
            {/*    )}*/}
            {/*    onIndexChange={setIndex}*/}
            {/*    renderTabBar={renderTabBar}*/}
            {/*    lazy={true}*/}
            {/*/>*/}
            <Loading visiable={loading}></Loading>
        </View>
    );
}
export default DetailPlace;