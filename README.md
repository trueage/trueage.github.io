# TrueAge | Exact Age Calculator & Milestone Tracker

> ⏱️ A 100% client-side, zero-server chronological age calculator and life milestone tracker built with pure HTML5, CSS3, and Vanilla ES6 JavaScript. Designed for high performance, accessibility, and Page 1 Google indexing across 6 languages.

🌐 **Live URL**: [https://trueage.github.io/](https://trueage.github.io/)  
☕ **Developer Support**: [Buy Me a Coffee](https://buymeacoffee.com/kisharadilz)

---

## ✨ Key Features

- **60FPS Real-Time Chronometer**: Live ticking counter powered by `requestAnimationFrame`, calculating exact Gregorian calendar differences across Years, Months, Days, Hours, Minutes, and Seconds without layout thrashing.
- **Leap-Year-Aware Date Math**: Accurate calendar calculation that dynamically accounts for variable month lengths and leap years (such as February 29th) without naive 365.25 day approximations.
- **Cumulative Lifetime Breakdown**: Instant metrics for Total Days, Total Hours, Total Minutes, Total Seconds, Estimated Breaths (~16/min), and Estimated Heartbeats (~75 bpm).
- **Life Milestone Dashboard**: Tracks progress towards quirky and profound milestones including:
  - 10,000th Day Alive
  - 20,000th Day Alive
  - 500 Million Seconds Alive
  - 1 Billion Seconds Alive (~31.7 years)
  - 100,000 Hours Alive
  - 250,000 Hours Alive
  - Next Half-Birthday (6-month midpoint celebration)
- **Planetary Age Engine**: Astronomical translation of lifespan across Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune based on planetary orbital periods.
- **Astrological & Generational Profile**: Western Zodiac, Chinese Zodiac, birth day of week, and generational cohort identification (Gen Z, Millennial, Gen X, Baby Boomer, etc.).
- **URL Parameter State & Viral Sharing**: Automatically reads and writes `?dob=YYYY-MM-DD&time=HH:mm` for bookmarking and instant sharing. Includes one-click copy summary, share to WhatsApp, X (Twitter), and print/PDF export.
- **Anti-FOUC Theme Switcher**: Persistent Dark/Light mode toggle with an inline head script to eliminate theme flashes.
- **Viral Technical SEO Architecture**:
  - 7 bidirectional `hreflang` tags (`x-default`, `en`, `es`, `pt`, `de`, `fr`, `ja`)
  - Static subdirectories (`/es/`, `/pt/`, `/de/`, `/fr/`, `/ja/`) with pre-rendered semantic HTML
  - Dynamic and static `WebApplication` and `FAQPage` JSON-LD schemas
  - XML Sitemap (`sitemap.xml`) and `robots.txt`

---

## 🎨 Color System

- **Primary Electric Accent**: `#30AFFF`
- **Secondary Cyan Glow**: `#92EEFF`
- **Success Mint Accent**: `#D8FFC5`
- **Pastel Mint Highlight**: `#C4F7CA`
- **Support CTA Financial Gradient**: `#2563EB` to `#1D4ED8`

---

## 📁 Project Structure

```
trueage.github.io/
├── index.html              # Primary entrypoint (English default)
├── style.css               # Pure CSS design system with CSS custom properties
├── app.js                  # 60FPS engine, calendar math, milestones, planets
├── i18n.js                 # Multi-language dictionary & dynamic JSON-LD engine
├── sitemap.xml             # XML sitemap indexing all 6 locales with hreflang
├── robots.txt              # Crawler instructions
├── manifest.json           # Web app manifest (PWA)
├── favicon.svg             # Vector SVG favicon
├── es/
│   └── index.html          # Pre-rendered Spanish static edition
├── pt/
│   └── index.html          # Pre-rendered Portuguese static edition
├── de/
│   └── index.html          # Pre-rendered German static edition
├── fr/
│   └── index.html          # Pre-rendered French static edition
└── ja/
    └── index.html          # Pre-rendered Japanese static edition
```

---

## 🚀 Deployment

This project requires **zero build tools, zero bundlers, and zero server dependencies**.

To deploy to GitHub Pages:
1. Push this repository to GitHub (e.g. `github.com/<username>/trueage.github.io`).
2. Navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Set branch to `main` (or `master`) and directory to `/ (root)`.
5. Save. Your site will be live at `https://<username>.github.io/`!

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
