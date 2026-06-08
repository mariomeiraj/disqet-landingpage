"use client";

import { Camera, Check, Sparkles, MapPin } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function Home() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3000";

  const PLANS = [
    {
      name: "Free",
      price: "R$ 0",
      description: "Ideal para testar",
      guests: "Até 10 Convidados",
      photos: "5 fotos por convidado",
      total: "50 fotos no total",
      duration: "30 dias de galeria",
      features: ["QR Code para download", "Upload direto do celular", "Galeria em tempo real"],
      color: "bg-surface text-text border-border",
      badge: "Gratuito",
      btnText: "Iniciar Teste",
      link: `${DASHBOARD_URL}/login`,
      swayClass: "animate-sway-left",
    },
    {
      name: "Amigos",
      price: "R$ 59,90",
      description: "Perfeito para encontros",
      guests: "Convidados ilimitados",
      photos: "Fotos ilimitadas por convidado",
      total: "Até 1000 fotos",
      duration: "90 dias de galeria",
      features: [
        "Download completo do álbum ao final do evento",
        "Upload de alta qualidade",
        "Sem anúncios na galeria",
      ],
      color: "bg-offwhite text-text border-brand/40",
      badge: "Popular",
      btnText: "Adquirir Plano",
      link: `${DASHBOARD_URL}/login`,
      swayClass: "animate-sway-right",
    },
    {
      name: "Festa",
      price: "R$ 99,90",
      description: "Completo para grandes festas",
      guests: "Convidados ilimitados",
      photos: "Fotos ilimitadas por convidado",
      total: "Até 5000 fotos",
      duration: "Álbum ativo por 1 ano",
      features: [
        "Detecção de faces e resumos visuais com Google Vision AI",
        "Configurações especiais",
        "Download do álbum ao final do evento",
        "Estender tempo de galeria",
        "Upload de alta qualidade",
      ],
      color: "bg-ink text-cream border-ink-soft",
      badge: "Premium",
      btnText: "Adquirir Plano",
      link: `${DASHBOARD_URL}/login`,
      swayClass: "animate-sway-left",
    },
  ];

  return (
    <div className="w-full relative min-h-screen">
      {/* ── NAVEGAÇÃO ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md border-b border-border/50 px-6 md:px-14 h-16 flex items-center justify-between">
        <a href="#" className="font-display italic font-black text-2xl tracking-tight">
          dis<span className="text-brand">qet</span>
        </a>
        <ul className="hidden md:flex gap-10 list-none font-mono text-[9px] uppercase tracking-widest text-text-muted">
          <li>
            <a href="#how" className="hover:text-text transition-colors">
              Como funciona
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-text transition-colors">
              Galeria
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-text transition-colors">
              Planos
            </a>
          </li>
        </ul>
        <Link
          href={`${DASHBOARD_URL}/login`}
          className="font-mono text-[9px] uppercase tracking-widest text-text border-b border-text pb-0.5 hover:text-brand hover:border-brand transition-colors"
        >
          criar evento →
        </Link>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[95vh] pt-24 pb-12 px-6 md:px-14 flex flex-col justify-between overflow-hidden">
        {/* Background Big Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic font-black text-[35vw] text-sand/10 pointer-events-none select-none tracking-tighter whitespace-nowrap leading-none z-0">
          disqet
        </div>

        {/* Hero Top Meta */}
        <div className="hidden md:flex justify-between items-start font-mono text-[9px] uppercase tracking-widest text-text-muted z-10">
          <div>
            álbum coletivo
            <br />
            para eventos
          </div>
          <div className="text-right">
            sem app
            <br />
            sem cadastro
            <br />
            sem complicação
          </div>
        </div>

        {/* Hero Center Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center z-10 my-auto">
          <div>
            <h1 className="font-display italic font-black text-5xl md:text-8xl tracking-tight leading-[0.9] text-text">
              cada <br className="hidden md:block" />
              <span className="pl-0 md:pl-20 text-brand">convidado,</span>
              <br />
              um ângulo.
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 bg-ink text-cream px-4 py-1.5 rounded-full font-body text-xs font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                Sem downloads
              </span>
              <span className="inline-flex items-center gap-1.5 bg-ink text-cream px-4 py-1.5 rounded-full font-body text-xs font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                Sem cadastro
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                scan & shoot
              </span>
            </div>
          </div>

          {/* Floating Polaroid Photos Stack */}
          <div className="flex gap-4 items-end shrink-0 justify-center md:justify-start">
            <div className="polaroid-card w-36 md:w-44 bg-offwhite border border-sand-light p-2.5 pb-8 shadow-xl rounded rotate-3 transition-transform hover:rotate-0 duration-300">
              <div className="aspect-[4/3] relative overflow-hidden rounded bg-cream">
                <img src="/assets/img_1.png" alt="Hero photo 1" className="polaroid-img w-full h-full object-cover" />
              </div>
            </div>
            <div className="polaroid-card w-28 md:w-32 bg-offwhite border border-sand-light p-2 pb-6 shadow-lg rounded -rotate-3 mb-6 transition-transform hover:rotate-0 duration-300">
              <div className="aspect-square relative overflow-hidden rounded bg-cream">
                <img src="/assets/img_0.png" alt="Hero photo 2" className="polaroid-img w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Meta */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10">
          <p className="text-sm md:text-base text-text-muted max-w-sm leading-relaxed">
            Reúna fotos tiradas por todos os convidados durante sua festa. Geramos um QR Code exclusivo para sua mesa: eles escaneiam, tiram a foto e revelam instantaneamente na galeria coletiva.
          </p>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Link
              href={`${DASHBOARD_URL}/login`}
              className="bg-brand text-cream text-center font-mono text-xs uppercase font-bold tracking-wider rounded-xl px-8 py-4 hover:bg-brand-dim transition-all shadow-md active:scale-98"
            >
              criar meu álbum agora
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCROLLING MARQUEE ── */}
      <div className="w-full border-t border-b border-sand-light/50 bg-offwhite py-4 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex shrink-0 font-display italic text-sm text-stone tracking-wide">
                <span className="px-8 flex items-center gap-3">
                  CADA CONVIDADO UM ÂNGULO <span className="text-brand not-italic">✦</span>
                </span>
                <span className="px-8 flex items-center gap-3">
                  GALERIA AO VIVO EM TEMPO REAL <span className="text-brand not-italic">✦</span>
                </span>
                <span className="px-8 flex items-center gap-3">
                  SEM DOWLOAD DE APP <span className="text-brand not-italic">✦</span>
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* ── COMO FUNCIONA ── */}
      <section id="how" className="py-20 px-6 md:px-14 border-b border-sand-light/50 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        <div className="absolute top-8 right-8 font-display italic font-black text-9xl text-sand-light/25 pointer-events-none select-none">
          how
        </div>
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-brand mb-4">
            <span className="w-4 h-[1px] bg-brand" /> passo a passo
          </span>
          <h2 className="font-display italic font-black text-4xl text-text leading-tight mb-4">
            Fotografar de forma colaborativa nunca foi tão físico.
          </h2>
          <p className="text-sm text-text-muted max-w-sm leading-relaxed mb-6">
            Esqueça grupos de WhatsApp ou links de drive vazios. Estimule a espontaneidade de seus amigos com álbuns físicos virtuais.
          </p>

          <div className="flex gap-8 border-t border-border pt-6 mt-8">
            <div>
              <span className="font-display italic font-black text-2xl text-text">
                100<span className="text-brand">%</span>
              </span>
              <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-1">sem atrito</p>
            </div>
            <div>
              <span className="font-display italic font-black text-2xl text-text">
                0<span className="text-brand">s</span>
              </span>
              <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-1">tempo de download</p>
            </div>
          </div>
        </div>

        {/* Steps Cards list */}
        <div className="flex flex-col gap-6">
          {[
            {
              num: "01",
              title: "Crie o álbum",
              desc: "Cadastre as informações da sua festa no dashboard do criador e escolha o seu plano.",
            },
            {
              num: "02",
              title: "Imprima o QR Code",
              desc: "Coloque o QR Code gerado nas mesas, totens ou projete no telão do evento.",
            },
            {
              num: "03",
              title: "Convidados enviam fotos",
              desc: "Eles escaneiam o código, tiram fotos com a câmera e revelam na galeria instantaneamente.",
            },
          ].map((step) => (
            <Card key={step.num} className="bg-offwhite/50 border-border/80 p-6 flex gap-6 items-start">
              <span className="font-display italic font-bold text-lg text-brand mt-0.5">{step.num}</span>
              <div>
                <h4 className="font-display italic font-black text-lg text-text mb-1">{step.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── GALERIA PREVIEW ── */}
      <section id="gallery" className="py-20 px-6 md:px-14 bg-ink text-cream relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2 className="font-display italic font-black text-4xl md:text-6xl text-cream tracking-tight leading-none">
            Um mosaico de <br />
            <span className="text-brand">momentos.</span>
          </h2>
          <p className="font-mono text-[9px] uppercase tracking-widest text-stone text-left md:text-right leading-relaxed">
            Galeria integrada ao vivo <br />
            revelada foto a foto
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: "/assets/img_2.png", label: "Mesa 4 · Lucas" },
            { img: "/assets/img_3.png", label: "Pista · Marina" },
            { img: "/assets/img_4.png", label: "Brinde · Pedro" },
            { img: "/assets/img_5.png", label: "Entrada · Carol" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5 bg-ink-soft/40 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover filter sepia-[0.35] group-hover:sepia-0 group-hover:scale-105 transition-all duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-black/50 text-[8px] font-mono uppercase tracking-wider text-cream/80 px-2 py-1 rounded backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLANOS / PRICING (VARAL DE POLAROIDS) ── */}
      <section id="pricing" className="py-20 px-6 md:px-14 bg-offwhite border-t border-b border-sand-light/50 relative">
        <div className="text-center max-w-lg mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 bg-brand/10 border border-brand/20 rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-brand mb-4">
            Planos sem mensalidade
          </span>
          <h2 className="font-display italic font-black text-4xl text-text leading-tight mb-2">
            Varal de Planos
          </h2>
          <p className="text-xs text-text-muted">
            Pague uma vez por evento. Sem mensalidades, sem custos recorrentes ocultos.
          </p>
        </div>

        {/* The Clothesline / Varal visual hook */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 hidden md:block">
          {/* Thin Leather Clothesline Wire */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-stone/30 shadow-sm z-0" />
          {/* Wire hooks details */}
          <div className="absolute top-[-2px] left-[10%] w-2 h-2 rounded-full bg-stone" />
          <div className="absolute top-[-2px] right-[10%] w-2 h-2 rounded-full bg-stone" />
        </div>

        {/* Polaroid Cards hanging on Varal (Desktop Swaying Grid / Mobile swipeable carousel) */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory py-6 px-2 max-w-5xl mx-auto select-none">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`snap-center shrink-0 w-[280px] md:w-auto p-4 pb-8 border shadow-lg rounded-sm transition-all duration-300 relative flex flex-col justify-between ${
                plan.swayClass
              } ${plan.color} hover:rotate-0 hover:scale-[1.03] hover:shadow-2xl z-10`}
            >
              {/* Wooden Peg / Pregador detail (Only desktop visual varal) */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-6 bg-[#d2b48c] border border-stone/30 rounded-t-sm shadow-sm hidden md:block z-20">
                <div className="w-[1px] h-3 bg-stone/50 mx-auto mt-1" />
              </div>

              <div>
                <div className="flex justify-between items-start mb-4 border-b border-border/40 pb-2">
                  <div>
                    <h3 className="font-display italic font-black text-2xl leading-none">{plan.name}</h3>
                    <p className="text-[9px] font-mono uppercase tracking-wider text-text-muted mt-1">
                      {plan.description}
                    </p>
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-widest bg-brand/10 border border-brand/20 px-2 py-0.5 rounded text-brand">
                    {plan.badge}
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-display italic font-black">{plan.price}</span>
                  <span className="text-[9px] font-mono uppercase text-text-muted ml-1">/ Único</span>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 text-xs font-semibold">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {plan.guests}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {plan.photos}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {plan.total}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {plan.duration}
                  </li>
                  {plan.maxEvents && (
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      {plan.maxEvents}
                    </li>
                  )}

                  <div className="h-px bg-border/40 my-1.5" />

                  {plan.features.map((feat) => (
                    <li key={feat} className="text-[11px] font-normal text-text-muted flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.link}
                className="w-full bg-brand text-cream text-center font-mono text-[10px] uppercase font-bold tracking-wider rounded py-3.5 hover:bg-brand-dim transition-colors mt-auto block shadow-sm"
              >
                {plan.btnText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="py-24 px-6 md:px-14 bg-ink text-cream text-center relative overflow-hidden">
        {/* Top/Bottom ornamental dividers */}
        <div className="absolute top-10 left-6 right-6 md:left-14 md:right-14 flex items-center gap-4">
          <div className="h-[1px] bg-white/5 flex-1" />
          <span className="text-brand text-xs">✦</span>
          <div className="h-[1px] bg-white/5 flex-1" />
        </div>
        <div className="absolute bottom-10 left-6 right-6 md:left-14 md:right-14 flex items-center gap-4">
          <div className="h-[1px] bg-white/5 flex-1" />
          <span className="text-brand text-xs">✦</span>
          <div className="h-[1px] bg-white/5 flex-1" />
        </div>

        <h2 className="font-display italic font-black text-5xl md:text-8xl tracking-tight leading-none text-cream mb-4">
          dis<span className="text-brand">qet</span>
        </h2>
        <p className="text-sm md:text-lg text-cream/40 max-w-sm mx-auto mb-8 leading-relaxed">
          Tire fotos instantâneas espontâneas e eternize momentos. Comece com um álbum grátis em menos de 1 minuto.
        </p>
        <Link
          href={`${DASHBOARD_URL}/login`}
          className="inline-block bg-cream text-ink font-mono text-xs uppercase font-bold tracking-wider rounded-xl px-10 py-4.5 hover:bg-brand hover:text-cream transition-all shadow-md"
        >
          criar álbum grátis →
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink-soft py-8 px-6 md:px-14 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 text-stone text-xs">
        <a href="#" className="font-display italic font-black text-lg text-cream tracking-tight">
          dis<span className="text-brand">qet</span>
        </a>
        <ul className="flex gap-6 list-none font-mono text-[9px] uppercase tracking-wider">
          <li>
            <a href="#how" className="hover:text-cream transition-colors">
              Como funciona
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-cream transition-colors">
              Planos
            </a>
          </li>
          <li>
            <Link href="/termos" className="hover:text-cream transition-colors">
              Termos & Privacidade
            </Link>
          </li>
        </ul>
        <span className="font-mono text-[8px] uppercase tracking-wider">
          Feito com 🤎 por <strong className="text-brand">Disqet</strong>
        </span>
      </footer>
    </div>
  );
}
