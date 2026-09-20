<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Production lead-data safety rules

These rules are mandatory for every agent or developer changing lead capture,
the admin dashboard, runtime configuration, deployment scripts, cleanup logic,
or backups. Lead records contain customer personal information and must be
handled as production data, not as disposable application files.

## Durable storage contract

- Production lead records live at `/var/lib/aluminiumdesigns/leads.ndjson`.
- `LEADS_DATA_PATH` must be `/var/lib/aluminiumdesigns` in the production
  environment. `MONITORING_EVENTS_PATH` currently uses the same durable
  directory.
- Lead backups live at `/var/backups/aluminiumdesigns` and are configured by
  `LEADS_BACKUP_PATH`.
- Never store production leads under `/var/www/aluminiumdesigns-current`, an
  `aluminiumdesigns-release-*` directory, `.next`, the repository working tree,
  or any other directory replaced or removed during deployment.
- Never commit lead files, backups, exported CSV files, environment files, or
  customer data to Git. `data/leads.ndjson` remains ignored for this reason.
- Lead records must not use monitoring-event retention or pruning. Monitoring
  may expire; customer leads must remain until an explicit, approved retention
  policy says otherwise.
- Production must fail visibly when durable lead storage is not configured. Do
  not reintroduce a silent production fallback to `process.cwd()/data`.

## Data protection and privacy

- The lead directory must remain owner-only (`0700`), and lead and backup
  files must remain owner-only (`0600`).
- Never print names, telephone numbers, locations, referrers, IP addresses, or
  complete lead records in logs, terminal output, test output, or chat. Use
  record counts, file sizes, checksums, and timestamps for diagnostics.
- Do not copy production lead data to a developer machine unless the user has
  explicitly approved a defined recovery operation and a secure destination.
- Do not delete, truncate, rewrite, move, or replace a lead file or backup
  without explicit user approval, a verified backup, and exact-path checks.
- When restoring or merging records, preserve the original file first and use
  a deterministic deduplication plan. Never overwrite the only known copy.

## Deployment invariants

- Read `src/lib/leads.ts`, `run-aluminiumdesigns.sh`, `scripts/deploy.sh`, and
  `scripts/backup-leads.sh` before modifying storage or deployment behaviour.
- `run-aluminiumdesigns.sh` must continue exporting durable storage paths before
  the Node process starts.
- `scripts/deploy.sh` must continue creating the persistent directories,
  migrating legacy release-local data only when the durable destination is
  absent, and backing up leads before switching the active release.
- Old-release cleanup must never match `/var/lib/aluminiumdesigns` or
  `/var/backups/aluminiumdesigns`.
- Never deploy a change that points lead storage at a release directory,
  container layer, temporary directory, or unmounted Docker filesystem.
- Docker deployments must mount `/app/data` to a persistent host directory or
  named volume. Replacing a container without a persistent mount is prohibited.

## Backup and recovery requirements

- `/usr/local/sbin/aluminiumdesigns-backup-leads` is scheduled by
  `/etc/cron.d/aluminiumdesigns-lead-backup` at 02:15 UTC daily.
- Local backups are compressed, SHA-256 checksummed, stored with `0600`
  permissions, and retained for 90 days by default.
- Before every deployment or storage change, create a fresh backup and verify
  it with `sha256sum -c`; also verify its decompressed record count.
- A same-server backup protects against releases and operator mistakes, but not
  complete disk or server loss. Maintain a Hetzner provider backup/snapshot or
  encrypted off-server backup. Never describe same-disk backup as complete
  disaster recovery.
- Restore into a separate temporary file first, validate NDJSON parsing and
  record counts, then plan a reviewed merge. Do not restore directly over the
  live file.

## Admin and lead-flow verification

- The required flow is: lead form -> `POST /api/leads` -> durable append ->
  authenticated `/admin?view=leads` display -> protected CSV export.
- The admin session cookie path must remain `/` so it is sent to both `/admin`
  and `/api/admin/*`. Narrowing it to `/admin` breaks the CSV export endpoint.
- Lead reads must not convert unexpected storage errors into an empty list.
  Missing data and unreadable storage must be distinguishable in production.
- Changes touching lead capture, admin access, storage, or deployment require:
  targeted ESLint, TypeScript/production build, shell syntax validation, a
  storage-permission check, backup checksum verification, application health
  verification, and an authenticated admin readback. Use synthetic lead data
  only outside production unless the user explicitly approves a production
  test and its safe cleanup.

## Incident record: 2026-09-20

- Root cause: `MONITORING_EVENTS_PATH` and `LEADS_DATA_PATH` were not configured,
  so the application wrote leads inside a disposable release directory. The
  deployment script deleted that directory during old-release cleanup.
- Four older lead records were recovered from
  `/var/lib/aluminiumdesigns/leads.ndjson`, reconnected to the live application,
  displayed successfully in the authenticated admin page, and backed up with a
  verified checksum.
- Nginx logs showed three successful but unrecovered submissions from 9, 15,
  and 18 September 2026. No surviving server-side copy or OS backup was found.
  The related customer details may exist in the business WhatsApp conversations
  because the successful form flow opened a prefilled WhatsApp message.
- Production was reconfigured to use the durable paths, permissions were
  restricted, the application was restarted successfully, and the daily backup
  schedule was installed. Do not reverse these settings during future work.
