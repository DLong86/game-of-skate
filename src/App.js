import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Button text="Click Me" />
    </div>
  );
}

export default App;
