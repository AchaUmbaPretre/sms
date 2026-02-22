import { Input } from "antd";
import FormField from "../FormField";

const TextField = ({ ...props }) => {
  return (
    <FormField {...props}>
      <Input />
    </FormField>
  );
};

export default TextField;