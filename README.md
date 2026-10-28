# Dual UI — keep Apps Script Web App

**Web App stays.** `doGet` still serves `Index.html`. Nothing removed.

## Openable URL

**https://reneeworkman-dot.github.io/warner-pre-order-dual-ui/**

- Repo: https://github.com/reneeworkman-dot/warner-pre-order-dual-ui  
- Host: GitHub Pages (`main` /)  
- Fallback preview: [Canvas Summary](https://cursor.com/canvas/store-51946380-8361-49b4-aefd-ae3b78dcf21a/26511ad4-32d0-4814-a717-4e5f6ad69bac) (fixture only)

## Paths

| Path | Where | Live data |
|------|--------|-----------|
| **Apps Script Web App** (primary) | [demo-link](../../demo-link.md) | `google.script.run` → `getWeekPayload` |
| **GitHub Pages dual UI** | link above | `?api=week` (+ JSONP) |
| **This folder** | source synced to the repo | same |

## JSON API (already in Code.gs)

```
{WEB_APP_URL}?api=week
{WEB_APP_URL}?json=1
{WEB_APP_URL}?api=week&callback=preOrderWeek   ← JSONP for browsers
```

## One next step (live data on the new page)

1. Paste updated **Code.gs** (JSONP in `doGet`) → **Deploy → Manage deployments → New version**.  
2. Open https://reneeworkman-dot.github.io/warner-pre-order-dual-ui/

Existing Web App URL still works for the living page.
