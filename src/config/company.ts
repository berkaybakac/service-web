type Company = {
  url: string;
  name: string;
  legalName: string;
  slogan: string;
  phone: string;
  email: string;
  taxNumber?: string;
  taxOffice?: string;
  mersisNumber?: string;
  address: {
    street: string;
    district: string;
    city: string;
    zip: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  supportNote?: string;
  officialServiceDisclaimer?: string;
  copyright: string;

  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    whatsapp?: string;
  };
};

const company: Company = {
  url: 'https://service-web-blush.vercel.app',
  name: 'Teknik Servis',
  legalName: 'XYZ Teknoloji A.Ş.',
  slogan: 'Beyaz Eşya Teknik Servisinde Güvenin Adı',
  phone: '+90 850 123 4567',
  email: 'destek@example.com',
  taxNumber: '1234567890',
  taxOffice: 'Ankara Vergi Dairesi',
  mersisNumber: '0123456789012345',
  address: {
    street: '123. Sokak No:45',
    district: 'Çankaya',
    city: 'Ankara',
    zip: '06510',
  },
  workingHours: {
    weekdays: '08:00 - 19:00',
    saturday: '08:00 - 17:00',
    sunday: 'Kapalı',
  },
  supportNote:
    'Bu web sitesi resmi yetkili servis değildir. Yalnızca garantisi sona ermiş cihazlara teknik servis hizmeti sunulmaktadır.',
  officialServiceDisclaimer:
    'Web sitemiz üretici firmalarla resmi bir bağı bulunmayan özel servistir.',
  copyright: `© ${new Date().getFullYear()} Teknik Servis. Tüm hakları saklıdır.`,
  social: {
    facebook: 'https://facebook.com/teknikservisresmi',
    twitter: 'https://twitter.com/teknikservisresmi',
    linkedin: 'https://linkedin.com/company/teknikservisresmi',
    whatsapp: 'https://wa.me/905551234567',
  },
};

export default company;
