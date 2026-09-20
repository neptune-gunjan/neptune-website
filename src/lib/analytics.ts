/**
 * Neptune Consulting Services - Analytics & Conversion Tracking
 * Section 14 Developer Specification
 * Supports Google Analytics (gtag), Google Search Console, and local event telemetry
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface AnalyticsEvent {
  event: string;
  timestamp: string;
  [key: string]: unknown;
}

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];

  public track(eventName: string, params: Record<string, unknown> = {}) {
    const payload: AnalyticsEvent = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    };

    this.events.push(payload);

    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
      }
      window.dispatchEvent(new CustomEvent("neptune:analytics", { detail: payload }));
      console.log(`[Neptune Analytics] Tracked: ${eventName}`, params);
    }
  }

  public trackContactSubmission(data: {
    service: string;
    timeline: string;
    company?: string;
  }) {
    this.track("contact_form_submission", {
      serviceInterest: data.service,
      timeline: data.timeline,
      hasCompany: Boolean(data.company),
    });
  }

  public trackCtaClick(ctaName: string, location: string) {
    this.track("cta_click", {
      cta_name: ctaName,
      cta_location: location,
    });
  }

  public trackCaseStudyView(caseStudyId: string, caseStudyName: string) {
    this.track("case_study_view", {
      case_study_id: caseStudyId,
      case_study_name: caseStudyName,
    });
  }

  public trackSolutionView(solutionId: string) {
    this.track("solution_view", {
      solution_id: solutionId,
    });
  }
}

export const analytics = new AnalyticsManager();

