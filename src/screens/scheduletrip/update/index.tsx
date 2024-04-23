import React, {useCallback, useEffect, useState} from 'react';
import {View, TextInput, Image, TouchableOpacity, Text, ToastAndroid,} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import st from './styles'
import navigation from "../../../navigation";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {ScrollView} from "react-native-gesture-handler";
import {updateScheduleActions} from '../../../services/schedule/actions';
import {NAVIGATION_TITLE} from '../../../constants/navigation';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import Loading from "../../../../utils/loading/Loading";

const UpdateSchedule = ({route}) => {
    const navigation = useNavigation<any>();
    const schedule = route.params;
    const dispatch = useDispatch<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [showPicker1, setShowPicker1] = useState(false);
    const [showPicker2, setShowPicker2] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setName(schedule?.nameSchedule)
            setContent(schedule?.description)
            setStartDate(new Date(schedule?.startDate))
            setEndDate(new Date(schedule?.endDate))
        }, [])
    );
    const styles = st()
    const handleStartDateChange = (event, selectedDate) => {
        setShowPicker1(false);
        if (selectedDate) {
            setStartDate(selectedDate);
        }
    };
    const handleEndDateChange = (event, selectedDate) => {
        setShowPicker2(false);
        if (selectedDate) {
            setEndDate(selectedDate);
        }
    };

    const handleUpdateSchedule = async () => {

        const req = new FormData()
        req.append("id", schedule?.id)
        req.append("nameSchedule", name)
        req.append("startDate", moment(startDate).format('YYYY-MM-DD'))
        req.append("endDate", moment(endDate).format('YYYY-MM-DD'))
        req.append('description', content)
        console.log(req)

        await dispatch(updateScheduleActions(req))
            .then((res) => {
                if (res?.payload) {
                    setLoading(false)
                    ToastAndroid.show('Cập nhật thành công!', ToastAndroid.SHORT)
                    navigation.goBack()
                    console.log(res, 'update schedule')
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'update schedule')
            })
            .catch(err => setLoading(false));
    };

    return (
        <View style={styles.container}>
            <View style={styles.topModal}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Icon name='angle-left' size={24} style={styles.iconBack}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>Chỉnh sửa</Text>
            </View>

            <ScrollView style={styles.modalContainer}>

                <Text style={styles.titleInput}>Đặt tên cho hành trình</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Tên hành trình"
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <Text style={styles.titleInput}>Ngày bắt đầu:</Text>

                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker1(true)}>
                    <Text>{moment(startDate).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>

                <Text style={styles.titleInput}>Ngày kết thúc:</Text>

                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker2(true)}>
                    <Text>{moment(endDate).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>

                <Text style={styles.titleInput}>Một chút chú thích cho hành trình này</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Mô tả"
                    onChangeText={text => setContent(text)}
                    value={content}
                    multiline
                />

                {showPicker2 && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={endDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleEndDateChange}
                    />)}
                {showPicker1 && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={startDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleStartDateChange}
                    />)}

                <TouchableOpacity style={styles.button} onPress={handleUpdateSchedule}>
                    <Text style={styles.buttonText}>Cập nhật</Text>
                </TouchableOpacity>

            </ScrollView>
            <Loading visiable={loading}></Loading>
        </View>

    );
};

export default UpdateSchedule;
