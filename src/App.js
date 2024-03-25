import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Navigationbar from "./components/Navbar";
import Classrooms from "./pages/Classrooms";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/classes" Component={Classrooms} />
          <Route path="/students" Component={Students} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
