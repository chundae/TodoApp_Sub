import {useState} from "react";
import {StyleSheet, Text} from "react-native";
import DatePicker from "react-native-date-picker";

interface DateProps {
    value?: string;
    onChange?: (text:string) => void;
}

const DateType = ({value, onChange} : DateProps) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return(
        <>
            <Text onPress={() => setOpen(true)} style={styles.DateContainer}>{date.toLocaleDateString()}</Text>
            <DatePicker
                title={"Text"}
                modal  // 모달 형태로 표시
                open={open}
                date={date}
                mode="date"  // 날짜 선택 모드
                minimumDate={new Date(2024, 0, 1)} // 2024년 1월 1일 이후만 선택 가능
                maximumDate={new Date(2025, 12, 31)} // 2025년 12월 31일 이전만 선택 가능
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

export default DateType;