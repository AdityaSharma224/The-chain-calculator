import './App.css';
import backgroundImage from './assets/polka-dots.png';
import { FunctionChain } from './components/function-chain';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <FunctionChain/>
    </div>
  );
}

export default App;
