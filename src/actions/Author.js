/* eslint-disable import/prefer-default-export */
const { REQUEST_AUTHOR, RECEIVE_AUTHOR, REQUEST_FAIL } = require('../constants/actions/Author');
const { default: api } = require('../api/api');

const requestAuthor = () => ({
  type: REQUEST_AUTHOR,
});
const receiveAuthor = (data) => ({
  type: RECEIVE_AUTHOR,
  data,
});
const requestFail = () => ({
  type: REQUEST_FAIL,
});
export const getAuthorDetails = (dispatch) => async (id) => {
  dispatch(requestAuthor());
  try {
    const response = await api.get(`/instructor/detail/${id}`);
    if (response) {
      dispatch(receiveAuthor(response.payload));
    } else dispatch(requestFail());
  } catch (err) {
    dispatch(requestFail());
    console.log(err);
  }
};
