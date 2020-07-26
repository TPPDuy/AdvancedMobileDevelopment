/* eslint-disable global-require */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes, { string } from 'prop-types';
import StarRating from 'react-native-star-rating';
import { formatMonthYearType, formatHourType1 } from '../../utils/DateTimeUtils';
import colorSource from '../../constants/color';
import MenuIcon from '../../../assets/common/menu-icon.svg';
import { ThemeContext } from '../../constants/theme';

const ItemCourse = ({
  id, name, thumbnail, author, numOfVideos, date, duration, rating, price,
  onShowMenu, onItemClick,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <TouchableOpacity style={styles.container} onPress={() => onItemClick(id)}>
          <Image resizeMode="cover" source={{ uri: thumbnail }} style={{
            width: '22%', height: 60, borderRadius: 2, marginRight: 10, backgroundColor: colorSource.white,
          }}/>
          <View style={styles.infoContainer}>
            <Text
              numberOfLines={2}
              style={{ ...styles.courseName, color: theme.textColor }}
            >
              {name}
            </Text>
            {
              (author && author.length !== 0)
                ? (
                  <Text numberOfLines={1} style={styles.normalText}>
                    {author}
                  </Text>
                )
                : null
            }
            {
              (date && numOfVideos && duration)
                ? (
                <Text numberOfLines={1} style={styles.normalText}>
                  {formatMonthYearType(date)} ∙ {numOfVideos} videos ∙  {duration}h
                </Text>
                )
                : null
            }
            <View style={styles.ratingContainer}>
              <StarRating
                containerStyle={styles.ratingBar}
                disabled
                halfStarEnabled
                halfStarColor="#fcba03"
                maxStars={5}
                rating={rating}
                fullStarColor="#fcba03"
                emptyStarColor="#d4d4d4"
                starSize={10}/>
              <Text style={{
                ...styles.normalText,
                color: price === 0 ? colorSource.gray : colorSource.red,
                fontWeight: price === 0 ? 'normal' : 'bold',
              }}>
                {
                  price === 0
                    ? '(Miễn phí)'
                    : `(${price} VNĐ)`
                }
              </Text>
            </View>
          </View>
          {/* <TouchableOpacity onPress={() => onShowMenu}>
            <MenuIcon width={15} height={15} style={{ fill: '#000' }}/>
          </TouchableOpacity> */}
        </TouchableOpacity>
      )
    }
  </ThemeContext.Consumer>
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
  author: PropTypes.string,
  date: PropTypes.number,
  numOfVideos: PropTypes.number,
  duration: PropTypes.number,
  rating: PropTypes.number,
  price: PropTypes.number,
  onShowMenu: PropTypes.func,
  onItemClick: PropTypes.func,
};

ItemCourse.defaultProps = {
  name: '',
  thumbnail: '',
  author: '',
  date: '',
  duration: 0,
  rating: 0,
  price: 0,
  numOfVideos: 0,
};

export default ItemCourse;
