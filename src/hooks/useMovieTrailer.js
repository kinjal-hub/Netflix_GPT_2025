import { useEffect } from "react";
import MovieDetails from "../utils/vedioData";
import { useDispatch } from "react-redux";
import { addTrailerVedio } from "../utils/movieSlice";

const useMovieTrailer = () => {
    const dispatch = useDispatch();
      

      const getMovieVedios = async () => {
          const data1 = MovieDetails;
          console.log(data1);

          const filterdata = data1.results.filter((vedio) => vedio.type === "Trailer");
          const trailer = filterdata.length ? filterdata[2] : data1.results[0];
          console.log(trailer);
          dispatch(addTrailerVedio(trailer));
              
        }

        useEffect(() => {
           getMovieVedios();
        }, [])
}

export default useMovieTrailer;