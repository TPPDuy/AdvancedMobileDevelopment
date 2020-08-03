/* eslint-disable import/prefer-default-export */
const { REQUEST_DATA, REQUEST_FAILED, RECEIVE_COURSE_INFO } = require('../constants/actions/CourseDetails');
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
export const fetchCourseInfo = (dispatch) => async (courseId) => {
  dispatch(requestCourse());
  console.log('course id: ', courseId);
  const responseOwnCourse = await api.get(`/user/check-own-course/${courseId}`);
  if (responseOwnCourse) {
    console.log('own course: ', responseOwnCourse);
    if (responseOwnCourse.payload.isUserOwnCourse) {
      const response = await api.get(`/course/detail-with-lesson/${courseId}`);
      if (response) {
        console.log('course details: ', response.payload);
        dispatch(receiveCourseDetails(response.payload));
      } else {
        console.log('course details failed ');
        dispatch(requestFailed());
        // AlertModal('Oopps', 'Tải dữ liệu thất bại');
      }
    } else {
      console.log('course details failed ');
      dispatch(requestFailed());
      // AlertModal('Oopps', 'Khóa học có phí. Vui lòng đăng nhập trên trình duyệt, mua khóa học và quay lại sau!');
    }
  } else {
    dispatch(requestFailed());
    // AlertModal('Oopps', 'Tải dữ liệu thất bại');
  }
};
