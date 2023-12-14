import DestinationNav from "../components/DestinationNav"

const Destination = () => {
  return (
    <div className="relative h-full">
      {/* Background Image Mobile */}
      <div className='absolute inset-0 overflow-hidden md:hidden'>
        <img
          className='h-full w-full object-cover object-center'
          src='../../assets/destination/background-destination-mobile.jpg'
        />
      </div>

      <div className="relative z-10 pt-36 overflow-auto">
        <div className="w-10/12 mx-auto flex flex-col items-center">
          <h4 className="text-xl text-white tracking-widest font-barlow">
            <span className="text-[#979797] tracking-widest mr-5">01</span>
            PICK YOUR DESTINATION
          </h4>
          <div className="mt-8">
            <img src="../../assets/destination/image-moon.png"
              className="w-[170px] h-[170px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 w-10/12 mx-auto pb-20">
          <DestinationNav />
          <h1 className="text-[56px] text-white font-bellefair mt-4">MOON</h1>
          <p className="text-center text-tropicalBlue font-barlow tracking-wide leading-8 w-[327px] md:w-[444px] mx-auto">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          {/* Line */}
          <div className="w-[327px] h-[.3px] bg-[#979797] my-7"></div>

          <div className="text-white">
            <div className="text-center">
              <p className="text-base font-barlow">AVG. DISTANCE</p>
              <h3 className="font-bellefair text-[28px] mt-4">384,400 KM</h3>
            </div>
            <div className="text-center">
              <p className="text-base font-barlow">EST. TRAVEL TIME</p>
              <h3 className="font-bellefair text-[28px] mt-4">3 DAYS</h3>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Destination