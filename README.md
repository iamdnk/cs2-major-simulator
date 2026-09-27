# CS2 Major Championship Simulator

Counter-Strike 2'nin gerçek Major turnuva formatını (Challengers → Legends → Play-off) baz alan, tamamen tarayıcıda çalışan bir turnuva simülatörü. Takımını seç, rakiplerle harita vetosu yap, maçı round round izle, Swiss (İsviçre) formatında ilerle, play-off'ta elenme usulü braket ile şampiyonluğa uzan.

**Canlı demo:** `index.html` dosyasını herhangi bir tarayıcıda açman yeterli. Kurulum, derleme, bağımlılık yok — saf HTML/CSS/JavaScript.

---

## Özellikler

### Turnuva formatı
- **Challengers / Legends / Contenders** olmak üzere 3 kademeden 24 takım
- **Swiss (İsviçre) sistemi**: 3 galibiyet → bir üst aşamaya/play-off'a yükselme, 3 mağlubiyet → elenme
- Aynı iki takım turnuva boyunca (mümkün olduğunca) bir daha eşleşmiyor
- **Play-off**: Çeyrek Final → Yarı Final → Büyük Final, tek eleme usulü, BO3

### Harita veto sistemi
- **BO1 (Swiss aşaması):** Karşılıklı sırayla ban, son kalan harita oynanır
- **BO3 (Play-off):** Gerçek CS2 Major formatı — ban / ban / pick / pick / ban / ban / decider

### Maç simülasyonu
- Round round oynanan, hızlandırılabilir (0.5x - 5x) canlı maç motoru
- **Ekonomi sistemi**: Pistol round, eco, force buy, full buy — ve bunlar gerçekten round kazanma ihtimelini etkiliyor
- **Rol bazlı oyuncu performansı**: Her oyuncunun bir rolü var (IGL, AWP'ci, Yıldız, Rifle'cı) ve kill dağılımı buna göre ağırlıklandırılıyor (IGL az kill alır, AWP'ci ilk rundan sonra açılır, yıldız oyuncu öne çıkar)
- **Dinamik takım reytingi**: Sabit değil, o takımın 5 oyuncusunun skill ortalamasından hesaplanıyor + küçük bir rastgele "o günkü form" faktörü var
- **Maç / Seri / Turnuva MVP'si** otomatik hesaplanıyor
- Nadiren (maç başına en fazla 1 kere, düşük ihtimalle) bir oyuncunun "teknik aksaklık" yaşayıp birkaç round geride kalması

### Kalıcılık
- **Kaldığın yerden devam et**: Tarayıcının `localStorage`'ına otomatik kayıt. Sayfayı kapatıp tekrar açtığında kayıtlı turnuvana devam edebilir ya da yeni bir turnuva başlatabilirsin.
- *Not:* Kayıt, güvenli duraklama noktalarında (round fikstürü / maç özeti / play-off serisi başı) alınıyor — canlı bir maçın tam ortasında değil. Yani en kötü ihtimalle o anki maçın vetosuna geri dönersin.

---

## Kullanılan teknolojiler

| Katman | Ne için kullanıldı |
|---|---|
| **HTML** (`index.html`) | Sayfanın iskeleti: hangi kutu, hangi tablo, hangi buton nerede duruyor |
| **CSS** (`style.css`) | Görünüm: renkler, boyutlar, yerleşim (grid/flexbox), animasyonlar (`@keyframes`) |
| **JavaScript** (`app.js`) | Tüm mantık: takım verisi, maç simülasyonu, veto akışı, DOM güncellemeleri, kayıt sistemi |

Harici bir kütüphane, framework (React/Vue vb.) veya build aracı (webpack vb.) **kullanılmıyor**. Tek bir Google Fonts bağlantısı dışında her şey bu üç dosyanın içinde.

---

## Dosya yapısı

```
├── index.html    → Sayfanın iskeleti (ekranlar, tablolar, butonlar)
├── style.css     → Görsel tasarım (renk, boyut, animasyon)
├── app.js        → Oyunun tüm beyni (veri + mantık + DOM güncellemeleri)
└── README.md     → Bu dosya
```

## Takım kadrolarını / isimlerini nasıl değiştiririm?

`app.js` dosyasının en üstünde `const DATABASE = [ ... ]` ile başlayan bir dizi var. Her satır bir takımı temsil ediyor:

```js
{ id: 1, name: "Natus Vincere", pot: "legends", color: "#ffee00", tier: 94,
  roster: [
    { name: "Aleksib", role: "igl" },
    { name: "iM", role: "rifler" },
    { name: "b1t", role: "star" },
    { name: "w0nderful", role: "awp" },
    { name: "jL", role: "rifler" }
  ],
  mapStats: { Mirage: 88, Inferno: 72, ... }
}
```

- **`name`**: Takım adı — istediğin gibi değiştirebilirsin.
- **`roster`**: 5 oyuncu. Her oyuncunun sadece `name` (isim) ve `role`'ünü değiştirmen yeterli, kod tarafında hiçbir şeye dokunmana gerek yok. `role` şu 4 değerden biri olmalı: `"igl"`, `"awp"`, `"star"`, `"rifler"` (bir takımda tam olarak 5 oyuncu olmalı, roller tekrar edebilir).
- **`tier`** ve **`mapStats`**: Takımın genel gücünü ve harita bazlı performansını belirleyen sayılar (40-99 arası mantıklı). Bunlara dokunmasan da olur.

---

## Bilinen sınırlamalar

- Takım kadroları gerçek dünyadaki güncel transferleri **otomatik takip etmiyor** — elle güncellenmesi gerekiyor.
- "Hızlı Bitir" butonuyla bitirilen maçlarda ekonomi etkisi hesaba katılmıyor (hız için bilinçli bir basitleştirme).
- Turnuva MVP'si sadece **senin takımının oynadığı** maçlardan hesaplanıyor; diğer eşleşmeler arka planda anlık simüle edildiği için oralarda oyuncu bazlı istatistik tutulmuyor.
- Kayıt sistemi canlı maç sırasında değil, güvenli duraklama noktalarında çalışıyor (yukarıda açıklandı).

---

## Yol haritası fikirleri

- [ ] Takım kartına gelince kadronun (5 oyuncu) gösterilmesi
- [ ] Sezon/lig modu (aynı takımlarla birden fazla turnuva, tarihsel istatistik)
- [ ] Oyuncu bazlı "kariyer" istatistikleri (turnuvalar arası kalıcı)
- [ ] Mobil düzen iyileştirmeleri

---

*Bu proje eğlence ve öğrenme amaçlı yapılmıştır; Counter Strike 2 (CS2), Valve Corporation'ın tescilli markasıdır ve bu proje Valve ile bağlantılı değildir.*
