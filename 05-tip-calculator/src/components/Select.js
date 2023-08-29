export default function Select({
  children,
  percent,
  setPercent,
  select,
  id,
  name,
}) {
  return (
    <div>
      <label htmlFor={select}>{children}</label>
      <select
        id={id}
        name={name}
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
