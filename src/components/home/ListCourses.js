/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import ItemCourse from '../common/ItemCourseRowType';
import { ThemeContext } from '../../constants/theme';
import NoDataIcon from '../../../assets/common/no-data-icon.svg';

const renderSeparator = (dividerColor) => (
    <View style={{ height: 1, backgroundColor: dividerColor }}/>
);
const renderFooter = () => (
  <View style={{ height: 20 }}/>
);
const ListCourses = ({ title, courses, onItemClick }) => (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={styles.container}>
            {
              (title && title.length !== 0)
                ? (
                <Text style={{ ...styles.title, color: theme.textColor }}>{title}</Text>
                )
                : null
            }
            <FlatList
              horizontal={false}
              data={courses}
              renderItem={({ item }) => <ItemCourse
                                            name={item.title || item.courseTitle}
                                            thumbnail={item.imageUrl || item.courseImage}
                                            author={item['instructor.user.name'] || item.instructorName}
                                            numOfVideos={item.videoNumber}
                                            date={item.updatedAt}
                                            duration={item.totalHours}
                                            rating={item.ratedNumber || item.courseAveragePoint}
                                            price={item.price || item.coursePrice}
                                            onItemClick={() => onItemClick(item)}/>}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => renderSeparator(theme.dividerLine)}
              ListFooterComponent={renderFooter}
              ListEmptyComponent={() => (
                <View style={styles.emptyComponent}>
                  <NoDataIcon width={50} height={50} />
                  <Text style={{ fontSize: 14, color: theme.textColor, marginTop: 15 }}>Không tìm thấy khóa học nào</Text>
                </View>
              )}/>
          </View>
        )
      }
    </ThemeContext.Consumer>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  emptyComponent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    marginBottom: '5%',
    marginTop: '60%',
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 20,
  },
});

ListCourses.propTypes = {
  title: PropTypes.string,
  courses: PropTypes.arrayOf(object),
  onItemClick: PropTypes.func,
};

ListCourses.defaultProps = {
  title: '',
  courses: [
    {
      id: 1,
      name: 'Java Programming - Build your first project',
      thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
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
