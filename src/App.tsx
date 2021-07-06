import "./reset.css";
import "./App.css";
import SearchPage from "pages/Search";
import Logo from "components/Logo";

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <SearchPage />
    </div>
  );
}

export default App;
