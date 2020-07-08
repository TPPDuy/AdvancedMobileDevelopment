/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
import {
  View, ScrollView, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimatedLoader from 'react-native-animated-loader';
import SectionCourse from './SectionCourse';
import screenName from '../../constants/screen-name';
import DarkIcon from '../../../assets/common/dark.svg';
import LightIcon from '../../../assets/common/light.svg';
import themes, { ThemeContext } from '../../constants/theme';
import { HomeContext } from '../providers/Home';

const Home = ({ navigation }) => {
  const onSeeAll = (category, title) => {
    navigation.navigate(screenName.AllCourses, { category, title });
  };
  const onClickCourse = (course) => {
    navigation.navigate(screenName.CourseDetails, { course });
  };

  const homeContext = useContext(HomeContext);

  useEffect(() => {
    homeContext.getDataHomeScreen();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ThemeContext.Consumer>
          {
            ({ theme, changeTheme }) => (
              <View style={styles.headerRightContainer}>
                {
                  theme.type === 'LIGHT'
                    ? <TouchableOpacity onPress={() => changeTheme(themes.dark)}>
                        <LightIcon width={28} height={28} />
                      </TouchableOpacity>
                    : <TouchableOpacity onPress={() => changeTheme(themes.light)}>
                        <DarkIcon width={28} height={28} />
                        </TouchableOpacity>
                }
                <Image source={require('../../../assets/common/avatar-holder-icon.png')} style={styles.avatar}/>
              </View>
            )
          }
        </ThemeContext.Consumer>
      ),
    });
  });
  return (
    <ThemeContext>
      {
        ({ theme }) => (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ backgroundColor: theme.background }}>
                <Image source={require('../../../assets/common/explore-image.gif')} style={styles.homeImage} resizeMode="stretch"/>
                <SectionCourse
                  title='Có thể bạn quan tâm'
                  courses={homeContext.state.homeScreen.recommended}
                  onSeeAll={() => onSeeAll('RECOMMENDED', 'Có thể bạn quan tâm')}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title='Các khóa học mới'
                  courses={homeContext.state.homeScreen.topNew}
                  onSeeAll={() => onSeeAll('TOP_NEW', 'Các khóa học mới')}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title='Bán chạy nhất'
                  courses={homeContext.state.homeScreen.topSell}
                  onSeeAll={() => onSeeAll('TOP_SELL', 'Bán chạy nhất')}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title='Đánh giá cao nhất'
                  courses={homeContext.state.homeScreen.topRate}
                  onSeeAll={() => onSeeAll('TOP_RATE', 'Đánh giá cao nhất')}
                  onClickCourse={(course) => onClickCourse(course)}/>
              </View>
              <View>
              <AnimatedLoader
                visible={homeContext.state.isLoading}
                overlayColor="rgba(0,0,0,0.65)"
                source={require('../../../assets/common/loader.json')}
                animationStyle={styles.loading}
                speed={2}
              />
      </View>
            </ScrollView>
        )
      }
    </ThemeContext>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 30,
    marginHorizontal: 15,
    width: 30,
  },
  headerRightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  homeImage: {
    height: 200,
    width: '100%',
  },
  loading: {
    height: 100,
    width: 100,
  },
});


Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
