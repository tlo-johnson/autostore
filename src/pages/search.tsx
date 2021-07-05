import { FunctionComponent } from "react";
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

  return (
    <div className="Search">
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} />
      <Button className="search" onClick={onPerformSearch}>
        Search
      </Button>
      <SearchResults result={result} />
    </div>
  );
};

export default SearchPage;
