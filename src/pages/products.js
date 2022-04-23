import React, { useEffect, useState } from "react";

import "../styles/product.css";

const Product = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const options = {
            method: "GET",
            params: { limit: "24", start: "0" },
            headers: {
                "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
                "X-RapidAPI-Key":
                    "e2204bf6c0mshb651e4d02185d6dp144c08jsn613360ede411",
            },
        };

        const fetchFood = async () => {
            fetch("https://yummly2.p.rapidapi.com/feeds/list", options)
                .then((res) => res.json())
                .then((data) => setMenu(data.feed));
        };
        fetchFood();
    }, []);

    return (
        <section id="product-page">
            <header>
                <h2>Our Menu</h2>
            </header>
            {menu.length ? (
                <section className="product__listing">
                    {menu.map((item, index) => {
                        const { display } = item;
                        const { displayName, images, flag, profiles } = display;
                        return (
                            <div key={index} className="product__listing-item">
                                <div className="listing__item-image">
                                    <img
                                        src={
                                            images
                                                ? images[0]
                                                : profiles[0].pictureUrl
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="listing__Item-info">
                                    <h3>
                                        {displayName
                                            ? displayName
                                            : profiles[0].displayName}
                                    </h3>
                                    <h4>32.44$</h4>
                                    <p>{flag}</p>
                                </div>
                            </div>
                        );
                    })}
                </section>
            ) : (
                "loading"
            )}
        </section>
    );
};

export default Product;
