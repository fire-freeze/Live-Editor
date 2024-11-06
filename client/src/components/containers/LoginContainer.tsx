/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const containerStyle = css`
  background-color: #080e17;
  border-radius: 15px;
  width: 25vw;
  height: 25em;
  border: 1px solid #444d58;
  min-width: 20em;
`;

const inputStyle = css`
  position: relative;
  background-color: #00000057;
  height: 1.25em;
  width: 17.5vw;
  min-width: 15em;
  outline: none;
  border: none;
  padding-left: 0.5em;
  color: whitesmoke;
  caret-color: #288adb;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  border-radius: 10px;
  line-height: 1.5;
  border: 1px solid #444d58;
  font-size: 15px;
  /* &::before {
    content: "\f0e0";
    position: relative;
    display: inline-block;
    font: normal normal normal 14px / 1;
    font-size: 15px;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  } */
  &::before {
    content: "AAA";
    color: red;
    font-size: 1em;
    /* position: relative; */
    height: 1em;
    width: 2em;
  }
`;

const titleStyle = css`
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 1.25rem;
  margin-top: 0.875em;
  padding-bottom: 1em;
  text-transform: uppercase;
`;

const submitContainerStyle = css`
  position: relative;
  width: 100%;
  height: 3em;
  padding-top: 1em;
  background-color: transparent;
`;
const submitButtonStyle = css`
  cursor: pointer;
  height: 2.5em;
  border-radius: 10px;
  color: #ebebeb;
  width: 15em;
  background-color: #238636;
  outline: none;
  border: 1px solid #858c96;
  transition: 0.375s ease;
  &:hover {
    background-color: #2ea81d;
  }
`;

const labelStyle = css`
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 450;
  text-align: left;
  color: white;
`;


const LoginContainer: React.FC = () => {
  return (
    <main className="center-div full-space align-column">
      <div className="login-container align-column" css={containerStyle}>
        <div css={titleStyle}>Sign in</div>
        <form action="">
          <div className="user-login align-column center-div" style={{ gap: ".75em" }}>
            <div className="align-column" style={{ borderRadius: "10px" }}>
              <label htmlFor="username" css={labelStyle}>
                Username or email address
              </label>
              <input type="text" id="username" css={inputStyle} spellCheck={false} />
            </div>
            <div style={{ borderRadius: "10px" }}>
              <label htmlFor="username" css={labelStyle}>
                Password
              </label>
              <input type="password" id="password" css={inputStyle} spellCheck={false} />
            </div>
            <div style={{ width: "100%", justifyContent: "flex-end", display: "flex" }}>
              <span className="common-href-link" style={{ whiteSpace: "nowrap", marginRight: "2.5em" }}>
                Forgot password?
              </span>
            </div>
          </div>
          <div className="login-submit center-div" css={submitContainerStyle}>
            <button type="submit" css={submitButtonStyle}>
              Sign in
            </button>
          </div>
        </form>
        <div className="center-div" style={{paddingTop: "1.25em", marginBottom: "1em"}}>
          <span className="common-href-link">Create an account</span>
        </div>
      </div>
    </main>
  );
};

export default LoginContainer;
