const Nav = () => {
    return (
        <>
            <nav className='flex justify-between mt-10 items-center fixed z-20 w-full'>
                {/* logo */}
                <div className="ml-14">
                    <img src='../../assets/shared/logo.svg' />
                </div>

                {/* nav line */}
                <div className="h-[0.5px] w-96 bg-gray-700 absolute left-48 z-30">

                </div>
                {/* nav items */}
                <ul className='
                    flex items-center space-x-12
                    text-white text-lg font-barlow px-56
                    bg-[#979797] bg-opacity-10 backdrop-blur
                '>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold mr-2">00</span> HOME</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold mr-2">01</span> DESTINATION</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold mr-2">02</span> CREW</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold mr-2">03</span> TECHNOLOGY</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav