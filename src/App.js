import './App.css';
import Navbars from './components/Navbar';
// import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App bg-slate-900 w-full">
      <Navbars/>
      <Homepage/>
    </div>
  );
}

export default App;
