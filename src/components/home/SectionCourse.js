/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import ItemCourse from '../common/ItemCourseBlockType';
import RightArrow from '../../../assets/common/right-arrow-icon.svg';
import { ThemeContext } from '../../constants/theme';

const SectionCourse = ({
  id, title, courses, onSeeAll, onClickCourse,
}) => {
  const showActionSheet = () => {
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={styles(theme).container}>
            <View style={styles(theme).titleBlock}>
                <Text style={styles(theme).title}>{title}</Text>
                <TouchableOpacity style={styles(theme).seeAllBlock} onPress={() => onSeeAll()}>
                  <Text style={{ color: '#808080', fontSize: 14, marginRight: 5 }}>See all</Text>
                  <RightArrow width={8} height={8} style={{ fill: '#808080' }}/>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles(theme).listContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={courses}
                renderItem={({ item }) => <ItemCourse
                                            name={item.name}
                                            thumbnail={item.thumbnail}
                                            authors={item.authors}
                                            level={item.level}
                                            date={item.date}
                                            duration={item.duration}
                                            rating={item.rating}
                                            numOfJudgement={item.numOfJudgement}
                                            onShowMenu={showActionSheet()}
                                            onClickItem={() => onClickCourse(item)}/>}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </SafeAreaView>
         </View>
        )
      }
    </ThemeContext.Consumer>
  );
};


const styles = (theme) => StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 270,
    marginVertical: 10,
  },
  seeAllBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: theme.textColor,
    fontSize: 18,
    fontWeight: '600',
  },
  titleBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

SectionCourse.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  courses: PropTypes.arrayOf(object),
  onClickCourse: PropTypes.func,
  onSeeAll: PropTypes.func,
};
SectionCourse.defaultProps = {
  title: 'Software development',
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

export default SectionCourse;
