import type { MetadataRoute } from 'next';
import { redConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/familia', '/blog', '/recursos-libros', '/entrenamiento'];
  return routes.map((route) => ({ url: `${redConfig.siteUrl}${route}`, lastModified: new Date() }));
}
