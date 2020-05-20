/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, FlatList,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import colorSource from '../../constants/color';
import ItemCourse from '../common/ItemCourseRowType';

const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: colorSource.borderColor }}/>
);
const renderFooter = () => (
  <View style={{ height: 20 }}/>
);
const ListCourses = ({ title, courses }) => (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={false}
                data={courses}
                renderItem={({ item }) => <ItemCourse
                                              name={item.name}
                                              thumbnail={item.thumbnail}
                                              authors={item.authors}
                                              level={item.level}
                                              date={item.date}
                                              duration={item.duration}
                                              rating={item.rating}
                                              numOfJudgement={item.numOfJudgement}/>}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter}/>
        </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: '100%',
  },
  title: {
    color: colorSource.black,
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 20,
  },
});

ListCourses.propTypes = {
  title: PropTypes.string,
  courses: PropTypes.arrayOf(object),
};

ListCourses.defaultProps = {
  title: 'Software Development',
  courses: [
    {
      id: 1,
      name: 'Java Programming - Build your first project',
      thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      authors: [
        'Ben Piper',
        'Scott Allen',
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 4.5,
      numOfJudgement: 326,
    },
    {
      id: 2,
      name: 'Agular Fundamentals',
      thumbnail: 'https://pluralsight.imgix.net/course-images/angular-fundamentals-v1.jpg',
      authors: [
        'Joe Eames',
      ],
      level: 'Intermediate',
      date: 1589250913000,
      duration: 800,
      rating: 4,
      numOfJudgement: 819,
    },
    {
      id: 3,
      name: 'Managing AWS Operations',
      thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png',
      authors: [
        'Andru Estes',
      ],
      level: 'Intermediate',
      date: 1589250813000,
      duration: 600,
      rating: 4.5,
      numOfJudgement: 13,
    },
    {
      id: 4,
      name: 'C# Fundamentals',
      thumbnail: 'https://pluralsight.imgix.net/course-images/csharp-fundamentals-dev-v1.png',
      authors: [
        'Scott Allen',
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 3.5,
      numOfJudgement: 445,
    },
    {
      id: 5,
      name: 'How Git Works',
      thumbnail: 'https://pluralsight.imgix.net/course-images/how-git-works-v1.jpg',
      authors: [
        'Paolo Perrotta',
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 5,
      numOfJudgement: 6988,
    },
  ],
};

export default ListCourses;
