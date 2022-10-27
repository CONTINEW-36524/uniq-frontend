// 인기있는 UNIQ 템플릿
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";

const StyledCardSlider = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 20px;
  overflow-x: auto ; 
  scroll-behavior: smooth; // 부드럽게 움직이게 하려고

  .card-item {
    flex-shrink: 0; 
    margin: 0 10px 0 0; // 각 아이템간의 간격
  }

  /* 스크롤바 속성 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default function CardSlider2(props) {

  const goleft = props.goleft;
  const goRight = props.goRight;

  useEffect((e)=> {
    console.log('check');
    handleLeftClick(e);
  },[goleft]);
    
  useEffect((e)=> {
    console.log('check');
    handleRightClick(e);
  },[goRight])

  const SliderRef = useRef(null);

  useEffect((e) => {
    SliderRef.current.scrollLeft = 0;
  },[])

  const handleLeftClick = (e) => {
    console.log(e);
    console.log(SliderRef.current.scrollLeft); // 현재 스크롤의 왼쪽 좌표를 얻음. scrollRight는 없음
    SliderRef.current.scrollLeft -= 300; // 이 방식으로 움직이고 , 부드러운 움직임은 scroll-behavior로.
    SliderRef.current.scroll({ left: -50, behavior: "smooth" });
  };
  
  const handleRightClick = (e) => {
    SliderRef.current.scrollLeft += 300;
    // SliderRef.current.scroll({ left: -50, behavior: "smooth" });
  };



  return (
    <StyledCardSlider ref={SliderRef}>

      <CardComponent
        img="https://img.freepik.com/free-photo/paper-note-frame-with-brown-memphis-pattern-background_53876-119795.jpg?w=1380&t=st=1666794435~exp=1666795035~hmac=c65eb8af8eff8cf7f46bd81d5eb8637be5b6de271b6178945560089d978065ba"
        Category="AI"
        title="AI추천 기본"
        keyword="#AI"
      />
      <CardComponent
        img="https://img.freepik.com/free-vector/nice-photo-frames-abstract-background_1017-31688.jpg?w=826&t=st=1666795017~exp=1666795617~hmac=eac9aded6d2e332ff6d9c6b1f137dc011d06521d67dff8c737267df6ed51c4ea"
        Category="AI"
        title="AI추천 기본2"
        keyword="#AI"
      />
        
    </StyledCardSlider>
  );
}
