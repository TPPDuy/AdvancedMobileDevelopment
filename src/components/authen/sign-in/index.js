/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, TextInput, Image, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LoginOption from './LoginOptionButton';

const SignIn = () => {
  const imgSource = {
    email: require('../../../../assets/authen/email-icon.png'),
    google: require('../../../../assets/authen/google-icon.png'),
    facebook: require('../../../../assets/authen/facebook-icon.png'),
  };

  return (
    <LinearGradient colors={['#5f00a3', 'rgba(157,22,163,1)', 'rgba(35,121,255,0.9808298319327731)']} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Image source={require('../../../../assets/authen/email-icon.png')} style={styles.inputIcon}/>
            <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder="Email"/>
          </View>
          <View style={styles.inputContainer}>
            <Image source={require('../../../../assets/authen/password-icon.png')} style={styles.inputIcon}/>
            <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder="Password" secureTextEntry={true}/>
          </View>
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine}/>
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine}/>
        </View>
        <LoginOption title="Sign in with Google" icon={imgSource.google} onChooseOption={null}/>
        <LoginOption title="Sign in with Facebook" icon={imgSource.facebook} onChooseOption={null}/>
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccount}>New here? Create an account now!</Text>
      </View>
    </LinearGradient>
  );
};

const colorSource = {
  white: '#fff',
  black: '#000',
  transparent: '#ffffff00',
  divider: '#ffffff5F',
};

const styles = StyleSheet.create({
  buttonSignIn: {
    backgroundColor: colorSource.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: colorSource.black,
    fontSize: 17,
    marginRight: 10,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    paddingBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 30,
    width: '100%',
  },
  createAccount: {
    color: colorSource.white,
    fontSize: 15,
    marginTop: 50,
    textDecorationLine: 'underline',
  },
  createAccountContainer: {
    flexDirection: 'column',
    height: '25%',
    justifyContent: 'flex-start',
  },
  dividerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
  },
  dividerLine: {
    backgroundColor: colorSource.divider,
    height: 1,
    width: '45%',
  },
  dividerText: {
    color: colorSource.white,
    fontSize: 15,
    margin: 15,
  },
  formContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: colorSource.transparent,
    color: colorSource.black,
    flex: 1,
    fontSize: 15,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 7,
    padding: 10,
    width: '100%',
  },
  inputIcon: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
  optionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    height: '50%',
    justifyContent: 'center',
    paddingBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  title: {
    color: colorSource.white,
    fontSize: 30,
  },
  titleContainer: {
    flexDirection: 'column',
    height: '25%',
    justifyContent: 'center',
  },
});

export default SignIn;
