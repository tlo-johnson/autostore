import { RawSearchResult, RawTag, RawCategory } from "domain/rawSearchResult";

export const mapSearchResults = (data: any) => {
  const { page, nbPages } = data;

  const results = data.hits.map((result: RawSearchResult) => ({
    id: result.ProductId,
    name: result.Name,
    description: result.Description,
    tags: result.Tags.map(mapTag),
    categories: result.Categories.map(mapCategory),
    img: result.Image.Filename,
  }));

  const hasMorePages = !(page === nbPages);

  return { results, page, hasMorePages };
};

const mapTag = (tag: RawTag) => tag.Name;

const mapCategory = (category: RawCategory) => ({
  id: category.CategoryId,
  name: category.Name,
});
