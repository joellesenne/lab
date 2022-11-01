export const getYear = () => {
  const currentYear = new Date().getFullYear();
  const yearStart = "2019";
  if (currentYear === yearStart) {
    return yearStart;
  } else {
    return yearStart + "-" + currentYear;
  }
};

export default getYear();
