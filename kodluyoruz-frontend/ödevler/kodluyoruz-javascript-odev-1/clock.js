function isim() {

  let isimBilgisi = prompt("Adınız nedir?");
  document.querySelector("#myName").innerHTML = isimBilgisi;
}

function showTime() {
  let tarih = new Date();

  let saat = tarih.getHours();
  let dakika = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let gun = tarih.getDay();

  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  if (gun == 0) {
    gun = "Pazar";
  }
  else if (gun == 1) {
    gun = "Pazartesi";
  }
  else if (gun == 2) {
    gun = "Salı";
  }
  else if (gun == 3) {
    gun = "Çarşamba";
  }
  else if (gun == 4) {
    gun = "Perşembe";
  }
  else if (gun == 5) {
    gun = "Cuma";
  }
  else if (gun == 6) {
    gun = "Cumartesi";
  }

  let tarihBilgisi = `${saat}:${dakika}:${saniye} ${gun}`;
  document.getElementById("myClock").innerHTML = tarihBilgisi;

  setTimeout(showTime, 500);

}

isim();
showTime();
