import RowGlobal from '../../components/rowGlobal/RowGlobal'
import StatistiqueChart from '../../components/statistiqueChart/StatistiqueChart'
import StatistiqueRow from '../../components/statistiqueRow/StatistiqueRow'
import './home.scss'

const Home = () => {
  return (
    <>
        <div className="home">
            <div className="home__wrapper">
              <div className="home__wrapper__row">
                <StatistiqueRow/>
                <div className="home_bottom">
                    <div className="home_bottom__left">
                      <StatistiqueChart/>
                    </div>
                    <div className="home_bottom__right">
                      <RowGlobal/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Home
