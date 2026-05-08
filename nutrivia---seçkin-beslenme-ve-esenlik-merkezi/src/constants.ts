import { 
  Apple, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Droplets, 
  Facebook, 
  GraduationCap, 
  Instagram, 
  Linkedin, 
  Twitter,
  Mail, 
  MapPin, 
  Menu, 
  Phone, 
  Play, 
  Quote, 
  Sparkles,
  Star, 
  Users, 
  X,
  Stethoscope,
  Heart,
  Zap,
  Activity,
  Calendar,
  Award
} from 'lucide-react';

export const ICONS = {
  Apple,
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Quote,
  Sparkles,
  Star,
  Users,
  X,
  Stethoscope,
  Heart,
  Zap,
  Activity,
  Calendar,
  Award
};


export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop", // High-end fitness/lifestyle
  clinic: "https://images.unsplash.com/photo-1629909613654-28a362c5ad00?q=80&w=2669&auto=format&fit=crop", // Professional clinic
  nutrition: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2671&auto=format&fit=crop", // Elegant flatlay food
  lifestyle: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2664&auto=format&fit=crop", // Luxury healthy meal
  expert: "/expert.jpg", // Professional female dietitian photo
  background: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2574&auto=format&fit=crop" // Abstract botanical
};

export const BLOG_POSTS = [
  {
    id: "bahar-detoksu",
    title: "Bahar Detoksu: Vücudunuzu Yenilemenin En Doğal Yolları",
    excerpt: "Mevsim geçişlerinde metabolizmanızı canlandıracak, bilimsel temelli beslenme stratejileri ve özel tarifler.",
    content: `Bahar ayları doğanın uyanışıyla birlikte vücudumuzun da tazelenme ihtiyacı duyduğu bir dönemdir. Bilimsel olarak vücudumuzun doğal bir detoks sistemi (karaciğer ve böbrekler) olsa da, yanlış beslenme ve çevresel faktörler bu sistemi yorabilir.

    Neden Detoks Yapmalıyız?
    - Enerji seviyelerinizi yükseltmek
    - Sindirim sistemini rahatlatmak
    - Cilt sağlığını desteklemek
    - Mevsimsel alerjilere karşı bağışıklığı güçlendirmek

    Önerilen Stratejiler:
    1. Hidrasyon: Günde en az 2.5-3 litre su tüketimi.
    2. Mevsim Yeşillikleri: Karaciğer dostu enginar, kuşkonmaz ve taze bakla.
    3. Antioksidan Gücü: Yaban mersini, çilek gibi koyu renkli meyveler.
    4. İşlenmiş Gıdalardan Uzak Durun: Şeker ve paketli gıdalar detoks sürecinin en büyük düşmanıdır.`,
    image: IMAGES.nutrition,
    category: "Beslenme",
    date: "12 Mart 2024"
  },
  {
    id: "diyabete-dur-deyin",
    title: "Fonksiyonel Tıp Yaklaşımı ile Diyabete Dur Deyin",
    excerpt: "Sadece semptomları değil, kök nedenleri hedefleyen beslenme planları ile kan şekeri kontrolünü nasıl optimize edebilirsiniz?",
    content: `Diyabet yönetimi sadece ilaçlardan ibaret değildir. Fonksiyonel tıp bakış açısıyla, insülin direncini kırmak ve doku hassasiyetini artırmak mümkündür.

    Diyabette Kök Nedenler:
    - Kronik inflamasyon
    - Bağırsak mikrobiyotası bozuklukları
    - Magnezyum ve D vitamini eksiklikleri
    - Kronik stres ve kortizol dengesizliği

    Beslenme Planında Temel Taşlar:
    - Düşük Glisemik Yük: Kan şekerini aniden yükseltmeyen karbonhidratlar.
    - Sağlıklı Yağlar: Zeytinyağı, avokado ve çiğ kuruyemişler.
    - Lifli Beslenme: Her öğünde bol miktarda taze sebze.`,
    image: IMAGES.lifestyle,
    category: "Sağlık",
    date: "05 Mart 2024"
  },
  {
    id: "mindful-eating",
    title: "Mindful Eating: Bilinçli Farkındalıkla Beslenme Sanatı",
    excerpt: "Duygusal yeme ataklarını yönetmek ve yemekle olan ilişkinizi daha sağlıklı bir boyuta taşımak için pratik ipuçları.",
    content: `Yemekle olan ilişkiniz sadece ne yediğinizle değil, nasıl yediğinizle de ilgilidir. Mindful eating (farkındalıkla beslenme), modern dünyanın getirdiği hızlı yeme alışkanlığına karşı bir panzehirdir.

    Farkındalıkla Beslenme Nasıl Uygulanır?
    - Doygunluk Sinyallerini Dinleyin: Gerçek açlık ile duygusal açlığı ayırın.
    - Yavaşlayın: Lokmaları iyi çiğneyin ve tadını çıkarın.
    - Dikkat Dağıtıcıları Uzaklaştırın: Telefon, TV ve bilgisayar olmadan yemek yiyin.
    - Besinlere Şükran Duyun: Tabağınıza gelen gıdanın yolculuğunu düşünün.

    Bu yaklaşım, kilo kontrolünü doğal bir şekilde sağlar ve yemek sonrası şişkinlik/hazımsızlık sorunlarını minimize eder.`,
    image: IMAGES.clinic,
    category: "Psikoloji",
    date: "28 Şubat 2024"
  }
];

