'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Recursos', href: '/#recursos' },
  { label: 'Familia', href: '/#familia' },
  { label: 'Contacto', href: '/#contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue/10 bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-paper shadow-soft">
            RF
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
              REDFORMANDO
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                isActiveLink(item.href)
                  ? 'text-sm font-semibold text-brand-teal'
                  : 'text-sm font-medium text-brand-blue/75 transition hover:text-brand-teal'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-brand-blue-light"
          >
            Contacto
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/10 bg-white text-brand-blue shadow-soft md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-brand-blue/30" onClick={() => setIsOpen(false)} />
          <div
            className="fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-sm flex-col gap-6 border-l border-brand-blue/10 bg-paper p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-teal">
                Menú
              </p>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/10 bg-white text-brand-blue"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-3" aria-label="Menú móvil">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    isActiveLink(item.href)
                      ? 'rounded-2xl bg-brand-teal/10 px-4 py-3 text-base font-semibold text-brand-teal'
                      : 'rounded-2xl border border-brand-blue/10 px-4 py-3 text-base font-medium text-brand-blue/80'
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-auto inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-paper"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
