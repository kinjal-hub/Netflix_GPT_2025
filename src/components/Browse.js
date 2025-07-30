import { useEffect } from "react";
import Header from "./Header";
// import { API_OPTIONS } from "../utils/constants";
import listMovies from "../utils/mockdata";

const Browse = () => {


const getNowPlayingMovies = async () => {

  try {
    const data = await fetch(listMovies?.results);
    console.log(data);
    const json = await data.json();
    console.log(json);
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