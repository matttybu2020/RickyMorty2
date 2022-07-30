import { useDispatch } from "react-redux";
//import { useEffect , useState } from "react";
import { DESCENDENTE, ASCENDENTE } from "../constantes/sort";
import { sort } from "../store/actions/index";

export default function Order() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(sort(e.target.value));
  }

  return (
    <select name="select" onChange={onSelectChange}>
      <option value={ASCENDENTE}>ascendente</option>
      <option value={DESCENDENTE} selected>
        descendete
      </option>
    </select>
  );
}

/*seEffect(() => {
  dispatch(sort(order))
}, [order])

function onSelectChange(e) {
  setOrder(sort(e.target.value))
}*/
