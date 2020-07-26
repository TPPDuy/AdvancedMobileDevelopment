import React from 'react';
import {
  Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import colorSource from '../../constants/color';

const ItemCategory = ({
  title, fontSize, onItemClick,
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onItemClick()}>
    <LinearGradient colors={['#A156F6', '#00E7F0']} style={styles.item}>
      <Text style={{ ...styles.title, fontSize }}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 80,
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    borderRadius: 7,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colorSource.white,
    fontWeight: '700',
    letterSpacing: 2,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

ItemCategory.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.number,
  onItemClick: PropTypes.func,
};

ItemCategory.defaultProps = {
  title: '',
  fontSize: 27,
};

export default ItemCategory;
