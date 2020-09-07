import Link from "next/link";

export default function PostPreview({ title, tags, excerpt, slug }) {
  return (
    <article className="mt-5 mb-2">
      <header className="flex justify-between">
        <h4 className="text-xl font-serif mb-2">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h4>
        <span className="text-gray-600 text-sm">Some Tag</span>
      </header>
      <p>{excerpt}</p>
    </article>
  );
}
