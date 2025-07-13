const qaList: Record<string, { question: string; answer: string }> = {
  'Beyaz Eşya Servisi': {
    question: 'Beyaz eşyalarım neden düzgün çalışmıyor?',
    answer:
      'Düzenli bakım yapılmayan beyaz eşyalar zamanla performans kaybı yaşayabilir. Servisimiz bu konuda destek sunar.',
  },
  Buzdolabı: {
    question: 'Buzdolabım neden soğutmuyor?',
    answer:
      'Termostat arızası, fan motoru ya da gaz kaçağı soğutmama sebeplerindendir.',
  },
  'Çamaşır Makinesi': {
    question: 'Çamaşır makinem ses yapıyor, neden olabilir?',
    answer:
      'Tambur rulmanı, motor arızası veya dengesiz yük gibi nedenlerle ses yapabilir.',
  },
  'Bulaşık Makinesi': {
    question: 'Bulaşıklarım iyi yıkanmıyor, sebebi nedir?',
    answer:
      'Fıskiyeler tıkalı olabilir veya deterjan dağılımı yetersiz olabilir.',
  },
  Fırın: {
    question: 'Fırınım ısınmıyor, ne yapmalıyım?',
    answer:
      'Rezistans arızası veya termostat bozulması olabilir. Teknik servis gerekir.',
  },
  Klima: {
    question: 'Klima neden soğutmaz?',
    answer:
      'Gaz eksikliği, filtre tıkanıklığı veya kompresör arızası olabilir.',
  },
  Kombi: {
    question: 'Kombim çalışmıyor, neden olabilir?',
    answer:
      'Basınç düşüklüğü, ateşleme sorunu veya elektronik kart arızası olabilir.',
  },
  Televizyon: {
    question: 'TV görüntü gelmiyor, ses var?',
    answer: 'Görüntü kartı arızası ya da panel sorunu olabilir.',
  },
};

export default qaList;
