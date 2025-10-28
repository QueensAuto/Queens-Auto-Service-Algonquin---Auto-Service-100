// FIX: Changed 'import * as React' back to 'import type * as React'.
// The previous "fix" of using a regular import seems to have caused issues by overriding the global 
// JSX namespace instead of augmenting it. Using 'import type' ensures this file only provides 
// type information and allows the .tsx files to correctly load the base JSX definitions.
import type * as React from 'react';

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