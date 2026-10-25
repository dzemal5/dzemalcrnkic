/* ============================================================
   data/songs.js — Dzemal Crnkic

   THIS IS THE ONLY FILE YOU NEED TO EDIT for content updates.

   HOW TO FIND A YOUTUBE VIDEO ID:
   URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ID:  dQw4w9WgXcQ  ← just this part after ?v=
   ============================================================ */


/* ── SONGS ──
   Each song appears in the tracklist, lyrics tab, and YouTube grid.
   Set youtubeId to null if a song has no video yet.
─────────────────────────────────────────────────────────────── */
const SONGS = [
  {
    id:        1,
    title:     "Song Title One",
    youtubeId: "YOUR_YOUTUBE_ID_1",
    lyrics:
`Verse 1:
Replace this with your real lyrics
Each line goes here

Chorus:
Your chorus lyrics go here
Replace with real words

Verse 2:
Second verse here

Chorus:
Your chorus lyrics go here`
  },
  {
    id:        2,
    title:     "Song Title Two",
    youtubeId: "YOUR_YOUTUBE_ID_2",
    lyrics:
`Verse 1:
Replace this with your real lyrics

Chorus:
Your chorus lyrics go here

Bridge:
Bridge lyrics here`
  },
  {
    id:        3,
    title:     "Song Title Three",
    youtubeId: "YOUR_YOUTUBE_ID_3",
    lyrics:
`Verse 1:
Replace this with your real lyrics

Chorus:
Your chorus lyrics go here`
  },
  {
    id:        4,
    title:     "Song Title Four",
    youtubeId: "YOUR_YOUTUBE_ID_4",
    lyrics:
`Verse 1:
Replace this with your real lyrics

Chorus:
Your chorus lyrics go here`
  },
  {
    id:        5,
    title:     "Song Title Five",
    youtubeId: null,
    lyrics:
`Verse 1:
Replace this with your real lyrics

Chorus:
Your chorus lyrics go here`
  }
];


/* ── ALBUMS ──
   The first album in this array is always shown as the featured
   album at the top of the Music page (Dino Merlin style).

   streamLinks: Add any platforms you're on (YouTube, Spotify, etc.)
                Set to [] if none yet.

   stripeLink: Create a Payment Link at stripe.com and paste it here.
─────────────────────────────────────────────────────────────── */
const ALBUMS = [
  {
    id:          "album-1",
    title:       "Album Title",
    artist:      "Dzemal Crnkic",
    year:        "2026",
    description: "Replace this with your real album description.",
    artwork:     "images/album1.jpg",

    /* Streaming platforms — add/remove as needed */
    streamLinks: [
      {
        label: "YouTube",
        icon:  "▶",
        url:   "https://www.youtube.com/YOUR_CHANNEL_URL"
      },
      // Uncomment when you're on these platforms:
      // { label: "Spotify",     icon: "♫", url: "https://open.spotify.com/artist/..." },
      // { label: "Apple Music", icon: "♪", url: "https://music.apple.com/..." },
      // { label: "Deezer",      icon: "♬", url: "https://www.deezer.com/..." },
    ],

    /* Track list — must match SONGS titles exactly for lyrics to link */
    trackList: [
      "Song Title One",
      "Song Title Two",
      "Song Title Three",
      "Song Title Four",
      "Song Title Five",
    ],

    /* Purchase formats — replace Stripe links */
    formats: [
      {
        type:        "CD",
        price:       20,
        description: "Physical CD + booklet",
        stripeLink:  "https://buy.stripe.com/YOUR_CD_PAYMENT_LINK"
      },
      {
        type:        "USB",
        price:       25,
        description: "USB with hi-res audio",
        stripeLink:  "https://buy.stripe.com/YOUR_USB_PAYMENT_LINK"
      }
    ]
  }

  /* Add future albums below:
  ,{
    id:       "album-2",
    title:    "Next Album Title",
    artist:   "Dzemal Crnkic",
    year:     "2027",
    artwork:  "images/album2.jpg",
    streamLinks: [],
    trackList: [...],
    formats:  [...]
  }
  */
];


/* ── STORE PRODUCTS ──
   Non-album merchandise shown on the Store tab.
─────────────────────────────────────────────────────────────── */
const STORE_PRODUCTS = [
  {
    id:          "cd-1",
    name:        "Album — Physical CD",
    description: "Full album on CD with printed artwork booklet. Ships 3–5 business days.",
    price:       20,
    emoji:       "💿",
    stripeLink:  "https://buy.stripe.com/YOUR_CD_PAYMENT_LINK"
  },
  {
    id:          "usb-1",
    name:        "Album — USB Drive",
    description: "High-quality audio files on a branded USB drive. Includes digital booklet.",
    price:       25,
    emoji:       "🖥️",
    stripeLink:  "https://buy.stripe.com/YOUR_USB_PAYMENT_LINK"
  },
  // Add more products here as you expand:
  // { id: "tshirt-1", name: "T-Shirt", description: "...", price: 30, emoji: "👕", stripeLink: "..." },
];
