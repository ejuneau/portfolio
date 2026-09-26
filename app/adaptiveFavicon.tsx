import { useEffect } from 'react';

const ICONS = [
  { rel: 'icon', type: 'image/x-icon', hrefTemplate: '/favicon-{theme}.ico' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', hrefTemplate: '/favicon-{theme}-32x32.png' },
  { rel: 'apple-touch-icon', sizes: '180x180', hrefTemplate: '/apple-touch-icon-{theme}.png' },
];

function applyFavicons(theme) {
  ICONS.forEach(({ rel, type, sizes, hrefTemplate }) => {
    const selector = sizes
      ? `link[rel='${rel}'][sizes='${sizes}']`
      : `link[rel='${rel}']:not([sizes])`;

    document.querySelectorAll(selector).forEach((el) => el.remove());

    const link = document.createElement('link');
    link.rel = rel;
    if (type) link.type = type;
    if (sizes) link.sizes = sizes;
    link.href = hrefTemplate.replace('{theme}', theme);
    document.head.appendChild(link);
  });
}

function preloadFavicons() {
  ['light', 'dark'].forEach((theme) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = `/favicon-${theme}.ico`;
    document.head.appendChild(link);
  });
}

export default function AdaptiveFavicon() {
  useEffect(() => {
    preloadFavicons();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = mediaQuery.matches ? 'dark' : 'light';
    applyFavicons(theme);

    const handleChange = (e) => applyFavicons(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return null;
}