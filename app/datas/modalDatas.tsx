type ModalData = {
  unvan: string;
  soru: string;
  secenekler: string[];
};

export const modalDatas: ModalData[] = [ 
      {"unvan":"Ev Temizliği",
        "soru": "Ev temizliği hizmeti almak istediğiniz alanı seçin:",
        "secenekler": ["Ev İçi Temizlik", "Ofis Temizliği", "Dış Cephe Temizliği"]
      },
       {"unvan":"Nakliyat",
        "soru": "Taşınmak istediğiniz hizmeti seçin:",
        "secenekler": ["Evden Eve Nakliyat", "Ofis Taşıma", "Şehirlerarası Nakliyat"]
      },
       { "unvan":"Boya Badana",
        "soru": "Hangi boya badana hizmetini almak istersiniz?",
        "secenekler": ["İç Mekan Boya Badana", "Dış Cephe Boya Badana", "Dekoratif Boyama"]
      },
      { "unvan":"Elektrikçi Hizmeti",
        "soru": "Elektrikçi hizmeti için ne tür bir sorun yaşıyorsunuz?",
        "secenekler": ["Arıza Onarımı", "Yeni Proje Kurulumu", "Aydınlatma İşleri"]
      },
      { "unvan":"Sıva Hizmeti",
        "soru": "Sıva ustası hizmeti almak istediğiniz alanı belirtin:",
        "secenekler": ["İç Duvar Sıva", "Dış Cephe Sıva", "Alçıpan Uygulaması"]
      },
       { "unvan":"Mantolama",
        "soru": "Hangi bölgede mantolama hizmeti istiyorsunuz?",
        "secenekler": ["Dış Cephe Mantolama", "Isı Yalıtımı", "Su Yalıtımı"]
      },
       { "unvan":"Cim Bakımı",
        "soru": "Hangi bahçe bakımı hizmetini almak istersiniz?",
        "secenekler": ["Çim Biçme", "Bitki Dikimi", "Ağaç Bakımı"]
      },
       { "unvan":"Temel Tamiri",
        "soru": "Hangi tür temel tamiri hizmetine ihtiyacınız var?",
        "secenekler": ["Çatlak Onarımı", "Su Sızıntısı Giderme", "Yalıtım İşleri"]
      },
       { "unvan":"Çatı Hizmeti",
        "soru": "Çatı onarımı hizmeti almak istediğiniz çatı türünü seçin:",
        "secenekler": ["Kiremit Çatı", "Metal Çatı", "Çatı Kaplama"]
      },
       { "unvan":"Su Hizmeti",
        "soru": "Su tesisatı hizmeti için hangi konuda yardıma ihtiyacınız var?",
        "secenekler": ["Sızıntı Onarımı", "Boru Değişimi", "Su Arıtma Sistemi Kurulumu"]
      },
       { "unvan":"Marangoz Hizmeti",
        "soru": "Marangoz hizmeti için ne tür bir iş yapılmasını istersiniz?",
        "secenekler": ["Mobilya Yapımı", "Ahşap Kapı Montajı", "Merdiven İmalatı"]
      },
       { "unvan":"Beyaz Eşya Tamiri",
        "soru": "Hangi beyaz eşya tamiri hizmetine ihtiyacınız var?",
        "secenekler": ["Buzdolabı Tamiri", "Çamaşır Makinesi Onarımı", "Bulaşık Makinesi Tamiri"]
      },
       { "unvan":"Klima Hizmeti",
        "soru": "Klima servisi için hangi hizmeti istersiniz?",
        "secenekler": ["Bakım ve Temizlik", "Arıza Onarımı", "Yeni Klima Kurulumu"]
      },
       { "unvan":"Yıkama Hizmeti",
        "soru": "Hangi tür halı yıkama hizmetini tercih edersiniz?",
        "secenekler": ["Evde Halı Yıkama", "Fabrika Yıkaması", "Leke Çıkarma"]
      },
       { "unvan":"Camcı Hizmeti",
        "soru": "Camcı hizmeti için hangi tür cam işine ihtiyacınız var?",
        "secenekler": ["Cam Kesimi", "Camların Değiştirilmesi", "Ayna Montajı"]
      },
       { "unvan":"Demir Görme Hizmeti",
        "soru": "Demir doğrama hizmeti için hangi işi yaptırmak istersiniz?",
        "secenekler": ["Kapı Doğrama", "Pencere Korkuluğu", "Demir Çit İmalatı"]
      },
       { "unvan":"Duvar Kıdı Hizmeti",
        "soru": "Duvar kağıdı ustası hizmeti için ne tür bir desen istersiniz?",
        "secenekler": ["Tek Renk", "Desenli", "Özel Tasarım"]
      },
       { "unvan":"Parke Hizmeti",
        "soru": "Parke ustası hizmeti için hangi tür parke döşemesi istersiniz?",
        "secenekler": ["Lamine Parke", "Masif Ahşap Parke", "Vinil Parke"]
      },
       { "unvan":"Giyim Tamiri",
        "soru": "Giyim tamiri hizmeti için hangi tür onarıma ihtiyacınız var?",
        "secenekler": ["Dikim Onarımı", "Düğme Değişimi", "Daraltma Genişletme"]
      },
       { "unvan":"Ayakkabı Tamiri",
        "soru": "Ayakkabı tamiri hizmeti için hangi tür onarım gerekiyor?",
        "secenekler": ["Taban Tamiri", "Dikiş Onarımı", "Topuk Değişimi"]
      },
       { "unvan":"Mobilya Tamiri",
        "soru": "Hangi tür mobilya montajı hizmetine ihtiyacınız var?",
        "secenekler": ["Kitaplık Montajı", "Yatak Montajı", "Masa ve Sandalye Takımı"]
      },
       { "unvan":"Cep telefonu Tamiri",
        "soru": "Cep telefonu tamiri hizmeti için hangi tür sorun yaşıyorsunuz?",
        "secenekler": ["Ekran Değişimi", "Pil Tamiri", "Ses Problemleri"]
      },
       { "unvan":"Bilgisayar Tamiri",
        "soru": "Bilgisayar tamiri hizmeti için hangi tür sorun yaşadığınızı belirtin:",
        "secenekler": ["Yazılım Sorunları", "Donanım Arızaları", "Virüs Temizleme"]
      },
       { "unvan":"Güvenlik Hizmeti",
        "soru": "Güvenlik kamerası montajı hizmeti için hangi tür sistem istersiniz?",
        "secenekler": ["IP Kameralar", "Analog Kameralar", "Hareket Algılamalı Kameralar"]
      },
       { "unvan":"Bahçe Hizmeti",
        "soru": "Bahçe peyzajı hizmeti için hangi tür düzenlemeleri istersiniz?",
        "secenekler": ["Bitki Düzenlemesi", "Çim Alanı Kurulumu", "Bahçe Yolu Tasarımı"]
      },
       { "unvan":"Mutfak Hizmeti",
        "soru": "Hangi tür göçmenlik danışmanlığı hizmetine ihtiyacınız var?",
        "secenekler": ["Vize Başvurusu", "İkamet İşlemleri", "Uyruğa Geçiş"]
      },
       { "unvan":"Fotoğrafçılık Hizmeti",
        "soru": "Fotoğrafçılık hizmeti için hangi tür çekim istersiniz?",
        "secenekler": ["Düğün Fotoğrafçılığı", "Portre Çekimi", "Ürün Fotoğrafçılığı"]
      },
       { "unvan":"Araç Bakımı Hizmeti",
        "soru": "Araç bakımı hizmeti için hangi tür işlemleri yaptırmak istersiniz?",
        "secenekler": ["Yağ Değişimi", "Fren Kontrolü", "Lastik Değişimi"]
      },
       { "unvan":"Oto Elektrikçi Hizmeti",
        "soru": "Oto elektrikçi hizmeti için hangi tür arıza giderme işlemi istersiniz?",
        "secenekler": ["Akü Değişimi", "Far Ayarı", "Elektriksel Arızalar"]
      },
       { "unvan":"Elektrikçi Hizmeti",
        "soru": "Halıfleks yer döşemesi hizmeti için hangi tür zemin kaplamasını tercih edersiniz?",
        "secenekler": ["Vinil Zemin", "Halıfleks Parke", "Lamine Zemin"]
      },
       { "unvan":"Tadilat Hizmeti",
        "soru": "Hangi tür tadilat işlemini yaptırmak istersiniz?",
        "secenekler": ["Banyo Tadilatı", "Mutfak Tadilatı", "Genel Ev Tadilatı"]
      },
       { "unvan":"Dekorasyon Hizmeti",
        "soru": "Dekorasyon hizmeti için hangi tür tasarımı istersiniz?",
        "secenekler": ["Modern Tasarım", "Klasik Tasarım", "Minimalist Dekorasyon"]
      },
       { "unvan":"Gitar Hizmeti",
        "soru": "Gitar dersleri hizmeti için hangi seviyede eğitim almak istersiniz?",
        "secenekler": ["Acemi", "Orta Seviye", "İleri Seviye"]
      },
       { "unvan":"Keman Hizmeti",
        "soru": "Hangi tür müzik aletinin tamirine ihtiyacınız var?",
        "secenekler": ["Gitar", "Keman", "Piyano"]
      },
    ]
  
  export default modalDatas
  