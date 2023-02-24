
import { useSelector } from "react-redux";
import { StateSelector } from "../redux/stateSlice";
import Card from "./card/Card";
import Particle from "./particle/Particle";
import { question } from "./data/question";
import Result from "./result/Result";
export interface IProgramProps {}

export default function Program(props: IProgramProps) {
  const StateReducer = useSelector(StateSelector);

  return (
    <div>
      {StateReducer.state < question.length ? (
        <Card />
      ) : (
        <Result />
      )}
      <div id="backgroundParticle">
        <Particle></Particle>
      </div>
    </div>
  );
}
