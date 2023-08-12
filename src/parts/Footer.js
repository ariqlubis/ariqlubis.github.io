// import Button from "elements/Button";
import React from "react";
import IconText from "./IconText";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <IconText />
                    </div>
                    {/* <div className="col-2 mr-5">
                    <h6 className="mt-2">Explore Us</h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/register">
                                New Account
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/properties">
                                
                            </Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/register">
                                New Account
                            </Button>
                        </li>
                    </ul>
                </div> */}
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2023 • All rights reserved • KKNT IPB 2023 -
                        Setono
                    </div>
                </div>
            </div>
        </footer>
    );
}
