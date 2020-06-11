/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React from 'react';
import {
  View, ScrollView, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SectionCourse from './SectionCourse';
import colorSource from '../../constants/color';
import screenName from '../../constants/screen-name';
import MenuIcon from '../../../assets/common/menu-icon.svg';
import DarkIcon from '../../../assets/common/dark.svg';
import LightIcon from '../../../assets/common/light.svg';
import themes, { ThemeContext } from '../../constants/theme';

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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ThemeContext.Consumer>
          {
            ({ theme, setTheme }) => {
              console.log(theme);
              return (
                <View style={styles.headerRightContainer}>
                  {
                    theme.type === 'LIGHT'
                      ? <TouchableOpacity onPress={() => setTheme(themes.dark)}>
                          <LightIcon width={28} height={28} />
                        </TouchableOpacity>
                      : <TouchableOpacity onPress={() => setTheme(themes.light)}>
                          <DarkIcon width={28} height={28} />
                        </TouchableOpacity>
                  }
                  <Image source={require('../../../assets/common/avatar-holder-icon.png')} style={styles.avatar}/>
                  <MenuIcon width={18} height={18} style={{ fill: theme.textColor }}/>
                </View>
              );
            }
          }
        </ThemeContext.Consumer>
      ),
    });
  });
  return (
    <ThemeContext>
      {
        ({ theme }) => {
          console.log(theme);
          return (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ backgroundColor: theme.background }}>
                <Image source={require('../../../assets/common/explore-image.gif')} style={styles.homeImage} resizeMode="stretch"/>
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
        }
      }
    </ThemeContext>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 30,
    marginHorizontal: 15,
    width: 30,
  },
  headerRightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  homeImage: {
    height: 200,
    width: '100%',
  },
});


Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
