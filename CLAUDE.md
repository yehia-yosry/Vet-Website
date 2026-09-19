# CLAUDE.md — D&C Vet Clinic

## 0. Purpose

You are working on a real production-quality frontend website for **D&C Vet Clinic**, an Egyptian veterinary clinic.

This file is the project's persistent source of truth. Read it before making changes.

The goal is to build a website that feels:

- Arabic-only
- RTL
- warm
- calm
- cute
- elegant
- premium
- distinctive
- memorable
- practical
- fast
- responsive
- maintainable
- production-ready

The design must feel **human art-directed**, not like an AI-generated website template.

The current scope is **frontend only**. There is no backend, database, authentication, payment system, CMS, or e-commerce functionality.

The architecture must remain simple and scalable enough to become a future online store without redesigning the brand or rewriting the frontend.

---

# 1. Non-Negotiable Product Rules

## 1.1 Arabic-only UI

Everything visible to the user must be Arabic.

Use:

- Arabic navigation
- Arabic headings
- Arabic paragraphs
- Arabic buttons
- Arabic labels
- Arabic metadata
- Arabic FAQ
- Arabic testimonials
- Arabic blog content
- Arabic form labels
- Arabic validation/error messages
- Arabic empty/loading states
- Arabic image captions where shown

Use:

```html
<html lang="ar" dir="rtl">
```

English is allowed only where technically necessary, such as:

- code
- file names
- variable names
- package names
- URLs/routes if needed
- the existing clinic logo, which must remain unchanged

## 1.2 Logo

The clinic already has an existing logo.

**Do not redesign, redraw, recreate, recolor, distort, crop, or replace the logo.**

Use the exact supplied asset.

The visual identity of the website must be designed around the existing logo.

It may be used in multiple tasteful contexts, but never modified.

## 1.3 Real production mindset

Treat this like a real website that may be launched for a real clinic.

Do not produce:

- a concept-only mockup
- placeholder architecture that cannot scale
- fake backend behavior
- fake API calls
- unfinished-looking sections
- lorem ipsum
- broken states
- unnecessary technical complexity

Placeholder clinic data is acceptable, but it must look realistic and be easy to replace.

---

# 2. Visual Direction

## 2.1 Brand personality

Target:

**Elegant + premium + cute + warm Egyptian + calm**

The website should feel trustworthy and professional while still emotionally warm and inviting for pet owners.

Do not make it childish.

## 2.2 Design ambition

Target:

**Distinctive, memorable, award-style design while still being practical.**

The design should stand out through:

- art direction
- typography
- spacing
- visual hierarchy
- photography
- composition
- subtle details
- thoughtful interactions

Do not depend on flashy effects.

## 2.3 Light theme only

Use a light-only design system.

Suggested visual direction:

- warm ivory / soft cream
- muted sage green
- dusty peach / soft apricot
- restrained warm terracotta
- deep olive-charcoal for text
- warm beige supporting surfaces

The exact palette is your responsibility, but it must feel:

**natural + soft + premium + calm**

Do not overuse pastel colors.

Maintain strong readability and contrast.

## 2.4 Shape language

Use mixed corner radii.

Do NOT make every component the same rounded rectangle.

Use a mixture of:

- slightly rounded
- moderately rounded
- occasional sharper editorial elements

Use soft, luxurious shadows.

Avoid heavy shadows.

## 2.5 Whitespace

Whitespace should be moderate.

The site should breathe, but should not waste huge amounts of screen space.

Avoid excessive empty areas just to look "premium."

---

# 3. Strong Anti-AI-Template Rules

This project must NOT look like a generic AI-generated website.

Avoid:

- generic SaaS landing pages
- giant abstract blobs
- random gradients
- glassmorphism
- excessive floating shapes
- huge pill-shaped UI everywhere
- identical cards repeated across sections
- childish cartoon illustrations
- low-quality stock photos
- obviously AI-generated animal photos
- excessive drop shadows
- excessive badges
- excessive borders
- excessive rounded containers
- meaningless decorative elements
- excessive animation
- emoji-heavy UI
- generic dashboard aesthetics
- over-designed futuristic interfaces
- default Tailwind styling
- default component-library appearance
- cookie-cutter hero sections
- visually repetitive layouts

