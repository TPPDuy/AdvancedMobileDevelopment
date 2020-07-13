import React from 'react';
import {
  ImageBackground, Text, TouchableOpacity, StyleSheet, View, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import colorSource from '../../constants/color';

const ItemCategory = ({
  id, title, thumbnail, fontSize, onItemClick,
}) => (
    <TouchableOpacity style={styles.container} onPress={() => onItemClick(id)}>
        <ImageBackground resizeMode='cover' source={{ uri: thumbnail }} style={styles.background}>
            <View style={styles.overlay}>
                <Text style={{ ...styles.title, fontSize }}>{title}</Text>
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
    flex: 1,
    height: 80,
    justifyContent: 'center',
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
    fontWeight: '700',
    letterSpacing: 2,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

ItemCategory.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  fontSize: PropTypes.number,
  onItemClick: PropTypes.func,
};

ItemCategory.defaultProps = {
  title: 'NEW RELEASES',
  thumbnail: 'https://www.freecoursesonline.me/wp-content/uploads/2017/11/software-development.jpg',
  fontSize: 27,
};

export default ItemCategory;
