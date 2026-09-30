export type SocialLink = {
  label: string;
  href: string;
};

export type RedConfig = {
  name: string;
  description: string;
  siteUrl: string;
  socialLinks: SocialLink[];
};

export const redConfig = {
  name: 'REDFORMANDO',
  description: 'Red ministerial enfocada en formación, reforma y activación de líderes.',
  siteUrl: 'https://www.redformando.com',
  socialLinks: [
    { label: 'Instagram', href: 'https://instagram.com/redformando' },
    { label: 'Facebook', href: 'https://facebook.com/redformando' },
    { label: 'YouTube', href: 'https://www.youtube.com/RedFormando' },
  ],
} satisfies RedConfig;
