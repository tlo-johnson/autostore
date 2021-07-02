import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";
import { useState } from "react";
import { SearchResults, DefaultSearchResults } from "domain/searchResults";

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
      {!results.success && (
        <>
          <p>Darn, something went wrong. </p>
          <p>"Insanity is doing the same thing over and over again and expecting different results."</p>
          <p>... but hey, try again.</p>
        </>
      )}
    </main>
  );
};

export default SearchPage;
