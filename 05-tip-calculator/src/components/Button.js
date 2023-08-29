export default function Button({ children, handleReset }) {
  return (
    <>
      <button onClick={handleReset}>{children}</button>
    </>
  );
}
