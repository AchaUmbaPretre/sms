import Table from "../../../shared/ui/Table";
import { Card } from "antd";
import { useElevesColumn } from "../hooks/useElevesColumn";

const ElevesTable = ({
  data,
  loading,
  pagination,
  onChange,
  onEdit,
  onDetail,
  onDelete,
}) => {
  const columns = useElevesColumn({
    pagination,
    onEdit,
    onDetail,
    onDelete,
  });

  return (
    <Card bordered={false}>
      <Table
        columns={columns}
        data={data}
        loading={loading}
        rowKey="id_eleve"
        pagination={{
          ...pagination,
          showSizeChanger: true,
          showTotal: (total) =>
            `Total : ${total} élèves`,
        }}
        scroll={{ x: 1400 }}
        onChange={onChange}
      />
    </Card>
  );
};

export default ElevesTable;
