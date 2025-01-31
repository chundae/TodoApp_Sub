import { NavigationProp, useNavigation, RouteProp } from "@react-navigation/native";
import { StyleSheet, View, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext.tsx";
import ListItem from "../components/ListItem.tsx";
import TodoItem from "../components/TodoItem.tsx";

type PageParam = {
    Home: undefined;
    CreateEdit: {mode: "create" | "edit"; todo?: TodoItem};
};

interface TodoItem {
    id: bigint;
    createDate: string;
    content: string;
}

const CreateEditPage = ({route} : {route: RouteProp<PageParam,  "CreateEdit">}) => {
    const navigation = useNavigation<NavigationProp<PageParam>>();
    const {state, dispatch} = useTodoContext();

    //현재 모드 (Create, edit) 및 기존 Todo loading
    const {mode, todo} = route.params || {mode: "create"};

    const [inputValue, setInputValue] = useState(todo?.content || "");

    const handleSave = () => {
        if(!inputValue.trim()){
            console.log("입력값 없음")
            return;
        }

        if(mode === "edit" && todo) {
            //기존 Todo 수정
            const updateTodo = {...todo, content: inputValue};
            dispatch({type: "UPDATE", payload:updateTodo});
            console.log("수정된 Todo: ", updateTodo);
        }else{
            //새로운 Todo 생성
            const newTodo = {
                id: BigInt(Date.now()),
                createDate: new Date().toISOString().split("T")[0],
                content: inputValue,
            };
            dispatch({type:"CREATE", payload:newTodo});
            console.log("새로운 todo: ", newTodo);
        }

        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title={"완료"} onPress={handleSave}/>
        });
    }, [navigation, handleSave]);

    return (
        <View style={styles.container}>
            <ListItem icon={"pencil-outline"} option={"input"} title={"일정명"} />
            <ListItem icon={"grid-outline"} option={"default"} title={"카테고리"} />
            <ListItem icon={"calendar-outline"} option={"date"} title={"마감일"} />
            <ListItem icon={"time-outline"} option={"time"} title={"마감시간"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default CreateEditPage;