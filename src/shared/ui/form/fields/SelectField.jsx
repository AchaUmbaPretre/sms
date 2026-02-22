import { Select, Spin } from "antd";
import FormField from "../FormField";

const SelectField = ({
  name,
  label,
  required,
  useOptionsHook,
  optionLabel = "label",
  optionValue = "value",
  mode,
  ...rest
}) => {
  const { data = [], isLoading } = useOptionsHook
    ? useOptionsHook()
    : { data: [], isLoading: false };

  const formattedOptions = data.map((item) => ({
    label: item[optionLabel],
    value: item[optionValue],
  }));

  return (
    <FormField name={name} label={label} required={required} {...rest}>
      <Select
        options={formattedOptions}
        loading={isLoading}
        mode={mode}
        showSearch
      />
    </FormField>
  );
};

export default SelectField;