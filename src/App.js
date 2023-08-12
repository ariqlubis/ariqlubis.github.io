import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route
                        exact
                        path="/properties/:id"
                        element={<DetailPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
