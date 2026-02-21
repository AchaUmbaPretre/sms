import { Card, Input, Space, Button, Typography } from "antd";
import { PlusCircleOutlined, TeamOutlined, PrinterOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Title, Text } = Typography;

export const CardTitle = ({title, desc}) => (
  <Space direction="vertical" size={0} style={{padding:'10px 0'}}>
    <Space align="center">
      <TeamOutlined style={{ fontSize: 24, color: "#1890ff" }} />
      <Title level={4} style={{ margin: 0, textTransform: "uppercase" }}>
        {title}
      </Title>
    </Space>
    <Text type="secondary" style={{ fontSize: 13 }}>
       {desc}
    </Text>
  </Space>
);