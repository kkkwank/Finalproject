import * as React from 'react';
import { useSelector } from 'react-redux';
import { ResultSelector } from '../../redux/resultSlice';
import { useEffect } from 'react';

export interface IResultProps {
}

export default function Result (props: IResultProps) {
  const ResultReducer = useSelector(ResultSelector);
  const [Dbgpath, setDbgpath] = React.useState("")
  
  useEffect(() => {
    if(ResultReducer[1]>ResultReducer[2] && ResultReducer[1]>ResultReducer[3] && ResultReducer[1]>ResultReducer[4] && ResultReducer[1]>ResultReducer[5])
    {
      setDbgpath('./assets/card/card1.jpg')
    }
    else if(ResultReducer[2]>ResultReducer[1] && ResultReducer[2]>ResultReducer[3] && ResultReducer[2]>ResultReducer[4] && ResultReducer[2]>ResultReducer[5])
    {
      setDbgpath('./assets/card/card2.jpg')
    }
    else if(ResultReducer[3]>ResultReducer[1] && ResultReducer[3]>ResultReducer[2] && ResultReducer[3]>ResultReducer[4] && ResultReducer[3]>ResultReducer[5])
    {
      setDbgpath('./assets/card/card3.jpg')
    }
    else if(ResultReducer[4]>ResultReducer[1] && ResultReducer[5]>ResultReducer[3] && ResultReducer[4]>ResultReducer[2] && ResultReducer[4]>ResultReducer[5])
    {
      setDbgpath('./assets/card/card4.jpg')
    }
    else
    {
      setDbgpath('./assets/card/card5.jpg')
    }
    console.log(Dbgpath);
  }, [])
  
  const myStyle = {
    backgroundImage: `url(${Dbgpath})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="flex h-screen max-w-screen justify-center items-center ">
      <div
        id="Quiz"
        className="bg-white flex flex-col h-full w-full justify-center items-center space-y-5"
        style={myStyle}
      >
    </div>
    </div>
  );
}
