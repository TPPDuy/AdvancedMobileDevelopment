/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import courseDetailsReducer from '../../reducers/CourseDetails';
import { fetchCourseInfo } from '../../actions/CourseDetails';

const CourseDetailsContext = React.createContext();

const initialState = {
  isLoading: false,
  courseInfo: null,
  isLiked: false,
};

const CourseDetailsProvider = (props) => {
  const [state, dispatch] = useReducer(courseDetailsReducer, initialState);
  return (
      <CourseDetailsContext.Provider value= {{
        state,
        getCourseInfo: fetchCourseInfo(dispatch),
      }}>
          {props.children}
      </CourseDetailsContext.Provider>
  );
};

export { CourseDetailsContext, CourseDetailsProvider };
