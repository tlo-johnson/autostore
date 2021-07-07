import { FunctionComponent, KeyboardEvent, useCallback, useEffect, useRef } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";
import { useState } from "react";
import { SearchResult, DefaultSearchResult } from "domain/searchResults";
import SearchResults from "components/SearchResults";
import "./Search.css";
import Pagination from "components/Pagination";
import Slider from "components/Slider";
import { defaultNumHitsPerPage } from "lib/constants";

const SearchPage: FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult>(DefaultSearchResult);
  const searchPerformed = useRef(false);
  const [numHitsPerPage, setNumHitsPerPage] = useState(defaultNumHitsPerPage);

  const onPerformSearch = useCallback(
    async (pageNumber?: number) => {
      searchPerformed.current = true;
      const result = await performSearch(query, numHitsPerPage, pageNumber);
      setResult(result);
    },
    [numHitsPerPage, query]
  );

  const searchOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onPerformSearch();
  };

  useEffect(() => {
    if (!searchPerformed.current) return;
    onPerformSearch();
  }, [onPerformSearch]);

  return (
    <div className="Search">
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} onKeyPress={searchOnEnter} />
      <div className="search-options">
        <div className="slider">
          <p>Number of search results per page</p>
          <Slider onChange={setNumHitsPerPage} />
        </div>
        <Button className="btn-search" onClick={() => onPerformSearch()}>
          Search
        </Button>
      </div>
      {searchPerformed.current && (
        <>
          <SearchResults result={result} />
          <Pagination numPages={result.numPages} onPerformSearch={onPerformSearch} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
