import { Avatar, Card, Button } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
import { useSelector } from "react-redux";
import Link from "next/link";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  // console.log(me);

  // 여기서 Posts.legnth 에러 뜨는 이유는, Posts 가 안불러와졌는데 length 값을 적어서 에러뜨는거같음
  return (
    <Card
      actions={[
        <div key="twit">
          게시글
          <br />
          {me.Posts.length}
        </div>,
        <div key="followings">
          <Link href="/profile">
            <a>
              팔로잉
              <br />
              {me.Followings.length}
            </a>
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            <a>
              팔로워
              <br />
              {me.Followers.length}
            </a>
          </Link>
        </div>,
        // <div>{mainPosts.filter((v) => v.id === me.id)}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
