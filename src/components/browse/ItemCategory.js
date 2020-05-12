import React from 'react';
import {
  ImageBackground, Text, TouchableOpacity, StyleSheet, View,
} from 'react-native';
import PropTypes from 'prop-types';
import colorSource from '../../../assets/color/color';

const ItemCategory = ({ title, thumbnail }) => (
    <TouchableOpacity style={styles.container}>
        <ImageBackground resizeMode='cover' source={{ uri: thumbnail }} style={styles.background}>
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: colorSource.darkOverlay,
    height: '100%',
    justifyContent: 'center',
    width: '100%',

  },
  title: {
    color: colorSource.white,
    fontSize: 27,
    fontWeight: '700',
    letterSpacing: 2,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

ItemCategory.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

ItemCategory.defaultProps = {
  title: 'NEW RELEASES',
  thumbnail: 'https://www.freecoursesonline.me/wp-content/uploads/2017/11/software-development.jpg',
};

export default ItemCategory;
