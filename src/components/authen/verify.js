/* eslint-disable global-require */
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import colorSource from '../../constants/color';

const VerifyEmail = () => (
    <View style={styles.container}>
        <Image
          source={require('../../../assets/authen/email-sent-icon.png')}
          style={styles.imgVerify}
        />
        <Text style={styles.text}>
            Chúng tôi đã gửi liên kết xác nhận về email của bạn. Vui lòng kiểm tra hộp thư!
        </Text>
    </View>
);

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
