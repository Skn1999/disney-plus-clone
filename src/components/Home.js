import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends title="Recommended For You" />
      <Recommends title="New to Disney+" />
      <Recommends title="Originals" />
      <Recommends title="Trending" />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  top: 72px;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);
  &::after {
    background: url(/images/home-background.png) center center / cover no-repeat
      fixed;
    position: absolute;
    content: "";
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
