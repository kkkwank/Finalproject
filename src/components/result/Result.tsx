import * as React from 'react';
import { useSelector } from 'react-redux';
import { ResultSelector } from '../../redux/resultSlice';

export interface IResultProps {
}

export default function Result (props: IResultProps) {
  const ResultReducer = useSelector(ResultSelector);
  return (
    <div className='bg-white'>
     {ResultReducer[1]}
     {ResultReducer[2]}
     {ResultReducer[3]}
     {ResultReducer[4]}
     {ResultReducer[5]}
    </div>
  );
}
