// =============================================
// INSLEM — WhatsApp Click Tracking
// Lightweight tracking for measuring conversion by section
// =============================================

// Track which CTA was clicked
export function trackWhatsAppClick(ctaId, label) {
  // Log to console for debugging (remove in production or replace with analytics)
  console.log(`[INSLEM CTA Click] ${ctaId} — ${label || ''} — ${new Date().toISOString()}`)

  // If Google Analytics is present, send event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: ctaId,
      value: 1,
    })
  }

  // If Google Tag Manager is present
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      cta_id: ctaId,
      cta_label: label || '',
      timestamp: new Date().toISOString(),
    })
  }

  // Store in localStorage for offline tracking
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const clicks = JSON.parse(localStorage.getItem('inslem_whatsapp_clicks') || '[]')
      clicks.push({
        cta: ctaId,
        label: label || '',
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer || 'direct',
      })
      // Keep last 100 clicks
      localStorage.setItem('inslem_whatsapp_clicks', JSON.stringify(clicks.slice(-100)))
    } catch (e) {
      // localStorage not available
    }
  }
}

// Get all tracked clicks
export function getTrackedClicks() {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      return JSON.parse(localStorage.getItem('inslem_whatsapp_clicks') || '[]')
    } catch (e) {
      return []
    }
  }
  return []
}

// Get click counts by CTA
export function getClickCounts() {
  const clicks = getTrackedClicks()
  const counts = {}
  clicks.forEach(click => {
    counts[click.cta] = (counts[click.cta] || 0) + 1
  })
  return counts
}

// Initialize tracking on all WhatsApp links
export function initWhatsAppTracking() {
  if (typeof document === 'undefined') return

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-cta]')
    if (link && link.href && link.href.includes('wa.me')) {
      const ctaId = link.getAttribute('data-cta')
      trackWhatsAppClick(ctaId, link.textContent.trim())
    }
  })
}
