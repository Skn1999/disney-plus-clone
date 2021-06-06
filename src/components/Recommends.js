import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Recommends({ title, listSelector }) {
  const list = useSelector(listSelector);
  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {(list ?? []).map((item) => (
          <Wrap key={item.id}>
            <Link to={"/detail/" + item.id}>
              <img src={item.cardImg} alt={item.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
    border: 1px solid rgba(255, 255, 255, 0.8);
    transition: all 250ms ease-in-out;
  }
  &:focus {
    outline-offset: 0px;
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
`;

export default Recommends;
