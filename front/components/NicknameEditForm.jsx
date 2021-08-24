import { Form, Input } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";
import { changeNicknameRequestAction } from "../reducers/user";

const NicknameEditForm = () => {
  const { me } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(me?.nickname || "");
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  // const onSubmit = useCallback(()=>{
  //   dispatch(changeNicknameRequestAction({
  //     type:CHANGE_NICKNAME_REQUEST,
  //     data:nickname
  //   }))
  // },[nickname])

  return (
    <Form
      style={{
        marginBottom: "20px",
        border: "1px solid #d9d9d9",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <Input.Search
        addonBefore="닉네임"
        enterButton="수정"
        onChange={onChangeNickname}
        value={nickname}
        onSearch={onSubmit}
      />
    </Form>
  );
};

export default NicknameEditForm;
