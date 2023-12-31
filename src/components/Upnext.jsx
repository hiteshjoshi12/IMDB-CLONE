import { Box,Typography,styled } from "@mui/material";

const Component = styled(Box)`
width: 40%;
display: flex;
flex-direction: column;
align:item: baseline;
padding-left: 20px;
&>p{
    color: #F5C518;
    font-weight: 600;
    font-size: 18;
    margin:bottom: 10px;
}
`;

const Poster = styled('img')({
    width:88
});
const Wrapper = styled(Box)`
color:#FFFFFF;
display: flex;
&>p{
    margin-left: 20px;
}
`;


const Upnext = ({movies})=>{
    return(
        <Component>
            <Typography>Up Next</Typography>
            {
                movies.splice(0,3).map(movies=>(
                    <Wrapper>
                        <Poster src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}alt="Banner"/>
                        <Typography>{movies.original_title}</Typography>
                    </Wrapper>
                ))

            }
        </Component>
    )
}
export default Upnext;