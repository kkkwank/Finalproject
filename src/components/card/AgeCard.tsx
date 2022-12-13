import * as React from "react";
import Button from "./Button";

export interface IAgeCardProps {
  head: string;
  body: string[];
}

export default function AgeCard(props: IAgeCardProps) {
  const [age, setAge] = React.useState<number>();
  return (
    <div className="grid place-content-center grid-rows-2 h-screen w-4/6 sm:w-2/6 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 3xl:w-2/6 bg-white">
      <div
        id="Card"
        className="flex flex-col items-center justify-center place-self-end  space-y-10"
      >
        <p className="text-gray-900 font-IBMP text-3xl">{props.head}</p>

        <input
         
          type="number"
          inputMode="numeric"
          placeholder=""
          onChange={(e) => {
            setAge(Number(e.target.value));
            if(e.target.value==='0')e.target.value=""
          }}
          className="w-1/2 focus:outline-none border-b-2 text-gray-900 font-IBMP text-center"
          value={Number(age).toString()}
        ></input>
      </div>
      <div className="mt-10">
        {age !== 0 ? <Button content={props.body[0]} key={0}></Button> : <></>}
      </div>
    </div>
  );
}
