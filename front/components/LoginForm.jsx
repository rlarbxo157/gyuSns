import React, { useCallback, useEffect } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";

const LoginForm = () => {
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    dispatch(
      loginRequestAction({
        email,
        password,
      })
    );
  }, [email, password]);

  return (
    <Form
      onFinish={onSubmitForm}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="totalForm"
        style={{
          padding: "10px",
          margin: "0",
          display: "flex",
          width: "80%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <br />

        <div style={{ width: "100%" }}>
          <Input
            name="user-id"
            placeholder="이메일 입력해주세요"
            style={{
              width: "100%",
              height: "36px",
              backgroundColor: "#fafafa",
            }}
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div style={{ width: "100%" }}>
          {/* <label htmlFor="user-password">비밀번호</label> */}
          <br />
          <Input
            name="user-password"
            placeholder="비밀번호"
            style={{
              width: "100%",
              height: "36px",
              backgroundColor: "#fafafa",
            }}
            value={password}
            onChange={onChangePassword}
            type="password"
            required
          />
        </div>
        <br />
        <div style={{ marginTop: "10px", width: "100%" }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={logInLoading}
            style={{ width: "100%", height: "36px" }}
          >
            로그인
          </Button>
        </div>
        <br />
        <div
          className="K-1uj Z7p_S"
          style={{ margin: "10px 40px 18px", display: "flex" }}
        >
          <div
            className="s311c"
            style={{
              backgroundColor: "#dbdbdb",
              height: "1px",
              width: "100px",
              position: "relative",
              flexGrow: 1,
              flexShrink: 1,
              top: ".45em",
            }}
          ></div>
          <div
            className="_0tv-g"
            style={{
              color: "#8e8e8e",
              fontSize: "13px",
              margin: "0 18px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            OR
          </div>
          <div
            className="s311c"
            style={{
              backgroundColor: "#dbdbdb",
              height: "1px",
              width: "100px",
              position: "relative",
              flexGrow: 1,
              flexShrink: 1,
              top: ".45em",
            }}
          ></div>
        </div>
        <button
          className="sqdOP yWX7d y3zKF"
          type="button"
          style={{
            display: "inline",
            position: "relative",
            border: 0,
            backgroundColor: "white",
          }}
        >
          <i class="fab fa-facebook-square"></i>
          <span className="KPnG0" style={{ color: "#385185", fontWeight: 600 }}>
            Facebook으로 로그인
          </span>
        </button>
        <br />
        <div style={{ width: "100%" }}>
          <Link href="/signup">
            <a>
              <Button style={{ width: "100%", height: "36px" }}>
                회원가입
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
