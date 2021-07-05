import { FunctionComponent, KeyboardEvent } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";
import { useState } from "react";
import { SearchResult, DefaultSearchResult } from "domain/searchResults";
import SearchResults from "components/SearchResults";
import "./Search.css";

const SearchPage: FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult>(DefaultSearchResult);

  const onPerformSearch = async () => {
    const result = await performSearch(query);
    setResult(result);
  };

  const searchOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onPerformSearch();
  };

  return (
    <div className="Search">
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} onKeyPress={searchOnEnter} />
      <Button className="search" onClick={onPerformSearch}>
        Search
      </Button>
      <SearchResults result={result} />
    </div>
  );
};

export default SearchPage;
