import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { redConfig } from '@/lib/config';

const footerLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Recursos', href: '/#recursos' },
  { label: 'Familia', href: '/#familia' },
];

const socialIcons = {
  Instagram,
  Facebook,
  YouTube: Youtube,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-brand-blue/10 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-paper shadow-soft">
              RF
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
                REDFORMANDO
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-base leading-7 text-brand-blue/70">
            Red ministerial dedicada a la formación, la reforma y la activación de líderes para el
            Reino de Dios.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
            Navegación
          </h3>
          <ul className="mt-5 space-y-3 text-brand-blue/75">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-brand-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue/70">
            Contacto
          </h3>
          <div className="mt-5 space-y-3 text-brand-blue/75">
            <a
              href="mailto:contacto@redformando.com"
              className="block transition hover:text-brand-teal"
            >
              contacto@redformando.com
            </a>
            <p>Familia ministerial | Argentina</p>
          </div>

          <div className="mt-5 flex items-center gap-3">
            {redConfig.socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Instagram;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/10 bg-white text-brand-blue transition hover:-translate-y-0.5 hover:border-brand-teal/20 hover:text-brand-teal"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-blue/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-brand-blue/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 REDFORMANDO</p>
          <p>Formación • Reforma • Activación</p>
        </div>
      </div>
    </footer>
  );
}
