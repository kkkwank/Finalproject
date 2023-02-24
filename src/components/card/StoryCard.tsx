import "../../css/cardAnimation.css";
import { useAppDispatch } from "../../redux/store";
import { nextState } from "../../redux/stateSlice";
import { useState } from "react";
export interface IStoryCardProps {
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
interface NewType extends IStoryCardProps {
  data: string;
}
export default function StoryCard(props: IStoryCardProps) {
  const [fadeType, setFadeType] = useState("fade-in-image");
  const dispatch = useAppDispatch();
  let newProps = (props as NewType).data;
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const myStyle = {
    backgroundImage: `url(${newProps})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col h-screen max-w-screen justify-center items-center">
      <div
        className={`bg-white w-1/2 h-screen relative ${fadeType}`}
        style={myStyle}
      >
        <div className="absolute bottom-0 right-0">
          <button
            onClick={async () => {
              setFadeType("fade-out-image");
              await timeout(5000);
              dispatch(nextState());
            }}
          >
            <p className="font-IBMP">ต่อไป</p>
          </button>
        </div>
      </div>
    </div>
  );
}
