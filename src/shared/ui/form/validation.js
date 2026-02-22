export const buildRules = ({ required, type, min }) => {
  const rules = [];

  if (required) {
    rules.push({ required: true, message: "Champ obligatoire" });
  }

  if (type === "email") {
    rules.push({ type: "email", message: "Email invalide" });
  }

  if (min) {
    rules.push({ min, message: `Minimum ${min} caractères` });
  }

  return rules;
};