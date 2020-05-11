import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const LoginOption = ({ title, icon, onChooseOption }) => (
    <TouchableOpacity onPress={() => onChooseOption}>
        <View>
            <Image source={{ uri: { icon } }}/>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
);

LoginOption.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onChooseOption: PropTypes.func,
};

LoginOption.defaultProps = {
  title: '',
  icon: '',
  onChooseOption: (f) => f,
};

export default LoginOption;
