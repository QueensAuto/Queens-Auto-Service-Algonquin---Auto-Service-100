// FIX: Changed 'import type * as React' to 'import * as React'.
// Using a type-only import was preventing React's global JSX namespace from being loaded,
// causing TypeScript to think standard HTML elements were not valid JSX.
// A regular import ensures the base JSX definitions are loaded before our augmentation.
import * as React from 'react';

// FIX: Add global declarations for custom elements and window properties to be available across the project.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // FIX: Add wistia-player type definition for custom element.
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
      };
    }
  }
  interface Window {
    lucide: {
      createIcons: () => void;
    };
    Wistia: any;
    dataLayer: any[];
    confetti: (options: any) => void;
  }
}

export type Language = 'en' | 'es';

export interface TranslationSet {
  [key: string]: string;
}

export interface Translations {
  en: TranslationSet;
  es: TranslationSet;
}

// FIX: Update TFunction type to allow for an optional replacements object.
export type TFunction = (key: string, replacements?: { [key: string]: string }) => string;

export interface Review {
  name: string;
  text: string;
}

export interface FormData {
  'first-name': string;
  'last-name': string;
  email: string;
  'mobile-number': string;
  'vehicle-year': string;
  'vehicle-make': string;
  'vehicle-model': string;
  date: string;
  time: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  ga_client_id?: string;
  gclid?: string;
  fbc?: string;
  fbclid?: string;
  msclkid?: string;
  referrer?: string;
  event_id?: string;
}

export interface FormValidity {
  'first-name': boolean | null;
  'last-name': boolean | null;
  email: boolean | null;
  'mobile-number': boolean | null;
  'vehicle-make': boolean | null;
  'vehicle-model': boolean | null;
}

export interface FaqItem {
  qKey: string;
  aKey: string;
}

export interface BonusItem {
    icon: string;
    titleKey: string;
    descKey: string;
}