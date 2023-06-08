import React from "react";
import profile1 from "../images/profile1.svg";
import moreVertical from "../images/morevertical.svg";
import styled from "styled-components";

const UserTop = styled.section`
  display: flex;
  align-items: start;
  margin: 20px 16px;
  width: calc(100% - 32px);
`;

const NameTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Strong = styled.strong`
  display: inline-block;
  margin-right: 6px;
`;

const Span = styled.span`
  margin-right: 139px;
`;

const Comment = styled.p`
  margin-bottom: 16px;
  color: #333333;
`;

const CommentUser = ({ commentData }) => {
  return (
    <UserTop>
      <h3 className="a11y-hidden">작성자 정보</h3>
      <a href="#none">
        <img src={profile1} alt="프로필 사진"></img>
      </a>
      <div className="user">
        <NameTop>
          <Strong>서귀포시 무슨 농장</Strong>
          <Span>· 5분 전</Span>
          <button>
            <img src={moreVertical} alt="코멘트 설정 더보기"></img>
          </button>
        </NameTop>
        <Comment>{commentData && commentData.content}</Comment>
      </div>
    </UserTop>
  );
};

export default CommentUser;
