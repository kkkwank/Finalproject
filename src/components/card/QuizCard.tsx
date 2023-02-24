import { useEffect, useState } from "react";
import Button from "./Button";
import { useAppDispatch } from "../../redux/store";
import { StateSelector, nextState } from "../../redux/stateSlice";
import { updateResult } from "../../redux/resultSlice";
import { useSelector } from "react-redux";

export interface IQuizCardProps {
  data:
    | string
    | { type: string; text: string; option: string }
    | {
        type: string;
        text: string;
        option: (
          | { text: string; group: string; next?: undefined }
          | { text: string; group: string; next: boolean }
        )[];
      };
}
interface NewType extends IQuizCardProps {
  data:
    | { type: string; text: string; option: string }
    | {
        type: string;
        text: string;
        option: (
          | { text: string; group: string; next?: undefined }
          | { text: string; group: string; next: boolean }
        )[];
      };
}

export default function QuizCard(props: IQuizCardProps) {
  const newProps = (props as NewType).data;
  const Dtext = newProps.text;
  const Dtype = newProps.type;
  const Doption = newProps.option;
  const dispatch = useAppDispatch();
  const [inputZone, setInputZone] = useState<JSX.Element>(<div></div>);
  const StateReducer = useSelector(StateSelector)
  useEffect(() => {
    if (Dtype === "fill") {
      setInputZone(<input type="text" id="name" name="name" required></input>);
    } else if (Dtype === "choice") {
      const newDoption: any = Doption; //{text:string,group:string,next?:boolean}[]

      setInputZone(
        newDoption.map((x: any) => {
          return (
            <button
              onClick={() => {
                dispatch(updateResult(x.group));
                dispatch(nextState());
              }}
            >{x.text}{x.group}</button>
          );
        })
      );
    }
  }, [StateReducer.state]);

  return (
    <div className="flex h-screen max-w-screen justify-center items-center ">
      <div id="Quiz" className="bg-white">
        <span className="">{String(Dtext)}</span>
        <div id="Choice">{inputZone}</div>
        <div id="nextButton" className="bg-white">
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
