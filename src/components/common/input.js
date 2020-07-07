/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import React, { useState, useRef } from 'react';
import {
  View, StyleSheet, TextInput, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import colorSource from '../../constants/color';

const CustomInput = ({
  icon, placeHolder, isHideContent, onTextChange,
}) => {
  const [inputText, setInputText] = useState('');

  const updateValue = (text) => {
    onTextChange(text);
    setInputText(text);
  };

  return (
    <View style={styles.inputContainer}>
        <Image source={icon} style={styles.inputIcon}/>
        <TextInput
            style={styles.input}
            value={inputText}
            underlineColorAndroid='transparent'
            placeholder={placeHolder}
            secureTextEntry={isHideContent}
            onChangeText={(text) => updateValue(text)}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colorSource.transparent,
    color: colorSource.black,
    flex: 1,
    fontSize: 15,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 7,
    padding: 10,
    width: '100%',
  },
  inputIcon: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
});

CustomInput.propTypes = {
  icon: PropTypes.number,
  placeHolder: PropTypes.string,
  isHideContent: PropTypes.bool,
  onTextChange: PropTypes.func,
};

CustomInput.defaultProps = {
  icon: undefined,
  placeHolder: '',
  isHideContent: false,
  onTextChange: (f) => f,
};

export default CustomInput;
