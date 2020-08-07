/* eslint-disable global-require */
import React, { useContext } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import colorSource from '../../constants/color';
import { LanguageContext } from '../providers/Language';

const VerifyEmail = () => {
  const languageContext = useContext(LanguageContext);
  return (
    <View style={styles.container}>
        <Image
          source={require('../../../assets/authen/email-sent-icon.png')}
          style={styles.imgVerify}
        />
        <Text style={styles.text}>
            {languageContext.state.VerifyDesc}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  imgVerify: {
    height: 100,
    width: 100,
  },
  text: {
    color: colorSource.white,
    fontSize: 15,
    marginTop: 40,
    textAlign: 'center',
  },
});

export default VerifyEmail;
