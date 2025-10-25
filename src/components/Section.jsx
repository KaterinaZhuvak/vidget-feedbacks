
export default function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "20px" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}