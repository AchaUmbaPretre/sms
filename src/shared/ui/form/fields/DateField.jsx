import { DatePicker } from "antd";
import FormField from "../FormField";
import dayjs from "dayjs";

const DateField = ({
  name,
  label,
  required,
  format = "DD/MM/YYYY",
  disabled,
  ...rest
}) => {
  return (
    <FormField
      name={name}
      label={label}
      required={required}
      {...rest}
    >
      <DatePicker
        style={{ width: "100%" }}
        format={format}
        disabled={disabled}
      />
    </FormField>
  );
};

export default DateField;