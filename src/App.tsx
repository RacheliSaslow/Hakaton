import CandidatePage from "./pages/CandidatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateDetails from "./components/CandidateDetails";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CandidatePage />} />
          <Route path="/candidate/:email" element={<CandidateDetails />} />
          <Route path="/firstMassage" elemant = {<firstMassage/>}/>
          <Route path="/SuccessMessage" elemant = {<SuccessMessage/>}/>
          <Route path="/CheckingData" elemant = {<CheckingData/>}/>
          <Route path="/NegativeMessage" elemant = {<NegativeMessage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
