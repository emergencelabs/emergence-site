export default function PostPreview({ title, tags, excerpt }) {
  return (
    <article className="mt-5 mb-2">
      <header className="flex justify-between">
        <h4 className="text-xl font-serif mb-2">{title}</h4>
        <span className="text-gray-600 text-sm">Some Tag</span>
      </header>
      <p>{excerpt}</p>
    </article>
  );
}
