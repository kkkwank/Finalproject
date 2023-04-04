import { useSelector } from "react-redux";
import { StateSelector } from "../redux/stateSlice";
import Card from "./card/Card";
import Particle from "./particle/Particle";
import Result from "./result/Result";
import { journey } from "./data/journey";
import { useEffect } from "react";
import { story } from "./data/story";

export interface IProgramProps {}

export default function Program(props: IProgramProps) {
  const StateReducer = useSelector(StateSelector);
useEffect(()=>{
  //force load image
  for (const [key, value] of Object.entries(story)) {
    const img = new Image();
    img.src = value.data;
  }
},[])
  return (
    <div>
      {StateReducer.state < journey.length ? <Card /> : <Result />}
      {/* <div id="backgroundParticle">
        <Particle></Particle>
      </div> */}
    </div>
  );
}
