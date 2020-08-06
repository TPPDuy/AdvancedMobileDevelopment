/* eslint-disable react-native/no-color-literals */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, StyleSheet, Text,
} from 'react-native';
import colorSource from '../../constants/color';

const SuccessDialog = ({ msg }) => (
    <View style={styles.container}>
        <Image
          source={require('../../../assets/common/success-icon.png')}
          style={styles.img}
        />
        <Text style={styles.text}>{msg}</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffffAF',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: '100%',
  },
  img: {
    height: 25,
    marginRight: 10,
    width: 25,
  },
  text: {
    color: colorSource.black,
    fontSize: 15,
  },
});
SuccessDialog.propTypes = {
  msg: PropTypes.string,
};

export default SuccessDialog;
