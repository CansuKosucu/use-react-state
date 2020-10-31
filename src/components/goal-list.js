const GoalList = (props) => {
  return (
    <ul className="list-goals">
      {props.goals.map((goal) => (
        <li key={goal.id}>{goal.text}</li>
      ))}
    </ul>
  );
};

export default GoalList;
