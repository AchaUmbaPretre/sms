import { useState } from 'react';
import ElevesTable from '../../components/ElevesTable'
import './eleves.scss'
import { useEleves } from '../../hooks/useEleves';

const Eleves = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  
  const [search, setSearch] = useState("");
  
  const { data, isLoading } = useEleves({
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
      <ElevesTable
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
  )
}

export default Eleves
