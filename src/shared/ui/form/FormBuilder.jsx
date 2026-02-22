import TextField from "./fields/TextField";
import PasswordField from "./fields/PasswordField";
import SelectField from "./fields/SelectField";
import DateField from "./fields/DateField";

const fieldComponents = {
  text: TextField,
  password: PasswordField,
  email: TextField,
  select: SelectField,
  date: DateField,
};

const FormBuilder = ({ fields, isEdit }) => {
  return fields?.map((field) => {
    if (field.hideOnEdit && isEdit) return null;

    const Component = fieldComponents[field?.type];

    if (!Component) {
      console.error(`Field type "${field.type}" not supported`);
      return null;
    }


    return (
      <Component
        key={field?.name}
        name={field?.name}
        label={field?.label}
        required={field?.required}
        type={field?.validationType}
        min={field?.min}
      />
    );
  });
};

export default FormBuilder;