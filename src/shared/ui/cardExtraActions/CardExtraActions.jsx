import { Space, Input, Button } from "antd";
import { PlusCircleOutlined, PrinterOutlined } from "@ant-design/icons";

const { Search } = Input;

const CardExtraActions = ({ searchValue, setSearchValue, onSearch, openModal, data }) => (
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

    <Button icon={<PrinterOutlined />} disabled={!data?.length} title="Imprimer la liste">
      Imprimer
    </Button>
  </Space>
);

export default CardExtraActions;