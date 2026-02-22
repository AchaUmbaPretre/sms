import { Drawer } from "antd";

const CrudDrawer = ({
  open,
  onClose,
  title,
  FormComponent,
  initialValues,
  isEdit = false,
  width = 720,
  onSubmit,
  loading,
}) => {
  return (
    <Drawer
      title={isEdit ? `Modifier ${title}` : `Créer ${title}`}
      open={open}
      onClose={onClose}
      width={width}
      destroyOnClose
      styles={{ body: { paddingBottom: 80 } }}
    >
      <FormComponent
        isEdit={isEdit}
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />
    </Drawer>
  );
};

export default CrudDrawer;