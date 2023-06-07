import React from "react";
import arrowLeft from "../images/arrowleft.svg";
import moreVertical from "../images/morevertical.svg";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-left: 12px;
  margin-right: 16px;
  width: calc(100% - 28px);
`;

const TopMenu = () => {
  return (
    <Header>
      <button>
        <a href="#none">
          <img src={arrowLeft} alt="이전 페이지"></img>
        </a>
      </button>
      <button>
        <a href="#none">
          <img src={moreVertical} alt="더보기"></img>
        </a>
      </button>
    </Header>
  );
};

export default TopMenu;
