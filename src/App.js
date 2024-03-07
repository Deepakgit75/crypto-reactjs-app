import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App bg-slate-400 max-w-screen-2xl">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
