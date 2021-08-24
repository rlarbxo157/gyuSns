import React from 'react'
import LoginForm from '../components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import LandingPage from './LandingPage';
import axios from 'axios';
const Home = () =>{
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
    return(
        <>
            {me?
              <LandingPage />:
              <>
              <div className="home">
              <video style={{width:'100%',height:'100%',position:'fixed',zIndex:-1,objectFit:'cover'}} autoPlay muted loop>
                  <source src="video/aa.mp4" type="video/mp4" />
              </video>
  
              <div className="loginForm" style={{backgroundColor:'white',minWidth:'350px',height:'500px',opacity:'1',
                  position:'absolute',left:'50%',top:'50%',margin:'-300px 0px 0px -175px',border:'1px solid black',borderRadius:'10px'
              }} >
                  <LoginForm />
              </div>
                </div>
                </>
            }
        </>
    )
}

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


export default Home;