/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
import {
  View, ScrollView, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimatedLoader from 'react-native-animated-loader';
import SectionCourse from './SectionCourse';
import screenName from '../../constants/screen-name';
import MenuIcon from '../../../assets/common/menu-icon.svg';
import DarkIcon from '../../../assets/common/dark.svg';
import LightIcon from '../../../assets/common/light.svg';
import themes, { ThemeContext } from '../../constants/theme';
import { HomeContext } from '../providers/Home';

const dumbData = [
  {
    title: 'Software development',
    courses: [
      {
        id: 1,
        name: 'Java Programming - Build your first project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
        author: 'Jim Cooper',
        date: '2020-07-07T12:57:36.035Z',
        duration: 0.36,
        rating: 4.5,
        price: 0,
        isBookmarked: false,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 120000,
              lessons: [
                {
                  name: 'Introduction to Java',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: true,
                },
              ],
            },
            {
              name: 'Basic Java\'s syntax',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'Syntax about String',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Number',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Operation',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
      {
        id: 2,
        name: 'Agular Fundamentals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/angular-fundamentals-v1.jpg',
        author: 'Jim Cooper',
        date: '2020-07-07T12:57:36.035Z',
        duration: 0.36,
        rating: 4.5,
        price: 0,
        numOfJudgement: 819,
        isBookmarked: true,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 300000,
              lessons: [
                {
                  name: 'Introduction to Agular',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: true,
                  isPlaying: false,
                },
              ],
            },
            {
              name: 'Basic Agular\'s syntax',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'Syntax about String',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: true,
                },
                {
                  name: 'Syntax about Number',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Operation',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
      {
        id: 3,
        name: 'Managing AWS Operations',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png',
        author: 'Jim Cooper',
        date: '2020-07-07T12:57:36.035Z',
        duration: 0.36,
        rating: 4.5,
        price: 0,
        numOfJudgement: 13,
        isBookmarked: false,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 120000,
              lessons: [
                {
                  name: 'Introduction to AWS',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: true,
                },
              ],
            },
            {
              name: 'Basic AWS\'s syntax',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'Syntax about String',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Number',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Operation',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
      {
        id: 4,
        name: 'C# Fundamentals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/csharp-fundamentals-dev-v1.png',
        author: 'Jim Cooper',
        date: '2020-07-07T12:57:36.035Z',
        duration: 0.36,
        rating: 4.5,
        price: 0,
        numOfJudgement: 445,
        isBookmarked: false,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 120000,
              lessons: [
                {
                  name: 'Introduction to C#',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: true,
                },
              ],
            },
            {
              name: 'Basic C#\'s syntax',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'Syntax about String',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Number',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Operation',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
      {
        id: 5,
        name: 'How Git Works',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/how-git-works-v1.jpg',
        author: 'Jim Cooper',
        date: '2020-07-07T12:57:36.035Z',
        duration: 0.36,
        rating: 4.5,
        price: 0,
        numOfJudgement: 6988,
        isBookmarked: true,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 120000,
              lessons: [
                {
                  name: 'Introduction to Git',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: true,
                },
              ],
            },
            {
              name: 'Basic Git',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'What is repository',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'What is branch',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'What is commit',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    title: 'IT operations',
    courses: [
      {
        id: 1,
        name: 'Architecting for Reliability on AWS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/aws-architecting-reliability-v1.png',
        authors: [
          {
            name: 'Deborah Kurata',
            avatar: 'https://pluralsight.imgix.net/author/lg/deborah-kurata-v1.jpg?w=200',
          },
        ],
        level: 'Intermediate',
        date: 1589250813000,
        duration: 600,
        rating: 4.5,
        numOfJudgement: 326,
        isBookmarked: false,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 120000,
              lessons: [
                {
                  name: 'Introduction to Java',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: true,
                },
              ],
            },
            {
              name: 'Basic Java\'s syntax',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'Syntax about String',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Number',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Operation',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
      {
        id: 2,
        name: 'Architecting for Security on AWS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/architecting-security-aws-v1.png',
        authors: [
          {
            name: 'Jim Wilson',
            avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
          },
        ],
        level: 'Intermediate',
        date: 1589250913000,
        duration: 800,
        rating: 4,
        numOfJudgement: 819,
        isBookmarked: false,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 120000,
              lessons: [
                {
                  name: 'Introduction to Java',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: true,
                },
              ],
            },
            {
              name: 'Basic Java\'s syntax',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'Syntax about String',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Number',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Operation',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
      {
        id: 3,
        name: 'Designing Infrastructure Deployment on AWS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
        thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-designing-infrastructure-deployment-v1.png',
        authors: [
          {
            name: 'Cory House',
            avatar: 'https://pluralsight.imgix.net/author/lg/cory-house-v3.jpg?w=200',
          },
        ],
        level: 'Intermediate',
        date: 1589250813000,
        duration: 600,
        rating: 4.5,
        numOfJudgement: 13,
        isBookmarked: true,
        content: {
          modules: [
            {
              name: 'Intro',
              duration: 300000,
              progress: 120000,
              lessons: [
                {
                  name: 'Introduction to Java',
                  duration: 120000,
                  isCompleted: true,
                  isPlaying: false,
                },
                {
                  name: 'What you will get in this course',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: true,
                },
              ],
            },
            {
              name: 'Basic Java\'s syntax',
              duration: 2400000,
              progress: 0,
              lessons: [
                {
                  name: 'Syntax about String',
                  duration: 300000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Number',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
                {
                  name: 'Syntax about Operation',
                  duration: 180000,
                  isCompleted: false,
                  isPlaying: false,
                },
              ],
            },
          ],
        },
      },
    ],
  },
];

const Home = ({ navigation }) => {
  const onSeeAll = (data) => {
    navigation.navigate(screenName.AllCourses, { data });
  };
  const onClickCourse = (course) => {
    navigation.navigate(screenName.CourseDetails, { course });
  };

  const homeContext = useContext(HomeContext);

  useEffect(() => {
    homeContext.getData();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ThemeContext.Consumer>
          {
            ({ theme, setTheme }) => (
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
            )
          }
        </ThemeContext.Consumer>
      ),
    });
  });
  return (
    <ThemeContext>
      {
        ({ theme }) => (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ backgroundColor: theme.background }}>
                <Image source={require('../../../assets/common/explore-image.gif')} style={styles.homeImage} resizeMode="stretch"/>
                <SectionCourse
                  title='Có thể bạn quan tâm'
                  courses={homeContext.state.topNew}
                  onSeeAll={() => onSeeAll()}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title='Bán chạy nhất'
                  courses={homeContext.state.topSell}
                  onSeeAll={() => onSeeAll()}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title='Đánh giá cao nhất'
                  courses={homeContext.state.topRate}
                  onSeeAll={() => onSeeAll()}
                  onClickCourse={(course) => onClickCourse(course)}/>
                {/* <FlatList
                  data={dumbData}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => <SectionCourse
                                            title={item.title}
                                            courses={item.courses}
                                            onSeeAll={() => onSeeAll(item)}
                                            onClickCourse={(course) => onClickCourse(course)}/>
                  }
                  ListFooterComponent={() => <View style={{ height: 20 }}/>}
                /> */}
              </View>
              <View>
              <AnimatedLoader
                visible={homeContext.state.isLoading}
                overlayColor="rgba(0,0,0,0.65)"
                source={require('../../../assets/common/loader.json')}
                animationStyle={styles.loading}
                speed={2}
              />
      </View>
            </ScrollView>
        )
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
  loading: {
    height: 100,
    width: 100,
  },
});


Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
