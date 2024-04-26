import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image} from 'react-native';
import st from './styles'
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
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
import Icon from "react-native-vector-icons/FontAwesome";
import PlaceShortSelf from "../place/shortself";
import {getScheduleOnDateActions} from "../../services/placeschedule/actions";
import AvatarWithUsername from "../user/shortinfo";
import LikeComment from "../like/likeComment";


const ScheduleDate = ({date, schedule}) => {
    const styles = st();
    const theme = useTheme();
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [image, setImage] = useState(null);

    const [listSchedule, setListSchedule] = useState<any>()
    const [index, setIndex] = useState(0);
    const [scheduleTime, setScheduleTime] = useState<any>([])
    const getScheduleOnDate = async () => {
        setLoading(true)
        const req = new FormData()
        req.append('scheduleId', schedule?.id)
        req.append('date', date)
        await dispatch(getScheduleOnDateActions(req))
            .then(res => {
                setScheduleTime(res?.payload)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }

    useFocusEffect(
        useCallback(() => {
            getScheduleOnDate();
        }, [])
    );

    const renderSchedule = () => (
        <ScrollView style={styles.schedule}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(NAVIGATION_TITLE.ADD_SCHEDULE)}>
                <Text style={styles.buttonText}>Tạo hành trình</Text>
            </TouchableOpacity>
            {scheduleTime ? (
                scheduleTime?.map(time => (
                    <View style={styles.scheduleItem} key={scheduleTime?.id}>
                        <Text>{time?.scheduleBeginTime}</Text>
                        <View>

                            <TouchableOpacity
                                onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_SCHEDULE, time?.id)}>
                                <PlaceShortSelf place={time?.place}></PlaceShortSelf>
                            </TouchableOpacity>
                            <Text>{time?.transport}</Text>
                            <Text>{time?.description}</Text>
                            <Text>{moment(time?.scheduleFinishTime).format("HH:mm")} </Text>

                        </View>
                    </View>
                ))
            ) : (
                <Text style={{color: "#ccc", textAlign: 'center'}}>Bạn chưa có hành trình nao</Text>
            )}
        </ScrollView>
    );



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#fff"}></StatusBar>
            <ScrollView style={styles.schedule}>


                {scheduleTime ? (
                    scheduleTime?.map(time => (
                        <View style={styles.scheduleItem} key={scheduleTime?.id}>
                            <Text>{time?.scheduleBeginTime} </Text>
                            <View
                                style={{padding: 10, margin: 10, borderStyle: 'dashed', borderLeftWidth: 1, borderColor: 'gray'}}>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL_SCHEDULE, time?.id)}>
                                    <PlaceShortSelf place={time?.place}></PlaceShortSelf>
                                </TouchableOpacity>
                                <Text>Di chuyen: {time?.transport}</Text>
                                <Text>Note: {time?.description}</Text>

                            </View>
                            <Text>{time?.scheduleFinishTime} </Text>
                        </View>
                    ))
                ) : (
                    <Text style={{color: "#ccc", textAlign: 'center'}}>Bạn chưa có hành trình nao</Text>
                )}
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate(NAVIGATION_TITLE.ADD_DATE_SCHEDULE, {schedule: schedule, scheduleDate: date})}>

                    <Text style={styles.buttonText}>LET'S GO</Text>
                </TouchableOpacity>
            </ScrollView>
            <Loading visiable={loading}></Loading>
        </SafeAreaView>
    );
}
export default ScheduleDate