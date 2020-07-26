/* eslint-disable max-len */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../common/Input';
import colorSource from '../../../constants/color';

const ForgotPassword = () => {
  const imgSource = {
    email: require('../../../../assets/authen/email-icon.png'),
  };

  return (
    <LinearGradient colors={['#006DF0', '#A156F6', '#00E7F0']} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.descText}>
          Enter the email associated with your account and we will send you a link to reset your password.
        </Text>
      </View>
      <View style={styles.formContainer}>
          <CustomInput icon={imgSource.email} isHideContent={false} placeHolder="Email"/>
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={styles.buttonText}>Reset password</Text>
          </TouchableOpacity>
      </View>
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
    width: '100%',
  },
  descText: {
    color: colorSource.white,
    fontSize: 12,
    marginTop: 12,
    textAlign: 'center',
  },
  formContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  title: {
    color: colorSource.white,
    fontSize: 30,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default ForgotPassword;
