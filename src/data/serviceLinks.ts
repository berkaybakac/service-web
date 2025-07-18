import company from '@/config/company';

const serviceNames = [
  'Beyaz Eşya Servisi',
  'Buzdolabı',
  'Çamaşır Makinesi',
  'Bulaşık Makinesi',
  'Fırın',
  'Klima',
  'Kombi',
  'Televizyon',
];

const serviceLinks = serviceNames.map(name => ({
  name,
  href: `/hizmet/${encodeURIComponent(name)}`, // ✅ yeni slug uyumlu
  canonical: `${company.url}/hizmet/${encodeURIComponent(name)}`, // ✅ config'ten alınsın
}));

export default serviceLinks;