Do not use decorative effects simply because they are available.

The site should look expensive because the visual decisions are good.

---

# 4. Reference Designs

Visual references will be supplied separately.

When reference images are available:

1. Study them carefully.
2. Extract principles, not literal copies.
3. Analyze composition, spacing, typography, hierarchy, photography treatment, proportions, and interaction patterns.
4. Use them as art direction.
5. Do not reproduce any reference pixel-for-pixel.
6. Preserve the D&C Vet Clinic identity.
7. When references conflict with usability, accessibility, performance, responsiveness, or maintainability, prioritize the latter.

Do not get lost attempting to copy references.

---

# 5. Typography

Typography is a major part of the brand.

Use:

- one excellent readable Arabic primary font
- one restrained Arabic handwritten/calligraphic accent font

Google Fonts are allowed.

Possible directions include:

- modern Arabic sans for body/UI
- tasteful handwritten/display Arabic accent for selected brand moments

Do not use more than two main font families without a clear reason.

Use the accent font carefully. It should add personality, not make the site childish.

Use Western digits:

```text
1,500
98%
```

Dates should use Arabic formatting:

```text
18 سبتمبر 2026
```

---

# 6. Technology

Use:

- Vite
- React
- TypeScript
- Tailwind CSS as the primary styling system
- a small global CSS layer only when Tailwind is awkward
- React Router
- Lucide React (or another lightweight current icon library)
- Motion only where meaningful
- npm

Use current stable versions available when implementing the project.

Do not introduce unnecessary dependencies.

Do not use a large UI framework.

Do not use heavy state management.

Use React state/context only where actually needed.

---

# 7. Architecture Philosophy

Use this principle:

> **Simple now, scalable later.**

The current project is a veterinary clinic website only.

Do NOT build:

- e-commerce
- products
- cart
- checkout
- payment processing
- customers
- accounts
- orders
- CMS
- database
- authentication
- admin dashboard
- backend

However, avoid architecture that makes a future store painful to add.

The future store should look like a natural extension of the same visual system:

- same typography
- same palette
- same buttons
- same cards
- same spacing
- same image treatment
- same interaction language
- same design tokens

Do not create speculative store code now.

---

# 8. Routing

Use React Router.

Required routes:

```text
/
/services
/blog
/blog/:slug
/gallery
/team
```

No dedicated contact page.

`اتصل بنا` is a link/CTA only.

Add a polished 404 route/page.

Do not create unnecessary routes.

Future routes may eventually include store pages, but do not implement or expose them now.

---

# 9. Navigation

Desktop navigation must contain exactly:

```text
الرئيسية | خدماتنا | مدونة | جاليري | فريقنا | اتصل بنا
```

## Desktop

At the top of the homepage:

- transparent/integrated with the hero
- appropriate contrast with hero photography

After scrolling:

- transition into a solid light header
- subtle, elegant transition
- no exaggerated glass effect

## Mobile

Use:

- compact header
- logo
- hamburger button
- polished mobile menu/drawer

The mobile menu must be:

- accessible
- keyboard friendly
- RTL-correct
- touch friendly
- easy to close

---

# 10. Homepage

The home page must contain:

1. Header
2. Hero
3. Social media links
4. About the clinic
5. Services preview
6. Why choose us
7. Statistics
8. Team preview
9. Gallery preview
10. Testimonials
11. FAQ
12. Contact/location area
13. Footer

Do not make every section use the same visual structure.

Create a visual rhythm across the page.

---

# 11. Hero

Use a split layout:

- content/text side
- large premium animal photograph side

Headline:

> رعاية أحنّ لصديقك المقرّب

Create warm, professional supporting copy in polished Modern Standard Arabic with Egyptian personality.

Primary CTA:

> احجز موعد

Optional supporting navigation can point toward services.

Do not overload the hero.

Photography should be a major visual focal point.

The hero should immediately communicate:

- trust
- expertise
- care
- warmth
- premium quality

---

# 12. Booking Flow

`احجز موعد` opens a polished frontend-only booking experience.

Prefer a modal/overlay.

Collect useful information such as:

- اسم صاحب الحيوان
- اسم الحيوان
- رقم الهاتف
- نوع الحيوان
- الخدمة المطلوبة
- الموعد المفضل
- ملاحظات اختيارية

