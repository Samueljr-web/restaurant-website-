import React, { useEffect, useState } from "react";

import "../styles/products.css";

const Product = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      params: { limit: "26", start: "0" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      },
    };
    const fetchFood = async () => {
      const res = await fetch(
        "https://yummly2.p.rapidapi.com/feeds/list",
        options
      );
      const data = await res.json();
      setMenu(data.feed);
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
                    src={images ? images[0] : profiles[0].pictureUrl}
                    alt=""
                  />
                </div>
                <div className="listing__Item-info">
                  <h3>
                    {displayName
                      ? `${displayName.slice(0, 40)}${
                          displayName.length > 40 ? "..." : ""
                        }`
                      : `${display.title.slice(0, 40)}${
                          display.title.length > 40 ? "..." : ""
                        }`}
                  </h3>
                  <h4>
                    ₦ {Math.round((Math.random() * 4000) / 1000) * 1000 + 1500}
                  </h4>
                  <p>
                    {flag
                      ? flag.replace("Yummly", "Food City")
                      : "Recommended by Food City"}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <div className="spinner-container">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Product;
