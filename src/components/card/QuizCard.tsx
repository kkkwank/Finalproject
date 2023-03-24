import { useEffect, useRef, useState } from "react";
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
  const [inputdata, setInputdata] = useState("");
  const dispatch = useAppDispatch();
  const StateReducer = useSelector(StateSelector);
  useEffect(() => {
    console.log("state change!!!");

    setInputdata("");
  }, [StateReducer.state]);
  function RenderInputBox() {
    console.log(StateReducer.state);
    if (Dtype === "fill") {
      return (
        <div>
          <input
            className="border w-52 h-14 divide-y" //fill เดี๋ยวมาแก้
            type="text"
            value={inputdata}
            onChange={(e) => setInputdata(e.target.value)}
          />

          <Button inputdata={inputdata}></Button>
        </div>
      );
    } else if (Dtype === "choice") {
      const newDoption: any = Doption; //{text:string,group:string,next?:boolean}[]

      return (
        <div className="flex flex-col space-y-3">
          {newDoption.map((x: any,idx:number) => {
            return (
              <button
              id="quizbutton"
              key={idx}
                className="border rounded-lg w-52 h-14 bg-neutral-800 text-white text-3xl"
                onClick={() => {
                  dispatch(updateResult(x.group));
                  dispatch(nextState());
                }}
              >
                {x.text}
              </button>
            );
          })}
        </div>
      );
    }
  }
  return (
    <div className="flex h-screen max-w-screen justify-center items-center ">
      <div
        id="Quiz"
        className="bg-white flex flex-col h-screen w-1/2 justify-center items-center space-y-5"
      >
        <div className="text-4xl">
          {Dtext?.split("\n").map((value, key) => {
            return (
              <p key={key}>
                {value}
                <br />
              </p>
            );
          })}
        </div>
        <div id="nextButton" className="bg-white">
          {RenderInputBox()}
        </div>
      </div>
    </div>
  );
}
