import "./styles.css";
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Trending from "./components/Trending";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Menubar />
        <Home />
        <Trending />
      </div>
    </div>
  );
}
