/* eslint-disable max-len */
/* eslint-disable global-require */
import React, { useContext, useEffect } from 'react';
import {
  View, Text, Image, ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import colorSource from '../../constants/color';
import CollapsableDescription from '../common/CollapsableDescription';
import ListCourses from '../home/ListCourses';
import screenName from '../../constants/screen-name';
import { ThemeContext } from '../../constants/theme';
import { AuthorContext } from '../providers/Author';
import ListItemSkill from '../skill/ListItemSkill';

const AuthorProfile = ({
  route, navigation,
}) => {
  const buttonBackground = colorSource.blue;
  const buttonTextColor = colorSource.white;
  const authorId = route.params.id;
  const authorContext = useContext(AuthorContext);

  useEffect(() => {
    authorContext.getAuthorDetails(authorId);
  }, []);

  const handleClickCourse = (course) => {
    navigation.push(screenName.CourseInfoScreen, { screen: screenName.CourseDetails, params: { course } });
  };
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <ScrollView showsVerticalScrollIndicator={false} style={{ ...styles.container, backgroundColor: theme.background }}>
              <View style={styles.infoBlock}>
                <Image source={{ uri: authorContext.state.authorDetails.avatar }} style={styles.avatar} resizeMode='cover'/>
                <Text style={styles.name}>
                  {authorContext.state.authorDetails.name}
                </Text>

                <Text style={{ ...styles.btnFollow, backgroundColor: buttonBackground, color: buttonTextColor }}>
                  {authorContext.state.authorDetails.soldNumber} học viên
                </Text>

                <Text style={styles.followDesc}>
                  {authorContext.state.authorDetails.major}
                </Text>
                {
                  authorContext.state.authorDetails.intro && authorContext.state.authorDetails.intro.length !== 0
                    ? <CollapsableDescription minHeight={40} description={authorContext.state.authorDetails.intro}/>
                    : <Text style={{ color: colorSource.white }}>(Chưa cập nhật giới thiệu)</Text>

                }
                {
                  (authorContext.state.authorDetails.phone && authorContext.state.authorDetails.phone.length !== 0)
                    ? (
                      <View style={styles.socialContainer}>
                        <Image source={require('../../../assets/author/phone-icon.png')} style={styles.icon}/>
                        <Text style={styles.link}>{authorContext.state.authorDetails.phone}</Text>
                      </View>
                    )
                    : null
                }
                {
                  (authorContext.state.authorDetails.email && authorContext.state.authorDetails.email.length !== 0)
                    ? (
                      <View style={styles.socialContainer}>
                        <Image source={require('../../../assets/author/mail-icon.png')} style={styles.icon}/>
                        <Text style={styles.link}>{authorContext.state.authorDetails.email}</Text>
                      </View>
                    )
                    : null
                }
                <View style={styles.socialContainer}>
                  <Image source={require('../../../assets/author/facebook-icon.png')} style={styles.socialIcon}/>
                  <Image source={require('../../../assets/author/linkedin-icon.png')} style={styles.socialIcon}/>
                </View>
              </View>
              {
                (authorContext.state.authorDetails.skills && authorContext.state.authorDetails.skills.length !== 0)
                  ? (
                    <View style={styles.listCourses}>
                      <Text style={{ ...styles.title, color: theme.textColor }}>Kỹ năng</Text>
                      <ListItemSkill
                        listSkills={authorContext.state.authorDetails.skills}
                      />
                    </View>
                  )
                  : null
              }
              {
                (authorContext.state.authorDetails.courses && authorContext.state.authorDetails.courses.length !== 0)
                  ? (
                    <View style={styles.listCourses}>
                      <ListCourses
                        courses={authorContext.state.authorDetails.courses}
                        title='Các khóa học'
                        onItemClick={(id) => handleClickCourse(id)}/>
                    </View>
                  )
                  : null
              }
          </ScrollView>
        )
      }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  btnFollow: {
    borderColor: colorSource.blue,
    fontSize: 13,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 8,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    paddingTop: 20,
    width: '100%',
  },
  followDesc: {
    color: colorSource.gray,
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 15,
  },
  icon: {
    height: 15,
    marginRight: 10,
    width: 15,
  },
  infoBlock: {
    alignItems: 'center',
    backgroundColor: colorSource.darkBackground,
    borderRadius: 20,
    flexDirection: 'column',
    marginHorizontal: 15,
    padding: 15,
  },
  link: {
    color: colorSource.white,
    fontSize: 15,
    fontWeight: '500',
  },
  listCourses: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  name: {
    color: colorSource.white,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  socialContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginTop: 15,
  },
  socialIcon: {
    height: 20,
    marginRight: 10,
    width: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 20,
  },
});

AuthorProfile.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

AuthorProfile.defaultProps = {
};

export default AuthorProfile;
