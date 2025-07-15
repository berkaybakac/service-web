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
  href: `/hizmet?service=${encodeURIComponent(name)}`,
}));

export default serviceLinks;
