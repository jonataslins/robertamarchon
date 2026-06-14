# Website — UI Kit

An interactive recreation of the **Roberta Marchon** nutritionist marketing site, composed entirely from the design-system primitives.

## Files
- `index.html` — entry point. Loads `styles.css`, the compiled `_ds_bundle.js`, then the three JSX scripts, and renders `<App />`.
- `Icons.jsx` — Feather/Lucide-style line icons (stroke 1.5) + the WhatsApp glyph. Exports `window.Icon`.
- `Sections.jsx` — page sections (`Hero`, `Services`, `About`, `Process`, `Testimonials`, `CTA`) built from `Button`, `Eyebrow`, `ServiceCard`, `Testimonial`, `ProcessStep`, `StatBlock`, `Credential`, `Badge`.
- `Chrome.jsx` — `Nav`, `Footer`, `WaFloat`, the multi-step `BookingModal`, and the `App` shell that wires the booking state.

## Interaction
Every CTA (nav, hero, CTA band, WhatsApp float) opens a fake **multi-step booking flow**: choose a goal → pick a time slot → enter contact → confirmation. State is local; nothing is sent.

## Notes
- This is a recreation, not new design — it mirrors the source landing page faithfully.
- Photography (`assets/hero.png`, `assets/sobre.png`) is referenced from the project `assets/` folder.
- Service-card icons use emoji, matching the source.
