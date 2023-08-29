import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="App">
        <Counter />
      </div>
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("May 10 2027");
  date.setDate(date.getDate() + count);

  function handleStepPrev() {
    if (step > 0) {
      setStep((prevStep) => {
        return prevStep - 1;
      });
    }
  }

  function handleStepNext() {
    setStep((prevStep) => {
      return prevStep + 1;
    });
  }

  function handleCountNext() {
    setCount((prevCount) => prevCount + step);
  }

  function handleCountPrev() {
    setCount((prevCount) => prevCount - step);
  }

  return (
    <>
      <div>
        <div>
          <button onClick={handleStepPrev}>-</button>
          <span>Step: {step}</span>
          <button onClick={handleStepNext}>+</button>
        </div>
        <div>
          <button onClick={handleCountPrev}>-</button>
          <span>Count: {count}</span>
          <button onClick={handleCountNext}>+</button>
        </div>
        <div>
          <h4>
            {count === 0
              ? "today is"
              : count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days ago was`}{" "}
            {date.toDateString()}
          </h4>
        </div>
      </div>
    </>
  );
}
