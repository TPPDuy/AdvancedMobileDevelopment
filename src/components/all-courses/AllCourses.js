/* eslint-disable react/display-name */
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ListCourses from '../home/ListCourses';
import screenName from '../../constants/screen-name';
import { ThemeContext } from '../../constants/theme';
import { HomeContext } from '../providers/Home';

const AllCourses = ({ route, navigation }) => {
  const selectedCategory = route.params.category;
  const selectedTitle = route.params.title;

  const homeContext = useContext(HomeContext);

  const onItemClick = (course) => {
    navigation.navigate(screenName.CourseDetails, { course });
  };
  useEffect(() => {
    homeContext.getAllCourse(selectedCategory);
  }, []);
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            <ListCourses
               title={selectedTitle}
               courses={homeContext.state.allCourse}
              // onItemClick={(item) => onItemClick(item)}
            />
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
