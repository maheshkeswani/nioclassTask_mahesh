import { MathJaxContext } from 'better-react-mathjax';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <MathJaxContext>
      <Navbar/>
      </MathJaxContext>
    </div>
  );
}

export default App;
