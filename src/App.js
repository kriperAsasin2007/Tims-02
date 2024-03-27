import { useState } from 'react';
import './App.css';
import NormalDistForm from './forms/NormalDistForm';
import BinomialDistForm from './forms/BinomialDistForm';





function App() {
  
  const [selectedLaw, setSelectedLaw] = useState(null);

  

  const handleSelectedLaw = (e) => {
    setSelectedLaw(e.target.value);
  }

  return (
    <div className="App">
      <select className='select-law' name='select-law' value={selectedLaw} onChange={handleSelectedLaw}>
            <option value="">Оберіть закон</option>
            <option value="normal">Нормальний закон</option>
            <option value="binomial">Біноміальний закон</option>
          </select>
      { selectedLaw === 'normal' && <div className='normal-law-container'>
        <NormalDistForm />
      </div>}

      { selectedLaw === 'binomial' && <div className='binomial-law-container'>
        <BinomialDistForm />
      </div>}
      
      
    </div>
  );
}

export default App;
