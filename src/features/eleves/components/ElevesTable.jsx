import { useState } from "react";
import { Card } from "antd";
import Table from "../../../shared/ui/table/Table";
import { useElevesColumn } from "../hooks/useElevesColumn";
import { CardTitle } from "../../../shared/ui/cardTitle/CardTitle";
import CardExtraActions from "../../../shared/ui/cardExtraActions/CardExtraActions";

const ElevesTable = ({
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
        <CardTitle 
            title="Liste des élèves" 
            description="Vue synthétique de tous les élèves pour un suivi académique rapide." 
        />
        }
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
            data={Array.isArray(data) ? data : []}
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
