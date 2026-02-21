import { useMemo } from "react";
import {
  Button,
  Space,
  Tag,
  Tooltip,
  Popconfirm,
  Typography
} from "antd";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  UserOutlined,
  CalendarOutlined
} from "@ant-design/icons";
import dayjs from "dayjs";
import { formatDateFR } from "../../../shared/utils/date";

const { Text } = Typography;

export function useInscriptionColumns({
  pagination = { current: 1, pageSize: 10 },
  columnsVisibility = {},
  onEdit = () => {},
  onDetail = () => {},
  onDelete = () => {},
  canDelete = true,
} = {}) {
  return useMemo(() => {
    const allColumns = [
      {
        title: "#",
        key: "index",
        width: 60,
        align: "center",
        render: (_, __, index) =>
          (pagination.current - 1) * pagination.pageSize + index + 1,
      },

      {
        title: "Nom",
        dataIndex: "nom",
        key: "nom",
        render: (value) => (
          <Space>
            <UserOutlined />
            <Text strong>{value}</Text>
          </Space>
        ),
      },

      {
        title: "Post-nom",
        dataIndex: "postnom",
        key: "postnom",
      },

      {
        title: "Sexe",
        dataIndex: "sexe",
        key: "sexe",
        align: "center",
        render: (value) => (
          <Tag color={value === "M" ? "blue" : "pink"}>
            {value === "M" ? "Masculin" : "Féminin"}
          </Tag>
        ),
      },

      {
        title: "Date de naissance",
        dataIndex: "date_naissance",
        key: "date_naissance",
        render: (value) =>
          value ? (
            <Space>
              <CalendarOutlined />
              {dayjs(value).format("DD/MM/YYYY")}
            </Space>
          ) : (
            "-"
          ),
      },

      {
        title: "Annee academ.",
        dataIndex: "annee_academ",
        key: "nnee_academ",
        render: (value) => <DateCell date={value} />
      },

      {
        title: "Statut",
        dataIndex: "statut",
        key: "staut",
        align: "center",
        render: (value) => (
          <Tag color={value === "M" ? "blue" : "pink"}>
            <Tooltip title="Sexe de l’élève">{value === "M" ? "Masculin" : "Féminin"}</Tooltip>
          </Tag>
        ),
      },

      {
        title: "Adresse",
        dataIndex: "adresse",
        key: "adresse",
        ellipsis: true,
      },

      {
        title: "Frais inscript.",
        dataIndex: "frais_inscript",
        key: "frais_inscript",
        ellipsis: true,
      },

      {
        title: "Moyen d'inscript.",
        dataIndex: "frais_inscript",
        key: "frais_inscript",
        ellipsis: true,
      },

      {
        title: "Moyen de paiement.",
        dataIndex: "moyen_paiement",
        key: "moyen_paiement",
        ellipsis: true,
      },

      {
        title: "Date inscript.",
        dataIndex: "date_creation",
        key: "date_creation",
        render: (value) =>
          value ? formatDateFR(value) : "-",
      },

      {
        title: "Actions",
        key: "actions",
        align: "center",
        fixed: "right",
        width: 140,
        render: (_, record) => (
          <Space>
            <Tooltip title="Détails">
              <Button
                type="link"
                icon={<EyeOutlined />}
                onClick={() => onDetail(record)}
              />
            </Tooltip>

            <Tooltip title="Modifier">
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => onEdit(record)}
              />
            </Tooltip>

            <Popconfirm
              title="Confirmer la suppression ?"
              onConfirm={() => onDelete(record)}
              okText="Oui"
              cancelText="Non"
            >
              <Tooltip title="Supprimer">
                <Button
                  type="link"
                  danger
                  icon={<DeleteOutlined />}
                />
              </Tooltip>
            </Popconfirm>
          </Space>
        ),
      },
    ];

    return allColumns.filter(
      (col) =>
        col.key === "index" ||
        columnsVisibility[col.key] !== false
    );
  }, [pagination, columnsVisibility, onEdit, onDetail, onDelete]);
}
