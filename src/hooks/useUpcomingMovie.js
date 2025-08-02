import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import UpcomingMovies from "../utils/data";




const useUpcomingMovie = () => {
    const dispatch = useDispatch();

const getUpcomingMovies = async () => {

  try {
    const data4 = UpcomingMovies;
    console.log(data4[0].results);
    dispatch(addUpcomingMovie(data4[0].results))
}

catch(error)
{
    console.log(error);
}
}
useEffect(() => {
    getUpcomingMovies();
}, []);
}

export default useUpcomingMovie;