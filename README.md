# CS2 Major Championship & Swiss Tournament Simulator

Counter-Strike 2 Major turnuva mekaniklerini, stratejik harita veto sürecini ve kural tabanlı maç simülasyonunu tarayıcı ortamında modelleyen web tabanlı bir simülasyon uygulamasıdır. 

Uygulama; saf JavaScript (Vanilla JS), anlamsal HTML5 ve espor standartlarına uygun CSS mimarisi kullanılarak sıfırdan geliştirilmiştir.

---

## Proje Mimarisi ve Temel Özellikler

### 1. 16 Takımlı Veri Modeli ve İstatistik Tabanlı Veto
* Takımlar **Legends** ve **Challengers** torbalarına ayrılmış olup her takımın genel güç derecelendirmesi (rating) ve 7 aktif turnuva haritası için bağımsız kazanma yüzdeleri (win rate) bulunmaktadır.
* Harita veto algoritması, rakip yapay zekanın kendi zayıf olduğu veya kullanıcının üstün olduğu haritaları ağırlıklı skor farkına göre tespit edip elemesini sağlar.

### 2. Swiss Sistemi Eşleştirme Motoru
* Resmi turnuva kurallarına uygun olarak takımlar skor gruplarına (1-0, 0-1, 1-1 vb.) göre filtrelenir ve aynı gruptaki rakiplerle eşleştirilir.
* 3 galibiyete ulaşan takımlar play-off aşamasına yükselir; 3 mağlubiyet alan takımlar elenir. Puan durumu eşzamanlı olarak hesaplanır.

### 3. Zaman Bazlı Canlı Maç Simülasyonu
* Maç sonuçları anlık statik veri yerine, asenkron zamanlayıcılar (`setInterval`) kullanılarak raunt bazında simüle edilir.
* Her raunt sonucunda olay akışı ve en değerli oyuncu (MVP) verileri dinamik DOM güncellemeleri ile kullanıcıya canlı aktarılır.
* Turnuvadaki diğer masalar eşzamanlı olarak arka planda simüle edilip sonuçları fikstür tablosuna işlenir.

---

## Kullanılan Teknolojiler

* **HTML5:** Modüler, anlamsal (semantic) sayfa hiyerarşisi.
* **CSS3:** Flexbox ve CSS Grid tabanlı duyarlı yerleşim, espor arayüz tasarımı.
* **JavaScript (ES6+):** 
  * Durum yönetimi (State Management)
  * Asenkron akış ve zamanlayıcı yönetimi
  * Olasılık ve ağırlıklı rastgelelik algoritmaları (`Math.random`)
  * Dinamik DOM manipülasyonu ve olay dinleyicileri (Event Listeners)

---

## Geliştirme Yol Haritası (Roadmap)

* [x] Faz 1: Temel takım yönetimi, akıllı veto mekaniği, Swiss eşleştirme motoru ve canlı maç anlatımı.
* [ ] Faz 2: 8 takımlı tekli eleme (Single Elimination) Play-off braketi ve Best-of-3 (BO3) serileri.
* [ ] Faz 3: Genişletilmiş metin havuzu, ekonomi/satın alma mantığı ve oyuncu bazlı detay istatistikler.

---

Geliştirici: iamdnk  
Depo: [github.com/iamdnk/cs2-major-simulator](https://github.com/iamdnk/cs2-major-simulator)
