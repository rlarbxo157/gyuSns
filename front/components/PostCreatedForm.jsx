import React, { useCallback, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import {
  ADD_POST_REQUEST,
  UPLOAD_IMAGES_REQUEST,
  REMOVE_IMAGE,
} from "../reducers/post";
const PostCreatedForm = ({ onShow }) => {
  const { me } = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  const [show, setShow] = useState(false);
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const imageInput = useRef();
  const dispatch = useDispatch();
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = useCallback((e) => {
    // console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback(
    (i) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: i,
      });
    },
    []
  );
  const onSubmit = useCallback(
    (e) => {
      if (!text || !text.trim()) {
        return alert("게시글을 입력해주세요");
      }

      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append("image", p);
      });
      formData.append("content", text);
      return dispatch({
        type: ADD_POST_REQUEST,
        data: formData,
      });
    },
    [text, imagePaths]
  );

  return (
    <div
      className="postCreatedForm"
      style={{
        width: "400px",
        height: "328px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px",
      }}
    >
      <div
        className="postCreatedForm_top"
        style={{
          height: "60px",
          borderBottom: "1px solid black",
          borderColor: "#e3e6ea",
          padding: "0 0 10px 0",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              position: "relative",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            게시물 만들기
          </div>
          <i
            onClick={onShow}
            className="fas fa-times fa-lg"
            style={{ position: "relative", right: "20px" }}
          ></i>
        </div>
      </div>
      <div
        className="postCreatedForm_middle"
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
            src="https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p50x50/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BOw0nnArsGsAX-bGGGQ&_nc_ht=scontent.ficn3-2.fna&oh=1e73ccedbcaebec3c06a8cacdf94601d&oe=6144DDA2"
          />
          <span style={{ fontWeight: "600" }}>{me.nickname}</span>
        </div>
        <Form
          encType="multipart/form-data"
          onFinish={onSubmit}
          style={{ height: "200px" }}
        >
          <br />
          <Input.TextArea
            value={text}
            onChange={onChangeText}
            maxLength={140}
            placeholder={`${me.nickname}님, 어떤 즐거운 일이 있으셨나요?`}
            style={{
              borderRadius: "20px",
              marginBottom: "10px",
              height: "80px",
            }}
          />
          <div style={{ marginBottom: "10px" }}>
            <input
              type="file"
              name="image"
              multiple
              hidden
              ref={imageInput}
              onChange={onChangeImages}
            />
            <div
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                height: "38px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  position: "relative",
                  left: "10px",
                }}
              >
                게시물에 추가
              </span>
              <Button
                onClick={onClickImageUpload}
                style={{ position: "relative", border: "none", right: "10px" }}
              >
                <i
                  className="far fa-images fa-2x"
                  style={{ color: "green" }}
                ></i>
              </Button>
            </div>
            <Button
              type="primary"
              style={{
                float: "right",
                position: "relative",
                width: "100%",
                top: "10px",
                borderRadius: "10px",
              }}
              htmlType="submit"
            >
              게시
            </Button>
          </div>
          <div>
            {imagePaths.map((v, i) => (
              <div key={v} style={{ display: "inline-block" }}>
                <img
                  src={`http://localhost:3065/${v}`}
                  style={{ width: "100%" }}
                  alt={v}
                />
                <div>
                  <Button onClick={onRemoveImage(i)}>제거</Button>
                </div>
              </div>
            ))}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostCreatedForm;
