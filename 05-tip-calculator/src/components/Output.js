export default function Output({ bill, tips, total }) {
  return (
    <h2>
      Your pay {total} (${bill} + ${tips})
    </h2>
  );
}
