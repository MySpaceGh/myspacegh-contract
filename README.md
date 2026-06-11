# @myspacegh/contract

The **single source of truth** for cross-app domain enums on the MySpaceGh platform.

It exists to stop one specific bug class: the web app and the mobile app each used to
define their own copies of `BookingStatus`, `FacilityStatus`, etc., and they **drifted**
(mobile had `accepted`/`declined`/`refunded` members the backend never emits). Both apps
now re-export from this package, so the enums can only change in one place.

## Source of truth

These TypeScript unions **mirror `backend/app/Enums/*.php`** (Laravel). The backend is
authoritative. This package follows it; it never leads.

## What's in it

`src/enums.ts` — `BookingStatus`, `FacilityStatus` (+ `OwnerSettableFacilityStatus`),
`PaymentDuration`, `FacilityTypeSlug`, `TransactionStatus`, `PayoutStatus`,
`CancellationCategory`, `TermsStatus`, `TermsAudience`, `UserRole`, plus `*_LABELS` /
`*_STATUSES` helpers for the UI-facing ones.

It deliberately ships **TS source** (no build step) — Vite and Metro both transpile it.
It has **zero runtime dependencies** and holds only API-shaped types: no UI-only concepts
(e.g. mobile's `Role = 'seeker' | 'agent'` stays in the mobile app).

## How to change an enum (propagation rule)

1. Edit the PHP enum in `backend/app/Enums/*.php` (the real change).
2. Update `backend/docs/API_CONTRACT.md`.
3. Mirror it here in `src/enums.ts`, commit, and push this repo.
4. Bump the dependency in `web` and `mobile` (or re-run the local link) and fix any
   resulting type errors — those errors are the drift surfacing, which is the point.

## Consumption

Committed (works in standalone CI clones of web/mobile):

```jsonc
"@myspacegh/contract": "github:MySpaceGh/myspacegh-contract#main"
```

Fast local dev inside the monorepo (instant edits, not committed):

```bash
# from web/
npm install ../packages/contract --no-save
# from mobile/myspacegh-mobile/
npm install ../../packages/contract --no-save
```
