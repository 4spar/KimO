let kisiler = [];

document.getElementById('kisiForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const isim = document.getElementById('isim').value.trim();
  const kimlik = document.getElementById('kimlik').value.trim();
  const adres = document.getElementById('adres').value.trim();

  if (isim && kimlik.length === 11 && adres) {
    kisiler.push({ isim, kimlik, adres });
    guncelleListe();
    this.reset();
  } else {
    alert("Tüm alanları doldurun ve Kimlik No 11 hane olmalı.");
  }
});

function guncelleListe(filtered = null) {
  const liste = document.getElementById('liste');
  liste.innerHTML = '';

  const veri = filtered || kisiler;

  veri.forEach((kisi, i) => {
    const li = document.createElement('li');
    li.textContent = `${kisi.isim} | ${kisi.kimlik} | ${kisi.adres}`;
    liste.appendChild(li);
  });
}

function ara() {
  const aranan = document.getElementById('arama').value.toLowerCase();
  const filtreli = kisiler.filter(k =>
    k.isim.toLowerCase().includes(aranan) ||
    k.kimlik.includes(aranan) ||
    k.adres.toLowerCase().includes(aranan)
  );
  guncelleListe(filtreli);
}

function temizle() {
  document.getElementById('arama').value = '';
  guncelleListe();
}
