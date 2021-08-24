import React, { useCallback, useRef, useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import {
  ADD_POST_REQUEST,
  UPLOAD_IMAGES_REQUEST,
  REMOVE_IMAGE,
} from "../reducers/post";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = ({ onShow }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div
      onClick={onShow}
      className="comment_form"
      style={{
        opacity: "1",
        position: "relative",
        top: "20px",
        height: "123px",
        backgroundColor: "white",
        padding: "15px 36px 0px 36px",
        borderRadius: "20px",
        marginBottom: "30px",
      }}
    >
      <div
        className="user_comment_form"
        style={{
          display: "flex",
          borderBottom: "1px solid black",
          borderColor: "#e3e6ea",
          padding: "0 0 10px 0",
        }}
      >
        <img
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src="https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p50x50/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BOw0nnArsGsAX-bGGGQ&_nc_ht=scontent.ficn3-2.fna&oh=1e73ccedbcaebec3c06a8cacdf94601d&oe=6144DDA2"
        />
        <input
          placeholder={`${me.nickname} 님, 무슨 일이 있었나요?`}
          className="comment_input"
          style={{ width: "100%", borderRadius: "20px", height: "40px" }}
        />
      </div>
      <div
        className="user_comment_emotion"
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          top: "10px",
        }}
      >
        <div className="user_comment_image">
          <i
            className="far fa-images fa-2x"
            aria-hidden
            style={{ color: "green" }}
          ></i>
          <span style={{ fontWeight: "600" }}>사진/동영상</span>
        </div>
        <div className="user_comment_emotion">
          <i
            className="far fa-smile-beam fa-2x"
            style={{ color: "#f8b828" }}
            aria-hidden
          ></i>
          <span style={{ fontWeight: "600" }}>기분/활동</span>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
