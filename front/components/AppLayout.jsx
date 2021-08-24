import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Input, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
// import { useLayoutEffect } from 'react';

const AppLayout = ({ children, show }) => {
  const { me } = useSelector((state) => state.user);
  // const {mainPosts} = useSelector((state)=>state.post);

  // if(typeof window !== 'undefined'){
  //   const a = document.querySelector('.applayout');
  //   if(show){
  //     a.classList.add('over');
  //   }else{
  //     a.classList.remove('over');
  //   }
  // }

  return (
    <div
      className="applayout"
      style={{
        backgroundColor: "#eff2f5",
        width: "100%",
        // height: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="header"
        style={{
          height: "50px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          className="header_left"
          style={{ display: "flex", alignItems: "center" }}
        >
          <i
            className="fas fa-home fa-2x"
            aria-hidden
            style={{ color: "#1a77f2" }}
          ></i>
          <input
            type="text"
            className="user_input"
            placeholder="검색"
            style={{
              position: "relative",
              left: "10px",
              width: "240px",
              borderRadius: "20px",
              height: "35px",
              outline: "none",
            }}
          />
          <i
            aria-hidden
            className="fas fa-search"
            style={{ zIndex: 3, position: "relative", right: "20px" }}
          ></i>
        </div>
        <div className="header_middle">
          <div className="home_link">
            {/* <i
              aria-hidden
              className="fas fa-home fa-2x"
              style={{ width: "100%", height: "100%", color: "#1a77f2" }}
            ></i> */}
          </div>
        </div>
        <div className="header_right" style={{ display: "flex" }}>
          <div
            className="user_profile"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
              src="https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p50x50/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BOw0nnArsGsAX-bGGGQ&_nc_ht=scontent.ficn3-2.fna&oh=1e73ccedbcaebec3c06a8cacdf94601d&oe=6144DDA2"
            />
            <span style={{ fontWeight: 600 }}>{me.nickname}</span>
          </div>
          <div
            className="unRead_message"
            style={{ position: "relative", left: "10px" }}
          >
            <div
              className="unRead_message_icon"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#e3e6ea",
                position: "relative",
              }}
            >
              <svg
                viewBox="0 0 28 28"
                alt=""
                className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
                height="18px"
                width="18px"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  margin: "-9px 0px 0px -9px",
                }}
              >
                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Row gutter={8} style={{ position: "relative" }}>
        <Col xs={24} md={6}>
          <div
            className="userInfo_section"
            style={{
              position: "relative",
              top: "40px",
              padding: "0 0 0 20px",
            }}
          >
            <div className="userProfile">
              <Link href={`/profile`}>
                <a>
                  <img
                    style={{
                      borderRadius: "34px",
                      width: "40px",
                      height: "40px",
                      marginRight: "10px",
                    }}
                    src="https://scontent.ficn3-2.fna.fbcdn.net/v/t1.30497-1/cp0/p40x40/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=1rdHoPUFiSAAX9dHe3q&tn=BKIHErudAlna7iLo&_nc_ht=scontent.ficn3-2.fna&oh=d0831d5eb00febe5c25774f8980d4636&oe=614557A3"
                  />
                  <span style={{ fontWeight: "600", fontSize: "13px" }}>
                    {me.nickname}
                  </span>
                </a>
              </Link>
            </div>
            <br />

            <div className="friend">
              <img
                style={{ width: "40px", height: "40px", marginRight: "10px" }}
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
              />
              <span style={{ fontWeight: "600", fontSize: "13px" }}>친구</span>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12} style={{ position: "relative", top: "20px" }}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* 여기다가는 뭐다른걸 넣어놓고 */}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
