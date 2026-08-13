# Aluminium Designs website

Next.js website for Aluminium Designs, including first-party site monitoring and search-engine indexing support.

## Local development

Copy `.env.example` to `.env` and configure the required values, then run:

```bash
npm install
npm run dev
```

The website is available at `http://localhost:3000`.

## Monitoring dashboard

The private dashboard is available at `/admin`, with its login form at `/admin/login`. Authentication is controlled by:

```dotenv
ADMIN_USERNAME=admin
ADMIN_PASSWORD=use-a-long-random-password
# Optional; falls back to ADMIN_PASSWORD when omitted.
ADMIN_SESSION_SECRET=use-a-separate-long-random-secret
```

Successful login creates a secure, HTTP-only session that expires after eight hours.

The site records page views, navigation and enquiry clicks, visitor sessions, and browser performance measurements. Events are stored as newline-delimited JSON at `MONITORING_EVENTS_PATH`, or in `./data` when the variable is omitted.

For Docker deployments, `/app/data` is the default event directory and is declared as a volume. Mount it to persistent host or volume storage so analytics survive a container replacement:

```bash
docker run -v apex-monitoring:/app/data --env-file .env -p 3000:3000 apex-aluminium
```

Monitoring uses random anonymous browser and session identifiers to connect page views and clicks into visitor journeys. No names, personal contact details, form contents, or full referring query strings are collected.

## Search indexing

Set the production canonical domain before building:

```dotenv
NEXT_PUBLIC_SITE_URL=https://www.aluminiumdesigns.co.za
```

The application publishes:

- `https://www.aluminiumdesigns.co.za/sitemap.xml`
- `https://www.aluminiumdesigns.co.za/robots.txt`

Submit the sitemap URL in Google Search Console under **Indexing → Sitemaps**. The sitemap contains the home page, core content pages, service pages, Gauteng location pages, and valid location/service pages. Admin, API, and quote redirect routes are excluded from indexing.

The sitemap makes URLs discoverable but does not guarantee indexing; Google still evaluates accessibility, canonical metadata, content quality, and duplication. Use Search Console's URL Inspection tool for priority pages after deployment.

## Verification

```bash
npm run lint
npm run build
```
