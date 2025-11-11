
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'
import OpenItems from '../components/OpenItems'
import OngoingPools from '../components/OngoingPools'
import LiveStats from '../components/LiveStats'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='container-fluid'>
        <Navbar/>
        <div className='d-flex flex-column gap-3'>
          <HeroSection/>
          <Category/>
          <OpenItems/>
          <OngoingPools/>
          <LiveStats/>
          <Footer/>
        </div>
    </div>
  )
}

export default HomePage