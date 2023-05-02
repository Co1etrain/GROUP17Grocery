import React from "react";
import "../App.css";
export function IntroHeader() {
    return (
        <div>
            <header className="App-header">
                Welcome to the best grocery store on the planet
                <a
                    href="#middle"
                    className="scroll-down"
                    style={{ border: "5px solid Black" }}
                >
                    Shop Now
                </a>
            </header>
        </div>
    );
}
