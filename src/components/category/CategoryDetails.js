/* eslint-disable global-require */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  View, Text, StyleSheet, ScrollView, ImageBackground, FlatList, TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ListItemSkill from '../skill/ListItemSkill';
import screenName from '../../constants/screen-name';
import GroupPath from '../path/GroupPaths';
import ListAuthors from '../browse/ListAuthors';
import colorSource from '../../constants/color';
import SectionCourse from '../home/SectionCourse';
import BackIcon from '../../../assets/common/back-icon.svg';
import { ThemeContext } from '../../constants/theme';

const CategoryDetails = ({
  name, thumbnail, skills, paths, groupCourses, topAuthors, navigation,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => {
        const titleColor = theme.type === 'LIGHT' ? colorSource.darkGray : colorSource.lightGray;
        return (
          <ScrollView style={{ ...styles.container, backgroundColor: theme.background }}>
            <ImageBackground source={{ uri: thumbnail }} style={styles.thumbnail} resizeMode='cover'>
              <LinearGradient
                colors={[theme.overlayLayer1, theme.overlayLayer2, theme.overlayLayer3]}
                style={styles.posterContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                  <BackIcon width={25} height={25} style={{ fill: theme.textColor }}/>
                </TouchableOpacity>
                <Text style={{ ...styles.title, color: titleColor }}>{name}</Text>
                  {
                    skills && skills.length > 0
                      ? <View style={styles.popularSkills}>
                          <Text
                            style={{ ...styles.textPopularSkills, color: theme.textColor }}
                          >
                            {name} Skills
                          </Text>
                          <ListItemSkill
                            onItemClick={(id) => navigation.navigate(screenName.SkillDetails)}/>
                        </View>
                      : null
                    }
              </LinearGradient>
            </ImageBackground>
            {
              paths && paths.length > 0
                ? <GroupPath
                    groupName={`Paths in ${name}`}
                    showSeeAllButton={false}
                    onClickItem={() => navigation.navigate(screenName.ListPaths)}/>
                : null
            }
            {
              groupCourses && groupCourses.length > 0
                ? <FlatList
                    data={groupCourses}
                    showsVerticalScrollIndicator={false}
                    renderItem={
                    ({ item }) => <SectionCourse
                                    id={item.id}
                                    title={item.title}
                                    courses={item.courses}
                                    onClickCourse={
                                      (id) => navigation.navigate(screenName.CourseDetails)
                                    }
                                    onSeeAll={(id) => navigation.navigate(screenName.AllCourses)}
                                  />
                        }
                  />
                : null
            }
            {
              topAuthors && topAuthors.length > 0
                ? <View style={styles.authorsContainer}>
                    <Text style={{ ...styles.topAuthorsText, color: theme.textColor }}>Top authors</Text>
                    <ListAuthors
                      onClickItem={(id) => navigation.navigate(screenName.AuthorProfile)}/>
                  </View>
                : null
            }
          </ScrollView>
        );
      }
    }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  authorsContainer: {
    marginVertical: 15,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  iconContainer: {
    alignSelf: 'flex-start',
    margin: 15,
  },
  popularSkills: {
    flexDirection: 'column',
    marginTop: 20,
    width: '100%',
  },
  posterContainer: {
    alignItems: 'center',
    height: '100%',
    marginBottom: 20,
  },
  textPopularSkills: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    marginVertical: 10,
  },
  thumbnail: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  topAuthorsText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 10,
  },
});

CategoryDetails.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  skills: PropTypes.arrayOf(object),
  paths: PropTypes.arrayOf(object),
  groupCourses: PropTypes.arrayOf(object),
  topAuthors: PropTypes.arrayOf(object),
  navigation: PropTypes.object,
};

CategoryDetails.defaultProps = {
  name: 'Software development',
  thumbnail: 'https://img.pluralsight.com/course-images/python-desktop-application-development-design-part2-v1.jpg',
  skills: [{}],
  paths: [{}],
  groupCourses: [{}],
  topAuthors: [{}],
};
export default CategoryDetails;
