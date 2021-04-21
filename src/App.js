import PricingComponent  from './components/PricingComponent.js'
import styles from'./App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h1 className={styles.title}>Simple, traffic-based pricing</h1>
        <p className={styles.text}>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <PricingComponent />
    </div>
  );
}

export default App;
