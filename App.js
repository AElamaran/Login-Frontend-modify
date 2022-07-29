import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { theme } from './Src/core/theme'
import LoginScreen from './Src/screens/LoginScreen'
import ForgotPasswordScreen from './Src/screens/ForgotPassword'
import ResetPasswordScreen from './Src/screens/ResetPassword'
import Company from './Src/screens/Company'
import Driver from './Src/screens/Driver'

const Stack = createStackNavigator()

export default function App() {
  return (
    // <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />

         <Stack.Screen
            name="Company"
            component={Company}
          />

<Stack.Screen
            name="Driver"
            component={Driver}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  )
}
