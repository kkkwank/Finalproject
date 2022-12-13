
import { useSelector } from "react-redux";
import { StateSelector } from "../redux/stateSlice";
import Card from "./card/QuizCard";
import Particle from "./card/Particle";
import { data } from "./data/data";
export interface IProgramProps {}

export default function Program(props: IProgramProps) {
  const StateReducer = useSelector(StateSelector);

  return (
    <div>
      {StateReducer.state < data.length ? (
        <Card
          head={Object.keys(data[StateReducer.state]).toString()}
          body={Object.values(data[StateReducer.state])}
          datalen={data.length}
          key={StateReducer.state}
        ></Card>
      ) : (
        <p>end</p>
      )}
      <div id="backgroundParticle">
        <Particle></Particle>
      </div>
    </div>
  );
}