export const RECIPES = [
  {
    id: "avokadolu-smoothie",
    title: "Avokadolu & Ispanaklı Enerji Deposu",
    time: "5 Dk",
    difficulty: "Kolay",
    image: "https://images.unsplash.com/photo-1623065426102-30a21bd99949?q=80&w=2574&auto=format&fit=crop",
    ingredients: ["1/2 Avokado", "1 avuç Ispanak", "1 adet Yeşil Elma", "1 su bardağı Hindistan Cevizi Suyu", "1 çay kaşığı Chia Tohumu"],
    content: "Tüm malzemeleri pürüzsüz olana kadar blenderdan geçirin. Sabah kahvaltısı yerine veya spor öncesi için mükemmeldir."
  },
  {
    id: "kinoa-salata",
    title: "Renkli Kinoa Salatası",
    time: "20 Dk",
    difficulty: "Orta",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop",
    ingredients: ["1 su bardağı Kinoa", "Nar taneleri", "Taze Nane", "Ceviz içi", "Zeytinyağı & Limon"],
    content: "Kinoaları haşlayıp soğutun. İnce kıyılmış yeşillikler ve diğer malzemelerle karıştırın. Sosunu servis öncesi ekleyin."
  }
];

export const PROGRAMS = [
  {
    id: "kilo-yonetimi",
    title: "Sürdürülebilir Kilo Yönetimi",
    description: "Kalıcı kilo kaybı için bilimsel temelli, yasaksız ve kişiye özel beslenme stratejileri.",
    features: ["Haftalık takip", "Vücut kompozisyon analizi", "Motivasyon desteği"]
  },
  {
    id: "fonksiyonel-beslenme",
    title: "Fonksiyonel Tıp Beslenmesi",
    description: "Kronik hastalıkların kök nedenlerine odaklanan, inflamasyon karşıtı iyileştirici beslenme planları.",
    features: ["Bağırsak sağlığı", "Hormon dengesi", "Eliminasyon diyeti"]
  },
  {
    id: "sporcu-performansi",
    title: "Atletik Performans Beslenmesi",
    description: "Antrenman verimliliğini ve toparlanma sürecini optimize eden profesyonel sporcu beslenmesi.",
    features: ["Makro besin planlaması", "Takviye danışmanlığı", "Yarışma hazırlığı"]
  }
];

export const FAQS = [
  {
    question: "İlk seans ne kadar sürer?",
    answer: "İlk değerlendirme seansımız yaklaşık 60 dakika sürmektedir. Bu seansta tıbbi geçmişiniz, beslenme alışkanlıklarınız ve hedefleriniz detaylıca analiz edilir."
  },
  {
    question: "Şehir dışındayım, paket alabilir miyim?",
    answer: "Evet, tüm hizmetlerimiz 'Online Danışmanlık' kapsamında görüntülü görüşmeler ile dünyanın her yerinden ulaşılabilirdir."
  },
  {
    question: "Listeler kişiye özel mi hazırlanıyor?",
    answer: "Kesinlikle. Standart listeler değil; kan tahlilleriniz, yaşam tarzınız, damak tadınız ve ekonomik şartlarınız göz önünde bulundurularak size özel planlama yapılır."
  }
];

export const COLORS = {
  green: "#0F221A",
  gold: "#C8A96B",
  cream: "#F6F1E8",
  beige: "#EBE3D5"
};
