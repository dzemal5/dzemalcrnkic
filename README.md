# Dzemal Crnkic — Official Artist Website

Official website for **Dzemal Crnkic**, Nasheed artist and composer.  
Distributed by **AnimSay, LLC** · www.animsay.us

---

## Project Structure

```
dzemal-crnkic/
├── index.html           ← Main page (HTML structure only)
├── css/
│   └── styles.css       ← All styling (colors, fonts, layout)
├── js/
│   ├── main.js          ← Navigation, lyrics, YouTube, form
│   └── store.js         ← Album cards + store grid rendering
├── data/
│   └── songs.js         ← ⭐ YOUR CONTENT — songs, albums, products
├── images/
│   ├── artist.jpg       ← Your photo (add this file)
│   └── album1.jpg       ← Album artwork (add this file)
├── netlify.toml         ← Netlify config
├── .gitignore
└── README.md
```

---

## How to Edit Content

### ⭐ Add Your Songs & Lyrics
Open `data/songs.js` and edit the `SONGS` array:
```js
{
  id:        1,
  title:     "Your Real Song Title",
  youtubeId: "dQw4w9WgXcQ",  // ← from youtube.com/watch?v=THIS_PART
  lyrics:    `Your real lyrics here...`
}
```

### ⭐ Update Your Album
In `data/songs.js`, edit the `ALBUMS` array:
```js
{
  title:       "Your Real Album Title",
  year:        "2026",
  description: "Your real album description",
  artwork:     "images/album1.jpg",
  trackList:   ["Song 1", "Song 2", ...],
  formats: [
    { type: "CD",  price: 20, stripeLink: "https://buy.stripe.com/YOUR_REAL_LINK" },
    { type: "USB", price: 25, stripeLink: "https://buy.stripe.com/YOUR_REAL_LINK" }
  ]
}
```

### Add Your Photo
Place your photo at `images/artist.jpg` then in `index.html` find the About section and uncomment:
```html
<img src="images/artist.jpg" alt="Dzemal Crnkic" class="about-photo" />
```
And delete the placeholder div above it.

### Change Colors
Open `css/styles.css` → Section 1 (CSS Variables):
```css
:root {
  --gold:       #c9a84c;   /* main gold accent */
  --gold-light: #e8c97a;   /* hover gold */
  --bg:         #080808;   /* background */
}
```

### Update YouTube Channel Link
In `index.html`, find the YouTube section and replace:
```html
href="https://www.youtube.com/YOUR_CHANNEL_URL"
```
Also replace the featured video on the Home tab:
```html
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

---

## Setting Up Stripe (to activate purchases)

1. Go to **stripe.com** and create a free account
2. In your Stripe dashboard, go to **Products → Add product**
3. Create "Album CD" at $20 and "Album USB" at $25
4. For each product, click **Create payment link**
5. Copy the link (looks like `https://buy.stripe.com/abc123`)
6. Paste it into `data/songs.js` replacing `YOUR_CD_PAYMENT_LINK` and `YOUR_USB_PAYMENT_LINK`
7. Push to GitHub — Netlify deploys automatically

---

## Setting Up Netlify Forms (Contact form email)

The contact form already has `data-netlify="true"`. After deploying:
1. Go to Netlify → **Forms**
2. Click **"proposal"** form → **Form notifications**
3. Add email notification → enter your email → Save

---

## Deploying to Netlify via GitHub

```bash
git add .
git commit -m "Your update description"
git push origin release
```
Netlify auto-deploys within 30–60 seconds.

---

## Tech Stack

| Layer    | Technology                     |
|----------|-------------------------------|
| Markup   | HTML5                          |
| Styling  | CSS3 (custom, no framework)    |
| Scripts  | Vanilla JavaScript             |
| Fonts    | Google Fonts (Playfair + Jost) |
| Payments | Stripe Payment Links           |
| Forms    | Netlify Forms                  |
| Hosting  | Netlify (free)                 |
| Domain   | GoDaddy (dzemalcrnkic.com)     |
