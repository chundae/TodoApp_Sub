import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StyleSheet, View, Text, TextInput, Button} from "react-native";
import React, {useLayoutEffect, useRef, useState} from "react";
import Header from "../components/Header.tsx";
import {useTodoContext} from "../hooks/useTodoContext.tsx";
import ListItem from "../components/ListItem.tsx";

type PageParam = {
    Home :undefined;
    New : undefined;
}

const New = () => {
    const navigation = useNavigation<NavigationProp<PageParam>>()
    const {state, dispatch } = useTodoContext();
    const [inputValue, setInputValue] = useState("");

    const handleComplete = () =>{
        if(!inputValue.trim()){
            console.log("입력값이 없습니다.");
            return;
        }

        const newTodo = {
            id: BigInt(Date.now()),
            //날짜는 선택할수있게 변경 예정
            createDate: new Date().toISOString().split('T')[0],
            content: inputValue,
        };

        console.log("new todo : " ,newTodo )
        dispatch({type:"CREATE", payload: newTodo});

        navigation.goBack();
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="완료" onPress={handleComplete}/>
            )
        });
    }, [navigation, handleComplete])



    return (
        <View style={styles.container}>

            <ListItem icon={"pencil-outline"} option={"input"} title={"일정명"}/>
            <ListItem icon={"grid-outline"} option={"default"} title={"카테고리"}/>
            <ListItem icon={"calendar-outline"} option={"date"} title={"마감일"}/>
            <ListItem icon={"time-outline"} option={"time"} title={"마감시간"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff"
    },

})

export default New;


/*
            <TextInput
                style={styles.input}
                placeholder="일정을 입력하세요"
                value={inputValue}
                onChangeText={setInputValue}
                focusable={true}
                />
 */