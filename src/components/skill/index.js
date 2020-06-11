/* eslint-disable max-len */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  View, ScrollView, FlatList, Text, StyleSheet,
} from 'react-native';
import GroupPath from '../path/GroupPaths';
import SectionCourse from '../home/SectionCourse';
import ListAuthors from '../browse/ListAuthors';
import screenName from '../../constants/screen-name';
import { ThemeContext } from '../../constants/theme';


const SkillDetails = ({
  id, name, paths, groupCourses, topAuthors, navigation,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <ScrollView style={{ ...styles.container, backgroundColor: theme.background }}>
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
                                      onClickCourse={(itemId) => navigation.navigate(screenName.CourseDetails)}
                                      onSeeAll={(itemId) => navigation.navigate(screenName.AllCourses)}/>}
                  />
                : null
          }
          {
            topAuthors && topAuthors.length > 0
              ? <View style={styles.authorsContainer}>
                  <Text style={{ ...styles.topAuthorsText, color: theme.textColor }}>Top authors</Text>
                  <ListAuthors onClickItem={(itemId) => navigation.navigate(screenName.AuthorProfile)}/>
                </View>
              : null
          }
        </ScrollView>
      )
    }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  authorsContainer: {
    marginVertical: 15,
  },
  container: {
    flexDirection: 'column',
  },
  topAuthorsText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 10,
  },
});

SkillDetails.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  paths: PropTypes.arrayOf(object),
  groupCourses: PropTypes.arrayOf(object),
  topAuthors: PropTypes.arrayOf(object),
  navigation: PropTypes.object,
};

SkillDetails.defaultProps = {
  name: 'Agular',
  paths: [
    {
      name: 'CCSP (Certified Cloud Security Professional)',
      numOfCourses: 9,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/comptia-security-plus-5d8ab8e621.png',
    },
    {
      name: 'AWS Certified Machine Learning',
      numOfCourses: 2,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png',
    },
    {
      name: '3ds Max: Environment Modeling',
      numOfCourses: 10,
      thumbnail: 'https://pluralsight.imgix.net/paths/path-icons/3dsmax-008c85cd63.png',
    },
    {
      name: 'Node.js Developer on Microsoft Azure',
      numOfCourses: 3,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png',
    },
    {
      name: 'Salesforce Certified Administrator',
      numOfCourses: 10,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/salesforce-e8b45b03c6.png',
    },
    {
      name: 'Design Pattern in C++',
      numOfCourses: 15,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/c-plus-plus-34cdec5297.png',
    },
    {
      name: 'Managin Projects',
      numOfCourses: 15,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/pmp-3c8e439908.png',
    },
  ],
  groupCourses: [
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
  ],
  topAuthors: [
    {
      name: 'Deborah Kurata',
      avatar: 'https://pluralsight.imgix.net/author/lg/deborah-kurata-v1.jpg?w=200',
    },
    {
      name: 'Scott Allen',
      avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
    },
    {
      name: 'Samer Buna',
      avatar: 'https://pluralsight.imgix.net/author/lg/e5c9da13-6fe1-4662-8ee1-5a78800537a3.jpg',
    },
    {
      name: 'Mark Zamoyta',
      avatar: 'https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200',
    },
    {
      name: 'Jim Wilson',
      avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
    },
    {
      name: 'Joe Eames',
      avatar: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
    },
    {
      name: 'Cory House',
      avatar: 'https://pluralsight.imgix.net/author/lg/cory-house-v3.jpg?w=200',
    },
    {
      name: 'Shawn Wildermuth',
      avatar: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200',
    },
  ],
};

export default SkillDetails;
