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
import {updateActions} from "../../../services/user/actions";
import {BASE_URL, IMAGE} from "../../../constants/api";

const UpdateInfo = ({route}) => {
    const navigation = useNavigation<any>();
    const info = route.params;
    const dispatch = useDispatch<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [content, setContent] = useState('');
    const [fullname, setFullName] = useState('');
    const [birthDay, setBirthDay] = useState<Date>(new Date());
    const [showPicker1, setShowPicker1] = useState(false);
    const [adddress, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUserName] = useState('');
    const [decription, setDecription] = useState('');
    useFocusEffect(
        useCallback(() => {
            setUserName(info?.username)
            setDecription( info?.description)
            setBirthDay(info?.birthOfDate)
            setFullName(info?.fullName)
            setAddress(info?.address)
            setPhoneNumber(info?.phoneNumber)
        }, [])
    );
    const styles = st()
    const handleStartDateChange = (event, selectedDate) => {
        setShowPicker1(false);
        if (selectedDate) {
            setBirthDay(selectedDate);
        }
    };

    const handleUpdateSchedule = async () => {

        const req = new FormData()
        req.append("userId", info?.userId)
        req.append("username", username)
        req.append("fullName", fullname)
        req.append("phoneNumber", phoneNumber)
        req.append("address", adddress)
        req.append("description", decription)
        req.append("birthOfDate", moment(birthDay).format('YYYY-MM-DD'))

        console.log(req)

        await dispatch(updateActions(req))
            .then((res) => {
                if (res?.payload) {
                    setLoading(false)
                    ToastAndroid.show('Cập nhật thành công!', ToastAndroid.SHORT)
                    navigation.goBack()
                    console.log(res, 'update info')
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'update info')
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
            <Image
                style={styles.avatar}
                source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${info?.avatarId}`}}
            />
            :
            <Image
                style={styles.avatar}
                source={require('../../../../assets/images/tabs/user1.png')}
            />

            <ScrollView style={styles.modalContainer}>

                <Text style={styles.titleInput}>Họ tên</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Họ tên"
                    onChangeText={text => setFullName(text)}
                    value={fullname}
                />
                <Text style={styles.titleInput}>Địa chỉ</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Địa chỉ"
                    onChangeText={text => setFullName(text)}
                    value={adddress}
                />
                <Text style={styles.titleInput}>Ngày sinh:</Text>

                <TouchableOpacity style={styles.descriptionInput} onPress={() => setShowPicker1(true)}>
                    <Text>{moment(birthDay).format('DD/MM/YYYY')}</Text>
                </TouchableOpacity>

                <Text style={styles.titleInput}>Một chút chú thích ve ban</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Mô tả"
                    onChangeText={text => setDecription(text)}
                    value={decription}
                    multiline
                />
                {showPicker1 && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={birthDay}
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

export default UpdateInfo;
