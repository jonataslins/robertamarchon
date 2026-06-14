/* @ds-bundle: {"format":3,"namespace":"RobertaMarchonDesignSystem_5770c8","components":[{"name":"Credential","sourcePath":"components/content/Credential.jsx"},{"name":"ProcessStep","sourcePath":"components/content/ProcessStep.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/content/Credential.jsx":"ee8b77cdba76","components/content/ProcessStep.jsx":"0e6fb54f177a","components/content/ServiceCard.jsx":"956ddb5afe6b","components/content/StatBlock.jsx":"e102cf0185ed","components/content/Testimonial.jsx":"932bd8c1e8a0","components/core/Badge.jsx":"c107b731ba94","components/core/Button.jsx":"4807a3c44ca8","components/core/Eyebrow.jsx":"95f63743ab32","components/forms/Input.jsx":"e5a56179d8b1","ui_kits/website/Chrome.jsx":"5cc53d8e2477","ui_kits/website/Icons.jsx":"a4f1125b8805","ui_kits/website/Sections.jsx":"8ee3a0b23fb2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RobertaMarchonDesignSystem_5770c8 = window.RobertaMarchonDesignSystem_5770c8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Credential.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Credential — a bordered key/value chip used in the About section
 * to list formation, registration, experience. Icon + bold label
 * over a muted line of detail.
 */
function Credential({
  icon,
  label,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage)',
      fontSize: 18,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-snug)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: 'var(--text-strong)',
      fontWeight: 'var(--weight-medium)',
      marginBottom: 2
    }
  }, label), children));
}
Object.assign(__ds_scope, { Credential });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Credential.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProcessStep — one numbered step in the "como funciona" timeline.
 * Circular outlined number in Cormorant, serif title, muted copy.
 * Centered; meant to sit in a row connected by a hairline.
 */
function ProcessStep({
  number,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      padding: '0 24px',
      position: 'relative',
      zIndex: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-page)',
      border: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 'var(--weight-regular)',
      color: 'var(--sage)',
      margin: '0 auto var(--space-6)'
    }
  }, number), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-strong)',
      margin: '0 0 var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — a single offering in the services grid. Round
 * sage icon well, serif title, muted description. On hover the
 * surface warms to mist and a sage rule wipes across the bottom.
 */
function ServiceCard({
  icon,
  title,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--surface-wash)' : 'var(--surface-card)',
      padding: '40px 36px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background var(--dur) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginBottom: 'var(--space-6)',
      color: 'var(--sage)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-snug)',
      margin: '0 0 var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relax)',
      margin: 0
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--sage)',
      transform: hover ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur-slow) var(--ease)'
    }
  }));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a big Cormorant figure over a small label. Used in
 * the hero's stat row (13+ anos, 100% online, CRN…). Lined top
 * border optional when grouped.
 */
function StatBlock({
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-1)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial — a patient quote card. Big serif quotation mark
 * watermark, italic serif body, hairline divider, initials avatar.
 * Optional gold star rating.
 */
function Testimonial({
  quote,
  name,
  note,
  initials,
  rating = 5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-sm)',
      padding: 36,
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 80,
      lineHeight: 0.6,
      color: 'var(--sage-pale)',
      position: 'absolute',
      top: 28,
      left: 28,
      pointerEvents: 'none'
    }
  }, "\u201C"), rating > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--gold)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 2,
      marginBottom: 'var(--space-1)',
      position: 'relative'
    }
  }, '★'.repeat(rating)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-quote)',
      fontStyle: 'italic',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: 'var(--space-4) 0 var(--space-8)',
      position: 'relative',
      zIndex: 1
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      borderTop: '1px solid var(--line)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-tint)',
      color: 'var(--sage)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      flexShrink: 0
    }
  }, initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)'
    }
  }, name), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, note))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small floating info chip. Used as the hero's elevated
 * "Experiência Hospitalar" card and as the earth-toned stat tag.
 * Soft shadow, square corners, optional round icon well.
 */
