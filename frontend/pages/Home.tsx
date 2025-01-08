import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import Calendar from "../components/Calendar.tsx";


const Home = () => {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(formattedToday);

    const handler = () => {
        console.log("button click");
    }

    return (
        <View style={styles.container}>

            <Calendar
                current={formattedToday}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                    console.log('selected Day : ', day);
                }}
                markedDates={{
                    [selectedDate] : {
                        selected: true,
                        selectedColor: '#74AFD1',
                    },
                }}
                theme={{
                    todayTextColor: '#74AFD1',
                    arrowColor: '#74AFD1',
                    textDayFontWeight: "600",
                }}
                />
            <Text style={styles.text}>Selected Date : {selectedDate}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text:{
        flex:1
    }
});



export default Home;