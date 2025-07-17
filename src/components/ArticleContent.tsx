'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleContent() {
  const [content, setContent] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/article.md')
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => {
        console.error('Makale yüklenemedi:', err);
        setContent('İçerik yüklenemedi.');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const toggleExpanded = () => setExpanded(prev => !prev);

  return (
    <div className="bg-[#1e1f25] text-white rounded-xl px-4 py-6 md:p-8 mb-12 shadow-xl max-w-4xl w-full mx-auto transition-all duration-300">
      {isLoading ? (
        <div className="h-[300px] animate-pulse bg-gray-800 rounded-md" />
      ) : (
        <>
          <div
            id="article-content"
            className={`markdown prose prose-invert transition-all duration-300 ease-in-out will-change-transform overflow-hidden ${
              expanded
                ? 'max-h-[4000px] opacity-100'
                : 'max-h-[280px] opacity-90'
            }`}
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={toggleExpanded}
              aria-label={
                expanded
                  ? 'Servis detaylarını gizle'
                  : 'Servis detaylarını göster'
              }
              aria-controls="article-content"
              aria-expanded={expanded}
              className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition"
            >
              {expanded
                ? 'Servis Detaylarını Gizle'
                : 'Servis Detaylarını Göster'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
