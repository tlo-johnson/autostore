import rawSearchResult from "../../../data/rawSearchResult";
import searchResult from "../../../data/searchResult";
import { mapSearchResults } from "lib/mappers/searchResults";

test("map raw search results to domain search results", () => {
  const result = mapSearchResults(rawSearchResult);
  expect(result).toEqual(searchResult);
});
