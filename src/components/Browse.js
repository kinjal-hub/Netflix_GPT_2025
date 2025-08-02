import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";




// import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
const showGptSerch = useSelector((store) => store.gpt?.showGptSerch);

useNowPlayingMovie();
usePopularMovie();
useTopRatedMovie();
useUpcomingMovie();

return (
    <div>
        <Header />
        {showGptSerch ? (
            <GptSearch />
        ) : (
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
        )}
    </div>
)
};

export default Browse;