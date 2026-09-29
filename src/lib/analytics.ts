/**
 * Analytics abstraction layer.
 * Supports future integration with Google Analytics, GTM, Google Ads.
 * Does not load heavy scripts until needed.
 */

import type { PhoneClickEvent } from "@/types";

// Analytics provider interface for future extensibility
interface AnalyticsProvider {
  trackEvent: (eventName: string, params: Record<string, unknown>) => void;
  trackPageView: (url: string) => void;
}

// Default provider that logs to console in development
const defaultProvider: AnalyticsProvider = {
  trackEvent: (eventName, params) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] ${eventName}`, params);
    }
  },
  trackPageView: (url) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] Page View: ${url}`);
    }
  },
};

// Google Analytics provider (activated when GA_ID is present)
const gaProvider: AnalyticsProvider = {
  trackEvent: (eventName, params) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Record<string, unknown> & { gtag: (...args: unknown[]) => void }).gtag("event", eventName, params);
    }
  },
  trackPageView: (url) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Record<string, unknown> & { gtag: (...args: unknown[]) => void }).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  },
};

function getProvider(): AnalyticsProvider {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    return gaProvider;
  }
  return defaultProvider;
}

/**
 * Track a phone click event with location context.
 */
export function trackPhoneClick(
  location: PhoneClickEvent["location"],
  pageSlug: string
): void {
  const provider = getProvider();
  const event: PhoneClickEvent = {
    location,
    pageSlug,
    timestamp: Date.now(),
  };

  provider.trackEvent("phone_click", {
    ...event,
    event_category: "conversion",
    event_label: `${location}_phone_click`,
  });

  // Also fire specific named events for easier tracking
  provider.trackEvent(`${location}_phone_click`, {
    page_slug: pageSlug,
  });
}

/**
 * Track a general event.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  getProvider().trackEvent(eventName, params);
}

/**
 * Track a page view.
 */
export function trackPageView(url: string): void {
  getProvider().trackPageView(url);
}
