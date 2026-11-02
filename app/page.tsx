import Image from "next/image";
import {
  profile,
  tools,
  projects,
  experience,
  education,
  certifications,
  contact,
  type TimelineItem,
} from "@/lib/data";

const nav = [
  ["Home", "#home"],
  ["Tools", "#tools"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const card = "rounded-3xl border border-line bg-surface backdrop-blur-sm";
const tagCls =
  "rounded-full border border-line px-3.5 py-1.5 text-sm text-accent transition hover:border-accent hover:bg-accent hover:text-bg";
const hoverCard =
  "transition duration-300 hover:border-accent/60 hover:bg-white/10 hover:shadow-xl hover:shadow-black/30 motion-safe:hover:-translate-y-1.5";
const btn =
  "rounded-2xl px-8 py-4 text-base font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-20 md:py-32">
      <h2 className="mb-14 text-4xl font-bold md:text-5xl">{title}</h2>
      {children}
    </section>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col gap-12 border-l-2 border-line pl-8 md:pl-10">
      {items.map((it, i) => (
        <li key={i} className="flex flex-col gap-2">
          <span className="text-base text-accent">{it.period}</span>
          <h3 className="text-2xl font-semibold">{it.title}</h3>
          <span className="text-base">{it.org}</span>
          {it.desc && (
            <p className="max-w-3xl text-base leading-relaxed text-muted">{it.desc}</p>
          )}
          {it.points && (
            <ul className="mt-2 flex max-w-3xl list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-muted marker:text-accent">
              {it.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Page() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-black/30 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-20">
          <a href="#home" className="font-display text-2xl font-bold">
            {profile.shortName}
            <span className="text-accent">.</span>
          </a>
          <ul className="flex gap-6 overflow-x-auto text-base md:gap-10">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-muted transition hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex max-w-7xl scroll-mt-24 flex-col-reverse items-center gap-14 px-6 py-24 md:flex-row md:gap-20 md:px-20 md:py-36"
        >
          <div className="flex flex-1 flex-col items-start gap-6">
            {profile.available && (
              <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-base font-semibold text-emerald-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Available for Opportunities
              </span>
            )}
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Hi, I&apos;m <span className="text-accent">{profile.name}</span>.
            </h1>
            <p className="font-display text-2xl font-medium leading-snug md:text-4xl">
              {profile.headline}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">{profile.about}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a href="#projects" className={`${btn} bg-accent text-bg hover:opacity-90`}>
                View My Projects <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className={`${btn} border border-line hover:bg-surface`}>
                Get in Touch
              </a>
              <a href={profile.cv} download className="px-2 text-base text-muted underline-offset-4 transition hover:text-accent hover:underline">
                Download CV
              </a>
            </div>
          </div>
          <Image
            src={profile.photo}
            alt={`Photo of ${profile.name}`}
            width={460}
            height={575}
            priority
            className="aspect-[4/5] w-full max-w-md rounded-[2rem] border border-line bg-surface object-cover"
          />
        </section>

        <Section id="tools" title="Skills & Technologies">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <div key={t.group} className={`${card} ${hoverCard} flex flex-col gap-4 p-8`}>
                <h3 className="text-xl font-semibold">{t.group}</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {t.items.map((i) => (
                    <li key={i} className={tagCls}>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className={`${card} ${hoverCard} group flex flex-col overflow-hidden`}>
                {p.image && (
                  <div className="relative aspect-video w-full bg-black/30">
                    <Image
                      src={p.image}
                      alt={`Preview of ${p.title}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
                  <p className="text-base leading-relaxed text-muted">{p.desc}</p>
                  <ul className="flex flex-wrap gap-2.5">
                    {p.stack.map((s) => (
                      <li key={s} className={tagCls}>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex gap-6 pt-2 text-base">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Demo
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Timeline items={experience} />
        </Section>

        <Section id="education" title="Education">
          <Timeline items={education} />
          <h3 className="mb-5 mt-16 text-2xl font-semibold">Training &amp; Certifications</h3>
          <ul className="flex max-w-3xl list-disc flex-col gap-3 pl-5 text-base text-muted marker:text-accent">
            {certifications.map((c) => (
              <li key={c.title}>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {c.title}
                  </a>
                ) : (
                  c.title
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
            Interested in working together or have an opening that fits? Send me a message and I will get back to you as soon as I can.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${contact.email}`} className={`${btn} bg-accent text-bg hover:opacity-90`}>
              Send an email
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border border-line hover:bg-surface`}>
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className={`${btn} border border-line hover:bg-surface`}>
              GitHub
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-10 text-center text-base text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}