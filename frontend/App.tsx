import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home.tsx";
import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import Start from "./pages/Start.tsx";
import Edit from "./pages/Edit.tsx";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                    <Stack.Screen name="Edit" component={Edit} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
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