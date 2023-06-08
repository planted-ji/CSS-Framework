import React, { useState } from "react";
import axios from "axios";
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

const CommentLayout = () => {
  // 댓글을 입력하지 않은 상태
  const [commentText, setCommentText] = useState("");
  // 댓글 데이터가 없는 상태
  const [commentData, setCommentData] = useState(null);

  const handleCommentSubmit = () => {
    const requestBody = {
      comment: {
        content: commentText,
      },
    };

    const headers = {
      Authorization: "Bearer {token}",
      "Content-type": "application/json",
    };

    axios
      .post("/post/:post_id/comments", requestBody, { headers })
      .then((response) => {
        const commentData = response.data.comment;
        setCommentData(commentData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <article>
      <div className="line" />
      <h2 className="a11y-hidden">게시글 댓글</h2>
      <section>
        <h3></h3>
        <CommentUser commentData={commentData} />
        <Line className="line" />
        <CommentInput>
          <h2 className="a11y-hidden">댓글 작성란</h2>
          <a href="#none">
            <img src={profileImg} alt="프로필 사진" />
          </a>
          <label className="a11y-hidden" htmlFor="comment">
            댓글 입력하기
          </label>
          <Input
            type="text"
            id="comment"
            placeholder="댓글 입력하기..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button type="submit" onClick={handleCommentSubmit}>
            게시
          </Button>
        </CommentInput>
      </section>
    </article>
  );
};

export default CommentLayout;
