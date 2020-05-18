/* eslint-disable react-native/no-inline-styles */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState } from 'react';
import { Video } from 'expo-av';
import {
  View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import { formatMonthYearType, formatHourType1 } from '../../utils/DateTimeUtils';
import colorSource from '../../../assets/color/color';
import ItemAuthorHorizontal from './ItemAuthor';
import Content from './Content';
import CollapsableDescription from '../common/CollapsableDescription';

const ItemFunction = ({ name, icon }) => (
  <View style={styles.itemFunctionContainer}>
    <TouchableOpacity style={styles.iconFunctionContainer}>
      <Image source={icon} style={styles.iconFunction}/>
    </TouchableOpacity>
    <Text style={styles.nameFunction}>{name}</Text>
  </View>
);

const ButtonFunction = ({ name, icon }) => (
  <TouchableOpacity style={styles.btnContainer}>
    <Image source={icon} style={styles.iconFunction}/>
    <Text style={{ ...styles.nameFunction, marginLeft: 5 }}>{name}</Text>
  </TouchableOpacity>
);

const authorSeparator = () => (
  <View style={styles.authorSeparator}/>
);

const CourseDetails = ({
  id, name, authors, level, date, duration, description, content, transcript, isBookmarked,
}) => {
  const iconBookmarked = isBookmarked ? require('../../../assets/course-detail/bookmark-fill-icon.png') : require('../../../assets/course-detail/bookmark-icon.png');
  return (
    <View style={styles.container}>
        <Video source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        shouldPlay
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        useNativeControls={true}
        usePoster={true}
        volume={1.0}
        rate={1.0}
        style={styles.video}
        />
        <ScrollView>
          <View style={styles.infoCourseBlock}>
            <Text style={styles.title}>{name}</Text>
            <FlatList
              data={authors}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={authorSeparator}
              renderItem={({ item }) => <ItemAuthorHorizontal name={item.name} avatar={item.avatar}/>}
            />
            <Text style={styles.info}>{level} ∙ {formatMonthYearType(date)} ∙ {formatHourType1(duration)}</Text>
            <View style={styles.func}>
              <View style={styles.functionContainer}>
                <ItemFunction name='Bookmark' icon={iconBookmarked}/>
                <ItemFunction name='Add to Channel' icon={require('../../../assets/course-detail/channel-icon.png')}/>
                <ItemFunction name='Download' icon={require('../../../assets/course-detail/download-icon.png')}/>
              </View>
            </View>

            <CollapsableDescription minHeight={70} description={description}/>

            <ButtonFunction name='Take a learning check' icon={require('../../../assets/course-detail/learning-check-icon.png')}/>
            <ButtonFunction name='View related paths & courses' icon={require('../../../assets/course-detail/related-icon.png')}/>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <Content />
          </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  authorSeparator: {
    width: 5,
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 8,
  },
  container: {
    backgroundColor: colorSource.black,
    height: '100%',
    width: '100%',
  },
  functionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 25,
  },
  iconFunction: {
    height: 20,
    width: 20,
  },
  iconFunctionContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    marginBottom: 7,
    width: 40,
  },
  info: {
    color: colorSource.lightGray,
    fontSize: 12,
    marginTop: 10,
  },
  infoCourseBlock: {
    backgroundColor: colorSource.darkGray,
    flexDirection: 'column',
    padding: 15,
  },
  itemFunctionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameFunction: {
    color: colorSource.white,
    fontSize: 14,
  },
  title: {
    color: colorSource.white,
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 10,
  },
  video: {
    height: 220,
  },
});

ItemFunction.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.number,
};
ButtonFunction.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.number,
};

CourseDetails.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  authors: PropTypes.arrayOf(object),
  level: PropTypes.string,
  date: PropTypes.number,
  duration: PropTypes.number,
  description: PropTypes.string,
  content: PropTypes.arrayOf(object),
  transcript: PropTypes.string,
  isBookmarked: PropTypes.bool,
};

CourseDetails.defaultProps = {
  name: 'Agular Fundamentals',
  authors: [
    {
      name: 'Joe Eames',
      avatar: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
    },
    {
      name: 'Jim Cooper',
      avatar: 'https://pluralsight.imgix.net/author/lg/jim-cooper-v1.jpg?w=200',
    },
  ],
  level: 'Intermediate',
  date: 1589782861000,
  duration: 2449000,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
  content: [],
  transcript: '',
  isBookmarked: true,
};

export default CourseDetails;