No backend submission.

After validation/submission:

1. build a prefilled WhatsApp message
2. include the entered appointment information
3. open the clinic WhatsApp link using replaceable placeholder data

Handle:

- required fields
- validation
- invalid phone
- feedback
- close behavior
- keyboard access
- mobile usability

Keep the code ready for future backend replacement without pretending a backend exists.

---

# 13. Services — خدماتنا

Include:

- الكشف البيطري
- التطعيمات
- الجراحة
- طب الأسنان
- التحاليل
- الأشعة
- العناية والتجميل
- علاج الطوارئ

Use a mixture of:

- service cards
- editorial content blocks
- imagery
- tasteful icons

Do not make all eight services identical cards.

Each service should have:

- title
- concise Arabic description
- tasteful icon
- image/visual treatment where appropriate

Keep service data centralized.

---

# 14. Blog — مدونة

Create approximately 6–8 realistic Arabic demo articles.

Content should feel like genuine veterinary educational content.

Each article listing item includes:

- image
- category
- title
- excerpt
- date
- reading time

Clicking an article opens:

```text
/blog/:slug
```

Each article page should include:

- title
- cover image
- metadata
- readable article content
- section headings
- proper editorial typography
- related articles
- return-to-blog navigation

Avoid walls of text.

Use real structured content, not lorem ipsum.

---

# 15. Gallery — جاليري

Create approximately 12–18 high-quality images.

Subjects should include a mixture of:

- dogs
- cats
- clinic interiors/exteriors
- veterinary care
- staff
- warm candid moments

Layout:

**mixed-size editorial / magazine-style composition**

No filtering.

No lightbox.

No click-to-open requirement.

Use subtle hover effects.

Do not make hover essential to understanding the gallery.

Ensure the gallery remains natural on touch devices.

---

# 16. Team — فريقنا

The main veterinarian must have significantly more visual emphasis than assistants.

## Main doctor

Create a large editorial hero/profile area with:

- large portrait
- name
- title
- specialty
- experience
- short biography

## Assistants

Present smaller elegant cards below with:

- portrait
- name
- role
- specialty
- short bio

Use realistic placeholder Egyptian names and professional information.

Visual hierarchy:

**main doctor first → assistants second**

Do not make all team members visually equal.

---

# 17. Testimonials — آراء العملاء

Create realistic fictional demo testimonials.

Use Egyptian names.

Examples of naming style:

- مريم أحمد
- محمد حسن

Clearly treat them as demo content during implementation rather than making false claims.

Use:

- elegant carousel
- refined typography
- subtle transitions

Also include an animated testimonial strip that moves:

**right → left**

This must feel editorial and intentional, not like a cheap marquee.

Respect:

```text
prefers-reduced-motion
```

---

# 18. FAQ

Create realistic Arabic veterinary FAQs around:

- appointments
- vaccinations
- emergencies
- clinic hours
- follow-ups
- services
- pet care
- consultations

Use an elegant accordion.

Requirements:

- semantic buttons
- keyboard accessible
- clear expanded/collapsed state
- subtle transitions
- no visual clutter

---

# 19. Contact

No dedicated contact page.

Use contact information in the homepage and footer.

Use realistic but clearly replaceable Egyptian placeholders for:

- address
- phone
- WhatsApp
- email
- working hours

`اتصل بنا` should perform a useful contact action.

All values must be centralized.

---

# 20. Social Media

Include icon links for:

- Facebook
- Instagram
- WhatsApp
- TikTok
- YouTube

Use Arabic accessible labels where appropriate.

Keep social UI subtle and integrated into the brand.

---

# 21. Footer

Footer should contain:

- clinic logo
- short description
- page links
- contact information
- working hours
- social icons
- copyright

The footer should feel designed, not like an afterthought.

---

# 22. Statistics

Include animated counters.

Use realistic placeholders for:

- animals cared for
- years of experience
- visits
- client satisfaction

Example direction:

```text
+1,500 حيوان
+8 سنوات خبرة
+3,200 زيارة
+98% رضا العملاء
```

Numbers are examples; choose polished realistic values.

Animate when the section enters the viewport.

Keep the visual treatment editorial rather than SaaS/dashboard-like.

