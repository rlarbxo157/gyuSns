import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { END } from 'redux-saga';
import '../css/AppLayout.css';
import '../css/PostForm.css';
import '../css/PostCreatedForm.css';
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <script src="https://kit.fontawesome.com/1b13624a48.js" crossorigin="anonymous"></script>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  // console.log(req.headers);
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
})

export default wrapper.withRedux(NodeBird);