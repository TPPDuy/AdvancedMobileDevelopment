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
import ErrorDialog from '../../common/ErrorDialog';

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

  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (authenContext.state.loginStatus === 1) {
      navigation.replace(screenName.Main);
    } else if (authenContext.state.loginStatus === 2) {
      console.log('failed');
      setShowMsg(true);
      const interval = setInterval(() => {
        setShowMsg(false);
        clearInterval(interval);
      }, 2000);
    }
  }, [authenContext.state]);

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

  return (
    <LinearGradient colors={['#006DF0', '#A156F6', '#00E7F0']} style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.formContainer}>
        <CustomInput icon={imgSource.email} isHideContent={false} placeHolder="Email" onTextChange={(email) => handleInputEmail(email)}/>
        <CustomInput icon={imgSource.password} isHideContent={true} placeHolder="Mật khẩu" onTextChange={(password) => handleInputPassword(password)}/>
        <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine}/>
        <Text style={styles.dividerText}>hoặc</Text>
        <View style={styles.dividerLine}/>
      </View>
      <LoginOption title="Đăng nhập với Google" icon={imgSource.google} onChooseOption={null}/>
      <TouchableOpacity style={styles.createAccountContainer} onPress={() => navigation.navigate(screenName.SignUp)}>
        <Text style={styles.createAccount}>Chưa có tài khoản? Đăng ký ngay!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassContainer} onPress={() => navigation.navigate(screenName.ForgotPass)}>
        <Text style={styles.forgotPass}>Quên mật khẩu</Text>
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
      {
        showMsg
          ? (
          <View style={styles.errorDialog}>
            <ErrorDialog msg={authenContext.state.msg} />
          </View>
          )
          : null
      }
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
    width: '41%',
  },
  dividerText: {
    color: colorSource.white,
    fontSize: 15,
    margin: 15,
  },
  errorDialog: {
    position: 'absolute',
    top: 20,
  },
  forgotPass: {
    color: colorSource.white,
    fontSize: 15,
  },
  forgotPassContainer: {
    bottom: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
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
