/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import CustomInput from '../../common/Input';
import colorSource from '../../../constants/color';
import screenName from '../../../constants/screen-name';
import { AuthenContext } from '../../providers/Authen';
import ErrorDialog from '../../common/ErrorDialog';
import VerifyEmail from '../verify';
import { LanguageContext } from '../../providers/Language';

const SignUp = ({ navigation }) => {
  const imgSource = {
    name: require('../../../../assets/authen/name-icon.png'),
    email: require('../../../../assets/authen/email-icon.png'),
    phone: require('../../../../assets/authen/phone-icon.png'),
    password: require('../../../../assets/authen/password-icon.png'),
  };
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  const [showMsg, setShowMsg] = useState(false);
  const authenContext = useContext(AuthenContext);
  const languageContext = useContext(LanguageContext);

  useEffect(() => {
    if (authenContext.state.registerStatus === 2) {
      console.log('failed');
      setShowMsg(true);
      const interval = setInterval(() => {
        setShowMsg(false);
        clearInterval(interval);
      }, 2000);
    }
  }, [authenContext.state]);

  const handleRegister = () => {
    authenContext.register(registerInfo.username, registerInfo.email,
      registerInfo.phone, registerInfo.password);
  };
  return (
    <LinearGradient colors={['#006DF0', '#A156F6', '#00E7F0']} style={styles.container}>
      <View style={styles.formContainer}>
          <Text style={styles.title}>{languageContext.state.SignUp}</Text>
          {
            authenContext.state.registerStatus === 1
            ? (
              <>
                <VerifyEmail />
                <View style={{height: 20}}/>
                <TouchableOpacity style={styles.buttonSignIn} onPress={() => {
                    authenContext.resetRegisterStatus();
                    navigation.goBack();
                  }
                }>
                  <Text style={styles.buttonText}>{languageContext.state.SignIn}</Text>
                </TouchableOpacity>
              </>
            )
            : (
              <>
                <CustomInput
                  icon={imgSource.name}
                  isHideContent={false}
                  placeHolder={languageContext.state.Name}
                  onTextChange={(value) => setRegisterInfo({
                    ...registerInfo,
                    username: value,
                  })}
                />
                <CustomInput
                  icon={imgSource.email}
                  isHideContent={false}
                  placeHolder={languageContext.state.Email}
                  onTextChange={(value) => setRegisterInfo({
                    ...registerInfo,
                    email: value,
                  })}
                />
                <CustomInput
                  icon={imgSource.phone}
                  isHideContent={false}
                  placeHolder={languageContext.state.Phone}
                  onTextChange={(value) => setRegisterInfo({
                    ...registerInfo,
                    phone: value,
                  })}
                />
                <CustomInput
                  icon={imgSource.password}
                  isHideContent={true}
                  placeHolder={languageContext.state.Password}
                  onTextChange={(value) => setRegisterInfo({
                    ...registerInfo,
                    password: value,
                  })}
                />
                <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleRegister()}>
                  <Text style={styles.buttonText}>{languageContext.state.SignUp}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signIn} onPress={() => navigation.goBack()}>
                  <Text style={styles.signInText}>{languageContext.state.SignUpDesc}</Text>
                </TouchableOpacity>
              </>
            )
          }
      </View>
      <Text style={styles.descText}>{languageContext.state.TCDesc}</Text>
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
  errorDialog: {
    position: 'absolute',
    top: 20,
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
    textDecorationLine: 'underline',
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
