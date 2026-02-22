import FormBuilder from "../../../shared/ui/form/FormBuilder";

const eleveFields = [
  { name: "nom", label: "Nom", required: true, type: "text" },
  { name: "postnom", label: "Postnom", required: true, type: "text" },
  { name: "date_naissance", label: "Date de naissance", required: true, type: "date" },
  { name: "sexe", label: "Sexe", required: true, type: "select", options: [
      { label: "Masculin", value: "M" },
      { label: "Féminin", value: "F" },
    ]
  },
  { name: "adresse", label: "Adresse", required: true, type: "text" },
];

const EleveSection = () => <FormBuilder fields={eleveFields} />;

export default EleveSection;