import { useState } from "react";
import BarChart from "../charts/BarChart";
import BinomialDistCheck from "../distributionsCheks/BinomialDistCheck";

// Мій варік 2 завд

// const xi = [0,1,2,3,4,5,6,7,8];
// const ni = [0,3,10,49,136,259,295,201,51];

// З пари біноміальний
const xi = [0,1,2,3,4,5,6,7];
const ni = [4,23,31,23,11,5,2,1];

const statData = {
    labels: xi,
    datasets: [{
      label: 'Графік розподілу',
      data: ni,
    }]
  }


const BinomialDistForm = () => {
    const [alpha, setAlpha] = useState(null);
    const [p, setP] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const handleAlphaChange = (e) => {
        setAlpha(e.target.value);
    }

    const handlePChange = (e) => {
        setP(e.target.value);
    }

    const handleCheckClick = (e) => {
        e.preventDefault();
    
        setShowResults(true);
    }

    return ( 
        <div className='binomial-dist-form-container'>
            <form>
          
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
                
                <button onClick={handleCheckClick} type='submit'>Перевірити</button>
            </form>

            {showResults &&
            <div className='result-container'>
                <div className='bar-container'>
                    <BarChart data={statData} />
                </div>
                
                <BinomialDistCheck _p={p} xi={xi} ni={ni} />
            </div>
            }
        </div>
     );
}
 
export default BinomialDistForm;