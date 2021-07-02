import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";
import { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  return (
    <main>
      <Input placeholder="Search ..." onChange={(e) => setQuery(e.currentTarget.value)} />
      <Button onClick={() => performSearch(query)}>Search</Button>
    </main>
  );
};

export default SearchPage;
