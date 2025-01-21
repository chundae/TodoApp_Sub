import {GestureResponderEvent, TouchableOpacity, Text, StyleSheet} from "react-native";
import React, {useEffect} from "react";
// import styles from "./buttonStyle.ts";

interface ButtonProps {
    text: string,
    type: string,
    onClick?: (event: GestureResponderEvent) => void; // React Native 터치 이벤트
}



const Button = ({text, type, onClick}: ButtonProps) => {

    useEffect(() => {
        console.log("Props : ", text, type, onClick)
    }, []);
    return (
        <TouchableOpacity
            onPress={onClick}
            style={[styles.button, styleMap[type] || styles.button_none]}
        >
            <Text style={[styles.text, type === 'back'? {color: 'black', fontSize: 20} : {color: '#fff'}]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    button_primary: {
        backgroundColor: '#74AFD1'
    },
    button_negative: {
        backgroundColor: '#6c757d'
    },
    button_none: {
        backgroundColor: '#fff'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    button_finish:{
        backgroundColor: '#e3de9f'
    },
    button_next:{
        backgroundColor: '#9999FF'
    },
    button_back:{
        backgroundColor: 'none',
    }
});

const styleMap : { [key: string] :any} = {
    primary: styles.button_primary,
    negative: styles.button_negative,
    none: styles.button_none,
    finish: styles.button_finish,
    next: styles.button_next,
    back: styles.button_back,
};

export default Button;