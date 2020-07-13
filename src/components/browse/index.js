/* eslint-disable react/display-name */
/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import {
  View, StyleSheet, Text, ScrollView, FlatList, Image, TouchableOpacity, Dimensions,
} from 'react-native';
import PropTypes, { object } from 'prop-types';
import ItemCategory from './ItemCategory';
import ListItemSkill from '../skill/ListItemSkill';
import GroupPath from '../path/GroupPaths';
import ListAuthors from './ListAuthors';
import screenName from '../../constants/screen-name';
import themes, { ThemeContext } from '../../constants/theme';
import MenuIcon from '../../../assets/common/menu-icon.svg';
import DarkIcon from '../../../assets/common/dark.svg';
import LightIcon from '../../../assets/common/light.svg';
import { BrowseContext } from '../providers/Browse';


const renderSeparator = () => (
    <View style={{ width: 15, height: 15 }}/>
);
const renderSpaceHeader = () => (
  <View style={{ width: 10, height: 10 }}/>
);

const Browse = ({
  navigation,
}) => {
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

  const browseContext = useContext(BrowseContext);

  useEffect(() => {
    browseContext.getCategory();
    browseContext.getAuthor();
  }, []);
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: theme.background }}>
            <View style={{ ...styles.container }}>
              <Text style={{ ...styles.topAuthorsText, color: theme.textColor, marginTop: 10 }}>Danh mục khóa học</Text>
              <FlatList
                style={{ width: '100%' }}
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
                                              onItemClick={(id) => navigation.navigate(screenName.CategoryDetails, { id })}/>
                                          </View>
                }
              />

              <View style={styles.authorsContainer}>
                <Text style={{ ...styles.topAuthorsText, color: theme.textColor }}>Giảng viên hàng đầu</Text>
                <ListAuthors
                  authors={browseContext.state.authors}
                  onClickItem={(item) => navigation.navigate(screenName.AuthorProfile, { item })}/>
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
  topAuthorsText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 10,
  },
});

Browse.propTypes = {
  navigation: PropTypes.object,
};
Browse.defaultProps = {
};
export default Browse;
