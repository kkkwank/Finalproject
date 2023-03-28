import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useAppDispatch } from "../../redux/store";
import { StateSelector, nextState } from "../../redux/stateSlice";
import { updateResult } from "../../redux/resultSlice";
import { useSelector } from "react-redux";

export interface IQuizCardProps {
  data:
    | string
    | { type: string; text: string; option: string; bgpath: string }
    | {
        type: string;
        text: string;
        option: (
          | { text: string; group: string; next?: undefined }
          | { text: string; group: string; next: boolean }
        )[];
        bgpath: string;
      };
}
interface NewType extends IQuizCardProps {
  data:
    | { type: string; text: string; option: string; bgpath: string }
    | {
        type: string;
        text: string;
        option: (
          | { text: string; group: string; next?: undefined }
          | { text: string; group: string; next: boolean }
        )[];
        bgpath: string;
      };
}

export default function QuizCard(props: IQuizCardProps) {
  const newProps = (props as NewType).data;
  const Dtext = newProps.text;
  const Dtype = newProps.type;
  const Doption = newProps.option;
  const Dbgpath = newProps.bgpath;
  const [inputdata, setInputdata] = useState("");
  const dispatch = useAppDispatch();
  const StateReducer = useSelector(StateSelector);
  useEffect(() => {
    console.log("state change!!!");
    setInputdata("");
  }, [StateReducer.state]);
  const myStyle = {
    backgroundImage: `url(${Dbgpath})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  function RenderInputBox() {
    console.log(StateReducer.state);
    if (Dtype === "fill") {
      return (
        <div>
          <input
            className="border w-52 h-14 divide-y bg-transparent font-FCmar"
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
          {newDoption.map((x: any, idx: number) => {
            return (
              <button
                id="quizbutton"
                key={idx}
                className="border rounded-lg w-52 h-14 bg-neutral-800 text-white text-3xl font-FCmar"
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
        className="bg-white flex flex-col h-full w-full justify-center items-center space-y-5"
        style={myStyle}
      >
        <div className="text-4xl bg-transparent">
          {Dtext?.split("\n").map((value, key) => {
            return (
              <p key={key} className="font-FCmar">
                {value}
                <br />
              </p>
            );
          })}
        </div>
        <div id="nextButton" className="bg-transparent">
          {RenderInputBox()}
        </div>
      </div>
    </div>
  );
}
