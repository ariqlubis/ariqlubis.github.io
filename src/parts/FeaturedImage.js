import React from "react";
export default function FeaturedImage({ data }) {
    return (
        <section className="container">
            <div className="container-grid sm">
                {data.map((item, index) => {
                    return (
                        <div
                            key={`FeatureImage-${index}`}
                            className="item column-12 row-2"
                        >
                            <div className="card h-100">
                                <figure className="img-wrapper">
                                    <img
                                        src={item.url}
                                        alt={item._id}
                                        className="img-contains"
                                    />
                                </figure>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
