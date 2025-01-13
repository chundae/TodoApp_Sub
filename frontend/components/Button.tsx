import {GestureResponderEvent, TouchableOpacity, Text, StyleSheet} from "react-native";
import React from "react";

interface ButtonProps {
    text: string,
    type: string,
    onClick?: (event: GestureResponderEvent) => void; // React Native 터치 이벤트

}

const Button = ({text, type, onClick}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            style={[styles.button, type === 'primary' ? styles.button_primary : styles.button_negative]}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
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
    }
})

export default Button;