export const sortBy = prop => {
  if (!prop) {
    throw new Error('missing argument');
  }
  return ({ [prop]: valueA }, { [prop]: valueB }) => (valueA > valueB ? 1 : -1);
};
