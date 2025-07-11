type Company = {
  url: string;
  name: string;
  legalName: string;
  slogan: string;
  phone: string;
  email: string;
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
  copyright: string;
};

const company: Company = {
  url: 'https://eternateknikservis.com',
  name: 'Eterna Teknik Servis',
  legalName: 'Eterna Teknoloji A.Ş.',
  slogan: 'Beyaz Eşya Teknik Servisinde Güvenin Adı',
  phone: '+90 850 123 4567',
  email: 'iletisim@eternateknikservis.com',
  address: {
    street: 'Mustafa Kemal Mah. 123. Sokak No:45',
    district: 'Çankaya',
    city: 'Ankara',
    zip: '06510',
  },
  workingHours: {
    weekdays: '08:00 - 19:00',
    saturday: '08:00 - 17:00',
    sunday: 'Kapalı',
  },
  copyright: `© ${new Date().getFullYear()} Eterna Teknik Servis. Tüm hakları saklıdır.`,
};

export default company;