---

# 23. Photography and Image Architecture

High-quality photography is essential.

Use a mix of:

- professional veterinary photos
- natural pet photos
- warm lifestyle photos
- editorial pet photography
- premium commercial photography

Avoid:

- low-quality images
- obvious AI-generated animals
- cheesy stock-photo poses

## Image file architecture

Make all images easy to replace.

Use a centralized system and an organized asset structure, for example:

```text
src/
  assets/
    images/
      hero/
      services/
      team/
      gallery/
      blog/
      branding/
```

Image references should be centralized enough that replacing an image does not require searching through many JSX files.

Use:

- WebP where appropriate
- AVIF where appropriate
- responsive sizing
- lazy loading for non-critical images
- high priority for critical hero imagery
- proper Arabic alt text

---

# 24. Decorative Elements

Tasteful pet/veterinary decoration is welcome.

Possible directions:

- subtle paw motifs
- refined line motifs
- organic shapes
- tiny veterinary details
- delicate separators
- minimal illustrative accents

Rule:

**Less is more.**

Decoration must support hierarchy.

Never let it become childish or noisy.

---

# 25. Animation System

Animation should be:

**subtle + elegant + purposeful**

Use it for:

- section reveals
- page entrances
- button feedback
- image hover states
- header transition
- mobile navigation
- animated counters
- FAQ expansion
- carousel transitions
- testimonial strip

Use CSS/Tailwind whenever sufficient.

Use Motion when it materially improves a complex interaction.

Do not add animation simply because the library exists.

Every meaningful animation should improve:

- hierarchy
- feedback
- navigation
- atmosphere

Respect `prefers-reduced-motion`.

---

# 26. Responsive Design

Support:

- mobile
- tablet
- desktop

Use a mobile-first implementation philosophy.

Do not simply stack desktop sections.

Actually rethink layout and hierarchy for smaller screens.

Pay special attention to:

- header
- hero
- typography
- CTA buttons
- booking modal
- statistics
- gallery
- blog
- testimonials
- team
- footer

Requirements:

- no horizontal overflow
- no broken RTL behavior
- no awkward cropping
- comfortable touch targets
- readable line lengths
- stable layouts

---

# 27. Accessibility

Implement:

- semantic HTML
- correct heading hierarchy
- keyboard navigation
- visible focus states
- accessible controls
- useful ARIA only where needed
- accessible forms
- meaningful Arabic alt text
- sufficient contrast
- reduced-motion support

Prefer semantic HTML over excessive ARIA.

---

# 28. SEO

Implement sensible frontend SEO.

Include:

- `lang="ar"`
- RTL
- page-specific titles
- Arabic meta descriptions
- semantic headings
- meaningful URLs
- canonical-friendly structure
- favicon
- manifest
- logo-based app icons where appropriate
- basic structured data where it makes sense

Do not overengineer SEO.

No social-preview metadata is required.

---

# 29. Configuration and Replaceable Data

Create a central clinic configuration.

Keep values like:

- clinic name
- logo
- phone
- WhatsApp
- address
- email
- working hours
- social links
- description

in one obvious place.

Also create:

```text
.env.example
```

Potential public variables may include:

```text
VITE_CLINIC_PHONE
VITE_WHATSAPP_NUMBER
VITE_INSTAGRAM_URL
VITE_FACEBOOK_URL
VITE_TIKTOK_URL
VITE_YOUTUBE_URL
```

Remember:

`VITE_*` values are public.

Never put secrets in frontend code.

---

# 30. Data Separation

Separate content from presentation.

Use data modules where useful, such as:

```text
src/
  data/
    services.ts
    team.ts
    testimonials.ts
    blog.ts
    gallery.ts
```

Pages and components should consume data instead of containing huge hardcoded content blocks.

Do not turn this into an overengineered content framework.

---

# 31. Component Architecture

Create reusable components when reuse is justified.

Examples:

- Navbar
- MobileMenu
- Button
- Container
- SectionHeading
- ServiceCard
- DoctorProfile
- TeamCard
- Testimonial
- FAQAccordion
- AnimatedCounter
- BlogCard
- GalleryItem
- Footer
- BookingModal
- PageHeader
- LoadingState
- EmptyState
- ErrorState

