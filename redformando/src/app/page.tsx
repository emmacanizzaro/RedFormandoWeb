const stats = [
  { value: '10+', label: 'naciones con presencia' },
  { value: '500+', label: 'lideres formados' },
  { value: '4', label: 'pilares de crecimiento' },
  { value: '24/7', label: 'visión de acompañamiento' },
];

const pillars = [
  {
    title: 'Formación',
    text: 'Acompañamos líderes y familias ministeriales con herramientas, enseñanza y discernimiento para caminar con claridad.',
  },
  {
    title: 'Reforma',
    text: 'Impulsamos una iglesia restaurada, con identidad, integridad y sensibilidad espiritual para la realidad actual.',
  },
  {
    title: 'Activación',
    text: 'Desarrollamos vocación, liderazgo y fuerza apostólica para que cada llamado se convierta en acción concreta.',
  },
];

const resources = [
  'Escuelas de ministerio',
  'Entrenamientos apostólicos',
  'Materiales de estudio',
  'Conexión con la familia ministerial',
];

const cities = ['Buenos Aires', 'Córdoba', 'Mendoza', 'España', 'México', 'Venezuela'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-brand-blue">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at top, rgba(26, 119, 111, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(196, 151, 127, 0.2), transparent 30%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pt-14">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-teal/20 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-teal shadow-soft backdrop-blur-sm">
              Formación • Reforma • Activación
            </span>

            <h1 className="max-w-xl font-serif text-5xl leading-[0.9] text-brand-blue md:text-6xl xl:text-7xl">
              Una familia que forma, reforma y activa.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-blue/75">
              Somos una red ministerial comprometida con la formación integral de líderes, la
              restauración del Cuerpo de Cristo y la expansión del Reino con propósito y unidad.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#recursos"
                className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-teal-light"
              >
                Ver recursos
              </a>
              <a
                href="#familia"
                className="inline-flex items-center justify-center rounded-full border border-brand-blue/15 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-blue shadow-soft transition hover:-translate-y-0.5 hover:border-brand-teal/30 hover:text-brand-teal"
              >
                Conocer la familia
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-brand-blue/10 bg-white/70 p-4 shadow-soft backdrop-blur-sm"
                >
                  <p className="font-serif text-3xl text-brand-blue">{item.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-brand-blue/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="hero-visual glass-panel relative w-full max-w-md rounded-4xl p-5">
              <div className="hero-orb absolute -left-6 top-8 h-24 w-24 rounded-full bg-brand-copper/25 blur-2xl" />
              <div className="hero-orb absolute -right-5 bottom-10 h-28 w-28 rounded-full bg-brand-teal/20 blur-2xl" />

              <div className="relative rounded-3xl border border-white/30 bg-white/70 p-5 shadow-soft backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-copper">
                  Visión apostólica
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-none text-brand-blue">
                  Cielo nuevo y tierra nueva.
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-blue/70">
                  Una nueva generación marcada por la presencia, la verdad y la transformación del
                  Reino de Dios en la historia.
                </p>

                <div className="mt-6 space-y-3">
                  {['Liderazgo con identidad', 'Iglesia con unidad', 'Reforma con fruto'].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-brand-blue/10 bg-paper px-3 py-2.5 text-sm font-medium text-brand-blue/80"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-teal/12 text-brand-teal">
                          ✓
                        </span>
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-teal">
            Nosotros
          </p>
          <h2 className="mt-4 font-serif text-4xl text-brand-blue md:text-5xl">
            Una red construida sobre propósito, unidad y visión apostólica.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-4xl border border-brand-blue/10 bg-white/70 p-8 shadow-soft">
            <p className="text-lg leading-8 text-brand-blue/75">
              En un tiempo donde las estructuras cambian y el mundo busca respuestas, una familia
              ministerial decidió formar, enviar y edificar con un propósito eterno. Así nació
              REDFORMANDO: una red de iglesias y obreros unidos por la visión de Cristo, el Reino de
              Dios y la transformación de las naciones.
            </p>
          </div>

          <div className="rounded-4xl border border-brand-blue/10 bg-brand-blue p-8 text-paper shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-copper/80">
              Nuestra identidad
            </p>
            <p className="mt-5 text-lg leading-8 text-paper/80">
              No es solo un nombre; es una casa para quienes han sido llamados a colaborar en la
              reforma que Él está produciendo en su Iglesia.
            </p>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-brand-blue/95 py-20 text-paper">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-copper">
              Nuestra visión
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Tres pilares para formar y movilizar una nueva generación.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/20 text-lg font-bold text-brand-copper">
                  0{pillars.indexOf(pillar) + 1}
                </div>
                <h3 className="text-2xl font-semibold text-paper">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-paper/75">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-teal">
              Recursos
            </p>
            <h2 className="mt-4 font-serif text-4xl text-brand-blue md:text-5xl">
              Herramientas para crecer en fe, identidad y ministerio.
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-sm font-semibold text-brand-teal transition hover:text-brand-blue"
          >
            Hablar con la red →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((resource, index) => (
            <article
              key={resource}
              className="card-resource rounded-[1.75rem] border border-brand-blue/10 bg-white/80 p-6 shadow-soft"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-copper/15 text-brand-blue">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-brand-blue">{resource}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-blue/70">
                Materiales, formación y acompañamiento para que cada llamado se convierta en fruto
                sostenido.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="familia" className="bg-[#f3efe9] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-teal">
              Familia ministerial
            </p>
            <h2 className="mt-4 font-serif text-4xl text-brand-blue md:text-5xl">
              Una red viva que se extiende con fuerza y propósito.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-4xl border border-brand-blue/10 bg-white/80 p-7 shadow-soft">
              <p className="text-lg leading-8 text-brand-blue/75">
                Desde Argentina hasta distintas naciones, REDFORMANDO ha sembrado en tierra fértil,
                levantando comunidades, familias restauradas y una nueva generación activada para el
                Reino.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="rounded-3xl border border-brand-blue/10 bg-brand-blue px-4 py-6 text-center text-paper shadow-soft"
                >
                  <span className="block font-serif text-2xl">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-4xl bg-linear-to-r from-brand-blue via-brand-blue-light to-brand-teal p-8 text-paper shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-copper">
                Contacto
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl md:text-5xl">
                Sumate a la visión de una iglesia en reforma y avance.
              </h2>
            </div>

            <a
              href="mailto:contacto@redformando.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:-translate-y-0.5 hover:bg-paper"
            >
              contacto@redformando.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
