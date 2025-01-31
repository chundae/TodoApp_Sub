import {StyleSheet, TextInput} from "react-native";

interface ItemProps {
    text: string
}

 const TextInputType = ({text} :ItemProps) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={text}
            focusable={true}
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