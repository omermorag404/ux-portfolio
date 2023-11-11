import { Goals } from "./goals";
import gymeData from "./gymeData";
import { Persona } from "./persona";
import { Research } from "./researchResults";

export const GymeApp = () => {
  return (
    <div>
      <div>
        <h3>{gymeData.background.title}</h3>
        <p>{gymeData.background.content}</p>
      </div>
      <div>
        <h3>{gymeData.challenge.title}</h3>
        <p>{gymeData.challenge.content}</p>
      </div>
      <div>
        <h3>{gymeData.research.title}</h3>
        <p>{gymeData.research.content}</p>
      </div>
      <div>
        {gymeData.data.map((number, index) => (
          <Research key={index} gymeData={number} />
        ))}
      </div>
      <div>
        {gymeData.persona.map((person, index) => (
          <Persona key={index} gymeData={person} />
        ))}
      </div>
      <div>
        {gymeData.goals.map((goal, index) => (
          <Goals key={index} goalData={goal} />
        ))}
      </div>
      <div>
        <h3>{gymeData.solution.title}</h3>
        <p>{gymeData.solution.content}</p>
      </div>
      <div>
        <p>{gymeData.solution.content2}</p>
      </div>
      <div>
        <p>{gymeData.solution.content3}</p>
      </div>
      <button>Play with the prototype</button>
    </div>
  );
};
