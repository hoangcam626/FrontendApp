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
import moment, {now} from "moment";
import Loading from "../../../../utils/loading/Loading";
import {updateActions} from "../../../services/user/actions";
import {BASE_URL, IMAGE} from "../../../constants/api";

const UpdateInfo = ({route}) => {
    const navigation = useNavigation<any>();
    const info = route.params;
    const dispatch = useDispatch<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [content, setContent] = useState('');
    const [fullName, setFullName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [showPicker1, setShowPicker1] = useState(false);
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUserName] = useState('');
    const [description, setDescription] = useState('');
    useFocusEffect(
        useCallback(() => {
            setUserName(info?.username)
            setDescription(info?.description)
            if (info?.birthOfDate) {
                setBirthDay(info?.birthOfDate)
            }
            if (info?.fullName) {
                setFullName(info?.fullName)
            }
            if (info?.address) {
                setAddress(info?.address)
            }
            if (info?.phoneNumber) {
                setPhoneNumber(info?.phoneNumber)
            }
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
        if (fullName) {
            req.append("fullName", fullName)
        }
        if (phoneNumber) {
            req.append("phoneNumber", phoneNumber)
        }
        if (address) {
            req.append("address", address)
        }
        if (description) {
            req.append("description", description)
        }
        if (birthDay) {
            req.append("birthOfDate", moment(birthDay).format('YYYY-MM-DD'))
        }

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
            <TouchableOpacity style={styles.avatarContainer}>
                {(info) ?
                    <Image
                        style={styles.avatar}
                        source={{uri: `${BASE_URL}${IMAGE.RESOURCE}${info?.avatarId}`}}
                    />
                    :
                    <Image
                        style={styles.avatar}
                        source={require('../../../../assets/images/tabs/user1.png')}
                    />
                }
                <TextInput style={{fontWeight: 'bold'}}
                    // placeholder="Họ tên"
                           onChangeText={text => setUserName(text)}
                           value={username}
                />
            </TouchableOpacity>

            {/*:*/}
            {/*<Image*/}
            {/*    style={styles.avatar}*/}
            {/*    source={require('../../../../assets/images/tabs/user1.png')}*/}
            {/*/>*/}
            <Text style={styles.note}>Các thông tin đều không bắt buộc. Hãy nhập thông tin mà bạn muốn chia sẻ ở trang
                cá nhân.</Text>

            <ScrollView style={styles.modalContainer}>

                <Text style={styles.titleInput}>Họ tên</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Họ tên"
                    onChangeText={text => setFullName(text)}
                    value={fullName}
                />
                <Text style={styles.titleInput}>Địa chỉ</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Địa chỉ"
                    onChangeText={text => setAddress(text)}
                    value={address}
                />
                <Text style={styles.titleInput}>SĐT liên lạc</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="SĐT"
                    onChangeText={text => setPhoneNumber(text)}
                    value={phoneNumber}
                />

                <Text style={styles.titleInput}>Ngày sinh</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="mm/dd/yyyy"
                    onChangeText={text => setBirthDay(text)}
                    value={birthDay}
                />
                {/*</TouchableOpacity>*/}


                <Text style={styles.titleInput}>Một chút chú thích về bạn</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Mô tả"
                    onChangeText={text => setDescription(text)}
                    value={description}
                    multiline
                />

                <TouchableOpacity style={styles.button} onPress={handleUpdateSchedule}>
                    <Text style={styles.buttonText}>Cập nhật</Text>
                </TouchableOpacity>

            </ScrollView>
            <Loading visiable={loading}></Loading>
        </View>

    );
};

export default UpdateInfo;
