import {StyleSheet, Text, View} from "react-native";
import {useContext, useState} from "react";
import Calendar from "../components/Calendar.tsx";
import TodoList from "../components/TodoList.tsx";
import {NavigationProp, useNavigation} from "@react-navigation/native";

type StackParam = {
    Edit : { id: string };
    Home: undefined;
}

const Mock = [
    { id: BigInt(1), createDate: "2025-01-01", content: "첫 번째 할 일" },
    { id: BigInt(2), createDate: "2025-01-02", content: "두 번째 할 일" },
    { id: BigInt(3), createDate: "2025-01-03", content: "세 번째 할 일" },
    { id: BigInt(4), createDate: "2025-01-04", content: "네 번째 할 일" },
];


const handleItem = (id: bigint) => {
    console.log("아이템 클릭:", id);
    console.log("날짜 및 일정 : ", loadItem(id) )
};

const loadItem = (id:bigint) => {
    const item = Mock.find((item) => item.id === id);
    return item ? item: "일정을 찾을수 없음";
};


const Home = () => {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(formattedToday);
    const navigation = useNavigation<NavigationProp<StackParam>>()

    const handleEdit = (id: bigint) => {
        console.log("수정 클릭:", id);
        const selectedTodo = Mock.find((item) => item.id === id);
        console.log("findItem :" , selectedTodo)
        navigation.navigate("Edit", { id: id.toString() });
    };

    return (
        <View style={styles.container}>
            {/* 캘린더 섹션 */}
            <View style={styles.calendarContainer}>
                <Calendar
                    current={formattedToday}
                    onDayPress={(day) => {
                        setSelectedDate(day.dateString);
                        console.log('selected Day : ', day);
                    }}
                    markedDates={{
                        [selectedDate]: {
                            selected: true,
                            selectedColor: '#74AFD1',
                        },
                    }}
                    theme={{
                        todayTextColor: '#74AFD1',
                        arrowColor: '#74AFD1',
                        textDayFontWeight: '600',
                    }}
                />
            </View>

            {/* 리스트 섹션 */}
            <View style={styles.listContainer}>
                <TodoList
                    data={Mock}
                    onPressEdit={handleEdit}
                    onPressItem={handleItem}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // 전체 배경 색상
    },
    calendarContainer: {
        flex: 0, // 캘린더 높이를 고정
        width: '100%', // 화면 너비에 맞게 설정
        paddingVertical: 10, // 캘린더 상하 여백
        borderBottomColor: '#e0e0e0',
    },
    listContainer: {
        flex: 1, // 나머지 공간을 리스트가 차지
        width: '100%', // 리스트 너비를 화면에 맞춤
        paddingHorizontal: 10, // 리스트 좌우 여백
        paddingTop: '105%' // 캘린더와 리스트 간 간격 확보
    },
});



export default Home;