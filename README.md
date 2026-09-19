# D&C Vet Clinic: موقع عيادة بيطرية (Arabic, RTL)

Vite + React + TypeScript + Tailwind CSS 4 + React Router. Frontend only, static hosting friendly.

## Commands

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
npm run lint && npm run format
npm run images     # regenerate responsive WebP from src/assets/images/*/originals
```

Deploy `dist/` to any static host. Because routes use the History API, configure the host to serve `index.html`
for unknown paths (e.g. `.htaccess` rewrite on Apache/cPanel).

## Where to change things

| What                                             | Where                                                                                                                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logo                                             | `src/assets/images/branding/logo.jpg` (used untouched; framing in `components/common/Logo.tsx`)                                                                   |
| Images                                           | drop a JPG/PNG with the same name into `src/assets/images/<folder>/originals/`, run `npm run images`. Slot → file map and Arabic alt text: `src/config/images.ts` |
| Clinic name, phone, address, hours, social links | `src/config/clinic.ts` (or `.env`, see `.env.example`)                                                                                                            |
| Phone / WhatsApp / social URLs                   | `VITE_*` variables in `.env` (public values, never secrets)                                                                                                       |
| Services, team, blog, gallery, FAQ, testimonials | `src/data/*.ts`                                                                                                                                                   |
| Colours, fonts, radii, shadows                   | `@theme` block in `src/styles/index.css`; fonts are linked in `index.html`                                                                                        |
| Home stats numbers                               | `src/components/home/Stats.tsx`                                                                                                                                   |

## Booking → WhatsApp

`احجز موعد` opens a native `<dialog>` form (`components/booking`). On submit the values are validated
(Arabic messages, Egyptian/international phone, Arabic-Indic digits accepted), turned into a pre-written Arabic
message (`lib/booking.ts`) and opened at `https://wa.me/<number>?text=…`. There is no backend.

## Notes

- Testimonials, team names/bios, statistics, address and phone are **demo placeholders**.
- Stock photos: see `src/assets/images/CREDITS.md`.
- Motion respects `prefers-reduced-motion`; the testimonial strip moves right → left and can be paused.
