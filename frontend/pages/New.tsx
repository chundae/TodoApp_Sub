import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StyleSheet, View, Text} from "react-native";
import React from "react";
import Header from "../components/Header.tsx";
import Button from "../components/Button.tsx";

type PageParam = {
    Home :undefined;
    New : undefined;
}

const New = () => {
    const navigation = useNavigation<NavigationProp<PageParam>>()
    const returnPage = () => {
        console.log("EditPage 뒤로가기")
        navigation.goBack();
    }

    const finish = () => {
        console.log("EditPage 완료")
    }
    return (
        <View style={styles.container}>
            <Header leftChild={<Button type="back" text={"<"} onClick={returnPage}/>}
                    rightChild={<Button type="primary" text={"완료"} onClick={finish}/>}
            />
            <Text>New page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default New;