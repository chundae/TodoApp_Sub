import {View, Text, StyleSheet} from "react-native";
import React, {useState} from 'react';
import { Calendar as RNCalendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales['en'] = {
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: "Today"
};

LocaleConfig.defaultLocale = 'en'; //지역

interface CalendarProps {
    onDayPress?: (day: any) => void; //날짜 선택
    markedDates?: { [key: string]: any}; //표시할 날짜
    current?: string; //초기 표시 날짜
    theme?: object; //테마
}
const Calendar = ({onDayPress, markedDates={}, current, theme}: CalendarProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.calendarSection}>
                <RNCalendar
                    current={current}
                    onDayPress={onDayPress}
                    markedDates={markedDates}
                    theme={{
                        textDayFontWeight: 'bold', //날짜 굵기
                        textDayHeaderFontWeight: "600", // 요일 헤더 글자 굵기
                        textMonthFontWeight: "bold", // 월 글자 굵기
                        textMonthFontFamily: "Arial", //폰트

                        arrowColor: '#74AFD1', //좌우 화살표 색상
                        selectedDayBackgroundColor: 'orange',
                        selectedDayTextColor: 'white',

                        ...theme, // 외부에서 전달받은 테마를 추가로 병합
                    }}
                    style={styles.calendar}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    calendarSection: {
        paddingTop: 65,
        paddingBottom: 15,
        paddingHorizontal: 20,
    },
    calendar: {
        height: 340, // 캘린더 높이
        borderBottomWidth: 2,
        borderBottomColor: "rgb(236, 236, 236)",
    },
});

export default Calendar;