import React from 'react';
import Home from './src/Pages/Home/index';
import New from './src/Pages/New/index';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
