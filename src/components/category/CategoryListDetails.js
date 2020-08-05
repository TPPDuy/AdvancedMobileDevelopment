/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
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
import { BrowseContext } from '../providers/Browse';
import NoDataIcon from '../../../assets/common/no-data-icon.svg';

const renderSeparator = (dividerColor) => (
    <View style={{ height: 1, backgroundColor: dividerColor }}/>
);
const renderFooter = () => (
  <View style={{ height: 20 }}/>
);

const CategoryListDetails = ({
  route, navigation,
}) => {
  const category = route.params.data;
  const browseContext = useContext(BrowseContext);

  useEffect(() => {
    browseContext.getCategoryDetails(category.id);
  }, []);
  const handleClickCourse = (course) => {
    navigation.push(screenName.CourseInfoScreen, { screen: screenName.CourseDetails, params: { course } });
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => {
          const titleColor = theme.type === 'LIGHT' ? colorSource.darkGray : colorSource.white;
          return (
            <ScrollView style={{ ...styles.container, backgroundColor: theme.background }}>
              <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80' }}
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
                  <Text style={{ ...styles.title, color: titleColor }}>{category.name}</Text>
                </LinearGradient>
              </ImageBackground>
              <FlatList
                style={styles.listCourses}
                horizontal={false}
                data={browseContext.state.categoryDetails}
                renderItem={
                  ({ item }) => <ItemCourse
                                  name={item.title}
                                  thumbnail={item.imageUrl}
                                  author={item['instructor.user.name']}
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
                    <Text style={{ fontSize: 14, color: theme.textColor, marginTop: 15 }}>Không tìm thấy khóa học nào</Text>
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
  title: {
    color: colorSource.darkGray,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});

CategoryListDetails.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

CategoryListDetails.defaultProps = {
};

export default CategoryListDetails;
