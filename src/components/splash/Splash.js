/* eslint-disable global-require */
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import colorSource from '../../constants/color';
import { getUserInfo, getProfile } from '../../storage/Storage';
import screenName from '../../constants/screen-name';
import { ProfileContext } from '../providers/Profile';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  loading: {
    height: 200,
    width: 200,
  },
});
const Splash = ({ navigation }) => {
  const profileContext = useContext(ProfileContext);
  const [isLogined, setIsLogined] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const checkLogined = async () => {
    const user = await getProfile();
    if (user) {
      console.log('user is not null', user);
      setIsLogined(true);
    } else {
      console.log('user is null');
      setIsLogined(false);
    }
  };
  useEffect(() => {
    profileContext.getProfile();
    setTimeout(() => checkLogined(), 2000);
  }, []);

  useEffect(() => {
    if (isLogined !== null) {
      setIsLoading(false);
      if (isLogined) navigation.navigate(screenName.Main);
      else navigation.replace(screenName.Authen);
    }
  }, [isLogined]);
  return (
    <LinearGradient
      colors={['#006DF0', '#A156F6DF', '#00E7F0']}
      style={styles.container}>
      <AnimatedLoader
        visible={isLoading}
        overlayColor={colorSource.transparent}
        source={require('../../../assets/common/splash.json')}
        animationStyle={styles.loading}
        speed={1.5}
      />
    </LinearGradient>
  );
};

Splash.propTypes = {
  navigation: PropTypes.object,
};
export default Splash;
