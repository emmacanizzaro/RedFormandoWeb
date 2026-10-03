import type { MetadataRoute } from 'next';
import { redConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/'];
  return routes.map((route) => ({ url: `${redConfig.siteUrl}${route}`, lastModified: new Date() }));
}
