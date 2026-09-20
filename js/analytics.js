/**
 * Neptune Consulting Services - Analytics & Conversion Tracking
 * Section 14 Developer Specification
 * Supports Google Analytics (gtag), Google Search Console, and local event telemetry
 */

const NeptuneAnalytics = {
  init() {
    // Check if gtag is loaded on window
    this.hasGtag = typeof window.gtag === 'function';
    this.events = [];
    console.log('[Neptune Analytics] Initialized tracking module.');
    this.bindGlobalTrackers();
  },

  track(eventName, params = {}) {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params
    };

    this.events.push(payload);

    // If GA4 gtag is present, forward event
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // Custom telemetry dispatch for integration
    window.dispatchEvent(new CustomEvent('neptune:analytics', { detail: payload }));
    console.log(`[Neptune Analytics] Tracked: ${eventName}`, params);
  },

  // Specific trackers mandated by spec:
  trackContactSubmission(data) {
    this.track('contact_form_submission', {
      serviceInterest: data.service,
      timeline: data.timeline,
      hasCompany: Boolean(data.company)
    });
  },

  trackCtaClick(ctaName, location) {
    this.track('cta_click', {
      cta_name: ctaName,
      cta_location: location
    });
  },

  trackCaseStudyView(caseStudyId, caseStudyName) {
    this.track('case_study_view', {
      case_study_id: caseStudyId,
      case_study_name: caseStudyName
    });
  },

  trackSolutionView(solutionId) {
    this.track('solution_view', {
      solution_id: solutionId
    });
  },

  bindGlobalTrackers() {
    document.addEventListener('click', (e) => {
      const ctaBtn = e.target.closest('[data-cta]');
      if (ctaBtn) {
        const ctaName = ctaBtn.getAttribute('data-cta') || ctaBtn.textContent.trim();
        const location = ctaBtn.getAttribute('data-location') || 'page';
        this.trackCtaClick(ctaName, location);
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  NeptuneAnalytics.init();
});

