import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Dữ liệu ví dụ về các địa điểm đã thăm quan
const visitedPlacesData = [
  { id: 1, name: 'Địa điểm A', time: '2024-04-10' },
  { id: 2, name: 'Địa điểm B', time: '2024-04-15' },
  { id: 3, name: 'Địa điểm C', time: '2024-04-15' },
  // Thêm dữ liệu cho các địa điểm khác nếu cần
];

// Thiết lập ngôn ngữ cho lịch (ở đây là Tiếng Việt)
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

const VisitCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  // Hàm xử lý sự kiện khi chọn một ngày trên lịch
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  // Lọc danh sách các địa điểm đã thăm quan trong ngày đã chọn
  const visitedPlaces = visitedPlacesData.filter(place => place.time === selectedDate);

  return (
    <View>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' }
        }}
      />
      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
        Địa điểm đã thăm quan ngày {selectedDate}:
      </Text>
      <View>
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
