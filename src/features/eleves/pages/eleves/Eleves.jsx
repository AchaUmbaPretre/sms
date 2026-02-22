import { useState } from "react";
import { useEleves } from "../../hooks/useEleves";
import CrudDrawer from "../../../../shared/ui/crud/CrudDrawer";
import ElevesTable from "../../components/ElevesTable";
import ElevesForm from "../elevesForm/ElevesForm";

const Eleves = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data, pagination, onChange, refetch } = useEleves();

  const handleCreate = () => {
    setIsEdit(false);
    setSelected(null);
    setOpen(true);
  };

  const handleEdit = (record) => {
    setIsEdit(true);
    setSelected(record);
    setOpen(true);
  };

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      if (isEdit) {
        // await updateEleve(selected.id_eleve, values)
      } else {
        // await createEleve(values)
      }

      setOpen(false);
      refetch();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ElevesTable
        data={data}
        pagination={pagination}
        onChange={onChange}
        onEdit={handleEdit}
        openModal={handleCreate}
      />

      <CrudDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Élève"
        FormComponent={ElevesForm}
        initialValues={selected}
        isEdit={isEdit}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </>
  );
};

export default Eleves;