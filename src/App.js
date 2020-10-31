import React, { useState } from 'react';

import "./App.css";

import GoalList from "./components/goal-list";
import NewGoal from "./components/new-goal";

const App = () => {
  const [dailyGoals,setDailyGoals] = useState([
    { id: "g1", text: "Preparing Test Guide" },
    { id: "g2", text: "Finish React Native Course" },
    { id: "g4", text: "Walking" },
    { id: "g5", text: "Start reading Capital Book" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setDailyGoals((prevDailyGoals) => prevDailyGoals.concat(newGoal));
  };

  return (
    <div>
      <h2 className="daily-goals">Daily Goals</h2>
      <NewGoal addNewGoal={addNewGoalHandler} />
      <GoalList goals={dailyGoals} />
    </div>
  );
};

export default App;
