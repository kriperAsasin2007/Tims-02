import { useState } from 'react';
import './App.css';
import NormalDistForm from './forms/NormalDistForm';





function App() {
  
  const [selectedLaw, setSelectedLaw] = useState(null);

  

  const handleSelectedLaw = (e) => {
    setSelectedLaw(e.target.value);
  }

  return (
    <div className="App">
      <select name='select-law' value={selectedLaw} onChange={handleSelectedLaw}>
            <option value="">Оберіть закон</option>
            <option value="normal">Нормальний закон</option>
            <option value="exponential">Показниковий закон</option>
          </select>
      { selectedLaw === 'normal' && <div className='normal-law-container'>
        <NormalDistForm />
      </div>}
      
      
    </div>
  );
}

export default App;
