import React, { Component } from "react";

import MostPicked from "parts/MostPicked";
import Header from "parts/Header";
import Hero from "parts/Hero";

import landingPage from "json/landingPage.json";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refCatalog = React.createRef();
    }

    componentDidMount() {
        window.title = "UMKM Setono | Home";
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refCatalog={this.refCatalog} data={landingPage.hero} />
                <MostPicked
                    refCatalog={this.refCatalog}
                    data={landingPage.mostPicked}
                />
                <Footer />
            </>
        );
    }
}
