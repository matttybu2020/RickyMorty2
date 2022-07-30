import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Characters from "./components/Characters.jsx";
import CharactersDetail from "./components/CharactersDetail.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Order from "./components/Order.jsx";
import addCharacter from "./components/AddCharacter.jsx";
import Landing from "./components/Landing";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       
        <Route exact path="/add" component={addCharacter} />
        <Route  exact path="/:id" component={CharactersDetail} />
        <Route  exact path="/home" component={Landing}/>
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/" component={Order} />
        <Route exact path="/" component={Characters} />
      </BrowserRouter>
    </div>
  );
}

export default App;
