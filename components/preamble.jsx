export default function Preamble({ title, children }) {
  return (
    <div>
      <h1 className="text-5xl font-serif font-semibold">{title}</h1>
      {children}
    </div>
  );
}
