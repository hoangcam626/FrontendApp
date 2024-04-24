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

const AddPlaceSchedule = ({schedule, scheduleDate, placeId}) => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch<any>();

    const [loading, setLoading] = useState<boolean>(false)
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [endTime, setEndTime] = useState<Date>(new Date());
    const [showPicker1, setShowPicker1] = useState(false);
    const [showPicker2, setShowPicker2] = useState(false);
    const [transport, setTransport] = useState('');
    // const [placeId, setPlaceId] = useState<number>()
    // useFocusEffect(
    //     useCallback(() => {
    //         setImage(null)
    //         setContent('')
    //     }, [])
    // );
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

    const handleCreateSchedule = async () => {

        const req = new FormData()


        req.append("scheduleId", schedule?.id)
        req.append("scheduleDate", scheduleDate)
        req.append("placeId", placeId)
        req.append("startTime", moment(startTime).format('YYYY-MM-DD'))
        req.append("endTime", moment(endTime).format('YYYY-MM-DD'))
        req.append('description', description)
        console.log(req)
        setLoading(true)
        await dispatch(createScheduleActions(req))
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

                <Text style={styles.titleInput}>Ngay {scheduleDate}</Text>
                {/*<TextInput*/}
                {/*    style={styles.descriptionInput}*/}
                {/*    placeholder="Tên hành trình"*/}
                {/*    onChangeText={text => setName(text)}*/}
                {/*    value={name}*/}
                {/*/>*/}
                <Text style={styles.titleInput}>Bắt đầu:</Text>
                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker1(true)}>
                    <Text>{moment(startTime).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>
                <Text style={styles.titleInput}>Đến</Text>
                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker2(true)}>
                    <Text>{moment(endTime).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>
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
