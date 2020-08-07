/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React, { useContext, useEffect, useState } from 'react';
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
import { getProfile } from '../../storage/Storage';
import { LanguageContext } from '../providers/Language';

const Home = ({ navigation }) => {
  const onSeeAll = (category, title) => {
    navigation.navigate(screenName.AllCourses, { category, title });
  };
  const onClickCourse = (course) => {
    navigation.push(screenName.CourseInfoScreen, { screen: screenName.CourseDetails, params: { course } });
  };

  const homeContext = useContext(HomeContext);
  const languageContext = useContext(LanguageContext);
  const [profileInfo, setProfileInfo] = useState({});

  async function loadProfile() {
    const profile = await getProfile();
    if (profile) setProfileInfo(profile);
  }
  useEffect(() => {
    homeContext.getDataHomeScreen();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadProfile();
    });
    return unsubscribe;
  }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ThemeContext.Consumer>
          {
            ({theme, changeTheme}) => (
              <View style={{marginLeft: 10}}>
                {
                  theme.type === 'LIGHT'
                    ? <TouchableOpacity onPress={() => changeTheme(themes.dark)}>
                        <LightIcon width={28} height={28} />
                      </TouchableOpacity>
                    : <TouchableOpacity onPress={() => changeTheme(themes.light)}>
                        <DarkIcon width={28} height={28} />
                      </TouchableOpacity>
                }
              </View>
            )
          }
        </ThemeContext.Consumer>
      ),
      headerRight: () => (
        <ThemeContext.Consumer>
          {
            ({ theme }) => (
                <View style={styles.headerRightContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate(screenName.ProfileScreen)}>
                    <Image
                      source={
                        profileInfo
                          ? {uri: profileInfo.avatar}
                          : require('../../../assets/common/avatar-holder-icon.png')
                      }
                      resizeMode='cover'
                      style={{...styles.avatar, backgroundColor: theme.textColor}}
                      />
                  </TouchableOpacity>                
              </View>
            )
          }
        </ThemeContext.Consumer>
      ),
    });
  });

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ backgroundColor: theme.background }}>
                <Image source={require('../../../assets/common/explore-image.gif')} style={styles.homeImage} resizeMode="stretch"/>
                <SectionCourse
                  title={languageContext.state.Recommended}
                  courses={homeContext.state.homeScreen.recommended}
                  onSeeAll={() => onSeeAll('RECOMMENDED', languageContext.state.Recommended)}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title={languageContext.state.NewCourses}
                  courses={homeContext.state.homeScreen.topNew}
                  onSeeAll={() => onSeeAll('TOP_NEW', languageContext.state.NewCourses)}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title={languageContext.state.TopSell}
                  courses={homeContext.state.homeScreen.topSell}
                  onSeeAll={() => onSeeAll('TOP_SELL', languageContext.state.TopSell)}
                  onClickCourse={(course) => onClickCourse(course)}/>
                <SectionCourse
                  title={languageContext.state.TopRate}
                  courses={homeContext.state.homeScreen.topRate}
                  onSeeAll={() => onSeeAll('TOP_RATE', languageContext.state.TopRate)}
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
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 30,
    marginHorizontal: 15,
    width: 30,
    borderRadius: 20,
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
