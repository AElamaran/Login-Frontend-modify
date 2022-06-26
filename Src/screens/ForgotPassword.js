import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
// import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import {TouchableOpacity, View, StyleSheet } from 'react-native'
import axios from 'axios';
import ResetPasswordscreen from '../screens/ResetPassword'
import { passwordValidator } from '../helpers/passwordValidator'
import { red100 } from 'react-native-paper/lib/typescript/styles/colors'

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendForgotPasswordEmail = () => {




    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }

  


    
      axios
        .post('http://192.168.43.71:8000/api/forgot-password',{email: email.value})
        .then(response => {
          console.log("Hello how are you");
          console.log(response.data);
          navigation.navigate('ResetPasswordScreen');

        
        })
        .catch(function (error) {
          console.log(error);
        });
    
      // navigation.navigate('LoginScreen')
  }
  

  

  return (
    <Background>

<View style={styles.loginbox}>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Forgot Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive Token to email."
      />

<View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>ResetPasswordScreen</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="contained"
        onPress={sendForgotPasswordEmail}
        style={{ marginTop: 16 }}
      >
       Send Instructions
      </Button>
      </View>
    </Background>
  )
  }

  const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      color:'#652C9E',
      fontSize: 16,
      
      
     
    },
    link: {
      fontWeight: 'bold',
   
    },
  
    loginbox:{
      backgroundColor:'white',
      padding:20,
      width:330,
      height:430,
      borderRadius:5,
      opacity: 0.9,
      
    }
  })
  