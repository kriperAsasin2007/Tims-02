import './App.css';
import NormalDistCheck from './distributionsCheks/NormalDistCheck';

const intervals = [[90,94], [94,98], [98,102], [102,106], [106,110]];
const ni = [4,24,30,30,12];

function App() {
  return (
    <div className="App">

      <NormalDistCheck a={1} sigma={2} intervals={intervals} ni={ni} />
    </div>
  );
}

export default App;
