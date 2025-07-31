import { useEffect } from "react";
import Header from "./Header";
// import { API_OPTIONS } from "../utils/constants";
import listMovies from "../utils/mockdata";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
const dispatch = useDispatch();

const getNowPlayingMovies = async () => {

  try {
    const data = listMovies;
    console.log(data[0].results);
    dispatch(addNowPlayingMovies);
    
   
}
catch(error)
{
    console.log(error);
}
}
useEffect(() => {
    getNowPlayingMovies();
}, []);

return (
    <div>
        <Header />
    </div>
)
};

export default Browse;