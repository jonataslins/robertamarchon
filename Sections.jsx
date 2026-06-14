// Page sections for the Roberta Marchon website UI kit.
// Composes the design-system primitives (Button, Eyebrow, ServiceCard,
// Testimonial, ProcessStep, StatBlock, Credential, Badge).

const DS = window.RobertaMarchonDesignSystem_5770c8;
const { Button, Eyebrow, ServiceCard, Testimonial, ProcessStep, StatBlock, Credential, Badge } = DS;

const SECTION = { padding: '100px 7vw' };

function SectionHeader({ eyebrow, title, desc, tone = 'sage' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'end', marginBottom: 64 }}>
      <div>
        <Eyebrow tone={tone} style={{ marginBottom: 16 }}>{eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,3.5vw,48px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', margin: 0 }}>{title}</h2>
      </div>
      <p style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.75, alignSelf: 'end', margin: 0 }}>{desc}</p>
    </div>
  );
}

function Hero({ onBook }) {
  return (
    <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: 72 }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 5vw 80px 7vw', background: 'var(--white)' }}>
        <Eyebrow style={{ marginBottom: 28 }}>Nutrição clínica online</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px,5.5vw,72px)', fontWeight: 300, lineHeight: 1.08, color: 'var(--ink)', margin: '0 0 28px', letterSpacing: '-0.01em' }}>
          Transforme sua<br />alimentação com<br /><em style={{ fontStyle: 'italic', color: 'var(--sage-light)' }}>equilíbrio e ciência.</em>
        </h1>
        <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 430, lineHeight: 1.7, margin: '0 0 44px' }}>
          Nutricionista em Itaboraí com atendimento presencial e online, especializada em emagrecimento saudável, reeducação alimentar e nutrição clínica baseada em evidências científicas.
        </p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={onBook}>Agendar minha consulta</Button>
          <Button variant="ghost" icon={<Icon.Clock />} href="#sobre">Conhecer Roberta</Button>
        </div>
        <div style={{
          marginTop: 32,
          color: 'var(--ink-soft)',
          fontSize: 15,
          lineHeight: 1.8
        }}>
          ⭐⭐⭐⭐⭐ Atendimento humanizado e individualizado.<br />
          Estratégias adaptadas à sua rotina para resultados sustentáveis.
        </div>

        <div style={{ display: 'flex', gap: 40, marginTop: 60, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
            <StatBlock value="13+" label="anos de atuação" />
            <StatBlock value="Baseada" label="em evidências" />
            <StatBlock value="CRN 4" label="13102189" />
        </div>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--sage-pale)' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <img src="./assets/hero.png" alt="Roberta Marchon" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 40, left: -20 }}>
          <Badge variant="float" icon="🍎" title="Atendimento personalizado">
               Emagrecimento saudável e nutrição clínica
            </Badge>
        </div>
      </div>
    </section>
  );
}

function Especialidades() {
  return (
    <section>

      <h2>Como posso ajudar você</h2>

      <ul>

        <li>Emagrecimento saudável</li>

        <li>Nutrição clínica</li>

        <li>Nutrição para idosos</li>

        <li>Reeducação alimentar</li>

        <li>Nutrição para diabetes</li>

        <li>Ganho de massa muscular</li>

        <li>Atendimento nutricional online</li>

      </ul>

    </section>
  );
}

function InstagramSection() {
  return (
    <section style={{
      padding: '80px 7vw',
      textAlign: 'center',
      background: 'var(--cream)'
    }}>

      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '42px',
        marginBottom: '20px'
      }}>

        Acompanhe conteúdos sobre saúde e nutrição

      </h2>

      <p style={{
        maxWidth: 600,
        margin: '0 auto 40px',
        color: 'var(--ink-soft)',
        lineHeight: 1.8
      }}>

        Dicas práticas, rotina de treinos, alimentação equilibrada
        e conteúdos baseados em ciência.

      </p>

      <img
        src="./assets/qrcode.png"
        alt="QR Code Instagram Roberta Marchon"
        style={{
           width: 220,
            maxWidth: '100%',
            borderRadius: 16,
            marginBottom: 30
      }}
    />

      <div>

        <a
          href="https://instagram.com/robertamarchon"
          target="_blank"
          style={{
            color: 'var(--sage)',
            fontWeight: 600,
            fontSize: 18,
            textDecoration: 'none'
          }}
        >

          @robertamarchon

        </a>

      </div>

    </section>
  );
}


