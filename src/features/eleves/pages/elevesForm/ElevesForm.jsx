import { Form, Button } from "antd";
import { useState } from "react";
import UserSection from "../../sections/UserSection";
import EleveSection from "../../sections/EleveSection";
import SchoolSection from "../../sections/SchoolSection";

const ElevesForm = ({ isEdit = false, onSubmit, initialValues = {} }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      await onSubmit(values);
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} layout="vertical" initialValues={initialValues} onFinish={handleFinish}>
      <UserSection isEdit={isEdit} />
      <EleveSection />
      <SchoolSection />
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          {isEdit ? "Mettre à jour" : "Créer"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ElevesForm;