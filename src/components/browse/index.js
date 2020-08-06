/* eslint-disable react/display-name */
/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react';
import {
  View, StyleSheet, Text, ScrollView, FlatList, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import AnimatedLoader from 'react-native-animated-loader';
import ItemCategory from './ItemCategory';
import ListAuthors from './ListAuthors';
import screenName from '../../constants/screen-name';
import themes, { ThemeContext } from '../../constants/theme';
import DarkIcon from '../../../assets/common/dark.svg';
import LightIcon from '../../../assets/common/light.svg';
import { BrowseContext } from '../providers/Browse';
import SectionCourse from '../home/SectionCourse';
import { getProfile } from '../../storage/Storage';


const renderSeparator = () => (
    <View style={{ width: 15, height: 15 }}/>
);
const renderSpaceHeader = () => (
  <View style={{ width: 10, height: 10 }}/>
);

const Browse = ({
  navigation,
}) => {
  const browseContext = useContext(BrowseContext);
  const [profileInfo, setProfileInfo] = useState({});

  async function loadProfile() {
    const profile = await getProfile();
    if (profile) setProfileInfo(profile);
  }

  useEffect(() => {
    browseContext.getCategory();
    browseContext.getTopNew();
    browseContext.getAuthor();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadProfile();
    });
    return unsubscribe;
  }, [navigation]);
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

  const onSeeAll = (category, title) => {
    navigation.navigate(screenName.AllCourses, { category, title });
  };

  const handleClickCourse = (course) => {
    navigation.push(screenName.CourseInfoScreen, { screen: screenName.CourseDetails, params: { course } });
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: theme.background }}>
            <View style={{ ...styles.container }}>
              <FlatList
                style={{ width: '100%', marginTop: 5 }}
                data={browseContext.state.categories}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}
                ListHeaderComponent={renderSpaceHeader}
                ListFooterComponent={renderSpaceHeader}
                renderItem={({ item }) => <View style={{ width: 150, flex: 1, marginHorizontal: 5 }}>
                                            <ItemCategory
                                              id={item.id}
                                              title={item.name}
                                              fontSize={15}
                                              onItemClick={() => navigation.navigate(screenName.CategoryListDetails, { data: item })}/>
                                          </View>
                }
              />
              {
                (browseContext.state.topNew && browseContext.state.topNew.length !== 0)
                  ? (
                    <SectionCourse
                      title='Các khóa học mới'
                      courses={browseContext.state.topNew}
                      onSeeAll={() => onSeeAll('TOP_NEW', 'Các khóa học mới')}
                      onClickCourse={(course) => handleClickCourse(course)}
                    />
                  )
                  : null
              }
              {
                (browseContext.state.authors && browseContext.state.authors !== 0)
                  ? (
                    <View style={styles.authorsContainer}>
                      <Text style={{ ...styles.topAuthorsText, color: theme.textColor }}>Giảng viên hàng đầu</Text>
                      <ListAuthors
                        authors={browseContext.state.authors}
                        onClickItem={(item) => navigation.navigate(screenName.AuthorProfile, { id: item.id })}/>
                    </View>
                  )
                  : null
              }
              <View>
                <AnimatedLoader
                  visible={browseContext.state.isLoading}
                  overlayColor="rgba(0,0,0,0.65)"
                  source={require('../../../assets/common/loader.json')}
                  animationStyle={styles.loading}
                  speed={2}
                />
              </View>
            </View>
          </ScrollView>
        )
      }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  authorsContainer: {
    marginVertical: 15,
  },
  avatar: {
    height: 30,
    marginHorizontal: 15,
    width: 30,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  headerRightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  loading: {
    height: 100,
    width: 100,
  },
  topAuthorsText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    marginLeft: 10,
  },
});

Browse.propTypes = {
  navigation: PropTypes.object,
};
Browse.defaultProps = {
};
export default Browse;
