import type { Dict } from "./types";

// Tagalog. Product terms (Nenkin, tax refund, Partner Agreement) stay in English,
// the way Filipino workers in Japan usually say them.
export const tl: Dict = {
  htmlLang: "tl",
  meta: {
    title: "Nenkin Kantan Partner Program | Kumita ng ¥3,000 hanggang ¥15,000 bawat referral",
    description:
      "Tulungan ang mga kaibigan mo na makuha ang pension refund at tax refund nila sa Japan. Ikaw ang magre-refer, kami ang bahala sa papeles, kikita ka ng ¥3,000 hanggang ¥15,000 bawat kaso.",
  },
  nav: {
    partners: "Partners",
    commission: "Komisyon",
    how: "Paano ito gumagana",
    faq: "FAQ",
    language: "Wika",
  },
  cta: { join: "Sumali sa Messenger", site: "Bisitahin ang website" },
  hero: {
    title: "May pera pa ang kaibigan mo sa Japan.",
    sub: "Ipakilala sila sa Nenkin Kantan. Kami ang bahala sa lahat ng papeles. Kikita ka ng **¥3,000 hanggang ¥15,000** bawat kaso.",
    alt: "Dalawang magkatrabaho na nagpapahinga, ipinapakita ng isa ang kanyang phone",
  },
  bonus: {
    title: "Bonus para sa Oktubre at Nobyembre 2026.",
    body: "Dagdag na ¥500 sa bawat matagumpay na kaso, bukod pa sa karaniwan mong komisyon. Walang limit.",
    ends: "Matatapos pagkatapos ng Nobyembre 2026.",
  },
  problem: {
    title: "May kilala ka bang aalis na ng Japan, o nakaalis na?",
    signs: [
      "Malapit nang matapos ang kontrata nila",
      "Ilang taon silang nagtrabaho at nagbayad ng Nenkin",
      "Hindi pa nila nakukuha pabalik ang pera",
      "O hindi pa sila nag-apply ng tax refund",
    ],
    p1: "Maraming tao ang hindi alam na may ganitong pera. Ang iba naman ay takot sa papeles o sa scam.",
    p2: "Ikaw ang taong pinagkakatiwalaan nila. Ang salita mo ang makakapagpakilos sa kanila.",
    alt: "Isang babae na nag-iimpake ng damit sa maleta sa maliit na apartment",
  },
  why: {
    title: "Hindi ka nagbebenta. Nagbabahagi ka ng bagay na makakatulong.",
    moneyTitle: "Totoong perang maibabalik",
    amounts: [
      { label: "Nenkin, 3 taong nagbayad", value: "mga ¥500,000 hanggang ¥700,000" },
      { label: "Nenkin, 5 taong nagbayad", value: "mga ¥1,000,000 hanggang ¥3,000,000" },
      { label: "Tax refund, bawat taon", value: "mga ¥50,000 hanggang ¥150,000" },
      { label: "Maternity allowance", value: "mga ¥488,000" },
    ],
    disclaimer: "Para sa sanggunian lang. Hindi ito pangako. Iba-iba ang bawat kaso.",
    feesTitle: "Tapat at fixed na bayad",
    feesBody:
      "Public ang mga presyo namin. Hindi kami kumukuha ng porsyento sa matatanggap ng kaibigan mo.",
    depositTitle: "Walang deposito para sa 1st Nenkin withdrawal",
    depositBody:
      "Magbabayad ang kaibigan mo pagkatapos makuha ang resulta. Wala ring deposito para sa mga nakaalis na ng Japan.",
    anywhereTitle: "Puwede kahit saan",
    anywhereBody: "Nasa Japan man o nasa sariling bansa na, puwedeng mag-apply sa amin ang kaibigan mo.",
    alt: "Isang lalaki na tumatawa habang naka-video call sa pamilya mula sa apartment niya sa Japan",
  },
  commission: {
    eyebrow: "Ang kikitain mo",
    title: "Malinaw na komisyon sa bawat kaso",
    groups: [
      { name: "Nenkin refund", rows: ["1st o 2nd withdrawal", "Full package (1st + 2nd)"] },
      { name: "Tax refund", rows: ["Bawat taon", "Full 5-year package"] },
      { name: "Maternity", rows: ["Maternity support"] },
    ],
    rate: "{rate} ng fee",
    note: "Nakabatay ang komisyon sa main service fee. Walang komisyon ang mga add-on service (translation, proxy collection, address cancellation).",
    payTiming:
      "**Kailan ka mababayaran:** pagkatapos makuha ng kaibigan mo ang resulta at mabayaran ang fee. Para sa 1st Nenkin withdrawal, mga **4 hanggang 6 na buwan** iyon.",
    bonusTitle: "Okt at Nob 2026: +¥500 sa bawat matagumpay na kaso",
    bonusList: [
      "Dagdag sa karaniwan mong komisyon",
      "Lahat ng serbisyo. Walang limit sa kaso.",
      "Sabay na ibabayad. Hindi na kailangang mag-sign up ulit.",
    ],
    examplesTitle: "Ganito ang puwedeng mangyari",
    examplesNote:
      "Mga halimbawa lang ito, kasama ang Okt at Nob bonus. Nakadepende ang totoong kita mo sa mga kaso mo.",
    examplesWho: [
      "5 kaibigan, Nenkin full package",
      "10 kaibigan, Nenkin full package",
      "1 kaibigan, full 5-year tax refund",
    ],
  },
  how: {
    title: "Apat na hakbang. Ang bahagi mo ay hakbang 1 at hakbang 4.",
    steps: [
      { title: "Mag-message sa amin", body: "Magpadala ng mensahe sa aming Facebook page." },
      {
        title: "Pirmahan ang Partner Agreement",
        body: "Nakasulat dito ang mga karapatan mo, tungkulin mo, at mga patakaran sa komisyon.",
      },
      {
        title: "Kunin ang iyong materials",
        body: "Price sheet, impormasyon tungkol sa serbisyo, at tips sa pakikipag-usap sa customer.",
      },
      {
        title: "I-refer ang mga kaibigan mo",
        body: "Kami ang hahawak ng kaso. Mababayaran ka ayon sa mga patakaran sa iyong Partner Agreement.",
      },
    ],
    yourPart: "Bahagi mo",
  },
  straight: {
    title: "Ang hinihingi namin sa iyo. Ang maaasahan mo sa amin.",
    terms: [
      {
        title: "Oras ng bayad",
        body: "Mababayaran ka pagkatapos makuha ng customer ang resulta at mabayaran ang fee. Mga 4 hanggang 6 na buwan ang 1st Nenkin withdrawal. Hindi agad-agad ang komisyon.",
      },
      {
        title: "Walang advance",
        body: "Hindi kami nagbabayad ng komisyon bago pormal na maisumite ang application.",
      },
      {
        title: "Tapat na payo",
        body: "Gamitin ang public prices namin. Huwag baguhin ang fees. Huwag mangako ng resulta na hindi namin sinabi.",
      },
    ],
    closing:
      "Ang tapat na partner ay pinagkakatiwalaan ng mga kaibigan niya. Sa tiwalang iyon lumalaki ang kita mo.",
  },
  grow: {
    eyebrow: "Palakihin ang kita mo",
    title: "Iba pang paraan para makipagtulungan sa amin",
    leaderTitle: "Partner Leader",
    leaderSub: "sa core service fees ng buong team mo",
    leaderBody:
      "Mamuno sa 5 o higit pang partner. Kailangan ng team mo ng hindi bababa sa 10 matagumpay na kaso bawat buwan. Binabayaran buwan-buwan.",
    employersTitle: "Mga kumpanya, kumiai, at employer ng foreign workers",
    offers: [
      "**10% discount sa fee** para sa lahat ng workers mo sa susunod na quarter, kung makapag-refer ka ng 20+ kaso sa isang quarter",
      "**Fixed na espesyal na presyo** bawat tao para sa tuloy-tuloy na volume bawat taon",
      "**Libre ang unang kaso**, para masubukan mo ang kalidad namin bago pumirma",
    ],
    details: "Pag-uusapan natin ang mga detalye isa-isa.",
    alt: "Isang HR coordinator na nagpapaliwanag ng mga papeles sa dalawang manggagawa",
  },
  faq: {
    title: "Mga tanong ng mga partner",
    items: [
      {
        q: "Kailangan ko ba ng experience?",
        a: "Hindi. Ikaw ang magkokonekta at magre-refer. Kami ang hahawak ng kaso at bibigyan ka namin ng materials.",
      },
      { q: "May papeles ba akong gagawin?", a: "Wala. Ang Nenkin Kantan ang gagawa ng lahat." },
      {
        q: "Kailan ako mababayaran?",
        a: "Pagkatapos makuha ng customer ang resulta at mabayaran ang fee. May sariling payment point ang bawat serbisyo. Nakasulat ito sa Partner Agreement mo.",
      },
      {
        q: "Puwede ba akong kumita sa mga nakaalis na ng Japan?",
        a: "Oo. Mababayaran ka pagkatapos magbayad nang buo ang customer at tanggapin ng government office ang application.",
      },
      {
        q: "May limit ba ang referrals?",
        a: "Wala. Walang limit sa kaso ang +¥500 bonus sa Okt at Nob 2026.",
      },
      {
        q: "Puwede ko bang sabihin sa mga kaibigan ko kung magkano ang makukuha nila?",
        a: "Ibahagi ang mga reference amount, at sabihin nang malinaw na hindi ito pangako.",
      },
      { q: "Paano ako sasali?", a: "Mag-message sa aming Facebook page. Gagabayan ka namin." },
    ],
  },
  final: {
    title: "Isang mensahe. Doon ka magsisimula.",
    body: "Kilala mo na ang mga taong nangangailangan nito. Matatapos ang +¥500 bonus pagkatapos ng Nobyembre 2026.",
    call: "Gusto mo bang tumawag?",
    alt: "Isang babae na naka-work jacket, nakangiti habang nagme-message sa tren pauwi",
  },
  footer: {
    about:
      "Ang Nenkin Kantan ay serbisyo ng KICHI LLC, isang kumpanyang rehistrado sa Japan. Inaasikaso namin ang pension refund at tax refund ng mga foreign worker.",
    hours: "Lunes hanggang Biyernes, 9:30 hanggang 18:00 JST. Sabado, sa appointment.",
  },
};
