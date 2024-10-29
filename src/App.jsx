import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Characters App</h1>

      <Homepage />

      <Routes>
        <Route path="/" element={<p>This is the homepage</p>} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
