import { RawSearchResult, RawTag, RawCategory } from "domain/rawSearchResult";
import { Product } from "domain/product";

export const mapSearchResults = (data: any) => {
  const products: Product[] = data.hits.map((result: RawSearchResult) => ({
    id: result.ProductId,
    name: result.Name,
    description: result.Description,
    tags: result.Tags.map(mapTag),
    categories: result.Categories.map(mapCategory),
    img: result.Image?.Filename,
  }));

  const { page, nbPages } = data;
  const hasMorePages: boolean = !(page === nbPages);

  return { products, page, hasMorePages };
};

const mapTag = (tag: RawTag) => tag.Name;

const mapCategory = (category: RawCategory) => ({
  id: category.CategoryId,
  name: category.Name,
});
