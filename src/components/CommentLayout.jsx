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
  const [commentText, setCommentText] = useState("");
  const [commentData, setCommentData] = useState(null);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const getCurrentTime = () => {
    const currentTime = new Date();
    const commentTime = currentTime;
    const timeDiff = (currentTime.getTime() - commentTime.getTime()) / 1000; // 초 단위로 시간 차이 계산

    if (timeDiff < 60) {
      return `${Math.floor(timeDiff)}초 전`;
    } else if (timeDiff < 3600) {
      return `${Math.floor(timeDiff / 60)}분 전`;
    } else if (timeDiff < 86400) {
      return `${Math.floor(timeDiff / 3600)}시간 전`;
    } else {
      const year = commentTime.getFullYear();
      const month = commentTime.getMonth() + 1;
      const day = commentTime.getDate();
      return `${year}년 ${month}월 ${day}일`;
    }
  };

  const handleCommentSubmit = () => {
    const requestBody = {
      comment: {
        content: commentText,
      },
    };

    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODQ4MGE2YjJjYjIwNTY2MzJlMGY2YiIsImV4cCI6MTY5MTU5MDIxMiwiaWF0IjoxNjg2NDA2MjEyfQ.zHlvHiR7BfvKX20P-A8UadFFN0COudQ-CirNGxFdewE",
      "Content-type": "application/json",
    };

    // 사용자 닉네임을 가져오는 API 호출
    axios
      .get("https://api.mandarin.weniv.co.kr/user/myinfo", { headers })
      .then((response) => {
        const userData = response.data.user;
        const img = userData.image;
        const name = userData.username;

        setName(name);
        setImg(img);
        setTime(getCurrentTime());

        // CommentUser 컴포넌트에 전달할 값 설정
        const commentData = {
          img: img,
          name: name,
          time: time,
          comment: commentText,
        };

        // 댓글 등록 API 호출
        axios
          .post(
            "https://api.mandarin.weniv.co.kr/post/:post_id/comments",
            requestBody,
            { headers }
          )
          .then((response) => {
            const commentData = response.data.comment;
            setCommentData(commentData);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <article>
      <div className="line" />
      <h2>게시글 댓글</h2>
      <section>
        <h3></h3>
        <CommentUser
          img={img}
          name={name}
          time={time}
          comment={commentData && commentData.content}
        />
        <div className="line" />
        <div>
          <h2>댓글 작성란</h2>
          <a href="#none">
            <img src={profileImg} alt="프로필 사진" />
          </a>
          <label htmlFor="comment">댓글 입력하기</label>
          <input
            type="text"
            id="comment"
            placeholder="댓글 입력하기..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit" onClick={handleCommentSubmit}>
            게시
          </button>
        </div>
      </section>
    </article>
  );
};

export default CommentLayout;
