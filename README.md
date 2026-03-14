# VidForge (Vite + React + TypeScript)

VidForge is a modern React app for exploring AI video generation tools. It includes:

- Search and category filtering
- Interactive model and category modals
- Styled sections for Hero, Categories, Models, and Future Predictions
- Tailwind-powered design system with reusable UI utilities/components
- Aurora animated background section integrated into the app

## Tech Stack

- **Vite**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (state management)
- **Lucide React** (icons)

## Project Structure

```txt
src/
  App.tsx
  main.tsx
  index.css
  components/
    demo.tsx
    ui/
      aurora-background.tsx
      glowing-effect.tsx
  data/
    mockData.ts
  lib/
    utils.ts
  store/
    useAppStore.ts
  types/
    models.ts
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Styling & UI Notes

- Tailwind configuration is in `tailwind.config.js`.
- Global styles and CSS variables are in `src/index.css`.
- Utility helper `cn()` is defined in `src/lib/utils.ts`.
- Reusable UI components are kept under `src/components/ui`.
- Aurora UI files:
  - `src/components/ui/aurora-background.tsx`
  - `src/components/demo.tsx` (exports `AuroraBackgroundDemo`)
- Aurora animation support is configured in Tailwind (`aurora` keyframes + `animate-aurora`).

## Data and State

- App data source: `src/data/mockData.ts`
- Centralized app store: `src/store/useAppStore.ts`

## Additional Docs

- `SPEC.md` contains product/specification notes for the project.
