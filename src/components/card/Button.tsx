import { nextState } from "../../redux/stateSlice";
import { useAppDispatch } from "../../redux/store";

export interface IButtonProps {
 inputdata:string
}

export default function Button(props: IButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => {
      if(props.inputdata==="") alert("Please fill data")
      else dispatch(nextState())
    }
      
    
    } >
     <p className="font-IBMP">ต่อไป</p> 
    </button>
  );
}
