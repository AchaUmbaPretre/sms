import FormBuilder from "../../../shared/ui/form/FormBuilder";

const schoolFields = [
  { name: "id_classe", label: "Classe", required: true, type: "select", useOptionsHook: null },
  { name: "annee_academique_id", label: "Année académique", required: true, type: "select", useOptionsHook: null },
];

const SchoolSection = () => <FormBuilder fields={schoolFields} />;

export default SchoolSection;