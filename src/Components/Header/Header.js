import React from 'react'
import styles from "./Header.module.css"
import HeroSectionImg from '../../assessts/HeroSectionImg.svg'

const Header = () => {
  return (
    <div className={`${styles.Herocontainer}`}>

        <div className={`${styles.HeroText}`}>

<p>No. 1 Egg Poultry Farm in Dubai</p>
<h1>Freshest Eggs & Chicken in Town</h1>

<div className={`${styles.HeroButtons}`}>
   <a href='#' >SHOP EGGS</a>
   <a href='#'>SHOP CHICKEN</a>    
</div>

        </div>
<div className={`${styles.HeroImage}`}>
<img src={HeroSectionImg} alt="image"/>

</div>


    </div>
  )
}

export default Header