import DateType from "./DateType.tsx";
import React from "react";
import { TextInput, Text } from "react-native";
import TextInputType from "./TextInputType.tsx";
import TimeType from "./TimeType.tsx";

interface ItemOptionProps {
    option: string;
}


const ItemOption = ({ option} : ItemOptionProps) => {
    switch (option) {
        case "input":
            return <TextInputType  text={"dfdf"}/>
        case "date":
            return <DateType />;
        case "time":
            return <TimeType />;
        default:
            return <Text>옵션 없음</Text>;
    }
}

export default ItemOption;