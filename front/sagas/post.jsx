import axios from "axios";
import { all, call, put, takeLatest,fork, throttle } from "redux-saga/effects";
import { ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_FAILURE,UPLOAD_IMAGES_REQUEST,UPLOAD_IMAGES_SUCCESS,
UPLOAD_IMAGES_FAILURE, 
ADD_COMMENT_REQUEST,
LOAD_POSTS_REQUEST,
LOAD_POSTS_SUCCESS,LOAD_POSTS_FAILURE,LIKE_POST_REQUEST,LIKE_POST_SUCCESS,LIKE_POST_FAILURE,
UNLIKE_POST_REQUEST,UNLIKE_POST_SUCCESS,UNLIKE_POST_FAILURE,REMOVE_POST_REQUEST
,REMOVE_POST_SUCCESS,REMOVE_POST_FAILURE
} from "../reducers/post";

import {ADD_POST_TO_ME,REMOVE_POST_OF_ME} from '../reducers/user';


function addPostApi(data){
    return axios.post('/post',data);
}

function* addPost(action){
    try{
        const result = yield call(addPostApi,action.data);
        console.log(result.data);
        yield put({
            type:ADD_POST_SUCCESS,
            data:result.data,
        });
        yield put({
            type:ADD_POST_TO_ME,
            data:result.data.id
        })
    }catch(error){
        console.log(error);
    }
}

// function uploadImagesApi(data){
//     return axios.post('/post/')
// }

// function* uploadImages(action){
//     try{
//         const result = yield all(uploadImagesApi,action.data);
//     }
// }

function addCommentApi(data){
    return axios.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action){
    try{
        const result = yield call(addCommentApi,action.data);
        yield put({
            type:ADD_COMMENT_REQUEST,
            data:result.data
        })
    }catch(err){
        console.error(err);
    }
}

function loadPostsApi(data){
    return axios.get(`/posts`,data);
}

function* loadPosts(action){
    try{
        const result = yield call(loadPostsApi,action.lastId);
        yield put({
            type:LOAD_POSTS_SUCCESS,
            data:result.data,
        });
    }catch(error){
        console.error(error);
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: error.response.data,
        });
    }
}
function uploadImagesAPI(data) {
    return axios.post('/post/images', data);
  }
  
function* uploadImages(action){
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
          type: UPLOAD_IMAGES_SUCCESS,
          data: result.data,
        });
      } catch (err) {
        console.error(err);
        yield put({
          type: UPLOAD_IMAGES_FAILURE,
          error: err.response.data,
        });
      }
}

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
  }
  
  function* likePost(action) {
    try {
      const result = yield call(likePostAPI, action.data);
      yield put({
        type: LIKE_POST_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: LIKE_POST_FAILURE,
        error: err.response.data,
      });
    }
  }


  function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
  }
  
  function* unlikePost(action) {
    try {
      const result = yield call(unlikePostAPI, action.data);
      yield put({
        type: UNLIKE_POST_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: UNLIKE_POST_FAILURE,
        error: err.response.data,
      });
    }
  }

  function removePostAPI(data) {
    return axios.delete(`/post/${data}`);
  }
  
  function* removePost(action) {
    try {
      const result = yield call(removePostAPI, action.data);
      yield put({
        type: REMOVE_POST_SUCCESS,
        data: result.data,
      });
      yield put({
        type: REMOVE_POST_OF_ME,
        data: action.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: REMOVE_POST_FAILURE,
        error: err.response.data,
      });
    }
  }

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST,addComment);
}
function* watchLoadPosts(){
    yield throttle(5000,LOAD_POSTS_REQUEST,loadPosts);
}
function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
  }

function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchUploadImages(){
    yield takeLatest(UPLOAD_IMAGES_REQUEST,uploadImages);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}


export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadPosts),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchUploadImages),
        fork(watchRemovePost),
        // fork(watchUploadImages),
    ])
}