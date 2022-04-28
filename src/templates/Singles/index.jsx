import { useSelector } from "react-redux";
import { initialState } from "../../redux/reducer/initialState";

export const SongsPage= () => {

    const singles = useSelector((initialState) => initialState.singles)
 
console.log(singles);

  return(
    <h1>ola</h1>
  );
};
