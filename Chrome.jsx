// Chrome + interactive booking flow for the Roberta Marchon website UI kit.

const DSc = window.RobertaMarchonDesignSystem_5770c8;
const { Button: Btn, Input: Field } = DSc;

const NAV_LINKS = [
  ['#servicos', 'Serviços'],
  ['#sobre', 'Sobre mim'],
  ['#como-funciona', 'Como funciona'],
  ['#depoimentos', 'Depoimentos'],
  ['/blog', 'Blog'],
  ['#contato', 'Contato'],
];

function Nav({ onBook }) {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5vw', height: 72, background: 'rgba(250,250,248,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 400, letterSpacing: '0.04em', color: 'var(--ink)' }}>Roberta Marchon</span>
        <span style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500 }}>Nutricionista · CRN 4 13102189</span>
      </div>
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}>
        {NAV_LINKS.map(([href, label]) => (
          <li key={href}><a href={href} style={{ fontSize: 13, letterSpacing: '0.06em', color: 'var(--ink-soft)', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--sage)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-soft)'}>{label}</a></li>
        ))}
      </ul>
      <Btn variant="primary" size="sm" icon={<Icon.Whats s={14} />} onClick={onBook}>Agendar consulta</Btn>
    </nav>
  );
}

const FOOT_COLS = [
  ['Especialidades', [
    'Emagrecimento saudável',
    'Nutrição para idosos',
    'Nutrição clínica',
    'Ganho de massa muscular',
    'Nutricionista online'
  ]],
  ['Atendimento', [
    'Consulta online',
    'Consulta presencial',
    'Plano alimentar',
    'Acompanhamento',
    'Retorno nutricional'
  ]]
];

function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', padding: '60px 7vw 36px', color: 'rgba(255,255,255,0.5)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 300, color: '#fff', letterSpacing: '0.04em', marginBottom: 4 }}>Roberta Marchon</div>
          <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 20 }}>Nutricionista</div>
          <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 320, margin: 0 }}>
            Nutricionista em Itaboraí especializada em emagrecimento saudável,
            nutrição clínica, nutrição para idosos, ganho de massa muscular e
            atendimento online para todo o Brasil.
          </p>
        </div>
        {FOOT_COLS.map(([title, items]) => (
          <div key={title}>
            <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginBottom: 20 }}>{title}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0 }}>
              {items.map(it => <li key={it}><a href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>{it}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginBottom: 20 }}>Contato</p>
          {[[<Icon.Phone />, '(21) 97100-8223'], [<Icon.Mail />, 'robertamarchon@icloud.com'], [<Icon.Pin />, 'Itaboraí — RJ']].map(([ic, tx], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>
              <span style={{ color: 'var(--sage-light)', display: 'inline-flex' }}>{ic}</span>{tx}
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
        <span>
          © 2026 Roberta Marchon • Nutricionista em Itaboraí • Atendimento online para todo o Brasil
        </span>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>CRN 4 13102189</span>
      </div>
    </footer>
  );
}

function WaFloat({ onBook }) {
  return (
    <button onClick={onBook} aria-label="WhatsApp" style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 200, width: 56, height: 56, borderRadius: '50%', background: 'var(--whatsapp)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-wa)' }}>
      <span style={{ color: '#fff', display: 'inline-flex' }}><Icon.Whats s={26} /></span>
    </button>
  );
}

// ---- Booking flow (fake, multi-step) ----
const GOALS = ['Emagrecimento saudável', 'Ganho de massa magra', 'Saúde intestinal', 'Nutrição clínica', 'Mais energia'];
const SLOTS = ['Seg · 09h', 'Seg · 14h', 'Ter · 10h', 'Qua · 16h', 'Qui · 11h', 'Sex · 15h'];

