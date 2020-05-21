import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes, { object } from 'prop-types';
import ListCourses from '../home/ListCourses';
import colorSource from '../../constants/color';
import screenName from '../../constants/screen-name';


const AllCourses = ({ courses, navigation }) => {
  const onItemClick = (id) => {
    navigation.navigate(screenName.CourseDetails);
  };
  return (
    <View style={styles.container}>
        <ListCourses onItemClick={(id) => onItemClick(id)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSource.white,
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
