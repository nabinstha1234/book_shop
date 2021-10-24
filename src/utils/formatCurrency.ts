export const formatCurrency = (value: number | string) => {
  value = value.toString();
  let afterPoint = '';
  if (value.indexOf('.') > 0) afterPoint = value.substring(value.indexOf('.'), value.length);
  value = Math.floor(+value);
  value = value.toString();
  let lastThree = value.substring(value.length - 3);
  let otherNumbers = value.substring(0, value.length - 3);
  if (otherNumbers !== '') lastThree = ',' + lastThree;
  const response = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;
  return response;
};
