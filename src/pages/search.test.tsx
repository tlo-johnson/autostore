import SearchPage from "./Search";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { performSearch } from "lib/search";
import searchResult from "../../data/searchResult";
import { SearchResult } from "domain/searchResults";

jest.mock("lib/search");

const init = (searchResponse: SearchResult) => {
  performSearch.mockResolvedValue(searchResponse);

  render(<SearchPage />);

  const searchBox = screen.getByPlaceholderText("Search ...");
  const searchButton = screen.getByText("Search");
  const query = "Chicken";

  user.type(searchBox, query);
  user.click(searchButton);
};

test("performs search and displays results", async () => {
  const searchResponse = { success: true, ...searchResult };
  init(searchResponse);

  await waitFor(() => {
    const searchResults = screen.getByText("Name: ICE CREAM, Alden's, Vanilla Bean");
    expect(searchResults).toBeInTheDocument();
  });
});

test("performs search and displays no results message when search fails", async () => {
  const searchResponse = { success: false } as SearchResult;
  init(searchResponse);

  await waitFor(() => {
    const searchResults = screen.getByText(/Darn/);
    expect(searchResults).toBeInTheDocument();
  });
});

test("performs search and displays no results message when no results", async () => {
  const searchResponse = { success: true, ...searchResult, products: [] };
  init(searchResponse);

  await waitFor(() => {
    const searchResults = screen.getByText(/Darn/);
    expect(searchResults).toBeInTheDocument();
  });
});

test("displays pagination when more than one page of results is returned", async () => {
  const searchResponse = { success: true, ...searchResult, numPages: 2 };
  init(searchResponse);

  await waitFor(() => {
    const searchResults = screen.getByText("1");
    expect(searchResults).toBeInTheDocument();
  });
});

test("does not display pagination when only one page of results is returned", async () => {
  const searchResponse = { success: true, ...searchResult, numPages: 1 };
  init(searchResponse);

  await waitFor(() => {
    const searchResults = screen.queryByText("1");
    expect(searchResults).not.toBeInTheDocument();
  });
});
