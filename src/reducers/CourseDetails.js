const { REQUEST_DATA, REQUEST_FAILED, RECEIVE_COURSE_INFO } = require('../constants/actions/CourseDetails');

const courseDetailsReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        courseInfo: null,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case RECEIVE_COURSE_INFO:
      return {
        ...state,
        isLoading: false,
        courseInfo: action.data,
      };
    default:
      return state;
  }
};

export default courseDetailsReducer;
