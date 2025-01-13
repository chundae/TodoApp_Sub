import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import TodoItem from "./TodoItem.tsx";
import Button from "./Button.tsx";

interface ListProps {
    data: {
        id: bigint;
        createDate: string;
        content: string;
    }[];
    onPressEdit: (id: bigint) => void; // 수정 버튼 클릭 핸들러
    onPressItem: (id: bigint) => void; // 아이템 클릭 핸들러
}
const handler = () => {
    console.log("button click");
}

const TodoList = ({ data, onPressEdit, onPressItem }: ListProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    type={"primary"}
                    text={"카테고리"}
                    onClick={handler}
                />
                <Button text={"하루마무리"} type={"none"} onClick={handler}/>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TodoItem
                        id={item.id}
                        createDate={item.createDate}
                        content={item.content}
                        onPressEdit={onPressEdit}
                        onPressItem={onPressItem}
                    />
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
        paddingTop: 20,
        width:'100%'

    },
    listItem:{
        borderBottomWidth: 1,
        borderBottomColor: "#d8d8d8",
    },
    separator: {
        height: 1, // 리스트 아이템 간격
        backgroundColor: "#d8d8d8", // 밑줄 색상
        marginVertical: 3, // 위아래 간격
        marginHorizontal: 4
    },
    buttonContainer: {
        flexDirection: "row", // 좌우로 버튼 배치
        justifyContent: "space-between", // 양쪽 끝으로 버튼 정렬
        alignItems: "center", // 세로 중앙 정렬
        paddingHorizontal: 20, //좌우 여백
        backgroundColor: "#ffffff", // 배경색 추가
        borderBottomColor: "#e0e0e0",
    },
});

export default TodoList;