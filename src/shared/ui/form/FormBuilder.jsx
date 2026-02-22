import { Row, Col } from "antd";
import TextField from "./fields/TextField";
import PasswordField from "./fields/PasswordField";
import SelectField from "./fields/SelectField";
import DateField from "./fields/DateField";
import PhotoField from "./fields/PhotoField";

const fieldComponents = {
  text: TextField,
  password: PasswordField,
  select: SelectField,
  date: DateField,
  photo: PhotoField
};

const FormBuilder = ({ fields, isEdit }) => {
  return (
    <Row gutter={16}>
      {fields.map((field) => {
        if (field.hideOnEdit && isEdit) return null;

        const Component = fieldComponents[field.type];
        if (!Component) return null;

        return (
          <Col
            key={field.name}
            xs={24}
            md={12}   // ← 2 par ligne ici
          >
            <Component {...field} />
          </Col>
        );
      })}
    </Row>
  );
};

export default FormBuilder;