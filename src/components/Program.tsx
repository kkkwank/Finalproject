
import { useSelector } from "react-redux";
import { StateSelector } from "../redux/stateSlice";
import Card from "./card/Card";
import Particle from "./particle/Particle";
import Result from "./result/Result";
import { journey } from "./data/journey";
import soundfile from './sound/BG_Sound.mp3';
import { useEffect } from "react";
export interface IProgramProps {}

export default function Program(props: IProgramProps) {
  const StateReducer = useSelector(StateSelector);
  const bgsound = new Audio(soundfile)
useEffect(() => {
  bgsound.loop=true
  bgsound.play()
}, )

  return (
    <div>
  
      {StateReducer.state < journey.length ? (
        <Card />
      ) : (
        <Result />
      )}
      {/* <div id="backgroundParticle">
        <Particle></Particle>
      </div> */}
    </div>
  );
}
