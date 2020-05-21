import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import colorSource from '../../constants/color';

const ItemAuthor = ({ id, avatar, name, onChooseItem }) => (
    <TouchableOpacity style={styles.container} onPress={() => onChooseItem(id)}>
        <Image source={{ uri: avatar }} resizeMode="cover" style={styles.avatar}/>
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    height: 80,
    marginBottom: 5,
    width: 80,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 10,
    width: 80,
  },
  name: {
    color: colorSource.black,
    fontSize: 15,
    textAlign: 'center',
  },
});

ItemAuthor.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  onChooseItem: PropTypes.func,
};

ItemAuthor.defaultProps = {
  avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
  name: 'Scottn Allen',
  onChooseItem: (f) => f,
};

export default ItemAuthor;
