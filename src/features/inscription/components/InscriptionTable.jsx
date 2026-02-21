import { useState } from "react";
import { Card, Input, Space, Button, Typography } from "antd";
import { PlusCircleOutlined, TeamOutlined, PrinterOutlined } from "@ant-design/icons";
import Table from "../../../shared/ui/table/Table";
import { useInscriptionColumns } from "../hooks/useInscriptionColumns";

const { Search } = Input;
const { Title } = Typography;

const InscriptionTable = ({
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
  const columns = useInscriptionColumns({
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
            <Title level={4} style={{ margin: 0, textTransform: "uppercase" }}>
                Liste des inscriptions
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
                    onSearch?.(val);
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

export default InscriptionTable;
