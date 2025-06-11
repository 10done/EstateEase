import './App.css';
import Header from './Components/Header/Header';
import Extra from './Components/Extra/Extra';
import Companies from './Components/Companies/Companies';
import Residencies from './Residencies/Residencies';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div>
     <Header/>
     <Extra/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    </div>
  );
}

export default App;
