import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 0.5rem; //카드 모서리 둥글게
  overflow: hidden;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  transition: 0.2s;

  /* 카드의 크기 */
  width: 240px;
  height: 220px;

  .card-image-wrapper {
    height: 110px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
    overflow: hidden;
  }

  &:hover {
    transform: translateY(-0.7%); // 위로 살짝 들리게
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

    .card-img {
      transition: transform 0.5s ease;
      height: 150px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
      transform: scale(1.25); // 이미지 확대 비율
    }
  }

  .card-img {
    display: block;
    width: 100%;
    height: 150px; // 높이를 고정해줘야 이미지 고유의 높이를 반영하지 않고 균등하게 됨
    object-fit: cover;
  }

  /* 이하 Category, title, keyword 등  */
  .card-content {
    padding: 1rem;
    overflow: hidden;

    /* Category */
    .card-header {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;

      /* 글자가 너무 길어질 경우 말줄임표로 대체 */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* title */
    .card-middle {
      margin-bottom: 0.5rem;
      /* 글자가 너무 길어질 경우 말줄임표로 대체 */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* keyword */
    .card-text {
      font-size: 1rem;
      line-height: 1.3;
      /* letter-spacing: 0.1rem; */

      /* 글자가 너무 길어질 경우 말줄임표로 대체 */
      /* overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; */
    }
  }
`;


function CardComponent({ img = "", Category = "", keyword = "", title = "" }) {
  return (
    
    <StyledCard className="card-item">
      <div className="card-image-wrapper">
        <img className="card-img" src={img}></img>
      </div>
      <div className="card-content">
        <h6 className="card-header">{Category}</h6>
        <h4 className="card-middle">{title}</h4>
        <p className="card-text">{keyword}</p>
      </div>
    </StyledCard>

  );
}

export default CardComponent;