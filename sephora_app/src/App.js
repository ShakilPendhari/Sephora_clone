import './App.css';
// import CartPage from './Components/CartPage/CartPage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/Allroutes';
// import Register from './Routes/Register/Register';
import Checkout from './Components/Checkout/Checkout';
import { useContext } from 'react';
import { authContext } from './Context/AuthContext';


function App() {
  const { checkout  } = useContext(authContext);
  return (
  <div className="App">
       
       {
        checkout? <div>
          <Navbar/>
          <AllRoutes/>
        <Footer/>
        </div>:
        <div>
            <Checkout/>
        </div>
       } 
       
      
    </div>
  )
}

export default App;
