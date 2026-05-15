# Trainers Vault LLC — Website

**Live Pokémon TCG rips, giveaways, singles & collector-focused streams on Whatnot.**

---

## 🗂️ Folder Structure

```
trainers-vault/
├── index.html        ← All page content (text, sections, links)
├── styles.css        ← All colors, fonts, and styling
├── script.js         ← Animations, FAQ, form logic (don't edit unless you know JS)
├── README.md         ← This file
└── images/
    ├── favicon.png   ← The vault/pokeball icon (browser tab + nav logo)
    ├── avatar.png    ← The anime-style character image (hero section)
    ├── og-image.png  ← Optional: 1200x630px image for social sharing previews
    ├── gallery-1.png ← Replace placeholder gallery images (use these names)
    ├── gallery-2.png
    ├── gallery-3.png
    ├── gallery-4.png
    ├── gallery-5.png
    └── gallery-6.png
```

---

## ✅ Setup Checklist

Before going live, complete these steps:

- [ ] Create an `images/` folder and add `favicon.png` and `avatar.png`
- [ ] Sign up at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in `index.html`
- [ ] Replace all 6 placeholder gallery images with real photos
- [ ] Update the `og:url` meta tag with your actual GitHub Pages URL
- [ ] (Optional) Add an `og-image.png` (1200×630px) for social previews

---

## ✏️ How to Edit Content

### Change Text
Open `index.html` in any text editor (Notepad, TextEdit, VS Code).
Every editable section has a comment like:
```
<!-- edit headline here -->
```
Find those comments and update the text between the HTML tags.

### Change Colors
Open `styles.css`. At the very top, find the `:root` block:
```css
:root {
  --color-red: #e63946;   /* ← change this for the accent color */
  --color-bg: #0d0d0d;    /* ← change this for the background */
}
```
Change the hex values to any color you want.

### Change Links (Whatnot, Instagram, email)
In `index.html`, search for these and replace:
- `https://www.whatnot.com/user/bradhar56040` → your Whatnot URL
- `https://instagram.com/trainersvaultllc` → your Instagram URL
- `trainersvaultllc@yahoo.com` → your email

### Replace Gallery Images
Drop your photos into the `images/` folder named:
`gallery-1.png`, `gallery-2.png`, ... `gallery-6.png`

Then in `index.html`, find the gallery section and replace:
```html
src="https://placehold.co/..."
```
with:
```html
src="images/gallery-1.png"
```

---

## 🌐 GitHub Pages Setup

See the step-by-step instructions below in the main README section or in the chat.

---

## 📬 Formspree Setup

1. Go to [formspree.io](https://formspree.io) and sign up free
2. Create a new form — copy your Form ID (looks like `xpwzabcd`)
3. In `index.html`, find:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual ID

---

## ⚠️ Disclaimer

Trainers Vault LLC is not affiliated with Nintendo, The Pokémon Company, or any TCG publisher.

---

*Built with HTML, CSS & JavaScript — no frameworks, no paid tools, fully GitHub Pages compatible.*
