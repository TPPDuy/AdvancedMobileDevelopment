/* eslint-disable import/prefer-default-export */
const {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_COURSE_INFO,
  RECEIVE_LIKE_STATUS,
} = require('../constants/actions/CourseDetails');
const { default: api } = require('../api/api');
const { default: AlertModal } = require('../components/common/Alert');

const requestCourse = () => ({
  type: REQUEST_DATA,
}
);

const requestFailed = () => ({
  type: REQUEST_FAILED,
});

const receiveCourseDetails = (data) => ({
  type: RECEIVE_COURSE_INFO,
  data,
});

const receiveLikeStatus = (data) => ({
  type: RECEIVE_LIKE_STATUS,
  data,
});

export const fetchCourseInfo = (dispatch) => async (courseId) => {
  dispatch(requestCourse());
  console.log('course id: ', courseId);
  const responseOwnCourse = await api.get(`/user/check-own-course/${courseId}`);
  if (responseOwnCourse) {
    console.log('own course: ', responseOwnCourse);
    if (responseOwnCourse.payload.isUserOwnCourse) {
      const response = await api.get(`/course/get-course-detail/${courseId}/null`);
      const responseLike = await api.get(`/user/get-course-like-status/${courseId}`);
      if (response) {
        dispatch(receiveCourseDetails(response.payload));
      } else {
        dispatch(requestFailed());
        // AlertModal('Oopps', 'Tải dữ liệu thất bại');
      }
      if (responseLike) {
        console.log('like status: ', responseLike);
        dispatch(receiveLikeStatus(responseLike.likeStatus));
      } else {
        console.log('request like failed');
      }
    } else {
      console.log('course details failed ');
      dispatch(requestFailed());
    }
  } else {
    dispatch(requestFailed());
    // AlertModal('Oopps', 'Tải dữ liệu thất bại');
  }
};

export const changeLikeStatus = (dispatch) => async (courseId) => {
  const body = {
    courseId,
  };
  const response = await api.post('/user/like-course', body);

  if (response) {
    dispatch(receiveLikeStatus(response.likeStatus));
  }
};
