import Input from "components/Input";
import Button from "components/Button";
import { performSearch } from "lib/search";

const SearchPage = () => {
  return (
    <main>
      <Input placeholder="Search ..." />
      <Button onClick={performSearch}>Search</Button>
    </main>
  );
};

export default SearchPage;
