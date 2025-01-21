import {StyleSheet, Text, View} from "react-native";
import {useContext, useRef, useState} from "react";
import Calendar from "../components/Calendar.tsx";
import TodoList from "../components/TodoList.tsx";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Modalize} from "react-native-modalize";
import Button from "../components/Button.tsx";


type StackParam = {
    Edit : { id: string };
    Home: undefined;
    New : undefined;
}

const Mock = [
    { id: BigInt(1), createDate: "2025-01-21", content: "첫 번째 할 일" },
    { id: BigInt(2), createDate: "2025-01-21", content: "두 번째 할 일" },
    { id: BigInt(3), createDate: "2025-01-03", content: "세 번째 할 일" },
    { id: BigInt(4), createDate: "2025-01-04", content: "네 번째 할 일" },
];

const Home = () => {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(formattedToday);
    const [selectedId, setSelectedId] = useState<bigint|null>(null);
    const [todoList, setTodoList] = useState(Mock);
    const navigation = useNavigation<NavigationProp<StackParam>>()
    const modalizeRef = useRef<Modalize>(null)

    const openModal = () => {
        modalizeRef.current?.open();
    };
    const closeModal = () => {
        modalizeRef.current?.close();
    }

    const handleEdit = (id:bigint) => {
        openModal()
        setSelectedId(id);
    };

    const EditLoad = (id:bigint) => {
        console.log("수정 클릭:", id);
        const selectedTodo = Mock.find((item) => item.id === id);
        console.log("findItem :" , selectedTodo)
        navigation.navigate("Edit" , {id:id.toString()})
    }

    const filteredList = todoList.filter((item) => item.createDate === selectedDate);

    const onCreate = () => {
        navigation.navigate("New");
    }

    const onDelete = (id: bigint | null) => {
        if (id === null) return; // ID가 없을 경우 바로 종료
        const updatedList = todoList.filter((item) => item.id !== id); // ID와 다른 항목만 필터링
        setTodoList(updatedList); // 상태 업데이트
        closeModal(); // 모달 닫기
        console.log(`ID ${id}가 삭제되었습니다.`);
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
                    data={filteredList}
                    onPressEdit={handleEdit}
                    onPressItem={handleEdit}
                    onCreateItem={onCreate}
                />
                <Modalize
                    ref={modalizeRef}
                    snapPoint={300}
                    modalHeight={500}
                    >
                    <View style={styles.modalContent}>
                        <View style={styles.gridContainer}>
                            <View style={styles.buttonWrapper}>
                                <Button type={"primary"} text={"수정하기"} onClick={() => { if (selectedId) EditLoad(selectedId) }} />
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button type={"negative"} text={"삭제하기"} onClick={() => onDelete(selectedId)} />
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button type={"finish"} text={"메모"} onClick={() => console.log("완료")} />
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button type={"next"} text={"내일하기"} onClick={closeModal} />
                            </View>
                        </View>
                    </View>
                </Modalize>

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
        paddingTop: '102%' // 캘린더와 리스트 간 간격 확보
    },
    //modal
    modalContent: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap", // 행이 꽉 차면 다음 줄로 이동
        justifyContent: "space-between", // 버튼 간격 조절
        alignItems: "center", // 수직 정렬
        width: "100%", // 가로 너비
        paddingVertical: 30
    },
    buttonWrapper: {
        width: "45%", // 버튼 너비 (2개씩 배치)
        marginVertical: 10, // 버튼 상하 여백
        height: "50%"
    },
});



export default Home;