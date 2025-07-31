const VedioTitle = ({title,overview}) => {
    return(
        <div className="pt-36 px-12">
            <h1 className="font-bold text-5xl">{title}</h1>
            <p className="py-6 text-lg w-1/2">{overview}</p>
            <div>
                <button className="bg-black text-white p-2 px-12 text-2xl rounded-lg">Play ▶</button>
                <button className="mx-3 bg-gray-500 text-white p-2 px-12 text-2xl rounded-lg">More info</button>
            </div>
        </div>
    )
}

export default VedioTitle;