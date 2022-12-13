import * as React from "react";
import Button from "./Button";

export interface INameCardProps {
  head: string;
  body: string[];
}

export default function NameCard(props: INameCardProps) {
  const [name, setName] = React.useState("");
  return (
      <div className="grid place-content-center grid-rows-2 h-screen w-4/6 sm:w-2/6 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 3xl:w-2/6 bg-white">
    <div
      id="Card"
      className="flex flex-col items-center justify-center place-self-end  space-y-10"
    >
      <p className="text-gray-900 font-IBMP text-3xl">{props.head}</p>

      <input
        type="text"
        placeholder="ชื่อของคุณ"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="w-full focus:outline-none border-b-2 text-gray-900 font-IBMP text-center"
        value={name}
      ></input>

      
    </div>
    <div className="mt-10">
    {name !== "" ? <Button content={props.body[0]} key={0}></Button> : <></>}
    </div>
    </div>
  );
}
