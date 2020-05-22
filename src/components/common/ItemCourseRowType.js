/* eslint-disable global-require */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes, { string } from 'prop-types';
import { Rating } from 'react-native-ratings';
import { formatMonthYearType, formatHourType1 } from '../../utils/DateTimeUtils';
import colorSource from '../../constants/color';

const ItemCourse = ({
  id, name, thumbnail, authors, level, date, duration, rating, numOfJudgement, onShowMenu, onItemClick,
}) => (
      <TouchableOpacity style={styles.container} onPress={() => onItemClick(id)}>
          <Image source={{ uri: thumbnail }} style={{
            width: '22%', height: 60, borderRadius: 2, marginRight: 10,
          }}/>
          <View style={styles.infoContainer}>
                <Text numberOfLines={2} style={styles.courseName}>{name}</Text>
                <Text numberOfLines={1} style={styles.normalText}>{authors[0]}{ authors.length > 1 ? `, +${authors.length - 1}` : ''}</Text>
                <Text numberOfLines={1} style={styles.normalText}>
                    {level} ∙ {formatMonthYearType(date)} ∙ {formatHourType1(duration)}
                </Text>
                <View style={styles.ratingContainer}>
                    <Rating
                      style={styles.ratingBar}
                      type='custom'
                      imageSize={10}
                      readonly
                      startingValue={rating}
                      ratingColor="#fcba03"
                      ratingBackgroundColor="#d4d4d4"
                      ratingCount={5}/>
                    <Text style={styles.normalText}>({numOfJudgement})</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => onShowMenu}>
                <Image source={require('../../../assets/common/menu-black-icon.png')} style={{ width: 15, height: 15 }} />
            </TouchableOpacity>
      </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    width: '100%',
  },
  courseName: {
    color: colorSource.black,
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 10,
  },
  normalText: {
    color: colorSource.gray,
    fontSize: 14,
    marginTop: 3,
    textAlign: 'left',
  },
  ratingBar: {
    backgroundColor: colorSource.transparent,
    marginRight: 5,
    marginTop: 3,
    padding: 0,
  },
  ratingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});

ItemCourse.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.number,
  authors: PropTypes.arrayOf(string),
  level: PropTypes.string,
  date: PropTypes.number,
  duration: PropTypes.number,
  rating: PropTypes.number,
  numOfJudgement: PropTypes.number,
  onShowMenu: PropTypes.func,
  onItemClick: PropTypes.func,
};

ItemCourse.defaultProps = {
  name: 'Java Programming',
  thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
  authors: [
    'Ben Piper',
    'Scott Allen',
  ],
  level: 'Beginner',
  date: 1589250813000,
  duration: 600000,
  rating: 4.5,
  numOfJudgement: 326,
};

export default ItemCourse;
