import logo from './logo.svg';
import './App.css';
import Clock from './components/pure/cycles';
import AllCycles from './components/hooks/allCycles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Clock></Clock> */}
        <AllCycles></AllCycles>
      </header>
    </div>
  );
}

export default App;
