import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import { ScrollView } from 'react-native-gesture-handler'
// import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

import { TouchableOpacity, View, StyleSheet } from 'react-native'
import axios from 'axios';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmpassword, setConfirmpassword] = useState({ value: '', error: '' })
  const [token, setToken] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {

    function confirmpasswordValidator1(confirmpassword,password) 
    {
    if (!confirmpassword) return "Password can't be empty."
    if (confirmpassword.length < 8) return 'Password ATLEAST 8 characters long.'
    if(password!=confirmpassword) return "Confirm password not match with New password"
    return ''
    }

    function Token(token) 
    {
    if (!token) return "Token can't be empty."
  
    return ''
    }


    const emailError = emailValidator(email.value)
    const passwordError=passwordValidator(password.value)
    const confirmpasswordError=confirmpasswordValidator1(confirmpassword.value,password.value)
    const tokenError=Token(token.value)
     if (emailError || passwordError||confirmpasswordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setConfirmpassword({ ...confirmpassword, error: confirmpasswordError })
      setToken({ ...token, error: tokenError })
      console.log('email or password or confirmpassword error ');

      return;
      
    }

   


    
      axios
        .post('http://192.168.43.71:8000/api/reset-password',{email: email.value,token: token.value,password: password.value,password_confirmation: confirmpassword.value})
        .then(response => {

          if (response.status == 20) {
            console.log("correct")
          } else {
            console.log("failed");
          }

          console.log(response.status);
        setsendResetPasswordEmail(response.data);

          console.log("Hello how are you");
          console.log(response.data);
          navigation.navigate('LoginScreen');
        
        })
        .catch(function (error) {
          console.log(error);
          
        })

        .catch(Error => {
          console.log(Error.response.data.response)
          if(Error.response.data.response=="We can't find a user with that email address."){
            Alert.alert("Wrong Email");
          }
          
        })
    
  }
  

  

  return (
    <ScrollView>
    <Background>

<View style={styles.loginbox1}>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Reset Password</Header>
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
        description="Enter email, Which is you got token."
      />

<TextInput
        label="NewPassword"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        description="Enter New password"
      />

<TextInput
        label="ConfirmPassword"
        returnKeyType="done"
        value={confirmpassword.value}
        onChangeText={(text) => setConfirmpassword({ value: text, error: '' })}
        error={!!confirmpassword.error}
        errorText={confirmpassword.error}
        secureTextEntry
        description="Enter the same password, which is match with New password"
      />

<TextInput
        label="Token (get from email)"
        returnKeyType="done"
        value={token.value}
        onChangeText={(text) => setToken({ value: text, error: '' })}
        error={!!token.error}
        errorText={token.error}
        secureTextEntry
        description="Enter the token, which is received by E-mail"
      />

<View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.forgot}>Login</Text>
        </TouchableOpacity>
</View>
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Submit
      </Button>
      </View>
    </Background>
    </ScrollView>
  )
  }

const styles = StyleSheet.create({

loginbox1:{
  backgroundColor:'white',
  padding:20,
  width:330,
  height:680,
  borderRadius:5,
  opacity: 0.9,
 
},
forgot:{
  color:'#652C9E',
    fontSize: 18,
    marginLeft:200,
    fontWeight:'bold'
}
})