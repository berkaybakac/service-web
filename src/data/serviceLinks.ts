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

// SEO dostu slug oluşturucu (ı → i düzeltmesi dahil)
const generateSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ı/g, 'i')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Türkçe karakterleri temizler
    .replace(/[^a-z0-9-]/g, '') // özel karakterleri kaldırır

const serviceLinks = serviceNames.map(name => ({
  name,
  href: `/hizmet/${generateSlug(name)}.html`,
}));

export default serviceLinks;
