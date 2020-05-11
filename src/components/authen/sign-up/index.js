/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../common/input';

const SignUp = () => {
  const imgSource = {
    name: require('../../../../assets/authen/name-icon.png'),
    email: require('../../../../assets/authen/email-icon.png'),
    password: require('../../../../assets/authen/password-icon.png'),
  };

  return (
    <LinearGradient colors={['#5f00a3', 'rgba(157,22,163,1)', 'rgba(35,121,255,0.9808298319327731)']} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.optionContainer}>
        <View style={styles.formContainer}>
          <CustomInput icon={imgSource.name} isHideContent={false} placeHolder="Name"/>
          <CustomInput icon={imgSource.email} isHideContent={false} placeHolder="Email"/>
          <CustomInput icon={imgSource.password} isHideContent={true} placeHolder="Password"/>
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.signInText}>Have an account? Sign in now!</Text>
      </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.descText}>By clicking on "Create account" you agree to our Terms of Use and Privacy Policy.</Text>
    </LinearGradient>
  );
};

const colorSource = {
  white: '#fff',
  black: '#000',
  transparent: '#ffffff00',
  divider: '#ffffff5F',
  purple: '#9d16a3',
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
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 30,
    width: '100%',
  },
  descText: {
    color: colorSource.white,
    fontSize: 12,
    marginTop: 12,
    textAlign: 'center',
  },
  formContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  optionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  signInText: {
    color: colorSource.white,
    marginTop: 30,
  },
  title: {
    color: colorSource.white,
    fontSize: 30,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default SignUp;
