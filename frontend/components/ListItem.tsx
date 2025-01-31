import {StyleSheet, View} from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ListItem = () => {

    return(
        <View style={styles.container}>
            <View style={styles.iconSection} >
                {/*<MaterialIcons name={"grid-view"} size={24} color="#555" />*/}
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomWidth: 0.5,
        paddingHorizontal: 4,
    },
    iconSection:{
        flex:1
    },
})

export default ListItem;


/*
view(1) : 묶음용
    - bottomBorder : 1
    - pddingh : 1
view(2) : leftChild -> icon
    -
view(3) : center -> title
view(4) : rightChild -> button(날짜, 시간, 입력토글)
 */