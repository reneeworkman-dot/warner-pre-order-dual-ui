/**
 * Dual UI (static) — points at the living Apps Script Web App JSON endpoint.
 * Web App HTML (Index.html) stays the primary living page.
 *
 * Endpoint (already in Code.gs doGet):
 *   {WEB_APP_URL}?api=week
 *   {WEB_APP_URL}?json=1          (alias)
 *   …&callback=preOrderWeek      (JSONP for browser CORS)
 */
window.PRE_ORDER_DUAL = {
  /** Deployed Web App /exec URL (same as docs/demo-link.md). */
  webAppUrl:
    'https://script.google.com/a/macros/warnerrecords.com/s/AKfycbz8D_ozqzJUZzQbOePLEwiuOZJFRdW2CDsiAt5iDoaEEafWOIj2QZ6PDPBUk3qC2Cn8QQ/exec',
  /** Use JSONP so this page can load outside Apps Script (file:// or later Vercel). */
  useJsonp: true,
  jsonpCallback: 'preOrderWeek'
};
