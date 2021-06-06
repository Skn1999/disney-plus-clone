import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { db } from "../firebase";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);
  React.useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((d) => {
        if (d.exists) {
          setMovie({ ...d.data() });
        } else {
          console.warn("No doc with id: " + id + " found in firebase");
        }
      })
      .catch((err) => {
        console.error("Error getting document from firebase 🔥");
      });
  }, [id]);

  if (!movie) {
    return (
      <Container>
        <p>Fetcing Data</p>
      </Container>
    );
  }

  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} alt={movie.title} />
      </Background>
      <ImgTitle>
        <img src={movie.titleImg} alt={movie.title} />
      </ImgTitle>
      <ContentMeta>
        <Controls>
          <Player variant="contained">
            <img src="/images/play-icon-black.png" alt="" />
            <p>Play</p>
          </Player>
          <Player variant="outlined">
            <img src="/images/play-icon-white.png" alt="" />
            <p>Trailer</p>
          </Player>
        </Controls>
        <SubTitle>{movie.subTitle}</SubTitle>
        <Description>{movie.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);
`;

const Background = styled.div`
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
  position: fixed;
  opacity: 0.8;

  img {
    width: 100vw;
    height: 100vh;
    object-position: center;
    object-fit: cover;
    @media (max-width: 768px) {
      /* width: initial; */
    }
  }
`;

const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  min-height: 170px;
  width: 100%;
  margin: 0 auto;
  margin-top: 64px;
  padding-bottom: 24px;

  img {
    width: 50vw;
    max-width: 600px;
    min-width: 200px;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0;
  padding: 0 24px;
  height: 54px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background: ${(props) =>
    props.variant === "outlined" ? "rgba(0, 0, 0, 0.3)" : "rgb(249, 249, 249)"};
  border: ${(props) =>
    props.variant === "outlined" ? "1px solid rgb(249, 249, 249)" : "none"};
  color: ${(props) =>
    props.variant === "outlined" ? "rgb(249, 249, 249)" : "none"};

  img {
    width: 32px;
  }

  p {
    font-weight: 500;
    margin: 0;
    margin-top: 2px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
    margin: 0 10px 0 0;
    img {
      width: 24px;
    }
  }
`;

const SubTitle = styled.h3`
  margin: 0;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
