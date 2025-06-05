import './App.css';
import Header from './Components/Header/Header';
import Extra from './Components/Extra/Extra';
import Companies from './Components/Companies/Companies';
import Residencies from './Residencies/Residencies';

function App() {
  return (
    <div className="App">
      <div>
     <Header/>
     <Extra/>
    </div>
    <Companies/>
    <Residencies/>
    </div>
  );
}

export default App;
