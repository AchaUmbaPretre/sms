import { Table as AntTable, Empty } from "antd";

export default function Table({
  columns,
  data = [],
  loading = false,
  rowKey = "id",
  pagination = true,
  onChange,
  scroll,
  size = "middle",
  rowSelection,
  bordered = false,
  locale,
  ...rest
}) {
  return (
    <AntTable
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey={rowKey}
      pagination={pagination}
      onChange={onChange}
      scroll={scroll}
      size={size}
      rowSelection={rowSelection}
      bordered={bordered}
      locale={
        locale || {
          emptyText: (
            <Empty description="Aucune donnée disponible" />
          ),
        }
      }
      {...rest}
    />
  );
}
