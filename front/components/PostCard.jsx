import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import moment from 'moment';

import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import { useDispatch } from 'react-redux';
import { LIKE_POST_REQUEST,UNLIKE_POST_REQUEST,REMOVE_POST_REQUEST } from '../reducers/post';
import AddFriendButton from './AddFriendButton';

moment.locale('ko');

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  // const [liked, setLiked] = useState(false);
  const id = useSelector((state) => state.user.me?.id);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onLike = useCallback(()=>{
    // console.log(post.id);
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
     return dispatch({
       type:LIKE_POST_REQUEST,
       data:post.id
      })
  },[id]);

  const onUnlike = useCallback(()=> {
      if(!id){
        return alert('로그인이 필요합니다');
      }
      return dispatch({
        type:UNLIKE_POST_REQUEST,
        data:post.id,
      })
  },[id])

  const onRemovePost = useCallback(()=> {

    if(!id){
      return alert('로그인이 필요합니다');
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  },[id])

  const liked = post.Likers.find((v) => v.id === id);
  // console.log(post);
  return (
    <CardWrapper key={post.id}>
      <Card
        style={{borderRadius:'20px'}}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
            : <HeartOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                <Button>신고</Button>
                <Button>수정</Button>
                <Button onClick={onRemovePost} danger>삭제</Button>
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={
          <>
        <AddFriendButton post={post} />
        <FollowButton post={post} />
          </>}
       
      >
        <span style={{float:'right'}}>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })),
    createdAt: PropTypes.object,
  }),
};

export default PostCard;