import faqList from '@/data/faqList';

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqList.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <main className="bg-black text-white min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto min-h-[1000px]">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Sık Sorulan Sorular
          </h1>
          <ul className="space-y-6">
            {faqList.map((item, idx) => (
              <li key={idx} className="bg-gray-800 p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-2">{item.question}</h2>
                <p className="text-gray-300">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
