/* eslint-disable global-require */
import React, { useContext, useEffect, useState } from 'react';
import {
  View, Image, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { ThemeContext } from '../../constants/theme';
import colorSource from '../../constants/color';
import ListItemSkill from '../skill/ListItemSkill';
import RightArrow from '../../../assets/profile/right-arrow-icon.svg';
import { getProfile, clearUserInfo } from '../../storage/Storage';
import screenName from '../../constants/screen-name';
import { CommonActions } from '@react-navigation/native';
import BackIcon from '../../../assets/common/back-icon.svg';

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState({});
  
  const handleLogout = async () => {
    await clearUserInfo();
    navigation.pop();
    navigation.replace(screenName.Authen);
  };
  async function loadProfile() {
    const profileInfo = await getProfile();
    if (profileInfo) setProfile(profileInfo);
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadProfile();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ ...styles.container, backgroundColor: theme.background }}
          >
            <View style={styles.infoBlock}>
              <Image source={{ uri: profile.avatar }} style={styles.avatar} resizeMode='cover'/>
              <Text style={styles.name}>
                {profile.name}
              </Text>
              {
                (profile.phone && profile.phone.length !== 0)
                  ? (
                    <View style={styles.socialContainer}>
                      <Image source={require('../../../assets/author/phone-icon.png')} style={styles.icon}/>
                      <Text style={styles.link}>{profile.phone}</Text>
                    </View>
                  )
                  : null
              }
              {
                (profile.email && profile.email.length !== 0)
                  ? (
                    <View style={styles.socialContainer}>
                      <Image source={require('../../../assets/author/mail-icon.png')} style={styles.icon}/>
                      <Text style={styles.link}>{profile.email}</Text>
                    </View>
                  )
                  : null
              }
              <View style={styles.socialContainer}>
                <Image
                  source={require('../../../assets/author/facebook-icon.png')}
                  style={styles.socialIcon}
                />
                <Image
                  source={require('../../../assets/author/linkedin-icon.png')}
                  style={styles.socialIcon}
                />
              </View>
            </View>
            {/* {
              (profileContext.state.profile.skills && profileContext.state.profile.skills.length !== 0)
                ? (
                  <View style={styles.listCourses}>
                    <Text style={{ ...styles.title, color: theme.textColor }}>Kỹ năng</Text>
                    <ListItemSkill
                      listSkills={profileContext.state.profile.skills}
                    />
                  </View>
                )
                : null
            } */}
            <View style={styles.optionBlock}>
              <TouchableOpacity style={styles.option} onPress={() => navigation.navigate(screenName.UpdateProfile)}>
                <Text style={{...styles.optionText, color: theme.textColor}}>Cập nhật thông tin</Text>
                <RightArrow width={13} height={13} fill={theme.textColor}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option}>
                <Text style={{...styles.optionText, color: theme.textColor}}>Thay đổi email</Text>
                <RightArrow width={13} height={13} fill={theme.textColor}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => navigation.navigate(screenName.UpdatePassword)}>
                <Text style={{...styles.optionText, color: theme.textColor}}>Đổi mật khẩu</Text>
                <RightArrow width={13} height={13} fill={theme.textColor}/>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={() => handleLogout()}>
              <View style={styles.logoutButton}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: colorSource.white,
                  alignSelf: 'center'
                }}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              style={{
                display: 'flex',
                flexDirection:'row',
                alignItems:'center',
                marginTop: 30,
                paddingHorizontal: 20,
              }}>
              <BackIcon width={10} height={10} style={{ fill: theme.textColor }}/>
              <Text style={{...styles.optionText, color: theme.textColor, marginLeft: 5}}>Trở về</Text>
            </TouchableOpacity>
          </ScrollView>
        )
      }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: colorSource.white,
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    paddingTop: 20,
    width: '100%',
  },
  icon: {
    height: 15,
    marginRight: 10,
    width: 15,
  },
  infoBlock: {
    alignItems: 'center',
    backgroundColor: colorSource.darkBackground,
    borderRadius: 20,
    flexDirection: 'column',
    marginHorizontal: 15,
    padding: 15,
  },
  link: {
    color: colorSource.white,
    fontSize: 15,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: colorSource.blue,
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '50%',
    alignSelf: 'center',
  },
  name: {
    color: colorSource.white,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionBlock: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  optionText: {
    fontSize: 13,
  },
  socialContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginTop: 15,
  },
  socialIcon: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
});
export default Profile;
