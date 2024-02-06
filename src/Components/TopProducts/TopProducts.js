import React, { useState } from 'react';
import styles from './TopProducts.module.css';
import FirstTab from './Tabs/FirstTab';
import SecondTab from './Tabs/SecondTab';

const TopProducts = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    
    return (
        <div className={styles.TopProductPageWrapper}>
            <div className={styles.MainHeading}>
                <h1>Top Selling Products</h1>
            </div>

            <div className={styles.Tab}>
                <ul className={styles.TabList}>
<li
    className={`${styles.AllTab} ${activeTab === "Enriched Eggs" ? styles.Tab : ""}`}
    onClick={() => handleTabChange("tab1")}
>
    Enriched Eggs
</li>
<li
    className={`${styles.AllTab} ${activeTab === "Organic Eggs" ? styles.Tab : ""}`}
    onClick={() => handleTabChange("tab2")}
>
    Organic Eggs
</li>
<li
    className={`${styles.AllTab} ${activeTab === "Regular Eggs" ? styles.Tab : ""}`}
    onClick={() => handleTabChange("tab3")}
>
    Regular Eggs
</li>
<li
    className={`${styles.AllTab} ${activeTab === "Organic Chicken" ? styles.Tab : ""}`}
    onClick={() => handleTabChange("tab4")}
>
    Organic Chicken
</li>

                </ul>

                <div className="outlet">
                    {activeTab === "tab1" ? <FirstTab /> : null}
                    {activeTab === "tab2" ? <SecondTab /> : null}
                    {activeTab === "tab3" ? <FirstTab/> : null}
                    {activeTab === "tab4" ? <SecondTab/> : null}
                </div>
            </div>
        </div>
    );
};

export default TopProducts;
