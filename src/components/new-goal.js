import React, { useState } from "react";
import "./new-goal.css";

const NewGoal = (props) => {
  const [entered, setEntered] = useState('');

  const addGoalHandler = (e) => {
    e.preventDefault();

    const goal = {
      id: Math.random().toString(),
      text: entered,
    };

    setEntered('');
    props.addNewGoal(goal);
  };

  const textChangeHandler = (e) => {
    setEntered(e.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={entered} onChange={textChangeHandler} />
      <button type="submit">Add Goal!</button>
    </form>
  );
};

export default NewGoal;
