import { Form, Button, Tabs, Steps } from "antd";
import { UserOutlined, SolutionOutlined, BookOutlined } from "@ant-design/icons";
import { useState } from "react";
import UserSection from "../../sections/UserSection";
import EleveSection from "../../sections/EleveSection";
import SchoolSection from "../../sections/SchoolSection";

const { TabPane } = Tabs;
const { Step } = Steps;

const ElevesForm = ({ isEdit = false, onSubmit, initialValues = {} }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      await onSubmit(values);
      form.resetFields();
      setActiveTab("1"); // reset to first step after submit
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <Form form={form} layout="vertical" initialValues={initialValues} onFinish={handleFinish}>
      {/* Barre de progression avec icônes */}
      <Steps current={Number(activeTab) - 1} style={{ marginBottom: 20 }}>
        <Step title="Parent" icon={<UserOutlined />} />
        <Step title="Élève" icon={<SolutionOutlined />} />
        <Step title="Scolaire" icon={<BookOutlined />} />
      </Steps>

      {/* Tabs pour chaque section avec icônes */}
      <Tabs activeKey={activeTab} onChange={handleTabChange} type="card" size="large">
        <TabPane
          tab={
            <span>
              <UserOutlined style={{marginRight:5}} />
              Parent
            </span>
          }
          key="1"
        >
          <UserSection isEdit={isEdit} />
        </TabPane>

        <TabPane
          tab={
            <span>
              <SolutionOutlined style={{marginRight:5}} />
              Élève
            </span>
          }
          key="2"
        >
          <EleveSection />
        </TabPane>

        <TabPane
          tab={
            <span>
              <BookOutlined style={{marginRight:5}}/>
              Scolaire
            </span>
          }
          key="3"
        >
          <SchoolSection />
        </TabPane>
      </Tabs>

      {/* Bouton Submit */}
      <Form.Item style={{ marginTop: 20 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          {isEdit ? "Mettre à jour" : "Créer"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ElevesForm;