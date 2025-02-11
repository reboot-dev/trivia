import { useState } from "react";

const AnswerButtons = ({
  onSubmit,
}: {
  onSubmit: (answer: number) => void;
}) => {
  const [answer, setAnswer] = useState<number>();

  const getClassName = (index: number) => {
    if (answer === index) {
      return "bg-white text-black p-2 m-2 h-10 w-10 bg-yellow-500 text-darkblue";
    }
    return "p-2 m-2 h-10 w-10 bg-blue-500 text-white";
  };

  const handleSubmit = (answer: number | undefined) => {
    if (answer === undefined) {
      throw new Error("No answer selected");
    }
    onSubmit(answer);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <button className={getClassName(0)} onClick={() => setAnswer(0)}>
          1
        </button>
        <button className={getClassName(1)} onClick={() => setAnswer(1)}>
          2
        </button>
        <button className={getClassName(2)} onClick={() => setAnswer(2)}>
          3
        </button>
        <button className={getClassName(3)} onClick={() => setAnswer(3)}>
          4
        </button>
      </div>
      <button
        className="h-20 w-40 bg-yellow-500 text-2xl text-black font-bold"
        onClick={() => handleSubmit(answer)}
      >
        Submit
      </button>
    </div>
  );
};

const LoggedInGame = ({
  question,
  possibleAnswers,
}: {
  question: string;
  possibleAnswers: string[];
}) => {
  const handleSubmit = (answer: number) => {
    console.log(answer);
    console.log("Submitted");
  };
  return (
    <div>
      <h1 className="text-4xl">{question}</h1>
      <ol className="list-decimal list-inside text-3xl">
        {possibleAnswers.map((answer: string) => (
          <li key={answer}>{answer} </li>
        ))}
      </ol>
      <AnswerButtons onSubmit={handleSubmit} />
    </div>
  );
};

function App() {
  return (
    <div className="bg-black w-screen h-screen text-white flex justify-center items-center">
      <LoggedInGame
        question="Who is the queen of france?"
        possibleAnswers={["Freddy", "Jane", "Queen Jane", "Simon"]}
      />
    </div>
  );
}

export default App;
