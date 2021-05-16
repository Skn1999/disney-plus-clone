import React from "react";
import styled from "styled-components";

const VIEWERS = [
  { video: "/videos/disney.mp4", img: "/images/viewers-disney.png" },
  { video: "/videos/pixar.mp4", img: "/images/viewers-pixar.png" },
  { video: "/videos/marvel.mp4", img: "/images/viewers-marvel.png" },
  { video: "/videos/star-wars.mp4", img: "/images/viewers-starwars.png" },
  { video: "/videos/national.mp4", img: "/images/viewers-national.png" },
];

function Viewers() {
  return (
    <Container>
      {VIEWERS.map((item, index) => (
        <Wrap tabIndex={index} key={index}>
          <img src={item.img} alt="" />
          <video autoPlay loop playsInline>
            <source src={item.video} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  position: relative;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  border: 1px solid rgba(249, 249, 249, 0.1);
  outline-offset: 12px;
  &:hover {
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }

  &:focus {
    outline-offset: 0px;

    video {
      opacity: 1;
    }
  }

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    transition: opacity 250ms ease-in-out 0s;
    z-index: 1;
    object-fit: cover;
  }

  & video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 250ms ease-in 0s;
    will-change: opacity;
  }
`;

export default Viewers;
