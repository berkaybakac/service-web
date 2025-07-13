const qaList: Record<
  string,
  {
    question: string;
    answer: string;
    date: string;
    author: string;
  }
> = {
  'Beyaz Eşya Servisi': {
    question: 'Beyaz eşyalarım neden düzgün çalışmıyor?',
    answer:
      'Düzenli bakım yapılmayan beyaz eşyalar zamanla performans kaybı yaşayabilir. Servisimiz bu konuda destek sunar.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
  Buzdolabı: {
    question: 'Buzdolabım neden soğutmuyor?',
    answer:
      'Termostat arızası, fan motoru ya da gaz kaçağı soğutmama sebeplerindendir.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
  'Çamaşır Makinesi': {
    question: 'Çamaşır makinem ses yapıyor, neden olabilir?',
    answer:
      'Tambur rulmanı, motor arızası veya dengesiz yük gibi nedenlerle ses yapabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
  'Bulaşık Makinesi': {
    question: 'Bulaşıklarım iyi yıkanmıyor, sebebi nedir?',
    answer:
      'Fıskiyeler tıkalı olabilir veya deterjan dağılımı yetersiz olabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
  Fırın: {
    question: 'Fırınım ısınmıyor, ne yapmalıyım?',
    answer:
      'Rezistans arızası veya termostat bozulması olabilir. Teknik servis gerekir.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
  Klima: {
    question: 'Klima neden soğutmaz?',
    answer:
      'Gaz eksikliği, filtre tıkanıklığı veya kompresör arızası olabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
  Kombi: {
    question: 'Kombim çalışmıyor, neden olabilir?',
    answer:
      'Basınç düşüklüğü, ateşleme sorunu veya elektronik kart arızası olabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
  Televizyon: {
    question: 'TV görüntü gelmiyor, ses var?',
    answer: 'Görüntü kartı arızası ya da panel sorunu olabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: 'Eterna Teknik Servis',
  },
};

export default qaList;
