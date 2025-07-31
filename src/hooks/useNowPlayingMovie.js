import { useEffect } from "react";
import { useDispatch } from "react-redux";
import listMovies from "../utils/mockdata";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
    const dispatch = useDispatch();

const getNowPlayingMovies = async () => {

  try {
    const data = listMovies;
    console.log(data[0].results);
    dispatch(addNowPlayingMovies(data[0].results))
}

catch(error)
{
    console.log(error);
}
}
useEffect(() => {
    getNowPlayingMovies();
}, []);
}

export default useNowPlayingMovie;