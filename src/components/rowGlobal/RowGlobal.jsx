import { UserOutlined } from '@ant-design/icons';
import './rowGlobal.scss';

const cardsData = [
  { label: 'Élèves', icon: <UserOutlined /> },
  { label: 'Présents', icon: <UserOutlined /> },
  { label: 'Parents', icon: <UserOutlined /> },
  { label: 'Enseignants', icon: <UserOutlined /> },
];

const RowGlobal = () => {
  return (
    <div className="rowGlobal">
      <div className="rowGlobal__wrapper">
        {cardsData.map((card, index) => (
          <div className="rowGlobal__card" key={index}>
            <div className="rowGlobal__iconWrapper">
              {card.icon}
            </div>
            <div className="rowGlobal__label">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowGlobal;
