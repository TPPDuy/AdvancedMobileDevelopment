/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableWithoutFeedback, Image, FlatList, TouchableOpacity,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import colorSource from '../../constants/color';
import { formatHourType2 } from '../../utils/DateTimeUtils';
import MenuIcon from '../../../assets/common/menu-icon.svg';
import { ThemeContext } from '../../constants/theme';

const ItemLesson = ({
  name, duration, isCompleted, isPlaying, onClickLesson,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <TouchableOpacity style={styles.lessonContainer} onPress={() => onClickLesson()}>
          {isPlaying
            ? <Image source={require('../../../assets/course-detail/play-icon.png')} style={{ ...styles.lessonStatus, backgroundColor: theme.background }}/>
            : isCompleted
              ? <Image source={require('../../../assets/course-detail/completed-tick-icon.png')} style={{ ...styles.lessonStatus, backgroundColor: theme.background }}/>
              : <View style={{ ...styles.lessonStatus, backgroundColor: colorSource.gray }}/>
          }
          <Text style={{ ...styles.lessonName, color: theme.textColor }}>{name}</Text>
          <Text style={styles.lessonDuration}>{formatHourType2(duration)}</Text>
        </TouchableOpacity>
      )
    }
  </ThemeContext.Consumer>
);

const ItemSeparator = () => (
    <View style={styles.itemSeparator}/>
);

const Module = ({
  moduleName, index, duration, playingLesson, lessons, onClickLesson,
}) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <View style={{ ...styles.moduleContainer, backgroundColor: theme.background }}>
          <View style={styles.titleContainer}>
            <View style={styles.thumbnail}>
              <View style={styles.textThumbnailContainer}>
                <Text style={styles.textThumbnail}>{index}</Text>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <Text style={{ ...styles.moduleName, color: theme.textColor }}>{moduleName}</Text>
              <Text style={styles.moduleDuration}>{formatHourType2(duration)}</Text>
            </View>
            <TouchableWithoutFeedback>
              <MenuIcon width={10} height={10} style={{ fill: '#fff' }} />
            </TouchableWithoutFeedback>
          </View>
          <FlatList
            data={lessons}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <ItemLesson
                                        name={item.name}
                                        duration={(item.hours || 0) * 3600 * 1000}
                                        isCompleted={item.isFinish}
                                        isPlaying={playingLesson === item.id}
                                        onClickLesson={() => onClickLesson(item.id)}
                                      />
            }
          />
        </View>
      )
    }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  itemSeparator: {
    height: 20,
  },
  lessonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  lessonDuration: {
    color: colorSource.lightGray,
    fontSize: 13,
  },
  lessonName: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 5,
  },
  lessonStatus: {
    borderRadius: 10,
    height: 10,
    width: 10,
  },
  moduleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    width: '100%',
  },
  moduleDuration: {
    color: colorSource.lightGray,
    fontSize: 13,
  },
  moduleInfo: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 10,
  },
  moduleName: {
    fontSize: 16,
    marginBottom: 5,
  },
  textThumbnail: {
    color: colorSource.white,
    fontSize: 16,
    marginTop: 5,
  },
  textThumbnailContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  thumbnail: {
    alignItems: 'center',
    backgroundColor: colorSource.darkGray,
    flexDirection: 'column',
    height: 45,
    justifyContent: 'center',
    width: '15%',
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 25,
    width: '100%',
  },
});

ItemLesson.propTypes = {
  name: PropTypes.string,
  duration: PropTypes.number,
  isCompleted: PropTypes.bool,
  isPlaying: PropTypes.bool,
  onClickLesson: PropTypes.func,
};

Module.propTypes = {
  moduleName: PropTypes.string,
  index: PropTypes.number,
  playingLesson: PropTypes.string,
  duration: PropTypes.number,
  lessons: PropTypes.arrayOf(object),
  onClickLesson: PropTypes.func,
};

Module.defaultProps = {
};

export default Module;
