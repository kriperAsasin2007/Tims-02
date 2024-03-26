import './App.css';
import NormalDistCheck from './distributionsCheks/NormalDistCheck';

const intervals = [[90,94], [94,98], [98,102], [102,106], [106,110]];
const ni = [4,24,30,30,12];

// const intervals = [[0,6], [6,12], [12,18], [18,24], [24,30], [30,36], [36,42]];
// const ni = [115,51,18,9,4,2,1];

function App() {
  return (
    <div className="App">

      <NormalDistCheck a={1} sigma={2} intervals={intervals} ni={ni} />
    </div>
  );
}

export default App;
