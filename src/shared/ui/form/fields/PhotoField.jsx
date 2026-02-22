import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import FormField from "../FormField";

const PhotoField = ({ name, label, required }) => {
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <FormField name={name} label={label} required={required} getValueFromEvent={normFile}>
      <Upload
        name="photo"
        listType="picture"
        maxCount={1}
        beforeUpload={(file) => {
          const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
          if (!isJpgOrPng) {
            message.error("Vous ne pouvez télécharger que des fichiers JPG/PNG !");
          }
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isLt2M) {
            message.error("L'image doit être inférieure à 2MB !");
          }
          return isJpgOrPng && isLt2M;
        }}
      >
        <Button icon={<UploadOutlined />}>Cliquer ou glisser la photo</Button>
      </Upload>
    </FormField>
  );
};

export default PhotoField;