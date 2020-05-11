import React from 'react';
import {
  Text, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const LoginOption = ({ title, icon, onChooseOption }) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => onChooseOption}>
        <Image source={icon} style={styles.icon}/>
        <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
);

const white = '#FFF';
const black = '#000';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 12,
    width: '100%',
  },
  icon: {
    height: 25,
    width: 25,
  },
  textTitle: {
    color: black,
    fontSize: 15,
    marginLeft: 15,
  },
});

LoginOption.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.number,
  onChooseOption: PropTypes.func,
};

LoginOption.defaultProps = {
  title: '',
  icon: undefined,
  onChooseOption: (f) => f,
};

export default LoginOption;
