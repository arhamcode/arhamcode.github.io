import { persistentMap } from '@nanostores/persistent';

export type Theme = 'light' | 'dark';

export const themeStore = persistentMap<Record<string, Theme>>('theme:', {
  mode: 'dark'
});

export function toggleTheme() {
  const current = themeStore.get().mode;
  themeStore.setKey('mode', current === 'light' ? 'dark' : 'light');
}

export function getTheme(): Theme {
  return themeStore.get().mode;
}