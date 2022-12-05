import React, {Component} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sampleImg1 from '../../assets/banner9.png';
import sampleImg2 from '../../assets/banner10.png';
import sampleImg3 from '../../assets/banner12.png';
import './ImageSlider.css'
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
    overflow:hidden;
`;

const Image = styled.img`
    width:1200px;
`;


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
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
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
                                <Image className="sliderImage" src={item.url} />
                            </ImageContainer>
                        </div>
                    );
                })}
            </StyledSlider>
        </Container>
    );
    }
}