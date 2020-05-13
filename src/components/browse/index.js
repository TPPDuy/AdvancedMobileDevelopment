import React from 'react';
import {
  View, StyleSheet, Text, ScrollView, FlatList,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import ItemCategory from './ItemCategory';
import ListItemSkill from '../common/ListItemSkill';
import colorSource from '../../../assets/color/color';
import ItemPath from '../common/ItemPathBlockType';
import GroupPath from '../common/GroupPaths';
import ListAuthors from './ListAuthors';

const Browse = ({ categories, popularSkills, paths }) => (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.bigCategoryBlock}>
                <View style={styles.bigCategory}>
                    <ItemCategory title="NEW RELEASES" thumbnail="https://pluralsight.imgix.net/course-images/whats-new-vsphere-6-5-v1.jpg"/>
                </View>
                <View style={styles.bigCategory}>
                    <ItemCategory title=" RECOMMENDED FOR YOU" thumbnail="https://cdn.dribbble.com/users/13774/screenshots/11120020/freeapril_4x.jpg"/>
                </View>
            </View>
            <FlatList
                data={categories}/>
            <View style={styles.popularSkills}>
                <Text style={styles.textPopularSkills}>Popular Skills</Text>
                <ListItemSkill />
            </View>

            <GroupPath/>

            <View>
                <Text style={styles.topAuthorsText}>Top authors</Text>
                <ListAuthors/>
            </View>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  bigCategory: {
    height: 120,
    marginVertical: 5,
  },
  bigCategoryBlock: {
    paddingHorizontal: 15,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  popularSkills: {
    flexDirection: 'column',
    marginVertical: 15,
    width: '100%',
  },
  textPopularSkills: {
    color: colorSource.black,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 10,
  },
  topAuthorsText: {
    color: colorSource.black,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 10,
  },
});

Browse.propTypes = {
  categories: PropTypes.arrayOf(object),
  popularSkills: PropTypes.arrayOf(object),
  paths: PropTypes.arrayOf(object),
};
Browse.defaultProps = {
  categories: [
    {
      name: 'Software Development',
      thumbnail: 'https://pluralsight.imgix.net/course-images/software-development-security-v1.png',
    },
    {
      name: 'Conferences',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB2e1QAOIyDvy0z66UAOi_G9rBUvYr_FRFDAr13Pg1yvzQOmRh&usqp=CAU',
    },
    {
      name: 'IT OPS',
      thumbnail: 'https://pluralsight.imgix.net/course-images/audience/it-ops.jpg',
    },
    {
      name: 'Information AND CYBER SECURITY',
      thumbnail: 'https://pluralsight.imgix.net/course-images/cisco-core-security-network-security-v1.png',
    },
    {
      name: 'Data Professional',
      thumbnail: 'https://pluralsight.imgix.net/course-images/audience/data-professional.jpg',
    },
    {
      name: 'Business Professional',
      thumbnail: 'https://pluralsight.imgix.net/course-images/audience/business-professional.jpg',
    },
    {
      name: 'Creative Professional',
      thumbnail: 'https://pluralsight.imgix.net/course-images/audience/creative-professional.jpg',
    },
    {
      name: 'Manufacturing and design',
      thumbnail: 'https://pluralsight.imgix.net/course-images/fundamentals-professional-level-design-v1.jpg',
    },
    {
      name: 'Architecture and construction',
      thumbnail: 'https://pluralsight.imgix.net/course-images/architectural-previsualization-maya-281-v1.jpg',
    },
    {
      name: 'Certifications',
      thumbnail: 'https://pluralsight.imgix.net/course-images/android-room-fundamentals-v2.jpg',
    },
  ],
  popularSkills: [
    {
      name: 'Java',
      isInterested: true,
    },
    {
      name: 'Android',
      isInterested: true,
    },
    {
      name: 'NodeJs',
      isInterested: true,
    },
    {
      name: 'React',
      isInterested: true,
    },
    {
      name: 'C/C++',
      isInterested: true,
    },
    {
      name: 'VueJs',
      isInterested: false,
    },
    {
      name: 'Agular',
      isInterested: false,
    },
    {
      name: 'Python',
      isInterested: false,
    },
    {
      name: '.NET',
      isInterested: false,
    },
    {
      name: 'Information Security',
      isInterested: false,
    },
    {
      name: 'Part Modeling',
      isInterested: false,
    },
    {
      name: 'Machine Learning',
      isInterested: false,
    },
    {
      name: 'Database Administration',
      isInterested: false,
    },
  ],
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
};
export default Browse;
