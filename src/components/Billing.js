import React, { Component } from 'react'
import styles from './Billing.module.scss';

class Billing extends Component {
    state = {
        value: false
    }

    changeValue = () => {
     this.setState({
         value: !this.state.value
     }, () => this.props.changeBilling(this.state.value))

        
    }
    render() {
   

        return (
            <div className={styles.billing}>
            <span for="monthly" className={styles.info}>Monthly Billing</span>
            <label className={styles.switch}>
                 <input type="checkbox" className={styles.input} defaultChecked={this.state.value} onChange={this.changeValue} />
                 <span className={styles.slider}></span>
             </label>
            <span for="yearly" className={styles.info}>Yearly Billing</span>
            <div className={styles.discount}>25% <span className={styles.percent}>discount</span></div>
         </div>
        )
    }
}


export default Billing;





