// types.ts

export type Language = 'en' | 'es';

export type TFunction = (key: string, replacements?: { [key: string]: string }) => string;

export type Review = {
  name: string;
  text: string;
};

export type FormData = {
  [key: string]: string;
};

export type FormValidity = {
  [key: string]: boolean | null;
};

declare global {
  interface Window {
    lucide: {
      createIcons: () => void;
    };
    Wistia: {
      api: (id: string) => {
          pause: () => void;
      } | undefined;
    };
    confetti: (options?: any) => void;
    dataLayer: any[];
  }
}
