"use client";

import { Camera, Check, Sparkles, MapPin, Plus, Printer } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function Home() {
  const DASHBOARD_URL = "https://app.disqet.com.br";

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
      link: DASHBOARD_URL,
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
      link: DASHBOARD_URL,
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
      link: DASHBOARD_URL,
      swayClass: "animate-sway-left",
    },
  ];

  return (
    <div className="w-full relative min-h-screen">
      {/* ── NAVEGAÇÃO ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md border-b border-border/50 h-16 flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14 flex items-center justify-between">
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
            href={DASHBOARD_URL}
            className="font-mono text-[9px] uppercase tracking-widest text-text border-b border-text pb-0.5 hover:text-brand hover:border-brand transition-colors"
          >
            criar evento →
          </Link>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] pt-24 pb-12 overflow-hidden flex flex-col justify-between">
        {/* Background Big Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic font-black text-[35vw] text-sand/10 pointer-events-none select-none tracking-tighter whitespace-nowrap leading-none z-0">
          disqet
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14 flex-1 flex flex-col justify-between z-10 relative">
          

          {/* Hero Center Content (50/50 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-auto py-4">
            <div>
              <h1 className="font-display italic font-black text-5xl md:text-8xl tracking-tight leading-[0.9] text-text">
                cada <br className="hidden md:block" />
                <span className="pl-0 md:pl-20 text-brand">convidado,</span>
                <br />
                um ângulo.
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-4">
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

              {/* Main Hero CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href={DASHBOARD_URL}
                  className="bg-brand text-cream text-center font-mono text-xs uppercase font-bold tracking-wider rounded-xl px-10 py-4.5 hover:bg-brand-dim transition-all shadow-md active:scale-98"
                >
                  criar meu álbum agora
                </Link>
              </div>
            </div>

            {/* Floating Polaroid Photos Stack (Occupying 100% of the right column space) */}
            <div className="flex gap-6 items-end justify-center md:justify-end w-full">
              <div className="polaroid-card w-[55%] bg-offwhite border border-sand-light p-3 pb-10 shadow-2xl rounded rotate-3 transition-transform hover:rotate-0 duration-300">
                <div className="aspect-[4/3] relative overflow-hidden rounded bg-cream">
                  <img src="/assets/img_1.png" alt="Hero photo 1" className="polaroid-img w-full h-full object-cover" />
                </div>
              </div>
              <div className="polaroid-card w-[40%] bg-offwhite border border-sand-light p-2.5 pb-8 shadow-xl rounded -rotate-3 mb-8 transition-transform hover:rotate-0 duration-300">
                <div className="aspect-square relative overflow-hidden rounded bg-cream">
                  <img src="/assets/img_0.png" alt="Hero photo 2" className="polaroid-img w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Bottom Copy */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4 border-t border-sand-light/30 mt-6">
            <p className="text-sm md:text-base text-text-muted max-w-xl leading-relaxed">
              Reúna fotos tiradas por todos os convidados durante sua festa. Geramos um QR Code exclusivo para sua mesa: eles escaneiam, tiram a foto e revelam instantaneamente na galeria coletiva.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="how" className="py-20 border-b border-sand-light/50 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
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

            {/* Featured Metrics Box */}
            <div className="grid grid-cols-2 gap-4 bg-offwhite border border-sand-light p-6 rounded-xl mt-8">
              <div className="text-center">
                <span className="font-display italic font-black text-3xl text-text">
                  100<span className="text-brand">%</span>
                </span>
                <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-1">sem atrito</p>
              </div>
              <div className="text-center border-l border-sand-light/50">
                <span className="font-display italic font-black text-3xl text-text">
                  0<span className="text-brand">s</span>
                </span>
                <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-1">tempo de download</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href={DASHBOARD_URL}
                className="inline-block bg-brand/10 border border-brand/20 hover:bg-brand/20 text-brand text-center font-mono text-xs uppercase font-bold tracking-wider rounded-xl px-8 py-4 transition-all shadow-sm active:scale-98"
              >
                criar meu álbum →
              </Link>
            </div>
          </div>

          {/* Steps Cards list */}
          <div className="flex flex-col gap-6">
            {[
              {
                num: "01",
                icon: <Plus className="w-5 h-5 text-brand shrink-0" />,
                title: "Crie o álbum",
                desc: "Cadastre as informações da sua festa no dashboard do criador e escolha o seu plano.",
              },
              {
                num: "02",
                icon: <Printer className="w-5 h-5 text-brand shrink-0" />,
                title: "Imprima o QR Code",
                desc: "Coloque o QR Code gerado nas mesas, totens ou projete no telão do evento.",
              },
              {
                num: "03",
                icon: <Camera className="w-5 h-5 text-brand shrink-0" />,
                title: "Convidados enviam fotos",
                desc: "Eles escaneiam o código, tiram fotos com a câmera e revelam na galeria instantaneamente.",
              },
            ].map((step) => (
              <Card key={step.num} className="bg-offwhite/50 border-border/80 p-8 flex gap-6 items-start">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-display italic font-bold text-lg text-brand mt-0.5">{step.num}</span>
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-display italic font-black text-lg text-text mb-1">{step.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCROLLING MARQUEE (Repositioned & Compacted) ── */}
      <div className="w-full border-t border-b border-sand-light/50 bg-offwhite py-2 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex shrink-0 font-display italic text-xs text-stone tracking-wide">
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

      {/* ── GALERIA PREVIEW ── */}
      <section id="gallery" className="py-20 bg-ink text-cream relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14">
          <div className="flex flex-col gap-2 mb-12 max-w-2xl">
            <h2 className="font-display italic font-black text-4xl md:text-6xl text-cream tracking-tight leading-none">
              Um mosaico de <br />
              <span className="text-brand">momentos.</span>
            </h2>
            <p className="font-mono text-[9px] uppercase tracking-widest text-stone leading-relaxed mt-2">
              Galeria integrada ao vivo <span className="text-brand mx-1.5">✦</span> revelada foto a foto
            </p>
          </div>

          {/* Mosaic Grid with gap-6 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

          {/* Gallery Example CTA */}
          <div className="flex justify-center mt-12">
            <a
              href="https://event.disqet.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-brand border-b border-brand pb-0.5 hover:text-cream hover:border-cream transition-colors"
            >
              ver galeria pública →
            </a>
          </div>
        </div>
      </section>

      {/* ── PLANOS / PRICING (VARAL DE POLAROIDS) ── */}
      <section id="pricing" className="py-20 bg-offwhite border-t border-b border-sand-light/50 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14">
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
          <div className="relative w-full max-w-4xl mx-auto hidden md:block">
            {/* Thin Leather Clothesline Wire */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-stone/30 shadow-sm z-0" />
          </div>

          {/* Polaroid Cards hanging on Varal (Desktop Swaying Grid / Mobile swipeable carousel) */}
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory py-6 px-2 max-w-5xl mx-auto select-none md:mt-[-12px]">
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
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="py-28 bg-ink text-cream text-center relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14 flex flex-col items-center">
          {/* Top/Bottom ornamental dividers */}
          <div className="absolute top-10 left-6 right-6 md:left-14 md:right-14 flex items-center gap-4">
            <div className="h-[1px] bg-white/5 flex-1" />
            <span className="text-brand text-lg md:text-xl">✦</span>
            <div className="h-[1px] bg-white/5 flex-1" />
          </div>
          <div className="absolute bottom-10 left-6 right-6 md:left-14 md:right-14 flex items-center gap-4">
            <div className="h-[1px] bg-white/5 flex-1" />
            <span className="text-brand text-lg md:text-xl">✦</span>
            <div className="h-[1px] bg-white/5 flex-1" />
          </div>

          <h2 className="font-display italic font-black text-6xl md:text-9xl tracking-tight leading-none text-cream mb-6">
            dis<span className="text-brand">qet</span>
          </h2>
          <p className="text-sm md:text-lg text-cream/40 max-w-sm mx-auto mb-8 leading-relaxed">
            Tire fotos instantâneas espontâneas e eternize momentos. Comece com um álbum grátis em menos de 1 minuto.
          </p>
          
          <div className="flex flex-col items-center gap-3">
            <Link
              href={DASHBOARD_URL}
              className="inline-block bg-cream text-ink font-mono text-xs uppercase font-bold tracking-wider rounded-xl px-14 py-5 hover:bg-brand hover:text-cream transition-all shadow-md active:scale-98"
            >
              criar álbum grátis →
            </Link>
            <span className="font-mono text-[9px] uppercase tracking-widest text-cream/30 mt-1">
              Sem cartão de crédito. Seu álbum em menos de 1 minuto.
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink-soft py-12 border-t border-white/5 text-stone text-xs">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="font-display italic font-black text-2xl text-cream tracking-tight">
              dis<span className="text-brand">qet</span>
            </a>
            <span className="font-mono text-[8px] uppercase tracking-wider text-stone/50">
              Feito com 🤎 por <strong className="text-brand">Disqet</strong>
            </span>
          </div>
          
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

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-brand transition-colors p-2 bg-ink/30 rounded-full" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-brand transition-colors p-2 bg-ink/30 rounded-full" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
