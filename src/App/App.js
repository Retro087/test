import { Route, Routes } from "react-router";

import "./App.css";

import Header from "../components/header";
import Users from "../containers/users";
import Edit from "../containers/edit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
