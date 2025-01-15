import {StyleSheet, Text, View} from "react-native";
import Header from "../components/Header.tsx";
import Button from "../components/Button.tsx";
import {useRoute, RouteProp, useNavigation, NavigationProp} from "@react-navigation/native";

type StackParam = {
    Edit: {id: string}
}
type PageParam = {
    Home: undefined;
    Edit : undefined;
}


const Edit = () => {
    const route = useRoute<RouteProp<StackParam, "Edit">>()
    const navigation = useNavigation<NavigationProp<PageParam>>()

    const {id} = route.params;
    console.log("전송된 ID : ", id)

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
            <Text style={styles.idText}>Id: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   idText : {
       fontSize: 10
   },
   container:{
       flex: 1
   }
});

export default Edit;