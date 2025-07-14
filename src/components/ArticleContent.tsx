'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleContent() {
  const [content, setContent] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch('/article.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <section className="bg-[#1e1f25] text-white rounded-xl px-4 py-6 md:p-8 mb-8 shadow-lg max-w-3xl w-full mx-auto transition-all duration-300">
      <div className="flex justify-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-white text-black text-sm md:text-base font-semibold px-5 py-2 md:px-6 md:py-2.5 rounded-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-expanded={expanded}
          aria-controls="article-content"
        >
          {expanded ? 'Detayları Gizle' : 'Detaylı Makale İçeriğini Göster'}
        </button>
      </div>

      <div
        id="article-content"
        className={`markdown mt-6 overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
