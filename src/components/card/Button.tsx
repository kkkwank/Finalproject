import { nextState } from "../../redux/stateSlice";
import { useAppDispatch } from "../../redux/store";

export interface IButtonProps {
 
}

export default function Button(props: IButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => 
      
    dispatch(nextState())
    } >
     <p className="font-IBMP">ต่อไป</p> 
    </button>
  );
}
