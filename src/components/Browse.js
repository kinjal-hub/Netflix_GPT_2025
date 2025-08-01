import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


// import { API_OPTIONS } from "../utils/constants";



const Browse = () => {
useNowPlayingMovie();



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