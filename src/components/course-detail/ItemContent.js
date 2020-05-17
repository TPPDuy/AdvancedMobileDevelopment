import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes, { object } from 'prop-types';
import colorSource from '../../../assets/color/color';

const ProgressBar = ({progress, total}) => (
    <View style={styles.progressContainer}>
        <View style={styles.progess}/>
    </View>
);

const Chapter = ({
  chapterName, index, duration, progress, content,
}) => (
    <View style={styles.container}>


    </View>
);

const styles = StyleSheet.create({
    container: {
    },
})

Chapter.propTypes = {
  chapterName: PropTypes.string,
  index: PropTypes.number,
  duration: PropTypes.number,
  progress: PropTypes.number,
  content: PropTypes.arrayOf(object),
};
