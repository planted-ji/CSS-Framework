import React from "react";
import profileImg from "../images/profileimg.svg";
import sMoreVertical from "../images/smorevertical.svg";
import heart from "../images/heart.svg";
import messageCircle from "../images/messagecircle.svg";
import styled from "styled-components";

const PostTop = styled.section`
  display: flex;
  align-items: start;
`;

const Div = styled.div`
  margin: 20px 16px;
  width: calc(100% - 32px);
`;

const PostBottom = styled.section`
  margin: 16px 0px 22px 54px;
  font-size: 14px;
`;

const P = styled.p`
  margin: 16px 0 16px 0;
  line-height: 18px;
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 16px 0;
`;

const Count = styled.span`
  font-size: 12px;
  color: #767676;
  margin: 0px 16px 0px 6px;
`;

const Time = styled.time`
  font-size: 10px;
  color: #767676;
`;

const Post = () => {
  return (
    <article>
      <div className="line" />
      <h1 className="a11y-hidden">게시글</h1>
      <Div>
        <PostTop>
          <h2 className="a11y-hidden">작성자 정보</h2>
          <a href="#none">
            <img src={profileImg} alt="프로필 사진"></img>
          </a>
          <div className="user">
            <strong>애월읍 위니브 감귤농장</strong>
            <span>@weniv_Mandarin</span>
          </div>
          <button>
            <img src={sMoreVertical} alt="게시글 설정 더보기"></img>
          </button>
        </PostTop>
        <PostBottom>
          <h2 className="a11y-hidden">게시글 본문</h2>
          <P>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </P>
          <Reaction>
            <button>
              <img src={heart} alt="좋아요 버튼"></img>
            </button>
            <Count>58</Count>
            <button>
              <img src={messageCircle} alt="코멘트 버튼"></img>
            </button>
            <Count>12</Count>
          </Reaction>
          <Time datetime="2020-10-21">2020년 10월 21일</Time>
        </PostBottom>
      </Div>
    </article>
  );
};

export default Post;
