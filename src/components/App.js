import { Route, Routes } from "react-router-dom";
import CreateTopic from "./CreateTopic";
import EditTopic from "./EditTopic";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-topic" element={<CreateTopic />} />
        <Route path="/edit-topic/:id" element={<EditTopic />} />
      </Routes>
    </div>
  );
}

export default App;
