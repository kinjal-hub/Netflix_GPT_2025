import { useSelector } from "react-redux";
import lang from "../utils/lanquageConstent";

const GptSearchBar = () => {
   const langKey = useSelector((store) => store.config.lang);

   return (
    <div className="pt-[10%] flex justify-center">
       <form classname="w-1/2 bg-black grid grid-cols-12">
       <input
       type="text"
       className="p-4 m-4 col-span-8"
       placeholder={lang[langKey].gptSerchPlaceholder}
       />
       <button className="col-span-4 m-4 py-2 px-4 bg-red-600 rounded-lg">
         {lang[langKey].search}
       </button>
       </form>
    </div>
   )
}

export default GptSearchBar;