import {NavigationContainer, NavigationProp, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./pages/Home.tsx";
import React, {useState, useEffect} from 'react';
import {Button, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {TodoProvider} from "./hooks/useTodoContext.tsx";
import CreateEdit from "./pages/CreateEdit.tsx";
import {PageParam} from "./hooks/PageParams.tsx";



//추후 변경 예정
interface CreateProps {
    Page: string,
    onCreateItem: () => void;
}

const Stack = createNativeStackNavigator<PageParam>();

const App = () => {


    return (
        <TodoProvider>
            <GestureHandlerRootView>
                <NavigationContainer>
                    <Stack.Navigator>
                        {/*<Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>*/}
                        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                        <Stack.Screen name="CreateEdit" component={CreateEdit} />
                    </Stack.Navigator>
                </NavigationContainer>
            </GestureHandlerRootView>
        </TodoProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});


export default App;