const quotes = [
    {
        name:"Nasreddin Hoca",
        quote:"Damdan düşenin halini, damdan düşen bilir."
    },
    {
        name:"Hz.Mevlana",
        quote:"Kalbimi ve ruhumu vermemin bir yararı yok, sen zaten bunlara sahipsin. O yüzden sana bir ayna getirdim. Kendine bak beni hatırla."
    },
    {
        name:"Anonim",
        quote:"Akıl yaşta değil baştadır"
    },
    {
        name:"Can Yücel",
        quote:"Beklemek güzeldir ama doğru durakta."
    },
    {
        name:"Aamir Khan",
        quote:"Kаlbinde gerçek inаnç ve cesаreti olаn her zаmаn kаzаnır"
    },
    {
        name:"Franz Kafka",
        quote:"Ölümün olduğu bu dünyаdа, hiçbir şey çok dа ciddi değildir аslındа."
    },
    {
        name:"Hz.Mevlana",
        quote:"Doğruların yemin etmeye ihtiyacı yoktur."
    },
        {
        name: "Hz. Mevlana",
        quote: "Kalbimi ve ruhumu vermemin bir yararı yok, sen zaten bunlara sahipsin. O yüzden sana bir ayna getirdim. Kendine bak beni hatırla."
    },
    {
        name: "Anonim",
        quote: "Akıl yaşta değil baştadır."
    },
    {
        name: "Can Yücel",
        quote: "Beklemek güzeldir ama doğru durakta."
    },
    {
        name: "Aamir Khan",
        quote: "Kalbinde gerçek inanç ve cesareti olan her zaman kazanır."
    },
    {
        name: "Franz Kafka",
        quote: "Ölümün olduğu bu dünyada, hiçbir şey çok da ciddi değildir aslında."
    },
    {
        name: "Hz. Mevlana",
        quote: "Doğruların yemin etmeye ihtiyacı yoktur."
    },
    {
        name: "Anonim",
        quote: "Bir elin nesi var, iki elin sesi var."
    },
    {
        name: "Atasözü",
        quote: "Baş başa bir şey öğrenilmez."
    },
    {
        name: "Cemil Meriç",
        quote: "Bir insanı tanımak için ona biraz güç verin."
    },
    {
        name: "Hz. Mevlana",
        quote: "Ya olduğun gibi görün, ya göründüğün gibi ol."
    },
    {
        name: "Atasözü",
        quote: "Bir koyup üç almak."
    },
    {
        name: "Can Yücel",
        quote: "Çok yaşadım, çok."
    },
    {
        name: "Hz. Ali",
        quote: "Düşenin dostu olmaz."
    },
    {
        name: "Atasözü",
        quote: "Dost kara günde belli olur."
    },
    {
        name: "Hz. Mevlana",
        quote: "Dost mecliste belli olur, düşman harpte."
    },
    {
        name: "Atasözü",
        quote: "Dostunu söyle, dirliğini söyleyeyim sana."
    },
    {
        name: "Can Yücel",
        quote: "Gel de şu dağları benimle sen aş."
    },
    {
        name: "Atasözü",
        quote: "Her yiğidin bir yoğurt yiyişi vardır."
    },
    {
        name: "Mevlana",
        quote: "Hep aynı taşa yıllarca çalmak kaymağını yemektir aşk."
    },
    {
        name: "Atasözü",
        quote: "Hırsızın hiç mi suçu yok? Karlısını çalmış, yağmurlusunu bırakmış."
    },
    {
        name: "Hz. Mevlana",
        quote: "İlim ilim bilmektir, ilim kendin bilmektir."
    },
    {
        name: "Atasözü",
        quote: "İki karpuz bir koltuk altında taşınmaz."
    },
    {
        name: "Cemil Meriç",
        quote: "İnsan, kendini bile bilmezse neye yarar?"
    },
    {
        name: "Atasözü",
        quote: "İşleyen demir ışıldar."
    },
    {
        name: "Hz. Mevlana",
        quote: "Kime dersin 'benim canım'? / Kim ölünce sen de ona üzülüyorsan, o senin canındır."
    },
    {
        name: "Atasözü",
        quote: "Komşuda pişer, bize de düşer."
    },
    {
        name: "Can Yücel",
        quote: "Korkma, sönmez bu şafaklarda yüzen al sancak."
    },
    {
        name: "Atasözü",
        quote: "Ne ekersen onu biçersin."
    },
    {
        name: "Hz. Mevlana",
        quote: "Ol dersen olur, olma dersen olmaz."
    },
    {
        name: "Atasözü",
        quote: "Para pul herşeydir deme, delikanlı yiğidin sözüdür."
    },
    {
        name: "Can Yücel",
        quote: "Rüzgar eken fırtına biçer."
    },
    {
        name: "Atasözü",
        quote: "Sabrın sonu selamettir."
    },
    {
        name: "Hz. Mevlana",
        quote: "Sen aşk nedir bilmezsin, Allah aşkıyla yan!"
    },
    {
        name: "Atasözü",
        quote: "Su uyur düşman uyumaz."
    },
    {
        name: "Can Yücel",
        quote: "Söz ola kese savaşı, söz ola kestire başı."
    },
    {
        name: "Atasözü",
        quote: "Ucuz etin yahnisi yavan olur."
    },
    {
        name: "Hz. Mevlana",
        quote: "Varsan var ol, yoksan zaten yok."
    },
    {
        name: "Atasözü",
        quote: "Yanlış yola giden yolda bulur kendini."
    },
    {
        name: "Can Yücel",
        quote: "Yarası olan gocunur."
    },
    {
        name: "Atasözü",
        quote: "Yavaş giden yol alır."
    },
    {
        name: "Hz. Mevlana",
        quote: "Yıldızlar sönmez, insanlar ölmez."
    },
    {
        name: "Atasözü",
        quote: "Zenginin malı, züğürdün çenesini yorar."
    },
    {
        name: "Can Yücel",
        quote: "Zorda kalan, kızınca özür diler."
    },
]


const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");
const bodyBcg = document.querySelector("body");
displayQuote();

function renkdegistir(){
    let hexCol="#";
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for (let i =0;i<6;i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol+=hexNumbers[random];
    }
    bodyBcg.style.backgroundColor=hexCol;
}

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.textContent=quotes[number].name;
    quote.textContent=quotes[number].quote;
    console.log(number);
    renkdegistir();
}

setInterval(displayQuote,6000);
