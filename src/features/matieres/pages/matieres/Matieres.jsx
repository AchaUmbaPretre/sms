import { useState } from "react";
import MatieresTable from "../../components/MatieresTable";
import { useMatieresData } from "../../hooks/useMatieresData";

const Matieres = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const [search, setSearch] = useState("");

  const { data, isLoading } = useMatieresData({
    search,
    page: pagination.current,
    pageSize: pagination.pageSize,
  });

  const handleTableChange = (newPagination) => {
    setPagination({
      current: newPagination.current,
      pageSize: newPagination.pageSize,
    });
  };

  const handleSearch = (value) => {
    setSearch(value);
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

  const handleEdit = (record) => {
    console.log("Edit:", record);
  };

  const handleDetail = (record) => {
    console.log("Detail:", record);
  };

  const handleDelete = (record) => {
    console.log("Delete:", record);
  };

  const handleOpenModal = () => {
    console.log("Open modal");
  };

  return (
    <div>
      <MatieresTable
        data={data?.items || []}
        loading={isLoading}
        pagination={{
          ...pagination,
          total: data?.total || 0,
        }}
        onChange={handleTableChange}
        onEdit={handleEdit}
        onDetail={handleDetail}
        onDelete={handleDelete}
        openModal={handleOpenModal}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Matieres;