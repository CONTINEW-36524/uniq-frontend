// AI 템플릿
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import axios from "axios";
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
    const data = props.data;

    console.log(data[0].category)
    data.map(index => console.log(index.category))

    useEffect((e) => {
        console.log('check');
        handleLeftClick(e);
    }, [goleft]);

    useEffect((e) => {
        console.log('check');
        handleRightClick(e);
    }, [goRight])

    const SliderRef = useRef(null);

    useEffect((e) => {
        SliderRef.current.scrollLeft = 0;
      
    }, [])

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
            {data.map((index)=><CardComponent img="https://yozm.wishket.com/media/news/1231/image017.png"
                                              Category={index.category}
                                              keyword={index.tag}
                                              title={index.title}
                                              />)}
            {/* <CardComponent
                img="https://yozm.wishket.com/media/news/1231/image017.png"
                Category="학교/교육"
                keyword="#퀴즈"
                title="강의 퀴즈"
            />
            <CardComponent
                img="https://img.freepik.com/premium-vector/blue-triangle-shaped-seamless-pattern-wallpaper-vector_53876-164505.jpg?w=2000"
                Category="행사"
                title="박람회 만족도조사"
                keyword="#행사 #만족도조사"
            />
            <CardComponent
                img="https://cdn.pixabay.com/photo/2017/03/25/18/06/color-2174065_960_720.png"
                Category="개인"
                title="파티 신청서"
                keyword="#약속"
            /> */}
        </StyledCardSlider>
    );
}
