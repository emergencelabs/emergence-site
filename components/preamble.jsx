export default function Preamble({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
