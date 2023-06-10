import React, { useState } from "react";
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

const CommentUser = (props) => {
  return (
    <div>
      <img src={props.img}></img>
      <div className="user">
        <div>
          <strong>{props.name}</strong>
          <span>· {props.time}</span>
          <button>
            <img src={moreVertical} alt="코멘트 설정 더보기"></img>
          </button>
        </div>
        <div>{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentUser;
