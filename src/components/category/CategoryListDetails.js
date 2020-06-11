/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React from 'react';
import {
  View, ScrollView, TouchableOpacity, Text, StyleSheet, ImageBackground, FlatList,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import colorSource from '../../constants/color';
import ItemCourse from '../common/ItemCourseRowType';
import screenName from '../../constants/screen-name';
import BackIcon from '../../../assets/common/back-icon.svg';
import { ThemeContext } from '../../constants/theme';

const renderSeparator = (dividerColor) => (
    <View style={{ height: 1, backgroundColor: dividerColor }}/>
);
const renderFooter = () => (
  <View style={{ height: 20 }}/>
);

const CategoryListDetails = ({
  id, name, thumbnail, courses, navigation,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => {
        const titleColor = theme.type === 'LIGHT' ? colorSource.darkGray : colorSource.lightGray;
        return (
          <ScrollView style={{ ...styles.container, backgroundColor: theme.background }}>
            <ImageBackground source={{ uri: thumbnail }} style={styles.thumbnail} resizeMode='cover'>
              <LinearGradient colors={[theme.overlayLayer1, theme.overlayLayer3]} style={styles.posterContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                  <BackIcon width={25} height={25} style={{ fill: theme.textColor }}/>
                </TouchableOpacity>
                <Text style={{ ...styles.title, color: titleColor }}>{name}</Text>
              </LinearGradient>
            </ImageBackground>
            <FlatList
              style={styles.listCourses}
              horizontal={false}
              data={courses}
              renderItem={
                ({ item }) => <ItemCourse
                                name={item.name}
                                thumbnail={item.thumbnail}
                                authors={item.authors}
                                level={item.level}
                                date={item.date}
                                duration={item.duration}
                                rating={item.rating}
                                numOfJudgement={item.numOfJudgement}
                                onItemClick={
                                  (itemId) => navigation.navigate(screenName.CourseDetails)
                                }
                              />
                }
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => renderSeparator(theme.dividerLine)}
              ListFooterComponent={renderFooter}/>
          </ScrollView>
        );
      }
    }
  </ThemeContext.Consumer>
);


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  iconContainer: {
    alignSelf: 'flex-start',
    margin: 15,
  },
  listCourses: {
    paddingHorizontal: 10,
  },
  posterContainer: {
    alignItems: 'center',
    height: '100%',
    marginBottom: 20,
  },
  thumbnail: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    color: colorSource.darkGray,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});

CategoryListDetails.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  courses: PropTypes.arrayOf(object),
  onItemClick: PropTypes.func,
  navigation: PropTypes.object,
};

CategoryListDetails.defaultProps = {
  name: 'New Releases',
  thumbnail: 'https://pluralsight.imgix.net/course-images/whats-new-vsphere-6-5-v1.jpg',
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

export default CategoryListDetails;
