/* eslint-disable global-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, TouchableWithoutFeedback, Image,
} from 'react-native';
import colorSource from '../../../assets/color/color';

const CollapsableDescription = ({ minHeight, description }) => {
  const [isExpand, setExpand] = useState(false);
  const expandIcon = isExpand ? require('../../../assets/course-detail/up-arrow-icon.png') : require('../../../assets/course-detail/down-arrow-icon.png');
  const descHeight = isExpand ? null : minHeight;
  return (
        <View style={styles.descContainer}>
              <Text style={{ ...styles.textDesc, height: descHeight }}>{description}</Text>
              <TouchableWithoutFeedback onPress={() => setExpand(!isExpand)}>
                <View style={styles.expandContainer}>
                  <Image style={styles.expandIcon} source={expandIcon} resizeMode='contain'/>
                </View>
              </TouchableWithoutFeedback>
            </View>
  );
};
const styles = StyleSheet.create({
  descContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  expandContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 20,
  },
  expandIcon: {
    flex: 1,
    height: 12,
    width: 12,
  },
  textDesc: {
    color: colorSource.white,
    fontSize: 14,
    textAlign: 'justify',
    width: '92%',
  },
});

CollapsableDescription.propTypes = {
  minHeight: PropTypes.number,
  description: PropTypes.string,
};

export default CollapsableDescription;
