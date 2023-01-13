import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.reducerFn.counter);
  console.log(counter);
  const increment = () => {
    dispatch({ type: "INC" });
  }
  const decrement = () => {
    dispatch({ type: "DEC" });
  }
  return (
    <div className="App">
      <h1>Counter Challenge</h1>
      <h4>{counter}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
