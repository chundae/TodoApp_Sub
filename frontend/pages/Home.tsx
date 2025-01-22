import {StyleSheet, Text, View} from "react-native";
import {useContext, useEffect, useRef, useState} from "react";
import Calendar from "../components/Calendar.tsx";
import TodoList from "../components/TodoList.tsx";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Modalize} from "react-native-modalize";
import Button from "../components/Button.tsx";
import {useTodoContext} from "../hooks/useTodoContext.tsx";


type StackParam = {
    Edit: { id: string };
    Home: undefined;
    New: undefined;
}


const Home = () => {
    const {state, dispatch} = useTodoContext();
    const navigation = useNavigation<NavigationProp<StackParam>>()
    const modalizeRef = useRef<Modalize>(null)

    const formattedToday = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(formattedToday); //선택 기본날짜를 한국기준으로 설정
    //각일정에 대한 id값
    const [selectedId, setSelectedId] = useState<bigint | null>(null);
    //일정 로딩 목록 로딩을 위한 state


    useEffect(() => {
        console.log("현재 Todo 상태:", state.todos); // 디버깅 로그 추가
    }, [state.todos]);

    const openModal = () => {
        modalizeRef.current?.open();
    };
    const closeModal = () => {
        modalizeRef.current?.close();
    }

    const handleEdit = (id: bigint) => {
        openModal()
        setSelectedId(id);
    };

    const EditLoad = (id: bigint) => {
        // console.log("수정 클릭:", id);
        // const selectedTodo = Mock.find((item) => item.id === id);
        // console.log("findItem :", selectedTodo)
        // navigation.navigate("Edit", {id: id.toString()})
    }

    const filteredList = state.todos.filter((item) => item.createDate === selectedDate);


    const NavNewPage = () => {
        navigation.navigate("New");
    }

    const onDelete = (id: bigint) => {
        dispatch({type: "DELETE",  payload: id});
        closeModal();
        navigation.preload();
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
                    nav={NavNewPage}
                />
                <Modalize
                    ref={modalizeRef}
                    snapPoint={300}
                    modalHeight={500}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.gridContainer}>
                            <View style={styles.buttonWrapper}>
                                <Button type={"primary"} text={"수정하기"} onClick={() => {
                                    if (selectedId) EditLoad(selectedId)
                                }}/>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button type={"negative"} text={"삭제하기"} onClick={() => onDelete(1n)}/>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button type={"finish"} text={"메모"} onClick={() => console.log("완료")}/>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button type={"next"} text={"내일하기"} onClick={closeModal}/>
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