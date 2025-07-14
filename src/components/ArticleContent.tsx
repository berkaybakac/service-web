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

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <section
      className="bg-[#1e1f25] text-white rounded-xl px-4 py-6 md:p-8 mb-12 shadow-xl max-w-4xl w-full mx-auto transition-all duration-300 cursor-pointer"
      onClick={toggleExpanded}
    >
      <div
        id="article-content"
        className={`markdown overflow-hidden transition-all duration-700 ease-in-out ${
          expanded ? 'max-h-[6000px] opacity-100' : 'max-h-[240px] opacity-90'
        }`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Butona basınca section'a tıklanmış sayılmasın
            toggleExpanded();
          }}
          className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition"
        >
          {expanded ? 'Servis Detaylarını Gizle' : 'Servis Detaylarını Göster'}
        </button>
      </div>
    </section>
  );
}
