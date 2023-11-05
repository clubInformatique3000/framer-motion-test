import "./App.css";
import { SquareComponent, SunComponent, WindComponent } from "./components";

function App() {
  return (
    <>
      {/* Sun */}
      <SunComponent />
      <WindComponent />
      <SquareComponent />
      <div className="w-full shade"></div>
    </>
  );
}

export default App;
