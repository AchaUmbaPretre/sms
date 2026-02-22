import FormBuilder from "../../../shared/ui/form/FormBuilder";
import PhotoField from "../../../shared/ui/form/fields/PhotoField";

const EleveSection = () => {
  const eleveFields = [
    // Identité
    { name: "nom", label: "Nom", required: true, type: "text" },
    { name: "postnom", label: "Postnom", required: true, type: "text" },
    { name: "prenom", label: "Prénom", type: "text" },
    { name: "date_naissance", label: "Date de naissance", required: true, type: "date" },
    { name: "sexe", label: "Sexe", required: true, type: "select", options: [
      { label: "Masculin", value: "M" },
      { label: "Féminin", value: "F" },
    ]},

    // Contact
    { name: "adresse", label: "Adresse", type: "text" },
    { name: "ville", label: "Ville", type: "text" },
    { name: "telephone", label: "Téléphone", type: "text" },
    { name: "telephone_second", label: "Téléphone secondaire", type: "text" },
    { name: "email", label: "Email", type: "text", validationType: "email" },

    // Académique / Classe
    { name: "id_classe", label: "Classe", type: "select", useOptionsHook: null, optionLabel: "nom", optionValue: "id_classe", required: true },
    { name: "annee_academique_id", label: "Année académique", type: "select", useOptionsHook: null, optionLabel: "annee", optionValue: "id", required: true },

    // Admin / suivi
    { name: "statut", label: "Statut", type: "select", options: [
      { label: "Actif", value: "ACTIF" },
      { label: "Inactif", value: "INACTIF" },
      { label: "Suspendu", value: "SUSPENDU" },
    ]},
    { name: "remarques", label: "Remarques", type: "text" },

    // Documents / upload
    { name: "photo", label: "Photo de l'élève", type: "photo" },          // ← Upload senior
    { name: "acte_naissance", label: "Acte de naissance", type: "photo" }, // ← Upload senior
  ];

  return <FormBuilder fields={eleveFields} />;
};

export default EleveSection;