function Badge({
  variant = 'float',
  icon,
  title,
  children,
  style,
  ...rest
}) {
  const variants = {
    /* white elevated chip with icon well + title + caption */
    float: {
      wrap: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        background: 'var(--surface-card)',
        padding: '18px 24px',
        borderRadius: 'var(--radius-sm)',
        boxShadow: 'var(--shadow-lg)',
        maxWidth: 260
      },
      title: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-strong)',
        fontWeight: 'var(--weight-medium)',
        display: 'block'
      },
      body: {
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-normal)'
      }
    },
    /* solid earth tag, big display number */
    earth: {
      wrap: {
        background: 'var(--earth)',
        color: '#fff',
        padding: '20px 24px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-xs)',
        lineHeight: 'var(--leading-snug)'
      },
      title: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-light)',
        fontSize: 22,
        marginBottom: 2
      },
      body: {
        fontSize: 'var(--text-xs)',
        color: 'rgba(255,255,255,0.85)'
      }
    }
  };
  const v = variants[variant] || variants.float;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...v.wrap,
      ...style
    }
  }, rest), variant === 'float' && icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-full)',
      background: 'var(--surface-wash)',
      color: 'var(--sage)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("strong", {
    style: v.title
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: v.body
  }, children)));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Roberta Marchon's primary action element.
 * Square-ish (2px radius), uppercase, letter-spaced label. Sage
 * fill for primary; a quiet text link for ghost; white-on-sage
 * for use over the green CTA band.
 */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconRight,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 22px',
      fontSize: 'var(--text-2xs)'
    },
    md: {
      padding: '14px 32px',
      fontSize: 'var(--text-xs)'
    },
    lg: {
      padding: '16px 36px',
      fontSize: 'var(--text-xs)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    transition: 'background var(--dur) var(--ease), color var(--dur) var(--ease), transform var(--dur-fast) var(--ease)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      color: 'var(--action-text)'
    },
    secondary: {
      background: 'var(--earth)',
      color: '#fff'
    },
    white: {
      background: '#fff',
      color: 'var(--sage)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      padding: size === 'sm' ? '10px 4px' : '14px 4px',
      textTransform: 'none',
      letterSpacing: 'var(--tracking-flat)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-xs)'
    }
  };
  const Tag = href ? 'a' : 'button';
  const iconNode = node => node ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16
    }
  }, node) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      const el = e.currentTarget;
      if (variant === 'primary') {
        el.style.background = 'var(--action-hover)';
        el.style.transform = 'var(--lift)';
      } else if (variant === 'secondary') {
        el.style.filter = 'brightness(1.08)';
        el.style.transform = 'var(--lift)';
      } else if (variant === 'white') {
        el.style.background = 'var(--sage-pale)';
      } else {
        el.style.color = 'var(--sage)';
      }
    },
    onMouseLeave: e => {
      const el = e.currentTarget;
      el.style.transform = 'none';
      el.style.filter = 'none';
      if (variant === 'primary') el.style.background = 'var(--action)';else if (variant === 'white') el.style.background = '#fff';else if (variant === 'ghost') el.style.color = 'var(--text-muted)';
    }
  }, rest), iconNode(icon), children, iconNode(iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the small uppercase section label with a leading
 * hairline. A signature Roberta Marchon device: it precedes
 * nearly every headline. Sage by default; can sit on dark.
 */
function Eyebrow({
  children,
  tone = 'sage',
  line = true,
  style,
  ...rest
}) {
  const colors = {
    sage: 'var(--sage)',
    earth: 'var(--earth)',
    light: 'var(--sage-light)'
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.sage,
      margin: 0,
      ...style
    }
  }, rest), line && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 28,
      height: 1,
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a quiet text field matching the brand's square, hairline
 * aesthetic. Sage focus ring. Pairs with an optional label.
 * Supports textarea via `multiline`.
 */
