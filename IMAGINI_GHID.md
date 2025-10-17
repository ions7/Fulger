# 📸 Ghid pentru Înlocuirea Imaginilor

Site-ul Fulger.md acum include imagini de fundal și poze pentru servicii. Imaginile curente sunt de la **Unsplash** (gratuite) și trebuie înlocuite cu poze reale ale evacuatorului tău.

---

## 🖼️ Unde sunt imaginile?

### 1. **Hero Section** (Pagina principală - fundal)
**Fișier:** `src/components/Hero.jsx`  
**Linia:** ~10  
**Imagine actuală:** Drum cu mașină

```jsx
backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80)'
```

**Cum să înlocuiești:**
- Adaugă poza ta în folderul `public/images/` (ex: `public/images/hero-bg.jpg`)
- Schimbă linia cu: `backgroundImage: 'url(/images/hero-bg.jpg)'`

---

### 2. **Servicii - Background Images**
**Fișier:** `src/pages/Home.jsx` și `src/pages/Services.jsx`

**Locații:**
- Tractare Auto: linia ~14 (Home.jsx)
- Asistență Rutieră: linia ~21 (Home.jsx)
- Disponibili 24/7: linia ~28 (Home.jsx)
- Transport Sigur: linia ~35 (Home.jsx)

**Exemplu actual:**
```jsx
image: 'https://images.unsplash.com/photo-1581092918484-8313d3a0e0a2?w=800&q=80'
```

**Cum să înlocuiești:**
```jsx
image: '/images/tractare-auto.jpg'
```

---

### 3. **About Page - Background**
**Fișier:** `src/pages/About.jsx`  
**Linia:** ~21

```jsx
backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80)'
```

**Înlocuiește cu:**
```jsx
backgroundImage: 'url(/images/about-bg.jpg)'
```

---

### 4. **Why Choose Us Section**
**Fișier:** `src/pages/Home.jsx`  
**Linia:** ~145

**Înlocuiește cu poza echipei sau evacuatorului în acțiune**

---

### 5. **Testimonials Section**
**Fișier:** `src/components/Testimonials.jsx`  
**Linia:** ~50

**Poză de fundal pentru secțiunea cu recenzii**

---

### 6. **Gallery (Pagina About)**
**Fișier:** `src/components/Gallery.jsx`

**6 imagini în galerie:**
- Evacuator profesional
- Transport sigur
- Echipă
- Asistență rutieră
- Tractare vehicule
- Disponibili 24/7

**Cum să înlocuiești toate 6:**
```jsx
const images = [
  {
    url: '/images/gallery/evacuator-1.jpg',
    title: 'Evacuator profesional',
  },
  {
    url: '/images/gallery/transport-sigur.jpg',
    title: 'Transport sigur',
  },
  // ... etc
]
```

---

## 📁 Structură Recomandată

Creează această structură în folderul `public`:

```
public/
├── images/
│   ├── hero-bg.jpg           (1920x1080px)
│   ├── about-bg.jpg          (1920x1080px)
│   ├── why-choose-us-bg.jpg  (1920x1080px)
│   ├── testimonials-bg.jpg   (1920x1080px)
│   ├── services/
│   │   ├── tractare.jpg      (800x600px)
│   │   ├── asistenta.jpg
│   │   ├── 24-7.jpg
│   │   ├── transport.jpg
│   │   ├── baterie.jpg
│   │   ├── combustibil.jpg
│   │   ├── cheie.jpg
│   │   └── pana.jpg
│   └── gallery/
│       ├── evacuator-1.jpg   (600x400px)
│       ├── evacuator-2.jpg
│       ├── echipa.jpg
│       ├── transport.jpg
│       ├── asistenta.jpg
│       └── noapte.jpg
```

---

## 🎨 Recomandări pentru Imagini

### Dimensiuni Optime:
- **Hero Background**: 1920x1080px (Full HD)
- **Section Backgrounds**: 1920x1080px
- **Service Cards**: 800x600px
- **Gallery**: 600x400px

### Format:
- **JPG** pentru fotografii (mai mic)
- **PNG** pentru logo-uri și grafice
- **WebP** pentru performanță maximă (opțional)

### Calitate:
- Compresia: 80-85% (balanță între calitate și dimensiune)
- Tool recomandat: [TinyPNG](https://tinypng.com) sau [Squoosh](https://squoosh.app)

---

## 🔄 Pași de Înlocuire

### 1. Pregătește imaginile
- Redimensionează la dimensiunile corecte
- Comprimă pentru web (max 500KB per imagine de fundal)
- Redenumește cu nume descriptive (ex: `evacuator-fulger-tractare.jpg`)

### 2. Încarcă în proiect
```bash
# Creează folderele
mkdir public/images
mkdir public/images/services
mkdir public/images/gallery
```

- Copiază imaginile în folderele corespunzătoare

### 3. Actualizează cod
- Deschide fișierele menționate mai sus
- Înlocuiește URL-urile Unsplash cu `/images/numele-tau.jpg`
- Salvează toate fișierele

### 4. Testează
```bash
npm run dev
```
- Verifică dacă imaginile se încarcă corect
- Testează pe mobil și desktop

---

## 💡 Tips & Tricks

### Imagini cu Overlay Dark
Imaginile au overlay dark (85-90% opacitate) pentru a păstra tema întunecată dar a lăsa imaginea vizibilă. Nu trebuie să întuneci imaginile în Photoshop!

### Efect Parallax
Unele secțiuni au `bg-fixed` - effect parallax când scroll-ezi. Funcționează super cu poze de drumuri sau mașini.

### Hover Effect
La ServiceCard, imaginea face zoom la hover (`group-hover:scale-110`). Alege poze clare care arată bine la zoom.

### Optimizare Performanță
```jsx
// Pentru imagini mari, adaugă loading="lazy"
<img src="/images/large.jpg" loading="lazy" alt="Description" />
```

---

## 🆘 Probleme Comune

### Imaginea nu se încarcă?
✅ Verifică calea: `/images/nume.jpg` (cu slash la început)  
✅ Extensia corectă: `.jpg` nu `.JPG`  
✅ Fișierul există în `public/images/`

### Imaginea e prea mare?
✅ Compresia: folosește TinyPNG  
✅ Dimensiunea: max 500KB per imagine de fundal  
✅ Format: convertește la WebP pentru 30% reducere

### Imaginea nu arată bine pe mobil?
✅ Testează pe telefon real sau dev tools  
✅ Poziția: schimbă `bg-center` cu `bg-top` sau `bg-bottom`  
✅ Cover: `bg-cover` asigură că umple tot spațiul

---

## 📞 Exemplu Complet

**Înainte:**
```jsx
backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80)'
```

**După:**
```jsx
backgroundImage: 'url(/images/hero-evacuator-fulger.jpg)'
```

---

## 🎬 Următorii Pași

1. ✅ Înlocuiește Hero background
2. ✅ Adaugă 8 imagini pentru servicii
3. ✅ Completează galeria cu 6 poze
4. ✅ Schimbă background-urile secțiunilor
5. ✅ Testează pe mobil și desktop

---

**Gata! Site-ul tău va avea imagini personalizate și va arăta mult mai profesionist!** 🚀
