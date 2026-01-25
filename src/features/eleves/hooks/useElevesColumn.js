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
  CarOutlined,
  EditOutlined,
  UserOutlined,
  CalendarOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";


export function useElevesColumn ({ pagination, columnsVisibility, onEdit, onDetail, onDelete}) {
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
        ]
    })
}