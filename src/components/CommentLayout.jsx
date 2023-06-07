import React from "react";
import profileImg from "../images/profileimg.svg";
import CommentUser from "./CommentUser";
import styled from "styled-components";

const CommentInput = styled.section`
  display: flex;
  align-items: center;
  margin: 13px 16px;
`;

const Line = styled.div`
  margin-top: 66px;
`;

const Input = styled.input`
  width: 254px;
  border: 0;
  margin: 0 16px 0 16px;
  ::placeholder {
    color: #c4c4c4;
  }
`;

const Button = styled.button`
  font-weight: 500;
  color: #c4c4c4;
`;

const Comment = () => {
  return (
    <article>
      <div className="line" />
      <section>
        <CommentUser />
        <Line className="line" />
        <CommentInput>
          <a href="#none">
            <img src={profileImg} alt="프로필 사진"></img>
          </a>
          <label className="a11y-hidden" for="comment">
            댓글 입력창
          </label>
          <Input
            type="text"
            id="comment"
            placeholder="댓글 입력하기..."
          ></Input>
          <Button type="submit">게시</Button>
        </CommentInput>
      </section>
    </article>
  );
};

export default Comment;
