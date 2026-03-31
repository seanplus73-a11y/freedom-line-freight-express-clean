/// <reference types="vite/client" />

// Google Analytics gtag type declaration
interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js',
    targetId: string | Date,
    config?: {
      event_category?: string;
      event_label?: string;
      [key: string]: any;
    }
  ) => void;
  dataLayer?: any[];
}
