import React from "react";
import profileImg from "../images/profileimg.svg";
import sMoreVertical from "../images/smorevertical.svg";
import heart from "../images/heart.svg";
import messageCircle from "../images/messagecircle.svg";
import styled from "styled-components";

const Profile = styled.div`
  display: flex;
`;

const Name = styled.div`
  display: block;
  margin-left: 12px;
`;

const Article = styled.article`
  margin: 0 16px 0 16px;
`;

const P = styled.p`
  margin: 16px 0 16px 0;
`;

const Reaction = styled.div`
  margin: 16px 0 16px 0;
`;

const Date = styled.div`
  margin-bottom: 24px;
`;

const Post = () => {
  return (
    <section>
      <hr></hr>
      <Article>
        <Profile>
          <img src={profileImg} alt="프로필 사진"></img>
          <Name>
            <strong>애월읍 위니브 감귤농장</strong>
            <p>@weniv_Mandarin</p>
          </Name>
          <img src={sMoreVertical} alt="게시글 설정 더보기"></img>
        </Profile>
        <P>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </P>
        <Reaction>
          <img src={heart} alt="좋아요 버튼"></img>
          <span>58</span>
          <img src={messageCircle} alt="코멘트 버튼"></img>
          <span>12</span>
        </Reaction>
        <Date>2020년 10월 21일</Date>
      </Article>
    </section>
  );
};

export default Post;
