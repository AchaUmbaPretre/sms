import { useState } from "react";
import { Card, Input, Space, Button, Typography } from "antd";
import Table from "../../../shared/ui/table/Table";
import { useMatiereColumns } from "../hooks/useMatiereColumns";
import { CardTitle } from "../../../shared/ui/cardTitle/CardTitle";
import CardExtraActions from "../../../shared/ui/cardExtraActions/CardExtraActions";

const { Search } = Input;
const { Title, Text } = Typography;


const MatieresTable = ({
  data,
  loading,
  pagination,
  onChange,
  onEdit,
  onDetail,
  onDelete,
  openModal,
  onSearch,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const columns = useMatiereColumns({ pagination, onEdit, onDetail, onDelete });

  return (
    <Card
      bordered={false}
      title={<CardTitle title= 'Liste des matières attribuées' desc="Vue synthétique des matières affectées aux professeurs." />}
      extra={
        <CardExtraActions
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={onSearch}
          openModal={openModal}
          data={data}
        />
      }
      className="card-eleves"
    >
      <Table
        columns={columns}
        data={data}
        loading={loading}
        rowKey="id_matiere"
        pagination={{
          ...pagination,
          showSizeChanger: true,
          showTotal: (total) => `Total : ${total} matières`,
        }}
        scroll={{ x: "max-content" }}
        onChange={onChange}
        bordered
        size="middle"
      />
    </Card>
  );
};

export default MatieresTable;