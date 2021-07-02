import rawSearchResults from "../../../data/mockSearchResults";
import { mapSearchResults } from "lib/mappers/searchResults";

test("map raw search results to domain search results", () => {
  const result = mapSearchResults(rawSearchResults);
  const expected: any = [];
  expect(result).toEqual(expected);
});
