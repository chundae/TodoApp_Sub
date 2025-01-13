import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import Home from './Home.tsx';

type RootStackParamList = {
    Start: undefined;
    Home: undefined;
}

const Start = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 타입 명시
    return (
        <View style={styles.container}>
            <Text style={styles.title}>안 할거야 ?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text style={styles.buttonText}>시작하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#74AFD1",
        paddingVertical: "10%", // 화면 상하 여백
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: '90%',
        color: "#000",
    },
    buttonContainer: {
        // width: "100%", // 버튼 컨테이너가 화면 전체 폭 차지
        alignItems: "center",
        marginBottom: "18%", // 하단에서 상대적으로 띄움
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#74AFD1",
    },
});

export default Start;