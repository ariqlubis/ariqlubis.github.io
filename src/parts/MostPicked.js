import Button from "elements/Button";
import React from "react";
// import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
    return (
        <section className="container" ref={props.refCatalog}>
            <h2 className="mb-3 text-center">Kategori UMKM Setono</h2>
            <p className="mb-3 text-center w-75 mx-auto">
                UMKM di wilayah Kelurahan Setono mencakup berbagai bidang
                seperti peternakan, pertanian, industri, jasa dan perdagangan.
            </p>
            <div className="container-grid">
                {props.data.map((item, index) => {
                    return (
                        <div
                            key={`mostpicked-${index}`}
                            className={`item column-4${
                                index === 0 ? " row-2" : " row-1"
                            }`}
                        >
                            <div className="card card-featured">
                                <figure className="img-wrapper">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="img-cover"
                                    />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button
                                        type="link"
                                        className="streched-link d-block text-white"
                                        href={`/properties/${item._id}`}
                                    >
                                        <h5>{item.name}</h5>
                                    </Button>
                                    <span>{item.city}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
