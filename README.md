# 🏆 CS2 Major Championship Simulator

Gerçekçi espor turnuva mekaniklerine, Valve'ın resmi Major kurallarına ve dinamik simülasyon algoritmalarına dayalı **CS2 Turnuva Simülatörü**. Tamamen harici kütüphane kullanılmadan (Vanilla JS, CSS3, HTML5) geliştirilmiştir.

🔗 **Canlı Demo:** [https://iamdnk.github.io/cs2-major-simulator/](https://iamdnk.github.io/cs2-major-simulator/)

---

## 📌 Öne Çıkan Özellikler

* **Resmi 24 Takımlı Major Yapısı:**
* **Opening Stage:** Contenders ve Challengers takımlarının mücadele ettiği 16 takımlı Swiss aşaması.
* **Legends Stage:** Bekleyen 8 Legends takımı ile Opening'den çıkan 8 takımın karşılaştığı ikinci Swiss aşaması.
* **Champions Stage (Play-off):** Kalan 8 takımın karşılaştığı tekli eleme (Single Elimination) ağacı.
* **MR3 Overtime (Uzatma) Motoru:** Maçlar 12-12 eşitlendiğinde standart CS2 uzatma kuralı devreye girer (Hedef skor 16, 19, 22 şeklinde dinamik uzar).
* **Dinamik Kafa Kafaya (H2H) Harita Matematiği:** Takımların harita reytingleri ve genel güçleri kübik çarpanla ($Rating^3$) karşılaştırılarak her harita için gerçekçi kazanma olasılıkları hesaplanır.
* **Resmi BO3 Veto (Pick & Ban) Sistemi:** Play-off aşamasında takımlar resmi sıra ile harita eler ve seçer: *Ban ➔ Ban ➔ Pick ➔ Pick ➔ Ban ➔ Ban ➔ Decider*.
* **Espor TV Yayın Skorbandı (Broadcast Scorebug):** BLAST Premier ve UEFA yayın standartlarından esinlenen, takım renklerine duyarlı açılı skor paneli.
* **Gözlemci / Adım Adım Simülasyon:** Turnuvadan erken elenildiğinde kalan maçların eleme ağacı üzerinde adım adım, animasyonlu biçimde simüle edilmesini sağlayan akış.

---

## 🛠️ Teknolojiler

* **HTML5:** Anlamsal (semantic) arayüz mimarisi.
* **CSS3:** Modern espor/karanlık tema, Flexbox, CSS Grid, animasyonlar ve neon vurgular.
* **Vanilla JavaScript (ES6+):** Asenkron durum yönetimi (Async/Await), simülasyon olasılık motoru ve dinamik DOM manipülasyonu.

---

## 🎮 Turnuva Aşamaları ve Kuralları

1. **Swiss Sistemi:** 3 galibiyete (3G) ulaşan takımlar üst tura yükselir, 3 mağlubiyet (3M) alan takımlar elenir.
2. **Play-off Ağacı:** Tüm play-off serileri Best of 3 (BO3) üzerinden oynanır; 2 harita kazanan takım bir üst tura geçer.
3. **Şampiyonluk:** Büyük Finali kazanan takım şampiyonluk podyumunda ilan edilir.

---

