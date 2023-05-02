import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Store from "./pages/Store";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/store" element={<Store />}></Route>
        </Routes>
    );
}

export default App;
