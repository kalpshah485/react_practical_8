import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <div className="App">
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
