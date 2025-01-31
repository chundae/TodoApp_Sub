import {useState} from "react";
import {StyleSheet, Text} from "react-native";
import DatePicker from "react-native-date-picker";

const TimeType = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return(
        <>
            <Text onPress={() => setOpen(true)} style={styles.DateContainer}>{date.toLocaleTimeString()}</Text>
            <DatePicker
                modal  // 모달 형태로 표시
                open={open}
                date={date}
                mode="time"  // 날짜 선택 모드
                locale="ko"  // 한국어 설정
                onConfirm={(selectedDate) => {
                    setOpen(false);
                    setDate(selectedDate);
                }}
                onCancel={() => setOpen(false)}
            />
        </>
    )
}
const styles = StyleSheet.create({
    DateContainer:{
        backgroundColor: "#74AFD17F",
        color: "#fff",
        borderRadius: 5,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginVertical: 2,
        fontWeight: "bold",


    }
})

export default TimeType;