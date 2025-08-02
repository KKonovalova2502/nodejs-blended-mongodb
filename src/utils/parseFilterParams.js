const parseCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;

  const isCategory = (category) =>
    ['books', 'electronics', 'clothing', 'other'].includes(category);
  if (isCategory(category)) return category;
};

const parseNumber = (number) => {
  const parsedNumber = Number(number);
  if (Number.isNaN(parsedNumber)) return;
  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { category, maxPrice, minPrice } = query;

  const parsedCategory = parseCategory(category);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
};
