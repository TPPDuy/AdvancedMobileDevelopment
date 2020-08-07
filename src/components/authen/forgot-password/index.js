/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../common/Input';
import colorSource from '../../../constants/color';
import { AuthenContext } from '../../providers/Authen';
import VerifyEmail from '../verify';
import ErrorDialog from '../../common/ErrorDialog';
import BackIcon from '../../../../assets/common/back-icon.svg';

const ForgotPassword = ({navigation}) => {
  const imgSource = {
    email: require('../../../../assets/authen/email-icon.png'),
  };
  const authenContext = useContext(AuthenContext);
  const [email, setEmail] = useState('');
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (authenContext.state.forgotPassStatus === 2) {
      console.log('failed');
      setShowMsg(true);
      const interval = setInterval(() => {
        setShowMsg(false);
        clearInterval(interval);
      }, 2000);
    }
  }, [authenContext.state]);

  const handleForgotPass = () => {
    profileContext.resetPassword(email);
  };
  return (
    <LinearGradient colors={['#006DF0', '#A156F6', '#00E7F0']} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quên mật khẩu</Text>
      </View>
      {
        authenContext.state.forgotPassStatus === 1
        ? (
          <>
            <View style={{height: 50}}/>
            <VerifyEmail />
            <View style={{height: 20}}/>
            <TouchableOpacity style={styles.buttonSignIn} onPress={() => {
                authenContext.resetForgotPassStatus();
                navigation.goBack();
              }
            }>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </>
        )
        : (
          <>
            <Text style={styles.descText}>
              Nhập email liên kết với tài khoản. Chúng tôi sẽ gửi liên kết về email để đặt lại mật khẩu.
            </Text>
            <View style={styles.formContainer}>
                <CustomInput
                  icon={imgSource.email}
                  isHideContent={false}
                  placeHolder="Email"
                  onTextChange={(value) => setEmail(value)}
                />
                <TouchableOpacity style={styles.buttonSignIn} onPress={handleForgotPass}>
                  <Text style={styles.buttonText}>Đặt lại mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{
                    display: 'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    marginTop: 30,
                  }}>
                  <BackIcon width={12} height={12} style={{ fill: '#fff' }}/>
                  <Text style={styles.signInText}>Trở về</Text>
                </TouchableOpacity>
            </View>
          </>
        )
      }
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
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
  },
  signInText: {
    color: colorSource.white,
    textDecorationLine: 'underline',
    marginLeft: 5,
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
