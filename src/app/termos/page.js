"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Shield, 
  CheckCircle2, 
  Lock, 
  Eye, 
  Sparkles, 
  Database, 
  Image as ImageIcon, 
  Share2, 
  Trash2, 
  Cookie, 
  Mail
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-[#1C1710] text-[#F2EDE4] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="self-start flex items-center gap-2 text-[#F2EDE4]/60 hover:text-[#F2EDE4] text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#C4853A]" />
          Voltar para Home
        </Link>

        {/* Header Section */}
        <div className="flex flex-col gap-3">
          <span className="bg-[#C4853A]/10 border border-[#C4853A]/20 rounded-md px-2.5 py-1 text-[#C4853A] font-mono text-[9px] uppercase font-bold tracking-widest w-fit">
            DOCUMENTOS LEGAIS
          </span>
          <h1 className="font-display italic font-black text-3xl md:text-5xl text-white leading-tight">
            Termos de Uso & Política de Privacidade
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-[#F2EDE4]/25 py-4.5 mt-4">
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[8px] uppercase tracking-wider text-[#F2EDE4]/50">Versão</span>
              <span className="text-xs text-[#F2EDE4]">2.0</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[8px] uppercase tracking-wider text-[#F2EDE4]/50">Vigente desde</span>
              <span className="text-xs text-[#F2EDE4]">08 de Junho de 2026</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[8px] uppercase tracking-wider text-[#F2EDE4]/50">Última atualização</span>
              <span className="text-xs text-[#F2EDE4]">08 de Junho de 2026</span>
            </div>
          </div>
        </div>

        {/* Navigable Index */}
        <nav className="bg-[#2a221a] border border-[#F2EDE4]/25 rounded-2xl p-6 shadow-md">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#C4853A] font-bold block mb-4 border-b border-[#F2EDE4]/25 pb-2">
            ÍNDICE NAVEGÁVEL
          </span>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {[
              { num: "01", name: "O que é o Disqet", href: "#secao-01" },
              { num: "02", name: "Dados que coletamos", href: "#secao-02" },
              { num: "03", name: "Como usamos seus dados", href: "#secao-03" },
              { num: "04", name: "Mídias enviadas", href: "#secao-04" },
              { num: "05", name: "Uso de mídias para promoção", href: "#secao-05" },
              { num: "06", name: "Compartilhamento de dados", href: "#secao-06" },
              { num: "07", name: "Retenção e exclusão", href: "#secao-07" },
              { num: "08", name: "Seus direitos (LGPD)", href: "#secao-08" },
              { num: "09", name: "Cookies e rastreamento", href: "#secao-09" },
              { num: "10", name: "Contato e DPO", href: "#secao-10" },
            ].map((item) => (
              <li key={item.num}>
                <a
                  href={item.href}
                  className="flex items-baseline gap-2.5 text-sm text-[#F2EDE4]/50 hover:text-white transition-colors duration-200"
                >
                  <span className="font-mono text-xs text-[#C4853A] font-bold">{item.num}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 10 Sections Content */}
        <main className="flex flex-col gap-14 border-t border-[#F2EDE4]/25 pt-10 mt-2">
          
          {/* Section 01 */}
          <section id="secao-01" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">01</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                O que é o Disqet
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              O <strong>Disqet</strong> é uma plataforma de álbuns colaborativos para eventos. Criadores geram um álbum acessível por QR Code; convidados enviam fotos e vídeos sem criar conta. Ao usar a plataforma, o usuário concorda com estes termos em conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong>.
            </p>
          </section>

          {/* Section 02 */}
          <section id="secao-02" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">02</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Dados que coletamos
              </h2>
            </div>
            
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#C4853A] mt-2 block font-bold">
              De criadores de eventos:
            </span>
            <ul className="flex flex-col gap-2 max-w-[680px]">
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>E-mail</strong>: coletado para fins de autenticação via OTP (código de acesso de uso único).
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>Dados do evento</strong>: nome do evento, data, local e mensagem de boas-vindas do álbum.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold pb-2">
                <strong>Dados de pagamento</strong>: processados por parceiros integrados. <strong>Não armazenamos cartões de crédito</strong> em nossos servidores.
              </li>
            </ul>

            <span className="font-mono text-[9px] uppercase tracking-wider text-[#C4853A] mt-4 block font-bold">
              De convidados:
            </span>
            <ul className="flex flex-col gap-2 max-w-[680px]">
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>Nome ou apelido</strong>: informado de forma voluntária ao entrar na galeria.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>Identificador de dispositivo (fingerprint)</strong>: coletado para controle de acessos, cotas e limites de uploads. Nenhuma informação pessoal identificável é extraída do dispositivo.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>Fotos e vídeos</strong>: mídias enviadas ativamente pelo participante para o álbum.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold pb-2">
                <strong>Endereço IP e logs de acesso</strong>: coletados automaticamente para diagnósticos de rede e proteção de servidores.
              </li>
            </ul>
          </section>

          {/* Section 03 */}
          <section id="secao-03" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">03</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Como usamos seus dados
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Tratamos os dados recebidos unicamente para as seguintes finalidades legítimas:
            </p>
            <ul className="flex flex-col gap-2 max-w-[680px]">
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                Autenticação de criadores e controle de acesso ao painel do evento.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                Identificação de autoria das mídias enviadas para a galeria.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                Hospedagem e exibição das fotos e vídeos na galeria privada ou pública.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                Segurança cibernética, mitigação de abusos de upload e prevenção a fraudes de rede.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold pb-2">
                Comunicações essenciais e melhoria de desempenho operacional através de dados estatísticos agregados.
              </li>
            </ul>
            <div className="bg-[#C4853A]/15 border-l-3 border-[#C4853A] rounded-r-lg p-5 max-w-[680px] text-xs text-[#F2EDE4] leading-relaxed mt-2">
              <strong>Base Legal:</strong> O tratamento de dados é fundamentado no <strong>consentimento explícito</strong> do titular (Art. 7º, I da LGPD) e no <strong>legítimo interesse</strong> (Art. 7º, IX da LGPD) do controlador para controle de segurança.
            </div>
          </section>

          {/* Section 04 */}
          <section id="secao-04" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">04</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Mídias enviadas
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Todas as fotos e vídeos enviados são armazenados de forma estruturada no provedor de nuvem <strong>Cloudflare R2</strong> durante a vigência do álbum contratado. 
            </p>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              O criador do evento possui total autoridade administrativa de moderação, podendo remover qualquer imagem ou banir usuários a seu critério. Após a expiração do evento, todas as fotos e mídias são <strong>excluídas definitivamente</strong> dos nossos servidores.
            </p>
            <div className="bg-[#C4853A]/15 border-l-3 border-[#C4853A] rounded-r-lg p-5 max-w-[680px] text-xs text-[#F2EDE4] leading-relaxed mt-2">
              <strong>Aviso Legal:</strong> Ao fazer o upload de qualquer arquivo de mídia, o participante atesta deter todos os <strong>direitos autorais</strong> sobre o arquivo e possuir a <strong>autorização necessária</strong> das pessoas retratadas na cena.
            </div>
          </section>

          {/* Section 05 */}
          <section id="secao-05" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">05</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Uso de mídias para promoção
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              A plataforma Disqet busca divulgar os registros marcantes compartilhados em nosso serviço para ilustrar o portfólio.
            </p>
            <div className="bg-[#C4853A]/15 border-l-3 border-[#C4853A] rounded-r-lg p-5 max-w-[680px] text-xs text-[#F2EDE4] leading-relaxed">
              <strong>Regra de Consentimento Promocional:</strong> O Disqet poderá usar fotos e vídeos para fins de <strong>divulgação e promoção comercial</strong> (redes sociais oficiais como Instagram <strong>@disqet</strong>, marketing, landing page e portfólio de vendas) <strong>apenas e tão somente mediante autorização prévia e explícita</strong> concedida no momento de envio das fotos pelo usuário. Nenhuma mídia será compartilhada promocionalmente sem consentimento prévio.
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              O material utilizado para promoção pode ser editado, anonimizado ou ter os <strong>rostos desfocados</strong>. O consentimento concedido é <strong>opcional e revogável</strong> a qualquer momento mediante solicitação ao e-mail de suporte.
            </p>
          </section>

          {/* Section 06 */}
          <section id="secao-06" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">06</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Compartilhamento de dados
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Adotamos a premissa de não vender, trocar ou disponibilizar bases cadastrais a terceiros com fins lucrativos ou de publicidade direcionada.
            </p>
            <div className="bg-[#C4853A]/15 border-l-3 border-[#C4853A] rounded-r-lg p-5 max-w-[680px] text-xs text-[#F2EDE4] leading-relaxed">
              <strong>Compromisso Antivenda de Dados:</strong> O Disqet <strong>não vende, não aluga, não comercializa e não compartilha</strong> as suas mídias ou informações pessoais com nenhuma empresa externa, agência de publicidade ou terceiros para fins comerciais ou traçado de perfis. Seus dados são de sua propriedade exclusiva.
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              O compartilhamento limita-se aos provedores de infraestrutura necessários para a operação (armazenamento e processamento de imagens, serviços de e-mail transacional e processamento de pagamentos integrados), e às autoridades judiciais quando exigido formalmente por lei.
            </p>
          </section>

          {/* Section 07 */}
          <section id="secao-07" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">07</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Retenção e exclusão
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Os dados e mídias pessoais coletados obedecem a regras rígidas de ciclo de vida e retenção:
            </p>
            <ul className="flex flex-col gap-2 max-w-[680px]">
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>Mídias</strong>: mantidas no Cloudflare R2 até a data de expiração contratada do álbum, e deletadas permanentemente em seguida.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>Dados de criadores</strong>: armazenados enquanto a conta estiver ativa. Podem ser excluídos permanentemente sob requisição formal.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                <strong>Dados de convidados</strong>: o identificador de dispositivo (fingerprint) é descartado com a expiração do evento. Logs técnicos de infraestrutura são retidos por até <strong>90 dias</strong>.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold pb-2">
                <strong>Dados de pagamento</strong>: retidos pelo prazo mínimo exigido para o cumprimento das obrigações fiscais brasileiras.
              </li>
            </ul>
          </section>

          {/* Section 08 */}
          <section id="secao-08" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">08</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Seus direitos (LGPD)
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Em conformidade com a LGPD (Art. 18), você possui direitos garantidos sobre o tratamento dos seus dados. Oferecemos as seguintes faculdades em nossos canais de suporte:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[680px] mt-2">
              <div className="bg-[#2a221a] border border-[#F2EDE4]/25 hover:border-[#C4853A] rounded-xl p-4 transition-all duration-300">
                <span className="text-xl block mb-2">👁</span>
                <h4 className="text-xs font-bold text-white mb-1">Acesso</h4>
                <p className="text-[10px] text-[#F2EDE4]/50 leading-normal">Confirmar a existência do processamento e visualizar seus dados armazenados.</p>
              </div>
              <div className="bg-[#2a221a] border border-[#F2EDE4]/25 hover:border-[#C4853A] rounded-xl p-4 transition-all duration-300">
                <span className="text-xl block mb-2">✏️</span>
                <h4 className="text-xs font-bold text-white mb-1">Correção</h4>
                <p className="text-[10px] text-[#F2EDE4]/50 leading-normal">Solicitar alteração de cadastros incorretos, desatualizados ou incompletos.</p>
              </div>
              <div className="bg-[#2a221a] border border-[#F2EDE4]/25 hover:border-[#C4853A] rounded-xl p-4 transition-all duration-300">
                <span className="text-xl block mb-2">🗑</span>
                <h4 className="text-xs font-bold text-white mb-1">Exclusão</h4>
                <p className="text-[10px] text-[#F2EDE4]/50 leading-normal">Requerer a eliminação permanente de mídias e registros armazenados via consentimento.</p>
              </div>
              <div className="bg-[#2a221a] border border-[#F2EDE4]/25 hover:border-[#C4853A] rounded-xl p-4 transition-all duration-300">
                <span className="text-xl block mb-2">🔄</span>
                <h4 className="text-xs font-bold text-white mb-1">Portabilidade</h4>
                <p className="text-[10px] text-[#F2EDE4]/50 leading-normal">Receber um relatório com seus dados estruturados para transferência.</p>
              </div>
              <div className="bg-[#2a221a] border border-[#F2EDE4]/25 hover:border-[#C4853A] rounded-xl p-4 transition-all duration-300">
                <span className="text-xl block mb-2">🚫</span>
                <h4 className="text-xs font-bold text-white mb-1">Revogação</h4>
                <p className="text-[10px] text-[#F2EDE4]/50 leading-normal">Retirar consentimentos cadastrados anteriormente para mídias ou dados.</p>
              </div>
              <div className="bg-[#2a221a] border border-[#F2EDE4]/25 hover:border-[#C4853A] rounded-xl p-4 transition-all duration-300">
                <span className="text-xl block mb-2">ℹ️</span>
                <h4 className="text-xs font-bold text-white mb-1">Informação</h4>
                <p className="text-[10px] text-[#F2EDE4]/50 leading-normal">Saber com quais entidades e parceiros de infraestrutura compartilhamos dados.</p>
              </div>
            </div>

            <p className="text-xs text-[#F2EDE4]/50 mt-4">
              <strong>Prazo de atendimento:</strong> O Disqet responderá e concluirá as demandas legítimas de titulares em até <strong>15 dias úteis</strong>.
            </p>
          </section>

          {/* Section 09 */}
          <section id="secao-09" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">09</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Cookies e rastreamento
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Utilizamos cookies e identificadores apenas com objetivos de viabilizar a navegação básica da plataforma:
            </p>
            <ul className="flex flex-col gap-2 max-w-[680px]">
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                Cookies de sessão <code>httpOnly</code> para segurança do acesso autenticado de criadores.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold border-b border-[#F2EDE4]/10 pb-2">
                Cookies técnicos atrelados à fingerprint para validar limites e cotas de uploads de convidados.
              </li>
              <li className="relative pl-6 text-sm text-[#F2EDE4]/70 before:content-['—'] before:absolute before:left-0 before:text-[#C4853A] before:font-bold pb-2">
                Cookies de segurança cibernética para mitigação de falsificações (CSRF) e ataques DDoS.
              </li>
            </ul>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Não fazemos uso de cookies de pixel de anúncios de terceiros para publicidade direcionada ou monitoramento de tráfego comportamental.
            </p>
          </section>

          {/* Section 10 */}
          <section id="secao-10" className="flex flex-col gap-4 scroll-mt-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#C4853A] font-bold">10</span>
              <h2 className="font-display italic font-black text-2xl md:text-3xl text-white">
                Contato e DPO
              </h2>
            </div>
            <p className="text-sm text-[#F2EDE4]/70 max-w-[680px] leading-relaxed">
              Dúvidas adicionais ou requisição de exclusão de dados pessoais? Entre em contato formalmente com o nosso DPO:
            </p>

            <div className="bg-[#2a221a] border border-[#F2EDE4]/25 rounded-2xl max-w-[680px] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-[#F2EDE4]/25">
                <span className="font-mono text-[9px] text-[#F2EDE4]/50 uppercase tracking-widest font-bold">E-mail</span>
                <span className="text-xs text-[#C4853A] underline"><a href="mailto:privacidade@disqet.com">privacidade@disqet.com</a></span>
              </div>
              <div className="flex justify-between items-center p-4 border-b border-[#F2EDE4]/25">
                <span className="font-mono text-[9px] text-[#F2EDE4]/50 uppercase tracking-widest font-bold">DPO</span>
                <span className="text-xs text-[#F2EDE4]">A definir</span>
              </div>
              <div className="flex justify-between items-center p-4">
                <span className="font-mono text-[9px] text-[#F2EDE4]/50 uppercase tracking-widest font-bold">Prazo de Resposta</span>
                <span className="text-xs text-[#F2EDE4]">Até 15 dias úteis</span>
              </div>
            </div>

            <p className="text-xs text-[#F2EDE4]/50 leading-relaxed max-w-[680px] mt-2">
              Se as respostas dadas pelo DPO não forem consideradas satisfatórias, você tem total direito de apresentar petição de direitos diretamente junto à <strong>ANPD (Autoridade Nacional de Proteção de Dados)</strong> através dos canais de atendimento público em <a href="https://www.gov.br/anpd" target="_blank" className="text-[#C4853A] underline">gov.br/anpd</a>.
            </p>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-[#F2EDE4]/25 pt-8 mt-12 text-center">
          <p className="font-mono text-[9px] uppercase tracking-wider text-[#F2EDE4]/40">
            © 2026 Disqet · Todos os direitos reservados
          </p>
        </footer>

      </div>
    </div>
  );
}
