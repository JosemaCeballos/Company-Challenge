import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import Information from "./components/Information/Information.jsx";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/informacion" element={<Information />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
