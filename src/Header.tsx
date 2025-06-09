function Header(){
    return(
    <div className="sticky top-0 z-10">
        <nav>
            <span className="inline-grid grid-cols-4 w-full justify-center, bg-gray-700">
                <span className="border-r-4 border-b-8 border-black text-center"><p className="text-4xl">About Me</p></span>
                <span className="border-x-4 border-b-8 border-black text-center"><p className="text-4xl">Education</p></span>
                <span className="border-x-4 border-b-8 border-black text-center"><p className="text-4xl">Projects</p></span> 
                <span className="border-l-4 border-b-8 border-black text-center"><p className="text-4xl">Contact Me</p></span>
            </span>
        </nav>
    </div>
        );
}

export default Header