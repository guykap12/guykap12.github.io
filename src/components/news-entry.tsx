import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <li className="flex gap-3 text-sm leading-snug py-1.5 border-b border-zinc-100 last:border-0">
      <span className="shrink-0 font-semibold text-zinc-400 w-20 pt-px">{news.date}</span>
      <span className="text-zinc-700">
        {news.link ? (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 underline underline-offset-2 decoration-zinc-300 hover:decoration-zinc-600 transition-colors duration-200"
          >
            {news.description}
          </a>
        ) : (
          news.description
        )}
      </span>
    </li>
  );
}
