import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescriptions";
import Footer from "parts/Footer";
import ItemLister from "parts/ItemLister";

import ItemDetails from "json/itemDetails.json";
import ListData from "json/listData.json";

export default class DetailPage extends Component {
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "/" },
            { pageTitle: "Category Details", pageHref: "" },
        ];

        return (
            <>
                <Header {...this.props} />
                <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
                <section className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <FeaturedImage data={ItemDetails.imageUrls} />
                        </div>
                        <div className="col-md-6">
                            <PageDetailDescription data={ItemDetails} />
                        </div>
                    </div>
                </section>
                <section className="container">
                    <ItemLister data={ListData} />
                </section>

                <Footer />
            </>
        );
    }
}
