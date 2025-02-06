import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/3_Footer/Footer"
import Home from "./components/2_Home/Home"
import Navbar from "./components/1_Navbar/Navbar"
import RegisterPage from "./components/1_Navbar/RegisterPage"
import LoginPage from "./components/1_Navbar/LoginPage"

const App = () => {
  return (
  <div>
    <Navbar />
    {/* <Home /> */}
    <RegisterPage />
    {/*<LoginPage />*/}
    <Footer />
  </div>
  );
  };
  export default App;
  