function BlogHighlight() {
  return (
    <section style={{
      padding: '80px 7vw',
      background: 'var(--white)'
    }}>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        alignItems: 'center'
      }}>

        <div>

          <img
            src="./assets/Muaythai.png"
            alt="Roberta Marchon praticando Muay Thai"
            style={{
              width: '100%',
              borderRadius: 20
            }}
          />

        </div>

        <div>

          <span style={{
            color: 'var(--sage)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontSize: 12
          }}>

            BLOG

          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '42px',
            margin: '20px 0'
          }}>

            Nutrição esportiva na prática

          </h2>

          <p style={{
            color: 'var(--ink-soft)',
            lineHeight: 1.8,
            marginBottom: 30
          }}>

            Descubra como a alimentação pode melhorar
            a recuperação muscular, o desempenho e os
            resultados em modalidades como Muay Thai e musculação.

          </p>

          <a
            href="/blog/nutricao-esportiva.html"
            style={{
              display: 'inline-block',
              background: 'var(--sage)',
              color: '#fff',
              padding: '14px 24px',
              textDecoration: 'none',
              borderRadius: 4
            }}
          >

            Ler artigo completo

          </a>

        </div>

      </div>

    </section>
  );
}



const SERVICES = [
  ['⚖️', 'Emagrecimento saudável', 'Perda de peso sustentável, sem sofrimento nem dietas restritivas. Reeducação alimentar que cabe na sua rotina real.'],
  ['💪', 'Ganho de massa magra', 'Estratégia nutricional para quem treina e quer ver resultado. Proteína, timing e composição corporal certos.'],
  ['🫀', 'Saúde intestinal e hormonal', 'Microbiota, inflamação e equilíbrio hormonal pela alimentação. Seu intestino como chave da sua saúde.'],
  ['📋', 'Planos alimentares personalizados', 'Cardápios adaptados ao seu gosto, rotina, orçamento e objetivos. Prático, gostoso e baseado em ciência.'],
  ['⚡', 'Mais energia e disposição', 'Nutrição para quem quer acordar com pique, ter foco no trabalho e dormir bem. Qualidade de vida integral.'],
  ['🏥', 'Nutrição clínica', 'Atendimento a pacientes com diabetes, hipertensão, dislipidemia e outras condições clínicas. Experiência hospitalar.'],
];

function Services() {
  return (
    <section id="servicos" style={SECTION}>
      <SectionHeader
        eyebrow="Como posso te ajudar"
        title={<>Especialidades que<br /><em style={{ fontStyle: 'italic', color: 'var(--sage-light)' }}>transformam</em> resultados</>}
        desc="Cada atendimento é único porque você é único. Trabalho com avaliação completa, plano individualizado e acompanhamento contínuo."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'var(--border)', border: '1px solid var(--border)' }}>
        {SERVICES.map(([icon, title, desc]) => (
          <ServiceCard key={title} icon={icon} title={title}>{desc}</ServiceCard>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" style={{ ...SECTION, background: 'var(--cream)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', aspectRatio: '4/5', background: 'var(--sage-pale)', borderRadius: 2, overflow: 'hidden' }}>
            <img src="./assets/sobre.png" alt="Roberta Marchon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, right: -20 }}>
            <Badge variant="earth" title="13 anos">de experiência em nutrição clínica</Badge>
          </div>
        </div>
        <div>
          <Eyebrow tone="earth" style={{ marginBottom: 16 }}>Sobre mim</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,3.5vw,48px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', margin: '0 0 28px' }}>
            Nutrição baseada em <em style={{ fontStyle: 'italic', color: 'var(--sage-light)' }}>ciência</em> e humanização
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Sou Roberta Marchon, nutricionista clínica formada pela Universidade Salgado de Oliveira (2008–2012), com sólida trajetória em ambiente hospitalar. Atuei por anos no Hospital Municipal Desembargador Leal Júnior, onde desenvolvi expertise em avaliação nutricional, terapia enteral e parenteral.
          </p>
          <p style={{ fontSize: 16, color: 'var(--ink-mid)', lineHeight: 1.8, margin: '0 0 20px' }}>
            Minha abordagem une o rigor científico ao cuidado humano: cada paciente chega com uma história, uma rotina e objetivos únicos. Acredito que a nutrição precisa ser prática e real — não uma lista de proibições, mas uma ferramenta de transformação.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 36 }}>
            <Credential icon="🎓" label="Formação">Nutrição — Universidade Salgado de Oliveira, 2008–2012</Credential>
            <Credential icon="📋" label="Registro profissional">CRN 4 13102189 — Ativo</Credential>
            <Credential icon="🏥" label="Experiência hospitalar">Hospital Municipal Desembargador Leal Júnior</Credential>
            <Credential icon="🌐" label="Atendimento">100% online · Itaboraí, RJ</Credential>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ['1', 'Agendamento', 'Escolha o melhor dia e horário pelo WhatsApp. Atendimento flexível para a sua rotina.'],
  ['2', 'Consulta online', 'Videochamada com anamnese completa, avaliação nutricional e definição de objetivos.'],
  ['3', 'Plano personalizado', 'Receba seu plano alimentar individualizado, adaptado ao seu gosto e rotina.'],
  ['4', 'Acompanhamento', 'Retornos periódicos para ajustar o plano e potencializar seus resultados.'],
];

