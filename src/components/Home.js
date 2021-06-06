import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserName } from "../features/user/userSlice";
import ImageSlider from "./ImageSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import { db } from "../firebase";
import {
  selectNewDisney,
  selectOriginals,
  selectRecommend,
  selectTrending,
  setMovies,
} from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  React.useEffect(() => {
    let recommendMoviesRef = [];
    let newDisneyMoviesRef = [];
    let originalMoviesRef = [];
    let trendingMoviesRef = [];
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((d) => {
        switch (d.data().type) {
          case "recommend":
            recommendMoviesRef = [
              ...recommendMoviesRef,
              { id: d.id, ...d.data() },
            ];
            break;
          case "original":
            originalMoviesRef = [
              ...originalMoviesRef,
              { id: d.id, ...d.data() },
            ];
            break;
          case "trending":
            trendingMoviesRef = [
              ...trendingMoviesRef,
              { id: d.id, ...d.data() },
            ];
            break;
          case "new":
            newDisneyMoviesRef = [
              ...newDisneyMoviesRef,
              { id: d.id, ...d.data() },
            ];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommendMoviesRef,
          newDisney: newDisneyMoviesRef,
          originals: originalMoviesRef,
          trending: trendingMoviesRef,
        })
      );
    });
  }, [dispatch, userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends title="Recommended For You" listSelector={selectRecommend} />
      <Recommends title="New to Disney+" listSelector={selectNewDisney} />
      <Recommends title="Originals" listSelector={selectOriginals} />
      <Recommends title="Trending" listSelector={selectTrending} />
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
