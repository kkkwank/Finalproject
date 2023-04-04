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
      setDbgpath('./assets/card/card4.jpg')
    }
    else if(ResultReducer[2]>ResultReducer[1] && ResultReducer[2]>ResultReducer[3] && ResultReducer[2]>ResultReducer[4] && ResultReducer[2]>ResultReducer[5])
    {
      setDbgpath('./assets/card/card3.jpg')
    }
    else if(ResultReducer[3]>ResultReducer[1] && ResultReducer[3]>ResultReducer[2] && ResultReducer[3]>ResultReducer[4] && ResultReducer[3]>ResultReducer[5])
    {
      setDbgpath('./assets/card/card2.jpg')
    }
    else if(ResultReducer[4]>ResultReducer[1] && ResultReducer[5]>ResultReducer[3] && ResultReducer[4]>ResultReducer[2] && ResultReducer[4]>ResultReducer[5])
    {
      setDbgpath('./assets/card/card1.jpg')
    }
    else
    {
      setDbgpath('./assets/card/card1.jpg')
    }
    console.log(Dbgpath);
  }, [])
  
  const myStyle = {
    backgroundImage: `url(${Dbgpath})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="flex flex-col h-screen max-w-screen justify-center items-center bg-gray-700 space-y-5">
      <div
        id="Quiz"
        className=" h-5/6 w-5/6 "
        style={myStyle}
      >
    </div>
    <div className=''>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4z9zr_4n4nvmc6_5QEMDA4g2sUZeXldRzPc5H2csg61b_Xw/viewform" className=' font-FCmar text-3xl text-white bg-black rounded-lg px-2'>แบบประเมินความพอใจ</a>
    </div>
    </div>
  );
}
