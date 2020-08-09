/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React, { useContext } from 'react';
import {
  View, ScrollView, TouchableOpacity, Text, StyleSheet, ImageBackground, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import colorSource from '../../constants/color';
import ItemCourse from '../common/ItemCourseRowType';
import screenName from '../../constants/screen-name';
import BackIcon from '../../../assets/common/back-icon.svg';
import { ThemeContext } from '../../constants/theme';
import NoDataIcon from '../../../assets/common/no-data-icon.svg';
import { LanguageContext } from '../providers/Language';

const renderSeparator = (dividerColor) => (
    <View style={{ height: 1, backgroundColor: dividerColor }}/>
);
const renderFooter = () => (
  <View style={{ height: 20 }}/>
);

const RelatedCourses = ({
  route, navigation,
}) => {
  const { course } = route.params;
  
  console.log('realated courses: ', course);
  const languageContext = useContext(LanguageContext);

  const handleClickCourse = (courseId) => {
    navigation.push(screenName.CourseInfoScreen, { screen: screenName.CourseDetails, params: { course: courseId } });
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          const titleColor = theme.type === 'LIGHT' ? colorSource.darkGray : colorSource.white;
          return (
            <ScrollView style={{ ...styles.container, backgroundColor: theme.background }}>
              <ImageBackground
                source={{ uri: course.imageUrl }}
                style={styles.thumbnail}
                resizeMode='cover'
              >
                <LinearGradient
                  colors={[theme.overlayLayer1, theme.overlayLayer3]}
                  style={styles.posterContainer}>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => navigation.goBack()}
                  >
                    <BackIcon width={25} height={25} style={{ fill: theme.textColor }}/>
                  </TouchableOpacity>
                </LinearGradient>
              </ImageBackground>
              <FlatList
                style={styles.listCourses}
                horizontal={false}
                data={course.coursesLikeCategory}
                renderItem={
                  ({ item }) => <ItemCourse
                                  name={item.title}
                                  thumbnail={item.imageUrl}
                                  author={item['instructor.user.name'] || item.instructorName}
                                  numOfVideos={item.videoNumber}
                                  date={item.date}
                                  duration={item.totalHours}
                                  rating={item.contentPoint}
                                  price={item.price}
                                  onItemClick={() => handleClickCourse(item.id)}
                                />
                  }
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => renderSeparator(theme.dividerLine)}
                ListEmptyComponent={() => (
                  <View style={styles.emptyComponent}>
                    <NoDataIcon width={50} height={50} />
                    <Text style={{ fontSize: 14, color: theme.textColor, marginTop: 15 }}>{languageContext.state.NoCourses}</Text>
                  </View>)}
                ListFooterComponent={renderFooter}
              />
            </ScrollView>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  emptyComponent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    marginBottom: '5%',
    marginTop: '50%',
  },
  iconContainer: {
    alignSelf: 'flex-start',
    margin: 15,
  },
  listCourses: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
  },
  posterContainer: {
    alignItems: 'center',
    height: '110%',
    marginBottom: 20,
  },
  thumbnail: {
    flex: 1,
    height: '110%',
    width: '100%',
  },
});

RelatedCourses.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

RelatedCourses.defaultProps = {
};

export default RelatedCourses;
