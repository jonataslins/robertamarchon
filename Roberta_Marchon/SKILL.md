---
name: roberta-marchon-design
description: Use this skill to generate well-branded interfaces and assets for Roberta Marchon (clinical nutritionist, Itaboraí RJ — online consultations), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** Roberta Marchon — nutricionista clínica, atendimento 100% online. Brazilian Portuguese, warm + science-backed, WhatsApp-driven.
- **Entry CSS:** link `styles.css` (it `@import`s all tokens + fonts).
- **Fonts:** Cormorant Garamond (light serif headlines, italic accents) + DM Sans (body/UI).
- **Color:** sage `#4A6741` leads; earth `#8B6F47` supports; warm off-whites `#FAFAF8`/`#F7F4EF`; warm near-black `#1C1C1A` text. Gold stars only; WhatsApp green only for that channel.
- **Signature:** 2px corner radius (nearly square), sage hairline borders, soft sparse shadows, italic accent word per headline, uppercase letter-spaced eyebrow labels with a leading rule.
- **Components:** `window.RobertaMarchonDesignSystem_<hash>` → Button, Eyebrow, Badge, ServiceCard, Testimonial, ProcessStep, StatBlock, Credential, Input. See each component's `.prompt.md`.
- **UI kit:** `ui_kits/website/` — full interactive landing page (with booking flow) to learn the layout vocabulary from.
- **Assets:** `assets/hero.png`, `assets/sobre.png` (warm natural-light photography).

## Voice
Second person ("você"), first person for Roberta ("minha abordagem"). Sentence case, italic accent on the emotional word. Emoji only as service/credential icons, never in prose. CTAs are friendly imperatives ("Agendar minha consulta").
