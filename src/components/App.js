import { Route, Routes } from "react-router-dom";
import CreateTopic from "./CreateTopic";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-topic" element={<CreateTopic />} />
      </Routes>
    </div>
  );
}

export default App;
