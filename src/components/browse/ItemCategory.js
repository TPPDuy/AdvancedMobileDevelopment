import React, { useEffect } from 'react';
import {
  Text, TouchableOpacity, StyleSheet, View,
} from 'react-native';
import PropTypes from 'prop-types';
import colorSource from '../../constants/color';
import { getRandomColor } from '../../utils/ColorUtils';

const ItemCategory = ({
  title, fontSize, color, onItemClick,
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onItemClick()}>
    <View style={{ ...styles.item, backgroundColor: color }}>
      <Text style={{ ...styles.title, fontSize }}>{title}</Text>
    </View>
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
  color: PropTypes.string,
  fontSize: PropTypes.number,
  onItemClick: PropTypes.func,
};

ItemCategory.defaultProps = {
  title: '',
  fontSize: 27,
};

export default ItemCategory;
