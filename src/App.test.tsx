import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the  name somewhere", () => {
    render(<App />);
    const linkElement = screen.getByText(/CISC275/i);
    expect(linkElement).toBeInTheDocument();
});
