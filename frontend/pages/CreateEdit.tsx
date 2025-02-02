import {NavigationProp, useNavigation, RouteProp} from "@react-navigation/native";
import {StyleSheet, View, Button, Text} from "react-native";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {useTodoContext} from "../hooks/useTodoContext.tsx";
import ListItem from "../components/ListItem.tsx";
import TodoItem from "../components/TodoItem.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type PageParam = {
    Home: undefined;
    CreateEdit: { mode: "new" | "edit"; id?: string };
};

interface TodoItem {
    id: bigint;
    createDate: string;
    content: string;
}

const CreateEdit = ({route}: { route: RouteProp<PageParam, "CreateEdit"> }) => {
    const navigation = useNavigation<NavigationProp<PageParam>>();
    const {state, dispatch} = useTodoContext();
    //현재 모드 (Create, edit) 및 기존 Todo loading
    const {mode, id} = route.params ?? {mode: "new", id: null};

    const [todoData, setTodoData] = useState({
        id: BigInt(0),
        createDate: "",
        content: "",
    });

    useEffect(() => {
        if (mode === "edit" && id) {
            const foundTodo = state.todos.find((item) => item.id.toString() === id);
            if (foundTodo) {
                setTodoData(foundTodo);
            }
        }
    }, [mode, id, state.todos]);

    const handleChange = (field: keyof TodoItem, value: string) => {
        setTodoData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSave = () => {
        if (!todoData.content.trim()) {
            console.log("입력값 없음")
            return;
        }
        if (mode === "edit" && id) {
            dispatch({type: "UPDATE", payload: todoData});
        } else {
            //새로운 Todo 생성
            const newTodo: TodoItem = {
                ...todoData,
                id: BigInt(Date.now()),
                createDate: new Date().toISOString().split("T")[0],
            };
            dispatch({type: "CREATE", payload: newTodo});
            console.log("새로운 todo: ", newTodo);
        }

        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title={"완료"} onPress={handleSave}/>,
            headerTitle: () => <Text>{mode === "edit" ? "수정" : "새로운 일정 추가"}</Text>
        });
    }, [navigation, handleSave]);


    return (
        <View style={styles.container}>
            <ListItem icon={"pencil-outline"} option={"input"}
                      title={"일정명"} value={todoData.content}
                      onChange={(text) => handleChange("content", text)}/>
            <ListItem icon={"grid-outline"} option={"default"}
                      title={"카테고리"} value={"없음"} onChange={() => {}}/>
            <ListItem icon={"calendar-outline"} option={"date"}
                      title={"마감일"} value={todoData.createDate}
                      onChange={(text) => handleChange("createDate", text)}/>
            <ListItem icon={"time-outline"} option={"time"}
                      title={"마감시간"} value={"00:00"}
                      onChange={() => {}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default CreateEdit;