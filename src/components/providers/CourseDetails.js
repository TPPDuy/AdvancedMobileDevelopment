/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import courseDetailsReducer from '../../reducers/CourseDetails';
import { fetchCourseInfo, changeLikeStatus } from '../../actions/CourseDetails';

const CourseDetailsContext = React.createContext();

const initialState = {
  isLoading: false,
  courseInfo: null,
  isLiked: false,
  currentLesson: null,
};

const CourseDetailsProvider = (props) => {
  const [state, dispatch] = useReducer(courseDetailsReducer, initialState);
  return (
      <CourseDetailsContext.Provider value= {{
        state,
        getCourseInfo: fetchCourseInfo(dispatch),
        changeLikeStatus: changeLikeStatus(dispatch),
      }}>
          {props.children}
      </CourseDetailsContext.Provider>
  );
};

export { CourseDetailsContext, CourseDetailsProvider };
