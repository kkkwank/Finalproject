import { nextState } from "../../redux/stateSlice";
import { useAppDispatch } from "../../redux/store";

export interface IButtonProps {
 inputdata:string
}

export default function Button(props: IButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <button className="border rounded-lg w-52 h-14 bg-neutral-800 text-white" onClick={() => {
      if(props.inputdata==="") alert("Please fill data")
      else dispatch(nextState())
    }
    } >
     <p className="font-FC Marshmallow text-2xl">ต่อไป</p> 
    </button>
  );
}
