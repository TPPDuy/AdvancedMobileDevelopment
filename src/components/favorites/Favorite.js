/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
import {
  View, ScrollView, StyleSheet, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import screenName from '../../constants/screen-name';
import DarkIcon from '../../../assets/common/dark.svg';
import LightIcon from '../../../assets/common/light.svg';
import themes, { ThemeContext } from '../../constants/theme';
import { FavoriteContext } from '../providers/Favorite';
import ListCourses from '../home/ListCourses';

const Favorite = ({ navigation }) => {
  const onClickCourse = (course) => {
    navigation.navigate(screenName.CourseDetails, { course });
  };

  const favoriteContext = useContext(FavoriteContext);

  useEffect(() => {
    favoriteContext.getData();
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
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: theme.background, padding: 15 }}
              >
                <ListCourses
                  courses={favoriteContext.state.favorites}
                />
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
  },
  headerRightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
});


Favorite.propTypes = {
  navigation: PropTypes.object,
};
export default Favorite;
