interface City {
    name: string;
    plate: string;
    latitude: string;
    longitude: string;
    counties: string[];
}

const CitiesData: City[] = [
    {
      "name": "adana",
      "plate": "01",
      "latitude": "36.9914",
      "longitude": "35.3308",
      "counties": [
        "seyhan",
        "yüreğir",
        "çukurova",
        "ceyhan",
        "sarıçam",
        "kozan",
        "imamoğlu",
        "karataş",
        "karaisalı",
        "pozantı",
        "yumurtalık",
        "tufanbeyli",
        "feke",
        "aladağ",
        "saimbeyli"
      ]
    },
    {
      "name": "adıyaman",
      "plate": "02",
      "latitude": "37.7636",
      "longitude": "38.2773",
      "counties": [
        "merkez",
        "kahta",
        "besni",
        "gölbaşı",
        "gerger",
        "sincik",
        "çelikhan",
        "tut",
        "samsat"
      ]
    },
    {
      "name": "afyonkarahisar",
      "plate": "03",
      "latitude": "38.7569",
      "longitude": "30.5387",
      "counties": [
        "merkez",
        "sandıklı",
        "dinar",
        "bolvadin",
        "sinanpaşa",
        "emirdağ",
        "şuhut",
        "çay",
        "ihsaniye",
        "iscehisar",
        "sultandağı",
        "çobanlar",
        "dazkırı",
        "başmakçı",
        "hocalar",
        "bayat",
        "evciler",
        "kızılören"
      ]
    },
    {
      "name": "ağrı",
      "plate": "04",
      "latitude": "39.7191",
      "longitude": "43.0506",
      "counties": [
        "merkez",
        "patnos",
        "doğubayazıt",
        "diyadin",
        "eleşkirt",
        "tutak",
        "taşlıçay",
        "hamur"
      ]
    },
    {
      "name": "amasya",
      "plate": "05",
      "latitude": "40.6565",
      "longitude": "35.8373",
      "counties": [
        "merkez",
        "merzifon",
        "suluova",
        "taşova",
        "gümüşhacıköy",
        "göynücek",
        "hamamözü"
      ]
    },
    {
      "name": "ankara",
      "plate": "06",
      "latitude": "39.9334",
      "longitude": "32.8597",
      "counties": [
        "çankaya",
        "keçiören",
        "yenimahalle",
        "mamak",
        "etimesgut",
        "sincan",
        "altındağ",
        "pursaklar",
        "gölbaşı",
        "polatlı",
        "çubuk",
        "kahramankazan",
        "beypazarı",
        "elmadağ",
        "şereflikoçhisar",
        "akyurt",
        "nallıhan",
        "haymana",
        "kızılcahamam",
        "bala",
        "kalecik",
        "ayaş",
        "güdül",
        "çamlıdere",
        "evren"
      ]
    },
    {
      "name": "antalya",
      "plate": "07",
      "latitude": "36.8969",
      "longitude": "30.7133",
      "counties": [
        "kepez",
        "muratpaşa",
        "alanya",
        "manavgat",
        "konyaaltı",
        "serik",
        "aksu",
        "kumluca",
        "döşemealtı",
        "kaş",
        "korkuteli",
        "gazipaşa",
        "finike",
        "kemer",
        "elmalı",
        "demre",
        "akseki",
        "gündoğmuş",
        "ibradı"
      ]
    },
    {
      "name": "artvin",
      "plate": "08",
      "latitude": "41.1809",
      "longitude": "41.8208",
      "counties": [
        "hopa",
        "merkez",
        "borçka",
        "yusufeli",
        "arhavi",
        "şavşat",
        "ardanuç",
        "murgul",
        "kemalpaşa"
      ]
    },
    {
      "name": "aydın",
      "plate": "09",
      "latitude": "37.8380",
      "longitude": "27.8456",
      "counties": [
        "efeler",
        "nazilli",
        "söke",
        "kuşadası",
        "didim",
        "çine",
        "incirliova",
        "germencik",
        "bozdoğan",
        "köşk",
        "kuyucak",
        "sultanhisar",
        "karacasu",
        "yenipazar",
        "buharkent",
        "karpuzlu"
      ]
    },
    {
      "name": "balıkesir",
      "plate": "10",
      "latitude": "39.6533",
      "longitude": "27.8903",
      "counties": [
        "karesi",
        "altıeylül",
        "bandırma",
        "edremit",
        "gönen",
        "ayvalık",
        "burhaniye",
        "bigadiç",
        "susurluk",
        "dursunbey",
        "sındırgı",
        "ivrindi",
        "erdek",
        "havran",
        "kepsut",
        "manyas",
        "savaştepe",
        "balya",
        "gömeç",
        "marmara"
      ]
    },
    {
      "name": "bilecik",
      "plate": "11",
      "latitude": "40.1426",
      "longitude": "29.9793",
      "counties": [
        "merkez",
        "bozüyük",
        "osmaneli",
        "söğüt",
        "gölpazarı",
        "pazaryeri",
        "yenipazar",
        "inhisar"
      ]
    },
    {
      "name": "bingöl",
      "plate": "12",
      "latitude": "38.8855",
      "longitude": "40.4966",
      "counties": [
        "merkez",
        "genç",
        "solhan",
        "karlıova",
        "adaklı",
        "kiğı",
        "yedisu",
        "yayladere"
      ]
    },
    {
      "name": "bitlis",
      "plate": "13",
      "latitude": "38.4006",
      "longitude": "42.1095",
      "counties": [
        "tatvan",
        "merkez",
        "güroymak",
        "ahlat",
        "hizan",
        "mutki",
        "adilcevaz"
      ]
    },
    {
      "name": "bolu",
      "plate": "14",
      "latitude": "40.7325",
      "longitude": "31.6082",
      "counties": [
        "merkez",
        "gerede",
        "mudurnu",
        "göynük",
        "mengen",
        "yeniçağa",
        "dörtdivan",
        "seben",
        "kıbrıscık"
      ]
    },
    {
      "name": "burdur",
      "plate": "15",
      "latitude": "37.7183",
      "longitude": "30.2823",
      "counties": [
        "merkez",
        "bucak",
        "gölhisar",
        "yeşilova",
        "çavdır",
        "tefenni",
        "ağlasun",
        "karamanlı",
        "altınyayla",
        "çeltikçi",
        "kemer"
      ]
    },
    {
      "name": "bursa",
      "plate": "16",
      "latitude": "40.1885",
      "longitude": "29.0610",
      "counties": [
        "osmangazi",
        "yıldırım",
        "nilüfer",
        "gemlik",
        "mustafakemalpaşa",
        "mudanya",
        "gürsu",
        "karacabey",
        "orhangazi",
        "kestel",
        "yenişehir",
        "iznik",
        "orhaneli",
        "keles",
        "büyükorhan",
        "harmancık"
      ]
    },
    {
      "name": "çanakkale",
      "plate": "17",
      "latitude": "40.1467",
      "longitude": "26.4086",
      "counties": [
        "merkez",
        "biga",
        "çan",
        "gelibolu",
        "yenice",
        "ayvacık",
        "ezine",
        "bayramiç",
        "lapseki",
        "eceabat",
        "gökçeada",
        "bozcaada"
      ]
    },
    {
      "name": "çankırı",
      "plate": "18",
      "latitude": "40.6002",
      "longitude": "33.6162",
      "counties": [
        "merkez",
        "çerkeş",
        "ılgaz",
        "orta",
        "şabanözü",
        "kurşunlu",
        "yapraklı",
        "kızılırmak",
        "atkaracalar",
        "eldivan",
        "korgun",
        "bayramören"
      ]
    },
    {
      "name": "çorum",
      "plate": "19",
      "latitude": "40.5499",
      "longitude": "34.9537",
      "counties": [
        "merkez",
        "sungurlu",
        "osmancık",
        "iskilip",
        "alaca",
        "bayat",
        "mecitözü",
        "kargı",
        "ortaköy",
        "uğurludağ",
        "dodurga",
        "oğuzlar",
        "laçin",
        "boğazkale"
      ]
    },
    {
      "name": "denizli",
      "plate": "20",
      "latitude": "37.7830",
      "longitude": "29.0963",
      "counties": [
        "pamukkale",
        "merkezefendi",
        "çivril",
        "acıpayam",
        "tavas",
        "honaz",
        "sarayköy",
        "buldan",
        "kale",
        "çal",
        "çameli",
        "serinhisar",
        "bozkurt",
        "güney",
        "çardak",
        "bekilli",
        "beyağaç",
        "babadağ",
        "baklan"
      ]
    },
    {
      "name": "diyarbakır",
      "plate": "21",
      "latitude": "37.9250",
      "longitude": "40.2110",
      "counties": [
        "bağlar",
        "kayapınar",
        "yenişehir",
        "ergani",
        "sur",
        "bismil",
        "silvan",
        "çınar",
        "çermik",
        "dicle",
        "kulp",
        "hani",
        "lice",
        "eğil",
        "hazro",
        "kocaköy",
        "çüngüş"
      ]
    },
    {
      "name": "edirne",
      "plate": "22",
      "latitude": "41.6771",
      "longitude": "26.5557",
      "counties": [
        "merkez",
        "keşan",
        "uzunköprü",
        "ipsala",
        "havsa",
        "meriç",
        "enez",
        "süloğlu",
        "lalapaşa"
      ]
    },
    {
      "name": "elazığ",
      "plate": "23",
      "latitude": "38.6748",
      "longitude": "39.2225",
      "counties": [
        "merkez",
        "kovancılar",
        "karakoçan",
        "palu",
        "arıcak",
        "baskil",
        "maden",
        "sivrice",
        "alacakaya",
        "keban",
        "ağın"
      ]
    },
    {
      "name": "erzincan",
      "plate": "24",
      "latitude": "39.7468",
      "longitude": "39.4911",
      "counties": [
        "merkez",
        "tercan",
        "üzümlü",
        "çayırlı",
        "iliç",
        "kemah",
        "kemaliye",
        "otlukbeli"
      ]
    },
    {
      "name": "erzurum",
      "plate": "25",
      "latitude": "39.9055",
      "longitude": "41.2658",
      "counties": [
        "yakutiye",
        "palandöken",
        "aziziye",
        "horasan",
        "oltu",
        "pasinler",
        "karayazı",
        "hınıs",
        "tekman",
        "karaçoban",
        "aşkale",
        "şenkaya",
        "çat",
        "köprüköy",
        "ispir",
        "tortum",
        "narman",
        "uzundere",
        "olur",
        "pazaryolu"
      ]
    },
    {
      "name": "eskişehir",
      "plate": "26",
      "latitude": "39.7667",
      "longitude": "30.5256",
      "counties": [
        "odunpazarı",
        "tepebaşı",
        "sivrihisar",
        "çifteler",
        "seyitgazi",
        "alpu",
        "mihalıççık",
        "mahmudiye",
        "beylikova",
        "inönü",
        "sarıcakaya",
        "günyüzü",
        "mihalgazi",
        "han"
      ]
    },
    {
      "name": "gaziantep",
      "plate": "27",
      "latitude": "37.0660",
      "longitude": "37.3781",
      "counties": [
        "şahinbey",
        "şehitkamil",
        "nizip",
        "islahiye",
        "nurdağı",
        "araban",
        "oğuzeli",
        "yavuzeli",
        "karkamış"
      ]
    },
    {
      "name": "giresun",
      "plate": "28",
      "latitude": "40.9175",
      "longitude": "38.3927",
      "counties": [
        "merkez",
        "bulancak",
        "espiye",
        "görele",
        "tirebolu",
        "dereli",
        "şebinkarahisar",
        "keşap",
        "yağlıdere",
        "alucra",
        "piraziz",
        "eynesil",
        "güce",
        "çanakçı",
        "doğankent",
        "çamoluk"
      ]
    },
    {
      "name": "gümüşhane",
      "plate": "29",
      "latitude": "40.4608",
      "longitude": "39.4803",
      "counties": [
        "merkez",
        "kelkit",
        "şiran",
        "kürtün",
        "torul",
        "köse"
      ]
    },
    {
      "name": "hakkari",
      "plate": "30",
      "latitude": "37.5774",
      "longitude": "43.7368",
      "counties": [
        "yüksekova",
        "merkez",
        "çukurca",
        "şemdinli",
        "çukurca"
      ]
    },
    {
      "name": "hatay",
      "plate": "31",
      "latitude": "36.2023",
      "longitude": "36.1613",
      "counties": [
        "antakya",
        "iskenderun",
        "defne",
        "dörtyol",
        "samandağ",
        "kırıkhan",
        "reyhanlı",
        "arsuz",
        "altınözü",
        "hassa",
        "erzin",
        "payas",
        "belen",
        "yayladağı",
        "kumlu"
      ]
    },
    {
      "name": "ısparta",
      "plate": "32",
      "latitude": "37.7626",
      "longitude": "30.5537",
      "counties": [
        "merkez",
        "yalvaç",
        "eğirdir",
        "şarkikaraağaç",
        "gelendost",
        "keçiborlu",
        "senirkent",
        "sütçüler",
        "gönen",
        "uluborlu",
        "atabey",
        "aksu",
        "yenişarbademli"
      ]
    },
    {
      "name": "mersin",
      "plate": "33",
      "latitude": "36.8121",
      "longitude": "34.6415",
      "counties": [
        "tarsus",
        "toroslar",
        "akdeniz",
        "yenişehir",
        "mezitli",
        "erdemli",
        "silifke",
        "anamur",
        "mut",
        "bozyazı",
        "gülnar",
        "aydıncık",
        "çamlıyayla"
      ]
    },
    {
      "name": "istanbul",
      "plate": "34",
      "latitude": "41.0082",
      "longitude": "28.9784",
      "counties": [
        "esenyurt",
        "küçükçekmece",
        "bağcılar",
        "ümraniye",
        "pendik",
        "bahçelievler",
        "üsküdar",
        "sultangazi",
        "gaziosmanpaşa",
        "maltepe",
        "kartal",
        "esenler",
        "kadıköy",
        "kağıthane",
        "avcılar",
        "ataşehir",
        "fatih",
        "eyüp",
        "sancaktepe",
        "başakşehir",
        "sarıyer",
        "sultanbeyli",
        "güngören",
        "beylikdüzü",
        "zeytinburnu",
        "bayrampaşa",
        "şişli",
        "beykoz",
        "arnavutköy",
        "tuzla",
        "çekmeköy",
        "beyoğlu",
        "büyükçekmece",
        "bakırköy",
        "beşiktaş",
        "silivri",
        "çatalca",
        "şile",
        "adalar"
      ]
    },
    {
      "name": "izmir",
      "plate": "35",
      "latitude": "38.4237",
      "longitude": "27.1428",
      "counties": [
        "buca",
        "karabağlar",
        "bornova",
        "konak",
        "karşıyaka",
        "bayraklı",
        "çiğli",
        "torbalı",
        "menemen",
        "gaziemir",
        "ödemiş",
        "kemalpaşa",
        "bergama",
        "aliağa",
        "menderes",
        "tire",
        "balçova",
        "narlıdere",
        "urla",
        "kiraz",
        "dikili",
        "çeşme",
        "bayındır",
        "seferihisar",
        "selçuk",
        "güzelbahçe",
        "foça",
        "kınık",
        "beydağ",
        "karaburun"
      ]
    },
    {
      "name": "kars",
      "plate": "36",
      "latitude": "40.6013",
      "longitude": "43.0975",
      "counties": [
        "merkez",
        "kağızman",
        "sarıkamış",
        "selim",
        "digor",
        "arpaçay",
        "akyaka",
        "susuz"
      ]
    },
    {
      "name": "kastamonu",
      "plate": "37",
      "latitude": "41.3766",
      "longitude": "33.7765",
      "counties": [
        "merkez",
        "tosya",
        "taşköprü",
        "cide",
        "inebolu",
        "araç",
        "devrekani",
        "bozkurt",
        "daday",
        "azdavay",
        "çatalzeytin",
        "küre",
        "doğanyurt",
        "ihsangazi",
        "pınarbaşı",
        "şenpazar",
        "abana",
        "seydiler",
        "hanönü",
        "ağlı"
      ]
    },
    {
      "name": "kayseri",
      "plate": "38",
      "latitude": "38.7205",
      "longitude": "35.4826",
      "counties": [
        "melikgazi",
        "kocasinan",
        "talas",
        "develi",
        "yahyalı",
        "bünyan",
        "incesu",
        "pınarbaşı",
        "tomarza",
        "yeşilhisar",
        "sarıoğlan",
        "hacılar",
        "sarız",
        "akkışla",
        "felahiye",
        "özvatan"
      ]
    },
    {
      "name": "kırklareli",
      "plate": "39",
      "latitude": "41.7355",
      "longitude": "27.2244",
      "counties": [
        "lüleburgaz",
        "merkez",
        "babaeski",
        "vize",
        "pınarhisar",
        "demirköy",
        "pehlivanköy",
        "kofçaz"
      ]
    },
    {
      "name": "kırşehir",
      "plate": "40",
      "latitude": "39.1461",
      "longitude": "34.1595",
      "counties": [
        "merkez",
        "kaman",
        "mucur",
        "çiçekdağı",
        "akpınar",
        "boztepe",
        "akçakent"
      ]
    },
    {
      "name": "kocaeli",
      "plate": "41",
      "latitude": "40.7654",
      "longitude": "29.9408",
      "counties": [
        "gebze",
        "izmit",
        "darıca",
        "körfez",
        "gölcük",
        "derince",
        "çayırova",
        "kartepe",
        "başiskele",
        "karamürsel",
        "kandıra",
        "dilovası"
      ]
    },
    {
      "name": "konya",
      "plate": "42",
      "latitude": "37.8746",
      "longitude": "32.4932",
      "counties": [
        "selçuklu",
        "meram",
        "karatay",
        "ereğli",
        "akşehir",
        "beyşehir",
        "çumra",
        "seydişehir",
        "ılgın",
        "cihanbeyli",
        "kulu",
        "karapınar",
        "kadınhanı",
        "sarayönü",
        "bozkır",
        "yunak",
        "doğanhisar",
        "hüyük",
        "altınekin",
        "hadim",
        "çeltik",
        "emirgazi",
        "tuzlukçu",
        "derebucak",
        "akören",
        "halkapınar",
        "yalıhüyük"
      ]
    },
    {
      "name": "kütahya",
      "plate": "43",
      "latitude": "39.4200",
      "longitude": "29.9857",
      "counties": [
        "merkez",
        "tavşanlı",
        "simav",
        "gediz",
        "emet",
        "altıntaş",
        "domaniç",
        "hisarcık",
        "aslanapa",
        "çavdarhisar",
        "şaphane",
        "pazarlar",
        "dumlupınar"
      ]
    },
    {
      "name": "malatya",
      "plate": "44",
      "latitude": "38.3554",
      "longitude": "38.3335",
      "counties": [
        "battalgazi",
        "yeşilyurt",
        "doğanşehir",
        "akçadağ",
        "darende",
        "hekimhan",
        "pütürge",
        "yazıhan",
        "arapgir",
        "arguvan",
        "kuluncak",
        "kale",
        "doğanyol"
      ]
    },
    {
      "name": "manisa",
      "plate": "45",
      "latitude": "38.6140",
      "longitude": "27.4296",
      "counties": [
        "yunusemre",
        "şehzadeler",
        "akhisar",
        "salihli",
        "turgutlu",
        "soma",
        "alaşehir",
        "saruhanlı",
        "kula",
        "kırkağaç",
        "demirci",
        "sarıgöl",
        "gördes",
        "selendi",
        "ahmetli",
        "gölmarmara",
        "köprübaşı"
      ]
    },
    {
      "name": "kahramanmaraş",
      "plate": "46",
      "latitude": "37.5753",
      "longitude": "36.9228",
      "counties": [
        "onikişubat",
        "dulkadiroğlu",
        "elbistan",
        "afşin",
        "türkoğlu",
        "pazarcık",
        "göksun",
        "andırın",
        "çağlayancerit",
        "nurhak",
        "ekinözü"
      ]
    },
    {
      "name": "mardin",
      "plate": "47",
      "latitude": "37.3129",
      "longitude": "40.7340",
      "counties": [
        "kızıltepe",
        "artuklu",
        "midyat",
        "nusaybin",
        "derik",
        "mazıdağı",
        "dargeçit",
        "savur",
        "yeşilli",
        "ömerli"
      ]
    },
    {
      "name": "muğla",
      "plate": "48",
      "latitude": "37.2154",
      "longitude": "28.3634",
      "counties": [
        "bodrum",
        "fethiye",
        "milas",
        "menteşe",
        "marmaris",
        "seydikemer",
        "ortaca",
        "yatağan",
        "dalaman",
        "köyceğiz",
        "ula",
        "datça",
        "kavaklıdere"
      ]
    },
    {
      "name": "muş",
      "plate": "49",
      "latitude": "38.7346",
      "longitude": "41.4910",
      "counties": [
        "merkez",
        "bulanık",
        "malazgirt",
        "varto",
        "hasköy",
        "korkut"
      ]
    },
    {
      "name": "nevşehir",
      "plate": "50",
      "latitude": "38.6247",
      "longitude": "34.7142",
      "counties": [
        "merkez",
        "ürgüp",
        "avanos",
        "gülşehir",
        "derinkuyu",
        "acıgöl",
        "kozaklı",
        "hacıbektaş"
      ]
    },
    {
      "name": "niğde",
      "plate": "51",
      "latitude": "37.9698",
      "longitude": "34.6766",
      "counties": [
        "merkez",
        "bor",
        "çiftlik",
        "ulukışla",
        "altunhisar",
        "çamardı"
      ]
    },
    {
      "name": "ordu",
      "plate": "52",
      "latitude": "40.9862",
      "longitude": "37.8797",
      "counties": [
        "altınordu",
        "ünye",
        "fatsa",
        "gölköy",
        "perşembe",
        "kumru",
        "aybastı",
        "korgan",
        "akkuş",
        "ulubey",
        "mesudiye",
        "ikizce",
        "gürgentepe",
        "çatalpınar",
        "çaybaşı",
        "kabataş",
        "çamaş",
        "gülyalı"
      ]
    },
    {
      "name": "rize",
      "plate": "53",
      "latitude": "41.0255",
      "longitude": "40.5177",
      "counties": [
        "merkez",
        "çayeli",
        "ardeşen",
        "pazar",
        "fındıklı",
        "güneysu",
        "kalkandere",
        "iyidere",
        "derepazarı",
        "çamlıhemşin",
        "ikizdere",
        "hemşin"
      ]
    },
    {
      "name": "sakarya",
      "plate": "54",
      "latitude": "40.7889",
      "longitude": "30.4060",
      "counties": [
        "adapazarı",
        "serdivan",
        "akyazı",
        "erenler",
        "hendek",
        "karasu",
        "geyve",
        "arifiye",
        "sapanca",
        "pamukova",
        "ferizli",
        "kaynarca",
        "kocaali",
        "karapürçek",
        "taraklı"
      ]
    },
    {
      "name": "samsun",
      "plate": "55",
      "latitude": "41.2797",
      "longitude": "36.3361",
      "counties": [
        "ilkadım",
        "atakum",
        "bafra",
        "çarşamba",
        "canik",
        "vezirköprü",
        "terme",
        "tekkeköy",
        "havza",
        "alaçam",
        "19 mayıs",
        "ayvacık",
        "kavak",
        "salıpazarı",
        "asarcık",
        "ladik",
        "yakakent"
      ]
    },
    {
      "name": "siirt",
      "plate": "56",
      "latitude": "37.9274",
      "longitude": "41.9420",
      "counties": [
        "merkez",
        "kurtalan",
        "pervari",
        "baykan",
        "şirvan",
        "eruh",
        "tillo"
      ]
    },
    {
      "name": "sinop",
      "plate": "57",
      "latitude": "42.0280",
      "longitude": "35.1517",
      "counties": [
        "merkez",
        "boyabat",
        "gerze",
        "ayancık",
        "durağan",
        "türkeli",
        "erfelek",
        "dikmen",
        "saraydüzü"
      ]
    },
    {
      "name": "sivas",
      "plate": "58",
      "latitude": "39.7505",
      "longitude": "37.0150",
      "counties": [
        "merkez",
        "şarkışla",
        "yıldızeli",
        "suşehri",
        "gemerek",
        "zara",
        "kangal",
        "gürün",
        "divriği",
        "koyulhisar",
        "altınyayla",
        "hafik",
        "ulaş",
        "imranlı",
        "akıncılar",
        "gülova",
        "doğanşar"
      ]
    },
    {
      "name": "tekirdağ",
      "plate": "59",
      "latitude": "40.9781",
      "longitude": "27.5117",
      "counties": [
        "çorlu",
        "süleymanpaşa",
        "çerkezköy",
        "kapaklı",
        "ergene",
        "malkara",
        "saray",
        "hayrabolu",
        "şarköy",
        "muratlı",
        "marmaraereğlisi"
      ]
    },
    {
      "name": "tokat",
      "plate": "60",
      "latitude": "40.3235",
      "longitude": "36.5522",
      "counties": [
        "merkez",
        "erbaa",
        "turhal",
        "niksar",
        "zile",
        "reşadiye",
        "almus",
        "pazar",
        "başçiftlik",
        "yeşilyurt",
        "artova",
        "sulusaray"
      ]
    },
    {
      "name": "trabzon",
      "plate": "61",
      "latitude": "41.0027",
      "longitude": "39.7168",
      "counties": [
        "ortahisar",
        "akçaabat",
        "araklı",
        "of",
        "yomra",
        "arsin",
        "vakfıkebir",
        "sürmene",
        "maçka",
        "beşikdüzü",
        "çarşıbaşı",
        "tonya",
        "düzköy",
        "çaykara",
        "şalpazarı",
        "hayrat",
        "köprübaşı",
        "dernekpazarı"
      ]
    },
    {
      "name": "tunceli",
      "plate": "62",
      "latitude": "39.1062",
      "longitude": "39.5483",
      "counties": [
        "merkez",
        "pertek",
        "mazgirt",
        "çemişgezek",
        "hozat",
        "ovacık",
        "pülümür",
        "nazımiye"
      ]
    },
    {
      "name": "şanlıurfa",
      "plate": "63",
      "latitude": "37.1674",
      "longitude": "38.7955",
      "counties": [
        "eyyübiye",
        "haliliye",
        "siverek",
        "viranşehir",
        "karaköprü",
        "akçakale",
        "suruç",
        "birecik",
        "ceylanpınar",
        "harran",
        "bozova",
        "hilvan",
        "halfeti"
      ]
    },
    {
      "name": "uşak",
      "plate": "64",
      "latitude": "38.6742",
      "longitude": "29.4059",
      "counties": [
        "merkez",
        "banaz",
        "eşme",
        "sivaslı",
        "ulubey",
        "karahallı"
      ]
    },
    {
      "name": "van",
      "plate": "65",
      "latitude": "38.5012",
      "longitude": "43.3730",
      "counties": [
          "ipekyolu",
          "erciş",
          "tuşba",
          "edremit",
          "özalp",
          "çaldıran",
          "başkale",
          "muradiye",
          "gürpınar",
          "gevaş",
          "saray",
          "çatak",
          "bahçesaray"
      ]
    },
    {
      "name": "yozgat",
      "plate": "66",
      "latitude": "39.8210",
      "longitude": "34.8086",
      "counties": [
        "merkez",
        "sorgun",
        "akdağmadeni",
        "yerköy",
        "sarıkaya",
        "boğazlıyan",
        "çekerek",
        "şefaatli",
        "saraykent",
        "çayıralan",
        "kadışehri",
        "aydıncık",
        "yenifakıllı",
        "çandır"
      ]
    },
    {
      "name": "zonguldak",
      "plate": "67",
      "latitude": "41.4535",
      "longitude": "31.7894",
      "counties": [
        "ereğli",
        "merkez",
        "çaycuma",
        "devrek",
        "kozlu",
        "alaplı",
        "kilimli",
        "gökçebey"
      ]
    },
    {
      "name": "aksaray",
      "plate": "68",
      "latitude": "38.3686",
      "longitude": "34.0297",
      "counties": [
        "merkez",
        "ortaköy",
        "eskil",
        "gülağaç",
        "güzelyurt",
        "ağaçören",
        "sarıyahşi",
        "sultanhanı"
      ]
    },
    {
      "name": "bayburt",
      "plate": "69",
      "latitude": "40.2603",
      "longitude": "40.2280",
      "counties": [
        "merkez",
        "demirözü",
        "aydıntepe"
      ]
    },
    {
      "name": "karaman",
      "plate": "70",
      "latitude": "37.1810",
      "longitude": "33.2222",
      "counties": [
        "merkez",
        "ermenek",
        "sarıevliler",
        "ayrancı",
        "kazımkarabekir",
        "başyayla"
      ]
    },
    {
      "name": "kırıkkale",
      "plate": "71",
      "latitude": "39.8398",
      "longitude": "33.5089",
      "counties": [
        "merkez",
        "yahşihan",
        "keskin",
        "delice",
        "bahşili",
        "sulakyurt",
        "balışeyh",
        "karakeçili",
        "çelebi"
      ]
    },
    {
      "name": "batman",
      "plate": "72",
      "latitude": "37.8895",
      "longitude": "41.1293",
      "counties": [
        "merkez",
        "kozluk",
        "beşiri",
        "sason",
        "gerçüş",
        "hasankeyf"
      ]
    },
    {
      "name": "şırnak",
      "plate": "73",
      "latitude": "37.5190",
      "longitude": "42.4537",
      "counties": [
        "cizre",
        "silopi",
        "merkez",
        "idil",
        "uludere",
        "beytüşşebap",
        "güçlükonak"
      ]
    },
    {
      "name": "bartın",
      "plate": "74",
      "latitude": "41.6376",
      "longitude": "32.3338",
      "counties": [
        "merkez",
        "ulus",
        "amasra",
        "kurucaşile"
      ]
    },
    {
      "name": "ardahan",
      "plate": "75",
      "latitude": "41.1130",
      "longitude": "42.7023",
      "counties": [
        "merkez",
        "göle",
        "çıldır",
        "hanak",
        "posof",
        "damal"
      ]
    },
    {
      "name": "ığdır",
      "plate": "76",
      "latitude": "39.9201",
      "longitude": "44.0436",
      "counties": [
        "merkez",
        "tuzluca",
        "aralık",
        "karakoyunlu"
      ]
    },
    {
      "name": "yalova",
      "plate": "77",
      "latitude": "40.6549",
      "longitude": "29.2842",
      "counties": [
        "merkez",
        "çiftlikköy",
        "çınarcık",
        "altınova",
        "armutlu",
        "termal"
      ]
    },
    {
      "name": "karabük",
      "plate": "78",
      "latitude": "41.1956",
      "longitude": "32.6227",
      "counties": [
        "merkez",
        "safranbolu",
        "yenice",
        "eskipazar",
        "eflani",
        "ovacık"
      ]
    },
    {
      "name": "kilis",
      "plate": "79",
      "latitude": "36.7165",
      "longitude": "37.1147",
      "counties": [
        "merkez",
        "musabeyli",
        "elbeyli",
        "polateli"
      ]
    },
    {
      "name": "osmaniye",
      "plate": "80",
      "latitude": "37.0746",
      "longitude": "36.2464",
      "counties": [
        "merkez",
        "kadirli",
        "düziçi",
        "bahçe",
        "toprakkale",
        "sumbas",
        "hasanbeyli"
      ]
    },
    {
      "name": "düzce",
      "plate": "81",
      "latitude": "40.8387",
      "longitude": "31.1626",
      "counties": [
        "merkez",
        "akçakoca",
        "kaynaşlı",
        "gölyaka",
        "çilimli",
        "yığılca",
        "gümüşova",
        "cumayeri"
      ]
    }
  ]

  export default CitiesData