import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return(
    movies.nowPlayingMovies && (
    <div className=" bg-black">
        <div className=" -mt-52 pl -12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovie}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovie}/>
        
        </div>
    </div>
    )
);
};

export default SecondaryContainer;