function BookingModal({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  const [goal, setGoal] = React.useState(null);
  const [slot, setSlot] = React.useState(null);
  const [name, setName] = React.useState('');
  React.useEffect(() => { if (open) { setStep(0); setGoal(null); setSlot(null); setName(''); } }, [open]);
  if (!open) return null;

  const pillRow = (opts, val, set) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {opts.map(o => {
        const on = val === o;
        return <button key={o} onClick={() => set(o)} style={{ padding: '10px 16px', borderRadius: 2, fontSize: 13, fontFamily: 'var(--font-body)', cursor: 'pointer', border: `1px solid ${on ? 'var(--sage)' : 'var(--border)'}`, background: on ? 'var(--sage-pale)' : 'var(--white)', color: on ? 'var(--sage)' : 'var(--ink-mid)', fontWeight: on ? 500 : 400 }}>{o}</button>;
      })}
    </div>
  );

  const Step = ({ n, label }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontFamily: 'var(--font-display)', background: step >= n ? 'var(--sage)' : 'var(--sage-pale)', color: step >= n ? '#fff' : 'var(--sage)' }}>{step > n ? <Icon.Check s={13} /> : n + 1}</span>
      <span style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: step >= n ? 'var(--ink)' : 'var(--ink-soft)' }}>{label}</span>
    </div>
  );

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(28,28,26,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={e => e.stopPropagation()} style={{ width: 'min(520px,100%)', background: 'var(--white)', borderRadius: 2, boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, color: 'var(--ink)' }}>Agendar consulta</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-soft)', display: 'inline-flex' }}><Icon.Close /></button>
        </div>

        {step < 3 && (
          <div style={{ display: 'flex', gap: 20, padding: '18px 28px', borderBottom: '1px solid var(--border)' }}>
            <Step n={0} label="Objetivo" /><Step n={1} label="Horário" /><Step n={2} label="Contato" />
          </div>
        )}

        <div style={{ padding: 28 }}>
          {step === 0 && (<>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 18px' }}>O que você gostaria de trabalhar?</p>
            {pillRow(GOALS, goal, setGoal)}
          </>)}
          {step === 1 && (<>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 18px' }}>Escolha um horário para sua videochamada.</p>
            {pillRow(SLOTS, slot, setSlot)}
          </>)}
          {step === 2 && (<>
            <div style={{ display: 'grid', gap: 16 }}>
              <Field label="Nome" placeholder="Seu nome completo" value={name} onChange={e => setName(e.target.value)} />
              <Field label="WhatsApp" placeholder="(21) 90000-0000" />
            </div>
          </>)}
          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--sage-pale)', color: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check s={26} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, color: 'var(--ink)', margin: '0 0 10px' }}>Pedido enviado!</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7, margin: '0 auto', maxWidth: 320 }}>
                {name ? `Obrigada, ${name.split(' ')[0]}! ` : ''}A Roberta confirmará <strong style={{ color: 'var(--ink)' }}>{slot}</strong> pelo WhatsApp em breve.
              </p>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 28px', borderTop: '1px solid var(--border)' }}>
          {step > 0 && step < 3
            ? <Btn variant="ghost" onClick={() => setStep(step - 1)}>Voltar</Btn>
            : <span />}
          {step < 2 && <Btn variant="primary" iconRight={<Icon.Arrow />} onClick={() => setStep(step + 1)} disabled={(step === 0 && !goal) || (step === 1 && !slot)} style={(step === 0 && !goal) || (step === 1 && !slot) ? { opacity: 0.4, pointerEvents: 'none' } : null}>Continuar</Btn>}
          {step === 2 && <Btn variant="primary" icon={<Icon.Whats s={14} />} onClick={() => setStep(3)} disabled={!name} style={!name ? { opacity: 0.4, pointerEvents: 'none' } : null}>Enviar pedido</Btn>}
          {step === 3 && <Btn variant="primary" onClick={onClose}>Fechar</Btn>}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [booking, setBooking] = React.useState(false);

  const book = () => setBooking(true);

  return (
    <div style={{ background: 'var(--white)' }}>
      <Nav onBook={book} />

      <Hero onBook={book} />

      <Services />

      <About />

      <Process />

      <Testimonials />

      <InstagramSection />

      <BlogHighlight />

      <CTA onBook={book} />

      <Footer />

      <WaFloat onBook={book} />

      <BookingModal
        open={booking}
        onClose={() => setBooking(false)}
      />
    </div>
  );
}

Object.assign(window, { App });
