import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Movie from "../utils/MovieData";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovie = () => {
    const dispatch = useDispatch();

const getPopularMovies = async () => {

  try {
    const data2 = Movie;
    console.log(data2[0].results);
    dispatch(addPopularMovies(data2[0].results))
}

catch(error)
{
    console.log(error);
}
}
useEffect(() => {
    getPopularMovies();
}, []);
}

export default usePopularMovie;