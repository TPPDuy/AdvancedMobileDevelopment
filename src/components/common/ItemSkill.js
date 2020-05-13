/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colorSource from '../../../assets/color/color';

const ItemSkills = ({ name, isInterested }) => (
        <TouchableOpacity style={styles.container}>
            {isInterested
              ? <LinearGradient colors={['#ff6600', '#ff0084']} style={styles.tickInterested}>
                    <Image source={require('../../../assets/common/tick-white-icon.png')} style={{ width: 12, height: 12 }}/>
                </LinearGradient>
              : null
            }
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colorSource.lightGray,
    borderRadius: 100,
    flexDirection: 'row',
    height: 32,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  name: {
    color: colorSource.white,
    fontSize: 13,
    fontWeight: '500',
    marginHorizontal: 7,
  },
  tickInterested: {
    alignItems: 'center',
    borderRadius: 10,
    height: 20,
    justifyContent: 'center',
    marginLeft: 3,
    width: 20,
  },
});

ItemSkills.propTypes = {
  name: PropTypes.string,
  isInterested: PropTypes.bool,
};
ItemSkills.defaultProps = {
  name: 'Android',
  isInterested: false,
};

export default ItemSkills;
