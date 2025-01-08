import './App.css';
import backgroundImage from './assets/polka-dots.png';
import { FunctionCardComponent } from './components/function-card';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <FunctionCardComponent/>
    </div>
  );
}

export default App;
