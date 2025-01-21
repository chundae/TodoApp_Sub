import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StyleSheet, View, Text} from "react-native";
import React from "react";

type PageParam = {
    Home :undefined;
    New : undefined;
}

const New = () => {
    const navigation = useNavigation<NavigationProp<PageParam>>()

    return (
        <View>
            <Text>New page</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex:1
    }
})

export default New;