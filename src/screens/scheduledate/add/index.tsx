import React, {useCallback, useEffect, useState} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text, ToastAndroid,} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from "react-native-vector-icons/FontAwesome";
import st from './styles'
import navigation from "../../../navigation";
import {useFocusEffect, useIsFocused, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {createPostActions} from "../../../services/post/actions";
import {ScrollView} from "react-native-gesture-handler";
import {createScheduleActions} from '../../../services/schedule/actions';
import {NAVIGATION_TITLE} from '../../../constants/navigation';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import Loading from "../../../../utils/loading/Loading";
import {round} from "react-native-reanimated-carousel/lib/typescript/utils/log";
import PlaceShortSelf from "../../place/shortself";
import SearchPlaceModal from "../../place/search";
import {createPlaceScheduleActions} from "../../../services/placeschedule/actions";

const AddPlaceSchedule = ({route}) => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch<any>();
    const schedule = route.params.schedule;
    const [loading, setLoading] = useState<boolean>(false)
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [endTime, setEndTime] = useState<Date>(new Date());
    const [showPicker1, setShowPicker1] = useState<boolean>(false);
    const [showPicker2, setShowPicker2] = useState<boolean>(false);
    const [showPicker3, setShowPicker3] = useState<boolean>(false);
    const [scheduleDate, setScheduleDate] = useState<Date>(new Date())
    const [transport, setTransport] = useState('');
    const [place, setPlace] = useState<any>()
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const styles = st()
    const handleStartDateChange = (event, selectedTime) => {
        setShowPicker1(false);
        if (selectedTime) {
            setStartTime(selectedTime);
        }
    };
    const handleEndDateChange = (event, selectedTime) => {
        setShowPicker2(false);
        if (selectedTime) {
            setEndTime(selectedTime);
        }
    };
    const handleDateChange = (event, selectedTime) => {
        setShowPicker3(false);
        if (selectedTime) {
            setScheduleDate(selectedTime);
        }
    };
    const searchPlaces = (place) => {
        setPlace(place);
    };
    useEffect(() => {
        if (route.params.place) {
            setPlace(route.params.place)
        }
    }, [route.params.place]);
    useEffect(() => {
        if (route.params.scheduleDate) {
            setScheduleDate(new Date(route.params.scheduleDate))
        }
    }, [route.params.scheduleDate]);

    const handleCreateSchedule = async () => {

        const req = new FormData()

        req.append("scheduleId", schedule?.id)
        req.append("scheduleDate", moment(scheduleDate).format('YYYY-MM-DD'))
        req.append("placeId", place?.id)
        req.append("scheduleBeginTime", moment(startTime).format('HH:mm:ss'))
        req.append("scheduleFinishTime", moment(endTime).format('HH:mm:ss'))
        req.append('description', description)
        req.append('transport', transport)

        console.log(req)
        // setLoading(true)
        await dispatch(createPlaceScheduleActions(req))
            .then((res) => {
                if (res?.payload) {
                    setLoading(false)
                    ToastAndroid.show('Tạo thành công!', ToastAndroid.SHORT)
                    navigation.goBack()
                    console.log(res, 'create schedule')
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'create post')
            })
            .catch(err => setLoading(false));
    };

    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Icon name='angle-left' size={24} style={styles.iconBack}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>{schedule?.nameSchedule}</Text>
            </View>

            <ScrollView style={styles.modalContainer}>



                <Text style={[styles.titleInput]}> Chọn địa điểm</Text>
                <TouchableOpacity style={styles.descriptionInput} onPress={() => setModalVisible(true)}>
                    {place ? (
                        <View style={{padding: 10}}>

                            <PlaceShortSelf place={place}></PlaceShortSelf>
                        </View>
                    ) : (
                        <Text> </Text>
                    )}
                </TouchableOpacity>
                <Text style={styles.titleInput}>Ngày dự kiến</Text>
                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker3(true)}>
                    <Text>{moment(scheduleDate).format('DD - MM - YYYY')}</Text>
                </TouchableOpacity>
                <SearchPlaceModal visible={modalVisible}
                                  onClose={() => setModalVisible(false)}
                                  onSelectPlace={searchPlaces}>
                </SearchPlaceModal>
                <Text style={styles.titleInput}>Bắt đầu:</Text>
                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker1(true)}>
                    <Text>{moment(startTime).format('HH:mm')}</Text>
                </TouchableOpacity>
                <Text style={styles.titleInput}>Đến</Text>
                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker2(true)}>
                    <Text>{moment(endTime).format('HH:mm')}</Text>
                </TouchableOpacity>
                <Text style={styles.titleInput}>Phương tiện di chuyển</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="vd: đi bộ, máy bay,.."
                    onChangeText={text => setTransport(text)}
                    value={transport}
                    multiline
                />
                <Text style={styles.titleInput}>Thuyết minh chi tiết cho khung giờ này</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Mô tả"
                    onChangeText={text => setDescription(text)}
                    value={description}
                    multiline
                />

                {showPicker2 && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={endTime}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleEndDateChange}
                    />)}
                {showPicker3 && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={scheduleDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChange}
                    />)}
                {showPicker1 && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={startTime}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleStartDateChange}
                    />)}

                <TouchableOpacity style={styles.button} onPress={handleCreateSchedule}>
                    <Text style={styles.buttonText}>Tạo </Text>
                </TouchableOpacity>
            </ScrollView>
            <Loading visiable={loading}></Loading>
        </View>

    );
};

export default AddPlaceSchedule;
