import { useEffect } from "react";
import MovieDetails from "../utils/vedioData";
import { useDispatch } from "react-redux";
import { addTrailorVedio } from "../utils/movieSlice";

const VedioBackground = ({ movieId }) => {
    

    const dispatch = useDispatch();
     const getMovieVedios = async () => {
          const data1 = MovieDetails;
          console.log(data1);

          const filterdata = data1.results.filter((vedio) => vedio.type === "Trailer");
          const trailer = filterdata.length ? filterdata[2] : data1.results[0];
          console.log(trailer);
          dispatch(addTrailorVedio(trailer));
        }

        useEffect(() => {
           getMovieVedios();
        }, [])
    
        return(
        <div>
           <iframe
           width="560"
           height="315"
           src={"https://www.youtube.com/embed/22w7z_lT6YM?si=VtWp3BHBC5526EGy"}
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin"
           allowFullScreen
           ></iframe>
        </div>
    )
}

export default VedioBackground;