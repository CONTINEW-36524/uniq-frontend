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
        img="https://unblast.com/wp-content/uploads/2020/04/Geometric-Line-Patterns.jpg"
        Category="비즈니스"
        title="특강 만족도조사"
        keyword="#만족도조사"
      />
      <CardComponent
        img="https://yozm.wishket.com/media/news/1231/image017.png"
        Category="학교/교육"
        title="강의 퀴즈"
        keyword="#퀴즈"
      />
      <CardComponent
        img="https://img.freepik.com/free-vector/wavy-smooth-lines-pattern-background_1017-14204.jpg?w=360"
        Category="학교/교육"
        title="강의실 대여 신청"
        keyword="#대여 #신청서"
      />
      <CardComponent
        img="https://koenig-media.raywenderlich.com/uploads/2020/08/BlocPattern-feature.png"
        Category="개인"
        title="약속 정하기"
        keyword="#약속 "
      />
      <CardComponent
        img="https://blog.spoongraphics.co.uk/wp-content/uploads/2021/12/post-thumbnail-1.jpg"
        Category="대외활동/서포터즈"
        title="투어 신청서"
        keyword="#신청서"
      />
      <CardComponent
        img="https://www.thespruce.com/thmb/2Q9yUTUOieEveT1VGvDAo73SQHc=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Basic-patterns-for-bricks-and-pavers-4076491-Herringbone-2348c40d49be4e94b95523eaf9b73043.png"
        Category="모집/공고"
        title="아르바이트 공고"
        keyword="#아르바이트 #이력서"
      />
        
    </StyledCardSlider>
  );
}
