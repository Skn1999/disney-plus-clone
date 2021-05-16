import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

export const SLIDER_IMAGES = [
  { id: 0, src: "/images/slider-badging.jpg" },
  { id: 1, src: "/images/slider-scale.jpg" },
  { id: 2, src: "/images/slider-badag.jpg" },
  { id: 3, src: "/images/slider-scales.jpg" },
];

function ImageSlider() {
  return (
    <div>
      <Carousel
        dots={true}
        slidesToShow={1}
        infinite
        speed={500}
        slidesToScroll={1}
        autoplay
      >
        {SLIDER_IMAGES.map((item) => (
          <Wrap key={item.id}>
            <a href={item.url}>
              <img src={item.src} alt="" />
            </a>
          </Wrap>
        ))}
      </Carousel>
    </div>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & button {
    opacity: 0;
    height: 100%;
    z-index: 1;
    width: 5vw;

    &:hover {
      opacity: 1;
      transition: opacity 200ms ease-in-out 0s;
      will-change: opacity;
    }
  }

  & ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  & li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  & a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 250px;
      border-radius: 4px;
    }

    &:hover {
      padding: 0;
      transition-duration: 300ms;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

export default ImageSlider;
