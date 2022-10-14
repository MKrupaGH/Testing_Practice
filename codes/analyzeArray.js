const analyzeArray = (arr) => {
  if (arr.length === 0) return null;

  const average = arr.reduce((acc, v) => acc + v, 0) / arr.length;
  const sortArr = arr.sort((a, b) => a - b);

  return {
    average,
    min: sortArr[0],
    max: sortArr[arr.length - 1],
    length: arr.length,
  };
};

module.exports = analyzeArray;
