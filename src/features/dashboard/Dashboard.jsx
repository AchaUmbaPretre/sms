import ChartPie from '../../shared/ui/chartPie/ChartPie';
import RowGlobal from '../../shared/ui/rowGlobal/RowGlobal';
import StatistiqueChart from '../../shared/ui/statistiqueChart/StatistiqueChart';
import StatistiqueRow from '../../shared/ui/statistiqueRow/StatistiqueRow';
import './dashboard.scss';

const Dashboard = () => {
     
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
                  <ChartPie/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
