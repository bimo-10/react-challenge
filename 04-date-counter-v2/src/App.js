import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("may 10 2030");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <input
        type="range"
        name="step"
        id="step"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}
      />
      <label htmlFor="step">{step}</label>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          placeholder=""
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>{count === 0 ? null : Math.abs(count)} </span>
        <span>
          {count === 0
            ? "today is"
            : count > 0
            ? "days from today is"
            : "days ago was"}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <br />
      {step !== 1 || count !== 0 ? (
        <button
          onClick={() => {
            setStep(1);
            setCount(0);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}
