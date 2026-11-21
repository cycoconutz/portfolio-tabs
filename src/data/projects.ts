import type { WipeId } from '../transitions/wipes'
import deadwaxShot from '../assets/shots/deadwax.png'
import twilightShot from '../assets/shots/twilightvotes.png'
import vaultShot from '../assets/shots/vault.png'
import solaceShot from '../assets/shots/solace.png'
import karmaticShot from '../assets/shots/karmatic.png'
import fluxShot from '../assets/shots/flux.png'
import ledgerShot from '../assets/shots/ledger.png'
import warpbayShot from '../assets/shots/warpbay.png'
import lullaShot from '../assets/shots/lulla.png'
import tictactoeShot from '../assets/shots/tictactoe.png'
import ironlogShot from '../assets/shots/ironlog.png'
import checklistShot from '../assets/shots/checklist.png'

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
  proof?: Array<{ value: string; label: string }>
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
    role: 'Full-stack: design, client, API, database, payments',
    tagline: 'A risograph-printed vinyl marketplace with a checkout that cannot oversell.',
    description:
      "Deadwax is a full-stack marketplace for second-hand records. Buyers browse a full-text catalog, filter by genre, condition and decade, add sleeves to a crate, and pay through Stripe's Payment Element. Sellers get fulfillment dashboards with per-item status and inline price and stock editing, buyers review delivered records, and the admin back office shows the payment plumbing: webhook events, the delivery queue and its dead letters. The checkout is built around the failure it used to have: two buyers racing for the last copy could both buy it.",
    highlights: [
      'Checkout claims stock with a conditional update inside one transaction: twenty buyers racing for the last copy produce one order and nineteen 409s',
      'Stripe test payments through Payment Element, with order metadata and an idempotency key on every PaymentIntent, and no card data reaching the server',
      'Signed webhooks recorded in the same transaction as the state change, so a replayed event answers duplicate:true and changes nothing',
      'Transactional outbox for receipts and seller notices, with exponential backoff, dead letters and delivery that cannot duplicate',
      'Postgres full-text search with ranked results, filters, five sort modes and pagination',
      'OpenTelemetry spans across checkout, webhook and worker, with the trace id on the response and in the logs',
    ],
    proof: [
      { value: '1 of 20', label: 'checkouts win the last copy' },
      { value: '1 of 5', label: 'webhook deliveries, one transition' },
      { value: '0', label: 'duplicate charges or rows' },
      { value: 'p95 5 ms', label: 'at 50 rps, 1,500 requests' },
      { value: '0.2 s', label: 'warm start, was 32.75 s' },
      { value: '27', label: 'tests, CI on every push' },
    ],
    tech: ['TypeScript', 'React', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'OpenTelemetry', 'Vitest'],
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
  {
    slug: 'warp-bay',
    index: '08',
    name: 'Warp Bay Auto Lab',
    tag: 'Project',
    year: '2026',
    role: 'Full-stack — .NET API, scheduling domain, realtime board',
    tagline: 'Neon-grade shop scheduling for a fictional flagship bay.',
    description:
      'Warp Bay Auto Lab is an auto-shop scheduler with a synthwave pulse. Drivers pick a service and a warp slot from a live availability grid; advisors confirm, check in and close work orders as each job moves through the shop. Every appointment carries a role-gated status trail, and double-booking a bay or a tech is refused at the database level. The whole shop — bays, techs, customers and two weeks of appointments — is seeded fictional data, with one-click demo logins so anyone can explore it without signing up.',
    highlights: [
      'ASP.NET Core 8 Minimal API with EF Core, JWT bearer auth and role policies (Admin, Manager, Tech, Customer)',
      'Transactional booking guard: overlapping bay/tech slots return 409, with row-version concurrency tokens and idempotency keys',
      'Role-gated status state machine (Requested to PickedUp) with a full audit trail of who moved what, and when',
      'SignalR hub that pushes schedule changes to every open board, plus a hosted-service worker for reminder dispatch',
      'Availability grid cached per service and day, with timezone-correct shop hours',
      'Seeded demo world and one-click logins for all four roles, resettable from the UI',
    ],
    tech: ['C#', '.NET 8', 'EF Core', 'SQL Server', 'SignalR', 'React'],
    links: [
      { label: 'Visit live demo', href: 'https://cycoconutz.github.io/warp-bay/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/warp-bay', kind: 'repo' },
    ],
    shot: warpbayShot,
    theme: 'warpbay',
    wipe: 'warp',
  },
  {
    slug: 'lulla',
    index: '09',
    name: 'Lulla',
    tag: 'Project',
    year: '2026',
    role: 'Front-end — local-first design and PWA',
    tagline: 'A warm, gentle tracker for the first years of family life.',
    description:
      'Lulla is a family-life companion for parents of babies and toddlers. It tracks feedings, sleep, diapers and growth, keeps routines and firsts, rolls it all into a week of trends and a calendar, and works offline first with anonymous backup to a Neon Postgres branch. PWA with live reminders and per-parent notes.',
    highlights: [
      'Local-first Dexie/IndexedDB store, fully usable offline, with anonymous cloud backup and merge',
      'Log feeding, sleep, diaper and growth events with timers and rich sleep graphs',
      'Seven-day stacked trends (sleep, feeding, awake) and a month calendar heatmap',
      'Age-based guides and a mom vault: moods, pregnancy, postpartum weight and vitals, water',
      'Lock-screen reminders via the Web Push API, plus routines, firsts and memories',
      'PWA with install prompt, CSV export and backup/restore flows',
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Dexie', 'IndexedDB', 'Neon'],
    links: [
      { label: 'Visit live app', href: 'https://lulla.dev/landing/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/lulla', kind: 'repo' },
    ],
    shot: lullaShot,
    theme: 'lulla',
    wipe: 'lull',
  },
  {
    slug: 'tictactoe',
    index: '10',
    name: 'Tic-Tac-Toe',
    tag: 'Arcade',
    year: '2026',
    role: 'Front-end — game engine, AI opponent, coach',
    tagline: 'Tic-tac-toe against an engine that never slips.',
    description:
      'A tic-tac-toe game against a perfect-play minimax engine that reviews every move you make. The engine plays optimally and tells you whether you found a good one, and if not, which square held. Corners are the sharpest openings because they leave the centre as the only reply that holds a draw.',
    highlights: [
      'Minimax engine with perfect play — never loses, only draws',
      'Move coach that reviews every move and explains which square was better',
      'Score tracking across rounds with win/draw/loss counts',
      'Move log with full game history',
      'Responsive design with a clean, dark UI',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'Minimax'],
    links: [
      { label: 'Visit live site', href: 'https://cycoconutz.github.io/tic-tac-toe/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/tic-tac-toe', kind: 'repo' },
    ],
    shot: tictactoeShot,
    theme: 'tictactoe',
    wipe: 'crt',
  },
  {
    slug: 'ironlog',
    index: '11',
    name: 'IronLog',
    tag: 'Project',
    year: '2026',
    role: 'Full-stack — Spring Boot API, React SPA, single Docker image',
    tagline: 'A strength-training log that turns sessions into volume, streaks and records.',
    description:
      'IronLog is a workout tracker for lifters. Log a session exercise by exercise — sets, reps, weight, RPE — and it rolls everything up into weekly volume, muscle-group splits, streaks and per-lift personal records. A seeded catalog of 65 movements, a debounced picker, editable history and a records board close the loop. One Spring Boot API and a React SPA ship as a single Docker image backed by managed Postgres.',
    highlights: [
      'Spring Boot REST API with Spring Security JWT auth and JPA over PostgreSQL',
      'Volume, muscle-split and streak analytics computed server-side and charted client-side',
      'Personal-record board with estimated 1RM and per-lift progress history',
      '65 seeded exercises plus a debounced, muscle-filtered picker for building sessions',
      'Single-image deploy: the Maven build compiles the React SPA into the jar and serves it from Spring',
      'Dockerized and shipped to Render against a managed Neon Postgres database',
    ],
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Docker'],
    links: [
      { label: 'Visit live app', href: 'https://ironlog-llgm.onrender.com/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/ironlog', kind: 'repo' },
    ],
    shot: ironlogShot,
    theme: 'ironlog',
    wipe: 'iron',
  },
  {
    slug: 'checklist',
    index: '12',
    name: 'Checklist',
    tag: 'Newest',
    year: '2026',
    role: 'Full-stack: client, server actions, database, Web Push',
    tagline: 'Shared checklists with no accounts: send a link, everyone edits.',
    description:
      'Checklist is a shared-checklist PWA with no accounts and no passwords. Make a list, send the invite link, and everyone can add, change and complete tasks together with drag-and-drop ordering, priorities, assignees and due dates. Every mutation lands in an audit trail that survives task deletion, members can mute notifications per event, and the whole thing installs as a PWA with Web Push. A Next.js 16 App Router app over Drizzle and Neon serverless Postgres.',
    highlights: [
      'Invite links are the access model: idempotent to re-follow, and rotating the token instantly revokes every outstanding link',
      'Session cookie stores only the sha256 hash of the token, httpOnly; the raw secret never touches the database',
      'Drag-and-drop reorder validated server-side: every task id is checked against the list and the dragged subset is replayed into existing position slots, with optimistic client updates and rollback',
      'Web Push that excludes the actor, honors per-list per-event mute toggles, prunes dead endpoints, sends task titles only, and is fire-and-forget so a push can never fail a write',
      'SWR polling plus focus revalidation, with server order always winning over an in-flight drag',
      'Six sort modes plus status, priority and assignee filters, all synced to the URL as shareable views',
    ],
    tech: ['TypeScript', 'Next.js 16', 'React 19', 'Drizzle ORM', 'Neon', 'Web Push', 'Tailwind CSS'],
    links: [
      { label: 'Visit live app', href: 'https://checklist-cyco.vercel.app/', kind: 'live' },
      { label: 'View source', href: 'https://github.com/cycoconutz/checklist', kind: 'repo' },
    ],
    shot: checklistShot,
    theme: 'checklist',
    wipe: 'stamp',
  },
]
