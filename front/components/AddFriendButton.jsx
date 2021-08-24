import React, { useCallback } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FRIEND_REQUEST } from "../reducers/user";

const AddFriendButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const findFriend = me?.Friends.find((user) => user.UserId === post.User.id);

  const onClickButton = useCallback(() => {
    dispatch({
      type: ADD_FRIEND_REQUEST,
      data: post.User.id,
    });
  }, [findFriend]);

  return (
    <>
      <Button onClick={onClickButton}>
        {/* 친구 추가 */}
        {findFriend ? null : "친구 추가"}
      </Button>
    </>
  );
};

AddFriendButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default AddFriendButton;
