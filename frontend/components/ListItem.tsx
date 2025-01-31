import {NativeEventEmitter, NativeModules, StyleSheet, Text, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import DatePicker from "react-native-date-picker";
import React, {useState} from "react";
import ItemOption from "./ItemOption.tsx";

//props =  {icon : name} , {title : name}, {option}
/*
icon : {pencil-outline, gird, calendar, time, document-text}
title: {일정명 , 카테고리, 마감일, (시간, 메모 <= 필수 x)
option : {일정 : "inputType} => 생성완료
         {카테고리 : option}, => 아직
         {마감일 : DateType}, => 생성완료
         {시간 : DateType}, => 생성완료
         {메모 : togle textbox} => 아직
size : 30 ~ 50
color : #555고정
완료 클릭시 -> home 에 추가
 */


interface ItemProps{
    icon: string;
    option: string;
    title: string
}




const ListItem = ({icon, option,title}:ItemProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.iconSection} >
                <Icon name={icon} size={28} color="#555" />
            </View>
            <View style={styles.titleSection}>
                <Text>{title}</Text>
            </View>
            <View style={styles.TypeSection}>
                <ItemOption option={option}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: "row", // 가로 배치
        alignItems: "center",
        paddingVertical: 2,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        marginBottom: 5,
        marginHorizontal:30,
        elevation: 2,
        borderBottomColor: "#858585"
    },
    iconSection:{
        // paddingBottom:5,
    },
    textSection:{

        paddingHorizontal: 20,
        alignItems:"center",
        justifyContent: "center",
        flex:1
    },
    input: {
        fontSize: 20,
        height: 50,
        // borderBottomWidth: 1,
        paddingHorizontal: 20,
    },
    TypeSection:{
        flex:1,
        alignItems: "flex-end",
    },
    DateContainer:{
        backgroundColor: "#74AFD17F",
        color: "#fff",
        borderRadius: 5,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginVertical: 2,
        fontWeight: "bold",
    },
    titleSection:{
        fontSize:20,
        paddingHorizontal:20
    }


})

export default ListItem;

