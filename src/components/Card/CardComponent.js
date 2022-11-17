import React, {useState} from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 0.5rem; //카드 모서리 둥글게
  overflow: hidden;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  background-color : white;
  cursor: pointer;
  transition: 0.2s;
  font-family: 'SBAggroB';

  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
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
    .title-div {
      display: inline-flex; 
    }
    .heart-checked {
      transition: 0.2s;
    }

    .card-middle {
      margin-bottom: 0.5rem;
      /* 글자가 너무 길어질 경우 말줄임표로 대체 */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 170px;
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
}
`;


function CardComponent({ img = "", Category = "", keyword = "", title = "" }) {
  const [heartText, setheartText] = useState("🤍");
  const [heartOn, setheartOn] = useState(false);
  const [heartCount, setheartCount] = useState(0);

  const heartChange = () => {
    if (heartOn === false) {
      console.log('false')
      setheartText('❤️')
      setheartOn(true)
      setheartCount(heartCount+1);
      
    } else if (heartOn === true) {
      console.log('true 입니당')
      setheartText('🤍')
      setheartOn(false)
      setheartCount(heartCount-1);
    }
  }

  return (
    
    <StyledCard className="card-item">
      <div className="card-image-wrapper">
        <img className="card-img" src={img}></img>
      </div>
      <div className="card-content">
        <h6 className="card-header">{Category}</h6>
        <div className="title-div"> 
          <h4 className="card-middle">{title}</h4> 
      
          <h6 className={`${heartOn ? "heart-checked" : null}`}
            onClick={()=>heartChange()}>{heartText}</h6>
          <span>{heartCount}</span>
        </div>
        <p className="card-text">{keyword}</p>
      </div>
    </StyledCard>

  );
}

export default CardComponent;