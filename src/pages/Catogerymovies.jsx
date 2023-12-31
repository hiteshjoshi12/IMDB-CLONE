import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import MoviesList from "../components/Movieslist";
import { Box, Typography, styled, Divider } from "@mui/material";
import { categorymovies } from "../services/Api";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  moviestype,
} from "../constants/constant";
import Carousel from "react-multi-carousel";

import { useLocation } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Styledbanner = styled("img")({
  height: 450,
  width: "100%",
});

const Component = styled(Box)`
  width: 80%;
  margin: auto;
`;
const Container = styled(Box)`
    background: #F5F5F5;
    text-align: left;
    padding: 10px;
`



const Catogerymovies = () => {
  const [movies, setmovie] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const getdata = async (API_URL) => {
      let response = await categorymovies(API_URL);
      setmovie(response.results);
    };

    let API_URL;
    if (search.includes("popular")) 
    {
      API_URL = POPULAR_API_URL;
    } 
    else if (search.includes("upcoming")) 
    {
      API_URL = UPCOMING_API_URL;
    } 
    else if (search.includes("toprated")) 
    {
      API_URL = TOPRATED_API_URL;
    }

    getdata(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <Component>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          slidesToSlide={1}
        >
          {movies.map((movies) => (
            <>
              <Styledbanner
                src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}alt="Banner"/>
            </>
          ))}
        </Carousel>
        <Container>
          <Typography variant="h6">IMDb CHARTS</Typography>
          <Typography variant="h4">IMDb {moviestype[search.split("=")[1]]} Movies</Typography>
          <Typography style={{fontSize:12,margin:5}}>IMDb TOP {movies.length} as rated by regular IMDb voters.</Typography>
          <Divider/>
          <MoviesList movies ={movies}/>
        </Container>
      </Component>
    </>
  );
};
export default Catogerymovies;
