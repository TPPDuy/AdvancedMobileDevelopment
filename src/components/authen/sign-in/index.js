/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import LoginOption from './LoginOptionButton';
import CustomInput from '../../common/Input';
import colorSource from '../../../constants/color';
import screenName from '../../../constants/screen-name';

const SignIn = ({ navigation }) => {
  const imgSource = {
    email: require('../../../../assets/authen/email-icon.png'),
    password: require('../../../../assets/authen/password-icon.png'),
    google: require('../../../../assets/authen/google-icon.png'),
    facebook: require('../../../../assets/authen/facebook-icon.png'),
  };

  return (
    <LinearGradient colors={['#5f00a3', 'rgba(157,22,163,1)', 'rgba(35,121,255,0.9808298319327731)']} style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.formContainer}>
          <CustomInput icon={imgSource.email} isHideContent={false} placeHolder="Email"/>
          <CustomInput icon={imgSource.password} isHideContent={true} placeHolder="Password"/>
          <TouchableOpacity style={styles.buttonSignIn} onPress={() => navigation.replace(screenName.Main)}>
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
      <TouchableOpacity style={styles.createAccountContainer} onPress={() => navigation.navigate(screenName.SignUp)}>
        <Text style={styles.createAccount}>New here? Create an account now!</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
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
    justifyContent: 'center',
    paddingHorizontal: 30,
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
  title: {
    color: colorSource.white,
    fontSize: 30,
    marginBottom: 50,
  },
});

SignIn.propTypes = {
  navigation: PropTypes.object,
};
export default SignIn;
