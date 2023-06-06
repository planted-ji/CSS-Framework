import React from "react";
import profile1 from "../images/profile1.svg";
import moreVertical from "../images/morevertical.svg";
import styled from "styled-components";

const Comment2 = () => {
  return (
    <article>
      <div>
        <img src={profile1} alt="프로필 사진"></img>
        <div>
          <strong>서귀포시 무슨 농장</strong>
          <p>· 5분 전</p>
        </div>
        <img src={moreVertical} alt="코멘트 설정 더보기"></img>
      </div>
      <p>게시글 답글 ~~ !! 최고최고</p>
    </article>
  );
};

export default Comment2;
