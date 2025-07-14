import company from '@/config/company';

const faqList = [
  {
    question: 'Servis ücretleri ne kadar?',
    answer:
      'Servis ücretleri, cihaz türüne ve arıza durumuna göre değişkenlik göstermektedir. Net bilgi için bizimle iletişime geçebilirsiniz.',
  },
  {
    question: 'Aynı gün içinde servis hizmeti alabilir miyim?',
    answer:
      'Müsaitlik durumuna göre aynı gün içerisinde servis hizmeti sağlanabilir. Erken saatlerde randevu almanız tavsiye edilir.',
  },
  {
    question: 'Servis sonrası garanti süresi nedir?',
    answer:
      'Tüm servis işlemlerimiz 1 yıl garantilidir. Aynı arıza tekrar ederse, ücretsiz destek sunulmaktadır.',
  },
  {
    question: 'Yedek parçalar orijinal mi?',
    answer:
      'Kullandığımız tüm parçalar orijinal ve garantilidir. Talebiniz doğrultusunda muadil ürün seçeneği de sunabiliriz.',
  },
  {
    question: 'Hangi markalara servis veriyorsunuz?',
    answer:
      'Arçelik, Beko, Bosch, Siemens, Samsung, LG, Vestel, Altus, Profilo ve birçok farklı markaya {company.name} olarak teknik servis hizmeti sunuyoruz.',
  },
].map((item) => ({
  ...item,
  answer: item.answer.replace('{company.name}', company.name),
}));

export default faqList;
