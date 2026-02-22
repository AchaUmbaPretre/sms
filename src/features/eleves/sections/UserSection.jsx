import FormBuilder from "../../../shared/ui/form/FormBuilder";

const userFields = [
  { name: "prenom", label: "Prénom", required: true, type: "text" },
  { name: "email", label: "Email", required: true, type: "text", validationType: "email" },
  { name: "mot_de_passe", label: "Mot de passe", required: true, type: "password", hideOnEdit: true },
  {
    name: "role",
    label: "Rôle",
    required: true,
    type: "select",
    options: [
      { label: "Admin", value: "admin" },
      { label: "Enseignant", value: "enseignant" },
      { label: "Élève", value: "eleve" },
      { label: "Parent", value: "parent" },
    ],
  },
];

const parentFields = [
  // Identité
  { name: "nom", label: "Nom", required: true, type: "text" },
  { name: "postnom", label: "Postnom", required: true, type: "text" },

  {
    name: "sexe",
    label: "Sexe",
    required: true,
    type: "select",
    options: [
      { label: "Masculin", value: "M" },
      { label: "Féminin", value: "F" },
    ],
  },

  { name: "date_naissance", label: "Date de naissance", type: "date" },

  // Contact
  { name: "telephone", label: "Téléphone", required: true, type: "text" },
  { name: "telephone_second", label: "Téléphone secondaire", type: "text" },
  { name: "email_contact", label: "Email de contact", type: "text", validationType: "email" },
  { name: "profession", label: "Profession", type: "text" },

  // Adresse
  { name: "adresse", label: "Adresse", type: "text" },
  { name: "ville", label: "Ville", type: "text" },
  { name: "quartier", label: "Quartier", type: "text" },

  // Lien administratif
  {
    name: "type_relation",
    label: "Type de relation",
    required: true,
    type: "select",
    options: [
      { label: "Père", value: "Père" },
      { label: "Mère", value: "Mère" },
      { label: "Tuteur", value: "Tuteur" },
      { label: "Oncle", value: "Oncle" },
      { label: "Autre", value: "Autre" },
    ],
  },

  {
    name: "responsable_financier",
    label: "Responsable financier",
    type: "checkbox",
  },
];

const UserSection = ({ isEdit }) => {
  return (
    <>
      <FormBuilder fields={userFields} isEdit={isEdit} />
      <FormBuilder fields={parentFields} isEdit={isEdit} />
    </>
  );
};

export default UserSection;