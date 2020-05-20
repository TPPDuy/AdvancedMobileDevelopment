import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import colorSource from '../../constants/color';

const ItemAuthorHorizontal = ({ name, avatar }) => (
    <TouchableOpacity style={styles.container}>
        <Image source={{ uri: avatar }} resizeMode='cover' style={styles.avatar}/>
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 25,
    width: 25,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 20,
    flexDirection: 'row',
    height: 30,
    padding: 3,
  },
  name: {
    color: colorSource.white,
    fontSize: 14,
    marginHorizontal: 5,
  },
});
ItemAuthorHorizontal.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default ItemAuthorHorizontal;
