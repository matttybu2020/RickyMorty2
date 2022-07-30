import Logo from "..//style/img/Logo.gif";
import logo2 from "..//style/img/logo2.gif";
import logo3 from "..//style/img/logo3.gif";
import Rick from "../style/audio/Rick.mp3";
import  style from "../style/module/Landing.module.css";
import {Link} from 'react-router-dom'
export default function Landing() {
  return (
    <>
      <div className="App">
        <Link to="/"><img className={style.logo} src={Logo} alt="" /></Link>
        
      </div>
      <div className="App">
        <img className={style.logo} src={logo2} alt="" />
      </div>
      <div className="App">
        <img className={style.logo} src={logo3} alt="" />
      </div>
      <div>
        <p>
          <h1>Rick and Morty</h1>
        </p>
        <audio controls>
          <source src={Rick} type="audio/mp3"></source>
        </audio>
      </div>
    </>
  );
}
