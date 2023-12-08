const Home = () => {
  return (
    <div className='relative h-screen'>
      {/* Background Image Mobile */}
      <div className='absolute inset-0 overflow-hidden md:hidden'>
        <img
          className='h-full w-full object-cover object-center'
          src='../assets/home/background-home-mobile.jpg'
        />
      </div>

      {/* Background Image Tablet */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          className='hidden md:block h-full w-full object-cover object-center'
          src='../../assets/home/background-home-tablet.jpg'
        />
      </div>

      {/* Background Image Tablet */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          className='hidden lg:block h-full w-full object-cover object-center'
          src='../../assets/home/background-home-desktop.jpg'
        />
      </div>


      <div className='relative z-10 flex flex-col lg:flex-row pt-[160px] lg:pt-[295px] w-10/12 mx-auto lg:justify-between h-screen'>
        <div className="text-white text-center lg:text-left md:w-[450px] mx-auto lg:mx-0">
          <h5 className="mb-5 md:mb-0 text-lg md:text-xl lg:text-3xl font-barlow text-tropicalBlue tracking-widest">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="mb-3 md:mb-0 text-[80px] md:text-[150px] font-bellefair">SPACE</h1>
          <p className="text-base lg:text-lg text-tropicalBlue font-barlow tracking-wide leading-8 w-[327px] md:w-[444px] mx-auto">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <div className="mt-24 md:mt-10 lg:mt-0
            h-[150px] w-[150px] md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px]
             bg-white stroke-[#979797] rounded-full flex justify-center items-center self-center">
          <h3 className="text-[20px] md:text-[32px] font-bellefair">EXPLORE</h3>
        </div>
      </div>
    </div>
  )
}

export default Home