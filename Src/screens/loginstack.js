import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import dashboard from './dashboard';
import LoginScreen from './LoginScreen';
const Stack = createNativeStackNavigator();

const JobStack = () => {
    return (
      <Stack.Navigator initialscreenOptions={screenOptionStyle}>
        <Stack.Screen
          name="Categories"
          component={LoginScreen}
          options={{tabBarLabel: 'Categories'}}
        />
        
        <Stack.Screen name="dashboard" component={dashboard} />
      </Stack.Navigator>
    );
  };
  
  export default JobStack;
  