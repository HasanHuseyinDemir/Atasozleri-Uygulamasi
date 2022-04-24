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
    }
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
    quoteAuthor.innerHTML=quotes[number].name;
    quote.innerHTML=quotes[number].quote;
    console.log(number);
    renkdegistir();
}

setInterval(displayQuote,6000);