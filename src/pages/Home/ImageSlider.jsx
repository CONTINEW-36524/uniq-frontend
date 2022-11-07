import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sampleImg1 from '../../assets/banner13.png';
import sampleImg2 from '../../assets/banner13.png';
import sampleImg3 from '../../assets/banner13.png';
import './BannerSlider.css'
const Container = styled.div`
    overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
        outline: none;
    }
`;

const ImageContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

const Image = styled.img`
    max-width:95%;
    max-height:500px;
`;

const imgUrl = require('../../assets/banner3.png');

const items = [
    { id: 1, url: sampleImg3 },
    { id: 4, url: sampleImg2 },
    { id: 2, url: sampleImg1 },
    { id: 3, url: sampleImg3 },
    { id: 5, url: sampleImg2 },
    { id: 6, url: sampleImg1 },
];


export default class SimpleSlider extends Component {
    
    render() {
        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            //centerMode: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,

            
    };
    return (
        <Container>
            <StyledSlider {...settings}>
                {items.map(item => {
                    return (
                        <div key={item.id}>
                            <ImageContainer>
                                <Image class="sliderImage" src={item.url} />
                            </ImageContainer>
                        </div>
                    );
                })}
            </StyledSlider>
        </Container>
    );
    }
}