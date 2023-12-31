import { useEffect, useState } from "react";

//components
import Header from "../components/common/Header";
import Banner from "../components/Banner";
import Upnext from "../components/Upnext";
import Slide from "../components/Slide";

import { categorymovies } from "../services/Api";
import { NOWPLAYING_API_URL } from "../constants/constant";
import { Box, styled } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Component = styled(Box)`
  padding: 0 115px ;
`;

const Home = (props) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      let response = await categorymovies(NOWPLAYING_API_URL);
      setmovies(response.results);
    };
    getdata();
  }, []);

  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <Upnext movies={movies} />
        </Wrapper>
        <Slide movies={movies}/>
      </Component>
    </>
  );
};
export default Home;
