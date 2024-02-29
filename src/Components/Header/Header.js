import React from "react";
import styles from "./Header.module.scss";
import HeroSectionImg from "../../assessts/HeroSectionImg.svg";
import Navigation from "../Navigation/Navigation";
import HeroSectionChicken from "../../assessts/HeroSectionChicken.svg";
import HeroEarth from "../../assessts/HeroEarth.svg";

const Header = () => {
  return (
    <div className={`${styles.Herocontainer}`}>
      <Navigation />
      <div className={`${styles.container}`}>
        <div className={`${styles.HeroContent}`}>
          <div className={`${styles.HeroText}`}>
            <p>No. 1 Egg Poultry Farm in Dubai</p>
            <h1>Freshest Eggs & Chicken in Town</h1>

            <div className={`${styles.HeroButtons}`}>
              <a href="#">SHOP EGGS</a>
              <a href="#">SHOP CHICKEN</a>
            </div>

            <div>
              <img
                src={HeroSectionChicken}
                className={`${styles.WeirdChckenImg}`}
                alt="chichken"
              />

              <img
                src={HeroEarth}
                className={`${styles.WeirdEarth}`}
                alt="earth"
              />
            </div>
          </div>
          <div className={`${styles.HeroImage}`}>
            <img src={HeroSectionImg} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
