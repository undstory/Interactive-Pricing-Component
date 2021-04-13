import PricingWrapper  from './components/PricingWrapper.js'
import './App.css';

function App() {
  return (
    <div className="app__wrapper">
      <div className="app__info">
        <h1 className="app__title">Simple, traffic-based pricing</h1>
        <p className="app__text">Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <PricingWrapper />
    </div>
  );
}

export default App;
