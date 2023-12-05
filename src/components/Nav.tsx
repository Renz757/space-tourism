const Nav = () => {
    return (
        <>
            <nav className='flex justify-between mt-10 items-center relative'>
                <div className="ml-14">
                    <img src='../../assets/shared/logo.svg' />
                </div>
                <div className="h-[0.5px] w-96 bg-white absolute left-48">

                </div>
                <ul className='
                    flex items-center space-x-8
                    text-white text-lg font-barlow px-64 py-8
                    bg-tropicalBlue bg-opacity-5
                '>
                    <li><span className="font-barlow font-bold">00</span> CREW</li>
                    <li><span className="font-barlow font-bold">01</span> HOME</li>
                    <li><span className="font-barlow font-bold">02</span> DESTINATION</li>
                    <li><span className="font-barlow font-bold">03</span> TECHNOLOGY</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav