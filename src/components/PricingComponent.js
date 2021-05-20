import React from 'react'
import styles from './PricingComponent.module.scss';
import Billing from './Billing'

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
        activeValue: '2',
        yearlyBilling: false
    }

  
    changeRange = (e) => {
        this.setState({
            activeValue: e.target.value
            
        }, function() {
            const sliderProgress = 'hsl(174, 77%, 80%)';
            const sliderBackground = 'hsl(224, 65%, 95%)';
        
            const breakpoint = `${Number(this.state.activeValue) * 25}%`;
        
            e.target.style.backgroundImage = 
                `linear-gradient(90deg, 
                ${sliderProgress} ${breakpoint}, 
                ${sliderBackground} ${breakpoint})`;
            console.log(this.state.activeValue)
        })
    }

    changeBilling = (data) => {
     
     if(data === true) {
         console.log("prawda")
     } else {
         console.log("nieprawda")
     }
            
     
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <span className={styles.views}>{pricePerViewsValues[this.state.activeValue].amount} pageviews</span>
                    <p className={styles.price}>{pricePerViewsValues[this.state.activeValue].price}<span className={styles.price__month}>/month</span></p>
                </div>
                <input className={styles.range} id="range" value={this.state.activeValue} onChange={this.changeRange} type="range" min="0" max="4" step="1" />
                <Billing changeBilling={this.changeBilling} />
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

 