Do not create tiny meaningless components just to increase component count.

Favor:

**clear + reusable + understandable**

---

# 32. State Management

Keep it simple.

Use React state/context only when actually needed.

Do not add Redux, Zustand, or similar libraries unless a real project requirement appears later.

For the current scope, lightweight React state is enough.

---

# 33. Error / Loading / Empty States

Create polished visual states for:

- loading
- image loading
- image errors
- empty content
- invalid routes / 404

Examples should match the brand.

Example:

```text
لا توجد مقالات متاحة حاليًا
```

Do not use ugly browser-default-looking states.

---

# 34. Performance

Performance is a first-class feature.

Prioritize:

- small bundle
- minimal dependencies
- optimized images
- lazy loading
- responsive image sizes
- minimal unnecessary JS
- reusable components
- stable rendering
- minimal state
- restrained animation
- no unnecessary DOM complexity

The website should feel fast on ordinary mobile devices.

---

# 35. Styling Architecture

Tailwind is the primary styling system.

Global CSS should remain small.

Use global CSS only for genuine global concerns or areas that are awkward in Tailwind.

Create consistent design tokens for:

- colors
- typography
- spacing
- radii
- shadows
- transitions
- content width
- breakpoints

Do not scatter nearly-identical values throughout the codebase.

---

# 36. Code Quality

Use professional TypeScript.

Priorities:

- strong typing
- predictable naming
- small focused components
- reusable patterns
- no duplicated giant JSX
- no magic values scattered around
- no dead code
- no fake functionality
- no console errors
- no broken imports
- no unused dependencies
- no unused variables

## Comments

Comments should explain:

- why unusual logic exists
- important architecture decisions
- replacement/customization instructions
- non-obvious behavior
- meaningful implementation constraints

Do **not** comment every obvious line.

---

# 37. Future Store Compatibility

The project may become an online store later.

Preserve the current design language so future store pages can naturally use:

- same typography
- same colors
- same buttons
- same spacing
- same cards
- same icon treatment
- same imagery
- same motion language

But do not implement store functionality now.

Use this rule:

> **Future-compatible, not future-built.**

Do not create placeholder cart/product infrastructure just for theoretical scalability.

---

# 38. Git and Project Hygiene

Maintain:

- `.gitignore`
- clean file naming
- organized imports
- no junk files
- no build artifacts committed
- repository-ready structure

---

# 39. Tooling

Use:

- ESLint
- Prettier
- TypeScript checks
- clean formatting
- production build verification

Use npm.

Keep tooling reasonable.

---

# 40. Traditional Hosting

The eventual deployment target is traditional hosting.

Do not assume server-side rendering.

Do not require a proprietary hosting platform.

Keep the build suitable for a normal static frontend deployment.

---

# 41. Do Not Add These

Do not add features outside scope:

- newsletter
- contact form
- authentication
- accounts
- CMS
- e-commerce
- cart
- checkout
- payments
- admin dashboard
- database
- backend
- product catalog
- dark mode
- giant search system
- unnecessary filtering
- unnecessary popups
- unnecessary notifications
- gamification
- unrelated animations
- unnecessary third-party libraries

---

# 42. Development Workflow

## IMPORTANT

Do not attempt to create the entire project as one unstructured giant operation.

Build systematically.

Keep the project coherent after every phase.

Do not repeatedly ask for confirmation when the requirement is already clear.

Use sound engineering judgment.

---

## Phase 1 — Analyze and plan

Before major implementation:

- inspect current repository
- inspect all supplied assets
- inspect all supplied visual references
- establish information architecture
- establish design system
- establish color palette
- establish typography
- establish spacing/radius/shadow system
- establish responsive strategy
- establish component strategy
- establish data structure

Do not spend excessive time writing a giant theoretical plan.

---

## Phase 2 — Project setup

Set up:

- Vite
- React
- TypeScript
- Tailwind
- React Router
- ESLint
- Prettier
- folders
- global CSS
- theme tokens
- configuration
- reusable primitives

Verify the project builds.

---

## Phase 3 — Global shell

Build:

- RTL root
- navbar
- mobile navigation
- header scroll behavior
- footer
- buttons
- containers
- typography
- shared layout primitives

Test mobile behavior.

