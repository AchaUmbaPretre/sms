import { Form } from "antd";
import { buildRules } from "./validation";

const FormField = ({
  name,
  label,
  required,
  type,
  min,
  children,
  ...rest
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={buildRules({ required, type, min })}
      {...rest}
    >
      {children}
    </Form.Item>
  );
};

export default FormField;