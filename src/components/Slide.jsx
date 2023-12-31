import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, styled } from "@mui/material";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Styledbanner = styled("img")`
  width: 100%;
  margin-top: 20px;
  
`;

const Title = styled(Typography)`
color:#FFFFFF;
text-align: center;
font-weight: 600;
font-size: 18;
`;

const Slide = ({ movies }) => {
  return (
    <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      slidesToSlide={1}
    >
      {movies.map((movies) => (
        <>
        <Styledbanner src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}alt="Banner"/>
        <Title>{movies.original_title}</Title>
        </>
      ))}
    </Carousel>
  );
};
export default Slide;
