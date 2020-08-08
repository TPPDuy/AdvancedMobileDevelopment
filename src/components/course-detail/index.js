/* eslint-disable max-len */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe'
import {
  View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Share,
} from 'react-native';
import PropTypes from 'prop-types';
import { formatMonthYearType, formatHourType1 } from '../../utils/DateTimeUtils';
import colorSource from '../../constants/color';
import ItemAuthorHorizontal from './ItemAuthor';
import Content from './Content';
import CollapsableDescription from '../common/CollapsableDescription';
import screenName from '../../constants/screen-name';
import { ThemeContext } from '../../constants/theme';
import { CourseDetailsContext } from '../providers/CourseDetails';
import StarRating from 'react-native-star-rating';
import { checkYoutubeUrl, extractVideoIdFromYoutubeUrl } from '../../utils/CommonUtils';
import AnimatedLoader from 'react-native-animated-loader';
import { LanguageContext } from '../providers/Language';
import { duration } from 'moment';

const ItemFunction = ({ name, icon, onClick = (f) => f }) => (
  <View style={styles.itemFunctionContainer}>
    <TouchableOpacity style={styles.iconFunctionContainer} onPress={() => onClick()}>
      <Image source={icon} style={styles.iconFunction}/>
    </TouchableOpacity>
    <Text style={styles.nameFunction}>{name}</Text>
  </View>
);

const ButtonFunction = ({ name, icon, onClick = (f) => f }) => (
  <TouchableOpacity style={styles.btnContainer} onPress={() => onClick()}>
    <Image source={icon} style={styles.iconFunction}/>
    <Text style={{ ...styles.nameFunction, marginLeft: 5 }}>{name}</Text>
  </TouchableOpacity>
);

const ProgressBar = ({ progress }) => {
  const progressColor = progress === 100 ? colorSource.green : colorSource.yellow;
  return (
    <View style={styles.progressContainer}>
        <View style={{ ...styles.progress, width: `${progress}%`, backgroundColor: progressColor }}/>
    </View>
  );
};

