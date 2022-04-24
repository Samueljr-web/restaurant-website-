import React, { useRef, useState, useEffect } from "react";
import images from "../components/images";
import { motion } from "framer-motion";
import Heroimage from "../assets/6.png";
import Button from "../components/Button";
import "../styles/home.css";

function Home() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-intro">
          <motion.h2>
            Discover Restaurant <br /> & Delicious Foods
          </motion.h2>
          <p>
            Your gastronomical experience with us is our main priority. This is
            why all of our recipes are always prepared with the freshest
            ingredients available.
          </p>
          <Button name="Contact Us" />
        </div>
        <motion.div
          nitial={{ scale: 0 }}
          transition={{ delay: 0.1 }}
          animate={{ scale: [1, 1, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }}
          className="hero-image"
        >
          <img src={Heroimage} alt="hero" />
        </motion.div>
      </div>
      <div>
        <section className="specialoffers">
          <div className="so">
            <p>
              Same top restaurant For
              <br /> Dining or take away
            </p>
          </div>
          <motion.div className="carousel" ref={carouselRef}>
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel"
            >
              {images.map((image, index) => {
                return (
                  <motion.div className="item" key={index}>
                    <img src={image} alt="special offers" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Home;
