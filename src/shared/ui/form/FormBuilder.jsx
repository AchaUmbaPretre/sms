import TextField from "./fields/TextField";
import PasswordField from "./fields/PasswordField";
import SelectField from "./fields/SelectField";
import DateField from "./fields/DateField";

const fieldComponents = {
  text: TextField,
  password: PasswordField,
  select: SelectField,
  date: DateField,
};

const FormBuilder = ({ fields, isEdit }) => {
  return fields.map((field) => {
    if (field.hideOnEdit && isEdit) return null;

    const Component = fieldComponents[field.type];

    if (!Component) {
      console.warn(`Unsupported field type: ${field.type}`);
      return null;
    }

    return (
      <Component
        key={field.name}
        {...field}
      />
    );
  });
};

export default FormBuilder;