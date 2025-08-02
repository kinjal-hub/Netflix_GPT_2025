import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopMovie from "../utils/topRateddata";
import { addTopRatedMovie } from "../utils/movieSlice";



const useTopRatedMovie = () => {
    const dispatch = useDispatch();

const getTopRatedMovies = async () => {

  try {
    const data3 = TopMovie;
    console.log(data3[0].results);
    dispatch(addTopRatedMovie(data3[0].results))
}

catch(error)
{
    console.log(error);
}
}
useEffect(() => {
    getTopRatedMovies();
}, []);
}

export default useTopRatedMovie;