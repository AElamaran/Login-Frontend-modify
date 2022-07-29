import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, ToastAndroid,Alert} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import ForgotPasswordScreen from '../screens/ForgotPassword'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import axios, { AxiosError } from 'axios';

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { updateError } from '../helpers/updator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [error, setError] = useState('')

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      console.log('email or password error');

      return;

    }

    else {
      Login();
      //  console.log('login success');
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  };

  const [login, setLogin] = useState([]);

  const Login = () => {

    axios
      .post('http://192.168.43.71:8000/api/login11', { email: email.value, password: password.value })
      .then(response => {
        if (response.status == 201) {
          console.log("correct")
        } else {
          console.log("not working");
        }

        console.log(response.status);
        setLogin(response.data);

        console.log(response.data.user.role);
        // message('Login Success');
        if (response.data.user.role == 'driver') {
          navigation.navigate('Driver')
        }

        if (response.data.user.role == 'company') {
          navigation.navigate('Company')
        }

      })
      .catch(Error => {
        console.log(Error.response.data.message)
        if(Error.response.data.message=="Bad creds"){
          Alert.alert("Wrong Email or password");
        }
        
      })
  };
  useEffect(() => {
    Login();
  }, []);

  return (
    <Background>

      <View style={styles.loginbox}>
        <Header >Companion</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
          onPress={() => navigation.navigate('Company')}
        >
          <Text style={styles.forgot}>Company</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Driver')}
        >
          <Text style={styles.forgot}>Driver</Text>
        </TouchableOpacity> */}

        </View>
        <Button mode="contained" onPress={onLoginPressed}>
          Login

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
    color: '#652C9E',
    fontSize: 13,

  },
  link: {
    fontWeight: 'bold',

  },

  loginbox: {
    backgroundColor: 'white',
    padding: 20,
    width: 330,
    height: 450,
    borderRadius: 5,
    opacity: 0.9,
  }
})
