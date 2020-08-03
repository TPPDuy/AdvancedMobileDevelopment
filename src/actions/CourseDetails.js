/* eslint-disable import/prefer-default-export */
const {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_COURSE_INFO,
  RECEIVE_LIKE_STATUS,
  RECEIVE_CURRENT_LESSON,
  RECEIVE_LESSON_VIDEO,
} = require('../constants/actions/CourseDetails');
const { default: api } = require('../api/api');

const requestData = () => ({
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

const receiveCurrentLesson = (data) => ({
  type: RECEIVE_CURRENT_LESSON,
  data,
});

const receiveLessonVideo = (data) => ({
  type: RECEIVE_LESSON_VIDEO,
  data,
});

export const fetchCourseInfo = (dispatch) => async (courseId) => {
  dispatch(requestData());
  console.log('course id: ', courseId);
  const responseOwnCourse = await api.get(`/user/check-own-course/${courseId}`);
  if (responseOwnCourse) {
    console.log('own course: ', responseOwnCourse);
    if (responseOwnCourse.payload.isUserOwnCourse) {
      const response = await api.get(`/course/get-course-detail/${courseId}/null`);
      const responseLike = await api.get(`/user/get-course-like-status/${courseId}`);
      if (response) {
        dispatch(receiveCourseDetails(response.payload));
        try {
          dispatch(receiveCurrentLesson(response.payload.section[0].lesson[0]));
          const responseLesson = await api.get(`/lesson/video/${courseId}/${response.payload.section[0].lesson[0].id}`);
          if (response) {
            dispatch(receiveLessonVideo(responseLesson.payload));
          }
          // dispatch(getLessonWithVideo(dispatch)(response.payload.id, response.payload.section[0].lesson[0].id));
        } catch (e) {
          dispatch(receiveCurrentLesson(null));
        }
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

export const getLessonWithVideo = (dispatch) => async (courseId, lessonId) => {
  dispatch(requestData());

  const response = await api.get(`/lesson/video/${courseId}/${lessonId}`);
  if (response) {
    dispatch(receiveLessonVideo(response.payload));
  }
};
