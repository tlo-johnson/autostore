import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";
import { useState } from "react";
import { SearchResults, DefaultSearchResults } from "domain/searchResults";
import ErrorMessage from "components/ErrorMessage";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults>(DefaultSearchResults);

  const onPerformSearch = async () => {
    const results = await performSearch(query);
    setResults(results);
  };

  return (
    <main>
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} />
      <Button onClick={onPerformSearch}>Search</Button>
      {!results.success && <ErrorMessage />}
    </main>
  );
};

export default SearchPage;
