import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes, { string } from 'prop-types';

const PopupMenu = ({ options, onChooseOption }) => (
        <View style={styles.container}>
            {options.map((option, index) => <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => onChooseOption(option, index)}>
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>)}
        </View>
);

const colorSource = {
  background: '#fbfbfb',
  text: '#000',
  overlay: 'rgba(220,220,220,0.15)',

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSource.background,
    borderColor: colorSource.overlay,
    borderRadius: 7,
    borderWidth: 2,
    flexDirection: 'column',
    paddingHorizontal: 10,
    position: 'absolute',
    right: 0,
    top: 20,
    width: '60%',
  },
  option: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  optionText: {
    color: colorSource.text,
    fontSize: 14,
  },
});

PopupMenu.propTypes = {
  options: PropTypes.arrayOf(string),
  onChooseOption: PropTypes.func,
};
PropTypes.defaultProps = {
  options: [],
  onChooseOption: (f) => f,
};

export default PopupMenu;
