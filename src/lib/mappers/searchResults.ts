export const mapSearchResults = (data: any) => {
  console.log(data);
  const { hits: results, page } = data;
  return { results, page };
};
