import './statistiqueRow.scss';
import { UserOutlined } from '@ant-design/icons';

const data = [
  { label: 'Élèves', value: 2000, description: 'Total inscrits', icon: <UserOutlined />, className: '' },
  { label: 'Présents', value: 1800, description: 'Présents aujourd’hui', icon: <UserOutlined />, className: 'present' },
  { label: 'Absents', value: 150, description: 'Absents aujourd’hui', icon: <UserOutlined />, className: 'absent' },
  { label: 'Justifiés', value: 50, description: 'Absences justifiées', icon: <UserOutlined />, className: 'justified' },
];


const StatistiqueRow = () => {
  return (
    <div className="statistique-row">
      <div className="statistique-row__wrapper">
        {data.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-card__header">
              <h3>{item.label}</h3>
              <div className={`icon-wrapper ${item.className}`}>{item.icon}</div>
            </div>
            <strong className="stat-card__value">{item.value}</strong>
            <p className="stat-card__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatistiqueRow;
