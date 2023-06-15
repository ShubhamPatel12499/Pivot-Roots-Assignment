import './App.css';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Routes/allRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dropdown/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
