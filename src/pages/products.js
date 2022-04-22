import React from "react";

import "../product.css";

const Product = () => {
    return (
        <>
            <header>
                <h2>Our Products</h2>
            </header>
            <section className="product__listing">
                <div className="product__listing-item">
                    <img
                        src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                        alt=""
                    />
                </div>
                <div className="product__listing-item">
                    <img
                        src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                        alt=""
                    />
                </div>
                <div className="product__listing-item">
                    <img
                        src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                        alt=""
                    />
                </div>
            </section>
        </>
    );
};

export default Product;
