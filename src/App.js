
import './App.css';
import BillCalculator from './Components/BillCalculator';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <h1 className='my-4'>Bill Calculation</h1>
      <BillCalculator />
      <hr />
      <h1 className='my-4'>News</h1>
      <News />
    </div>
  );
}

export default App;