const CourseDetails = ({
  route, navigation,
}) => {
  const { course } = route.params;
  const courseDetailContext = useContext(CourseDetailsContext);
  const languageContext = useContext(LanguageContext);
  const youtubeRef = useRef();
  var expoRef;
  var seeked = false;
  const [isFinishLesson, setIsFinishLesson] = useState(false);
  const [isLoadVideo, setIsLoadVideo] = useState(true);
  console.log('course', route.params);
  useEffect(() => {
    courseDetailContext.getCourseInfo(course);
  }, []);

  console.log('lesson', courseDetailContext.state.currentLesson);
  let iconLike = courseDetailContext.state.isLiked ? require('../../../assets/course-detail/like-fill-icon.png') : require('../../../assets/course-detail/like-icon.png');
  
  const handleChangeLikeStatus = () => {
    courseDetailContext.changeLikeStatus(course);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // useEffect(() => {
  //   if (courseDetailContext.state.currentLesson) {
  //     console.log('play from: ', courseDetailContext.state.currentLesson.currentTime);
  //     expoAVRef.current.playFromPositionAsync(courseDetailContext.state.currentLesson.currentTime || 0)
  //   }
  // }, [courseDetailContext.state.currentLesson]);

  const handleChangeLesson = (sectionId, lessonId) => {
    if (lessonId !== courseDetailContext.state.currentLesson.id) {
      courseDetailContext.changeCurrentLesson(course, sectionId, lessonId);
    }
  }

  const handlePlayback = component => {
    if (component) {
      expoRef = component;
      component.loadAsync({uri: courseDetailContext.state.currentLesson.videoUrl});
    }
  };

  const handlePlayVideo = (status) => {
    if (status) {
      console.log('status', status);
      if (status.isLoaded) {
        setIsLoadVideo(false);
        if (!seeked) {
          expoRef.setStatusAsync({ shouldPlay: true, positionMillis: 60000});
          seeked = true;
        }
      }
      if (!courseDetailContext.state.currentLesson.isFinish && status.positionMillis >= Math.floor(status.durationMillis * 95/100)) {
        courseDetailContext.updateLessonStatus(courseDetailContext.state.currentLesson.id);
      }
    }
  };

  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <View style={{ ...styles.container, backgroundColor: theme.background }}>
            {
              courseDetailContext.state.courseInfo && courseDetailContext.state.currentLesson && courseDetailContext.state.currentLesson.videoUrl
                ? (
                  <>
                  {
                    checkYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)
                    ? (
                      <YoutubePlayer
                        ref={youtubeRef}
                        videoId = {extractVideoIdFromYoutubeUrl(courseDetailContext.state.currentLesson.videoUrl)}
                        height={230}
                        onChangeState={(state) => {
                          if (state === 'buffering' && !seeked) {
                            youtubeRef.current.seekTo(courseDetailContext.state.currentLesson.currentTime)
                            seeked = true;
                          }
                        }}
                        onPlaybackRateChange={(e) => console.log('playback rate change: ', e)}
                      />
                    )
                    : (
                      <Video
                        ref={handlePlayback}
                        resizeMode={Video.RESIZE_MODE_CONTAIN}
                        useNativeControls
                        usePoster={isLoadVideo}
                        posterSource={{uri: 'https://i.pinimg.com/originals/85/e2/4b/85e24bd18e3658cd321688b4c34cc576.gif'}}
                        style={styles.video}
                        positionMillis={60000}
                        onPlaybackStatusUpdate={(status) => handlePlayVideo(status)}
                      />
                    )
                  }
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View style={styles.infoCourseBlock}>
                        <View style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: 10,
                        }}>
                          <Text style={styles.title}>{courseDetailContext.state.courseInfo.title}</Text>
                          <TouchableOpacity onPress={() => navigation.pop()}>
                            <Image source={require('../../../assets/common/close-icon.png')} style={styles.closeIcon}/>
                          </TouchableOpacity>
                        </View>
                        <ItemAuthorHorizontal
                          name={courseDetailContext.state.courseInfo.instructor.name}
                          avatar={courseDetailContext.state.courseInfo.instructor.avatar}
                        />
                        <View style={styles.infoBlock}>
                          <Text style={styles.info}>
                            {formatMonthYearType(courseDetailContext.state.courseInfo.updatedAt)} ∙ {courseDetailContext.state.courseInfo.videoNumber} video(s) ∙ {courseDetailContext.state.courseInfo.totalHours}h ∙ 
                          </Text>
                          <StarRating
                            containerStyle={styles.ratingBar}
                            disabled
                            halfStarEnabled
                            halfStarColor="#fcba03"
                            maxStars={5}
                            rating={courseDetailContext.state.courseInfo.contentPoint}
                            fullStarColor="#fcba03"
                            emptyStarColor="#d4d4d4"
                            starSize={10}/>
                        </View>
                        <View style={styles.func}>
                          <View style={styles.functionContainer}>
                            <ItemFunction name={languageContext.state.Like} icon={iconLike} onClick={() => handleChangeLikeStatus()}/>
                            <ItemFunction
                              name={languageContext.state.Share}
                              icon={require('../../../assets/course-detail/share-icon.png')}
                              onClick={() => handleShare()}
                            />
                            <ItemFunction name={languageContext.state.Download} icon={require('../../../assets/course-detail/download-icon.png')}/>
                          </View>
                        </View>
                        <View style={styles.description}>
                          <CollapsableDescription description={courseDetailContext.state.courseInfo.description}/>
                        </View>

                        <ButtonFunction
                          name={languageContext.state.RelatedCourses}
                          icon={require('../../../assets/course-detail/related-icon.png')}
                          onClick={(f) => f}
                        />
                      </View>
                      <View style={styles.progressBar}>
                          <ProgressBar progress={courseDetailContext.state.process}/>
                      </View>
                      <View style={{ paddingHorizontal: 15 }}>
                        <Content
                          modules={courseDetailContext.state.sections}
                          playingLesson={courseDetailContext.state.currentLesson.id || courseDetailContext.state.currentLesson.lessonId}
                          onClickLesson={(sectionId, lessonId) => handleChangeLesson(sectionId, lessonId)}
                        />
                      </View>
                    </ScrollView>
                  </>
                )
                : (
                  <AnimatedLoader
                    visible={courseDetailContext.state.isLoading}
                    overlayColor="rgba(0,0,0,0.65)"
                    source={require('../../../assets/common/loader.json')}
                    animationStyle={styles.loading}
                    speed={2}
                  />
                )
            }
          </View>
        )
      }
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  authorSeparator: {
    width: 5,
  },
  backIcon: {
    alignItems: 'flex-start',
    height: 25,
    justifyContent: 'flex-start',
    left: 5,
    position: 'absolute',
    top: 5,
    width: 25,
    zIndex: 9,
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 8,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  closeIcon: {
    width: 15,
    height: 15,
    marginTop: 10,
  },
  description: {
    marginBottom: 15,
    width: '100%',
  },
  functionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 25,
  },
  iconFunction: {
    height: 20,
    width: 20,
  },
  loading: {
    height: 100,
    width: 100,
  },
  iconFunctionContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    marginBottom: 7,
    width: 40,
  },
  info: {
    color: colorSource.lightGray,
    fontSize: 12,
    marginTop: 10,
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  infoCourseBlock: {
    backgroundColor: colorSource.darkGray,
    flexDirection: 'column',
    padding: 15,
    position: 'relative',
  },
  itemFunctionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameFunction: {
    color: colorSource.white,
    fontSize: 14,
  },
  title: {
    color: colorSource.white,
    fontSize: 25,
    fontWeight: '500',
    marginRight: 20,
  },
  video: {
    height: 220,
  },
  ratingBar: {
    backgroundColor: colorSource.transparent,
    marginRight: 5,
    marginHorizontal: 3,
    marginTop: 10,
  },
  progress: {
    height: '100%',
  },
  progressBar: {
    height: 4,
    width: '100%',
  },
  progressContainer: {
    backgroundColor: colorSource.lightGray,
    height: '100%',
    width: '100%',
  },
});

ItemFunction.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.number,
};
ButtonFunction.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.number,
};
ProgressBar.propTypes = {
  progress: PropTypes.number,
  total: PropTypes.number,
};
CourseDetails.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

CourseDetails.defaultProps = {
};

export default CourseDetails;
