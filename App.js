import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/HomeScreen.jsx'
import AddTaskScreen from './screens/AddTaskScreen.jsx'
import { Screen } from 'react-native-screens'

const App = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="AddTask" component={AddTaskScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App