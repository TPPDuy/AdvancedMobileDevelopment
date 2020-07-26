/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import CustomInput from '../../common/Input';
import colorSource from '../../../constants/color';
import screenName from '../../../constants/screen-name';

const SignUp = ({ navigation }) => {
  const imgSource = {
    name: require('../../../../assets/authen/name-icon.png'),
    email: require('../../../../assets/authen/email-icon.png'),
    password: require('../../../../assets/authen/password-icon.png'),
  };

  return (
    <LinearGradient colors={['#006DF0', '#A156F6', '#00E7F0']} style={styles.container}>
      <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <CustomInput icon={imgSource.name} isHideContent={false} placeHolder="Name"/>
          <CustomInput icon={imgSource.email} isHideContent={false} placeHolder="Email"/>
          <CustomInput icon={imgSource.password} isHideContent={true} placeHolder="Password"/>
          <TouchableOpacity style={styles.buttonSignIn} onPress={() => navigation.replace(screenName.Main)}>
            <Text style={styles.buttonText}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIn} onPress={() => navigation.goBack()}>
            <Text style={styles.signInText}>Have an account? Sign in now!</Text>
          </TouchableOpacity>
      </View>
      <Text style={styles.descText}>By clicking on "Create account" you agree to our Terms of Use and Privacy Policy.</Text>
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
    height: '90%',
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
    marginBottom: 50,
  },
});

SignUp.propTypes = {
  navigation: PropTypes.object,
};

export default SignUp;
