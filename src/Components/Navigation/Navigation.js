import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../assessts/logo.svg'
import Menu from '../../assessts/Menu.svg'
import Profile from '../../assessts/Profile.svg'
import Search from '../../assessts/Search.svg'

const Navigation = () => {
    return (
        <div>

            <header>

                <nav className={`${styles.navbar}`}>
                    <a href='/' >
                        <img src={logo} />
                    </a>
                    <ul>
                        <li>OUR PRODUCTS</li>
                        <li>CARE EGGS</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>

                    <div>
                        <div className={`${styles.sideText}`}>
                            <p>Customer Care:</p>
                            <p>+91 9988776655</p>
                        </div>

                        <div className={`${styles.sideImages}`}>
                            <img src={Search} alt="Search" />
                            <img src={Menu} alt="Menu" />
                            <img src={Profile} alt="Profile" />


                        </div>
                    </div>

                </nav>

            </header>

        </div>
    )
}

export default Navigation