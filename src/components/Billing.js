import React from 'react'
import styles from './Billing.module.scss';

const Billing = () => (
    <div className={styles.billing}>
       <span for="monthly" className={styles.info}>Monthly Billing</span>
       <label className={styles.switch}>
            <input type="checkbox" className={styles.input} />
            <span className={styles.slider}></span>
        </label>
       <span for="yearly" className={styles.info}>Yearly Billing</span>
       <span className={styles.discount}>25% discount</span>
    </div>
)


export default Billing;


/* <input id="monthly"  name="billing" value="monthly" type="radio" className={styles.input} checked />
<label for="monthly" className={styles.label}>Monthly Billing</label>

<input id="yearly" value="yearly" type="radio" className={styles.input} />
<label for="yearly" className={styles.label}>Yearly Billing</label>
<span className={styles.discount}>25% discount</span> */