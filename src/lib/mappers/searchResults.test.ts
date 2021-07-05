import rawSearchResults from "../../../data/mockSearchResults";
import { mapSearchResults } from "lib/mappers/searchResults";

test("map raw search results to domain search results", () => {
  const result = mapSearchResults(rawSearchResults);
  expect(result).toEqual(expected);
});

const expected = {
  page: 0,
  hasMorePages: true,
  products: [
    {
      id: "f8e5d45f-7731-452d-8721-6919e07fcfa9",
      name: "ICE CREAM, Alden's, Vanilla Bean",
      description: "Organic, 48oz",
      tags: [],
      categories: [
        {
          id: "47d932b0-b180-4948-bde7-71508211ccf4",
          name: "Ice Cream & Dessert",
        },
        {
          id: "8e3db156-8cfc-4325-a32a-9d1e36eb58e8",
          name: "Chicken Kitchen",
        },
      ],
    },
    {
      id: "eaeb7c41-6c8d-4f51-8c71-5c66b4470820",
      name: "FROZEN FRUIT BAR, Tropical Sunset, Froozer by Cool Frootz,, 6 pk",
      description: "Mangoes, grapes, pineapple, banana; 2 oz each",
      tags: ["Gluten Free", "Non-GMO", "Plant-Based", "Vegan", "Vegetarian", "Pescatarian", "Major 8 Alergen Free"],

      categories: [
        {
          id: "47d932b0-b180-4948-bde7-71508211ccf4",
          name: "Ice Cream & Dessert",
        },
        {
          id: "8e3db156-8cfc-4325-a32a-9d1e36eb58e8",
          name: "Chicken Kitchen",
        },
      ],
    },
  ],
};