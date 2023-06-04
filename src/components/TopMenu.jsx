import React from "react";
import arrowLeft from "../images/arrowleft.svg";
import moreVertical from "../images/morevertical.svg";

function TopMenu() {
  return (
    <div>
      <img src={arrowLeft} alt="이전 페이지"></img>
      <img src={moreVertical} alt="더보기"></img>
    </div>
  );
}
