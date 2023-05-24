import React from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { News } from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

/* Importing styles */
import "./styles/base.scss";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <div className="App">
          <LoadingBar
            color="#e3714d"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="home"
                  newsCount={9}
                  country="in"
                  category=""
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  newsCount={9}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  newsCount={9}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  newsCount={9}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  newsCount={9}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  newsCount={9}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  newsCount={9}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
