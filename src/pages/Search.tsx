import { FunctionComponent, KeyboardEvent, useRef } from "react";
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
  const numHitsPerPage = useRef(defaultNumHitsPerPage);

  const onPerformSearch = async (pageNumber?: number) => {
    searchPerformed.current = true;
    const result = await performSearch(query, numHitsPerPage.current, pageNumber);
    setResult(result);
  };

  const searchOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onPerformSearch();
  };

  const updateNumHitsPerPage = (val: number) => {
    numHitsPerPage.current = val;
    if (searchPerformed.current) onPerformSearch();
  };

  return (
    <div className="Search">
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} onKeyPress={searchOnEnter} />
      <div className="search-options">
        <div className="slider">
          <p>Number of search results per page</p>
          <Slider onChange={updateNumHitsPerPage} />
        </div>
        <Button className="btn-search" onClick={() => onPerformSearch()}>
          Search
        </Button>
      </div>
      {searchPerformed.current && (
        <>
          <SearchResults result={result} />
          <Pagination numPages={result?.numPages} onPerformSearch={onPerformSearch} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
