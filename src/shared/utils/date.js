export function formatDateFR(date) {
  return new Intl.DateTimeFormat('fr-FR').format(new Date(date))
}
