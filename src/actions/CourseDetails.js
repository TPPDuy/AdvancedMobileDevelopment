import { getUserInfo } from '../storage/Storage';

/* eslint-disable import/prefer-default-export */
const {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_COURSE_INFO,
  RECEIVE_LIKE_STATUS,
  RECEIVE_CURRENT_LESSON,
  RECEIVE_LESSON_VIDEO,
  FINISH_REQUEST_DATA,
  RECEIVE_COURSE_SECTION,
  RECEIVE_PROCESS,
} = require('../constants/actions/CourseDetails');
const { default: api } = require('../api/api');

const requestData = () => ({
  type: REQUEST_DATA,
}
);

const requestFailed = () => ({
  type: REQUEST_FAILED,
});

const finishRequestData = () => ({
  type: FINISH_REQUEST_DATA,
});

const receiveCourseDetails = (data) => ({
  type: RECEIVE_COURSE_INFO,
  data,
});

const receiveCourseSection = (data) => ({
  type: RECEIVE_COURSE_SECTION,
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

const receiveProcess = (data) => ({
  type: RECEIVE_PROCESS,
  data,
});

export const fetchCourseInfo = (dispatch) => async (courseId) => {
  dispatch(requestData());
  const responseOwnCourse = await api.get(`/user/check-own-course/${courseId}`);
  if (responseOwnCourse) {
    if (responseOwnCourse.payload.isUserOwnCourse) {
      const response = await api.get(`/course/get-course-detail/${courseId}/null`);
      const responseLike = await api.get(`/user/get-course-like-status/${courseId}`);
      const responseSection = await api.get(`/course/detail-with-lesson/${courseId}`);
      const responseProcess = await api.get(`/course/process-course/${courseId}`);
      if (response) {
        dispatch(receiveCourseDetails(response.payload));
        try {
          const recentLessonResponse = await api.get(`/course/last-watched-lesson/${courseId}`);
          if (recentLessonResponse) {
            dispatch(receiveCurrentLesson({
              ...recentLessonResponse.payload,
              id: recentLessonResponse.payload.lessonId,
            }));
          } else {
            dispatch(receiveCurrentLesson(response.payload.section[0].lesson[0]));
            const responseLesson = await api.get(`/lesson/video/${courseId}/${response.payload.section[0].lesson[0].id}`);
            if (response) {
              dispatch(receiveLessonVideo(responseLesson.payload));
            }
          }
        } catch (e) {
          dispatch(receiveCurrentLesson(null));
        }
      } else {
        dispatch(requestFailed());
      }

      if (responseLike) {
        dispatch(receiveLikeStatus(responseLike.likeStatus));
      } else {
        console.log('request like failed');
      }

      if (responseSection) {
        dispatch(receiveCourseSection(responseSection.payload.section));
      } else {
        console.log('request section failed');
      }

      if (responseProcess) {
        dispatch(receiveProcess(responseProcess.payload));
      }
    } else {
      dispatch(requestFailed());
    }
  } else {
    dispatch(requestFailed());
  }
  dispatch(finishRequestData());
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
  const response = await api.get(`/lesson/video/${courseId}/${lessonId}`);
  if (response) {
    dispatch(receiveLessonVideo(response.payload));
  }
};

export const updateLessonStatus = (dispatch) => async (lessonId) => {
  const data = {
    lessonId,
  };
  api.post('/lesson/update-status', data);
};

export const updateLearningTime = () => async (lessonId, currentTime) => {
  console.log('update time', currentTime);
  if (!Number.isNaN(currentTime)) {
    const data = {
      lessonId,
      currentTime,
    };
    await api.put('/lesson/update-current-time-learn-video', data);
  }
};
