/* eslint-disable react-native/no-unused-styles */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Image, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import { formatMonthYearType } from '../../utils/DateTimeUtils';
import colorSource from '../../constants/color';
import { ThemeContext } from '../../constants/theme';

const ItemCourse = ({
  id, name, thumbnail, author, numOfVideos, date, duration, rating, price, onClickItem,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <TouchableOpacity style={styles(theme).container} onPress={() => onClickItem(id)}>
          <View style={styles(theme).thumbnailContainer}>
            <Image source={{ uri: thumbnail }} style={styles(theme).thumbnail}/>
          </View>
          <View style={styles(theme).infoContainer}>
            <Text numberOfLines={2} style={styles(theme).courseName}>{name}</Text>
            <Text numberOfLines={1} style={styles(theme).normalText}>{author}</Text>
            <Text numberOfLines={1} style={styles(theme).normalText}>
              {formatMonthYearType(date)} ∙ {numOfVideos} videos ∙ {duration}h
            </Text>
            <View style={styles(theme).ratingContainer}>
              <StarRating
                containerStyle={styles(theme).ratingBar}
                disabled
                halfStarEnabled
                halfStarColor="#fcba03"
                maxStars={5}
                rating={rating}
                fullStarColor="#fcba03"
                emptyStarColor="#d4d4d4"
                starSize={10}/>
              <Text style={styles(theme).normalText}>
                {
                  price === 0
                    ? '(Miễn phí)'
                    : `(${price} VNĐ)`
                }
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
  </ThemeContext.Consumer>
);

const styles = (theme) => StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderRadius: 7,
    flexDirection: 'column',
    height: 230,
    marginHorizontal: 10,
    width: 240,
  },
  courseName: {
    color: theme.textColor,
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    backgroundColor: theme.itemBackground,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
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
    marginTop: 5,
    padding: 0,
  },
  ratingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  thumbnail: {
    backgroundColor: colorSource.white,
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
  author: PropTypes.string,
  numOfVideos: PropTypes.number,
  date: PropTypes.number,
  duration: PropTypes.number,
  rating: PropTypes.number,
  price: PropTypes.number,
  onClickItem: PropTypes.func,
};

export default ItemCourse;
