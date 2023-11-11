export const Goals = ({ goalData }) => {
  return (
    <div>
      <p>{goalData.title}</p>
      {goalData.goals.map((goal, index) => (
        <p key={index}>{goal.goal}</p>
      ))}
    </div>
  );
};
