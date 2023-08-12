import React from "react";

import ImageHero from "assets/images/banner.jpg";
// import IconCities from "assets/images/ic_cities 1.svg";
// import IconTraveler from "assets/images/ic_traveler.svg";
// import IconTreasure from "assets/images/ic_treasure 1.svg";
import Button from "elements/Button";

export default function Hero(props) {
    function showCatalog() {
        window.scrollTo({
            top: props.refCatalog.current.offsetTop - 30,
            behavior: "smooth",
        });
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br />
                        Let's Go to Setono
                    </h1>
                    <p
                        className="mb-5 font-weight-light black w-75"
                        style={{ lineHeight: "170%" }}
                    >
                        Kelurahan Setono merupakan gabungan antara Kelurahan
                        Dekoro dan Kelurahan Karangmalang yang dipenuhi UMKM.
                        Kelurahan Setono memiliki banyak potensi yang dapat
                        dikembangkan lebih lanjut untuk mendukung usaha
                        masyarakat dan branding dari Kelurahan Setono.
                    </p>
                    <Button
                        className="btn px-5"
                        hasShadow
                        isPrimary
                        onClick={showCatalog}
                    >
                        Show Me !
                    </Button>
                </div>
                <div className="col-6 pl-4">
                    <div style={{ width: 500, height: 340 }}>
                        <img
                            src={ImageHero}
                            alt="Room with couches"
                            className="img-fluid position-absolute"
                            style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
