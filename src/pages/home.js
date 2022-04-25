import React, { useRef, useState, useEffect } from "react";
import images from "../components/images";
import { motion } from "framer-motion";
import Heroimage from "../assets/6.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
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
            why <br /> all of our recipes are always prepared with the freshest
            ingredients available.
          </p>
          <div className="hero-button">
            <Link to="/contact" className="btn-link">
              <Button name="Contact Us" />
            </Link>
          </div>
        </div>
        <div className="hero-image-div">
          <motion.div
            initial={{ scale: 0 }}
            transition={{ delay: 0.1 }}
            animate={{
              scale: [1, 1, 1.5, 1, 1],
              rotate: [0, 360, 360, 360, 0],
            }}
            className="hero-image"
          >
            <img src={Heroimage} alt="hero" />
          </motion.div>
        </div>
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
                return index < 5 ? (
                  <motion.div className="item" key={index}>
                    <img src={image} alt="special offers" />
                    {/* <div class="centered">Centered</div> */}
                  </motion.div>
                ) : null;
              })}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Home;
