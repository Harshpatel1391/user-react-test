import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import Counter from './components/Counter';
import RestApp from './components/RestApp';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <MainApp></MainApp>
      <Counter></Counter>
      <RestApp></RestApp>
    </div>
  );
}

export default App;
