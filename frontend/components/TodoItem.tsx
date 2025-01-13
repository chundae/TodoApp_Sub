import React, {useRef, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BouncyCheckbox, {BouncyCheckboxHandle} from "react-native-bouncy-checkbox";
import RNBounceable from '@freakycoder/react-native-bounceable';
import {has} from "react-native-reanimated/lib/typescript/createAnimatedComponent/utils";

interface TodoItemProps {
    id: bigint;
    createDate: string;
    content: string;
    onPressEdit: (id: bigint) => void;
    onPressItem: (id: bigint) => void;
}



const TodoItem = ({ id, createDate, content, onPressEdit, onPressItem }: TodoItemProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const bouncyCheckRef = useRef<BouncyCheckboxHandle>(null);


    return (
        <View style={styles.container}>
            {/* 좌측 아이콘 */}
            <View style={styles.iconContainer}>
            </View>
ㅎ
            {/* 중앙 텍스트 */}
            <TouchableOpacity style={styles.contentContainer} onPress={() => onPressItem(id)}>
                <Text style={styles.contentText}>{content}</Text>
            </TouchableOpacity>

            {/* 우측 체크박스와 옵션 버튼 */}
            <View style={styles.actionContainer}>
                <TouchableOpacity >
                    <BouncyCheckbox
                        size={20}
                        textStyle={styles.textStyle}
                        iconImageStyle={styles.iconImageStyle}
                        fillColor={'#74AFD1'}
                        unFillColor={'transparent'}
                        ref={bouncyCheckRef}
                        isChecked={isChecked}
                        onPress={(isChecked) => setIsChecked(isChecked)}
                    />



                </TouchableOpacity>
                <TouchableOpacity style={styles.options}>
                    <Text style={styles.optionsText}>⋮</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: "row", // 가로 배치
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "#fff",

        borderRadius: 8,
        marginBottom: 5,
        elevation: 2,
    },
    iconContainer: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: "#E5E5FF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    iconText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
    },
    contentContainer: {
        flex: 1, // 나머지 공간 차지
        justifyContent: "center",
    },
    contentText: {
        fontSize: 16,
        color: "#333",
    },
    actionContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    options: {
        justifyContent: "center",
        alignItems: "center",
    },
    optionsText: {
        fontSize: 20,
        color: "#000",
    },
    //------
    iconImageStyle: {
        width: 10,
        height: 10,
    },
    textStyle: {
        color: '#010101',
        fontWeight: '600',
    },
    syntheticButton: {
        height: 50,
        marginTop: 64,
        borderRadius: 12,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00C0EE',
    },
});

export default TodoItem;