function Input({
  label,
  multiline = false,
  rows = 4,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `fld-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const field = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-strong)',
    background: 'var(--surface-card)',
    border: `1px solid ${focus ? 'var(--sage)' : 'var(--line)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '12px 14px',
    outline: 'none',
    boxShadow: focus ? '0 0 0 3px var(--sage-mist)' : 'none',
    transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)',
    resize: multiline ? 'vertical' : undefined,
    ...style
  };
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-3xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    rows: multiline ? rows : undefined,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Chrome + interactive booking flow for the Roberta Marchon website UI kit.

const DSc = window.RobertaMarchonDesignSystem_5770c8;
const {
  Button: Btn,
  Input: Field
} = DSc;
const NAV_LINKS = [
  ['#servicos', 'Serviços'],
  ['#sobre', 'Sobre mim'],
  ['#como-funciona', 'Como funciona'],
  ['#depoimentos', 'Depoimentos'],
  ['/blog', 'Blog'],
  ['#contato', 'Contato']
];
function Nav({
  onBook
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5vw',
      height: 72,
      background: 'rgba(250,250,248,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 400,
      letterSpacing: '0.04em',
      color: 'var(--ink)'
    }
  }, "Roberta Marchon"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--sage)',
      fontWeight: 500
    }
  }, "Nutricionista \xB7 CRN 4 13102189")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 36,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, NAV_LINKS.map(([href, label]) => /*#__PURE__*/React.createElement("li", {
    key: href
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: 13,
      letterSpacing: '0.06em',
      color: 'var(--ink-soft)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--sage)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--ink-soft)'
  }, label)))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon.Whats, {
      s: 14
    }),
    onClick: onBook
  }, "Agendar consulta"));
}
const FOOT_COLS = [['Serviços', ['Emagrecimento saudável', 'Ganho de massa', 'Saúde intestinal', 'Nutrição clínica']], ['Navegação', ['Sobre mim', 'Como funciona', 'Depoimentos', 'Contato']]];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      padding: '60px 7vw 36px',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 40,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 300,
      color: '#fff',
      letterSpacing: '0.04em',
      marginBottom: 4
    }
  }, "Roberta Marchon"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--sage-light)',
      marginBottom: 20
    }
  }, "Nutricionista"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.7,
      maxWidth: 260,
      margin: 0
    }
  }, "Nutri\xE7\xE3o baseada em ci\xEAncia, acolhimento e resultados que transformam vidas.")), FOOT_COLS.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.8)',
      fontWeight: 500,
      marginBottom: 20
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      margin: 0,
      padding: 0
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.45)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
  }, it)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.8)',
      fontWeight: 500,
      marginBottom: 20
    }
  }, "Contato"), [[/*#__PURE__*/React.createElement(Icon.Phone, null), '(21) 97100-8223'], [/*#__PURE__*/React.createElement(Icon.Mail, null), 'robertamarchon@icloud.com'], [/*#__PURE__*/React.createElement(Icon.Pin, null), 'Itaboraí — RJ']].map(([ic, tx], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      color: 'rgba(255,255,255,0.45)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage-light)',
      display: 'inline-flex'
    }
  }, ic), tx)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.08)',
      paddingTop: 28,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Roberta Marchon Nutricionista \xB7 Todos os direitos reservados"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.3)',
      letterSpacing: '0.06em'
    }
  }, "CRN 4 13102189")));
}
function WaFloat({
  onBook
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onBook,
    "aria-label": "WhatsApp",
    style: {
      position: 'fixed',
      bottom: 28,
      right: 28,
      zIndex: 200,
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--whatsapp)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-wa)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon.Whats, {
    s: 26
  })));
}

