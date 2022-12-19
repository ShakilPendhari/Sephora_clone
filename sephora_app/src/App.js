import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Theme from './Components/Theme';
import SignIn from './Routes/SignIn/SignIn';

function App() {
  return (
    <div className="App">
     <Theme/>
     <Navbar/>
    {/* <SignIn/> */}
    {/* <Footer/> */}
    </div>
  );
}

export default App;
