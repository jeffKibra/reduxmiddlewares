import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/actions";

export default function All() {
  const state = useSelector((state) => {
    //console.log(state);
    return state;
  });
  const { value, loading } = state;
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(increase());
  };

  const decreaseHandler = () => {
    dispatch(decrease());
  };

  return (
    <>
      <div>
        {}
        <h4>value : {loading ? <p>loading...</p> : value}</h4>
      </div>
      <button onClick={increaseHandler}>add + </button>
      <button onClick={decreaseHandler}>subtract - </button>
    </>
  );
}