function Process() {
  return (
    <section id="como-funciona" style={SECTION}>
      <SectionHeader
        eyebrow="Passo a passo"
        title={<>Como funciona o<br /><em style={{ fontStyle: 'italic', color: 'var(--sage-light)' }}>atendimento online</em></>}
        desc="Simples, prático e eficiente. Do agendamento ao acompanhamento, tudo acontece no conforto da sua casa."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 1, background: 'var(--border)', zIndex: 0 }} />
        {STEPS.map(([n, t, d]) => <ProcessStep key={n} number={n} title={t}>{d}</ProcessStep>)}
      </div>
    </section>
  );
}

const QUOTES = [
  [
    'A Roberta mudou minha relação com a comida. Nunca achei que conseguiria manter uma alimentação saudável sem sofrimento — e consegui!',
    'Juliana S.',
    'Emagrecimento saudável • -14kg em 6 meses',
    'JS'
  ],

  [
   'Sempre achei que uma dieta para ganhar massa seria cheia de alimentos caros e difíceis de seguir. A Roberta me mostrou que é possível ter resultados comendo o que está ao meu alcance, de forma simples e prática. Ganhei peso, aumentei minha massa muscular e, principalmente, aprendi a me alimentar sem complicação.',
   'Jonatas Lins',
    '40 anos • Ganho de massa muscular e aumento de peso',
    'JL'
  ],

  [
    'Tenho diabetes tipo 2 e finalmente entendi como me alimentar. A Roberta é paciente, atenciosa e muito competente. Recomendo de olhos fechados!',
    'Valéria B.',
    'Nutrição clínica • Controle glicêmico',
    'AR'
  ],
];

function Testimonials() {
  return (
    <section id="depoimentos" style={{ ...SECTION, background: 'var(--cream)' }}>
      <SectionHeader
        eyebrow="O que dizem"
        title={<>Resultados que<br /><em style={{ fontStyle: 'italic', color: 'var(--sage-light)' }}>transformam</em></>}
        desc="Resultados sustentáveis começam com acolhimento, estratégia e um acompanhamento nutricional individualizado."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {QUOTES.map(([q, n, note, ini]) => <Testimonial key={n} quote={q} name={n} note={note} initials={ini} />)}
      </div>
    </section>
  );
}

function CTA({ onBook }) {
  return (
    <section id="contato" style={{ background: 'var(--sage)', padding: '100px 7vw', display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }}>
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)', fontWeight: 300, color: '#fff', lineHeight: 1.15, margin: 0 }}>
          Pronta para cuidar<br />da sua <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>saúde de verdade?</em>
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginTop: 16 }}>
          Agende agora sua consulta online e dê o primeiro passo para uma vida com mais saúde, energia e equilíbrio.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flexShrink: 0 }}>
        <Button variant="white" icon={<Icon.Whats s={16} />} onClick={onBook}>Agendar pelo WhatsApp</Button>
        <a href="mailto:robertamarchon@icloud.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <Icon.Mail /> robertamarchon@icloud.com
        </a>
      </div>
    </section>
  );
}

Object.assign(window, {
  Hero,
  Services,
  About,
  Process,
  Testimonials,
  CTA,
  InstagramSection,
  BlogHighlight
});
