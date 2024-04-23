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

const AddSchedule = () => {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [showPicker1, setShowPicker1] = useState(false);
    const [showPicker2, setShowPicker2] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setImage(null)
            setContent('')
        }, [])
    );
    const styles = st()
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
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

    const handleCreateSchedule = async () => {

        const req = new FormData()
        const imageToUpload = image
        const imageName = imageToUpload?.split('/').pop()
        const imageType = imageToUpload?.split('.').pop()
        console.log(`image/${imageType}`)
        // @ts-ignore
        image && req.append('imageLabel', {
            uri: imageToUpload,
            type: `image/${imageType}`,
            name: imageName
        });
        req.append("nameSchedule", name)
        req.append("startDate", moment(startDate).format('YYYY-MM-DD'))
        req.append("endDate", moment(endDate).format('YYYY-MM-DD'))
        req.append('description', content)
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
                <Text style={styles.title}>Hành trình mới</Text>
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
                <Text style={styles.titleInput}>Chọn ảnh nền cho hành trình mới</Text>
                <TouchableOpacity onPress={pickImage}>

                    {image ? (
                        <View style={styles.imagePicker}>
                            <Image source={{uri: image}} style={styles.image}/>
                        </View>
                    ) : (
                        <View style={styles.descriptionInput}>

                            <Icon name='camera' size={50}></Icon>
                        </View>
                    )}
                </TouchableOpacity>
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

                <TouchableOpacity style={styles.button} onPress={handleCreateSchedule}>
                    <Text style={styles.buttonText}>Tạo </Text>
                </TouchableOpacity>
            </ScrollView>
            <Loading visiable={loading}></Loading>
        </View>

    );
};

export default AddSchedule;
