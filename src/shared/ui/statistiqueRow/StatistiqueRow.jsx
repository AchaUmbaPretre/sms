import "./statistiqueRow.scss";
import { UserOutlined, CheckCircleOutlined, CloseCircleOutlined, FileTextOutlined } from '@ant-design/icons';

const data = [
  {
    label: "Élèves",
    value: 2000,
    description: "Total inscrits",
    icon: <UserOutlined style={{ color: '#1890ff' }} />,
    className: "",
  },
  {
    label: "Présents",
    value: 1800,
    description: "Présents aujourd’hui",
    icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    className: "present",
  },
  {
    label: "Absents",
    value: 150,
    description: "Absents aujourd’hui",
    icon: <CloseCircleOutlined style={{ color: '#f5222d' }} />,
    className: "absent",
  },
  {
    label: "Justifiés",
    value: 50,
    description: "Absences justifiées",
    icon: <FileTextOutlined style={{ color: '#faad14' }} />,
    className: "justified",
  },
];

const StatistiqueRow = () => {
  return (
    <div className="statistique-row">
      <div className="statistique-row__wrapper">
        {data.map((item, index) => (
          <div className={`stat-card ${item.className}`} key={index}>
            <div className="stat-card__header">
              <h3>{item.label}</h3>
              <div className="icon-wrapper">{item.icon}</div>
            </div>

            <div className="stat-card__value">{item.value}</div>
            <div className="stat-card__desc">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatistiqueRow;
