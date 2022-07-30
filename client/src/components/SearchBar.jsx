import { useState } from "react";
import { searchCharacters } from "../store/actions";
import { useDispatch } from "react-redux";

/*export default function SearchBar() {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch()


  const handleInputChanget =(e) =>{
    e.preventDefault()
    setSearch(e.target.value);
  }

  const handleSubmit=(e) => {
    e.preventDefault();
    dispatch(searchCharacters(search))
  }
  
 
  return (
<div>
<input className="search1" type="text" onChange= {(e) =>  handleInputChanget(e)} placeholder="Buscar ..."
/>
<button className="boton" type="submit" onClick= {(e) => handleSubmit(e)}> Buscar </button>
</div>
  )

}*/

export default function SearchBar() {
  const [search, setSearch] = useState({});
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchCharacters(search));
  }
  
  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return  (<>
  
  <input type="text" onChange={(e) => onInputChange (e)}  />
  <button onSubmit={onSubmit} type="submit" value={search} >buscar</button>

  </>
   );
  
}
