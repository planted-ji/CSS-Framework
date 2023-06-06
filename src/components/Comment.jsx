import React from "react";
import profileImg from "../images/profileimg.svg";
import Comment2 from "./Comment2";

const Comment = () => {
  return (
    <article>
      <hr aria-label="코멘트 시작"></hr>
      <section>
        <Comment2 />
        <img src={profileImg} alt="프로필 사진"></img>
        <label for="comment">댓글 입력창</label>
        <input type="text" id="comment" placeholder="댓글 입력하기..."></input>
        <button type="submit">게시</button>
      </section>
    </article>
  );
};

export default Comment;
