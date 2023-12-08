import DestinationNav from "../components/DestinationNav"

const Destination = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image Mobile */}
      <div className='absolute inset-0 overflow-hidden md:hidden'>
        <img
          className='h-full w-full object-cover object-center'
          src='../../assets/destination/background-destination-mobile.jpg'
        />
      </div>

      <div className="h-screen relative z-10 pt-36">
        <DestinationNav />
      </div>

    </div>
  )
}

export default Destination