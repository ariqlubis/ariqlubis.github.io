import Button from "elements/Button";
import React from "react";
import BrandIcon from "./IconText";
import { useLocation } from "react-router-dom";

export default function Header(props) {
    const location = useLocation();
    const getNavLinkClass = (path) => {
        return location.pathname === path ? " active" : "";
    };
    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button
                                    className="nav-link"
                                    type="link"
                                    href="/"
                                >
                                    Home
                                </Button>
                            </li>
                            <li
                                className={`nav-item${getNavLinkClass(
                                    "/browse-by"
                                )}`}
                            >
                                <Button
                                    className="nav-link"
                                    type="link"
                                    href="/browse-by"
                                >
                                    Mapping
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
