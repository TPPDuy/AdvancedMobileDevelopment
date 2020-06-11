/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colorSource from '../../constants/color';
import Tick from '../../../assets/common/tick-icon.svg';
import { ThemeContext } from '../../constants/theme';

const ItemSkills = ({
  id, name, isInterested, onItemClick,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => {
        const background = theme.type === 'LIGHT' ? colorSource.lightGray : colorSource.darkGray;
        return (
        <TouchableOpacity style={{ ...styles.container, backgroundColor: background }} onPress={() => onItemClick(id)}>
          {isInterested
            ? <LinearGradient colors={['#ff6600', '#ff0084']} style={styles.tickInterested}>
                  <Tick width={10} height={10} style={{ fill: '#fff' }} />
                </LinearGradient>
            : null
          }
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        );
      }
    }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  id: PropTypes.string,
  name: PropTypes.string,
  isInterested: PropTypes.bool,
  onItemClick: PropTypes.func,
};
ItemSkills.defaultProps = {
  name: 'Android',
  isInterested: false,
  onItemClick: (f) => f,
};

export default ItemSkills;
