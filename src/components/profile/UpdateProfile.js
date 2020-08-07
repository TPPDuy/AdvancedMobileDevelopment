/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useState, useContext, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import AnimatedLoader from 'react-native-animated-loader';
import CustomInput from '../common/Input';
import colorSource from '../../constants/color';
import ErrorDialog from '../common/ErrorDialog';
import { ProfileContext } from '../providers/Profile';
import { getProfile } from '../../storage/Storage';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import BackIcon from '../../../assets/common/back-icon.svg';
import SuccessDialog from '../common/SuccessDialog';
import { LanguageContext } from '../providers/Language';

const UpdateProfile = ({ navigation }) => {
  const imgSource = {
    name: require('../../../assets/authen/name-icon.png'),
    phone: require('../../../assets/authen/phone-icon.png'),
  };
  const profileContext = useContext(ProfileContext);
  const languageContext = useContext(LanguageContext);

  const [showMsg, setShowMsg] = useState(false);
  const [profile, setProfile] = useState({});
  const [updateInfo, setUpdateInfo] = useState({
    username: profile.name,
    phone: profile.phone,
    avatar: profile.avatar,
    avatarFile: null,
  });

  async function loadProfile() {
    const profileInfo = await getProfile();
    if (profileInfo) {
      console.log('get profile');
      setUpdateInfo({
        username: profileInfo.name,
        phone: profileInfo.phone,
        avatar: profileInfo.avatar,
      })
      setProfile(profileInfo);
    }
  }

  useEffect(() => {
    profileContext.resetStatus();
    loadProfile();
  }, []);

  useEffect(() => {
    if (profileContext.state.isSuccess || profileContext.state.isError) {
      setShowMsg(true);
      const interval = setInterval(() => {
        setShowMsg(false);
        clearInterval(interval);
      }, 2000);
    }
  }, [profileContext.state]);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Oops, bạn cần cấp quyền truy cập để có thể đổi ảnh đổi diện!');
      }
      return status;
    }
  };
  const pickImage = async () => {
    const status = await getPermissionAsync();
    if (status === 'granted') {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          let filename = result.uri.split('/').pop();
          // Infer the type of the image
          let match = /\.(\w+)$/.exec(filename);
          let type = match ? `image/${match[1]}` : `image`;

          setUpdateInfo({
            ...updateInfo,
            avatar: result.uri,
            avatarFile: {
            uri: result.uri,
            name: filename,
            type,
          }});
        }
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleUploadAvatar = () => {
    profileContext.uploadAvatar(updateInfo.avatarFile);
  };
  const handleUploadInfo = () => {
    profileContext.uploadInfo(updateInfo.username, updateInfo.phone);
  }
  const handleUpdate = () => {
    handleUploadInfo();
    if(updateInfo.avatarFile)
      handleUploadAvatar();
  };

  return (
    <LinearGradient colors={['#006DF0', '#A156F6', '#00E7F0']} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{languageContext.state.UpdateInfo}</Text>
        <View style={styles.infoContainer}>
            <TouchableOpacity onPress={pickImage}>
                <Image
                    source={{uri: updateInfo.avatar}}
                    style={styles.avatar}
                    resizeMode='cover'
                />
            </TouchableOpacity>
            <CustomInput
                icon={imgSource.name}
                isHideContent={false}
                placeHolder="Họ tên"
                value={updateInfo.username}
                onTextChange={(value) => setUpdateInfo({
                ...updateInfo,
                username: value,
                })}
            />
            <CustomInput
                icon={imgSource.phone}
                isHideContent={false}
                placeHolder="Điện thoại"
                value={updateInfo.phone}
                onTextChange={(value) => setUpdateInfo({
                ...updateInfo,
                phone: value,
                })}
            />
            <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleUpdate()}>
              <Text style={styles.buttonText}>{languageContext.state.Update}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{
                display: 'flex',
                flexDirection:'row',
                alignItems:'center',
                alignSelf: 'flex-start',
                marginTop: 30,
              }}>
              <BackIcon width={12} height={12} style={{ fill: '#fff' }}/>
              <Text style={styles.signInText}>{languageContext.state.Back}</Text>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 30,
    backgroundColor: colorSource.white,
  },
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
    backgroundColor: colorSource.black,
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
  loading: {
    height: 100,
    width: 100,
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signInText: {
    color: colorSource.white,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  title: {
    color: colorSource.white,
    fontSize: 30,
    marginBottom: 40,
  },
});

export default UpdateProfile;