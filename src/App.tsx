import "./reset.css";
import "./App.css";
import SearchPage from "pages/search";
import Logo from "components/Logo";

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
      </header>
      <main>
        <SearchPage />
      </main>
    </div>
  );
}

export default App;
