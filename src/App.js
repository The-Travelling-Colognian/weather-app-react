import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Weather App</h1>
        <WeatherSearch />
        <div>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
