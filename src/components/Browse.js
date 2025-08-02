import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";


// import { API_OPTIONS } from "../utils/constants";



const Browse = () => {
useNowPlayingMovie();
usePopularMovie();
useTopRatedMovie();
useUpcomingMovie();




return (
    <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/*
           Main Container
            - Vedio background
            - Vedio title
           Secondary Container
            - MovieList * n
            - card * n 
       */}
    </div>
)
};

export default Browse;