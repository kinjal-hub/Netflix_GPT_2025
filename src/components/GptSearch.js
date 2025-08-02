import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSerchBar";

const GptSearch = () => {
   return (
    <div>
        <div className="absolute -z-10">
           <img src={BG_URL} alt="back-img" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
   )
}

export default GptSearch;