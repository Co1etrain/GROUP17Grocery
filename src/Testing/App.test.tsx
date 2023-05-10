import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { HashRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("App component tests", () => {
    test("Contains the title text", () => {
        render(
            <HashRouter>
                <App />
            </HashRouter>
        );
        const title = screen.getByText(
            /Welcome to the BEST grocery store on the planet/i
        );
        expect(title).toBeInTheDocument();
    });
    test("Contains the SHOP NOW link", () => {
        render(
            <HashRouter>
                <App />
            </HashRouter>
        );
        const shopButton = screen.getByRole("link");
        expect(shopButton).toBeInTheDocument();
    });
    test("Clicking SHOP NOW link makes Store.tsx render", () => {
        render(
            <HashRouter>
                <DndProvider backend={HTML5Backend}>
                    <App />
                </DndProvider>
            </HashRouter>
        );
        const shopButton = screen.getByRole("link");
        shopButton.click();
        // We are on the Store page is the Requests button is in the doc
        expect(screen.getByText(/Requests/i)).toBeInTheDocument();
    });
});
