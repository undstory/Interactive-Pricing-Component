import React from 'react'
import styles from './PricingComponent.module.scss';

const PricingComponent = () => (
    <div className={styles.wrapper}>
        <div className={styles.info}>
            <span className={styles.views}>100k pageviews</span>
            <p className={styles.price}>$16.00 <span className={styles.price__month}>/month</span></p>
        </div>
        <input className={styles.range} type="range" min="0" max="4" step="1" />
        <div>
            <span>Monthly Billing</span>
            <input type="radio"/>
            <span>Yearly Billing</span>
            <span>25% discount</span>
        </div>
        <div>Line</div>
        <div>
            <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
            </ul>
            <button>Start my trial</button>
        </div>
    </div>
)

export default PricingComponent

 