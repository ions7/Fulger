# ⚡ Fulger.md – Evacuator Auto Chișinău

Website modern pentru serviciu de evacuator auto (tractare rapidă) din Chișinău, Republica Moldova.

![Fulger.md](https://img.shields.io/badge/Fulger-Evacuator-FFD400?style=for-the-badge)

## 🎨 Design

- **Paletă**: Dark modern (#0D0D0D) cu accent galben (#FFD400)
- **Fonturi**: Poppins (titluri) + Inter (text)
- **Stil**: Tesla-inspired, minimalist, mobile-first
- **Animații**: Smooth transitions cu Tailwind

## 🛠️ Stack Tehnologic

- **Framework**: React 18 + Vite
- **Styling**: TailwindCSS 3.4
- **Routing**: React Router DOM 6
- **SEO**: react-helmet-async + JSON-LD Schema
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📂 Structura Proiectului

```
fulger-md/
├── src/
│   ├── components/       # Componente refolosibile
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   └── CallButton.jsx
│   ├── pages/           # 5 pagini principale
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Prices.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Instalare și Rulare

### Prerequisite

- Node.js 18+ și npm/yarn/pnpm

### Pași de instalare

1. **Clonează repository-ul** (sau descarcă ZIP-ul)

```bash
cd fulger-md
```

2. **Instalează dependențele**

```bash
npm install
```

sau

```bash
yarn install
```

sau

```bash
pnpm install
```

3. **Pornește serverul de dezvoltare**

```bash
npm run dev
```

Site-ul va fi disponibil la: **http://localhost:3000**

## 📦 Build pentru Producție

```bash
npm run build
```

Fișierele optimizate vor fi generate în folderul `dist/`.

## 🌐 Preview Build

După build, poți previzualiza versiunea de producție:

```bash
npm run preview
```

## 📱 Pagini Disponibile

- **/** - Acasă (Hero + Servicii + Testimoniale + Hartă)
- **/servicii** - Lista completă servicii
- **/preturi** - Tabel transparent de tarife
- **/despre** - Povestea brandului Fulger
- **/contact** - Formular + Date de contact + Hartă

## 🔍 SEO Optimizări

✅ Meta tags unice pentru fiecare pagină  
✅ Schema.org JSON-LD (LocalBusiness + FAQPage)  
✅ OpenGraph tags pentru social media  
✅ Canonical URLs  
✅ Semantic HTML5  
✅ Mobile-first responsive design  
✅ Fast loading (<2s)

## 🎯 Features Principale

- 📞 **Buton fix "Sună acum"** pe mobil (bottom-right)
- 🌙 **Dark theme** modern profesional
- ⚡ **Animații subtile** la scroll și hover
- 📱 **100% responsive** (de la 360px)
- 🗺️ **Google Maps** integrat
- 💬 **WhatsApp** quick link
- 🎨 **Custom scrollbar** galben
- ⭐ **Testimonials slider** funcțional

## 🎨 Paleta de Culori

```css
--primary: #FFD400    /* Galben Fulger */
--dark: #0D0D0D       /* Negru fundal */
--light: #9CA3AF      /* Gri text secondary */
--white: #FFFFFF      /* Alb */
```

## 📞 Contact Info (pentru customizare)

Actualizează următoarele în cod:

- **Telefon**: `+373 60 000 000` → al tău
- **Email**: `info@fulger.md` → al tău
- **Adresă**: `Chișinău, Moldova` → a ta
- **Coordonate GPS**: `47.0105, 28.8638` → ale tale

**Fișiere de modificat**:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/components/CallButton.jsx`
- `src/pages/Home.jsx`
- `src/pages/Contact.jsx`

## 🚀 Deploy

### Netlify

```bash
npm run build
# Drag & drop folderul `dist` în Netlify
```

### Vercel

```bash
npm run build
vercel --prod
```

### Cloudflare Pages / GitHub Pages

Build command: `npm run build`  
Output directory: `dist`

## 📝 Licență

© 2024 Evacuator Fulger. Toate drepturile rezervate.

## 💡 Customizare

Pentru a schimba culorile, editează:

**tailwind.config.js**:
```js
colors: {
  primary: '#FFD400',  // schimbă aici
  dark: '#0D0D0D',
  light: '#9CA3AF',
}
```

Pentru a modifica conținutul, editează fișierele din `src/pages/`.

## 🐛 Troubleshooting

**Eroare la instalare**: Șterge `node_modules` și `package-lock.json`, apoi rulează `npm install` din nou.

**Port 3000 ocupat**: Schimbă portul în `vite.config.js`:
```js
server: {
  port: 3001, // altul decât 3000
}
```

---

**Made with ⚡ by Fulger Team**
