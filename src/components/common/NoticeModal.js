import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes, { string } from 'prop-types';

const NoticeModal = ({ label, msg, onAccept }) => (
    <View style={styles.Wrapper}>
        <Text>{label}</Text>
        <Text>{msg}</Text>
        <TouchableOpacity>
            <Text>Accept</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
  Label: {
    fontSize: 14,
    color: 
  },
  Message: {

  },
  ButtonAccept: {

  },
  Wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

});
NoticeModal.propTypes = {
  label: PropTypes.string,
  msg: PropTypes.string,
  onAccept: PropTypes.func,
};
NoticeModal.defaultProps = {
  label: 'Notice',
  msg: '',
  onAccept: (f) => f,
};
