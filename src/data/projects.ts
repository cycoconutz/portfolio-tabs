import type { WipeId } from '../transitions/wipes'
import deadwaxShot from '../assets/shots/deadwax.png'
import twilightShot from '../assets/shots/twilightvotes.png'
import vaultShot from '../assets/shots/vault.png'
import solaceShot from '../assets/shots/solace.png'
import karmaticShot from '../assets/shots/karmatic.png'
import fluxShot from '../assets/shots/flux.png'
import ledgerShot from '../assets/shots/ledger.png'

export interface ProjectLink {
  label: string
  href: string
  kind: 'live' | 'repo'
}

export interface Project {
  slug: string
  index: string
  name: string
  tag: string
  year: string
  role: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  links: ProjectLink[]
  shot: string
  theme: string
  wipe: WipeId
}

export const projects: Project[] = [
  {
    slug: 'deadwax',
    index: '01',
    name: 'Deadwax',
    tag: 'Latest',
    year: '2026',
    role: 'Full-stack — design, client, API, database',
    tagline: 'A risograph-printed vinyl marketplace, built end to end.',
    description:
      "Deadwax is a full-stack marketplace for second-hand records. Buyers browse a full-text catalog, filter by genre, condition and decade, add sleeves to a crate, and check out through a transactional payment flow. Sellers get fulfillment dashboards with per-item status, inline price and stock editing. Buyers review delivered records; an admin back office moderates the whole shop. Payments are simulated — cards ending in 0002 decline.",
    highlights: [
      'Fastify 5 API with Drizzle ORM over PostgreSQL, behind a node:crypto session layer with httpOnly cookies',
      'Postgres full-text search (websearch_to_tsquery) with ranked results, filters, five sort modes and pagination',
      'Transactional checkout: stock decrement, simulated payment record, cart clear, all in one commit',
      'Seller fulfillment state machine that recomputes order status as each line item ships',
      'Verified reviews gated on delivered orders, rolling up into per-listing ratings',
      'Admin summary, user, listing and review moderation routes behind a role hook',
    ],
    tech: ['TypeScript', 'React', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Zod'],
    links: [
      { label: 'Visit live demo', href: 'https://deadwax-exee.onrender.com/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/deadwax', kind: 'repo' },
    ],
    shot: deadwaxShot,
    theme: 'deadwax',
    wipe: 'riso',
  },
  {
    slug: 'twilightvotes',
    index: '02',
    name: 'TwilightVotes',
    tag: 'Featured',
    year: '2025',
    role: 'Front-end — real-time session and tally UI',
    tagline: 'Live agenda voting for Twilight Imperium tables.',
    description:
      'TwilightVotes tracks agenda phases during a game of Twilight Imperium. Hosts create a session, seat every faction, and open agendas; players cast and revise their votes while the whole table watches the tally update in real time. Speaker order, ties and outcome resolution are handled for you.',
    highlights: [
      'Session-scoped state with instant updates across connected players',
      'Faction seating and speaker-aware voting order',
      'Ballot revision and abstentions with a live running total',
      'Built to be read across a table, not a single monitor',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
    links: [{ label: 'Visit live site', href: 'https://www.twilightvotes.com/', kind: 'live' }],
    shot: twilightShot,
    theme: 'twilight',
    wipe: 'agenda',
  },
  {
    slug: 'vault',
    index: '03',
    name: 'Vault',
    tag: 'Project',
    year: '2025',
    role: 'Front-end — search, filter and detail explorer',
    tagline: 'A brutalist explorer for the Art Institute of Chicago.',
    description:
      "Vault pulls from the Art Institute of Chicago's open-access API to let you search, filter and pin more than 65,000 artworks. Search is debounced and synced to the URL, so any browse you find can be copied, shared and reopened exactly as you left it.",
    highlights: [
      'Debounced search synced to the URL for shareable, restorable queries',
      'Faceted filtering across department, medium and date',
      'Lazy, resilient imagery with progressive loading and graceful failures',
      'Hard-edged brutalist layout with zero rounded corners',
    ],
    tech: ['TypeScript', 'React', 'Vite', 'REST API'],
    links: [
      { label: 'Visit live site', href: 'https://cycoconutz.github.io/vault/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/vault', kind: 'repo' },
    ],
    shot: vaultShot,
    theme: 'vault',
    wipe: 'scanline',
  },
  {
    slug: 'solace',
    index: '04',
    name: 'Solace',
    tag: 'Project',
    year: '2025',
    role: 'Front-end — motion, UX and persistence',
    tagline: 'A soft pastel space to breathe and reflect.',
    description:
      'Solace is a small, quiet app for slowing down. Guided breathing sessions animate through pure CSS transitions, and a mood journal stores entries locally so the whole thing works offline with nothing to sign up for.',
    highlights: [
      'Animated breathing patterns driven by CSS transitions, no animation library',
      'Mood journal with localStorage persistence',
      'Glassmorphism surfaces and pastel gradients',
      'Designed around accessibility and reduced-motion fallbacks',
    ],
    tech: ['TypeScript', 'React', 'Vite', 'CSS'],
    links: [
      { label: 'Visit live site', href: 'https://cycoconutz.github.io/solace/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/solace', kind: 'repo' },
    ],
    shot: solaceShot,
    theme: 'solace',
    wipe: 'bloom',
  },
  {
    slug: 'karmatic',
    index: '05',
    name: 'Karmatic',
    tag: 'Project',
    year: '2021',
    role: 'Full-stack — team capstone',
    tagline: 'A MERN-stack single-page app, built by three.',
    description:
      'Karmatic was a three-person bootcamp capstone: a MERN single-page application with authentication and live data. It was the project where the whole stack clicked — routing, sessions, an API and a real database working together.',
    highlights: [
      'MongoDB, Express, React and Node built as one SPA',
      'Session authentication across the client and API',
      'Live data backed by a document database',
      'Shipped by a team of three on a deadline',
    ],
    tech: ['JavaScript', 'React', 'Express', 'MongoDB'],
    links: [
      { label: 'Visit live site', href: 'https://karmatic.onrender.com/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/Karmatic', kind: 'repo' },
    ],
    shot: karmaticShot,
    theme: 'karmatic',
    wipe: 'crt',
  },
  {
    slug: 'flux',
    index: '06',
    name: 'FLUX',
    tag: 'Arcade',
    year: '2026',
    role: 'Front-end — physics, audio & shaders',
    tagline: 'Throw, pluck, and splatter — a physics-and-sound arcade.',
    description:
      'FLUX is a kinetic arcade built with Svelte 5, Rapier2D and the Web Audio API. Drag orbs to fling them, watch collisions become notes and paint splats, toggle gravity and black-hole mode, cycle four foil palettes, and save your splatters as PNGs. Every interaction is immediate — there is no backend, no login, and no build-time API, just canvas, WASM physics and shaders.',
    highlights: [
      'Svelte 5 runes + SvelteKit static — the only non-React project in the catalog to prove stack diversity',
      'Rapier2D-compat WASM physics: dynamic bodies, restitution 0.88, pinball platforms, pointer-driven impulses',
      'Web Audio collider: collision distance check debounced 120 ms, triangle oscillator through lowpass, quantized to pentatonic/major/minor/chromatic',
      'Canvas paint trails: collision splats with highlight dots, translucent fade, toDataURL snapshots persisted in localStorage',
      'Fake fluid shader: three drifting radial gradients with globalCompositeOperation lighter + grain for a breathing foil field',
      'Six+ input modes: drag/fling, click-to-spawn, shake (Space), gravity invert (G), black hole (B), palette (1-4), paint/sound toggles, Konami code, tilt on mobile',
    ],
    tech: ['Svelte 5', 'SvelteKit', 'Rapier', 'Web Audio API', 'Canvas', 'Vite'],
    links: [
      { label: 'Visit live site', href: 'https://cycoconutz.github.io/flux/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/flux', kind: 'repo' },
    ],
    shot: fluxShot,
    theme: 'flux',
    wipe: 'shatter',
  },
  {
    slug: 'ledger',
    index: '07',
    name: 'Ledger',
    tag: 'Project',
    year: '2026',
    role: 'Front-end — import parser, data layer & local persistence',
    tagline: 'A zero-backend revenue and receipt tracker.',
    description:
      'Ledger is a local-first tracker for small sellers. Import a CSV sales export (a Depop report drops straight in), review the revenue in a filterable table, and log expenses with a category, a label and a receipt photo. Everything is stored on-device with IndexedDB — there is no backend, no login and no account, so records never leave the browser.',
    highlights: [
      'Column-guessing CSV import that maps a resale export (Date of sale, Description, Total) into dated revenue rows',
      'Filterable revenue table with running totals, category color chips and label search',
      'Expense entries with category, label and an attached receipt image, all kept locally',
      'IndexedDB persistence plus one-click JSON backup and restore',
      'Zero backend and zero login — the whole app runs client-side',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'IndexedDB', 'CSV'],
    links: [
      { label: 'Visit live site', href: 'https://cycoconutz.github.io/revenue-tracker/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/revenue-tracker', kind: 'repo' },
    ],
    shot: ledgerShot,
    theme: 'ledger',
    wipe: 'stamp',
  },

]
