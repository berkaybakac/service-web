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
  href: `/hizmet/${encodeURIComponent(name)}`,
  canonical: `https://service-web-blush.vercel.app/hizmet/${encodeURIComponent(
    name
  )}`,
}));

export default serviceLinks;