// ---- Booking flow (fake, multi-step) ----
const GOALS = ['Emagrecimento saudável', 'Ganho de massa magra', 'Saúde intestinal', 'Nutrição clínica', 'Mais energia'];
const SLOTS = ['Seg · 09h', 'Seg · 14h', 'Ter · 10h', 'Qua · 16h', 'Qui · 11h', 'Sex · 15h'];
function BookingModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  const [goal, setGoal] = React.useState(null);
  const [slot, setSlot] = React.useState(null);
  const [name, setName] = React.useState('');
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setGoal(null);
      setSlot(null);
      setName('');
    }
  }, [open]);
  if (!open) return null;
  const pillRow = (opts, val, set) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, opts.map(o => {
    const on = val === o;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      onClick: () => set(o),
      style: {
        padding: '10px 16px',
        borderRadius: 2,
        fontSize: 13,
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        border: `1px solid ${on ? 'var(--sage)' : 'var(--border)'}`,
        background: on ? 'var(--sage-pale)' : 'var(--white)',
        color: on ? 'var(--sage)' : 'var(--ink-mid)',
        fontWeight: on ? 500 : 400
      }
    }, o);
  }));
  const Step = ({
    n,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontFamily: 'var(--font-display)',
      background: step >= n ? 'var(--sage)' : 'var(--sage-pale)',
      color: step >= n ? '#fff' : 'var(--sage)'
    }
  }, step > n ? /*#__PURE__*/React.createElement(Icon.Check, {
    s: 13
  }) : n + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: step >= n ? 'var(--ink)' : 'var(--ink-soft)'
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      background: 'rgba(28,28,26,0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(520px,100%)',
      background: 'var(--white)',
      borderRadius: 2,
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 28px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 400,
      color: 'var(--ink)'
    }
  }, "Agendar consulta"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon.Close, null))), step < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      padding: '18px 28px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Step, {
    n: 0,
    label: "Objetivo"
  }), /*#__PURE__*/React.createElement(Step, {
    n: 1,
    label: "Hor\xE1rio"
  }), /*#__PURE__*/React.createElement(Step, {
    n: 2,
    label: "Contato"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      margin: '0 0 18px'
    }
  }, "O que voc\xEA gostaria de trabalhar?"), pillRow(GOALS, goal, setGoal)), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      margin: '0 0 18px'
    }
  }, "Escolha um hor\xE1rio para sua videochamada."), pillRow(SLOTS, slot, setSlot)), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    placeholder: "Seu nome completo",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp",
    placeholder: "(21) 90000-0000"
  }))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--sage-pale)',
      color: 'var(--sage)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px'
    }
  }, /*#__PURE__*/React.createElement(Icon.Check, {
    s: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 24,
      color: 'var(--ink)',
      margin: '0 0 10px'
    }
  }, "Pedido enviado!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      lineHeight: 1.7,
      margin: '0 auto',
      maxWidth: 320
    }
  }, name ? `Obrigada, ${name.split(' ')[0]}! ` : '', "A Roberta confirmar\xE1 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, slot), " pelo WhatsApp em breve."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 28px',
      borderTop: '1px solid var(--border)'
    }
  }, step > 0 && step < 3 ? /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => setStep(step - 1)
  }, "Voltar") : /*#__PURE__*/React.createElement("span", null), step < 2 && /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Icon.Arrow, null),
    onClick: () => setStep(step + 1),
    disabled: step === 0 && !goal || step === 1 && !slot,
    style: step === 0 && !goal || step === 1 && !slot ? {
      opacity: 0.4,
      pointerEvents: 'none'
    } : null
  }, "Continuar"), step === 2 && /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon.Whats, {
      s: 14
    }),
    onClick: () => setStep(3),
    disabled: !name,
    style: !name ? {
      opacity: 0.4,
      pointerEvents: 'none'
    } : null
  }, "Enviar pedido"), step === 3 && /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onClose
  }, "Fechar"))));
}
function App() {
  const [booking, setBooking] = React.useState(false);
  const book = () => setBooking(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(CTA, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(WaFloat, {
    onBook: book
  }), /*#__PURE__*/React.createElement(BookingModal, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
// Shared icons + small helpers for the Roberta Marchon website UI kit.
// Feather/Lucide-style line icons (stroke 1.5) matching the codebase,
// plus the WhatsApp glyph. Exported to window for the other scripts.

const Icon = {
  Whats: ({
    s = 18
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  })),
  Clock: ({
    s = 16
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4l2 2"
  })),
  Phone: ({
    s = 14
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.25 9.09a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
  })),
  Mail: ({
    s = 14
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  })),
  Pin: ({
    s = 14
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  Check: ({
    s = 18
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })),
  Close: ({
    s = 20
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  Arrow: ({
    s = 16
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    width: s,
    height: s
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))
};
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Page sections for the Roberta Marchon website UI kit.
// Composes the design-system primitives (Button, Eyebrow, ServiceCard,
// Testimonial, ProcessStep, StatBlock, Credential, Badge).

const DS = window.RobertaMarchonDesignSystem_5770c8;
const {
  Button,
  Eyebrow,
  ServiceCard,
  Testimonial,
  ProcessStep,
  StatBlock,
  Credential,
  Badge
} = DS;
const SECTION = {
  padding: '100px 7vw'
};
function SectionHeader({
  eyebrow,
  title,
  desc,
  tone = 'sage'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'end',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: tone,
    style: {
      marginBottom: 16
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,3.5vw,48px)',
      fontWeight: 300,
      lineHeight: 1.15,
      color: 'var(--ink)',
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-soft)',
      lineHeight: 1.75,
      alignSelf: 'end',
      margin: 0
    }
  }, desc));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px 5vw 80px 7vw',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 28
    }
  }, "Nutri\xE7\xE3o cl\xEDnica online"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(42px,5.5vw,72px)',
      fontWeight: 300,
      lineHeight: 1.08,
      color: 'var(--ink)',
      margin: '0 0 28px',
      letterSpacing: '-0.01em'
    }
  }, "Ci\xEAncia e cuidado", /*#__PURE__*/React.createElement("br", null), "a favor da sua", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sage-light)'
    }
  }, "sa\xFAde real.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-soft)',
      maxWidth: 400,
      lineHeight: 1.7,
      margin: '0 0 44px'
    }
  }, "Nutricionista em Itabora\xED com atendimento online personalizado, focado em emagrecimento saud\xE1vel, nutri\xE7\xE3o cl\xEDnica e qualidade de vida."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "Agendar minha consulta"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon.Clock, null),
    href: "#sobre"
  }, "Conhecer Roberta")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 60,
      paddingTop: 40,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "13+",
    label: "anos de experi\xEAncia"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "atendimento online"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "CRN",
    label: "4 13102189"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sage-pale)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/hero.png",
    alt: "Roberta Marchon",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center top',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: -20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "float",
    icon: "\uD83C\uDFE5",
    title: "Experi\xEAncia Hospitalar"
  }, "Avalia\xE7\xE3o nutricional e terapia enteral"))));
}
const SERVICES = [['⚖️', 'Emagrecimento saudável', 'Perda de peso sustentável, sem sofrimento nem dietas restritivas. Reeducação alimentar que cabe na sua rotina real.'], ['💪', 'Ganho de massa magra', 'Estratégia nutricional para quem treina e quer ver resultado. Proteína, timing e composição corporal certos.'], ['🫀', 'Saúde intestinal e hormonal', 'Microbiota, inflamação e equilíbrio hormonal pela alimentação. Seu intestino como chave da sua saúde.'], ['📋', 'Planos alimentares personalizados', 'Cardápios adaptados ao seu gosto, rotina, orçamento e objetivos. Prático, gostoso e baseado em ciência.'], ['⚡', 'Mais energia e disposição', 'Nutrição para quem quer acordar com pique, ter foco no trabalho e dormir bem. Qualidade de vida integral.'], ['🏥', 'Nutrição clínica', 'Atendimento a pacientes com diabetes, hipertensão, dislipidemia e outras condições clínicas. Experiência hospitalar.']];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "servicos",
    style: SECTION
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Como posso te ajudar",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Especialidades que", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'italic',
        color: 'var(--sage-light)'
      }
    }, "transformam"), " resultados"),
    desc: "Cada atendimento \xE9 \xFAnico porque voc\xEA \xE9 \xFAnico. Trabalho com avalia\xE7\xE3o completa, plano individualizado e acompanhamento cont\xEDnuo."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 2,
      background: 'var(--border)',
      border: '1px solid var(--border)'
    }
  }, SERVICES.map(([icon, title, desc]) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: title,
    icon: icon,
    title: title
  }, desc))));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: {
      ...SECTION,
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/5',
      background: 'var(--sage-pale)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/sobre.png",
    alt: "Roberta Marchon",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -20,
      right: -20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "earth",
    title: "13 anos"
  }, "de experi\xEAncia em nutri\xE7\xE3o cl\xEDnica"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "earth",
    style: {
      marginBottom: 16
    }
  }, "Sobre mim"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,3.5vw,48px)',
      fontWeight: 300,
      lineHeight: 1.15,
      color: 'var(--ink)',
      margin: '0 0 28px'
    }
  }, "Nutri\xE7\xE3o baseada em ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sage-light)'
    }
  }, "ci\xEAncia"), " e humaniza\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-mid)',
      lineHeight: 1.8,
      margin: '0 0 20px'
    }
  }, "Sou Roberta Marchon, nutricionista cl\xEDnica formada pela Universidade Salgado de Oliveira (2008\u20132012), com s\xF3lida trajet\xF3ria em ambiente hospitalar. Atuei por anos no Hospital Municipal Desembargador Leal J\xFAnior, onde desenvolvi expertise em avalia\xE7\xE3o nutricional, terapia enteral e parenteral."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-mid)',
      lineHeight: 1.8,
      margin: '0 0 20px'
    }
  }, "Minha abordagem une o rigor cient\xEDfico ao cuidado humano: cada paciente chega com uma hist\xF3ria, uma rotina e objetivos \xFAnicos. Acredito que a nutri\xE7\xE3o precisa ser pr\xE1tica e real \u2014 n\xE3o uma lista de proibi\xE7\xF5es, mas uma ferramenta de transforma\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Credential, {
    icon: "\uD83C\uDF93",
    label: "Forma\xE7\xE3o"
  }, "Nutri\xE7\xE3o \u2014 Universidade Salgado de Oliveira, 2008\u20132012"), /*#__PURE__*/React.createElement(Credential, {
    icon: "\uD83D\uDCCB",
    label: "Registro profissional"
  }, "CRN 4 13102189 \u2014 Ativo"), /*#__PURE__*/React.createElement(Credential, {
    icon: "\uD83C\uDFE5",
    label: "Experi\xEAncia hospitalar"
  }, "Hospital Municipal Desembargador Leal J\xFAnior"), /*#__PURE__*/React.createElement(Credential, {
    icon: "\uD83C\uDF10",
    label: "Atendimento"
  }, "100% online \xB7 Itabora\xED, RJ")))));
}
const STEPS = [['1', 'Agendamento', 'Escolha o melhor dia e horário pelo WhatsApp. Atendimento flexível para a sua rotina.'], ['2', 'Consulta online', 'Videochamada com anamnese completa, avaliação nutricional e definição de objetivos.'], ['3', 'Plano personalizado', 'Receba seu plano alimentar individualizado, adaptado ao seu gosto e rotina.'], ['4', 'Acompanhamento', 'Retornos periódicos para ajustar o plano e potencializar seus resultados.']];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "como-funciona",
    style: SECTION
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Passo a passo",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Como funciona o", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'italic',
        color: 'var(--sage-light)'
      }
    }, "atendimento online")),
    desc: "Simples, pr\xE1tico e eficiente. Do agendamento ao acompanhamento, tudo acontece no conforto da sua casa."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      left: '12.5%',
      right: '12.5%',
      height: 1,
      background: 'var(--border)',
      zIndex: 0
    }
  }), STEPS.map(([n, t, d]) => /*#__PURE__*/React.createElement(ProcessStep, {
    key: n,
    number: n,
    title: t
  }, d))));
}
const QUOTES = [['A Roberta mudou minha relação com a comida. Nunca achei que ia conseguir manter uma alimentação saudável sem sofrimento — e consegui!', 'Juliana S.', 'Perdeu 14kg em 6 meses', 'JS'], ['Profissional incrível! Explicou tudo de forma clara, me passou um plano que eu consegui seguir de verdade. Minha energia voltou!', 'Marcos C.', 'Ganho de massa e mais disposição', 'MC'], ['Tenho diabetes tipo 2 e finalmente entendi como me alimentar. A Roberta é paciente, atenciosa e muito competente. Super recomendo!', 'Ana R.', 'Controle de diabetes pela nutrição', 'AR']];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    id: "depoimentos",
    style: {
      ...SECTION,
      background: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "O que dizem",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Hist\xF3rias que", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'italic',
        color: 'var(--sage-light)'
      }
    }, "inspiram")),
    desc: "Cada paciente tem uma jornada \xFAnica. Estas s\xE3o algumas das transforma\xE7\xF5es que me motivam todos os dias."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, QUOTES.map(([q, n, note, ini]) => /*#__PURE__*/React.createElement(Testimonial, {
    key: n,
    quote: q,
    name: n,
    note: note,
    initials: ini
  }))));
}
function CTA({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: {
      background: 'var(--sage)',
      padding: '100px 7vw',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 60,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,4vw,52px)',
      fontWeight: 300,
      color: '#fff',
      lineHeight: 1.15,
      margin: 0
    }
  }, "Pronta para cuidar", /*#__PURE__*/React.createElement("br", null), "da sua ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'rgba(255,255,255,0.7)'
    }
  }, "sa\xFAde de verdade?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.75)',
      marginTop: 16
    }
  }, "Agende agora sua consulta online e d\xEA o primeiro passo para uma vida com mais sa\xFAde, energia e equil\xEDbrio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    icon: /*#__PURE__*/React.createElement(Icon.Whats, {
      s: 16
    }),
    onClick: onBook
  }, "Agendar pelo WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:robertamarchon@icloud.com",
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon.Mail, null), " robertamarchon@icloud.com")));
}
Object.assign(window, {
  Hero,
  Services,
  About,
  Process,
  Testimonials,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Credential = __ds_scope.Credential;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

})();
