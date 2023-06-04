import React from "react";
import profileImg from "../images/profileimg.svg";
import sMoreVertical from "../images/smorevertical.svg";
import heart from "../images/heart.svg";
import messageCircle from "../images/messagecircle.svg";

function Post() {
  return (
    <section>
      <div>
        <img src={profileImg} alt="프로필 사진"></img>
        <div>
          <strong>애월읍 위니브 감귤농장</strong>
          <p>@weniv_Mandarin</p>
        </div>
        <img src={sMoreVertical} alt="게시글 설정 더보기"></img>
      </div>
      <p>
        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
        이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
        뛰노는 인생의 힘있다.
      </p>
      <div>
        <img src={heart} alt="좋아요 버튼">
          <span>58</span>
        </img>
        <img src={messageCircle} alt="코멘트 버튼">
          <span>12</span>
        </img>
      </div>
    </section>
  );
}
