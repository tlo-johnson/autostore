import { FunctionComponent, useEffect } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";
import { useState } from "react";
import { SearchResult, DefaultSearchResult } from "domain/searchResults";
import ErrorMessage from "components/ErrorMessage";
import SearchResults from "components/SearchResults";

const SearchPage: FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult>(DefaultSearchResult);

  useEffect(() => {
    setQuery("chicken");
    onPerformSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPerformSearch = async () => {
    const results = await performSearch(query);
    setResults(results);
  };

  return (
    <main>
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} />
      <Button onClick={onPerformSearch}>Search</Button>
      {results.success && <SearchResults products={results.products} />}
      {!results.success && <ErrorMessage />}
    </main>
  );
};

export default SearchPage;
