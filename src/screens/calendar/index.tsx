import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import st from "./styles"

const VisitCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const styles = st()
    const visitedPlacesData = [
        {id: 1, name: 'Địa điểm A', time: '2024-04-10'},
        {id: 2, name: 'Địa điểm B', time: '2024-04-15'},
        {id: 3, name: 'Địa điểm C', time: '2024-04-15'},
    ];

    LocaleConfig.locales['vi'] = {
        monthNames: [
            'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
            'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
        ],
        monthNamesShort: ['Th.1', 'Th.2', 'Th.3', 'Th.4', 'Th.5', 'Th.6', 'Th.7', 'Th.8', 'Th.9', 'Th.10', 'Th.11', 'Th.12'],
        dayNames: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
        dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
    };

    LocaleConfig.defaultLocale = 'vi';
    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const visitedPlaces = visitedPlacesData.filter(place => place.time === selectedDate);

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                    [selectedDate]: {selected: true, selectedColor: 'blue'}
                }}
            />
            <View style={styles.detailContainer}>
                <Text style={styles.detail}>
                    Địa điểm đã thăm quan ngày {selectedDate}:
                </Text>
                {visitedPlaces.length > 0 ? (
                    visitedPlaces.map(place => (
                        <View key={place.id}>
                            <Text>{place.name}</Text>
                        </View>
                    ))
                ) : (
                    <Text>Không có địa điểm nào đã thăm quan trong ngày này.</Text>
                )}
            </View>
        </View>
    );
};

export default VisitCalendar;
