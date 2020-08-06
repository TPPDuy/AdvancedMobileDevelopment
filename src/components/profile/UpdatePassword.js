/* eslint-disable react-native/no-inline-styles */
/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedLoader from 'react-native-animated-loader';
import CustomInput from '../common/Input';
import colorSource from '../../constants/color';
import ErrorDialog from '../common/ErrorDialog';
import { ProfileContext } from '../providers/Profile';
import BackIcon from '../../../assets/common/back-icon.svg';
import SuccessDialog from '../common/SuccessDialog';

const UpdatePassword = ({ navigation }) => {
  const imgSource = {
    password: require('../../../assets/authen/password-icon.png'),
  };
  const profileContext = useContext(ProfileContext);
  const [showMsg, setShowMsg] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    oldPass: '',
    newPass: '',
    confirmPass: '',
  });

  useEffect(() => {
    if (profileContext.state.isSuccess || profileContext.state.isError) {
      console.log('failed');
      setShowMsg(true);
      const interval = setInterval(() => {
        setShowMsg(false);
        clearInterval(interval);
      }, 2000);
    }
  }, [profileContext.state]);
  const handleUploadInfo = () => {
    profileContext.updatePassword(updateInfo.oldPass, updateInfo.newPass, updateInfo.confirmPass);
  };
  const handleUpdate = () => {
    handleUploadInfo();
  };

  return (
    <LinearGradient colors={['#006DF0', '#A156F6', '#00E7F0']} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Đổi mật khẩu</Text>
        <View style={styles.infoContainer}>
            <CustomInput
                icon={imgSource.password}
                isHideContent
                placeHolder="Mật khẩu cũ"
                onTextChange={(value) => setUpdateInfo({
                  ...updateInfo,
                  oldPass: value,
                })}
            />
            <CustomInput
                icon={imgSource.password}
                isHideContent
                placeHolder="Mật khẩu mới"
                onTextChange={(value) => setUpdateInfo({
                  ...updateInfo,
                  newPass: value,
                })}
            />
            <CustomInput
                icon={imgSource.password}
                isHideContent
                placeHolder="Xác nhận mật khẩu mới"
                onTextChange={(value) => setUpdateInfo({
                  ...updateInfo,
                  confirmPass: value,
                })}
            />
            <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleUpdate()}>
              <Text style={styles.buttonText}>Cập nhật</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginTop: 30,
              }}>
              <BackIcon width={12} height={12} style={{ fill: '#fff' }}/>
              <Text style={styles.signInText}>Trở về</Text>
            </TouchableOpacity>
        </View>
      </View>
      {
        showMsg && profileContext.state.isError
          ? (
          <View style={styles.errorDialog}>
            <ErrorDialog msg={profileContext.state.msg} />
          </View>
          )
          : null
      }
      {
        showMsg && profileContext.state.isSuccess
          ? (
        <View style={styles.errorDialog}>
          <SuccessDialog msg={profileContext.state.msg} />
        </View>
          )
          : null
      }
      <AnimatedLoader
          visible={profileContext.state.isLoading}
          overlayColor="rgba(0,0,0,0.65)"
          source={require('../../../assets/common/loader.json')}
          animationStyle={styles.loading}
          speed={2}
        />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonSignIn: {
    backgroundColor: colorSource.white,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: colorSource.black,
    fontSize: 17,
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
  infoContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  loading: {
    height: 100,
    width: 100,
  },
  signInText: {
    color: colorSource.white,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
  title: {
    color: colorSource.white,
    fontSize: 30,
    marginBottom: 40,
  },
});

export default UpdatePassword;
