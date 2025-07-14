import company from '@/config/company';

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
      'Düzenli bakım yapılmayan beyaz eşyalar zamanla performans kaybı yaşar. {company.name} olarak bu konuda teknik destek sunuyoruz.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
  Buzdolabı: {
    question: 'Buzdolabım neden soğutmuyor?',
    answer:
      'Termostat arızası, fan motoru sorunu veya gaz kaçağı nedeniyle soğutma problemi yaşanabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
  'Çamaşır Makinesi': {
    question: 'Çamaşır makinem neden ses yapıyor?',
    answer:
      'Tambur rulmanı, motor sorunu veya dengesiz yük nedeniyle ses yapabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
  'Bulaşık Makinesi': {
    question: 'Bulaşıklarım neden iyi yıkanmıyor?',
    answer:
      'Fıskiyelerin tıkanması veya deterjan dağılımındaki sorunlar bu duruma neden olabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
  Fırın: {
    question: 'Fırınım neden ısınmıyor?',
    answer:
      'Rezistans veya termostat arızası nedeniyle fırın ısıtamaz hale gelebilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
  Klima: {
    question: 'Klima neden soğutmuyor?',
    answer:
      'Gaz eksikliği, filtre tıkanıklığı veya kompresör arızası soğutmayı engelleyebilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
  Kombi: {
    question: 'Kombim neden çalışmıyor?',
    answer:
      'Basınç düşüklüğü, ateşleme sorunu veya elektronik kart arızası olabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
  Televizyon: {
    question: 'TV’de görüntü yok ama ses var, neden?',
    answer:
      'Görüntü kartı arızası veya panel bozulması gibi donanım kaynaklı sorunlar olabilir.',
    date: '2024-01-01T08:00:00+03:00',
    author: company.name,
  },
};

// company.name placeholder replace
Object.entries(qaList).forEach(([, value]) => {
  value.answer = value.answer.replace('{company.name}', company.name);
});

export default qaList;
