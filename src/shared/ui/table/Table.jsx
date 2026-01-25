// shared/ui/Table.jsx
import { Table as AntTable } from 'antd'

export default function Table({
  columns,
  data,
  loading = false,
  rowKey = 'id',
  pagination = true,
}) {
  return (
    <AntTable
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey={rowKey}
      pagination={pagination}
    />
  )
}
