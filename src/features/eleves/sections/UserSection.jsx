import FormBuilder from "../../../shared/ui/form/FormBuilder";

const userFields = [
  { name: "prenom", label: "Prénom", required: true, type: "text" },
  { name: "email", label: "Email", required: true, type: "email" },
  { name: "mot_de_passe", label: "Mot de passe", required: true, type: "password", hideOnEdit: true },
  { name: "role", label: "Rôle", required: true, type: "select", useOptionsHook: null, options: [
      { label: "Admin", value: "admin" },
      { label: "Enseignant", value: "enseignant" },
      { label: "Élève", value: "eleve" },
      { label: "Parent", value: "parent" },
    ]
  },
];

const UserSection = ({ isEdit }) => <FormBuilder fields={userFields} isEdit={isEdit} />;

export default UserSection;