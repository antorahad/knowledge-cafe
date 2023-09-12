import profile from '../assets/young-bearded-man-with-striped-shirt.jpg'
export default function Header () {
    return(
        <>
            <header className="border-b-2 container mx-auto py-[25px]">
                <nav className="flex items-center justify-between">
                    <h1 className="text-[25px] font-[700]">Knowledge Cafe</h1>
                    <img src={profile} className="w-[30px] h-[30px] object-cover rounded-full" />
                </nav>
            </header>
        </>
    )
}