import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

const Home = () => {
  return (
    <>
        <div className="home">
            <div className="home_wrapper">
                <Sidebar/>
                <Topbar/>
            </div>
        </div>
    </>
  )
}

export default Home
