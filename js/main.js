const strWithVowel = "Salom mening ismim Falonchi"
let strWithVowels2 = "Bugun ko'chada havo judayam yaxshi";


function  vowelRemover(field){
       return console.log(field.replaceAll('a','').replaceAll('u','').replaceAll('o','').replaceAll('i','').replaceAll('e',''));
}

vowelRemover(strWithVowel);
vowelRemover(strWithVowels2);


// 1.Funksiya yozdim va bunda replaceAll dan foydalandim chunki unli harflarni bo'sh string bilan almashtirib qo'ysam ular yo'qolib qoladi.