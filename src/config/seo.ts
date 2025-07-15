import company from './company';

export const COMPANY_NAME = company.name;

export const TOP_KEYWORDS = [
  'beyaz eşya servisi',
  'bulaşık makinesi',
  'çamaşır makinesi',
  'buzdolabı servisi',
  'klima',
  'kombi',
  'arçelik yetkili servis',
  'vestel yetkili servis',
  'klima fiyatları',
  'kombi fiyatları',
  'kurutma makinesi',
  'tv fiyatları',
  'televizyon',
  'çamaşır makinesi tamircisi',
  'buzdolabı tamircisi',
];

export const DEFAULT_TITLE = `${COMPANY_NAME} | Beyaz Eşya, Klima, Kombi, Tamir Servisi`;

export const DEFAULT_DESCRIPTION = `${COMPANY_NAME} olarak ${TOP_KEYWORDS.slice(
  0,
  5
).join(
  ', '
)} gibi konularda hızlı ve güvenilir teknik destek sunuyoruz. 1 yıl garantili hizmet alın.`;
