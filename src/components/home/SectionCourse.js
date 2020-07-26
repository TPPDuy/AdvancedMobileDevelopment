/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import ItemCourse from '../common/ItemCourseBlockType';
import RightArrow from '../../../assets/common/right-arrow-icon.svg';
import { ThemeContext } from '../../constants/theme';
import NoDataIcon from '../../../assets/common/no-data-icon.svg';

const SectionCourse = ({
  id, title, courses, onSeeAll, onClickCourse,
}) => {
  const showActionSheet = () => {
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={styles(theme).container}>
            <View style={styles(theme).titleBlock}>
                <Text style={styles(theme).title}>{title}</Text>
                <TouchableOpacity style={styles(theme).seeAllBlock} onPress={() => onSeeAll()}>
                  <Text style={{ color: '#808080', fontSize: 14, marginRight: 5 }}>See all</Text>
                  <RightArrow width={8} height={8} style={{ fill: '#808080' }}/>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles(theme).listContainer}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={courses}
                renderItem={({ item }) => <ItemCourse
                                            name={item.title}
                                            thumbnail={item.imageUrl}
                                            author={item['instructor.user.name']}
                                            numOfVideos={item.videoNumber}
                                            date={item.date}
                                            duration={item.totalHours}
                                            rating={item.ratedNumber}
                                            price={item.price}
                                            onShowMenu={showActionSheet()}
                                            onClickItem={() => onClickCourse(item)}/>}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </SafeAreaView>
         </View>
        )
      }
    </ThemeContext.Consumer>
  );
};


const styles = (theme) => StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 270,
    marginVertical: 10,
  },
  seeAllBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: theme.textColor,
    fontSize: 18,
    fontWeight: '600',
  },
  titleBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

SectionCourse.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  courses: PropTypes.arrayOf(object),
  onClickCourse: PropTypes.func,
  onSeeAll: PropTypes.func,
};
SectionCourse.defaultProps = {
  title: '',
  courses: [],
};

export default SectionCourse;
