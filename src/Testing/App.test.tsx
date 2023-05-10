import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { HashRouter } from "react-router-dom";

test("Contains two routes", () => {
    render(
        <HashRouter>
            <App />
        </HashRouter>
    );
    const linkElement = screen.getByText(/CISC275/i);
    expect(linkElement).toBeInTheDocument();
});
