import DateType from "./DateType.tsx";
import React from "react";
import { TextInput, Text } from "react-native";
import TextInputType from "./TextInputType.tsx";
import TimeType from "./TimeType.tsx";

interface ItemOptionProps {
    option: string;
    value?: string;
    onChange?: (text:string) => void;
}


const ItemOption = ({ option, value, onChange} : ItemOptionProps) => {
    switch (option) {
        case "input":
            return <TextInputType  value={value || ""} onChange={onChange}/>
        case "date":
            return <DateType value={value} onChange={onChange}/>;
        case "time":
            return <TimeType value={value} onChange={onChange}/>;
        default:
            return <Text>옵션 없음</Text>;
    }
}

export default ItemOption;