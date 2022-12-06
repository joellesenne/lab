const getYear = () => {
  const currentYear = new Date().getFullYear();
  let yearStart = '2019';
  return currentYear == yearStart ? yearStart : yearStart + '-' + currentYear;
};

export default getYear();
