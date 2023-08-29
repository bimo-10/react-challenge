import { useState } from "react";
import Bill from "./Bill";
import Button from "./Button";
import Select from "./Select";
import Output from "./Output";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState(0);
  const [percent2, setPercent2] = useState(0);

  // tips = bill * ((percent + percent2) /100) / 2
  let tips = (bill * ((percent + percent2) / 100)) / 2;

  // total = bill + tips
  let total = bill + tips;
  console.log(total);

  function handleReset() {
    setBill((bill) => (bill = 0));
    setPercent((percent) => (percent = 0));
    setPercent2((percent) => (percent = 0));
  }

  return (
    <div>
      {/* bill */}
      <Bill bill={bill} setBill={setBill} />

      {/* percent1 */}
      <Select
        percent={percent}
        setPercent={setPercent}
        select="percent"
        id="percent"
        name="percent"
      >
        How did you like the service
      </Select>

      {/* percent2 */}
      <Select
        percent={percent2}
        setPercent={setPercent2}
        select="percent2"
        id="percent2"
        name="percent2"
      >
        How did your friend like the service
      </Select>

      {/* output */}
      {bill > 0 && <Output bill={bill} tips={tips} total={total} />}

      {/* button reset */}
      <Button handleReset={handleReset}>Reset</Button>
    </div>
  );
}
