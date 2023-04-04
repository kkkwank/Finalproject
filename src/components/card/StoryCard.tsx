import "../../css/cardAnimation.css";
import { useAppDispatch } from "../../redux/store";
import { StateSelector, nextState } from "../../redux/stateSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const StateReducer = useSelector(StateSelector);
  let newProps = (props as NewType).data;
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const myStyle = {
    backgroundImage: `url(${newProps})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  useEffect(() => {});
  return (
    <div className="flex flex-col h-screen max-w-screen justify-center items-center">
      <div className={`w-full h-full ${fadeType}`} style={myStyle}>
        <div className={`fixed bottom-0 right-0 `}>
          <button
            onClick={() => {
              setFadeType("fade-out-image");
              console.log(StateReducer.state);
              if (StateReducer.state === 0) {
                setFadeType("fade-in-image");
              }
              dispatch(nextState());
            }}
          >
            <p
              id="storybutton"
              className="font-FCmar text-white text-3xl space-x-0.5"
            >
              ต่อไป<span className="text-2xl">→</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
