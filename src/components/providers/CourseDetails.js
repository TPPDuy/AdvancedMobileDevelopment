/* eslint-disable react/prop-types */
import React, { useReducer, useEffect } from 'react';
import courseDetailsReducer from '../../reducers/CourseDetails';
import { fetchCourseInfo, changeLikeStatus, getLessonWithVideo } from '../../actions/CourseDetails';

const CourseDetailsContext = React.createContext();

const initialState = {
  isLoading: false,
  courseInfo: null,
  isLiked: false,
  currentLesson: {},
  sections: [],
  process: 0,
};

const CourseDetailsProvider = (props) => {
  const [state, dispatch] = useReducer(courseDetailsReducer, initialState);
  const changeCurrentLesson = (courseId, lessonId) => {

  };
  return (
      <CourseDetailsContext.Provider value= {{
        state,
        getCourseInfo: fetchCourseInfo(dispatch),
        changeLikeStatus: changeLikeStatus(dispatch),
        getLessonVideo: getLessonWithVideo(dispatch),
      }}>
          {props.children}
      </CourseDetailsContext.Provider>
  );
};

export { CourseDetailsContext, CourseDetailsProvider };
