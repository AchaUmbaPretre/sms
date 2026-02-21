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

export function useMatiereColumns({
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
        title: "Matière",
        dataIndex: "nom_matiere",
        key: "nom_matiere"
      },

      {
        title: "Date",
        dataIndex: "date_affectation",
        key: "date_affectation",
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
        title: "Classe",
        dataIndex: "classe",
        key: "classe"
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
