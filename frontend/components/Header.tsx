import { ReactNode } from "react";
import {StyleSheet, View} from "react-native";

interface HeaderProps{
    leftChild?: ReactNode;
    rightChild?: ReactNode;
}

const Header = ({leftChild, rightChild} : HeaderProps) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>{leftChild}</View>
            <View style={styles.headerRight}>{rightChild}</View>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        position: "absolute", // 절대 위치 지정
        top: 60, // 최상단에서 60px 떨어짐
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30, // 좌우 간격
        backgroundColor: "#f8f9fa", // 배경색 추가
    },
    headerLeft: {
        alignItems: "flex-start", // 왼쪽 정렬
    },
    headerRight: {
        alignItems: "flex-end", // 오른쪽 정렬
    },
});