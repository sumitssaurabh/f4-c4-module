// src/redux/actions.js
import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const posts = response.data.map((post) => ({
          ...post,
          imgSrc: `https://picsum.photos/200?random=${post.id}`,
        }));
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};
