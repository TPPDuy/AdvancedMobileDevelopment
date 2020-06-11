/* eslint-disable react/display-name */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes, { object } from 'prop-types';
import ListCourses from '../home/ListCourses';
import colorSource from '../../constants/color';
import screenName from '../../constants/screen-name';
import { ThemeContext } from '../../constants/theme';
import BackIcon from '../../../assets/common/back-icon.svg';

const AllCourses = ({ courses, navigation }) => {
  const onItemClick = (id) => {
    navigation.navigate(screenName.CourseDetails);
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
              <ListCourses onItemClick={(id) => onItemClick(id)}/>
          </View>
        )
      }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 15,
    width: '100%',
  },
});

AllCourses.propTypes = {
  courses: PropTypes.arrayOf(object),
  navigation: PropTypes.object,
};
export default AllCourses;
