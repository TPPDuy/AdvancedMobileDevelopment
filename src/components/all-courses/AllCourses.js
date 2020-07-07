/* eslint-disable react/display-name */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ListCourses from '../home/ListCourses';
import screenName from '../../constants/screen-name';
import { ThemeContext } from '../../constants/theme';

const AllCourses = ({ route, navigation }) => {
  const { data } = route.params;

  const onItemClick = (course) => {
    navigation.navigate(screenName.CourseDetails, { course });
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <ListCourses
              title={data.title}
              courses={data.courses}
              onItemClick={(item) => onItemClick(item)}/>
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
  route: PropTypes.object,
  navigation: PropTypes.object,
};
export default AllCourses;
