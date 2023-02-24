import * as React from "react";
import QuizCard from "./QuizCard";
import { journey } from "../data/journey";
import { useSelector } from "react-redux";
import { StateSelector } from "../../redux/stateSlice";
import StoryCard from "./StoryCard";
export interface ICardProps {}

export default function Card(props: ICardProps) {
  const StateReducer = useSelector(StateSelector);
  const [type, setType] = React.useState(journey[StateReducer.state].type);
  const [CardState, setCardState] = React.useState(<div></div>);
  React.useEffect(() => {
    setType(journey[StateReducer.state].type);
    if (type === "question") {
      setCardState(<QuizCard data={journey[StateReducer.state].data} />);
    } else if (type === "story") {
      setCardState(<StoryCard data={journey[StateReducer.state].data} />);
    }
    // console.log(type);
    // console.log(journey[StateReducer.state].type);
  }, [StateReducer.state, type]);

  return CardState;
}
