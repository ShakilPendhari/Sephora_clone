import './App.css';
// import CartPage from './Components/CartPage/CartPage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/Allroutes';
// import Register from './Routes/Register/Register';


function App() {
  return (
    <div className="App">
        {/* <Register/> */}
        {/* <CartPage/> */}
        <Navbar/>
        <AllRoutes/>
       <Footer/>
    </div>
  );
}

export default App;
