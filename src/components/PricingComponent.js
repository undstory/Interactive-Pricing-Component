import React from 'react'
import styles from './PricingComponent.module.scss';

const pricePerViewsValues = [
    {
        amount: '10K', 
        price: '$8.00'
    },
    {
        amount: '50K', 
        price: '$12.00'
    },
    {
        amount: '100K', 
        price: '$16.00'
    },
    {
        amount: '500K', 
        price: '$24.00'
    },
    {
        amount: '1M', 
        price: '$36.00'
    }
]


class PricingComponent extends React.Component {

    state = {
        activeValue: '2'
    }

    changeRange = (e) => {
        this.setState({
            activeValue: e.target.value
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <span className={styles.views}>{pricePerViewsValues[this.state.activeValue].amount} pageviews</span>
                    <p className={styles.price}>{pricePerViewsValues[this.state.activeValue].price}<span className={styles.price__month}>/month</span></p>
                </div>
                <input className={styles.range} id="range" value={this.state.activeValue} onChange={this.changeRange} type="range" min="0" max="4" step="1" />
                <div className={styles.billing}>
                    <span className={styles.billing__period}>Monthly Billing</span>
                    <input type="radio"/>
                    <input type="radio"/>
                    <span className={styles.billing__period}>Yearly Billing</span>
                    <span className={styles.billing__discount}>25% discount</span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.info}>
                    <ul className={styles.info__list}>
                        <li className={styles.info__item}>Unlimited websites</li>
                        <li className={styles.info__item}>100% data ownership</li>
                        <li className={styles.info__item}>Email reports</li>
                    </ul>
                    <button className={styles.info__btn}>Start my trial</button>
                </div>
            </div>
        )
    }
}

export default PricingComponent

 