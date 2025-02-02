import {StyleSheet, TextInput} from "react-native";

interface ItemProps {
    value: string
    onChange?: (text:string) => void
}

 const TextInputType = ({value, onChange} :ItemProps) => {
    let data : string = "";
    if(value) {
        data = value;
    }else{
        data = "일정을 입력하세요."
    }
    return (
        <TextInput
            style={styles.input}
            placeholder={data}
            focusable={true}
            value={data}
            onChangeText={onChange}
        />
    )
}


const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        height: 50,
        // borderBottomWidth: 1,
        paddingHorizontal: 20,
    },
})


export default TextInputType;