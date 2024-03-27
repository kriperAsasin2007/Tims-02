import { useState } from "react";
import BarChart from "../charts/BarChart";
import BinomialDistCheck from "../distributionsCheks/BinomialDistCheck";

import task2 from '../data/task2.json';

import '../styles/binomial.css'

const {xi, ni} = task2;

// Мій варік 2 завд

// const xi = [0,1,2,3,4,5,6,7,8];
// const ni = [0,3,10,49,136,259,295,201,51];

// З пари біноміальний
// const xi = [0,1,2,3,4,5,6,7];
// const ni = [4,23,31,23,11,5,2,1];

// Check Nazar
// const xi = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// const ni = [0, 3, 9, 47, 140, 263, 289, 198, 52];

const chiSquaredTable = {
    1: { 0.01: 6.6, 0.025: 5.0, 0.05: 3.8, 0.95: 0.0039, 0.975: 0.00098, 0.99: 0.00016 },
    2: { 0.01: 9.2, 0.025: 7.4, 0.05: 6.0, 0.95: 0.103, 0.975: 0.051, 0.99: 0.020 },
    3: { 0.01: 11.3, 0.025: 9.4, 0.05: 7.8, 0.95: 0.352, 0.975: 0.216, 0.99: 0.115 },
    4: { 0.01: 13.3, 0.025: 11.1, 0.05: 9.5, 0.95: 0.711, 0.975: 0.484, 0.99: 0.297 },
    5: { 0.01: 15.1, 0.025: 12.8, 0.05: 11.5, 0.95: 0.831, 0.975: 0.554, 0.99: 0.351 },
    6: { 0.01: 16.8, 0.025: 14.4, 0.05: 12.6, 0.95: 1.64, 0.975: 1.24, 0.99: 0.872 },
    7: { 0.01: 18.5, 0.025: 16.0, 0.05: 14.1, 0.95: 2.17, 0.975: 1.69, 0.99: 1.24 },
    8: { 0.01: 20.1, 0.025: 17.5, 0.05: 15.5, 0.95: 2.73, 0.975: 2.18, 0.99: 1.65 },
    9: { 0.01: 21.7, 0.025: 19.0, 0.05: 16.9, 0.95: 2.70, 0.975: 2.09, 0.99: 1.65 },
    10: { 0.01: 23.2, 0.025: 20.5, 0.05: 18.3, 0.95: 3.94, 0.975: 3.25, 0.99: 2.56 },
    11: { 0.01: 24.7, 0.025: 21.9, 0.05: 19.7, 0.95: 4.57, 0.975: 3.82, 0.99: 3.05 },
    12: { 0.01: 26.2, 0.025: 23.3, 0.05: 21.0, 0.95: 5.23, 0.975: 4.40, 0.99: 3.57 },
    13: { 0.01: 27.7, 0.025: 24.7, 0.05: 22.4, 0.95: 5.89, 0.975: 5.01, 0.99: 4.11 },
    14: { 0.01: 29.1, 0.025: 26.1, 0.05: 23.7, 0.95: 6.57, 0.975: 5.63, 0.99: 4.66 },
    15: { 0.01: 30.6, 0.025: 27.5, 0.05: 25.0, 0.95: 7.26, 0.975: 6.26, 0.99: 5.23 },
    16: { 0.01: 32.0, 0.025: 28.8, 0.05: 26.3, 0.95: 7.96, 0.975: 6.91, 0.99: 5.81 },
    17: { 0.01: 33.4, 0.025: 30.2, 0.05: 27.6, 0.95: 8.67, 0.975: 7.56, 0.99: 6.41 },
    18: { 0.01: 34.8, 0.025: 31.5, 0.05: 28.9, 0.95: 9.39, 0.975: 8.23, 0.99: 7.01 },
    19: { 0.01: 36.2, 0.025: 32.9, 0.05: 30.1, 0.95: 10.1, 0.975: 8.91, 0.99: 7.63 },
    20: { 0.01: 37.6, 0.025: 34.2, 0.05: 31.4, 0.95: 10.9, 0.975: 9.59, 0.99: 8.26 },
    21: { 0.01: 38.9, 0.025: 35.5, 0.05: 32.7, 0.95: 11.6, 0.975: 10.3, 0.99: 8.90 },
    22: { 0.01: 40.3, 0.025: 36.8, 0.05: 33.9, 0.95: 12.3, 0.975: 11.0, 0.99: 9.54 },
    23: { 0.01: 41.6, 0.025: 38.1, 0.05: 35.2, 0.95: 13.1, 0.975: 11.7, 0.99: 10.2 },
    24: { 0.01: 43.0, 0.025: 39.4, 0.05: 36.4, 0.95: 13.8, 0.975: 12.4, 0.99: 10.9 },
    25: { 0.01: 44.3, 0.025: 40.6, 0.05: 37.7, 0.95: 14.6, 0.975: 13.1, 0.99: 11.5 },
    26: { 0.01: 45.6, 0.025: 41.9, 0.05: 38.9, 0.95: 15.4, 0.975: 13.8, 0.99: 12.2 },
    27: { 0.01: 47.0, 0.025: 43.2, 0.05: 40.1, 0.95: 16.2, 0.975: 14.6, 0.99: 12.9 },
    28: { 0.01: 48.3, 0.025: 44.5, 0.05: 41.3, 0.95: 16.9, 0.975: 15.3, 0.99: 13.6 },
    29: { 0.01: 49.6, 0.025: 45.7, 0.05: 42.6, 0.95: 17.7, 0.975: 16.0, 0.99: 14.3 },
    30: { 0.01: 50.9, 0.025: 47.0, 0.05: 43.8, 0.95: 18.5, 0.975: 16.8, 0.99: 15.0 },
  };

const statData = {
    labels: xi,
    datasets: [{
      label: 'Гістограма частот',
      data: ni,
    }]
  }


const BinomialDistForm = () => {
    const [alpha, setAlpha] = useState(null);
    const [p, setP] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const handleAlphaChange = (e) => {
        setAlpha(e.target.value);
        setShowResults(false);
    }

    const handlePChange = (e) => {
        setP(e.target.value);
        setShowResults(false);
    }

    const handleCheckClick = (e) => {
        e.preventDefault();
    
        setShowResults(true);
    }

    return ( 
        <div className='binomial-dist-form-container'>
            <form className="binomial-dist-form">
          
                <div className='p-container'>
                    <p>Введіть p</p>
                    <input value={p}
                    onChange={handlePChange}></input>
                </div>
        
                <div className='alpha-container'>
                    <p>Введіть α</p>
                    <input value={alpha}
                    onChange={handleAlphaChange}></input>
                </div>
                
                <button className="submit-btn" onClick={handleCheckClick} type='submit'>Перевірити</button>
            </form>

            {showResults &&
            <div className='result-container'>
                <div className='bar-container'>
                    <BarChart data={statData} />
                </div>
                
                <BinomialDistCheck _p={p} _alpha={alpha} xi={xi} ni={ni} chiSquaredTable={chiSquaredTable} />
            </div>
            }
        </div>
     );
}
 
export default BinomialDistForm;