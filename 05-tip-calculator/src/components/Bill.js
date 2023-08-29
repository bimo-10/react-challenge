export default function Bill({ bill, setBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill</label>
      <input
        type="text"
        id="bill"
        name="bill"
        placeholder="bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
