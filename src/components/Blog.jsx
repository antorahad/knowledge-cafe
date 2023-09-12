export default function Blog ({blog}){
    const {cover_image, title, author_image, hashtags} = blog
    return(
        <>
        <div className="bg-slate-100 my-[20px] rounded-md">
            <img src={cover_image} className="w-[100%] object-contain rounded-t-md" />
            <div className="px-[20px] py-[20px]">
            <p>{title}</p>
            <div className="flex justify-between items-center">
                <img src={author_image} className="w-[40px] h-[40px] object-cover bg-white rounded-full" />
            </div>
            <span>{hashtags[0]}</span> <span>{hashtags[1]}</span>
            </div>
        </div>
        </>
    )
}