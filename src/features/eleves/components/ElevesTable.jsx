import { useState } from "react";
import { Card, Input, Space, Button, Typography } from "antd";
import { PlusCircleOutlined, TeamOutlined, PrinterOutlined } from "@ant-design/icons";
import Table from "../../../shared/ui/table/Table";
import { useElevesColumn } from "../hooks/useElevesColumn";

const { Search } = Input;
const { Title } = Typography;

const ElevesTable = ({
  data,
  loading,
  pagination,
  onChange,
  onEdit,
  onDetail,
  onDelete,
  openModal,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const columns = useElevesColumn({
    pagination,
    onEdit,
    onDetail,
    onDelete,
  });

  return (
    <Card
        bordered={false}
        title={
            <Space align="center">
            <TeamOutlined style={{ fontSize: 24, color: "#1890ff" }} />
            <Title level={4} style={{ margin: 0 }}>
                Liste des élèves
            </Title>
            </Space>
        }
        extra={
            <Space wrap>
                <Search
                    placeholder="Rechercher un élève"
                    allowClear
                    value={searchValue}
                    onChange={(e) => {
                    const val = e.target.value;
                    setSearchValue(val);
                    onSearch?.(val); // safe call pour server-side search
                    }}
                    style={{ width: 250 }}
                    enterButton
                />

                <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={() => openModal?.("Add")}
                >
                    Nouveau
                </Button>

                <Button icon={<PrinterOutlined />}>Imprimer</Button>
            </Space>
        }
        className="card-eleves"
    >
        <Table
            columns={columns}
            data={data}
            loading={loading}
            rowKey="id_eleve"
            pagination={{
            ...pagination,
            showSizeChanger: true,
            showTotal: (total) => `Total : ${total} élèves`,
            }}
            scroll={{ x: "max-content" }}
            onChange={onChange}
            bordered
            size="middle"
        />
    </Card>
  );
};

export default ElevesTable;
