/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import AnimatedLoader from 'react-native-animated-loader';
import LoginOption from './LoginOptionButton';
import CustomInput from '../../common/Input';
import colorSource from '../../../constants/color';
import screenName from '../../../constants/screen-name';
import { AuthenContext } from '../../providers/Authen';

const SignIn = ({ navigation }) => {
  const imgSource = {
    email: require('../../../../assets/authen/email-icon.png'),
    password: require('../../../../assets/authen/password-icon.png'),
    google: require('../../../../assets/authen/google-icon.png'),
    facebook: require('../../../../assets/authen/facebook-icon.png'),
  };
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });
  const authenContext = useContext(AuthenContext);

  useEffect(() => {
    if (authenContext.state.loginStatus === 1) {
      navigation.replace(screenName.Main);
    }
  }, [authenContext.state.loginStatus]);
  const handleInputEmail = (value) => {
    setLoginInfo({
      ...loginInfo,
      email: value,
    });
  };

  const handleInputPassword = (value) => {
    setLoginInfo({
      ...loginInfo,
      password: value,
    });
  };

  const handleLogin = () => {
    authenContext.login(loginInfo.email, loginInfo.password);
  };
  // () => navigation.replace(screenName.Main)
  return (
    <LinearGradient colors={['#5f00a3', 'rgba(157,22,163,1)', 'rgba(35,121,255,0.9808298319327731)']} style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.formContainer}>
        <CustomInput icon={imgSource.email} isHideContent={false} placeHolder="Email" onTextChange={(email) => handleInputEmail(email)}/>
        <CustomInput icon={imgSource.password} isHideContent={true} placeHolder="Password" onTextChange={(password) => handleInputPassword(password)}/>
        <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleLogin()}>
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
      <View>
        <AnimatedLoader
          visible={authenContext.state.isLoading}
          overlayColor="rgba(0,0,0,0.65)"
          source={require('../../../../assets/common/loader.json')}
          animationStyle={styles.loading}
          speed={2}
        />
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
  loading: {
    height: 100,
    width: 100,
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
