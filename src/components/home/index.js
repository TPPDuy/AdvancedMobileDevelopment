import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SectionCourse from './SectionCourse';
import colorSource from '../../constants/color';
import screenName from '../../constants/screen-name';

const data = [
  {
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
  },
  {
    title: 'IT operations',
    courses: [
      {
        id: 1,
        name: 'Architecting for Reliability on AWS',
        thumbnail: 'https://pluralsight.imgix.net/course-images/aws-architecting-reliability-v1.png',
        authors: [
          'Mike Pfeiffer',
        ],
        level: 'Intermediate',
        date: 1589250813000,
        duration: 600,
        rating: 4.5,
        numOfJudgement: 326,
      },
      {
        id: 2,
        name: 'Architecting for Security on AWS',
        thumbnail: 'https://pluralsight.imgix.net/course-images/architecting-security-aws-v1.png',
        authors: [
          'Ben Piper',
        ],
        level: 'Intermediate',
        date: 1589250913000,
        duration: 800,
        rating: 4,
        numOfJudgement: 819,
      },
      {
        id: 3,
        name: 'Designing Infrastructure Deployment on AWS',
        thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-designing-infrastructure-deployment-v1.png',
        authors: [
          'Brian Harrison',
        ],
        level: 'Intermediate',
        date: 1589250813000,
        duration: 600,
        rating: 4.5,
        numOfJudgement: 13,
      },
    ],
  },
];

const Home = ({ navigation }) => {
  const onSeeAll = (categoryId) => {
    console.log('See all');
    navigation.navigate(screenName.AllCourses);
  };
  const onClickCourse = (id) => {
    console.log('Click Item');
    navigation.navigate(screenName.CourseDetails);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <SectionCourse
                title={data[0].title}
                courses={data[0].courses}
                onSeeAll={(categoty) => onSeeAll(categoty)}
                onClickCourse={(id) => onClickCourse(id)}/>
            <SectionCourse
                title={data[1].title}
                courses={data[1].courses}
                onSeeAll={(categoty) => onSeeAll(categoty)}
                onClickCourse={(id) => onClickCourse(id)}/>
            <SectionCourse
                title={data[0].title}
                courses={data[0].courses}
                onSeeAll={(categoty) => onSeeAll(categoty)}
                onClickCourse={(id) => onClickCourse(id)}/>
            <SectionCourse
                title={data[1].title}
                courses={data[1].courses}
                onSeeAll={(categoty) => onSeeAll(categoty)}
                onClickCourse={(id) => onClickCourse(id)}/>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSource.white,
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
