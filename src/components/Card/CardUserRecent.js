// 유저 최근 설문지
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
    const data = props.data;
    
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

            <CardComponent
                img="https://png.pngtree.com/element_our/png/20180902/chevron-herringbone-seamless-pattern-with-black-and-white-colors-vector-png_75145.jpg"
                Category="비즈니스"
                title="단체 주문 신청서"
                keyword="#쇼핑몰 #주문서"
            />
            <CardComponent
                img="https://img.freepik.com/premium-vector/blue-triangle-shaped-seamless-pattern-wallpaper-vector_53876-164505.jpg?w=2000"
                Category="행사"
                title="박람회 만족도조사"
                keyword="#행사 #만족도조사"
            />
            <CardComponent
                img="https://img.freepik.com/free-vector/white-pattern-background-abstract-geometric-in-simple-design-vector_53876-156384.jpg?w=360"
                Category="대외활동/서포터즈"
                title="활동 보고서 양식"
                keyword="#간단보고서"
            />
        </StyledCardSlider>
    );
}
