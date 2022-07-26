import './App.css';
import Logo from "../src/style/img/Logo.gif";
import logo2 from "../src/style/img/logo2.gif"
import logo3 from "../src/style/img/logo3.gif"
import Rick from '../src/style/audio/Rick.mp3'
import style from "../src/style/App.module.css";
function App() {
  return (
    <>
    <div className="App">
    <img className={style.logo} src={Logo} alt="" />
    </div>
    <div className="App">
    <img className={style.logo} src={logo2 } alt="" />
    </div>
    <div className="App">
    <img className={style.logo} src={logo3 } alt="" />
    </div>
    <div>
    <audio src={Rick}></audio>
    </div>
   
    </>
  );
}

export default App;
