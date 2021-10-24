export const formatDate = (value: string) => {
  value = value.replaceAll(' ', '');
  const dateList = value.split('/');
  return `${dateList[2]}-${dateList[1]}-${dateList[0]}`;
};
