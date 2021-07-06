import SearchPage from "./Search";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { performSearch } from "lib/search";
import searchResult from "../../data/searchResult";

jest.mock("lib/search");

test("search performs search and displays results", async () => {
  performSearch.mockResolvedValue({ success: true, ...searchResult });

  render(<SearchPage />);

  const searchBox = screen.getByPlaceholderText("Search ...");
  const searchButton = screen.getByText("Search");
  const query = "Chicken";

  user.type(searchBox, query);
  user.click(searchButton);

  await waitFor(() => {
    const searchResults = screen.getByText("Name: ICE CREAM, Alden's, Vanilla Bean");
    expect(searchResults).toBeInTheDocument();
  });
});
