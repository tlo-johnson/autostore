import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";
import { useState } from "react";
import { SearchResult, DefaultSearchResult } from "domain/searchResults";
import ErrorMessage from "components/ErrorMessage";
import SearchResults from "components/SearchResults";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult>(DefaultSearchResult);

  const onPerformSearch = async () => {
    const results = await performSearch(query);
    setResults(results);
  };

  return (
    <main>
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} />
      <Button onClick={onPerformSearch}>Search</Button>
      {!results.success && <ErrorMessage />}
      {results.success && <SearchResults products={results.products} />}
    </main>
  );
};

export default SearchPage;
