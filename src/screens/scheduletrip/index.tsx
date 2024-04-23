import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image} from 'react-native';
import st from './styles'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import useTheme from '../../hooks/useTheme'
import VisitCalendar from "../calendar";
import {NAVIGATION_TITLE} from "../../constants/navigation";
import {scheduleSlice} from "../../services/schedule/reducers";
import moment from "moment";
import {getItemObjectAsyncStorage} from "../../../utils/asyncStorage";
import {KEY_STORAGE} from "../../constants/storage";
import {selfActions} from "../../services/user/actions";
import {getMyScheduleActions} from "../../services/schedule/actions";
import {BASE_URL, IMAGE} from "../../constants/api";
import {ScrollView} from "react-native-gesture-handler";
import Loading from "../../../utils/loading/Loading";


const ScheduleTrip = () => {
    const isFocused = useIsFocused()
    const styles = st();
    const theme = useTheme();
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [image, setImage] = useState(null);

    const [listSchedule, setListSchedule] = useState<any>()
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'schedule', title: 'Lên Lịch'},
        {key: 'calendar', title: 'Lịch'},
        {key: 'heart', title: 'Yêu thích'},
    ]);
    const getMySchedule = async () => {
        setLoading(true)
        dispatch(getMyScheduleActions())
            .then(res => {
                setListSchedule(res?.payload)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }

    useEffect(() => {
        getMySchedule();
    }, [isFocused]);

    const renderSchedule = () => (
        <ScrollView style={styles.schedule}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(NAVIGATION_TITLE.ADD_SCHEDULE)}>
                <Text style={styles.buttonText}>Tạo hành trình</Text>
            </TouchableOpacity>
            {listSchedule ? (
                listSchedule?.map(schedule => (
                    <View style={styles.scheduleItem} key = {schedule?.id}>
                        <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_SCHEDULE, schedule)}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${schedule?.imageLabelId}`}}
                                       style={styles.image}/>
                            </View>
                            {!(schedule.startDate == schedule.endDate) ? (
                                <Text>{moment(schedule?.startDate).format("DD/MM/YYYY")} - {moment(schedule?.endDate).format("DD/MM/YYYY")} </Text>
                            ) : (
                                <Text>{moment(schedule?.startDate).format("DD/MM/YYYY")} </Text>
                            )}
                            <Text key={schedule.id} style={styles.nameSchedule}>{schedule?.nameSchedule}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            ) : (
                <Text style={{color: "#ccc", textAlign: 'center'}}>Bạn chưa có hành trình nao</Text>
            )}
        </ScrollView>
    );

    const renderCalendar = () => (
        <View>
            <VisitCalendar></VisitCalendar>
        </View>
    );
    const renderHeartPlace = () => (
        <View>
            <Text>3</Text>

        </View>
    );

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
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#fff"}></StatusBar>
            <Text style={styles.label}>LET'S GO</Text>
            <TabView
                navigationState={{index, routes}}
                renderScene={SceneMap({
                    schedule: renderSchedule,
                    calendar: renderCalendar,
                    heart: renderHeartPlace
                })}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
            <Loading visiable={loading}></Loading>
        </SafeAreaView>
    );
}
export default ScheduleTrip