import {NavigationContainer, NavigationProp, useNavigation} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home.tsx";
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet} from 'react-native';
import Start from "./pages/Start.tsx";
import Edit from "./pages/Edit.tsx";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import New from "./pages/New.tsx";
import {TodoProvider} from "./hooks/useTodoContext.tsx";

// type StackParam = {
//     Edit: { id: string };
//     Home: undefined;
//     New: undefined;
// }

//추후 변경 예정
interface CreateProps {
    Page: string,
    onCreateItem: () => void;
}

const Stack = createNativeStackNavigator();

const App = () => {



    return (
        <TodoProvider>
            <GestureHandlerRootView>
                <NavigationContainer>
                    <Stack.Navigator>
                        {/*<Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>*/}
                        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                        <Stack.Screen name="Edit" component={Edit} options={{headerShown: false}}/>
                        <Stack.Screen name="New" component={New} options={{
                            headerRight: () => <Button title="완료" onPress={() => {}}/>
                        }}/>
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
        backgroundColor: '#f8f9fa',
    },
});


export default App;