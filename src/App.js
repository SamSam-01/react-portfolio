import logo from './logo.svg';
import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
