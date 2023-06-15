import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Routes/allRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
