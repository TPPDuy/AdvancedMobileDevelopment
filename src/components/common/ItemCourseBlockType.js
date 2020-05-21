/* eslint-disable global-require */
import React from 'react';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import PropTypes, { string } from 'prop-types';
import { Rating } from 'react-native-ratings';
import { formatMonthYearType, formatHourType1 } from '../../utils/DateTimeUtils';
import colorSource from '../../constants/color';

const ItemCourse = ({
  id, name, thumbnail, authors, level, date, duration, rating, numOfJudgement, onShowMenu, onClickItem,
}) => (
        <TouchableOpacity style={styles.container} onPress={() => onClickItem(id)}>
            <View style={styles.thumbnailContainer}>
                <Image source={{ uri: thumbnail }} style={styles.thumbnail}/>
            </View>
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
        </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderColor: colorSource.borderColor,
    borderRadius: 7,
    borderWidth: 1,
    flexDirection: 'column',
    height: 230,
    marginHorizontal: 10,
    width: 240,
  },
  courseName: {
    color: colorSource.black,
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    backgroundColor: colorSource.courseBackground,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopColor: colorSource.borderColor,
    borderTopWidth: 1,
    height: '50%',
    justifyContent: 'center',
    padding: 8,
    width: '100%',
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
  thumbnail: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  thumbnailContainer: {
    height: '50%',
    width: '100%',
    zIndex: 9,
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
  onClickItem: PropTypes.func,
};

export default ItemCourse;
