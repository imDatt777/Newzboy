import "./App.css";
import NavBar from "./components/NavBar";
import { News } from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="home" newsCount={9} country="in" category="" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" newsCount={9} country="in" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News key="entertainment" newsCount={9} country="in" category="entertainment" />
              }
            />
            <Route
              exact
              path="/health"
              element={<News key="health" newsCount={9} country="in" category="health" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="business" newsCount={9} country="in" category="sports" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" newsCount={9} country="in" category="science" />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News key="technology" newsCount={9} country="in" category="technology" />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
