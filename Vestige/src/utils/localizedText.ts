import type { LocalizedText } from '../i18n/types';

type Text = string | LocalizedText | undefined | null;

const pick = (value: Text, lang: 'en' | 'ar' = 'en'): string => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[lang] ?? value.en ?? '';
};

/** First four-digit year (Latin or Arabic-Indic digits) found in the text. */
export function yearOf(value: Text, fallback = ''): string {
  const raw = pick(value, 'en') || pick(value, 'ar');
  const normalized = raw.replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
  const match = normalized.match(/\d{4}/);
  return match ? match[0] : fallback;
}

/** Start of an "A — B" style span (text before the first dash). */
export function spanStart(value: Text, lang: 'en' | 'ar' = 'en'): string {
  const raw = pick(value, lang);
  return raw.split(/\s*[—–-]\s*/)[0].trim();
}
