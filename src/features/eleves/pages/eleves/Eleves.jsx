import React, { useMemo, useState, useCallback } from "react";
import { Table, Card, Space, DatePicker, Input, Button, Tooltip, Tag, notification } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


const Eleves = () => {
    
  return (
    <>
        <Card
            title="Liste des élèves"
            bordered={false}
            bodyStyle={{ padding: 16 }}
            extra={
                <Space wrap size="middle">
                    <Search
                        placeholder="Recherche"
                        allowClear
                        onChange={(e) => setSearchValue(e.target.value)}
                        style={{ width: 280 }}
                    />
                </Space>
            }
        >
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                pagination={false}
                rowKey="id_utilisateur"
                scroll={{ x: "max-content", y: 600 }}
                size="middle"
                sticky
                bordered
            />
        </Card>
    </>
  )
}

export default Eleves
