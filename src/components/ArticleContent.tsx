'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleContent() {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    fetch('/article.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <details className="bg-gray-900 text-white p-6 rounded-md mb-8 max-w-4xl mx-auto">
      <summary className="cursor-pointer text-lg font-semibold mb-4">
        Detaylı Makale İçeriğini Göster
      </summary>
      <div className="prose prose-invert max-w-none mt-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </details>
  );
}
