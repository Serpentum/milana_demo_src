export const convertToPhone = (number: string | number) =>
  String(number)
    .replace(/\D+/g, '')
    .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3 $4-$5');
