//Kullanıcıdan iki sayı ve yapmak istediği işlemi (+, -, *, /) alın. Seçilen işleme göre sonucu hesaplayarak ekrana yazdırın. Kullanıcı geçersiz bir işlem girdiğinde uyarı mesajı gösterin.
alert("Merhaba, lutfen iki tane sayi giriniz.");

const firstNum = Number(prompt("1.sayi: "));
const secondNum = Number(prompt("2.sayi: "));

alert("Simdi ise yapmak istediginiz islemi seciniz.(+, -, *, /)");

let sonuc = 0;

islem = prompt("Islem: ");

if (islem === "+") {
  sonuc = firstNum + secondNum;
  alert(`Yapmak istediginiz isleme gore sonucunuz ${sonuc}`);
} else if (islem === "-") {
  sonuc = firstNum - secondNum;
  alert(`Yapmak istediginiz isleme gore sonucunuz ${sonuc}`);
} else if (islem === "*") {
  sonuc = firstNum * secondNum;
  alert(`Yapmak istediginiz isleme gore sonucunuz ${sonuc}`);
} else if (islem === "/") {
  sonuc = firstNum / secondNum;
  alert(`Yapmak istediginiz isleme gore sonucunuz ${sonuc}`);
} else {
  alert("Bir seyleri yanlis girdiniz.");
}
