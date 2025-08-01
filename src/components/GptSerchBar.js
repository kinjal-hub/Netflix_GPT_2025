import lang from "../utils/lanquageConstent";

const GptSearchBar = () => {
   return (
    <div className="pt-[10%] flex justify-center">
       <form classname="w-1/2 bg-black grid grid-cols-12">
       <input
       type="text"
       className="p-4 m-4 col-span-8"
       placeholder={lang.hindi.gptSerchPlaceholder}
       />
       <button className="col-span-4 m-4 py-2 px-4 bg-red-600 rounded-lg">
         {lang.hindi.search}
       </button>
       </form>
    </div>
   )
}

export default GptSearchBar;