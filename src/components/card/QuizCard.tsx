import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateSelector } from "../../redux/stateSlice";
import AgeCard from "./AgeCard";

import Button from "./Button";
import NameCard from "./NameCard";

export interface IQuizCardProps {
  head: string;
  body: string[];
  datalen: number;
}

export default function QuizCard(props: IQuizCardProps) {
  const StateReducer = useSelector(StateSelector);

  const [programComponent, setProgramComponent] = useState(<div></div>);
  useEffect(() => {
    if (StateReducer.state === 0) {
      setProgramComponent(
        <NameCard head={props.head} body={props.body}></NameCard>
      );
    } else if (StateReducer.state === 1) {
      setProgramComponent(
        <AgeCard head={props.head} body={props.body}></AgeCard>
        
      );
    } else if (StateReducer.state < props.datalen) {
      setProgramComponent(
        <div
          id="Card"
          className="grid grid-rows-2  h-screen  w-4/6 sm:w-2/6 md:w-3/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 3xl:w-2/6 bg-white"
        >
          <p className="text-rose-600 font-IBMP text-3xl place-self-center">{props.head}</p>
          <div className="flex flex-col items-center self-start gap-6">
            {Object.values(props.body[0]).map((content, idx) => {
              return <Button content={content} key={idx}></Button>;
            })}
          </div>
        </div>
      );
    }
  }, [StateReducer.state,programComponent]);

  return (
    <div className="flex h-screen max-w-screen justify-center items-center">
      {programComponent}
    </div>
  );
}