---

## Phase 4 — Homepage

Build in logical sections:

1. hero
2. social links
3. about
4. services preview
5. why choose us
6. statistics
7. team preview
8. gallery preview
9. testimonials
10. FAQ
11. contact
12. footer

Maintain one coherent art direction.

---

## Phase 5 — Services

Build `/services`.

---

## Phase 6 — Blog

Build:

- `/blog`
- `/blog/:slug`

Use reusable article and card components.

---

## Phase 7 — Gallery

Build `/gallery`.

---

## Phase 8 — Team

Build `/team`.

---

## Phase 9 — Booking

Build and refine:

- booking modal
- validation
- WhatsApp message
- feedback states
- accessibility
- mobile behavior

---

## Phase 10 — Responsive pass

Test:

- small mobile
- normal mobile
- tablet
- desktop
- large desktop

Fix actual layout issues.

Do not merely shrink everything.

---

## Phase 11 — Final audit

Audit:

### Design
- visual hierarchy
- consistency
- typography
- spacing
- photography
- composition
- mobile experience

### Accessibility
- semantics
- keyboard navigation
- focus
- alt text
- reduced motion
- contrast

### Performance
- images
- bundle
- dependencies
- rendering
- animations

### SEO
- titles
- descriptions
- language
- headings
- structured data
- favicon

### Code
- TypeScript
- ESLint
- formatting
- unused imports
- dead code
- routes
- console errors
- production build

---

# 43. Decision-Making Rule

When multiple technically valid choices exist, choose the option that best balances:

1. usability
2. mobile experience
3. readability
4. trust
5. hierarchy
6. accessibility
7. performance
8. maintainability
9. visual distinction
10. decoration

Never sacrifice the first items for the last.

---

# 44. Critical Design Principle

> **Do not sacrifice maintainability, performance, accessibility, responsiveness, or semantic structure for visual effects. The design must look expensive because of art direction, typography, spacing, photography, composition, and details — not because of excessive code or effects.**

---

# 45. Definition of Done

The project is not finished until:

- all required pages exist
- all required routes work
- navigation works
- mobile menu works
- header transition works
- booking flow works
- WhatsApp booking link works with replaceable data
- statistics animate
- testimonials work
- testimonial strip moves RTL
- FAQ works
- gallery works
- blog listing works
- blog article pages work
- team hierarchy is correct
- loading states exist where appropriate
- image error states exist
- empty states exist
- 404 exists
- RTL is correct
- Arabic UI is consistent
- logo is preserved
- imagery is replaceable
- contact data is centralized
- social links are centralized
- responsive layout works
- accessibility basics are implemented
- SEO basics are implemented
- ESLint is clean
- formatting is clean
- production build succeeds
- no obvious console errors remain

---

# 46. Final Delivery

At completion, provide:

1. Complete working codebase
2. Exact project structure
3. npm install/run commands
4. Production build command
5. Where to replace the logo
6. Where to replace all images
7. Where to replace clinic information
8. Where to replace phone/WhatsApp/social links
9. Where to modify fonts/colors/design tokens
10. Explanation of booking → WhatsApp flow
11. Brief architecture summary
12. Confirmation of all implemented routes/features
13. Confirmation of responsive behavior
14. Confirmation of loading/error/empty/404 states
15. Confirmation of accessibility basics
16. Confirmation of SEO basics
17. Confirmation of linting/formatting
18. Confirmation that the production build succeeds

Do not claim something was verified if it was not actually verified.

---

# 47. Final Quality Test

Before considering the work complete, ask:

**Would this look like a carefully art-directed premium veterinary brand if I removed the code and only showed the rendered site?**

If the answer is no, continue refining the visual system.

Also ask:

**Would another competent developer understand and modify this project quickly?**

If the answer is no, simplify/refactor.

Also ask:

**Would adding a future shop naturally inherit this exact visual language?**

If the answer is no, fix the design-system architecture — but do not add store functionality.

---

# 48. Absolute Final Instruction

Build a website that communicates:

**"رعاية أحنّ، بخبرة واهتمام."**

It must be:

**premium without being cold, cute without being childish, distinctive without being weird, modern without being generic, and polished without being bloated.**

Make the website memorable through design quality, not gimmicks.
