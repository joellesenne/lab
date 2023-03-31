const getYear = () => {
  const currentYear = new Date().getFullYear();
  const yearStart = 2019;
  return currentYear === yearStart ? yearStart.toString() : `${yearStart}-${currentYear}`;
};

export default getYear();
