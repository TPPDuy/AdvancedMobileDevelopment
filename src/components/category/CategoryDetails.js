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

const CategoryDetails = ({
  name, thumbnail, skills, paths, groupCourses, topAuthors, navigation,
}) => (
    <ScrollView style={styles.container}>
        <ImageBackground source={{ uri: thumbnail }} style={styles.thumbnail} resizeMode='cover'>
            <LinearGradient colors={['#ffffff00', '#ffffffEA', '#fff']} style={styles.posterContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                    <BackIcon width={25} height={25} />
                </TouchableOpacity>
                <Text style={styles.title}>{name}</Text>
                {
                    skills && skills.length > 0
                      ? <View style={styles.popularSkills}>
                            <Text style={styles.textPopularSkills}>{name} Skills</Text>
                            <ListItemSkill
                              onItemClick={(id) => navigation.navigate(screenName.SkillDetails)}/>
                        </View>
                      : null
                }
            </LinearGradient>
        </ImageBackground>
        {
            paths && paths.length > 0
              ? <GroupPath groupName={`Paths in ${name}`} showSeeAllButton={false}/>
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
                  <Text style={styles.topAuthorsText}>Top authors</Text>
                  <ListAuthors
                    onClickItem={(id) => navigation.navigate(screenName.AuthorProfile)}/>
                </View>
              : null
        }
    </ScrollView>
);

const styles = StyleSheet.create({
  authorsContainer: {
    marginVertical: 15,
  },
  container: {
    backgroundColor: colorSource.white,
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
    color: colorSource.black,
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
    color: colorSource.darkGray,
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    textAlign: 'center',
  },
  topAuthorsText: {
    color: colorSource.black,
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
