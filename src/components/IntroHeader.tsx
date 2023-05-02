import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export function IntroHeader() {
    return (
        <div>
            <header className="Intro-header">
                <strong>Welcome to the BEST grocery store on the planet</strong>
                <Link to={"/store"}>
                    <span
                        className="scroll-down"
                        style={{ border: "10px solid Black" }}
                    >
                        SHOP NOW
                    </span>
                </Link>
            </header>
        </div>
    );
}
