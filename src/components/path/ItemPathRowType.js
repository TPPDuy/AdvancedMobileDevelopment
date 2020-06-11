/* eslint-disable global-require */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import colorSource from '../../constants/color';
import MenuIcon from '../../../assets/common/menu-icon.svg';
import { ThemeContext } from '../../constants/theme';

const ItemPath = ({
  id, name, numOfCourses, thumbnail, onChooseItem,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <TouchableOpacity style={styles.container} onPress={() => onChooseItem(id)}>
          <Image source={{ uri: thumbnail }} style={{
            width: '22%', height: 60, marginRight: 10, backgroundColor: colorSource.darkGray,
          }} resizeMode='center'/>
          <View style={styles.infoContainer}>
            <Text
              numberOfLines={2}
              style={{ ...styles.courseName, color: theme.textColor }}>{name}</Text>
            <Text numberOfLines={1} style={styles.normalText}>
              {numOfCourses} courses
            </Text>
          </View>
          <TouchableOpacity>
            <MenuIcon width={15} height={15} style={{ fill: theme.textColor }}/>
          </TouchableOpacity>
        </TouchableOpacity>
      )
    }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    width: '100%',
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
  },
  normalText: {
    color: colorSource.gray,
    fontSize: 14,
    marginTop: 3,
    textAlign: 'left',
  },
});

ItemPath.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  numOfCourses: PropTypes.number,
  thumbnail: PropTypes.string,
  onChooseItem: PropTypes.func,
};

ItemPath.defaultProps = {
  name: 'CCSP (Certified Cloud Security Professional)',
  numOfCourses: 9,
  thumbnail: 'https://pluralsight2.imgix.net/paths/images/comptia-security-plus-5d8ab8e621.png',
  onChooseItem: (f) => f,
};
export default ItemPath;
