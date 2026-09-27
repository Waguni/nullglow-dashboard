/* Nullglow Dashboard — dunkles Glas-Dashboard für Home Assistant (Energiefluss, Licht, Klima, Kameras …).
 * Einstellungen → Dashboards → Dashboard hinzufügen → „Nullglow“. Anleitung: README.md
 * Gebaut mit tools/build-hacs.py aus HA-Touchscreen-Dash — nicht von Hand ändern. */

window.__NG_BUNDLE = true;

// ───── nullglow-fonts.js ─────
(() => {
  const urls = [
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
    "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
    "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap",
    "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Share+Tech+Mono&display=swap",
    "https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap",
    "https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
];
  urls.forEach((href, i) => {
    const id = `nullglow-fonts-2-${i}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id; link.rel = "stylesheet"; link.href = href;
    document.head.appendChild(link);
  });
})();

// Designs (aus ha/themes/nullglow/nullglow.yaml, dunkler Modus flach) — setzt nullglow-strategy.js ein
window.__NULLGLOW_THEMES = {
"nullglow": {
"primary-font-family": "'Space Grotesk', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'JetBrains Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "nullglow",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#05070a",
"ng-bg-elev": "#0a0f14",
"ng-glass": "rgba(255, 255, 255, 0.045)",
"ng-glass-2": "rgba(255, 255, 255, 0.075)",
"ng-glass-hi": "rgba(255, 255, 255, 0.12)",
"ng-line": "rgba(255, 255, 255, 0.09)",
"ng-line-2": "rgba(255, 255, 255, 0.16)",
"ng-txt": "#e8f5ee",
"ng-txt-dim": "#93a79d",
"ng-txt-mute": "#5f6f68",
"ng-acc": "#7cffb2",
"ng-acc-2": "#2be38f",
"ng-acc-3": "#0fb87a",
"ng-acc-ink": "#04140d",
"ng-acc-wash": "rgba(124, 255, 178, 0.10)",
"ng-acc-line": "rgba(124, 255, 178, 0.30)",
"ng-ok": "#5cf2a8",
"ng-warn": "#ffd166",
"ng-danger": "#ff6b6b",
"ng-info": "#6be3ff",
"ng-shadow": "0 8px 28px -12px rgba(0, 0, 0, 0.8)",
"ng-shadow-lg": "0 24px 60px -20px rgba(0, 0, 0, 0.9)",
"ng-glow-sm": "0 0 18px -2px rgba(124, 255, 178, 0.28)",
"ng-blur": "blur(18px) saturate(140%)",
"rgb-ng-acc": "124, 255, 178",
"rgb-ng-acc-2": "43, 227, 143",
"rgb-ng-acc-3": "15, 184, 122",
"rgb-ng-warn": "255, 209, 102",
"rgb-ng-danger": "255, 107, 107",
"rgb-ng-info": "107, 227, 255",
"rgb-ng-mute": "147, 167, 157",
"rgb-ng-bg": "5, 7, 10",
"rgb-ng-txt": "232, 245, 238",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#05070a",
"ng-design-title": "Nullglow — Grün"
},
"violetnoir": {
"primary-font-family": "'Sora', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'JetBrains Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "violetnoir",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#050507",
"ng-bg-elev": "#0d0b12",
"ng-glass": "rgba(196, 170, 255, 0.045)",
"ng-glass-2": "rgba(196, 170, 255, 0.075)",
"ng-glass-hi": "rgba(196, 170, 255, 0.13)",
"ng-line": "rgba(196, 170, 255, 0.10)",
"ng-line-2": "rgba(196, 170, 255, 0.18)",
"ng-txt": "#ece9f2",
"ng-txt-dim": "#9a90ad",
"ng-txt-mute": "#6a6180",
"ng-acc": "#a855f7",
"ng-acc-2": "#8b3ff0",
"ng-acc-3": "#6d28d9",
"ng-acc-ink": "#f6f0ff",
"ng-acc-wash": "rgba(168, 85, 247, 0.12)",
"ng-acc-line": "rgba(168, 85, 247, 0.34)",
"ng-ok": "#34e5b0",
"ng-warn": "#ffcf5c",
"ng-danger": "#ff5d73",
"ng-info": "#22d3ee",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(168, 85, 247, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "168, 85, 247",
"rgb-ng-acc-2": "139, 63, 240",
"rgb-ng-acc-3": "109, 40, 217",
"rgb-ng-warn": "255, 207, 92",
"rgb-ng-danger": "255, 93, 115",
"rgb-ng-info": "34, 211, 238",
"rgb-ng-mute": "154, 144, 173",
"rgb-ng-bg": "5, 5, 7",
"rgb-ng-txt": "236, 233, 242",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#050507",
"ng-design-title": "Violetnoir — Violett"
},
"halcyon": {
"primary-font-family": "'Manrope', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'IBM Plex Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "halcyon",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#0a1619",
"ng-bg-elev": "#0e2024",
"ng-glass": "rgba(180, 240, 234, 0.04)",
"ng-glass-2": "rgba(180, 240, 234, 0.07)",
"ng-glass-hi": "rgba(180, 240, 234, 0.12)",
"ng-line": "rgba(180, 240, 234, 0.10)",
"ng-line-2": "rgba(180, 240, 234, 0.18)",
"ng-txt": "#e9f5f3",
"ng-txt-dim": "#8fb0ac",
"ng-txt-mute": "#5f7d79",
"ng-acc": "#35d6c4",
"ng-acc-2": "#22bfae",
"ng-acc-3": "#159e8f",
"ng-acc-ink": "#03140f",
"ng-acc-wash": "rgba(53, 214, 196, 0.10)",
"ng-acc-line": "rgba(53, 214, 196, 0.30)",
"ng-ok": "#35d6c4",
"ng-warn": "#f4c46b",
"ng-danger": "#ff7a85",
"ng-info": "#4aa8ff",
"ng-shadow": "0 8px 28px -12px rgba(0, 0, 0, 0.72)",
"ng-shadow-lg": "0 24px 60px -20px rgba(0, 0, 0, 0.82)",
"ng-glow-sm": "0 0 16px -3px rgba(53, 214, 196, 0.22)",
"ng-blur": "blur(16px) saturate(135%)",
"rgb-ng-acc": "53, 214, 196",
"rgb-ng-acc-2": "34, 191, 174",
"rgb-ng-acc-3": "21, 158, 143",
"rgb-ng-warn": "244, 196, 107",
"rgb-ng-danger": "255, 122, 133",
"rgb-ng-info": "74, 168, 255",
"rgb-ng-mute": "143, 176, 172",
"rgb-ng-bg": "10, 22, 25",
"rgb-ng-txt": "233, 245, 243",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#0a1619",
"ng-design-title": "Halcyon — Türkis"
},
"emberglow": {
"primary-font-family": "'Outfit', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'JetBrains Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "emberglow",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#0a0604",
"ng-bg-elev": "#140c08",
"ng-glass": "rgba(255, 196, 160, 0.045)",
"ng-glass-2": "rgba(255, 196, 160, 0.075)",
"ng-glass-hi": "rgba(255, 196, 160, 0.13)",
"ng-line": "rgba(255, 196, 160, 0.10)",
"ng-line-2": "rgba(255, 196, 160, 0.18)",
"ng-txt": "#f6ece5",
"ng-txt-dim": "#b09a8c",
"ng-txt-mute": "#7a6558",
"ng-acc": "#ff8a3d",
"ng-acc-2": "#f06a1a",
"ng-acc-3": "#c9500c",
"ng-acc-ink": "#1a0a02",
"ng-acc-wash": "rgba(255, 138, 61, 0.12)",
"ng-acc-line": "rgba(255, 138, 61, 0.34)",
"ng-ok": "#4ade80",
"ng-warn": "#ffd166",
"ng-danger": "#ff5470",
"ng-info": "#38bdf8",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(255, 138, 61, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "255, 138, 61",
"rgb-ng-acc-2": "240, 106, 26",
"rgb-ng-acc-3": "201, 80, 12",
"rgb-ng-warn": "255, 209, 102",
"rgb-ng-danger": "255, 84, 112",
"rgb-ng-info": "56, 189, 248",
"rgb-ng-mute": "176, 154, 140",
"rgb-ng-bg": "10, 6, 4",
"rgb-ng-txt": "246, 236, 229",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#0a0604",
"ng-design-title": "Emberglow — Orange"
},
"aurum": {
"primary-font-family": "'Plus Jakarta Sans', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'IBM Plex Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "aurum",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#080704",
"ng-bg-elev": "#12100a",
"ng-glass": "rgba(255, 230, 170, 0.045)",
"ng-glass-2": "rgba(255, 230, 170, 0.075)",
"ng-glass-hi": "rgba(255, 230, 170, 0.13)",
"ng-line": "rgba(255, 230, 170, 0.10)",
"ng-line-2": "rgba(255, 230, 170, 0.18)",
"ng-txt": "#f5f0e2",
"ng-txt-dim": "#aaa189",
"ng-txt-mute": "#736b57",
"ng-acc": "#f5c542",
"ng-acc-2": "#e0a91e",
"ng-acc-3": "#b8860b",
"ng-acc-ink": "#1a1402",
"ng-acc-wash": "rgba(245, 197, 66, 0.12)",
"ng-acc-line": "rgba(245, 197, 66, 0.34)",
"ng-ok": "#4ade80",
"ng-warn": "#ff9f43",
"ng-danger": "#ff5d6c",
"ng-info": "#60a5fa",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(245, 197, 66, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "245, 197, 66",
"rgb-ng-acc-2": "224, 169, 30",
"rgb-ng-acc-3": "184, 134, 11",
"rgb-ng-warn": "255, 159, 67",
"rgb-ng-danger": "255, 93, 108",
"rgb-ng-info": "96, 165, 250",
"rgb-ng-mute": "170, 161, 137",
"rgb-ng-bg": "8, 7, 4",
"rgb-ng-txt": "245, 240, 226",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#080704",
"ng-design-title": "Aurum — Gold"
},
"sakura": {
"primary-font-family": "'DM Sans', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'DM Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "sakura",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#0a0608",
"ng-bg-elev": "#150c12",
"ng-glass": "rgba(255, 190, 220, 0.045)",
"ng-glass-2": "rgba(255, 190, 220, 0.075)",
"ng-glass-hi": "rgba(255, 190, 220, 0.13)",
"ng-line": "rgba(255, 190, 220, 0.10)",
"ng-line-2": "rgba(255, 190, 220, 0.18)",
"ng-txt": "#f7eaf0",
"ng-txt-dim": "#b193a2",
"ng-txt-mute": "#7b6170",
"ng-acc": "#ff7ab6",
"ng-acc-2": "#f2549a",
"ng-acc-3": "#cc3a7c",
"ng-acc-ink": "#1f0712",
"ng-acc-wash": "rgba(255, 122, 182, 0.12)",
"ng-acc-line": "rgba(255, 122, 182, 0.34)",
"ng-ok": "#34d399",
"ng-warn": "#fbbf24",
"ng-danger": "#ff5a5a",
"ng-info": "#60c8ff",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(255, 122, 182, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "255, 122, 182",
"rgb-ng-acc-2": "242, 84, 154",
"rgb-ng-acc-3": "204, 58, 124",
"rgb-ng-warn": "251, 191, 36",
"rgb-ng-danger": "255, 90, 90",
"rgb-ng-info": "96, 200, 255",
"rgb-ng-mute": "177, 147, 162",
"rgb-ng-bg": "10, 6, 8",
"rgb-ng-txt": "247, 234, 240",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#0a0608",
"ng-design-title": "Sakura — Rosé"
},
"nocturne": {
"primary-font-family": "'Inter', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'JetBrains Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "nocturne",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#04060b",
"ng-bg-elev": "#0a0f1a",
"ng-glass": "rgba(170, 200, 255, 0.045)",
"ng-glass-2": "rgba(170, 200, 255, 0.075)",
"ng-glass-hi": "rgba(170, 200, 255, 0.13)",
"ng-line": "rgba(170, 200, 255, 0.10)",
"ng-line-2": "rgba(170, 200, 255, 0.18)",
"ng-txt": "#e8eef8",
"ng-txt-dim": "#8fa0bd",
"ng-txt-mute": "#5e6d87",
"ng-acc": "#4f8cff",
"ng-acc-2": "#2f6ff0",
"ng-acc-3": "#1e4fc9",
"ng-acc-ink": "#f2f6ff",
"ng-acc-wash": "rgba(79, 140, 255, 0.12)",
"ng-acc-line": "rgba(79, 140, 255, 0.34)",
"ng-ok": "#34d399",
"ng-warn": "#fbbf24",
"ng-danger": "#ff5d73",
"ng-info": "#22d3ee",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(79, 140, 255, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "79, 140, 255",
"rgb-ng-acc-2": "47, 111, 240",
"rgb-ng-acc-3": "30, 79, 201",
"rgb-ng-warn": "251, 191, 36",
"rgb-ng-danger": "255, 93, 115",
"rgb-ng-info": "34, 211, 238",
"rgb-ng-mute": "143, 160, 189",
"rgb-ng-bg": "4, 6, 11",
"rgb-ng-txt": "232, 238, 248",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#04060b",
"ng-design-title": "Nocturne — Blau"
},
"glacier": {
"primary-font-family": "'Urbanist', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'Fira Code', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "glacier",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#05090c",
"ng-bg-elev": "#0b1319",
"ng-glass": "rgba(190, 230, 255, 0.045)",
"ng-glass-2": "rgba(190, 230, 255, 0.075)",
"ng-glass-hi": "rgba(190, 230, 255, 0.13)",
"ng-line": "rgba(190, 230, 255, 0.10)",
"ng-line-2": "rgba(190, 230, 255, 0.18)",
"ng-txt": "#eaf4fa",
"ng-txt-dim": "#92a9b8",
"ng-txt-mute": "#5f7684",
"ng-acc": "#7dd3fc",
"ng-acc-2": "#38bdf8",
"ng-acc-3": "#0e94cf",
"ng-acc-ink": "#03141d",
"ng-acc-wash": "rgba(125, 211, 252, 0.12)",
"ng-acc-line": "rgba(125, 211, 252, 0.34)",
"ng-ok": "#4ade80",
"ng-warn": "#fcd34d",
"ng-danger": "#fb7185",
"ng-info": "#a5b4fc",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(125, 211, 252, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "125, 211, 252",
"rgb-ng-acc-2": "56, 189, 248",
"rgb-ng-acc-3": "14, 148, 207",
"rgb-ng-warn": "252, 211, 77",
"rgb-ng-danger": "251, 113, 133",
"rgb-ng-info": "165, 180, 252",
"rgb-ng-mute": "146, 169, 184",
"rgb-ng-bg": "5, 9, 12",
"rgb-ng-txt": "234, 244, 250",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#05090c",
"ng-design-title": "Glacier — Eisblau"
},
"chartreuse": {
"primary-font-family": "'Chakra Petch', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'Share Tech Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "chartreuse",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#060804",
"ng-bg-elev": "#0d110a",
"ng-glass": "rgba(215, 255, 170, 0.045)",
"ng-glass-2": "rgba(215, 255, 170, 0.075)",
"ng-glass-hi": "rgba(215, 255, 170, 0.13)",
"ng-line": "rgba(215, 255, 170, 0.10)",
"ng-line-2": "rgba(215, 255, 170, 0.18)",
"ng-txt": "#f0f6e6",
"ng-txt-dim": "#9eab8c",
"ng-txt-mute": "#697558",
"ng-acc": "#c4f24a",
"ng-acc-2": "#a3d92c",
"ng-acc-3": "#7cb518",
"ng-acc-ink": "#111a02",
"ng-acc-wash": "rgba(196, 242, 74, 0.12)",
"ng-acc-line": "rgba(196, 242, 74, 0.34)",
"ng-ok": "#2dd4bf",
"ng-warn": "#fbbf24",
"ng-danger": "#ff5d6c",
"ng-info": "#60a5fa",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(196, 242, 74, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "196, 242, 74",
"rgb-ng-acc-2": "163, 217, 44",
"rgb-ng-acc-3": "124, 181, 24",
"rgb-ng-warn": "251, 191, 36",
"rgb-ng-danger": "255, 93, 108",
"rgb-ng-info": "96, 165, 250",
"rgb-ng-mute": "158, 171, 140",
"rgb-ng-bg": "6, 8, 4",
"rgb-ng-txt": "240, 246, 230",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#060804",
"ng-design-title": "Chartreuse — Limette"
},
"neonwave": {
"primary-font-family": "'Exo 2', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'Space Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "neonwave",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#08040a",
"ng-bg-elev": "#120a16",
"ng-glass": "rgba(255, 170, 240, 0.045)",
"ng-glass-2": "rgba(255, 170, 240, 0.075)",
"ng-glass-hi": "rgba(255, 170, 240, 0.13)",
"ng-line": "rgba(255, 170, 240, 0.10)",
"ng-line-2": "rgba(255, 170, 240, 0.18)",
"ng-txt": "#f7e9f5",
"ng-txt-dim": "#b08fab",
"ng-txt-mute": "#785e74",
"ng-acc": "#ff3dcb",
"ng-acc-2": "#e81fb0",
"ng-acc-3": "#b8108a",
"ng-acc-ink": "#1c0216",
"ng-acc-wash": "rgba(255, 61, 203, 0.12)",
"ng-acc-line": "rgba(255, 61, 203, 0.34)",
"ng-ok": "#34e5b0",
"ng-warn": "#ffcf5c",
"ng-danger": "#ff5d5d",
"ng-info": "#22d3ee",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(255, 61, 203, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "255, 61, 203",
"rgb-ng-acc-2": "232, 31, 176",
"rgb-ng-acc-3": "184, 16, 138",
"rgb-ng-warn": "255, 207, 92",
"rgb-ng-danger": "255, 93, 93",
"rgb-ng-info": "34, 211, 238",
"rgb-ng-mute": "176, 143, 171",
"rgb-ng-bg": "8, 4, 10",
"rgb-ng-txt": "247, 233, 245",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#08040a",
"ng-design-title": "Neonwave — Magenta"
},
"graphite": {
"primary-font-family": "'Geist', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'Geist Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "graphite",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#060607",
"ng-bg-elev": "#0e0f11",
"ng-glass": "rgba(220, 225, 235, 0.045)",
"ng-glass-2": "rgba(220, 225, 235, 0.075)",
"ng-glass-hi": "rgba(220, 225, 235, 0.13)",
"ng-line": "rgba(220, 225, 235, 0.10)",
"ng-line-2": "rgba(220, 225, 235, 0.18)",
"ng-txt": "#eceef1",
"ng-txt-dim": "#9aa0a8",
"ng-txt-mute": "#666b73",
"ng-acc": "#e6e8eb",
"ng-acc-2": "#c5cad1",
"ng-acc-3": "#9aa1ab",
"ng-acc-ink": "#0b0c0e",
"ng-acc-wash": "rgba(230, 232, 235, 0.12)",
"ng-acc-line": "rgba(230, 232, 235, 0.34)",
"ng-ok": "#4ade80",
"ng-warn": "#fbbf24",
"ng-danger": "#f87171",
"ng-info": "#60a5fa",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(230, 232, 235, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "230, 232, 235",
"rgb-ng-acc-2": "197, 202, 209",
"rgb-ng-acc-3": "154, 161, 171",
"rgb-ng-warn": "251, 191, 36",
"rgb-ng-danger": "248, 113, 113",
"rgb-ng-info": "96, 165, 250",
"rgb-ng-mute": "154, 160, 168",
"rgb-ng-bg": "6, 6, 7",
"rgb-ng-txt": "236, 238, 241",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#060607",
"ng-design-title": "Graphite — Silber"
},
"nebula": {
"primary-font-family": "'Lexend', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'Roboto Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "nebula",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#05050b",
"ng-bg-elev": "#0c0c18",
"ng-glass": "rgba(180, 180, 255, 0.045)",
"ng-glass-2": "rgba(180, 180, 255, 0.075)",
"ng-glass-hi": "rgba(180, 180, 255, 0.13)",
"ng-line": "rgba(180, 180, 255, 0.10)",
"ng-line-2": "rgba(180, 180, 255, 0.18)",
"ng-txt": "#ebebfa",
"ng-txt-dim": "#9696b8",
"ng-txt-mute": "#626283",
"ng-acc": "#818cf8",
"ng-acc-2": "#6366f1",
"ng-acc-3": "#4f46e5",
"ng-acc-ink": "#f3f3ff",
"ng-acc-wash": "rgba(129, 140, 248, 0.12)",
"ng-acc-line": "rgba(129, 140, 248, 0.34)",
"ng-ok": "#34d399",
"ng-warn": "#fbbf24",
"ng-danger": "#fb7185",
"ng-info": "#22d3ee",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(129, 140, 248, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "129, 140, 248",
"rgb-ng-acc-2": "99, 102, 241",
"rgb-ng-acc-3": "79, 70, 229",
"rgb-ng-warn": "251, 191, 36",
"rgb-ng-danger": "251, 113, 133",
"rgb-ng-info": "34, 211, 238",
"rgb-ng-mute": "150, 150, 184",
"rgb-ng-bg": "5, 5, 11",
"rgb-ng-txt": "235, 235, 250",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#05050b",
"ng-design-title": "Nebula — Indigo"
},
"dune": {
"primary-font-family": "'Figtree', system-ui, sans-serif",
"paper-font-common-base_-_font-family": "var(--primary-font-family)",
"paper-font-body1_-_font-family": "var(--primary-font-family)",
"mdc-typography-font-family": "var(--primary-font-family)",
"ha-font-family-body": "var(--primary-font-family)",
"ha-font-family-heading": "var(--primary-font-family)",
"ha-font-family-code": "'IBM Plex Mono', ui-monospace, monospace",
"code-font-family": "var(--ha-font-family-code)",
"primary-background-color": "var(--ng-bg)",
"secondary-background-color": "var(--ng-bg-elev)",
"card-background-color": "var(--ng-bg-elev)",
"mdc-theme-surface": "var(--ng-bg-elev)",
"material-background-color": "var(--ng-bg-elev)",
"clear-background-color": "var(--ng-glass)",
"ha-card-background": "var(--ng-glass)",
"ha-card-border-radius": "20px",
"ha-card-border-width": "0px",
"ha-card-backdrop-filter": "var(--ng-blur)",
"ha-card-box-shadow": "inset 0 0 0 1px var(--ng-line), var(--ng-shadow)",
"divider-color": "var(--ng-line)",
"app-header-text-color": "var(--ng-txt)",
"app-header-backdrop-filter": "var(--ng-blur)",
"sidebar-background-color": "var(--ng-bg-elev)",
"sidebar-icon-color": "var(--ng-txt-mute)",
"sidebar-text-color": "var(--ng-txt-dim)",
"sidebar-selected-icon-color": "var(--ng-acc)",
"sidebar-selected-text-color": "var(--ng-acc)",
"sidebar-selected-background-color": "var(--ng-acc-wash)",
"primary-text-color": "var(--ng-txt)",
"secondary-text-color": "var(--ng-txt-dim)",
"disabled-text-color": "var(--ng-txt-mute)",
"text-primary-color": "var(--ng-acc-ink)",
"text-light-primary-color": "var(--ng-acc-ink)",
"ha-color-text-secondary": "var(--ng-txt-dim)",
"primary-color": "var(--ng-acc)",
"accent-color": "var(--ng-acc)",
"light-primary-color": "var(--ng-acc-2)",
"dark-primary-color": "var(--ng-acc-2)",
"ha-color-primary-05": "var(--ng-acc-ink)",
"ha-color-primary-40": "var(--ng-acc)",
"ha-color-primary-50": "var(--ng-acc-2)",
"ha-color-primary-90": "var(--ng-acc-wash)",
"ha-color-primary-95": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-resting": "var(--ng-acc-wash)",
"ha-color-fill-primary-quiet-hover": "var(--ng-acc-wash)",
"state-icon-color": "var(--ng-txt-dim)",
"state-icon-active-color": "var(--ng-acc)",
"state-active-color": "var(--ng-acc)",
"state-inactive-color": "var(--ng-txt-mute)",
"state-icon-unavailable-color": "var(--ng-txt-mute)",
"state-light-active-color": "var(--ng-acc)",
"state-switch-active-color": "var(--ng-acc)",
"state-climate-heat-color": "var(--ng-warn)",
"state-climate-cool-color": "var(--ng-info)",
"state-climate-auto-color": "var(--ng-acc)",
"state-climate-dry-color": "var(--ng-info)",
"state-climate-fan_only-color": "var(--ng-info)",
"state-humidifier-on-color": "var(--ng-info)",
"paper-item-icon-active-color": "var(--ng-acc)",
"green-color": "var(--ng-acc)",
"light-green-color": "var(--ng-acc)",
"teal-color": "var(--ng-acc-2)",
"success-color": "var(--ng-ok)",
"warning-color": "var(--ng-warn)",
"error-color": "var(--ng-danger)",
"info-color": "var(--ng-info)",
"yellow-color": "var(--ng-warn)",
"amber-color": "var(--ng-warn)",
"orange-color": "var(--ng-warn)",
"red-color": "var(--ng-danger)",
"blue-color": "var(--ng-info)",
"light-blue-color": "var(--ng-info)",
"cyan-color": "var(--ng-info)",
"grey-color": "var(--ng-txt-mute)",
"rgb-primary-color": "var(--rgb-ng-acc)",
"rgb-accent-color": "var(--rgb-ng-acc)",
"rgb-green": "var(--rgb-ng-acc)",
"rgb-light-green": "var(--rgb-ng-acc)",
"rgb-teal": "var(--rgb-ng-acc)",
"rgb-amber": "var(--rgb-ng-warn)",
"rgb-yellow": "var(--rgb-ng-warn)",
"rgb-orange": "var(--rgb-ng-warn)",
"rgb-red": "var(--rgb-ng-danger)",
"rgb-blue": "var(--rgb-ng-info)",
"rgb-light-blue": "var(--rgb-ng-info)",
"rgb-cyan": "var(--rgb-ng-info)",
"rgb-grey": "var(--rgb-ng-mute)",
"rgb-disabled": "var(--rgb-ng-mute)",
"energy-grid-consumption-color": "var(--ng-info)",
"energy-grid-return-color": "var(--ng-acc)",
"energy-solar-color": "var(--ng-warn)",
"energy-non-fossil-color": "var(--ng-acc-2)",
"switch-checked-color": "var(--ng-acc)",
"switch-checked-button-color": "var(--ng-acc)",
"switch-checked-track-color": "var(--ng-acc-2)",
"switch-unchecked-button-color": "var(--ng-txt-dim)",
"switch-unchecked-track-color": "var(--ng-glass-hi)",
"slider-color": "var(--ng-acc)",
"slider-track-color": "var(--ng-glass-hi)",
"ha-dialog-surface-background": "var(--ng-bg-elev)",
"ha-dialog-surface-backdrop-filter": "var(--ng-blur)",
"dialog-box-shadow": "inset 0 0 0 1px var(--ng-line-2), var(--ng-shadow-lg)",
"ha-dialog-border-radius": "28px",
"more-info-header-background": "var(--ng-bg-elev)",
"markdown-code-background-color": "var(--ng-glass-2)",
"code-editor-background-color": "var(--ng-bg-elev)",
"input-fill-color": "var(--ng-glass)",
"input-ink-color": "var(--ng-txt)",
"input-label-ink-color": "var(--ng-txt-dim)",
"input-idle-line-color": "var(--ng-line-2)",
"input-hover-line-color": "var(--ng-acc-line)",
"ha-color-form-background": "var(--ng-glass)",
"ha-color-form-background-hover": "var(--ng-glass-2)",
"wa-border-width-s": "0px",
"wa-border-radius-m": "20px",
"mush-rgb-state-light": "var(--rgb-ng-acc)",
"mush-rgb-state-switch": "var(--rgb-ng-acc)",
"mush-rgb-state-fan": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-heat": "var(--rgb-ng-warn)",
"mush-rgb-state-climate-cool": "var(--rgb-ng-info)",
"mush-rgb-state-climate-auto": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-dry": "var(--rgb-ng-info)",
"mush-rgb-state-climate-fan-only": "var(--rgb-ng-info)",
"mush-rgb-state-climate-heat-cool": "var(--rgb-ng-acc)",
"mush-rgb-state-climate-off": "var(--rgb-ng-mute)",
"mush-rgb-state-humidifier": "var(--rgb-ng-info)",
"mush-rgb-state-cover-open": "var(--rgb-ng-acc)",
"mush-rgb-disabled": "var(--rgb-ng-mute)",
"mush-rgb-state-entity": "var(--rgb-ng-mute)",
"mush-card-primary-font-weight": "600",
"mush-card-secondary-font-weight": "500",
"mush-control-border-radius": "14px",
"mush-chip-border-radius": "999px",
"mush-chip-background": "var(--ng-glass)",
"mush-chip-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"mush-chip-height": "44px",
"mush-control-height": "44px",
"mush-icon-border-radius": "14px",
"mush-badge-border-radius": "999px",
"bubble-main-background-color": "var(--ng-glass)",
"bubble-secondary-background-color": "var(--ng-glass-2)",
"bubble-accent-color": "var(--ng-acc)",
"bubble-button-accent-color": "var(--ng-acc)",
"bubble-icon-background-color": "var(--ng-glass-2)",
"bubble-border-radius": "28px",
"bubble-button-border-radius": "999px",
"bubble-box-shadow": "inset 0 0 0 1px var(--ng-line)",
"bubble-border": "none",
"bubble-pop-up-background-color": "var(--ng-bg-elev)",
"bubble-backdrop-background-color": "rgba(var(--rgb-ng-bg), 0.6)",
"bubble-horizontal-buttons-stack-background-color": "var(--ng-bg)",
"card-mod-theme": "dune",
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#090806",
"ng-bg-elev": "#12100c",
"ng-glass": "rgba(245, 225, 195, 0.045)",
"ng-glass-2": "rgba(245, 225, 195, 0.075)",
"ng-glass-hi": "rgba(245, 225, 195, 0.13)",
"ng-line": "rgba(245, 225, 195, 0.10)",
"ng-line-2": "rgba(245, 225, 195, 0.18)",
"ng-txt": "#f4efe6",
"ng-txt-dim": "#aa9f8e",
"ng-txt-mute": "#74695a",
"ng-acc": "#e8c39e",
"ng-acc-2": "#d4a373",
"ng-acc-3": "#b07d4f",
"ng-acc-ink": "#1a1208",
"ng-acc-wash": "rgba(232, 195, 158, 0.12)",
"ng-acc-line": "rgba(232, 195, 158, 0.34)",
"ng-ok": "#6ee7b7",
"ng-warn": "#fbbf24",
"ng-danger": "#f87171",
"ng-info": "#7dd3fc",
"ng-shadow": "0 8px 30px -12px rgba(0, 0, 0, 0.92)",
"ng-shadow-lg": "0 26px 64px -20px rgba(0, 0, 0, 0.96)",
"ng-glow-sm": "0 0 18px -2px rgba(232, 195, 158, 0.34)",
"ng-blur": "blur(18px) saturate(150%)",
"rgb-ng-acc": "232, 195, 158",
"rgb-ng-acc-2": "212, 163, 115",
"rgb-ng-acc-3": "176, 125, 79",
"rgb-ng-warn": "251, 191, 36",
"rgb-ng-danger": "248, 113, 113",
"rgb-ng-info": "125, 211, 252",
"rgb-ng-mute": "170, 159, 142",
"rgb-ng-bg": "9, 8, 6",
"rgb-ng-txt": "244, 239, 230",
"nf-acc": "var(--ng-acc)",
"nf-acc-ink": "var(--ng-acc-ink)",
"nf-txt": "var(--ng-txt)",
"nf-txt-dim": "var(--ng-txt-dim)",
"nf-txt-mute": "var(--ng-txt-mute)",
"nf-warn": "var(--ng-warn)",
"ng-glow-k": "1",
"ng-is-light": "0",
"rgb-ng-shade": "0, 0, 0",
"lovelace-background": "radial-gradient(900px 600px at 12% -8%, var(--ng-amb-1, rgba(var(--rgb-ng-acc-2), 0.16)), transparent 60%), radial-gradient(700px 520px at 96% 8%, var(--ng-amb-2, rgba(var(--rgb-ng-acc), 0.10)), transparent 62%), radial-gradient(900px 700px at 50% 120%, var(--ng-amb-3, rgba(var(--rgb-ng-acc-3), 0.12)), transparent 60%), radial-gradient(1300px 900px at 88% -25%, var(--ng-amb-4, rgba(0, 0, 0, 0)), transparent 65%), radial-gradient(120% 90% at 50% 0%, rgba(var(--rgb-ng-bg), 0) 55%, var(--ng-bg) 125%), linear-gradient(rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(var(--rgb-ng-acc), 0.10) 1px, transparent 1px) 0 0 / 48px 48px, var(--ng-bg) fixed",
"app-header-background-color": "rgba(var(--rgb-ng-bg), 0.72)",
"app-theme-color": "#090806",
"ng-design-title": "Dune — Sand"
}
};

// ───── nullglow-flow-card.js ─────
(() => {
  if (customElements.get("nullglow-flow-card")) return;

  const RGB = { acc: "124,255,178", txt: "232,245,238", warn: "255,209,102" };   // Rückfall (eigene Palette)
  // Farben des aktiven Designs für die Zeichenfläche: --nf-* (setzt das Nullglow-Theme je Design), sonst Rückfall
  let probe;
  function toRgb(css, d) {
    if (!css) return d;
    probe = probe || document.createElement("canvas").getContext("2d");
    probe.fillStyle = "#000"; probe.fillStyle = css;
    const v = probe.fillStyle;
    if (v[0] === "#") return [1, 3, 5].map((i) => parseInt(v.slice(i, i + 2), 16)).join(",");
    const m = v.match(/[\d.]+/g);
    return m && m.length >= 3 ? m.slice(0, 3).join(",") : d;
  }
  const REF_W = 3000; // W, bei dem ein Strom als „voll“ gilt (Linienhelligkeit)
  const MAX_PARTICLES = 70; // je Strom
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fmt = (w) => Math.round(w).toLocaleString("de-DE");
  const esc = (x) => String(x ?? "").replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]);
  const list = (x) => [].concat(x || []).filter(Boolean);

  // Leuchtpunkt-Sprite je Farbe (einmal gerendert, dann nur noch drawImage)
  const sprites = {};
  function sprite(rgb, light) {   // hell: Kern in der Stromfarbe statt Weiß (weißer Kern verschwindet auf hellem Grund)
    const k = rgb + (light ? "L" : "");
    if (sprites[k]) return sprites[k];
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d");
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, light ? `rgba(${rgb},1)` : "rgba(255,255,255,1)");
    gr.addColorStop(0.16, `rgba(${rgb},0.95)`);
    gr.addColorStop(0.42, `rgba(${rgb},0.28)`);
    gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
    return (sprites[k] = c);
  }

  // Kubische Bézierkurve mit Längentabelle -> Position nach zurückgelegter Strecke
  function makePath(p0, p1, p2, p3) {
    const N = 48, pts = [], cum = [0];
    for (let i = 0; i <= N; i++) {
      const t = i / N, u = 1 - t;
      pts.push({
        x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
        y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
      });
      if (i) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
    }
    const len = cum[N];
    const at = (d) => {
      d = clamp(d, 0, len);
      let i = 1;
      while (i < N && cum[i] < d) i++;
      const a = pts[i - 1], b = pts[i], seg = cum[i] - cum[i - 1] || 1, f = (d - cum[i - 1]) / seg;
      const dx = b.x - a.x, dy = b.y - a.y, l = Math.hypot(dx, dy) || 1;
      return { x: a.x + dx * f, y: a.y + dy * f, nx: -dy / l, ny: dx / l };
    };
    return { p0, p1, p2, p3, len, at };
  }

  // Punkt auf dem Kreisrand von Knoten n in Richtung (tx, ty)
  const edge = (n, tx, ty) => {
    const dx = tx - n.x, dy = ty - n.y, l = Math.hypot(dx, dy) || 1;
    return { x: n.x + (dx / l) * n.r, y: n.y + (dy / l) * n.r };
  };

  const STYLE = `
    :host { display: block; }
    .card { position: relative; overflow: hidden; border-radius: var(--ha-card-border-radius, 20px);
      /* eigene dunkle Fläche statt Theme-Hintergrund: lesbar auch in hellen Themes */
      background: var(--nf-background, linear-gradient(160deg, rgba(16,24,22,.92), rgba(7,10,13,.94)));
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09), var(--nf-shadow, 0 8px 28px -12px rgba(0,0,0,.6));
      color: var(--nf-txt, #e8f5ee);
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none); }
    /* eigene Grafikebene: Zahlen/Leuchtpunkte zeichnen nur die Karte neu, nicht das ganze Dashboard (sonst ~15×/s komplett) */
    .wrap { position: relative; width: 100%; will-change: transform; }
    canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
    .node { position: absolute; width: 0; height: 0; --g: 0; }
    .disc { position: absolute; left: 0; top: 0; transform: translate(-50%, -50%); border-radius: 50%;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px;
      background: var(--nf-disc, radial-gradient(circle at 50% 38%, rgba(20,30,26,.95), rgba(8,12,14,.96)));
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-acc, 124, 255, 178), calc(.10 + .45 * var(--g))),
                  0 0 calc(4px + 26px * var(--g)) rgba(var(--rgb-ng-acc, 124, 255, 178), calc(.30 * var(--g)));
      color: var(--nf-txt-dim, #93a79d); cursor: pointer; -webkit-tap-highlight-color: transparent;
      transition: color .26s cubic-bezier(.22,1,.36,1), transform .14s cubic-bezier(.22,1,.36,1); }
    .disc:active { transform: translate(-50%, -50%) scale(.95); }
    .node.on .disc { color: var(--nf-acc, #7cffb2); }
    .node.warn .disc { color: var(--nf-warn, #ffd166);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-warn, 255, 209, 102), .55), 0 0 26px rgba(var(--rgb-ng-warn, 255, 209, 102), calc(.28 * var(--ng-glow-k, 1))); }
    .node.idle { opacity: .42; }
    .node.house .disc { cursor: default; }
    ha-icon { width: var(--ic); height: var(--ic); --mdc-icon-size: var(--ic); display: flex; }
    .meta { position: absolute; left: 0; transform: translateX(-50%); text-align: center; white-space: nowrap;
      line-height: 1.15; pointer-events: none; }
    .val { font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace);
      font-variant-numeric: tabular-nums; color: var(--nf-txt, #e8f5ee); font-weight: 500; }
    .val small { font-size: .72em; color: var(--nf-txt-dim, #93a79d); margin-left: .18em; font-weight: 400; }
    .lbl { font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: var(--nf-txt-mute, #5f6f68); }
    .house .in { font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace);
      font-variant-numeric: tabular-nums; color: var(--nf-txt, #e8f5ee); font-weight: 500; line-height: 1; }
    .house .in small { font-size: .6em; color: var(--nf-txt-dim, #93a79d); margin-left: .12em; }
    .na .val { color: var(--nf-txt-mute, #5f6f68); }
    .cons .meta { transform: translateY(-50%); text-align: left; }  /* Verbraucher: Werte rechts neben dem Knoten */
    .cons .lbl { font-size: 9px; letter-spacing: .04em; }
    .cons .kwh { font-size: 9px; color: var(--nf-txt-mute, #5f6f68); font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); }
    .today { position: absolute; left: 0; right: 0; bottom: 0; display: grid; grid-template-columns: repeat(4, 1fr);
      box-shadow: inset 0 1px 0 rgba(var(--rgb-ng-txt, 255, 255, 255), .07); background: linear-gradient(0deg, var(--nf-shade, rgba(0,0,0,.18)), transparent); }
    .today > div { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; min-width: 0;
      padding-top: 10px; box-sizing: border-box; }  /* Platz für die Tabs auf der Oberkante */
    .today > div + div { box-shadow: inset 1px 0 0 rgba(var(--rgb-ng-txt, 255, 255, 255), .05); }
    .today .v { font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); font-variant-numeric: tabular-nums;
      color: var(--nf-txt, #e8f5ee); font-weight: 500; white-space: nowrap; }
    .today .v small { color: var(--nf-txt-dim, #93a79d); font-weight: 400; margin-left: .2em; font-size: .72em; }
    .today .v.acc { color: var(--nf-acc, #7cffb2); }
    .today .l { font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: var(--nf-txt-mute, #5f6f68); white-space: nowrap; }
    .today { grid-template-columns: repeat(5, 1fr); cursor: pointer; -webkit-tap-highlight-color: transparent; }
    .today .v.cost { color: var(--nf-txt, #e8f5ee); }
    .ptabs { position: absolute; left: 50%; transform: translate(-50%, -50%); display: flex; gap: 2px; padding: 2px;
      border-radius: 999px; background: var(--nf-tabs, rgba(10,15,20,.92)); box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .08); cursor: pointer;
      -webkit-tap-highlight-color: transparent; }
    .ptabs span { font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: var(--nf-txt-mute, #5f6f68);
      padding: 3px 8px; border-radius: 999px; transition: color .2s cubic-bezier(.22,1,.36,1), background .2s cubic-bezier(.22,1,.36,1); }
    .ptabs span.on { color: var(--nf-acc-ink, #04140d); background: var(--nf-acc, #7cffb2); }
    .src.solar .fc { font-size: 9px; color: var(--nf-txt-dim, #93a79d); margin-top: 2px;
      font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); font-variant-numeric: tabular-nums; }
    .src.solar .fc b { color: var(--nf-acc, #7cffb2); font-weight: 500; }
    .empty { display: flex; gap: 14px; align-items: center; padding: 18px 20px; color: var(--nf-txt-dim, #93a79d); font-size: 13px; line-height: 1.5; }
    .empty b { color: var(--nf-txt, #e8f5ee); }
    .empty ha-icon { --mdc-icon-size: 32px; color: var(--nf-acc, #7cffb2); flex: none; }
  `;

  class NullglowFlowCard extends HTMLElement {
    // Kartenauswahl: Vorschlag aus dem Energie-Dashboard; der Editor ergänzt fehlende Felder
    static async getStubConfig(hass) {
      try { return await detectConfig(hass); } catch (e) { return {}; }
    }

    static getConfigElement() {
      return document.createElement("nullglow-flow-card-editor");
    }

    setConfig(config) {
      if (!config) throw new Error("nullglow-flow-card: keine Konfiguration");
      this._cfg = {
        height: 260, solar_peak: 800, warn_import: 2000, ...config,
        solar: list(config.solar), grid: list(config.grid), grid_export: list(config.grid_export),
        consumers: (config.consumers || []).map((c) => (typeof c === "string" ? { entity: c } : c))
          .concat(config.other ? [{ name: "Sonstige", icon: "mdi:dots-horizontal-circle-outline", ...config.other, virtual: true }] : []),
        today: config.today ? { price: 0, ...config.today, solar: list(config.today.solar),
          import: list(config.today.import), export: list(config.today.export) } : null,
        forecast: config.forecast || null,
      };
      this._build();
    }

    set hass(h) {
      this._hass = h;
      this._read();
    }

    getCardSize() {
      return Math.ceil((this._cfg?.height || 260) / 50);
    }

    getGridOptions() {
      return { columns: 12, min_columns: 6 };
    }

    connectedCallback() {
      this._visible = true;
      this._io = new IntersectionObserver((e) => { this._visible = e.some((x) => x.isIntersecting); this._kick(); });
      if (this._wrap) this._io.observe(this._wrap);
      this._onVis = () => this._kick();
      document.addEventListener("visibilitychange", this._onVis);
      this._onDesign = () => setTimeout(() => this._readColors(), 200);   // Design gewechselt (nullglow-design.js)
      window.addEventListener("nullglow-design", this._onDesign);
      this._kick();
    }

    disconnectedCallback() {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
      this._io?.disconnect();
      document.removeEventListener("visibilitychange", this._onVis);
      window.removeEventListener("nullglow-design", this._onDesign);
    }

    // ---------- Aufbau ----------
    _build() {
      const c = this._cfg;
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      if (!c.solar.length && !c.grid.length) { // frisch eingefügt: Hinweis statt Fehlerkarte
        this._ro?.disconnect(); this._io?.disconnect();
        this._wrap = null; this._flows = null; this._w = 0;
        this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card class="card"><div class="empty">
          <ha-icon icon="mdi:solar-power-variant"></ha-icon><div><b>Nullglow Flow</b><br>
          Karte bearbeiten → „Automatisch erkennen“ oder Solar- bzw. Netz-Sensor wählen.</div></div></ha-card>`;
        return;
      }
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = `<div class="wrap" style="height:${c.height}px"><canvas></canvas></div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._wrap = card.querySelector(".wrap");
      this._cv = card.querySelector("canvas");
      this._ctx = this._cv.getContext("2d");
      this._reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

      const mk = (key, cls, icon, name, entity) => {
        const n = document.createElement("div");
        n.className = `node ${cls}`;
        n.innerHTML = `<div class="disc"><ha-icon icon="${esc(icon)}"></ha-icon></div><div class="meta"></div>`;
        if (entity) n.querySelector(".disc").addEventListener("click", () =>
          this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: entity }, bubbles: true, composed: true })));
        this._wrap.appendChild(n);
        return { key, el: n, disc: n.querySelector(".disc"), meta: n.querySelector(".meta"), name: esc(name), entity, x: 0, y: 0, r: 20, shown: "" };
      };
      this._nodes = {
        solar: c.solar.length ? mk("solar", "src solar", c.solar_icon || "mdi:solar-power-variant", c.solar_name || "Solar", c.solar[0]) : null,
        grid: c.grid.length ? mk("grid", "src grid", c.grid_icon || "mdi:transmission-tower", c.grid_name || "Netz", c.grid[0]) : null,
        house: mk("house", "house", c.house_icon || "mdi:home-lightning-bolt-outline", "Haus", null),
        cons: c.consumers.map((x, i) => mk("c" + i, "cons", x.icon || "mdi:power-plug", x.name || "", x.entity)), // ohne Namen: Anzeigename aus HA
      };
      this._nodes.house.disc.innerHTML = `<ha-icon icon="${esc(c.house_icon || "mdi:home-lightning-bolt-outline")}"></ha-icon><div class="in"></div>`;
      this._strip = null;
      if (c.today) {
        this._strip = document.createElement("div");
        this._strip.className = "today";
        this._wrap.appendChild(this._strip);
      }
      this._period = "day"; this._bal = {}; this._balAt = {};
      this._today = null; this._todayAt = 0;
      if (this._strip) {
        this._tabs = document.createElement("div");
        this._tabs.className = "ptabs";
        this._tabs.innerHTML = '<span data-p="day">heute</span><span data-p="week">Woche</span><span data-p="month">Monat</span>';
        this._wrap.appendChild(this._tabs);
        const cycle = (ev) => {
          const p = ev.target?.dataset?.p;
          const order = ["day", "week", "month"];
          this._setPeriod(p || order[(order.indexOf(this._period) + 1) % 3]);
        };
        this._strip.addEventListener("click", cycle);
        this._tabs.addEventListener("click", cycle);
      }

      // Ströme: Werte (W) werden weich nachgeführt, Partikel entstehen proportional
      const flow = (from, to, kind) => ({ from, to, kind, target: 0, w: 0, acc: 0, parts: [], path: null });
      const N = this._nodes;
      this._flows = [];
      if (N.solar) this._flows.push(flow(N.solar, N.house, "solar"));
      if (N.solar && N.grid) this._flows.push(flow(N.solar, N.grid, "export"));
      if (N.grid) this._flows.push(flow(N.grid, N.house, "import"));
      N.cons.forEach((n, i) => this._flows.push(flow(N.house, n, "cons" + i)));

      this._v = { solar: 0, grid: 0, house: 0, share: 0, cons: c.consumers.map(() => 0) };
      this._d = { solar: 0, grid: 0, house: 0, share: 0, cons: c.consumers.map(() => 0) }; // angezeigte (gezählte) Werte
      this._dToday = 0; // angezeigte Autarkie heute
      this._halo = 0; this._flash = 0; this._gridSign = 0; this._na = {};

      this._ro?.disconnect();
      this._ro = new ResizeObserver(() => this._layout());
      this._ro.observe(this._wrap);
      if (this.isConnected) { this._io?.disconnect(); this._io?.observe(this._wrap); }
      this._read();
    }

    _readColors() {
      const cs = getComputedStyle(this), get = (v) => cs.getPropertyValue(v).trim();
      this._rgb = { acc: toRgb(get("--nf-acc"), RGB.acc), txt: toRgb(get("--nf-txt"), RGB.txt), warn: toRgb(get("--nf-warn"), RGB.warn) };
      this._light = get("--ng-is-light") === "1";   // helles Design: Leuchtpunkte normal statt additiv mischen
      if (this._light) this._rgb.txt = toRgb(get("--nf-txt-dim"), this._rgb.txt);   // Netzbezug grau statt Tintenschwarz
      this._colAt = Date.now();
    }

    _layout() {
      this._readColors();
      const w = this._wrap.clientWidth, hAll = this._wrap.clientHeight;
      if (!w || !hAll) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      this._cv.width = Math.round(w * dpr); this._cv.height = Math.round(hAll * dpr);
      this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this._w = w; this._h = hAll;
      // Tagesbilanz-Leiste unten; die Knoten verteilen sich auf den Rest
      const stripH = this._strip ? clamp(Math.round(hAll * 0.16), 54, 64) : 0;
      if (this._strip) {
        this._strip.style.height = `${stripH}px`;
        this._strip.style.fontSize = `${clamp(Math.round(w * 0.034), 11, 16)}px`;
      }
      const h = hAll - stripH;
      if (this._tabs) this._tabs.style.top = `${h}px`;

      const N = this._nodes, m = Math.min(w, h), hasC = N.cons.length > 0;
      const rS = clamp(m * 0.105, 20, 36), rH = clamp(m * 0.15, 30, 54), rC = clamp(m * 0.055, 13, 22);
      // Verbraucher rechts mit Platz für „11.000 W“ / „WASCHM. 1“ neben dem Knoten
      const xc = w - rC - Math.max(66, w * 0.12), xs = Math.max(w * (hasC ? 0.14 : 0.2), rS + 24), xh = hasC ? (xs + xc) / 2 : w * 0.7;
      const place = (n, x, y, r, ic) => {
        if (!n) return;
        Object.assign(n, { x, y, r });
        n.el.style.left = `${x}px`; n.el.style.top = `${y}px`;
        n.disc.style.width = n.disc.style.height = `${2 * r}px`;
        n.disc.style.setProperty("--ic", `${ic}px`);
        n.meta.style.top = `${r + 5}px`;
      };
      const single = !(N.solar && N.grid);
      place(N.solar, xs, h * (single ? 0.45 : 0.25), rS, Math.round(rS * 0.82));
      place(N.grid, xs, h * (single ? 0.45 : 0.71), rS, Math.round(rS * 0.82));
      place(N.house, xh, h * 0.46, rH, Math.round(rH * 0.4));
      N.house.el.querySelector(".in").style.fontSize = `${Math.round(rH * 0.42)}px`;
      N.house.meta.style.top = `${rH + 9}px`;
      const n = N.cons.length, top = h * 0.14, bot = h * 0.86;
      N.cons.forEach((c, i) => {
        place(c, xc, n === 1 ? h * 0.46 : top + (i * (bot - top)) / (n - 1), rC, Math.round(rC * 1.05));
        c.meta.style.top = "0px";
        c.meta.style.left = `${rC + 7}px`;
      });
      const fs = clamp(m * 0.05, 11, 15);
      [N.solar, N.grid].forEach((x) => x && (x.meta.style.fontSize = `${fs}px`));
      N.house.meta.style.fontSize = `${fs - 1}px`;
      N.cons.forEach((x) => (x.meta.style.fontSize = `${fs - 2}px`));

      // Pfade: S-Kurven von links nach rechts, Einspeisung als Bogen links außen
      for (const f of this._flows) {
        const a = f.from, b = f.to;
        let c1, c2;
        if (f.kind === "export") {
          const bulge = a.x - 6; // weit nach links, damit der Bogen an den Beschriftungen vorbeiläuft
          c1 = { x: a.x - bulge, y: a.y + (b.y - a.y) * 0.35 };
          c2 = { x: b.x - bulge, y: b.y - (b.y - a.y) * 0.35 };
        } else {
          const dx = b.x - a.x;
          c1 = { x: a.x + dx * 0.55, y: a.y };
          c2 = { x: b.x - dx * 0.5, y: b.y };
        }
        f.path = makePath(edge(a, c1.x, c1.y), c1, c2, edge(b, c2.x, c2.y));
        f.parts = [];
      }
      this._kick();
    }

    // ---------- Daten ----------
    _num(id) {
      const s = this._hass?.states?.[id];
      if (!s) return null;
      const v = parseFloat(s.state);
      if (!isFinite(v)) return null;
      return /^kW$/i.test(s.attributes?.unit_of_measurement || "") ? v * 1000 : v;
    }

    _read() {
      if (!this._hass || !this._cfg || !this._flows) return;
      if (!this._colAt || Date.now() - this._colAt > 10000) this._readColors();   // Design-Wechsel ohne Neuladen
      const c = this._cfg, v = this._v, na = (this._na = {});
      let s = 0;
      for (const id of c.solar) { const x = this._num(id); if (x === null) na.solar = true; else s += x; }
      let g = 0;
      for (const id of c.grid) { const x = this._num(id); if (x === null) na.grid = true; else g += x; }
      if (c.grid_invert) g = -g;
      for (const id of c.grid_export) { const x = this._num(id); if (x === null) na.grid = true; else g -= Math.abs(x); }
      v.solar = Math.max(0, s);
      v.grid = g;
      v.house = Math.max(0, v.solar + g);
      const sToH = Math.min(v.solar, v.house);
      v.share = v.house > 1 ? sToH / v.house : v.solar > 1 ? 1 : 0;
      v.cons = c.consumers.map((x, i) => { if (x.virtual) return 0; const w = this._num(x.entity); na["c" + i] = w === null; return Math.max(0, w || 0); });
      c.consumers.forEach((x, i) => { // „Sonstige“: was das Haus sonst noch braucht
        if (x.virtual) v.cons[i] = Math.max(0, v.house - v.cons.reduce((a, w, j) => a + (c.consumers[j].virtual ? 0 : w), 0));
      });

      // Netz-Richtungswechsel (mit 25 W Hysterese) -> Blitz am Netz-Knoten
      const sign = g > 25 ? 1 : g < -25 ? -1 : this._gridSign;
      if (this._gridSign && sign !== this._gridSign) this._flash = 1;
      this._gridSign = sign;

      if (!this._balAt[this._period] || Date.now() - this._balAt[this._period] > 5 * 60 * 1000) this._fetchBalance(this._period);

      for (const f of this._flows) {
        f.target = f.kind === "solar" ? sToH : f.kind === "export" ? Math.max(0, -g)
          : f.kind === "import" ? Math.max(0, g) : v.cons[+f.kind.slice(4)];
      }
      this._kick();
    }

    _setPeriod(p) {
      this._period = p;
      clearTimeout(this._periodTimer);
      if (p !== "day") this._periodTimer = setTimeout(() => this._setPeriod("day"), 2 * 60 * 1000); // Kiosk: zurück auf heute
      if (!this._balAt[p] || Date.now() - this._balAt[p] > 5 * 60 * 1000) this._fetchBalance(p);
      this._today = this._bal[p] || null;
      this._kick();
    }

    // Bilanz seit Beginn des Zeitraums aus der HA-Statistik; alle 5 Min neu
    async _fetchBalance(period) {
      const c = this._cfg, t = c.today;
      if (!this._hass?.callWS || this._balLoading?.[period]) return;
      const cons = c.consumers.map((x) => x.energy).filter(Boolean);
      const net = !!(t?.net && c.grid.length);
      const ids = [...new Set([...(t?.solar || []), ...(net ? [] : [...(t?.import || []), ...(t?.export || [])]), ...cons].filter(Boolean))];
      if (!ids.length && !net) { this._noBal = true; this._kick(); return; } // Bilanz an, aber keine Zähler gewählt
      this._noBal = false;
      this._balLoading = { ...(this._balLoading || {}), [period]: true };
      this._balAt[period] = Date.now();
      try {
        const start = new Date(); start.setHours(0, 0, 0, 0);
        if (period === "week") start.setDate(start.getDate() - ((start.getDay() + 6) % 7)); // ab Montag
        if (period === "month") start.setDate(1);
        const sp = period === "month" ? "hour" : "5minute"; // Kurzzeit-Statistik reicht nur ~10 Tage zurück
        const res = ids.length ? await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: start.toISOString(),
          statistic_ids: ids, period: sp, types: ["change"] }) : {};
        const sum = (id) => (res[id] || []).reduce((a, p) => a + (p.change || 0), 0);
        const sumAll = (list) => list.reduce((a, id) => a + sum(id), 0);
        let imp = 0, exp = 0;
        if (net) { // je 5 Min: Summe der Phasen (W) -> positiv Bezug, negativ Einspeisung
          const pw = await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: start.toISOString(),
            statistic_ids: [...c.grid, ...c.grid_export], period: sp, types: ["mean"] });
          const byT = new Map(), add = (id, k) => {
            const u = /^kW$/i.test(this._hass.states[id]?.attributes?.unit_of_measurement || "") ? 1000 : 1;
            for (const p of pw[id] || []) byT.set(p.start, (byT.get(p.start) || 0) + k(p.mean || 0) * u);
          };
          for (const id of c.grid) add(id, (w) => (c.grid_invert ? -w : w));
          for (const id of c.grid_export) add(id, (w) => -Math.abs(w));
          const kw = sp === "hour" ? 1 / 1000 : 1 / (1000 * 12); // W über 5 Min bzw. 1 h -> kWh
          for (const w of byT.values()) { if (w > 0) imp += w * kw; else exp -= w * kw; }
        } else {
          imp = sumAll(t?.import || []); exp = sumAll(t?.export || []);
        }
        this._bal[period] = {
          solar: sumAll(t?.solar || []), imp, exp,
          cons: c.consumers.map((x) => (x.energy && res[x.energy] ? sum(x.energy) : null)),
        };
        const b = this._bal[period];
        const measured = b.cons.reduce((a, e, j) => a + (c.consumers[j].virtual || e === null ? 0 : e), 0);
        c.consumers.forEach((x, j) => { if (x.virtual) b.cons[j] = Math.max(0, b.solar + b.imp - b.exp - measured); });
      } catch (e) {
        this._bal[period] = null;
      }
      this._balLoading[period] = false;
      if (period === this._period) this._today = this._bal[period];
      this._kick();
    }

    // ---------- Animation ----------
    _kick() {
      if (this._raf || !this.isConnected || !this._w) return;
      this._last = 0;
      this._raf = requestAnimationFrame((t) => this._tick(t));
    }

    _tick(ts) {
      this._raf = 0;
      if (document.hidden || !this._visible || !this.isConnected) return; // pausiert; _kick() startet neu
      this._raf = requestAnimationFrame((t) => this._tick(t));
      if (this._last && ts - this._last < 1000 / 30 - 2) return; // max. 30 fps
      const dt = this._last ? Math.min(0.1, (ts - this._last) / 1000) : 1 / 30;
      this._last = ts;
      this._step(dt);
      this._draw();
    }

    _step(dt) {
      const c = this._cfg, v = this._v, d = this._d;
      const ease = 1 - Math.exp(-dt * 5); // weiches Nachführen der Zahlen und Ströme
      for (const k of ["solar", "grid", "house", "share"]) d[k] += (v[k] - d[k]) * ease;
      d.cons = d.cons.map((x, i) => x + (v.cons[i] - x) * ease);
      this._halo += dt * (0.12 + 0.9 * Math.sqrt(clamp(d.solar / c.solar_peak, 0, 1.5)));
      this._flash = Math.max(0, this._flash - dt * 1.3);

      for (const f of this._flows) {
        f.w += (f.target - f.w) * ease;
        if (!f.path) continue;
        const W = f.w, I = Math.sqrt(clamp(W / 8000, 0, 1));
        if (!this._reduced && W > 2) {
          f.acc += dt * Math.min(34, 1.25 * Math.sqrt(W / 10)); // Partikel pro Sekunde
          while (f.acc >= 1 && f.parts.length < MAX_PARTICLES) {
            f.acc -= 1;
            let rgb = this._rgb.acc;
            if (f.kind === "import") rgb = W > c.warn_import ? this._rgb.warn : this._rgb.txt;
            else if (f.kind.startsWith("cons")) rgb = Math.random() < d.share ? this._rgb.acc : this._rgb.txt;
            const speed = (45 + 125 * I) * (0.85 + Math.random() * 0.3);
            f.parts.push({ d: Math.random() * speed * dt, v: speed, s: 1.3 + 1.9 * I, off: (Math.random() - 0.5) * (2 + 9 * I), rgb });
          }
          f.acc = Math.min(f.acc, 1);
        }
        for (const p of f.parts) p.d += p.v * dt;
        f.parts = f.parts.filter((p) => p.d < f.path.len);
      }
      this._render();
    }

    _draw() {
      const ctx = this._ctx, c = this._cfg, d = this._d, N = this._nodes;
      ctx.clearRect(0, 0, this._w, this._h);

      // Linien
      for (const f of this._flows) {
        if (!f.path) continue;
        const I = clamp(Math.sqrt(f.w / REF_W), 0, 1), on = f.w > 2;
        const rgb = f.kind === "import" && f.w > c.warn_import ? this._rgb.warn : f.kind === "import" ? this._rgb.txt : this._rgb.acc;
        const P = f.path;
        ctx.beginPath();
        ctx.moveTo(P.p0.x, P.p0.y);
        ctx.bezierCurveTo(P.p1.x, P.p1.y, P.p2.x, P.p2.y, P.p3.x, P.p3.y);
        if (on) {
          ctx.setLineDash([]);
          ctx.lineCap = "round";
          ctx.strokeStyle = `rgba(${rgb},${0.05 + 0.08 * I})`;
          ctx.lineWidth = 3 + 8 * I;
          ctx.stroke();
          ctx.strokeStyle = `rgba(${rgb},${0.16 + 0.3 * I})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else {
          ctx.setLineDash([2, 5]);
          ctx.strokeStyle = `rgba(${this._rgb.txt},0.08)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);

      // Partikel mit kurzem Schweif
      ctx.globalCompositeOperation = this._light ? "source-over" : "lighter";
      for (const f of this._flows) {
        for (const p of f.parts) {
          const img = sprite(p.rgb, this._light), sz = p.s * 7;
          for (let k = 3; k >= 0; k--) {
            const q = f.path.at(p.d - k * p.v * 0.022);
            ctx.globalAlpha = k ? 0.34 / k : 1;
            const s = k ? sz * (1 - k * 0.16) : sz;
            ctx.drawImage(img, q.x + q.nx * p.off - s / 2, q.y + q.ny * p.off - s / 2, s, s);
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      // Sonnenkranz: dreht schneller, je mehr erzeugt wird
      if (N.solar && d.solar > 3) {
        const I = clamp(d.solar / c.solar_peak, 0, 1.2), n = N.solar;
        ctx.strokeStyle = `rgba(${this._rgb.acc},${0.25 + 0.55 * Math.min(I, 1)})`;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        for (let i = 0; i < 12; i++) {
          const a = this._halo + (i * Math.PI) / 6, r1 = n.r + (this._fc ? 9 : 5), r2 = r1 + 3 + 7 * Math.min(I, 1);
          ctx.beginPath();
          ctx.moveTo(n.x + Math.cos(a) * r1, n.y + Math.sin(a) * r1);
          ctx.lineTo(n.x + Math.cos(a) * r2, n.y + Math.sin(a) * r2);
          ctx.stroke();
        }
      }

      // Prognose: dünner Bogen um den Solar-Knoten = heute erzeugt / heute erwartet
      if (N.solar && this._fc) {
        const n = N.solar, rf = n.r + 4;
        ctx.lineCap = "round";
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(${this._rgb.txt},0.08)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, rf, 0, Math.PI * 2);
        ctx.stroke();
        if (this._fc.frac > 0.005) {
          ctx.strokeStyle = `rgba(${this._rgb.acc},0.75)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, rf, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * clamp(this._fc.frac, 0, 1));
          ctx.stroke();
        }
      }

      // Richtungswechsel am Netz: Ring läuft nach außen
      if (N.grid && this._flash > 0) {
        const n = N.grid, k = 1 - this._flash;
        ctx.strokeStyle = `rgba(${this._gridSign < 0 ? this._rgb.acc : this._rgb.txt},${this._flash * 0.8})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 3 + k * 26, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Autarkie-Ring ums Haus
      const H = N.house, rr = H.r + 5;
      ctx.lineCap = "round";
      ctx.lineWidth = 3;
      ctx.strokeStyle = `rgba(${this._rgb.txt},0.07)`;
      ctx.beginPath();
      ctx.arc(H.x, H.y, rr, 0, Math.PI * 2);
      ctx.stroke();
      if (d.share > 0.005) {
        ctx.strokeStyle = `rgba(${this._rgb.acc},0.9)`;
        ctx.beginPath();
        ctx.arc(H.x, H.y, rr, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * clamp(d.share, 0, 1));
        ctx.stroke();
      }
      if (this._today) { // äußerer dünner Ring: Autarkie heute
        const r2 = rr + 6;
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = `rgba(${this._rgb.txt},0.05)`;
        ctx.beginPath();
        ctx.arc(H.x, H.y, r2, 0, Math.PI * 2);
        ctx.stroke();
        if (this._dToday > 0.005) {
          ctx.strokeStyle = `rgba(${this._rgb.acc},0.45)`;
          ctx.beginPath();
          ctx.arc(H.x, H.y, r2, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * clamp(this._dToday, 0, 1));
          ctx.stroke();
        }
      }
    }

    // Zahlen, Glow und Zustände der Knoten (DOM nur bei Änderung anfassen)
    _render() {
      const c = this._cfg, d = this._d, v = this._v, N = this._nodes, na = this._na;
      const set = (n, html, cls, g) => {
        if (!n) return;
        if (n.shown !== html) { n.meta.innerHTML = html; n.shown = html; }
        const k = `node ${n.el.dataset.base || (n.el.dataset.base = n.el.className)} ${cls}`, gs = g.toFixed(2);
        if (n.cls !== k) { n.el.className = k; n.cls = k; }       // nur bei Änderung schreiben (sonst Stil-Neuberechnung je Bild)
        if (n.g !== gs) { n.el.style.setProperty("--g", gs); n.g = gs; }
      };
      const W = (x) => `<span class="val">${fmt(x)}<small>W</small></span>`;
      const kwh0 = (x) => x.toLocaleString("de-DE", { minimumFractionDigits: x < 10 ? 1 : 0, maximumFractionDigits: x < 10 ? 1 : 0 });
      this._fc = null;
      let fcHtml = "";
      if (c.forecast) { // Prognose immer auf „heute“ bezogen, unabhängig vom gewählten Zeitraum
        const ft = this._num(c.forecast.today), fm = c.forecast.tomorrow ? this._num(c.forecast.tomorrow) : null;
        const made = this._bal.day ? this._bal.day.solar : null;
        if (ft !== null && ft > 0) {
          this._fc = { frac: made !== null ? made / ft : 0 };
          fcHtml = `<div class="fc">${made !== null ? `<b>${kwh0(made)}</b> / ` : ""}${kwh0(ft)} kWh</div>`
            + (fm !== null ? `<div class="fc">morgen ${kwh0(fm)} kWh</div>` : "");
        }
      }
      if (N.solar) {
        const g = clamp(d.solar / c.solar_peak, 0, 1);
        set(N.solar, `${na.solar ? '<span class="val">–</span>' : W(d.solar)}<div class="lbl">${N.solar.name}</div>${fcHtml}`,
          `${v.solar > 3 ? "on" : ""} ${na.solar ? "na" : ""}`, g);
      }
      if (N.grid) {
        const imp = d.grid > 25, exp = d.grid < -25;
        const lbl = exp ? "Einspeisung" : imp ? "Bezug" : N.grid.name;
        set(N.grid, `${na.grid ? '<span class="val">–</span>' : W(Math.abs(d.grid))}<div class="lbl">${lbl}</div>`,
          `${exp ? "on" : ""} ${imp && v.grid > c.warn_import ? "warn" : ""} ${na.grid ? "na" : ""}`,
          exp ? clamp(-d.grid / REF_W, 0.15, 1) : 0);
      }
      const inner = `${fmt(d.house)}<small>W</small>`;
      const hin = N.house.el.querySelector(".in");
      if (hin.dataset.v !== inner) { hin.innerHTML = inner; hin.dataset.v = inner; }
      const T = this._today, kwh = (x) => x.toLocaleString("de-DE", { minimumFractionDigits: x < 10 ? 1 : 0, maximumFractionDigits: x < 10 ? 1 : 0 });
      let used = 0, selfUse = 0, autToday = null;
      if (T) {
        used = Math.max(0, T.solar + T.imp - T.exp);
        selfUse = Math.max(0, Math.min(T.solar - T.exp, used));
        autToday = used > 0.01 ? selfUse / used : T.solar > 0.01 ? 1 : 0;
        this._dToday += (autToday - this._dToday) * 0.08;
      }
      const pname = { day: "heute", week: "Woche", month: "Monat" }[this._period];
      set(N.house, `<div class="lbl">Autarkie ${Math.round(clamp(d.share, 0, 1) * 100)} %${autToday === null ? "" : ` · ${pname} ${Math.round(autToday * 100)} %`}</div>`,
        d.share > 0.02 ? "on" : "", clamp(d.share, 0, 1) * 0.8);
      N.cons.forEach((n, i) => {
        const w = d.cons[i], idle = v.cons[i] < 3;
        const e = T && T.cons[i] !== null && T.cons[i] !== undefined ? `<div class="kwh">${kwh(T.cons[i])} kWh</div>` : "";
        const nm = n.name || esc(this._hass?.states?.[n.entity]?.attributes?.friendly_name || n.entity || "");
        set(n, `${na["c" + i] ? '<span class="val">–</span>' : W(w)}<div class="lbl">${nm}</div>${e}`,
          `${idle ? "idle" : "on"} ${na["c" + i] ? "na" : ""}`, idle ? 0 : clamp(Math.sqrt(w / REF_W), 0.1, 1));
      });
      if (this._strip) {
        const money = (x) => x.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const price = this._cfg.today.price || 0;
        const html = !T ? `<div style="grid-column: 1 / -1"><span class="l">${this._noBal ? "Bilanz: Zähler im Editor wählen" : "Bilanz lädt …"}</span></div>` : `
          <div><span class="v acc">${kwh(T.solar)}<small>kWh</small></span><span class="l">erzeugt</span></div>
          <div><span class="v">${kwh(used)}<small>kWh</small></span><span class="l">verbraucht</span></div>
          <div><span class="v">${kwh(T.imp)}<small>↓</small> ${kwh(T.exp)}<small>↑</small></span><span class="l">Netz kWh</span></div>
          <div><span class="v cost">${money(T.imp * price)}<small>€</small></span><span class="l">Netzkosten</span></div>
          <div><span class="v acc">${money(selfUse * price)}<small>€</small></span><span class="l">gespart</span></div>`;
        if (this._strip.dataset.v !== html) { this._strip.innerHTML = html; this._strip.dataset.v = html; }
        if (this._tabs && this._tabs.dataset.p !== this._period) {
          this._tabs.dataset.p = this._period;
          for (const sp of this._tabs.children) sp.classList.toggle("on", sp.dataset.p === this._period);
        }
      }
    }
  }

  // ---------- Automatisch erkennen (Energie-Dashboard, sonst Namen/Einheiten) ----------
  const ICON_GUESS = [
    [/wasch/i, "mdi:washing-machine"], [/trock/i, "mdi:tumble-dryer"], [/spül|dish/i, "mdi:dishwasher"],
    [/wallbox|ladestation|\bev\b|auto|car/i, "mdi:ev-station"], [/server|nas\b|rack/i, "mdi:server"],
    [/kühl|gefrier|fridge|freezer/i, "mdi:fridge"], [/\btv\b|fernseh/i, "mdi:television"],
    [/\bpc\b|computer|rechner|gaming/i, "mdi:desktop-tower-monitor"], [/wärmepumpe|heat.?pump/i, "mdi:heat-pump"],
    [/klima|air.?con/i, "mdi:air-conditioner"], [/boiler|warmwasser|heizstab/i, "mdi:water-boiler"],
    [/heiz/i, "mdi:radiator"], [/licht|lamp|light/i, "mdi:lightbulb"], [/pool|pumpe|pump/i, "mdi:pump"],
    [/kaffee|coffee/i, "mdi:coffee-maker"], [/herd|ofen|oven/i, "mdi:stove"], [/bett|bed/i, "mdi:bed"],
    [/akku|batter|speicher/i, "mdi:home-battery"],
  ];
  const guessIcon = (txt) => (ICON_GUESS.find(([re]) => re.test(txt || "")) || [0, "mdi:power-plug"])[1];
  const NOISE = /\b(shelly\w*|plug\w*|steckdose|smart|switch|sonoff|tasmota|tapo|tplink|kasa|fritz\w*|[0-9a-f]{8,}|leistung|power|energie|energy)\b/gi;
  // „Waschraum Shelly Waschmaschine1“ -> „Waschmaschine1“, „Schlafzimmer Bett Unterboden“ -> „Bett Unterboden“
  const shortName = (n) => {
    const w = String(n || "").replace(/[_-]+/g, " ").replace(NOISE, " ").trim().split(/\s+/).filter(Boolean);
    if (!w.length) return "";
    const last = w[w.length - 1];
    return (last.length < 5 && w.length > 1 ? w.slice(-2).join(" ") : last).replace(/^./, (ch) => ch.toUpperCase());
  };

  function sensorTools(hass) {
    const st = hass.states, ents = hass.entities || {}, devs = hass.devices || {};
    const unit = (id) => st[id]?.attributes?.unit_of_measurement || "";
    const isPower = (id) => !!st[id] && id.startsWith("sensor.") && (st[id].attributes.device_class === "power" || /^(W|kW)$/.test(unit(id)));
    const isEnergy = (id) => !!st[id] && id.startsWith("sensor.") && (st[id].attributes.device_class === "energy" || /^(Wh|kWh)$/.test(unit(id)));
    const prefix = (a, b) => { let i = 0; while (i < a.length && a[i] === b[i]) i++; return i; };
    // passender Sensor am selben Gerät (bei Shelly 3EM: gleiche Phase = längster gemeinsamer Namensanfang)
    const sibling = (id, test) => {
      const dev = ents[id]?.device_id;
      const pool = dev ? Object.values(ents).filter((e) => e.device_id === dev).map((e) => e.entity_id) : [];
      return pool.filter(test).sort((a, b) => prefix(b, id) - prefix(a, id))[0] || null;
    };
    const nameOf = (id) => {
      const e = ents[id], d = e && devs[e.device_id];
      return (d && (d.name_by_user || d.name)) || st[id]?.attributes?.friendly_name || id;
    };
    return { st, ents, isPower, isEnergy, sibling, nameOf, powerOf: (id) => sibling(id, isPower), energyOf: (id) => sibling(id, isEnergy) };
  }

  async function detectConfig(hass) {
    const T = sensorTools(hass), out = { solar: [], grid: [], grid_export: [], consumers: [] };
    const today = { solar: [], import: [], export: [] };
    let prefs = null, price = null;
    try { prefs = await hass.callWS({ type: "energy/get_prefs" }); } catch (e) { /* Energie-Dashboard nicht eingerichtet */ }
    for (const s of prefs?.energy_sources || []) {
      const pc = s.power_config || {};
      if (s.type === "solar") {
        if (s.stat_energy_from) today.solar.push(s.stat_energy_from);
        const p = pc.stat_rate || s.stat_rate || (s.stat_energy_from && T.powerOf(s.stat_energy_from));
        if (p) out.solar.push(p);
      } else if (s.type === "grid") { // neues Format: ein Eintrag je Zähler; altes: flow_from/flow_to-Listen
        const from = [s.stat_energy_from, ...(s.flow_from || []).map((f) => f.stat_energy_from)].filter(Boolean);
        const to = [s.stat_energy_to, ...(s.flow_to || []).map((f) => f.stat_energy_to)].filter(Boolean);
        today.import.push(...from); today.export.push(...to);
        if (price === null) price = [s.number_energy_price, ...(s.flow_from || []).map((f) => f.number_energy_price)].find((x) => typeof x === "number") ?? null;
        if (pc.stat_rate || s.stat_rate) out.grid.push(pc.stat_rate || s.stat_rate);
        else if (pc.stat_rate_inverted) { out.grid.push(pc.stat_rate_inverted); out.grid_invert = true; }
        else if (pc.stat_rate_from) { out.grid.push(pc.stat_rate_from); if (pc.stat_rate_to) out.grid_export.push(pc.stat_rate_to); }
        else for (const e of from) { const p = T.powerOf(e); if (p && !out.grid.includes(p)) out.grid.push(p); }
      }
    }
    for (const d of prefs?.device_consumption || []) {
      const p = d.stat_rate || (d.stat_consumption && T.powerOf(d.stat_consumption));
      if (!p || out.consumers.length >= 6) continue;
      const full = d.name || T.nameOf(p);
      out.consumers.push({ entity: p, name: shortName(full) || `Verbraucher ${out.consumers.length + 1}`,
        icon: guessIcon(`${full} ${p}`), ...(d.stat_consumption ? { energy: d.stat_consumption } : {}) });
    }
    // Rückfall ohne Energie-Dashboard: nach Namen suchen
    const power = Object.keys(T.st).filter(T.isPower);
    const find = (re) => power.filter((id) => re.test(`${id} ${T.st[id].attributes.friendly_name || ""}`));
    if (!out.solar.length) {
      const hit = find(/solar|\bpv\b|_pv_|photovolt|wechselrichter|inverter|balkonkraftwerk|bkw|hoymiles|opendtu|ahoy|ecoflow|growatt|fronius|kostal/i)[0];
      if (hit) out.solar.push(hit);
    }
    if (!out.grid.length) {
      const phases = find(/phase_?[abc]\b|phase_?[abc]_|_l[123]_/i).filter((id) => !out.solar.includes(id));
      const grid = find(/netz|grid|bezug|hausanschluss|smart.?meter|stromz(ä|ae)hler|obis|3em|em3|tibber|power_consumption|total_power|gesamtleistung/i)
        .filter((id) => !out.solar.includes(id));
      if (phases.length === 3) out.grid.push(...phases);
      else if (grid[0]) out.grid.push(grid[0]);
    }
    // Solar-Prognose (Forecast.Solar / Solcast)
    const fc = Object.values(T.ents).filter((e) => /^(forecast_solar|solcast_solar)$/.test(e.platform)).map((e) => e.entity_id);
    const fToday = fc.find((id) => /energy_production_today$|forecast_today$/.test(id));
    const fTomorrow = fc.find((id) => /energy_production_tomorrow$|forecast_tomorrow$/.test(id));
    // Spitzenleistung aus den letzten 30 Tagen (für Glühen/Sonnenkranz)
    let peak = null;
    if (out.solar.length) try {
      const start = new Date(Date.now() - 30 * 864e5).toISOString();
      const r = await hass.callWS({ type: "recorder/statistics_during_period", start_time: start, statistic_ids: out.solar, period: "day", types: ["max"] });
      const u = /^kW$/i.test(T.st[out.solar[0]]?.attributes?.unit_of_measurement || "") ? 1000 : 1;
      const mx = Math.max(0, ...out.solar.flatMap((id) => (r[id] || []).map((p) => (p.max || 0) * u)));
      if (mx > 50) peak = Math.ceil(mx / 100) * 100;
    } catch (e) { /* keine Statistik */ }

    const cfg = {};
    if (out.solar.length) cfg.solar = out.solar.length === 1 ? out.solar[0] : out.solar;
    if (peak) cfg.solar_peak = peak;
    if (out.grid.length) cfg.grid = out.grid;
    if (out.grid_invert) cfg.grid_invert = true;
    if (out.grid_export.length) cfg.grid_export = out.grid_export;
    if (out.consumers.length) {
      cfg.consumers = out.consumers;
      cfg.other = { name: "Sonstige", icon: "mdi:dots-horizontal-circle-outline" };
    }
    if (today.solar.length || today.import.length) {
      cfg.today = { ...(today.solar.length ? { solar: today.solar.length === 1 ? today.solar[0] : today.solar } : {}),
        ...(today.import.length ? { import: today.import } : {}), ...(today.export.length ? { export: today.export } : {}),
        price: price ?? 0.35, ...(out.grid.length > 1 ? { net: true } : {}) };
    }
    if (fToday) cfg.forecast = { today: fToday, ...(fTomorrow ? { tomorrow: fTomorrow } : {}) };
    return cfg;
  }

  // ---------- Klick-Editor („Karte bearbeiten“) ----------
  const ED_STYLE = `
    :host { display: block; }
    .top { display: flex; gap: 12px; align-items: center; margin-bottom: 12px; flex-wrap: wrap; }
    .top .hint { flex: 1 1 220px; font-size: 13px; color: var(--secondary-text-color); line-height: 1.4; }
    .top .msg { flex-basis: 100%; font-size: 13px; color: var(--primary-color); }
    button.act { display: inline-flex; align-items: center; gap: 6px; font: inherit; font-size: 14px; font-weight: 500;
      padding: 8px 14px; border-radius: 18px; cursor: pointer; border: 1px solid var(--primary-color);
      background: transparent; color: var(--primary-color); }
    button.act.fill { background: var(--primary-color); color: var(--text-primary-color, #fff); }
    button.act ha-icon { --mdc-icon-size: 18px; }
    ha-expansion-panel, details.panel { display: block; margin-bottom: 8px; }
    details.panel { border: 1px solid var(--divider-color); border-radius: 12px; padding: 0 12px; }
    details.panel > summary { padding: 12px 0; cursor: pointer; font-weight: 500; }
    .inner { padding: 4px 0 12px; }
    .cons { border: 1px solid var(--divider-color); border-radius: 12px; padding: 8px 12px 4px; margin-bottom: 10px; }
    .cons .head { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; font-weight: 500; }
    .cons .head ha-icon.ic { --mdc-icon-size: 20px; color: var(--primary-color); }
    .cons .head .n { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .cons .head button { border: 0; background: none; color: var(--secondary-text-color); cursor: pointer; padding: 6px; border-radius: 50%; }
    .cons .head button:hover { background: var(--secondary-background-color); }
    .cons .head button[disabled] { opacity: .3; cursor: default; }
    .cons .head button ha-icon { --mdc-icon-size: 20px; }
    .note { font-size: 12px; color: var(--secondary-text-color); margin: 4px 0 10px; line-height: 1.4; }
    .sw { display: flex; align-items: center; gap: 10px; margin: 4px 0 8px; font-size: 14px; cursor: pointer; }
  `;
  const PANEL_TAG = () => (customElements.get("ha-expansion-panel") ? "ha-expansion-panel" : "details");
  const clone = (x) => JSON.parse(JSON.stringify(x ?? null));
  const empty = (v) => v === undefined || v === null || v === "" || (Array.isArray(v) && !v.length);

  class NullglowFlowCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._open = new Set(["src"]);
      this._all = false; // alle Sensoren statt nur passender Geräteklasse anbieten
    }

    setConfig(config) {
      const c = clone(config) || {};
      if (this._sent && JSON.stringify(c) === this._sent) return; // eigenes Echo: nicht neu aufbauen (Fokus, leere neue Zeilen)
      this._config = c;
      this._build();
    }

    set hass(h) {
      const first = !this._hass;
      this._hass = h;
      this.shadowRoot.querySelectorAll("ha-form").forEach((f) => { f.hass = h; });
      if (first && this._config) this._build();
      // frisch eingefügte Karte ohne Quellen: gleich einen Vorschlag machen
      if (!this._autoDone && this._config && empty(this._config.solar) && empty(this._config.grid)) { this._autoDone = true; this._detect(); }
    }

    // ---- Daten ----
    _emit() {
      const c = this._config;
      for (const k of Object.keys(c)) if (empty(c[k])) delete c[k];
      for (const k of ["today", "forecast", "other"]) if (c[k] && typeof c[k] === "object")
        for (const j of Object.keys(c[k])) if (empty(c[k][j])) delete c[k][j];
      if (Array.isArray(c.solar) && c.solar.length === 1) c.solar = c.solar[0];
      if (c.today && Array.isArray(c.today.solar) && c.today.solar.length === 1) c.today.solar = c.today.solar[0];
      const out = clone(c); // neue, noch leere Verbraucher-Zeilen nicht mitschicken
      if (out.consumers) { out.consumers = out.consumers.filter((x) => typeof x === "string" || x?.entity); if (!out.consumers.length) delete out.consumers; }
      this._sent = JSON.stringify(out);
      this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: out }, bubbles: true, composed: true }));
    }

    async _detect() {
      if (!this._hass) return;
      this._msg("Suche Sensoren …");
      let d;
      try { d = await detectConfig(this._hass); } catch (e) { this._msg("Automatische Erkennung fehlgeschlagen."); return; }
      const c = this._config, got = [];
      const take = (k, label) => { if (!empty(d[k]) && empty(c[k])) { c[k] = d[k]; got.push(label); } };
      take("solar", "Solar"); take("grid", "Netz");
      if (!empty(d.grid) && c.grid === d.grid) { if (d.grid_invert) c.grid_invert = true; if (d.grid_export) c.grid_export = d.grid_export; }
      if (d.solar_peak && (!c.solar_peak || c.solar === d.solar)) c.solar_peak = d.solar_peak;
      const have = new Set((c.consumers || []).map((x) => (typeof x === "string" ? x : x.entity)));
      const add = (d.consumers || []).filter((x) => !have.has(x.entity));
      if (add.length) { c.consumers = [...(c.consumers || []), ...add].slice(0, Math.max(6, (c.consumers || []).length)); got.push(`${add.length} Verbraucher`); }
      if (d.other && !c.other && add.length) c.other = d.other;
      take("today", "Bilanz"); take("forecast", "Prognose");
      this._msg(got.length ? `Übernommen: ${got.join(", ")}. Bitte prüfen, Namen nach Wunsch ändern.`
        : empty(c.solar) && empty(c.grid) ? "Nichts gefunden — Sensoren bitte unten auswählen." : "Alles schon eingetragen, nichts geändert.");
      this._build();
      this._emit();
    }

    // Abschnitt gerade eingeschaltet: leere Felder aus dem Vorschlag füllen
    async _prefill(key, label) {
      this._open.add(key);
      let d = {};
      try { d = (await detectConfig(this._hass))[key] || {}; } catch (e) { /* nichts gefunden */ }
      const c = this._config;
      if (!c[key]) return;
      for (const [k, v] of Object.entries(d)) if (empty(c[key][k])) c[key][k] = v;
      if (key === "today" && empty(c.today.price)) c.today.price = 0.35;
      this._msg(Object.keys(d).length ? `${label}: Sensoren vorgeschlagen — bitte prüfen.` : `${label}: bitte Sensoren wählen.`);
      this._build();
      this._emit();
    }

    _msg(t) { const m = this.shadowRoot.querySelector(".msg"); if (m) m.textContent = t; this._lastMsg = t; }

    // ---- Aufbau ----
    _ent(multiple, cls) {
      return { entity: { multiple, filter: this._all || !cls ? { domain: "sensor" } : { domain: "sensor", device_class: cls } } };
    }

    _form(schema, data, onChange) {
      const f = document.createElement("ha-form");
      f.hass = this._hass;
      f.schema = schema;
      f.data = data;
      f.computeLabel = (s) => s.label ?? s.name;
      f.computeHelper = (s) => s.helper;
      f.addEventListener("value-changed", (ev) => { ev.stopPropagation(); onChange(ev.detail.value); });
      return f;
    }

    _panel(key, title, icon, secondary) {
      const tag = PANEL_TAG(), p = document.createElement(tag);
      const inner = document.createElement("div");
      inner.className = "inner";
      if (tag === "details") {
        p.className = "panel";
        p.open = this._open.has(key);
        p.innerHTML = `<summary>${esc(title)}</summary>`;
        p.addEventListener("toggle", () => (p.open ? this._open.add(key) : this._open.delete(key)));
      } else {
        p.outlined = true;
        p.header = title;
        if (secondary) p.secondary = secondary;
        p.leftChevron = false;
        p.expanded = this._open.has(key);
        p.innerHTML = `<ha-icon slot="leading-icon" icon="${icon}"></ha-icon>`;
        p.addEventListener("expanded-changed", (ev) => (ev.detail.expanded ? this._open.add(key) : this._open.delete(key)));
      }
      p.appendChild(inner);
      return [p, inner];
    }

    _build() {
      if (!this._config || !this._hass) return;
      const c = this._config, root = this.shadowRoot, arr = (x) => [].concat(x || []).filter(Boolean);
      root.innerHTML = `<style>${ED_STYLE}</style>
        <div class="top">
          <button class="act fill" data-a="detect"><ha-icon icon="mdi:auto-fix"></ha-icon>Automatisch erkennen</button>
          <div class="hint">Übernimmt Solar, Netz, Zähler, Strompreis und Verbraucher aus dem Energie-Dashboard
            (Einstellungen → Dashboards → Energie). Vorhandene Einträge bleiben.</div>
          <div class="msg"></div>
        </div>`;
      root.querySelector('[data-a="detect"]').addEventListener("click", () => this._detect());
      if (this._lastMsg) this._msg(this._lastMsg);
      const set = (k, v) => { if (empty(v)) delete c[k]; else c[k] = v; };

      // Solar
      let [p, in_] = this._panel("src", "Solar", "mdi:solar-power-variant", arr(c.solar).length ? `${arr(c.solar).length} Sensor(en)` : "nicht gewählt");
      in_.appendChild(this._form([
        { name: "solar", label: "Solar-Leistung (W)", helper: "Mehrere Wechselrichter werden addiert", selector: this._ent(true, "power") },
        { type: "grid", name: "", schema: [
          { name: "solar_name", label: "Name", selector: { text: {} } },
          { name: "solar_icon", label: "Symbol", selector: { icon: { placeholder: "mdi:solar-power-variant" } } },
        ] },
        { name: "solar_peak", label: "Spitzenleistung der Anlage", helper: "steuert Glühen und Sonnenkranz",
          selector: { number: { min: 100, max: 50000, step: 100, mode: "box", unit_of_measurement: "W" } } },
      ], { solar: arr(c.solar), solar_name: c.solar_name, solar_icon: c.solar_icon, solar_peak: c.solar_peak ?? 800 }, (v) => {
        set("solar", v.solar); set("solar_name", v.solar_name); set("solar_icon", v.solar_icon); set("solar_peak", v.solar_peak);
        this._emit();
      }));
      root.appendChild(p);

      // Netz
      [p, in_] = this._panel("grid", "Netz", "mdi:transmission-tower", arr(c.grid).length ? `${arr(c.grid).length} Sensor(en)` : "nicht gewählt");
      in_.appendChild(this._form([
        { name: "grid", label: "Netz-Leistung (W)", helper: "positiv = Bezug, negativ = Einspeisung; je Phase ein Sensor wird addiert",
          selector: this._ent(true, "power") },
        { name: "grid_invert", label: "Vorzeichen umdrehen", helper: "einschalten, wenn dein Zähler Einspeisung positiv meldet", selector: { boolean: {} } },
        { name: "grid_export", label: "Getrennte Einspeise-Leistung (optional)", helper: "nur falls Bezug und Einspeisung zwei Sensoren sind (beide positiv)",
          selector: this._ent(true, "power") },
        { type: "grid", name: "", schema: [
          { name: "grid_name", label: "Name", selector: { text: {} } },
          { name: "grid_icon", label: "Symbol", selector: { icon: { placeholder: "mdi:transmission-tower" } } },
        ] },
        { name: "warn_import", label: "Bezug in Amber ab", selector: { number: { min: 0, max: 50000, step: 100, mode: "box", unit_of_measurement: "W" } } },
      ], { grid: arr(c.grid), grid_invert: !!c.grid_invert, grid_export: arr(c.grid_export), grid_name: c.grid_name, grid_icon: c.grid_icon,
        warn_import: c.warn_import ?? 2000 }, (v) => {
        set("grid", v.grid); set("grid_invert", v.grid_invert || undefined); set("grid_export", v.grid_export);
        set("grid_name", v.grid_name); set("grid_icon", v.grid_icon); set("warn_import", v.warn_import);
        this._emit();
      }));
      root.appendChild(p);

      // Verbraucher
      const cons = (c.consumers || []).map((x) => (typeof x === "string" ? { entity: x } : x));
      c.consumers = cons;
      [p, in_] = this._panel("cons", "Verbraucher", "mdi:power-plug", cons.length ? `${cons.length} Punkte` : "keine");
      in_.insertAdjacentHTML("beforeend", '<div class="note">Jeder Verbraucher ist ein Punkt rechts im Bild. Leistung (W) für den Strom, '
        + 'Zähler (kWh) optional für die Bilanz. Je nach Kartenhöhe passen etwa 4–7 Punkte.</div>');
      cons.forEach((x, i) => {
        const box = document.createElement("div");
        box.className = "cons";
        box.innerHTML = `<div class="head"><ha-icon class="ic" icon="${esc(x.icon || "mdi:power-plug")}"></ha-icon>
          <span class="n">${i + 1} · ${esc(x.name || x.entity || "neu")}</span>
          <button data-m="-1" title="nach oben" ${i ? "" : "disabled"}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button data-m="1" title="nach unten" ${i < cons.length - 1 ? "" : "disabled"}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button data-m="x" title="entfernen"><ha-icon icon="mdi:delete-outline"></ha-icon></button></div>`;
        box.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
          const m = b.dataset.m;
          if (m === "x") cons.splice(i, 1);
          else { const j = i + +m; [cons[i], cons[j]] = [cons[j], cons[i]]; }
          this._build(); this._emit();
        }));
        box.appendChild(this._form([
          { name: "entity", label: "Leistung (W)", selector: this._ent(false, "power") },
          { type: "grid", name: "", schema: [
            { name: "name", label: "Name", selector: { text: {} } },
            { name: "icon", label: "Symbol", selector: { icon: { placeholder: "mdi:power-plug" } } },
          ] },
          { name: "energy", label: "Zähler (kWh, optional)", selector: this._ent(false, "energy") },
        ], { ...x }, (v) => {
          const T = sensorTools(this._hass), neu = v.entity && v.entity !== x.entity;
          const y = { entity: v.entity, name: v.name, icon: v.icon, energy: v.energy };
          if (neu) { // neu gewählt: Name, Symbol und Zähler vorschlagen
            const full = T.nameOf(v.entity);
            if (!y.name) y.name = shortName(full) || full;
            if (!y.icon) y.icon = guessIcon(`${full} ${v.entity}`);
            if (!y.energy) y.energy = T.energyOf(v.entity) || undefined;
          }
          for (const k of Object.keys(y)) if (empty(y[k])) delete y[k];
          cons[i] = y;
          box.querySelector(".n").textContent = `${i + 1} · ${y.name || y.entity || "neu"}`;
          box.querySelector("ha-icon.ic").setAttribute("icon", y.icon || "mdi:power-plug");
          if (neu) this._build();
          this._emit();
        }));
        in_.appendChild(box);
      });
      const addB = document.createElement("button");
      addB.className = "act";
      addB.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon>Verbraucher hinzufügen';
      addB.addEventListener("click", () => { c.consumers = cons; cons.push({}); this._open.add("cons"); this._build(); });
      in_.appendChild(addB);
      in_.appendChild(this._form([
        { name: "other_on", label: "Punkt „Sonstige“ (Haus minus die Verbraucher oben)", selector: { boolean: {} } },
        ...(c.other ? [{ type: "grid", name: "", schema: [
          { name: "other_name", label: "Name", selector: { text: {} } },
          { name: "other_icon", label: "Symbol", selector: { icon: { placeholder: "mdi:dots-horizontal-circle-outline" } } },
        ] }] : []),
      ], { other_on: !!c.other, other_name: c.other?.name, other_icon: c.other?.icon }, (v) => {
        const was = !!c.other;
        c.other = v.other_on ? { name: v.other_name || "Sonstige", icon: v.other_icon || "mdi:dots-horizontal-circle-outline" } : undefined;
        if (!c.other) delete c.other;
        if (was !== !!c.other) this._build();
        this._emit();
      }));
      root.appendChild(p);

      // Bilanz-Leiste
      const t = c.today;
      [p, in_] = this._panel("today", "Bilanz-Leiste (heute / Woche / Monat)", "mdi:counter", t ? "an" : "aus");
      in_.appendChild(this._form([
        { name: "on", label: "Bilanz unten anzeigen", selector: { boolean: {} } },
        ...(t ? [
          { name: "solar", label: "Solar erzeugt (kWh)", selector: this._ent(true, "energy") },
          { name: "import", label: "Netzbezug (kWh)", helper: "je Phase ein Zähler wird addiert", selector: this._ent(true, "energy") },
          { name: "export", label: "Einspeisung (kWh)", selector: this._ent(true, "energy") },
          { name: "price", label: "Strompreis", selector: { number: { min: 0, max: 2, step: 0.0001, mode: "box", unit_of_measurement: "€/kWh" } } },
          { name: "net", label: "Saldieren wie ein Zweirichtungszähler", helper: "rechnet Bezug/Einspeisung aus der Netz-Leistung aller Phasen "
            + "(richtig bei Shelly 3EM & Co.); dann werden die Zähler oben nicht gebraucht", selector: { boolean: {} } },
        ] : []),
      ], { on: !!t, ...(t ? { solar: arr(t.solar), import: arr(t.import), export: arr(t.export), price: t.price ?? 0.35, net: !!t.net } : {}) }, (v) => {
        const was = !!c.today;
        if (!v.on) delete c.today;
        else c.today = { solar: v.solar, import: v.import, export: v.export, price: v.price, ...(v.net ? { net: true } : {}) };
        if (!was && c.today) return this._prefill("today", "Bilanz");
        if (was !== !!c.today) this._build();
        this._emit();
      }));
      root.appendChild(p);

      // Prognose
      const f = c.forecast;
      [p, in_] = this._panel("fc", "Solar-Prognose", "mdi:weather-sunny-alert", f ? "an" : "aus");
      in_.appendChild(this._form([
        { name: "on", label: "Prognose am Solar-Punkt zeigen", helper: "z. B. Integration Forecast.Solar", selector: { boolean: {} } },
        ...(f ? [
          { name: "today", label: "Prognose heute (kWh)", selector: this._ent(false, "energy") },
          { name: "tomorrow", label: "Prognose morgen (kWh, optional)", selector: this._ent(false, "energy") },
        ] : []),
      ], { on: !!f, ...(f || {}) }, (v) => {
        const was = !!c.forecast;
        if (!v.on) delete c.forecast; else c.forecast = { today: v.today, tomorrow: v.tomorrow };
        if (!was && c.forecast) return this._prefill("forecast", "Prognose");
        if (was !== !!c.forecast) this._build();
        this._emit();
      }));
      root.appendChild(p);

      // Darstellung
      [p, in_] = this._panel("look", "Darstellung", "mdi:palette-outline", `${c.height ?? 260} px hoch`);
      in_.appendChild(this._form([
        { name: "height", label: "Höhe der Karte", selector: { number: { min: 180, max: 700, step: 10, mode: "slider", unit_of_measurement: "px" } } },
        { name: "house_icon", label: "Symbol Haus", selector: { icon: { placeholder: "mdi:home-lightning-bolt-outline" } } },
      ], { height: c.height ?? 260, house_icon: c.house_icon }, (v) => { set("height", v.height); set("house_icon", v.house_icon); this._emit(); }));
      const sw = document.createElement("label");
      sw.className = "sw";
      sw.innerHTML = `<input type="checkbox" ${this._all ? "checked" : ""}> Alle Sensoren zur Auswahl anbieten
        (falls dein Sensor oben nicht auftaucht, weil ihm die Geräteklasse fehlt)`;
      sw.querySelector("input").addEventListener("change", (ev) => { this._all = ev.target.checked; this._build(); });
      in_.appendChild(sw);
      root.appendChild(p);
    }
  }

  customElements.define("nullglow-flow-card-editor", NullglowFlowCardEditor);

  customElements.define("nullglow-flow-card", NullglowFlowCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-flow-card", name: "Nullglow Flow", preview: true,
    description: "Live-Energiefluss mit Partikelströmen (Nullglow) — Sensoren per Klick, „Automatisch erkennen“" });
})();

// ───── nullglow-spark-card.js ─────
(() => {
  if (customElements.get("nullglow-spark-card")) return;
  const REFRESH_MS = 5 * 60 * 1000;
  const STYLE = `
    .ng-spark { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; z-index: -1; }
    .ng-spark svg { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: 44%; display: block; }
  `;

  // Catmull-Rom -> kubische Bézier: weiche Linie durch alle Punkte
  function smoothPath(pts) {
    if (pts.length < 2) return "";
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  }

  // Temperatur-Farbskalen: [Wert, Farbe]; zwischen den Stufen wird interpoliert.
  // NEUTRAL = Wohlfühlbereich (Nullglow-Text), bewusst farblos -> nur Kälte/Wärme stechen hervor.
  const NEUTRAL = "#e8f5ee";
  const SCALES = {
    room: [[16, "#4f9dff"], [19, "#6be3ff"], [20, NEUTRAL], [22, NEUTRAL], [23.5, "#ffd166"], [25.5, "#ff6b6b"]],
    outdoor: [[0, "#4f9dff"], [8, "#6be3ff"], [12, NEUTRAL], [20, NEUTRAL], [26, "#ffd166"], [32, "#ff6b6b"]],
  };
  const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  // Heller Modus (Theme-Token --ng-is-light: 1): helle Skalenfarben als Tinte — Grautöne werden zu --ng-txt,
  // Farben behalten ihren Ton, werden aber so dunkel, dass sie auf hellem Grund lesbar sind. Dunkel: unverändert.
  function inkOnLight(hex, txt) {
    const [r, g, b] = hex2rgb(hex).map((x) => x / 255), mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2;
    const sat = mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1));
    if (sat < 0.5) return txt;   // Grau-/Neutraltöne (z. B. #e8f5ee) -> Tinte
    let hue = mx === r ? ((g - b) / (mx - mn)) % 6 : mx === g ? (b - r) / (mx - mn) + 2 : (r - g) / (mx - mn) + 4;
    hue *= 60; if (hue < 0) hue += 360;
    const L = Math.min(l, 0.4), S = Math.min(1, sat * 1.05), C = (1 - Math.abs(2 * L - 1)) * S, X = C * (1 - Math.abs((hue / 60) % 2 - 1)), m = L - C / 2;
    const [a, bb, c] = hue < 60 ? [C, X, 0] : hue < 120 ? [X, C, 0] : hue < 180 ? [0, C, X] : hue < 240 ? [0, X, C] : hue < 300 ? [X, 0, C] : [C, 0, X];
    return "#" + [a, bb, c].map((x) => Math.round((x + m) * 255).toString(16).padStart(2, "0")).join("");
  }
  const rgb2hex = (c) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
  function colorAt(stops, v) {
    if (v <= stops[0][0]) return stops[0][1];
    for (let i = 0; i < stops.length - 1; i++) {
      const [a, ca] = stops[i], [b, cb] = stops[i + 1];
      if (v <= b) {
        const f = (v - a) / (b - a), A = hex2rgb(ca), B = hex2rgb(cb);
        return rgb2hex(A.map((x, k) => x + (B[k] - x) * f));
      }
    }
    return stops[stops.length - 1][1];
  }
  // 0 im Wohlfühlbereich, 1 an den äußeren Stufen -> Stärke des Farbschimmers
  function intensity(stops, v) {
    const n = stops.filter((s) => s[1] === NEUTRAL).map((s) => s[0]);
    if (!n.length) return 1;
    const lo = Math.min(...n), hi = Math.max(...n);
    if (v >= lo && v <= hi) return 0;
    return v < lo ? Math.min(1, (lo - v) / (lo - stops[0][0])) : Math.min(1, (v - hi) / (stops[stops.length - 1][0] - hi));
  }

  let uid = 0;

  class NullglowSparkCard extends HTMLElement {
    setConfig(config) {
      if (!config || !(config.entity || config.entities) || !config.card) throw new Error("nullglow-spark-card: entity und card angeben");
      this._cfg = { hours: 24, min_span: 0, zero_based: false, ...config };
      // entities: [a, b, c] -> Verlauf = Summe (z. B. Netzleistung aus drei Phasen), sonst ein Sensor
      this._ids = config.entities ? [].concat(config.entities) : [config.entity];
      this._id = "ngs" + ++uid;
      this._data = null;
      this._build();
    }

    async _build() {
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>:host { display: block; height: 100%; } #c { height: 100%; }</style><div id="c"></div>`;
      const helpers = await window.loadCardHelpers();
      this._inner = helpers.createCardElement(this._cfg.card);
      this._inner.style.height = "100%";
      if (this._hass) this._inner.hass = this._hass;
      this.shadowRoot.getElementById("c").appendChild(this._inner);
      // Fehlerkarte (Kartentyp noch nicht geladen) -> HA baut neu, sobald definiert
      this._inner.addEventListener("ll-rebuild", (ev) => { ev.stopPropagation(); this._build(); }, { once: true });
      this._inject();
    }

    set hass(h) {
      this._hass = h;
      if (this._inner) this._inner.hass = h;
      if (!this._fetched || Date.now() - this._fetched > REFRESH_MS) this._fetch();
      else this._draw(); // aktueller Wert als letzter Punkt
    }

    getCardSize() {
      return this._inner?.getCardSize?.() ?? 1;
    }

    getGridOptions() {
      return this._inner?.getGridOptions?.() ?? {};
    }

    connectedCallback() {
      this._inject();
    }

    async _fetch() {
      if (!this._hass || this._loading) return;
      this._loading = true;
      this._fetched = Date.now();
      try {
        const start = new Date(Date.now() - this._cfg.hours * 3600e3).toISOString();
        const res = await this._hass.callWS({
          type: "recorder/statistics_during_period", start_time: start,
          statistic_ids: this._ids, period: "5minute", types: ["mean"],
        });
        if (this._ids.length === 1) {
          this._data = (res[this._ids[0]] || []).filter((p) => p.mean != null).map((p) => [p.start, p.mean]);
        } else {
          // Summe je Zeitpunkt, nur wo alle Sensoren einen Wert haben
          const sum = new Map(), cnt = new Map();
          for (const id of this._ids) for (const p of res[id] || []) {
            if (p.mean == null) continue;
            sum.set(p.start, (sum.get(p.start) || 0) + p.mean);
            cnt.set(p.start, (cnt.get(p.start) || 0) + 1);
          }
          this._data = [...sum.keys()].filter((t) => cnt.get(t) === this._ids.length).sort((a, b) => a - b).map((t) => [t, sum.get(t)]);
        }
      } catch (e) {
        this._data = null; // keine Statistik -> Kachel bleibt ohne Linie
      }
      this._loading = false;
      this._draw();
    }

    // SVG in die ha-card der inneren Karte hängen (wird nach Neuaufbau der Karte erneut eingesetzt)
    _inject() {
      clearTimeout(this._injectTimer);
      const card = this._inner?.shadowRoot?.querySelector("ha-card");
      if (!card) { this._injectTimer = setTimeout(() => this._inject(), 300); return; }
      const root = card.getRootNode();
      if (!root.querySelector("style[data-ng-spark]")) {
        const st = document.createElement("style");
        st.dataset.ngSpark = "";
        st.textContent = STYLE;
        root.appendChild(st);
      }
      if (!this._layer || !this._layer.isConnected) {
        this._layer = document.createElement("div");
        this._layer.className = "ng-spark";
        card.prepend(this._layer);
        // Mushroom baut ha-card bei manchen Updates neu -> beobachten und wieder einsetzen
        this._mo?.disconnect();
        this._mo = new MutationObserver(() => { if (!this._layer.isConnected) this._inject(); });
        this._mo.observe(this._inner.shadowRoot, { childList: true, subtree: true });
      }
      this._draw();
    }

    _draw() {
      if (!this._layer || !this._layer.isConnected) return;
      const pts = (this._data || []).slice();
      const vals = this._ids.map((id) => parseFloat(this._hass?.states?.[id]?.state));
      const now = vals.every(isFinite) ? vals.reduce((a, b) => a + b, 0) : NaN;
      if (isFinite(now) && pts.length) pts.push([Date.now(), now]);
      if (pts.length < 3) { this._layer.innerHTML = ""; this._lastKey = ""; return; }
      // 24 h lang nichts los (z. B. Wallbox dauerhaft 0 W) -> keine Linie, sähe aus wie ein Rahmenfehler
      if (pts.every((p) => Math.abs(p[1]) < 0.5)) { this._layer.innerHTML = ""; this._lastKey = ""; return; }

      const W = 200, H = 60, pad = 3;
      const t0 = Date.now() - this._cfg.hours * 3600e3, t1 = Date.now();
      let lo = Math.min(...pts.map((p) => p[1])), hi = Math.max(...pts.map((p) => p[1]));
      if (this._cfg.zero_based) lo = Math.min(0, lo);
      if (hi - lo < this._cfg.min_span) { const m = (hi + lo) / 2; lo = this._cfg.zero_based ? Math.min(0, lo) : m - this._cfg.min_span / 2; hi = lo + this._cfg.min_span; }
      if (hi === lo) hi = lo + 1;
      const x = (t) => ((t - t0) / (t1 - t0)) * W;
      const y = (v) => pad + (1 - (v - lo) / (hi - lo)) * (H - 2 * pad);
      const xy = pts.map(([t, v]) => [x(t), y(v)]);
      const line = smoothPath(xy);
      const area = `${line} L${W},${H} L${xy[0][0].toFixed(1)},${H} Z`;
      const [ex, ey] = xy[xy.length - 1];
      const zero = lo < 0 && hi > 0 ? `<line x1="0" x2="${W}" y1="${y(0).toFixed(1)}" y2="${y(0).toFixed(1)}" style="stroke:rgba(var(--rgb-ng-txt, 232, 245, 238), .14)" stroke-width="1" stroke-dasharray="2 3" vector-effect="non-scaling-stroke"/>` : "";
      const cs = this._cfg.color_scale;
      const css = getComputedStyle(this), light = css.getPropertyValue("--ng-is-light").trim() === "1" && (css.getPropertyValue("--ng-txt").trim() || "#1a1a1a");
      const stops0 = Array.isArray(cs) ? cs : SCALES[cs];
      const stops = stops0 && light ? stops0.map(([v, c]) => [v, inkOnLight(c, light)]) : stops0;
      const cur = isFinite(now) ? now : pts[pts.length - 1][1];
      const key = line + ey.toFixed(1) + (stops ? cur : "") + light;
      if (this._lastKey === key) return;
      this._lastKey = key;

      if (stops) {
        // Farbverlauf entlang der Werte-Achse (userSpaceOnUse): jeder Kurvenpunkt hat die Farbe seiner Temperatur
        const yLo = y(lo), yHi = y(hi);
        const grad = [[0, colorAt(stops, lo)]];
        for (const [v, c] of stops) if (v > lo && v < hi) grad.push([(v - lo) / (hi - lo), c]);
        grad.push([1, colorAt(stops, hi)]);
        const gstops = grad.map(([o, c]) => `<stop offset="${o.toFixed(3)}" stop-color="${c}"/>`).join("");
        const c = colorAt(stops, cur), I = intensity(stops0, cur), [r, g, b] = hex2rgb(c);
        const lineOp = (0.55 + 0.45 * I).toFixed(2);
        this._layer.style.background = I > 0
          ? `linear-gradient(90deg, rgba(${r},${g},${b},${(0.09 + 0.2 * I).toFixed(3)}) 0%, rgba(${r},${g},${b},0) 60%)`
          : "";
        this._layer.innerHTML = `
        <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="${this._id}l" gradientUnits="userSpaceOnUse" x1="0" y1="${yLo.toFixed(1)}" x2="0" y2="${yHi.toFixed(1)}">${gstops}</linearGradient>
            <linearGradient id="${this._id}f" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
            </linearGradient>
            <mask id="${this._id}m"><rect width="${W}" height="${H}" fill="url(#${this._id}f)"/></mask>
          </defs>
          ${zero}
          <path d="${area}" fill="url(#${this._id}l)" mask="url(#${this._id}m)"/>
          <path d="${line}" fill="none" stroke="url(#${this._id}l)" stroke-opacity="${lineOp}" stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
        </svg>
        <i style="position:absolute; left:calc(${((Math.min(ex, W - 2) / W) * 100).toFixed(2)}% - 3.5px); bottom:calc(${(((H - ey) / H) * 44).toFixed(2)}% - 3.5px); width:7px; height:7px; border-radius:50%; background:${c}; box-shadow:0 0 ${(6 + 8 * I).toFixed(0)}px ${c}"></i>`;
        return;
      }

      this._layer.style.background = "";
      this._layer.innerHTML = `
        <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="${this._id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:rgb(var(--rgb-ng-txt, 232, 245, 238))" stop-opacity=".08"/>
            <stop offset="1" style="stop-color:rgb(var(--rgb-ng-txt, 232, 245, 238))" stop-opacity="0"/>
          </linearGradient></defs>
          ${zero}
          <path d="${area}" fill="url(#${this._id})"/>
          <path d="${line}" fill="none" style="stroke:rgba(var(--rgb-ng-txt, 232, 245, 238), .24)" stroke-width="1.2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
        </svg>
        <i style="position:absolute; left:calc(${((Math.min(ex, W - 2) / W) * 100).toFixed(2)}% - 3px); bottom:calc(${(((H - ey) / H) * 44).toFixed(2)}% - 3px); width:6px; height:6px; border-radius:50%; background:rgba(var(--rgb-ng-txt, 232, 245, 238), .75); box-shadow:0 0 6px rgba(var(--rgb-ng-txt, 232, 245, 238), .55)"></i>`;
    }
  }

  customElements.define("nullglow-spark-card", NullglowSparkCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-spark-card", name: "Nullglow Spark", description: "24-h-Mini-Diagramm hinter einer Kachel" });
})();

// ───── nullglow-hourly-card.js ─────
(() => {
  if (customElements.get("nullglow-hourly-card")) return;

  const ICON = {
    "clear-night": "mdi:weather-night", cloudy: "mdi:weather-cloudy", exceptional: "mdi:alert-circle-outline",
    fog: "mdi:weather-fog", hail: "mdi:weather-hail", lightning: "mdi:weather-lightning",
    "lightning-rainy": "mdi:weather-lightning-rainy", partlycloudy: "mdi:weather-partly-cloudy",
    pouring: "mdi:weather-pouring", rainy: "mdi:weather-rainy", snowy: "mdi:weather-snowy",
    "snowy-rainy": "mdi:weather-snowy-rainy", sunny: "mdi:weather-sunny", windy: "mdi:weather-windy",
    "windy-variant": "mdi:weather-windy-variant",
  };
  // Sonne wie in der Wetterkarte warm, Regen/Schnee als Status-Cyan, sonst neutral
  const TONE = { sunny: "sun", partlycloudy: "sun", rainy: "wet", pouring: "wet", "lightning-rainy": "wet",
    snowy: "wet", "snowy-rainy": "wet", hail: "wet", "clear-night": "night" };

  const STYLE = `
    :host { display: block; }
    .card { padding: 8px 6px 7px; border-radius: var(--ha-card-border-radius, 20px);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none); }
    .row { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; }
    .h { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0; }
    .t { font-size: 10px; letter-spacing: .06em; color: var(--ng-txt-mute, #5f6f68);
      font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); }
    .h.now .t { color: var(--ng-acc, #7cffb2); text-transform: uppercase; }
    ha-icon { --mdc-icon-size: 20px; width: 20px; height: 20px; display: flex; color: var(--ng-txt-dim, #93a79d); }
    .sun ha-icon { color: var(--ng-warn, #ffd166); }
    .wet ha-icon { color: var(--ng-info, #6be3ff); }
    .night ha-icon { color: var(--ng-txt-dim, #93a79d); }
    .v { font-size: 13px; font-weight: 500; color: var(--ng-txt, #e8f5ee); font-variant-numeric: tabular-nums;
      font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); }
    .p { font-size: 9px; line-height: 11px; height: 11px; color: var(--ng-info, #6be3ff);
      font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); }
    .empty { font-size: 11px; color: var(--ng-txt-mute, #5f6f68); text-align: center; padding: 14px 0; }
  `;

  class NullglowHourlyCard extends HTMLElement {
    setConfig(config) {
      if (!config?.entity) throw new Error("nullglow-hourly-card: entity angeben");
      this._cfg = { hours: 8, ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = '<div class="row"><div class="empty">Vorhersage lädt …</div></div>';
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._row = card.querySelector(".row");
      this._resubscribe();
    }

    set hass(h) {
      const first = !this._hass;
      this._hass = h;
      if (first || !this._unsub) this._resubscribe();
      const hour = new Date().getHours(); // Spalten zur vollen Stunde weiterschieben
      if (hour !== this._hour) { this._hour = hour; this._render(); }
    }

    getCardSize() { return 1; }
    getGridOptions() { return { columns: 12, rows: "auto" }; }

    connectedCallback() { this._resubscribe(); }
    disconnectedCallback() { this._unsub?.then?.((u) => u && u()).catch?.(() => {}); this._unsub = null; }

    _resubscribe() {
      if (!this._hass?.connection || !this.isConnected || this._unsub) return;
      this._unsub = this._hass.connection.subscribeMessage((m) => { this._fc = m.forecast || []; this._render(); },
        { type: "weather/subscribe_forecast", forecast_type: "hourly", entity_id: this._cfg.entity });
      this._unsub.catch?.(() => { this._unsub = null; });
    }

    _render() {
      if (!this._row || !this._fc) return;
      const now = Date.now();
      const list = this._fc.filter((f) => Date.parse(f.datetime) > now - 45 * 60 * 1000).slice(0, this._cfg.hours);
      if (!list.length) { this._row.innerHTML = '<div class="empty">Keine Stundenvorhersage</div>'; return; }
      const wet = list.some((f) => (f.precipitation || 0) >= 0.1);
      const num = (x, d = 0) => x.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });
      const html = list.map((f, i) => {
        const t = new Date(f.datetime);
        const p = f.precipitation || 0;
        return `<div class="h ${i === 0 ? "now" : ""} ${TONE[f.condition] || ""}">
          <span class="t">${i === 0 ? "jetzt" : String(t.getHours()).padStart(2, "0")}</span>
          <ha-icon icon="${ICON[f.condition] || "mdi:weather-cloudy"}"></ha-icon>
          <span class="v">${num(Math.round(f.temperature))}°</span>
          ${wet ? `<span class="p">${p >= 0.1 ? num(p, 1) : ""}</span>` : ""}
        </div>`;
      }).join("");
      if (this._row.dataset.v !== html) { this._row.innerHTML = html; this._row.dataset.v = html; }
    }
  }

  customElements.define("nullglow-hourly-card", NullglowHourlyCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-hourly-card", name: "Nullglow Stunden", description: "Kompakte Stundenvorhersage" });
})();

// ───── nullglow-month-card.js ─────
(() => {
  if (customElements.get("nullglow-month-card")) return;
  // Akzentfarbe des aktiven Designs (Theme-Token --rgb-ng-acc…), Rückfall Nullglow-Grün — für SVG-Attribute, wo var() nicht wirkt
  const accRgb = (el, v = "--rgb-ng-acc", d = "124, 255, 178") => (getComputedStyle(el).getPropertyValue(v).trim() || d);
  const REFRESH = 15 * 60 * 1000;
  const STYLE = `
    :host { display: block; height: 100%; }
    .card { padding: 14px 14px 10px; border-radius: var(--ha-card-border-radius, 20px); box-sizing: border-box; height: 100%;
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      display: flex; flex-direction: column; gap: 10px; }
    .top { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
    .title { font-size: 15px; font-weight: 500; color: var(--ng-txt, #e8f5ee); }
    .proj { font-size: 11px; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; }
    .proj b { color: var(--ng-txt, #e8f5ee); font-weight: 500; font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); }
    .kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
    .kpi { display: flex; flex-direction: column; gap: 2px; padding: 6px 8px; border-radius: 12px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .035);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .05); min-width: 0; }
    .kpi .v { font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); font-variant-numeric: tabular-nums;
      font-size: 17px; font-weight: 500; color: var(--ng-txt, #e8f5ee); white-space: nowrap; }
    .kpi .v small { font-size: .65em; color: var(--ng-txt-dim, #93a79d); margin-left: .15em; font-weight: 400; }
    .kpi .v.acc { color: var(--ng-acc, #7cffb2); }
    .kpi .l { font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: var(--ng-txt-mute, #5f6f68); }
    .chart { flex: 1; min-height: 190px; position: relative; }
    svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
    .legend { display: flex; gap: 14px; font-size: 10px; color: var(--ng-txt-dim, #93a79d); }
    .legend i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 5px; vertical-align: -1px; }
    .msg { font-size: 12px; color: var(--ng-txt-mute, #5f6f68); padding: 30px 0; text-align: center; }
  `;
  const num = (x, d = 0) => x.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });
  const dayKey = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

  class NullglowMonthCard extends HTMLElement {
    setConfig(config) {
      if (!config?.solar || !config?.grid) throw new Error("nullglow-month-card: solar und grid angeben");
      this._cfg = { price: 0, ...config, grid: [].concat(config.grid) };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = '<div class="msg">Monatsbilanz lädt …</div>';
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._card = card;
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(card);
    }

    set hass(h) {
      this._hass = h;
      if (!this._at || Date.now() - this._at > REFRESH) this._fetch();
    }

    getCardSize() { return 6; }
    getGridOptions() { return { columns: 12, rows: "auto" }; }

    async _fetch() {
      if (!this._hass?.callWS || this._loading) return;
      this._loading = true; this._at = Date.now();
      const c = this._cfg;
      try {
        const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(1);
        const [pw, so] = await Promise.all([
          this._hass.callWS({ type: "recorder/statistics_during_period", start_time: start.toISOString(),
            statistic_ids: c.grid, period: "hour", types: ["mean"] }),
          this._hass.callWS({ type: "recorder/statistics_during_period", start_time: start.toISOString(),
            statistic_ids: [c.solar], period: "hour", types: ["change"] }),
        ]);
        const days = new Map();
        const get = (t) => { const k = dayKey(new Date(t)); if (!days.has(k)) days.set(k, { imp: 0, exp: 0, solar: 0 }); return days.get(k); };
        const net = new Map(); // Stunde -> Summe der Phasen (W)
        for (const id of c.grid) for (const p of pw[id] || []) net.set(p.start, (net.get(p.start) || 0) + (p.mean || 0));
        for (const [t, w] of net) { const d = get(t); if (w > 0) d.imp += w / 1000; else d.exp -= w / 1000; }
        for (const p of so[c.solar] || []) get(p.start).solar += Math.max(0, p.change || 0);
        this._days = days;
      } catch (e) {
        this._days = null; this._err = true;
      }
      this._loading = false;
      this._render();
    }

    _render() {
      if (!this._card || !this._days) return;
      const A = accRgb(this);
      const c = this._cfg, now = new Date();
      const nDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      const rows = [];
      let imp = 0, exp = 0, solar = 0;
      for (let i = 1; i <= nDays; i++) {
        const d = this._days.get(dayKey(new Date(now.getFullYear(), now.getMonth(), i))) || null;
        if (d) { imp += d.imp; exp += d.exp; solar += d.solar; }
        const used = d ? Math.max(0, d.solar + d.imp - d.exp) : 0;
        const self = d ? Math.max(0, Math.min(d.solar - d.exp, used)) : 0;
        rows.push({ i, used, self, future: i > now.getDate() });
      }
      const usedM = Math.max(0, solar + imp - exp), selfM = Math.max(0, Math.min(solar - exp, usedM));
      const cost = imp * c.price, saved = selfM * c.price, aut = usedM > 0 ? selfM / usedM : 0;
      const elapsed = (now.getDate() - 1) + (now.getHours() * 60 + now.getMinutes()) / 1440;
      const proj = elapsed > 0.5 ? cost / elapsed * nDays : null;
      const month = now.toLocaleString("de-DE", { month: "long" });

      // Balken (SVG in Kartengröße)
      const box = this._card.querySelector(".chart");
      const W = box ? box.clientWidth : 300, H = box ? box.clientHeight : 140;
      const pad = { l: 26, r: 4, t: 6, b: 16 };
      const maxU = Math.max(1, ...rows.map((r) => r.used));
      const step = Math.pow(10, Math.floor(Math.log10(maxU))); const top = Math.ceil(maxU / step) * step;
      const cw = (W - pad.l - pad.r) / nDays, bw = Math.max(2, cw * 0.62);
      const y = (v) => pad.t + (1 - v / top) * (H - pad.t - pad.b);
      let bars = "";
      for (const r of rows) {
        const x = pad.l + (r.i - 1) * cw + (cw - bw) / 2;
        if (r.future) { bars += `<rect x="${x.toFixed(1)}" y="${(H - pad.b - 2).toFixed(1)}" width="${bw.toFixed(1)}" height="2" rx="1" style="fill:rgba(var(--rgb-ng-txt, 255, 255, 255), .06)"/>`; continue; }
        const yU = y(r.used), yS = y(r.self);
        bars += `<rect x="${x.toFixed(1)}" y="${yU.toFixed(1)}" width="${bw.toFixed(1)}" height="${(y(0) - yU).toFixed(1)}" rx="2" style="fill:rgba(var(--rgb-ng-txt, 232, 245, 238), .22)"/>`;
        if (r.self > 0.01) bars += `<rect x="${x.toFixed(1)}" y="${yS.toFixed(1)}" width="${bw.toFixed(1)}" height="${(y(0) - yS).toFixed(1)}" rx="2" fill="rgba(${A},.85)"/>`;
        if (r.i === now.getDate()) bars += `<rect x="${(x - 2).toFixed(1)}" y="${(yU - 3).toFixed(1)}" width="${(bw + 4).toFixed(1)}" height="${(y(0) - yU + 3).toFixed(1)}" rx="3" fill="none" stroke="rgba(${A},.6)" stroke-width="1"/>`;
      }
      let axis = `<line x1="${pad.l}" x2="${W - pad.r}" y1="${y(0)}" y2="${y(0)}" style="stroke:rgba(var(--rgb-ng-txt, 255, 255, 255), .12)"/>`;
      for (const v of [top / 2, top]) axis += `<line x1="${pad.l}" x2="${W - pad.r}" y1="${y(v)}" y2="${y(v)}" style="stroke:rgba(var(--rgb-ng-txt, 255, 255, 255), .05)" stroke-dasharray="2 3"/>`
        + `<text x="${pad.l - 4}" y="${y(v) + 3}" text-anchor="end" font-size="9" fill="rgba(147,167,157,.9)" font-family="JetBrains Mono, monospace">${num(v)}</text>`;
      for (const dd of [1, 8, 15, 22, 29].filter((q) => q <= nDays))
        axis += `<text x="${pad.l + (dd - 0.5) * cw}" y="${H - 3}" text-anchor="middle" font-size="9" fill="rgba(147,167,157,.9)" font-family="JetBrains Mono, monospace">${dd}.</text>`;

      const html = `
        <div class="top"><span class="title">${month}</span>
          ${proj !== null ? `<span class="proj">bis Monatsende ≈ <b>${num(proj)} €</b> Netz</span>` : ""}</div>
        <div class="kpis">
          <div class="kpi"><span class="v">${num(cost, 2)}<small>€</small></span><span class="l">Netzkosten</span></div>
          <div class="kpi"><span class="v acc">${num(saved, 2)}<small>€</small></span><span class="l">gespart</span></div>
          <div class="kpi"><span class="v acc">${num(aut * 100)}<small>%</small></span><span class="l">Autarkie</span></div>
        </div>
        <div class="chart"><svg viewBox="0 0 ${W} ${H}" aria-label="Verbrauch je Tag">${axis}${bars}</svg></div>
        <div class="legend"><span><i style="background:rgba(${A},.85)"></i>Solar selbst genutzt</span>
          <span><i style="background:rgba(var(--rgb-ng-txt, 232, 245, 238), .22)"></i>aus dem Netz</span><span>kWh je Tag</span></div>`;
      if (this._html !== html) { this._card.innerHTML = html; this._html = html; if (!box) requestAnimationFrame(() => this._render()); }
    }
  }

  customElements.define("nullglow-month-card", NullglowMonthCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-month-card", name: "Nullglow Monat", description: "Monatsbilanz je Tag mit Kosten und Autarkie" });
})();

// ───── nullglow-bars-card.js ─────
(() => {
  if (customElements.get("nullglow-bars-card")) return;
  const STYLE = `
    :host { display: block; }
    .card { padding: 12px 14px; border-radius: var(--ha-card-border-radius, 20px); box-sizing: border-box; height: 100%;
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      display: flex; flex-direction: column; justify-content: center; gap: 12px; }
    .row { display: grid; grid-template-columns: 26px 1fr auto; align-items: center; gap: 10px; cursor: pointer;
      -webkit-tap-highlight-color: transparent; }
    .n { font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); font-size: 11px; letter-spacing: .08em;
      color: var(--ng-txt-mute, #5f6f68); }
    .v { font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); font-variant-numeric: tabular-nums;
      font-size: 14px; font-weight: 500; color: var(--ng-txt, #e8f5ee); min-width: 76px; text-align: right; white-space: nowrap; }
    .v small { font-size: .72em; color: var(--ng-txt-dim, #93a79d); margin-left: .15em; font-weight: 400; }
    .track { position: relative; height: 10px; border-radius: 999px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .05);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .05); overflow: hidden; }
    .fill { position: absolute; top: 0; bottom: 0; left: 0; border-radius: 999px;
      transition: width .5s cubic-bezier(.22,1,.36,1), background .3s; }
    .fill.neg { left: auto; right: 0; }
  `;
  const num = (x) => Math.round(x).toLocaleString("de-DE");

  class NullglowBarsCard extends HTMLElement {
    setConfig(config) {
      if (!config?.rows?.length) throw new Error("nullglow-bars-card: rows angeben");
      this._cfg = { max: 3680, warn: 2300, crit: 3200, ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = this._cfg.rows.map((r, i) => `
        <div class="row" data-i="${i}">
          <span class="n">${r.name ?? ""}</span>
          <div class="track"><div class="fill"></div></div>
          <span class="v">–</span>
        </div>`).join("");
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      card.querySelectorAll(".row").forEach((el) => el.addEventListener("click", () => {
        const ev = new Event("hass-more-info", { bubbles: true, composed: true });
        ev.detail = { entityId: this._cfg.rows[+el.dataset.i].entity };
        this.dispatchEvent(ev);
      }));
      this._rows = [...card.querySelectorAll(".row")];
    }

    set hass(h) {
      this._hass = h;
      this._cfg.rows.forEach((r, i) => {
        const el = this._rows[i];
        const v = parseFloat(h.states[r.entity]?.state);
        const fill = el.querySelector(".fill"), val = el.querySelector(".v");
        if (!isFinite(v)) { val.textContent = "–"; fill.style.width = "0"; return; }
        const max = r.max ?? this._cfg.max;
        const a = Math.abs(v), neg = v < -5;
        const pct = Math.max(a > 5 ? 2 : 0, Math.min(100, (a / max) * 100));
        const col = neg ? "var(--ng-acc, #7cffb2)"
          : a >= this._cfg.crit ? "var(--ng-danger, #ff6b6b)"
          : a >= this._cfg.warn ? "var(--ng-warn, #ffd166)" : "rgba(var(--rgb-ng-txt, 232, 245, 238), .62)";
        const glow = neg ? "0 0 12px -2px rgba(var(--rgb-ng-acc, 124, 255, 178), .6)"
          : a >= this._cfg.warn ? `0 0 12px -2px ${a >= this._cfg.crit ? "rgba(255,107,107,.6)" : "rgba(255,209,102,.55)"}` : "none";
        fill.classList.toggle("neg", neg);
        fill.style.width = pct.toFixed(1) + "%";
        fill.style.background = col;
        fill.style.boxShadow = glow;
        val.innerHTML = `${neg ? "↑ " : ""}${num(a)}<small>W</small>`;
      });
    }

    getCardSize() { return 2; }
    getGridOptions() { return { columns: 12, rows: 2, min_rows: 2 }; }
  }

  customElements.define("nullglow-bars-card", NullglowBarsCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-bars-card", name: "Nullglow Bars", description: "Live-Balken, z. B. Last je Phase" });
})();

// ───── nullglow-power-card.js ─────
(() => {
  if (customElements.get("nullglow-power-card")) return;
  // Akzentfarbe des aktiven Designs (Theme-Token --rgb-ng-acc…), Rückfall Nullglow-Grün — für SVG-Attribute, wo var() nicht wirkt
  const accRgb = (el, v = "--rgb-ng-acc", d = "124, 255, 178") => (getComputedStyle(el).getPropertyValue(v).trim() || d);
  const REFRESH = 5 * 60 * 1000;
  const STYLE = `
    :host { display: block; height: 100%; }
    .card { padding: 14px 14px 10px; border-radius: var(--ha-card-border-radius, 20px); box-sizing: border-box; height: 100%;
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      display: flex; flex-direction: column; gap: 10px; }
    .top { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
    .title { font-size: 15px; font-weight: 500; color: var(--ng-txt, #e8f5ee); }
    .sub { font-size: 11px; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; }
    .kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
    .kpi { display: flex; flex-direction: column; gap: 2px; padding: 6px 8px; border-radius: 12px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .035);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .05); min-width: 0; }
    .kpi .v { font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); font-variant-numeric: tabular-nums;
      font-size: 17px; font-weight: 500; color: var(--ng-txt, #e8f5ee); white-space: nowrap; }
    .kpi .v small { font-size: .65em; color: var(--ng-txt-dim, #93a79d); margin-left: .15em; font-weight: 400; }
    .kpi .v.warn { color: var(--ng-warn, #ffd166); }
    .kpi .l { font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: var(--ng-txt-mute, #5f6f68); }
    .chart { flex: 1; min-height: 150px; position: relative; }
    svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
    .ax { font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); font-size: 9px; fill: var(--ng-txt-mute, #5f6f68); }
    .legend { display: flex; gap: 14px; font-size: 10px; color: var(--ng-txt-dim, #93a79d); flex-wrap: wrap; }
    .legend i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 5px; vertical-align: -1px; }
    .legend i.line { height: 2px; vertical-align: 2px; border-radius: 1px; }
    .msg { font-size: 12px; color: var(--ng-txt-mute, #5f6f68); padding: 30px 0; text-align: center; }
  `;
  const num = (x, d = 0) => x.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });
  const kw = (w) => (Math.abs(w) >= 1000 ? [num(w / 1000, 1), "kW"] : [num(w), "W"]);
  const hhmm = (t) => new Date(t).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

  class NullglowPowerCard extends HTMLElement {
    setConfig(config) {
      if (!config?.grid || !config?.solar) throw new Error("nullglow-power-card: grid und solar angeben");
      this._cfg = { hours: 24, warn: 3000, ...config, grid: [].concat(config.grid) };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = '<div class="msg">Leistungsverlauf lädt …</div>';
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._card = card;
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(card);
    }

    set hass(h) {
      this._hass = h;
      if (!this._at || Date.now() - this._at > REFRESH) this._fetch();
    }

    getCardSize() { return 5; }
    getGridOptions() { return { columns: 12, rows: 5, min_rows: 4 }; }

    async _fetch() {
      if (!this._hass || this._loading) return;
      this._loading = true;
      this._at = Date.now();
      const ids = [...this._cfg.grid, this._cfg.solar];
      try {
        const res = await this._hass.callWS({
          type: "recorder/statistics_during_period", start_time: new Date(Date.now() - this._cfg.hours * 3600e3).toISOString(),
          statistic_ids: ids, period: "5minute", types: ["mean"],
        });
        const grid = new Map(), cnt = new Map(), solar = new Map();
        for (const id of this._cfg.grid) for (const p of res[id] || []) {
          if (p.mean == null) continue;
          grid.set(p.start, (grid.get(p.start) || 0) + p.mean);
          cnt.set(p.start, (cnt.get(p.start) || 0) + 1);
        }
        for (const p of res[this._cfg.solar] || []) if (p.mean != null) solar.set(p.start, Math.max(0, p.mean));
        this._pts = [...grid.keys()].filter((t) => cnt.get(t) === this._cfg.grid.length).sort((a, b) => a - b)
          .map((t) => ({ t, net: grid.get(t), sol: solar.get(t) ?? 0 }));
      } catch (e) {
        this._pts = null;
      }
      this._loading = false;
      this._render();
    }

    _now() {
      const s = this._hass?.states || {};
      const g = this._cfg.grid.map((id) => parseFloat(s[id]?.state));
      const sol = Math.max(0, parseFloat(s[this._cfg.solar]?.state) || 0);
      if (!g.every(isFinite)) return null;
      return { t: Date.now(), net: g.reduce((a, b) => a + b, 0), sol };
    }

    _render() {
      if (!this._card) return;
      const A = accRgb(this);
      if (!this._pts || this._pts.length < 3) {
        this._card.innerHTML = `<div class="msg">${this._pts === null ? "Keine Statistik verfügbar" : "Leistungsverlauf lädt …"}</div>`;
        return;
      }
      const pts = this._pts.slice();
      const cur = this._now();
      if (cur) pts.push(cur);
      for (const p of pts) { p.house = Math.max(0, p.net + p.sol); p.self = Math.min(p.sol, p.house); }

      // Kennzahlen
      const houses = pts.map((p) => p.house);
      const peak = pts.reduce((m, p) => (p.house > m.house ? p : m), pts[0]);
      const sorted = houses.slice().sort((a, b) => a - b);
      const base = sorted[Math.floor(sorted.length * 0.1)] || 0;
      const nowH = cur ? cur.house : pts[pts.length - 1].house;
      const [nv, nu] = kw(nowH), [pv, pu] = kw(peak.house), [bv, bu] = kw(base);

      this._card.innerHTML = `
        <div class="top"><span class="title">Leistung · ${this._cfg.hours} h</span>
          <span class="sub">Hausverbrauch = Netz + Solar</span></div>
        <div class="kpis">
          <div class="kpi"><span class="v${nowH >= this._cfg.warn ? " warn" : ""}">${nv}<small>${nu}</small></span><span class="l">jetzt</span></div>
          <div class="kpi"><span class="v">${pv}<small>${pu}</small></span><span class="l">Spitze · ${hhmm(peak.t)}</span></div>
          <div class="kpi"><span class="v">${bv}<small>${bu}</small></span><span class="l">Grundlast</span></div>
        </div>
        <div class="chart"></div>
        <div class="legend">
          <span><i style="background:rgba(${A},.55)"></i>Solar genutzt</span>
          <span><i style="background:rgba(var(--rgb-ng-txt, 232, 245, 238), .16)"></i>Netzbezug</span>
          <span><i style="background:rgba(${A},.22)"></i>Einspeisung</span>
          <span><i class="line" style="background:rgba(var(--rgb-ng-txt, 232, 245, 238), .85)"></i>Verbrauch</span>
        </div>`;
      const box = this._card.querySelector(".chart");
      const W = box.clientWidth, H = box.clientHeight;
      if (W < 50 || H < 50) return;

      const padL = 44, padR = 6, padT = 6, padB = 16;
      const t0 = Date.now() - this._cfg.hours * 3600e3, t1 = Date.now();
      const minNet = Math.min(0, ...pts.map((p) => p.net));
      let hi = Math.max(500, ...houses) * 1.08;
      const step = hi > 4000 ? 2000 : hi > 2000 ? 1000 : 500;
      hi = Math.ceil(hi / step) * step;
      const lo = minNet < -30 ? -Math.ceil((-minNet * 1.1) / step) * step : 0;
      const x = (t) => padL + ((t - t0) / (t1 - t0)) * (W - padL - padR);
      const y = (v) => padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB);
      const path = (arr) => arr.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("");
      const area = (top, bottom) => path(top) + path(bottom.slice().reverse()).replace(/^M/, "L") + "Z";

      const X = pts.map((p) => x(p.t));
      const zero = pts.map((p, i) => [X[i], y(0)]);
      const selfTop = pts.map((p, i) => [X[i], y(p.self)]);
      const houseTop = pts.map((p, i) => [X[i], y(p.house)]);
      const exportBot = pts.map((p, i) => [X[i], y(Math.min(0, p.net))]);

      // Raster: Nulllinie, Stufen, Stunden-Beschriftung
      let grid = "";
      for (let v = lo; v <= hi + 1; v += step) {
        const yy = y(v).toFixed(1);
        grid += `<line x1="${padL}" x2="${W - padR}" y1="${yy}" y2="${yy}" style="stroke:rgba(var(--rgb-ng-txt, 255, 255, 255), ${v === 0 ? ".16" : ".05"})"${v === 0 ? "" : ' stroke-dasharray="2 4"'}/>`;
        const top = v + step > hi + 1;   // oberste Stufe trägt die Einheit
        grid += `<text class="ax" x="${padL - 6}" y="${(+yy + 3).toFixed(1)}" text-anchor="end">${v === 0 ? "0" : num(v / 1000, step < 1000 ? 1 : 0)}${top ? " kW" : ""}</text>`;
      }
      const d0 = new Date(t0); d0.setMinutes(0, 0, 0);
      for (let t = d0.getTime() + 3600e3; t < t1; t += 3600e3) {
        const h = new Date(t).getHours();
        if (h % 6) continue;
        const xx = x(t).toFixed(1);
        grid += `<line x1="${xx}" x2="${xx}" y1="${padT}" y2="${H - padB}" style="stroke:rgba(var(--rgb-ng-txt, 255, 255, 255), .04)"/>`;
        grid += `<text class="ax" x="${xx}" y="${H - 3}" text-anchor="middle">${String(h).padStart(2, "0")}:00</text>`;
      }
      const last = houseTop[houseTop.length - 1];
      box.innerHTML = `
        <svg viewBox="0 0 ${W} ${H}" aria-hidden="true">
          <defs>
            <linearGradient id="ngpS" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="rgb(${A})" stop-opacity=".55"/><stop offset="1" stop-color="rgb(${A})" stop-opacity=".18"/>
            </linearGradient>
          </defs>
          ${grid}
          <path d="${area(houseTop, selfTop)}" style="fill:rgba(var(--rgb-ng-txt, 232, 245, 238), .10)"/>
          <path d="${area(selfTop, zero)}" fill="url(#ngpS)"/>
          <path d="${area(zero, exportBot)}" fill="rgba(${A},.18)"/>
          <path d="${path(selfTop)}" fill="none" stroke="rgba(${A},.8)" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="${path(houseTop)}" fill="none" style="stroke:rgba(var(--rgb-ng-txt, 232, 245, 238), .85)" stroke-width="1.5" stroke-linejoin="round"/>
          <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="3.5" style="fill:rgb(var(--rgb-ng-txt, 232, 245, 238)); filter: drop-shadow(0 0 5px rgba(var(--rgb-ng-txt, 232, 245, 238), calc(.7 * var(--ng-glow-k, 1))))"/>
        </svg>`;
    }
  }

  customElements.define("nullglow-power-card", NullglowPowerCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-power-card", name: "Nullglow Power", description: "Leistung 24 h: Verbrauch, Solar, Netz" });
})();

// ───── nullglow-care-card.js ─────
(() => {
  if (customElements.get("nullglow-care-card")) return;
  const STYLE = `
    :host { display: block; }
    .card { border-radius: var(--ha-card-border-radius, 20px); box-sizing: border-box; height: 100%;
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      transition: box-shadow .26s cubic-bezier(.22,1,.36,1); }
    .mono { font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); font-variant-numeric: tabular-nums; }
    /* ---- summary ---- */
    .sum { display: flex; align-items: center; gap: 12px; padding: 0 12px; height: 100%; min-height: 56px; cursor: pointer;
      -webkit-tap-highlight-color: transparent; }
    .sum .ic { width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center; flex: none;
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06); color: var(--ng-txt-dim, #93a79d); --mdc-icon-size: 20px; }
    .sum .t { display: flex; flex-direction: column; min-width: 0; }
    .sum .p { font-size: 14px; font-weight: 600; color: var(--ng-txt, #e8f5ee); white-space: nowrap; }
    .sum .cnt { display: inline-block; margin-left: 7px; padding: 1px 7px; border-radius: 999px; font-size: 11px; font-weight: 600;
      vertical-align: 1px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); }
    .lvl-warn .cnt { background: rgba(255,209,102,.18); color: var(--ng-warn, #ffd166); }
    .lvl-crit .cnt { background: rgba(255,107,107,.18); color: var(--ng-danger, #ff6b6b); }
    .sum .s { font-size: 12px; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .lvl-ok .ic { color: var(--ng-acc, #7cffb2); background: rgba(var(--rgb-ng-acc, 124, 255, 178), .10); }
    .lvl-warn .ic { color: var(--ng-warn, #ffd166); background: rgba(255,209,102,.12); }
    .lvl-crit .ic { color: var(--ng-danger, #ff6b6b); background: rgba(255,107,107,.13); animation: ngpulse 1.8s ease-in-out infinite; }
    .card.lvl-warn { box-shadow: inset 0 0 0 1px rgba(255,209,102,.35), 0 0 22px -10px rgba(255,209,102,.6); }
    .card.lvl-crit { box-shadow: inset 0 0 0 1px rgba(255,107,107,.40), 0 0 24px -10px rgba(255,107,107,.7); }
    @keyframes ngpulse { 50% { opacity: .55; } }
    /* ---- full ---- */
    .full { padding: 16px 18px; display: flex; flex-direction: column; gap: 16px; }
    .hero { display: flex; align-items: center; gap: 14px; }
    .hero .ic { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; --mdc-icon-size: 26px; }
    .hero .p { font-size: 22px; font-weight: 600; letter-spacing: -.01em; color: var(--ng-txt, #e8f5ee); }
    .hero .s { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ng-txt-dim, #93a79d); margin-top: 2px; }
    .grp h3 { margin: 0 0 8px; font-size: 10px; font-weight: 500; letter-spacing: .16em; text-transform: uppercase;
      color: var(--ng-txt-mute, #5f6f68); font-family: var(--ha-font-family-code, 'JetBrains Mono', monospace); }
    .rows { display: grid; grid-template-columns: repeat(var(--cols, 2), minmax(0, 1fr)); gap: 6px 22px; }
    .row { display: grid; grid-template-columns: 20px minmax(0, 1fr) 90px 64px; align-items: center; gap: 10px; padding: 6px 0;
      cursor: pointer; -webkit-tap-highlight-color: transparent; border-bottom: 1px solid rgba(var(--rgb-ng-txt, 255, 255, 255), .04); }
    .row ha-icon { --mdc-icon-size: 18px; color: var(--ng-txt-dim, #93a79d); }
    .row .n { font-size: 13px; color: var(--ng-txt, #e8f5ee); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .row .v { font-size: 12px; color: var(--ng-txt-dim, #93a79d); text-align: right; white-space: nowrap; }
    .track { height: 6px; border-radius: 999px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06); overflow: hidden; }
    .fill { height: 100%; border-radius: 999px; transition: width .5s cubic-bezier(.22,1,.36,1); }
    .row.warn ha-icon, .row.warn .v { color: var(--ng-warn, #ffd166); }
    .row.crit ha-icon, .row.crit .v { color: var(--ng-danger, #ff6b6b); }
    .row.na .n, .row.na .v { color: var(--ng-txt-mute, #5f6f68); }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip { display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 999px; font-size: 12px;
      background: rgba(255,107,107,.08); color: var(--ng-txt, #e8f5ee); box-shadow: inset 0 0 0 1px rgba(255,107,107,.30);
      cursor: pointer; -webkit-tap-highlight-color: transparent; }
    .chip ha-icon { --mdc-icon-size: 16px; color: var(--ng-danger, #ff6b6b); }
    .none { font-size: 12px; color: var(--ng-txt-mute, #5f6f68); }
    @media (max-width: 760px) { .rows { grid-template-columns: 1fr; } .row { grid-template-columns: 20px minmax(0, 1fr) 54px 58px; gap: 8px; } }
  `;
  const COL = { ok: "var(--ng-acc, #7cffb2)", warn: "var(--ng-warn, #ffd166)", crit: "var(--ng-danger, #ff6b6b)" };
  const BAD = ["unavailable", "unknown"];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const batIcon = (v) => (v == null ? "mdi:battery-unknown" : v <= 10 ? "mdi:battery-alert-variant-outline"
    : `mdi:battery-${Math.min(90, Math.max(10, Math.round(v / 10) * 10))}`.replace("battery-100", "battery"));
  const cleanName = (n) => String(n || "").replace(/\s*(Batterie|Battery( level)?|Akku)$/i, "").trim();

  class NullglowCareCard extends HTMLElement {
    setConfig(config) {
      this._cfg = { mode: "full", tap_hash: "#wartung", ...config };
      this._bat = { warn: 30, crit: 15, exclude: [], names: {}, ...(config.battery || {}) };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      this.shadowRoot.appendChild(card);
      this._card = card;
      card.addEventListener("click", (e) => {
        if (this._cfg.mode === "summary") { this._nav(this._cfg.tap_hash); return; }
        const t = e.composedPath().find((n) => n.dataset && n.dataset.entity);
        if (t) this._more(t.dataset.entity);
      });
    }

    _nav(path) {
      history.pushState(null, "", path.startsWith("#") ? location.pathname + location.search + path : path);
      window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
    }
    _more(entityId) {
      const ev = new Event("hass-more-info", { bubbles: true, composed: true });
      ev.detail = { entityId };
      this.dispatchEvent(ev);
    }

    // ---- Daten sammeln ----
    _collect(h) {
      const S = h.states, b = this._bat;
      const ex = (b.exclude || []).map((x) => new RegExp(x, "i"));
      const bats = [];
      for (const s of Object.values(S)) {
        if (!s.entity_id.startsWith("sensor.") || s.attributes.device_class !== "battery") continue;
        if (ex.some((r) => r.test(s.entity_id))) continue;
        const raw = parseFloat(s.state), na = BAD.includes(s.state) || !isFinite(raw);
        const v = na ? null : Math.round(raw);
        const lvl = na ? "warn" : v <= b.crit ? "crit" : v <= b.warn ? "warn" : "ok";
        bats.push({ entity: s.entity_id, name: b.names[s.entity_id] || cleanName(s.attributes.friendly_name), v, na, lvl });
      }
      // Reihenfolge: rot, gelb, offline, ok — innerhalb nach Ladestand
      const ord = (x) => (x.lvl === "crit" ? 0 : x.na ? 2 : x.lvl === "warn" ? 1 : 3);
      bats.sort((x, y) => ord(x) - ord(y) || (x.v ?? 0) - (y.v ?? 0));
      const wear = (this._cfg.wear || []).map((w) => {
        const s = S[w.entity];
        const raw = parseFloat(s?.state), na = !s || BAD.includes(s.state) || !isFinite(raw);
        const v = na ? null : Math.round(raw);
        const warn = w.warn ?? 20, crit = w.crit ?? 10;
        const t = w.time && S[w.time];
        let time = t && !BAD.includes(t.state) ? `${t.state} ${t.attributes.unit_of_measurement || ""}`.trim() : "";
        // ohne eigenen Zeit-Sensor: Restlaufzeit aus Wechselintervall und Laufzeit (z. B. Navimow-Messer)
        const at = s?.attributes || {};
        if (!time && isFinite(at.reminder_interval_hours) && isFinite(at.runtime_minutes))
          time = `noch ca. ${Math.max(0, Math.round(at.reminder_interval_hours - at.runtime_minutes / 60))} h`;
        return { entity: w.entity, name: w.name || cleanName(s?.attributes?.friendly_name), v, na, time,
          lvl: na ? "ok" : v <= crit ? "crit" : v <= warn ? "warn" : "ok" };
      });
      const off = (this._cfg.watch || []).filter((w) => !S[w.entity] || BAD.includes(S[w.entity].state))
        .map((w) => ({ entity: w.entity, name: w.name || S[w.entity]?.attributes?.friendly_name || w.entity }));
      const low = bats.filter((x) => x.lvl !== "ok"), worn = wear.filter((x) => x.lvl !== "ok");
      const crit = bats.some((x) => x.lvl === "crit") || wear.some((x) => x.lvl === "crit");
      const lvl = crit ? "crit" : low.length || worn.length || off.length ? "warn" : "ok";
      return { bats, wear, off, low, worn, lvl };
    }

    _summaryText(d) {
      const parts = [];
      const lowBat = d.low.filter((x) => !x.na).length, naBat = d.low.filter((x) => x.na).length;
      if (lowBat) parts.push(`${lowBat} ${lowBat === 1 ? "Batterie" : "Batterien"} schwach`);
      if (d.worn.length) parts.push(`${d.worn.length}× Verschleiß`);
      const offN = d.off.length + naBat;
      if (offN) parts.push(`${offN} offline`);
      return parts.length ? parts.join(" · ") : "alles in Ordnung";
    }

    set hass(h) {
      const d = this._collect(h);
      const key = JSON.stringify(d);
      if (key === this._key) return;
      this._key = key;
      this._card.className = `card lvl-${d.lvl}`;
      this._card.innerHTML = this._cfg.mode === "summary" ? this._summary(d) : this._full(d);
    }

    // Dringendster Punkt für die kompakte Kachel: rote Batterie/Verschleiß > gelbe > offline
    _top(d) {
      // Batterien vor Verschleiß (Sauger-Erinnerungen sind weniger dringend), innerhalb: Rot vor Gelb vor offline
      const rank = (x) => (x.wear ? 3 : 0) + (x.lvl === "crit" ? 0 : x.na ? 2 : 1);
      const items = [...d.low.map((x) => ({ ...x, t: x.na ? `${x.name} offline` : `${x.name} ${x.v} %` })),
        ...d.worn.map((x) => ({ ...x, wear: true, t: `${x.name} ${x.v} %` }))].sort((a, b) => rank(a) - rank(b) || (a.v ?? 0) - (b.v ?? 0));
      if (items.length) return items[0].t;
      if (d.off.length) return `${d.off[0].name} offline`;
      return "alles in Ordnung";
    }

    _summary(d) {
      const icon = d.lvl === "ok" ? "mdi:shield-check-outline" : d.lvl === "crit" ? "mdi:battery-alert-variant" : "mdi:wrench-clock";
      const n = d.low.length + d.worn.length + d.off.length;
      return `<div class="sum lvl-${d.lvl}"><div class="ic"><ha-icon icon="${icon}"></ha-icon></div>
        <div class="t"><span class="p">Wartung${n ? `<span class="cnt mono">${n}</span>` : ""}</span><span class="s">${esc(this._top(d))}</span></div></div>`;
    }

    _row(x, icon, value, pct) {
      const cls = x.na ? "na" : x.lvl === "ok" ? "" : x.lvl;
      const fill = x.na ? "" : `<div class="fill" style="width:${Math.max(2, Math.min(100, pct))}%;background:${COL[x.lvl]}"></div>`;
      return `<div class="row ${cls}" data-entity="${esc(x.entity)}"><ha-icon icon="${icon}"></ha-icon>
        <span class="n">${esc(x.name)}</span><div class="track">${fill}</div><span class="v mono">${value}</span></div>`;
    }

    _full(d) {
      const icon = d.lvl === "ok" ? "mdi:shield-check-outline" : d.lvl === "crit" ? "mdi:battery-alert-variant" : "mdi:wrench-clock";
      const col = COL[d.lvl];
      const title = d.lvl === "ok" ? "Alles in Ordnung" : "Braucht Aufmerksamkeit";
      const show = (k) => !this._cfg.show || [].concat(this._cfg.show).includes(k);
      const bats = d.bats.map((x) => this._row(x, batIcon(x.v), x.na ? "offline" : `${x.v} %`, x.v ?? 0)).join("");
      const wear = d.wear.map((x) => this._row(x, x.lvl === "ok" ? "mdi:progress-wrench" : "mdi:wrench-clock",
        x.na ? "–" : `${x.v} %${x.time ? `<br><small>${esc(x.time)}</small>` : ""}`, x.v ?? 0)).join("");
      const off = d.off.map((x) => `<span class="chip" data-entity="${esc(x.entity)}"><ha-icon icon="mdi:lan-disconnect"></ha-icon>${esc(x.name)}</span>`).join("");
      return `<div class="full">
        <div class="hero"><div class="ic" style="color:${col};background:color-mix(in srgb, ${col} 12%, transparent)"><ha-icon icon="${icon}"></ha-icon></div>
          <div><div class="p">${title}</div><div class="s">${esc(this._summaryText(d))}</div></div></div>
        ${show("battery") ? `<div class="grp"><h3>Batterien</h3><div class="rows">${bats || '<span class="none">keine</span>'}</div></div>` : ""}
        ${wear && show("wear") ? `<div class="grp"><h3>${esc(this._cfg.wear_title || "Verschleiß")}</h3><div class="rows">${wear}</div></div>` : ""}
        ${show("watch") ? `<div class="grp"><h3>Nicht erreichbar</h3>${off ? `<div class="chips">${off}</div>` : '<span class="none">alle Geräte erreichbar</span>'}</div>` : ""}
      </div>`;
    }

    getCardSize() { return this._cfg?.mode === "summary" ? 1 : 8; }
    getGridOptions() { return this._cfg?.mode === "summary" ? { columns: 6, rows: 1 } : { columns: 12, rows: "auto" }; }
  }

  customElements.define("nullglow-care-card", NullglowCareCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-care-card", name: "Nullglow Care", description: "Batterien, Verschleiß, nicht erreichbare Geräte" });
})();

// ───── nullglow-radar-card.js ─────
(() => {
  if (customElements.get("nullglow-radar-card")) return;

  const R = 6378137, TILE = 256;
  const WMS = "https://maps.dwd.de/geoserver/dwd/wms";
  const OM = "https://api.open-meteo.com/v1/forecast";
  const HOLD = 520, FADE = 260, HOLD_NOW = 1100, HOLD_END = 1800;
  // DWD-Legende (mm/h) -> Farbe, für Regenbalken und Legende
  const SCALE = [[0.1, "#33ffff"], [0.2, "#1acc9a"], [0.4, "#019934"], [1, "#4db31b"], [2, "#99cc01"], [3, "#cce601"],
    [5, "#ffff01"], [7.5, "#ffc401"], [10, "#ff8901"], [15, "#ff4501"], [30, "#fe0000"], [45, "#e5004c"], [75, "#cc0098"], [100, "#6600cb"]];
  const rateColor = (mmh) => { let c = SCALE[0][1]; for (const [v, col] of SCALE) if (mmh >= v) c = col; return c; };
  const pad = (n) => String(n).padStart(2, "0");
  const hhmm = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const merc = (lat, lon) => [lon * Math.PI / 180 * R, Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)) * R];
  const mpp = (z) => 2 * Math.PI * R / (TILE * 2 ** z);   // Meter je CSS-Pixel

  const STYLE = `
    :host { display: block; }
    ha-card, .card { padding: 0; overflow: hidden; border-radius: var(--ha-card-border-radius, 20px);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045)); box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09)); }
    .map { position: relative; overflow: hidden; background: var(--ng-map-bg, #0b0e12); touch-action: none; }
    .tiles, .tiles img, canvas.rain { position: absolute; }
    .tiles { inset: 0; filter: var(--ng-map-filter, invert(1) hue-rotate(180deg) saturate(.3) brightness(.78) contrast(1.15)); }   /* OSM hell -> dunkel (helles Design: nur entsättigt) */
    .tiles img { width: 256px; height: 256px; user-select: none; -webkit-user-drag: none; }
    canvas.rain { inset: 0; width: 100%; height: 100%; opacity: .92; }
    .shade { position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(var(--rgb-ng-bg, 5, 7, 10), .55) 100%); }
    .home { position: absolute; left: 50%; top: 50%; width: 12px; height: 12px; margin: -6px 0 0 -6px; border-radius: 50%;
      background: var(--ng-acc, #7cffb2); box-shadow: 0 0 0 3px rgba(var(--rgb-ng-bg, 5, 7, 10), .7), 0 0 14px var(--ng-acc, #7cffb2); }
    .home::after { content: ""; position: absolute; inset: -6px; border-radius: 50%; border: 2px solid var(--ng-acc, #7cffb2);
      animation: ping 2.2s ease-out infinite; }
    @keyframes ping { 0% { transform: scale(.6); opacity: .9; } 100% { transform: scale(2.6); opacity: 0; } }
    .badge { position: absolute; left: 14px; top: 12px; padding: 8px 14px; border-radius: 14px; background: rgba(var(--rgb-ng-bg, 5, 7, 10), .72);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .08); }
    .badge b { display: block; font: 600 26px/1.05 var(--ha-font-family-code, 'JetBrains Mono', monospace); color: var(--ng-txt, #e8f5ee);
      font-variant-numeric: tabular-nums; }
    .badge span { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--ng-txt-dim, #93a79d); }
    .badge.fc b { color: var(--ng-info, #6be3ff); }
    .badge.now b { color: var(--ng-acc, #7cffb2); }
    .ctrl { position: absolute; right: 12px; top: 12px; display: flex; flex-direction: column; gap: 8px; }
    .ctrl button { width: 42px; height: 42px; border-radius: 12px; border: 0; cursor: pointer; color: var(--ng-txt, #e8f5ee);
      background: rgba(var(--rgb-ng-bg, 5, 7, 10), .72); box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .1); font: 500 22px/1 var(--ha-font-family-body, sans-serif);
      display: grid; place-items: center; -webkit-tap-highlight-color: transparent; }
    .ctrl button:active { transform: scale(.94); }
    .ctrl ha-icon { --mdc-icon-size: 22px; }
    .legend { position: absolute; left: 14px; bottom: 12px; display: flex; align-items: center; gap: 8px; padding: 6px 10px;
      border-radius: 10px; background: rgba(var(--rgb-ng-bg, 5, 7, 10), .72); font-size: 11px; color: var(--ng-txt-dim, #93a79d); }
    .legend i { width: 120px; height: 8px; border-radius: 4px;
      background: linear-gradient(90deg, #33ffff, #1acc9a, #4db31b, #cce601, #ffff01, #ff8901, #fe0000, #cc0098, #6600cb); }
    .status { position: absolute; right: 14px; bottom: 12px; font-size: 11px; color: var(--ng-txt-dim, #93a79d);
      padding: 6px 10px; border-radius: 10px; background: rgba(var(--rgb-ng-bg, 5, 7, 10), .72); }
    .status:empty { display: none; }
    .timeline { display: flex; align-items: flex-end; gap: 3px; height: 34px; padding: 10px 16px 0; cursor: pointer; }
    .timeline span { flex: 1; height: 10px; border-radius: 3px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .14); transition: background .2s, height .2s; }
    .timeline span.fc { background: rgba(107,227,255,.22); }
    .timeline span.now { height: 18px; background: rgba(var(--rgb-ng-acc, 124, 255, 178), .55); }
    .timeline span.cur { height: 22px; background: var(--ng-txt, #e8f5ee); box-shadow: 0 0 10px rgba(var(--rgb-ng-txt, 232, 245, 238), .6); }
    .timeline span.cur.fc { background: var(--ng-info, #6be3ff); box-shadow: 0 0 10px rgba(107,227,255,.7); }
    .timeline span.miss { opacity: .25; }
    .tl-lbl { position: relative; height: 16px; margin: 4px 16px 0; font-size: 10px; letter-spacing: .08em;
      text-transform: uppercase; color: var(--ng-txt-mute, #5f6f68); }
    .tl-lbl span { position: absolute; top: 0; white-space: nowrap; }
    .tl-lbl b { position: absolute; top: 0; transform: translateX(-50%); color: var(--ng-acc, #7cffb2); font-weight: 500; }
    .soon { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr); gap: 18px; align-items: end; padding: 14px 16px 6px; }
    .soon .sum { font-size: 17px; font-weight: 600; color: var(--ng-txt, #e8f5ee); line-height: 1.25; }
    .soon .sub { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--ng-txt-mute, #5f6f68); margin-bottom: 4px; }
    .bars { display: grid; grid-template-columns: repeat(8, 1fr); gap: 6px; align-items: end; height: 58px; }
    .bar { display: flex; flex-direction: column; justify-content: flex-end; height: 100%; }
    .bar i { display: block; border-radius: 4px 4px 2px 2px; min-height: 3px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .12); }
    .bar small { margin-top: 4px; font-size: 10px; text-align: center; color: var(--ng-txt-mute, #5f6f68);
      font-family: var(--ha-font-family-code, monospace); }
    .attr { padding: 4px 16px 10px; font-size: 10px; color: var(--ng-txt-mute, #5f6f68); }
    @media (max-width: 760px) { .soon { grid-template-columns: 1fr; } .legend i { width: 70px; } }
  `;

  class NullglowRadarCard extends HTMLElement {
    setConfig(config) {
      this._cfg = { zoom: 8, past: 90, future: 120, step: 10, height: 430, layer: "Niederschlagsradar", ...config };
      this._zoom = Math.max(6, Math.min(10, this._cfg.zoom));
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const root = this.shadowRoot;
      root.innerHTML = `<style>${STYLE}</style>`;
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = `
        <div class="map" style="height:${this._cfg.height}px">
          <div class="tiles"></div><canvas class="rain"></canvas><div class="shade"></div><div class="home"></div>
          <div class="badge"><b>–</b><span>Regenradar</span></div>
          <div class="ctrl"><button data-a="in" title="Näher">+</button><button data-a="out" title="Weiter weg">−</button>
            <button data-a="play" title="Abspielen/Anhalten"><ha-icon icon="mdi:pause"></ha-icon></button></div>
          <div class="legend">leicht <i></i> stark</div><div class="status">lädt …</div>
        </div>
        <div class="timeline"></div>
        <div class="tl-lbl"><span style="left:0">vor ${this._cfg.past} Min</span><b>jetzt</b><span style="right:0">+${this._cfg.future / 60} Std Vorhersage</span></div>
        <div class="soon"><div><div class="sub">Am Haus · nächste 2 Std</div><div class="sum">–</div></div><div class="bars"></div></div>
        <div class="attr">Radar &amp; Vorhersage: Deutscher Wetterdienst · Niederschlag am Haus: Open-Meteo (ICON-D2) · Karte © OpenStreetMap-Mitwirkende</div>`;
      root.appendChild(card);
      this._el = {
        map: card.querySelector(".map"), tiles: card.querySelector(".tiles"), canvas: card.querySelector("canvas.rain"),
        badge: card.querySelector(".badge"), tl: card.querySelector(".timeline"), status: card.querySelector(".status"),
        sum: card.querySelector(".soon .sum"), bars: card.querySelector(".bars"), play: card.querySelector('[data-a="play"] ha-icon'),
      };
      card.querySelector(".ctrl").addEventListener("click", (e) => {
        const a = e.target.closest("button")?.dataset.a;
        if (a === "in" || a === "out") this._setZoom(this._zoom + (a === "in" ? 1 : -1));
        if (a === "play") this._setPlaying(!this._playing);
        e.stopPropagation();
      });
      this._el.tl.addEventListener("click", (e) => {
        const r = this._el.tl.getBoundingClientRect();
        const i = Math.round((e.clientX - r.left - 16) / Math.max(1, r.width - 32) * (this._frames.length - 1));
        this._show(Math.max(0, Math.min(this._frames.length - 1, i)), true);
        this._setPlaying(false);
      });
      this._frames = []; this._cache = new Map(); this._idx = 0; this._playing = true; this._visible = false;
    }

    set hass(h) { this._hass = h; if (!this._center) this._initCenter(); }
    _initCenter() {
      const h = this._hass;
      const lat = this._cfg.latitude ?? h?.config?.latitude, lon = this._cfg.longitude ?? h?.config?.longitude;
      if (lat == null || lon == null) return;
      this._center = merc(lat, lon); this._latlon = [lat, lon];
      if (this._visible) this._refresh();
    }

    connectedCallback() {
      this._io = new IntersectionObserver((es) => {
        const v = es.some((x) => x.isIntersecting);
        if (v === this._visible) return;
        this._visible = v;
        if (v) { this._refresh(); this._timer = setInterval(() => this._refresh(), 5 * 60 * 1000); this._loop(); }
        else { clearInterval(this._timer); cancelAnimationFrame(this._raf); this._raf = null; }
      });
      this._io.observe(this);
      this._ro = new ResizeObserver(() => { if (this._visible) this._layout(); });
      this._ro.observe(this);
    }
    disconnectedCallback() { this._io?.disconnect(); this._ro?.disconnect(); clearInterval(this._timer); cancelAnimationFrame(this._raf); this._raf = null; this._visible = false; }

    _setZoom(z) {
      z = Math.max(6, Math.min(10, z));
      if (z === this._zoom) return;
      this._zoom = z; this._key = null; this._refresh();
    }
    _setPlaying(p) { this._playing = p; this._el.play.setAttribute("icon", p ? "mdi:pause" : "mdi:play"); this._t = performance.now(); }

    // Kacheln + Bildgröße für den aktuellen Ausschnitt
    _layout() {
      const m = this._el.map, W = m.clientWidth, H = m.clientHeight;
      if (!W || !H || !this._center) return false;
      const key = `${W}x${H}@${this._zoom}`;
      if (key === this._key) return true;
      this._key = key; this._W = W; this._H = H;
      const z = this._zoom, s = mpp(z), [cx, cy] = this._center;
      this._bbox = [cx - W / 2 * s, cy - H / 2 * s, cx + W / 2 * s, cy + H / 2 * s];
      // Weltpixel der linken oberen Ecke
      const px0 = (this._bbox[0] + Math.PI * R) / s, py0 = (Math.PI * R - this._bbox[3]) / s;
      const n = 2 ** z, t0x = Math.floor(px0 / TILE), t0y = Math.floor(py0 / TILE);
      let html = "";
      for (let ty = t0y; ty * TILE < py0 + H; ty++) for (let tx = t0x; tx * TILE < px0 + W; tx++) {
        if (ty < 0 || ty >= n) continue;
        const x = ((tx % n) + n) % n;
        // HA setzt <meta name="referrer" content="same-origin">; OSM verlangt aber einen Referer -> je Kachel erlauben
        html += `<img referrerpolicy="strict-origin-when-cross-origin" src="https://tile.openstreetmap.org/${z}/${x}/${ty}.png" style="left:${Math.round(tx * TILE - px0)}px;top:${Math.round(ty * TILE - py0)}px" alt="">`;
      }
      this._el.tiles.innerHTML = html;
      const dpr = Math.min(2, window.devicePixelRatio || 1), c = this._el.canvas;
      c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
      this._cache.clear();
      return true;
    }

    _times() {
      const st = this._cfg.step * 60000, now = Date.now();
      const base = Math.floor((now - 5 * 60000) / (5 * 60000)) * 5 * 60000;   // letzte sichere Analyse (5-Min-Raster)
      const out = [];
      for (let t = base - this._cfg.past * 60000; t <= base + this._cfg.future * 60000; t += st) out.push(t);
      return { list: out, nowIdx: Math.round(this._cfg.past * 60000 / st) };   // „jetzt“ = neuestes gemessenes Bild
    }

    _url(t) {
      const [x0, y0, x1, y1] = this._bbox;
      const q = new URLSearchParams({ service: "WMS", version: "1.3.0", request: "GetMap", layers: this._cfg.layer, styles: "",
        format: "image/png", transparent: "true", crs: "EPSG:3857", bbox: [x0, y0, x1, y1].map((v) => v.toFixed(0)).join(","),
        width: String(this._W), height: String(this._H), time: new Date(t).toISOString().replace(/\.\d+Z$/, ".000Z") });
      return `${WMS}?${q}`;
    }

    // DWD-Bild laden und aufbereiten: „keine Daten“-Grau -> zarter Schleier, Magenta-Rand -> feine helle Linie
    _load(t) {
      const url = this._url(t);
      if (this._cache.has(url)) return this._cache.get(url);
      const p = new Promise((res) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          try {
            const cv = document.createElement("canvas");
            cv.width = img.width; cv.height = img.height;
            const x = cv.getContext("2d", { willReadFrequently: true });
            x.drawImage(img, 0, 0);
            const d = x.getImageData(0, 0, cv.width, cv.height), a = d.data;
            for (let i = 0; i < a.length; i += 4) {
              if (!a[i + 3]) continue;
              const r = a[i], g = a[i + 1], b = a[i + 2];
              if (Math.abs(r - g) < 8 && Math.abs(g - b) < 8 && r > 95 && r < 170) { a[i] = a[i + 1] = a[i + 2] = 255; a[i + 3] = 8; }
              else if (b >= 150 && r >= 140 && Math.abs(r - b) <= 16 && g < r - 40) { a[i] = a[i + 1] = a[i + 2] = 255; a[i + 3] = Math.round(a[i + 3] * .22); }
            }
            x.putImageData(d, 0, 0);
            res(cv);
          } catch (e) { res(null); }
        };
        img.onerror = () => res(null);
        img.src = url;
      });
      this._cache.set(url, p);
      return p;
    }

    async _refresh() {
      if (!this._visible || !this._center || !this._layout()) return;
      const gen = (this._gen = (this._gen || 0) + 1);
      const { list, nowIdx } = this._times();
      const frames = list.map((t, i) => ({ t, fc: i > nowIdx, now: i === nowIdx, img: null, miss: false }));
      this._frames = frames; this._nowIdx = nowIdx; this._idx = nowIdx;   // Start bei „jetzt“, dann Vorhersage, dann Schleife
      this._renderTimeline();
      this._el.status.textContent = "lädt …";
      this._rain();
      // „Jetzt“ zuerst, dann der Rest (max. 4 gleichzeitig)
      const order = [nowIdx, ...frames.map((_, i) => i).filter((i) => i !== nowIdx)];
      let done = 0;
      const worker = async () => {
        while (order.length) {
          const i = order.shift();
          const cv = await this._load(frames[i].t);
          if (gen !== this._gen) return;
          frames[i].img = cv; frames[i].miss = !cv; done++;
          if (i === nowIdx || !this._drawn) this._show(this._playing ? this._idx : nowIdx, true);
          this._el.status.textContent = done < frames.length ? `lädt ${done}/${frames.length}` : "";
          this._renderTimeline();
        }
      };
      await Promise.all([worker(), worker(), worker(), worker()]);
      if (gen === this._gen && frames.every((f) => f.miss)) this._el.status.textContent = "Radar derzeit nicht erreichbar";
    }

    _renderTimeline() {
      const N = this._frames.length, lbl = this.shadowRoot.querySelector(".tl-lbl b");
      if (N && lbl) lbl.style.left = `${((this._nowIdx + 0.5) / N) * 100}%`;   // „jetzt“ genau unter seiner Markierung
      this._el.tl.innerHTML = this._frames.map((f, i) =>
        `<span class="${f.fc ? "fc" : ""} ${f.now ? "now" : ""} ${i === this._idx ? "cur" : ""} ${f.miss ? "miss" : ""}"></span>`).join("");
    }

    _draw(a, b, f) {
      const c = this._el.canvas, x = c.getContext("2d");
      x.clearRect(0, 0, c.width, c.height);
      x.imageSmoothingEnabled = true; x.imageSmoothingQuality = "high";
      if (a?.img) { x.globalAlpha = 1 - f; x.drawImage(a.img, 0, 0, c.width, c.height); }
      if (b?.img && f > 0) { x.globalAlpha = f; x.drawImage(b.img, 0, 0, c.width, c.height); }
      x.globalAlpha = 1;
    }

    _show(i, hard) {
      const fr = this._frames[i];
      if (!fr) return;
      this._idx = i;
      if (hard) this._draw(fr, null, 0);
      this._drawn = this._drawn || !!fr.img;
      const d = new Date(fr.t), mins = Math.round((fr.t - Date.now()) / 60000);
      this._el.badge.className = `badge ${fr.fc ? "fc" : ""} ${fr.now ? "now" : ""}`;
      this._el.badge.querySelector("b").textContent = hhmm(d);
      this._el.badge.querySelector("span").textContent = fr.now ? "jetzt" : fr.fc ? `Vorhersage · in ${mins} Min` : `vor ${-mins} Min`;
      const spans = this._el.tl.children;
      for (let k = 0; k < spans.length; k++) spans[k].classList.toggle("cur", k === i);
    }

    // Animationsschleife: Bild halten, weich überblenden; bei „jetzt“ und am Ende länger stehen
    _loop() {
      if (this._raf) return;
      this._t = performance.now();
      const step = (now) => {
        this._raf = requestAnimationFrame(step);
        if (!this._visible) return;
        const F = this._frames;
        if (!this._playing || F.length < 2) return;
        const cur = F[this._idx];
        const hold = this._idx === F.length - 1 ? HOLD_END : cur?.now ? HOLD_NOW : HOLD;
        const el = now - this._t;
        let n = (this._idx + 1) % F.length;
        let guard = 0;
        while (F[n] && !F[n].img && guard++ < F.length) n = (n + 1) % F.length;   // fehlende Bilder überspringen
        if (el < hold) return;
        if (n === 0 || el >= hold + FADE) { this._draw(F[n], null, 0); this._show(n, false); this._t = now; return; }
        this._draw(cur, F[n], (el - hold) / FADE);
      };
      this._raf = requestAnimationFrame(step);
    }

    // Regen am Haus: Open-Meteo, 15-Min-Werte der nächsten 2 Stunden
    async _rain() {
      if (this._rainAt && Date.now() - this._rainAt < 10 * 60000) return;
      const [lat, lon] = this._latlon;
      try {
        const q = new URLSearchParams({ latitude: lat.toFixed(3), longitude: lon.toFixed(3), minutely_15: "precipitation",
          forecast_minutely_15: "9", timezone: "auto" });
        const j = await (await fetch(`${OM}?${q}`)).json();
        const times = j.minutely_15.time, vals = j.minutely_15.precipitation;
        // erster Wert ist das laufende Viertel -> ab jetzt 8 Werte
        const now = Date.now();
        let s = times.findIndex((t) => new Date(t).getTime() + 15 * 60000 > now); if (s < 0) s = 0;
        const slots = times.slice(s, s + 8).map((t, i) => ({ t: new Date(t), mm: Math.max(0, vals[s + i] || 0) }));
        this._rainAt = Date.now();
        this._renderRain(slots);
      } catch (e) { this._el.sum.textContent = "Vorhersage nicht erreichbar"; }
    }

    _renderRain(slots) {
      const wet = (x) => x.mm >= 0.05;
      const i0 = slots.findIndex(wet);
      const peak = Math.max(...slots.map((x) => x.mm * 4));
      const word = peak < 2.5 ? "leichter" : peak < 10 ? "mäßiger" : "starker";
      let txt;
      if (i0 < 0) txt = "Trocken – kein Regen in Sicht";
      else if (i0 === 0) {
        const e = slots.findIndex((x, k) => k > 0 && !wet(x));
        txt = e < 0 ? `Es regnet (${word} Regen) – hält die nächsten 2 Std an` : `Es regnet – hört gegen ${hhmm(slots[e].t)} auf`;
      } else {
        const e = slots.findIndex((x, k) => k > i0 && !wet(x));
        txt = `${word[0].toUpperCase() + word.slice(1)} Regen ab ca. ${hhmm(slots[i0].t)}` + (e > 0 ? ` bis ${hhmm(slots[e].t)}` : "");
      }
      this._el.sum.textContent = txt;
      this._el.bars.innerHTML = slots.map((x, k) => {
        const mmh = x.mm * 4, h = x.mm < 0.05 ? 3 : Math.max(8, Math.min(46, 10 + Math.sqrt(mmh) * 12));
        const col = x.mm < 0.05 ? "" : `background:${rateColor(mmh)};box-shadow:0 0 10px ${rateColor(mmh)}66`;
        return `<div class="bar" title="${x.mm.toFixed(1)} mm"><i style="height:${h}px;${col}"></i><small>${k % 2 === 0 ? hhmm(x.t) : "&nbsp;"}</small></div>`;
      }).join("");
    }

    getCardSize() { return 10; }
    getGridOptions() { return { columns: "full", rows: "auto" }; }
  }

  customElements.define("nullglow-radar-card", NullglowRadarCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-radar-card", name: "Nullglow Regenradar", description: "DWD-Radar mit 2-h-Vorhersage + Regen am Haus" });
})();

// ───── nullglow-mower-map-card.js ─────
(() => {
  if (customElements.get("nullglow-mower-map-card")) return;
  let ACC = "#7cffb2", ACC2 = "#2be38f";   // Akzent des aktiven Designs, in _render() aus dem Theme gelesen
  let DANGER = "#ff6b6b", INFO = "#6be3ff", DIMV = "#93a79d", BG = "#05070a";   // SVG-Attribute: in _render() aus dem Theme gelesen
  const TXT = "var(--ng-txt, #e8f5ee)", DIM = "var(--ng-txt-dim, #93a79d)";       // CSS
  const ACTIVE = ["mowing", "returning"];
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const STYLE = `
    :host { display: block; }
    ha-card, .card { position: relative; overflow: hidden; padding: 0; border-radius: var(--ha-card-border-radius, 20px);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045)); box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09)); }
    .map { position: relative; cursor: pointer; }
    .map::before { content: ""; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(70% 70% at 50% 50%, rgba(var(--rgb-ng-acc, 124, 255, 178), .06), transparent 70%); }
    svg.garden { position: absolute; inset: 12px; width: calc(100% - 24px); height: calc(100% - 24px); overflow: visible; }
    .chip { position: absolute; left: 14px; top: 12px; padding: 8px 14px; border-radius: 14px; background: rgba(var(--rgb-ng-bg, 5, 7, 10), .66);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .08); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
    .chip b { display: block; font: 600 22px/1.1 var(--ha-font-family-body, sans-serif); color: ${TXT}; }
    .chip span { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: ${DIM}; }
    .legend { position: absolute; right: 14px; bottom: 12px; display: flex; gap: 12px; padding: 6px 10px; border-radius: 10px;
      background: rgba(var(--rgb-ng-bg, 5, 7, 10), .66); font-size: 11px; color: ${DIM}; }
    .legend span { display: inline-flex; align-items: center; gap: 5px; }
    .legend i { width: 10px; height: 10px; border-radius: 3px; display: inline-block; }
    .empty { position: absolute; inset: 0; display: grid; place-items: center; color: ${DIM}; font-size: 13px; }
    @keyframes ngmow { 0% { r: 14px; opacity: .8; } 100% { r: 46px; opacity: 0; } }
    .pulse { fill: none; stroke: var(--ng-acc, #7cffb2); stroke-width: 2.5; animation: ngmow 2s ease-out infinite; }
  `;

  // Punkte eines Polygon/Polyline-Attributs -> [x, y][]
  const pts = (s) => (s || "").trim().split(/\s+/).map((p) => p.split(",").map(Number)).filter((p) => p.length === 2 && isFinite(p[0]));

  class NullglowMowerMapCard extends HTMLElement {
    setConfig(config) {
      if (!config?.camera) throw new Error("nullglow-mower-map-card: camera angeben");
      this._cfg = { height: 470, ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = `<div class="map" style="height:${this._cfg.height}px"><div class="empty">Karte lädt …</div></div>
        <div class="chip"><b>–</b><span>Garten</span></div>
        <div class="legend"><span><i style="background:rgba(var(--rgb-ng-acc, 124, 255, 178),.35);box-shadow:inset 0 0 0 1px var(--ng-acc, #7cffb2)"></i>Rasen</span>
          <span><i style="background:rgba(255,107,107,.3);box-shadow:inset 0 0 0 1px var(--ng-danger, #ff6b6b)"></i>Sperrzone</span>
          <span><i style="background:rgba(107,227,255,.25);box-shadow:inset 0 0 0 1px var(--ng-info, #6be3ff)"></i>VisionFence aus</span>
          <span><i style="background:var(--ng-bg, #05070a);box-shadow:inset 0 0 0 1px ${DIM}"></i>Station</span></div>`;
      this.shadowRoot.appendChild(card);
      this._map = card.querySelector(".map");
      this._chip = card.querySelector(".chip");
      this._map.addEventListener("click", () => {
        const ev = new Event("hass-more-info", { bubbles: true, composed: true });
        ev.detail = { entityId: this._cfg.mower || this._cfg.camera };
        this.dispatchEvent(ev);
      });
    }

    set hass(h) {
      this._hass = h;
      const m = this._cfg.mower && h.states[this._cfg.mower];
      const active = !!m && ACTIVE.includes(m.state);
      if (active !== this._active) { this._active = active; this._schedule(); }
      this._renderChip();
      const pic = h.states[this._cfg.camera]?.attributes?.entity_picture;
      if (pic && !this._loadedOnce && this._visible) this._fetch();
    }

    connectedCallback() {
      this._io = new IntersectionObserver((es) => {
        this._visible = es.some((x) => x.isIntersecting);
        if (this._visible) this._fetch();
        this._schedule();
      });
      this._io.observe(this);
    }
    disconnectedCallback() { this._io?.disconnect(); clearInterval(this._timer); this._timer = null; }

    _schedule() {
      clearInterval(this._timer); this._timer = null;
      if (!this._visible) return;
      this._timer = setInterval(() => this._fetch(), this._active ? 15000 : 120000);
    }

    _renderChip() {
      const h = this._hass, cov = this._cfg.coverage && h.states[this._cfg.coverage];
      const m = this._cfg.mower && h.states[this._cfg.mower];
      const zone = m?.attributes?.current_zone || h.states[this._cfg.zone]?.state || "Garten";
      const a = cov?.attributes || {};
      const pct = cov && isFinite(parseFloat(cov.state)) ? Math.round(parseFloat(cov.state)) : null;
      const area = isFinite(a.total_area) ? `${Math.round(a.total_area)} m²` : "";
      this._chip.querySelector("b").textContent = pct != null ? `${zone} · ${pct} %` : zone;
      this._chip.querySelector("span").textContent = [area && `Rasen ${area}`, pct != null ? "gemäht" : ""].filter(Boolean).join(" · ") || "Garten";
    }

    async _fetch() {
      const pic = this._hass?.states[this._cfg.camera]?.attributes?.entity_picture;
      if (!pic || this._busy) return;
      this._busy = true;
      try {
        const r = await fetch(pic, { cache: "no-store" });
        if (!r.ok) throw new Error(r.status);
        const txt = await r.text();
        if (txt !== this._last) { this._last = txt; this._render(txt); }
        this._loadedOnce = true;
      } catch (e) {
        if (!this._loadedOnce) this._map.innerHTML = `<div class="empty">Karte nicht erreichbar</div>`;
      } finally { this._busy = false; }
    }

    _render(txt) {
      const cs = getComputedStyle(this);   // Farben des aktiven Designs
      ACC = `rgb(${cs.getPropertyValue("--rgb-ng-acc").trim() || "124, 255, 178"})`;
      ACC2 = `rgb(${cs.getPropertyValue("--rgb-ng-acc-2").trim() || "43, 227, 143"})`;
      const tok = (v, d) => cs.getPropertyValue(v).trim() || d;
      DANGER = tok("--ng-danger", "#ff6b6b"); INFO = tok("--ng-info", "#6be3ff"); DIMV = tok("--ng-txt-dim", "#93a79d"); BG = tok("--ng-bg", "#05070a");
      const doc = new DOMParser().parseFromString(txt, "image/svg+xml");
      const svg = doc.documentElement;
      if (!svg || svg.nodeName !== "svg") return;
      const fillOf = (el) => (el.getAttribute("fill") || "").toLowerCase();
      const strokeOf = (el) => (el.getAttribute("stroke") || "").toLowerCase();
      let box = null;
      const grow = (p) => { for (const [x, y] of p) box = box ? [Math.min(box[0], x), Math.min(box[1], y), Math.max(box[2], x), Math.max(box[3], y)] : [x, y, x, y]; };

      // Legende (oben links) und Statuszeile (unten) des Originals entfernen – wir zeigen eigene
      for (const el of [...svg.querySelectorAll(":scope > rect, :scope > text")]) {   // nur oberste Ebene (Mäher-Gruppe hat relative Koordinaten)
        const x = parseFloat(el.getAttribute("x")), y = parseFloat(el.getAttribute("y"));
        if ((x >= 0 && x <= 160 && y >= 0 && y <= 100) || (el.nodeName === "text" && y >= 560)) el.remove();
      }
      for (const el of svg.querySelectorAll("polygon, polyline")) {
        const f = fillOf(el), s = strokeOf(el);
        const P = pts(el.getAttribute("points"));
        if (f === "#81c784" || s === "#43a047") {                   // Rasenfläche / Grenze
          grow(P);
          if (el.nodeName === "polygon") { el.setAttribute("fill", ACC); el.setAttribute("fill-opacity", ".12"); el.setAttribute("stroke", "none"); }
          else { el.setAttribute("stroke", ACC); el.setAttribute("stroke-width", "2.2"); el.setAttribute("stroke-opacity", ".9"); el.setAttribute("filter", "url(#ngglow)"); }
        } else if (f === "#ffab91" || s === "#ff7043") {            // Sperrzone
          el.setAttribute("fill", DANGER); el.setAttribute("fill-opacity", ".16"); el.setAttribute("stroke", DANGER);
          el.setAttribute("stroke-opacity", ".8"); el.setAttribute("stroke-dasharray", "5 4");
        } else if (f === "#90caf9" || s === "#42a5f5") {            // VisionFence aus
          el.setAttribute("fill", INFO); el.setAttribute("fill-opacity", ".12"); el.setAttribute("stroke", INFO); el.setAttribute("stroke-opacity", ".7");
        } else {                                                     // unbekannt (z. B. Mähspuren): grün getönt, dezent
          grow(P);
          if (f && f !== "none") { el.setAttribute("fill", ACC2); el.setAttribute("fill-opacity", ".22"); }
          if (s && s !== "none") { el.setAttribute("stroke", ACC2); el.setAttribute("stroke-opacity", ".5"); }
        }
      }
      // Station
      for (const el of svg.querySelectorAll("rect")) {
        if (fillOf(el) === "#37474f") { el.setAttribute("fill", BG); el.setAttribute("stroke", DIMV); el.setAttribute("stroke-width", "1.6"); }
        else if (fillOf(el) === "#eceff1") el.remove();   // Hintergrund des Zonen-Labels
      }
      for (const el of svg.querySelectorAll("path")) {   // Blitz/Pfeil an der Station
        if (fillOf(el) === "#69f0ae") { el.setAttribute("fill", ACC); el.setAttribute("stroke", "none"); }
      }
      // Zonen-Beschriftung dezent, sie steht zusätzlich im Chip
      for (const el of svg.querySelectorAll("text")) {
        el.setAttribute("fill", DIMV); el.setAttribute("font-family", "Space Grotesk, sans-serif"); el.setAttribute("opacity", ".85");
        el.removeAttribute("stroke");
      }
      // Mäher: dunkler Körper, grüner Rand, leuchtende Front; Puls beim Mähen
      for (const g of svg.querySelectorAll("g[transform]")) {
        const body = g.querySelector("rect"), front = [...g.querySelectorAll("circle")].find((c) => fillOf(c) === "#ff6d00");
        if (!body || !front) continue;
        body.setAttribute("fill", BG); body.setAttribute("stroke", ACC); body.setAttribute("stroke-width", "2.2");
        for (const c of g.querySelectorAll("circle")) if (c !== front) c.setAttribute("fill", DIMV);
        front.setAttribute("fill", ACC); front.setAttribute("stroke", BG); front.setAttribute("filter", "url(#ngglow)");
        const m = /translate\(([-\d.]+)[ ,]+([-\d.]+)\)/.exec(g.getAttribute("transform"));
        if (m) {
          const glow = doc.createElementNS("http://www.w3.org/2000/svg", "circle");
          glow.setAttribute("cx", m[1]); glow.setAttribute("cy", m[2]); glow.setAttribute("r", "26");
          glow.setAttribute("fill", "url(#ngmower)");
          g.parentNode.insertBefore(glow, g);
          if (this._active) {
            const p = doc.createElementNS("http://www.w3.org/2000/svg", "circle");
            p.setAttribute("cx", m[1]); p.setAttribute("cy", m[2]); p.setAttribute("r", "14"); p.setAttribute("class", "pulse");
            g.parentNode.insertBefore(p, g);
          }
          grow([[+m[1], +m[2]]]);
        }
      }
      const defs = doc.createElementNS("http://www.w3.org/2000/svg", "defs");
      defs.innerHTML = `<filter id="ngglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <radialGradient id="ngmower"><stop offset="0" stop-color="${ACC}" stop-opacity=".45"/><stop offset="1" stop-color="${ACC}" stop-opacity="0"/></radialGradient>`;
      svg.insertBefore(defs, svg.firstChild);
      // auf den Garten zuschneiden
      if (box) {
        const pad = Math.max(24, (box[2] - box[0]) * 0.06);
        svg.setAttribute("viewBox", `${box[0] - pad} ${box[1] - pad} ${box[2] - box[0] + 2 * pad} ${box[3] - box[1] + 2 * pad}`);
      }
      svg.removeAttribute("width"); svg.removeAttribute("height");
      svg.setAttribute("class", "garden");
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
      this._map.innerHTML = "";
      this._map.appendChild(document.importNode(svg, true));
    }

    getCardSize() { return 8; }
    getGridOptions() { return { columns: "full", rows: "auto" }; }
  }

  customElements.define("nullglow-mower-map-card", NullglowMowerMapCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-mower-map-card", name: "Nullglow Gartenkarte", description: "Karte des Mähroboters (navimow_pro) im Nullglow-Look" });
})();

// ───── nullglow-mower-stats-card.js ─────
(() => {
  if (customElements.get("nullglow-mower-stats-card")) return;
  const BAD = ["unavailable", "unknown", ""];
  const n = (v, d = 1) => Number(v).toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const STYLE = `
    :host { display: block; height: 100%; }
    .card { box-sizing: border-box; height: 100%; padding: 16px; border-radius: var(--ha-card-border-radius, 20px);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045)); box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      display: flex; flex-direction: column; gap: 16px; }
    .top { display: grid; grid-template-columns: 96px 1fr; gap: 16px; align-items: center; }
    .ring { position: relative; width: 96px; height: 96px; cursor: pointer; }
    .ring svg { width: 96px; height: 96px; transform: rotate(-90deg); }
    .ring .v { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; }
    .ring b { font: 600 24px/1 var(--ha-font-family-body, sans-serif); color: var(--ng-txt, #e8f5ee); }
    .ring small { display: block; margin-top: 3px; font-size: 9px; letter-spacing: .12em; text-transform: uppercase; color: var(--ng-txt-mute, #5f6f68); }
    .areas { display: grid; gap: 7px; }
    .a { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; cursor: pointer; }
    .a span { font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--ng-txt-mute, #5f6f68); white-space: nowrap; }
    .a b { font: 500 15px/1 var(--ha-font-family-code, monospace); font-variant-numeric: tabular-nums; color: var(--ng-txt, #e8f5ee); white-space: nowrap; }
    .a b small { font-size: .72em; color: var(--ng-txt-dim, #93a79d); margin-left: .15em; font-weight: 400; }
    .sec { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--ng-txt-mute, #5f6f68); margin-bottom: -6px; }
    .wear { display: grid; gap: 10px; }
    .w { display: grid; grid-template-columns: 70px 1fr 44px; align-items: center; gap: 10px; cursor: pointer; }
    .w span { font-size: 13px; color: var(--ng-txt-dim, #93a79d); }
    .w b { font: 500 14px/1 var(--ha-font-family-code, monospace); color: var(--ng-txt, #e8f5ee); text-align: right; }
    .track { position: relative; height: 10px; border-radius: 999px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .05); box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .05); }
    .fill { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 999px; transition: width .6s ease; }
    .w em { grid-column: 2 / 4; font-style: normal; font-size: 11px; color: var(--ng-txt-mute, #5f6f68); margin-top: -6px; }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
    .chip { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; font-size: 12px;
      color: var(--ng-txt-dim, #93a79d); background: rgba(var(--rgb-ng-txt, 255, 255, 255), .04); box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .07); cursor: pointer; }
    .chip i { width: 7px; height: 7px; border-radius: 50%; background: var(--ng-txt-mute, #5f6f68); }
    .chip.ok i { background: var(--ng-acc, #7cffb2); box-shadow: 0 0 8px var(--ng-acc, #7cffb2); }
    .chip.bad { color: var(--ng-danger, #ff6b6b); box-shadow: inset 0 0 0 1px rgba(255,107,107,.4); }
    .chip.bad i { background: var(--ng-danger, #ff6b6b); box-shadow: 0 0 8px var(--ng-danger, #ff6b6b); }
    .chip ha-icon { --mdc-icon-size: 15px; }
  `;

  class NullglowMowerStatsCard extends HTMLElement {
    setConfig(config) {
      if (!config?.device) throw new Error("nullglow-mower-stats-card: device angeben");
      this._cfg = config;
      const d = config.device;
      this._e = {
        mower: `lawn_mower.${d}`, progress: `sensor.${d}_mowing_progress`, coverage: `sensor.${d}_coverage`, zone: `sensor.${d}_current_zone`,
        session: `sensor.${d}_session_area`, week: `sensor.${d}_area_this_week`, total: `sensor.${d}_total_area`,
        blades: `sensor.${d}_blades_life`, chassis: `sensor.${d}_chassis_life`, wifi: `sensor.${d}_wi_fi_signal`,
        online: `binary_sensor.${d}_online`, problem: `binary_sensor.${d}_problem`, error: `sensor.${d}_error`,
        next: `sensor.${d}_next_mow`, schedule: `switch.${d}_mowing_schedule_enabled`,
      };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      this.shadowRoot.appendChild(card);
      this._card = card;
      card.addEventListener("click", (e) => {
        const t = e.composedPath().find((x) => x.dataset?.entity);
        if (!t) return;
        const ev = new Event("hass-more-info", { bubbles: true, composed: true });
        ev.detail = { entityId: t.dataset.entity };
        this.dispatchEvent(ev);
      });
    }

    set hass(h) {
      this._hass = h;
      const E = this._e, S = (id) => h.states[id];
      const key = Object.values(E).map((id) => { const s = S(id); return s ? s.state + (s.attributes.runtime_minutes ?? "") : "-"; }).join("|");
      if (key === this._key) return;
      this._key = key;
      const num = (id) => { const s = S(id); const v = s && !BAD.includes(s.state) ? parseFloat(s.state) : NaN; return isFinite(v) ? v : null; };

      // Fortschrittsring
      const pr = num(E.progress), zone = S(E.zone)?.state || S(E.mower)?.attributes?.current_zone || "";
      const C = 2 * Math.PI * 40, off = C * (1 - Math.max(0, Math.min(100, pr ?? 0)) / 100);
      const ring = `<div class="ring" data-entity="${E.progress}"><svg viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="40" fill="none" style="stroke:rgba(var(--rgb-ng-txt, 255, 255, 255), .07)" stroke-width="8"/>
          <circle cx="48" cy="48" r="40" fill="none" stroke-width="8" stroke-linecap="round"
            stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" style="stroke: var(--ng-acc, #7cffb2); filter:drop-shadow(0 0 6px rgba(var(--rgb-ng-acc, 124, 255, 178), calc(.6 * var(--ng-glow-k, 1))))"/></svg>
        <div class="v"><div><b>${pr != null ? Math.round(pr) + " %" : "–"}</b><small>${esc(zone && zone !== "unknown" ? zone : "Fortschritt")}</small></div></div></div>`;
      const area = (lbl, id, d = 1) => { const v = num(id); return `<div class="a" data-entity="${id}"><span>${lbl}</span><b>${v != null ? n(v, d) : "–"}<small>m²</small></b></div>`; };
      const areas = `<div class="areas">${area("Letzte Fahrt", E.session)}${area("Diese Woche", E.week)}${area("Rasenfläche", E.total)}</div>`;

      // Verschleiß
      const wearRow = (lbl, id) => {
        const s = S(id), v = num(id);
        const col = v == null ? "rgba(var(--rgb-ng-txt, 255, 255, 255), .2)" : v < 20 ? "var(--ng-danger, #ff6b6b)" : v < 40 ? "var(--ng-warn, #ffd166)" : "var(--ng-acc, #7cffb2)";
        const a = s?.attributes || {}, used = isFinite(a.runtime_minutes) ? a.runtime_minutes / 60 : null, iv = a.reminder_interval_hours;
        const hint = used != null && iv ? `${n(used, 0)} von ${iv} Std · Wechsel in ca. ${n(Math.max(0, iv - used), 0)} Std` : "";
        return `<div class="w" data-entity="${id}"><span>${lbl}</span><div class="track"><div class="fill" style="width:${v ?? 0}%;background:${col};box-shadow:0 0 10px ${col}"></div></div>
          <b>${v != null ? Math.round(v) + " %" : "–"}</b>${hint ? `<em>${hint}</em>` : ""}</div>`;
      };
      const wear = `<div class="sec">Verschleiß</div><div class="wear">${wearRow("Messer", E.blades)}${wearRow("Fahrwerk", E.chassis)}</div>`;

      // Chips
      const on = S(E.online)?.state === "on", prob = S(E.problem)?.state === "on";
      const err = S(E.error)?.state;
      const wifi = num(E.wifi), next = S(E.next), sched = S(E.schedule);
      const nextTxt = next && !BAD.includes(next.state) ? new Date(next.state).toLocaleString("de-DE", { weekday: "short", hour: "2-digit", minute: "2-digit" }) : null;
      const chips = `<div class="chips">
        <span class="chip ${on ? "ok" : "bad"}" data-entity="${E.online}"><i></i>${on ? "Online" : "Offline"}</span>
        <span class="chip" data-entity="${E.wifi}"><ha-icon icon="mdi:wifi"></ha-icon>WLAN ${wifi != null ? wifi : "–"}</span>
        <span class="chip ${prob ? "bad" : "ok"}" data-entity="${E.error}"><i></i>${prob ? esc(err && err !== "No errors" ? err : "Störung") : "Keine Fehler"}</span>
        <span class="chip" data-entity="${nextTxt ? E.next : E.schedule}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${nextTxt ? "Nächstes Mähen " + esc(nextTxt) : sched?.state === "on" ? "Kein Termin geplant" : "Mähplan aus"}</span>
      </div>`;
      this._card.innerHTML = `<div class="top">${ring}${areas}</div>${wear}${chips}`;
    }

    getCardSize() { return 6; }
    getGridOptions() { return { columns: "full", rows: "auto" }; }
  }

  customElements.define("nullglow-mower-stats-card", NullglowMowerStatsCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-mower-stats-card", name: "Nullglow Mäher-Statistik", description: "Fortschritt, Flächen, Verschleiß, Status (navimow_pro)" });
})();

// ───── nullglow-ambient.js ─────
(() => {
  if (window.__ngAmbientLoaded) return;
  window.__ngAmbientLoaded = true;

  const C = (r, g, b, a) => ({ r, g, b, a });
  const NONE = C(0, 0, 0, 0);
  // Tagespaletten [oben links, oben rechts, unten, Schein] — bewusst dezent, Grün bleibt die Grundfarbe
  // Grundfarbe = Akzent des aktiven Designs (A1 = acc-2, A2 = acc, A3 = acc-3; Nullglow-Grün als Rückfall), Wetter tönt
  const A = { 1: [43, 227, 143], 2: [124, 255, 178], 3: [15, 184, 122] };
  const CA = (n, a) => C(A[n][0], A[n][1], A[n][2], a);
  const DAY = {
    get default() { return [CA(1, .16), CA(2, .10), CA(3, .12), NONE]; },
    get sunny() { return [CA(1, .13), C(255, 190, 100, .17), CA(3, .10), C(255, 214, 150, .07)]; },
    get partlycloudy() { return [CA(1, .15), C(255, 210, 150, .10), CA(3, .11), NONE]; },
    cloudy:         [C(110, 150, 138, .12), C(140, 160, 160, .08), C(60, 110, 96, .10), NONE],
    fog:            [C(170, 190, 185, .10), C(170, 185, 185, .08), C(120, 140, 140, .08), C(200, 210, 210, .04)],
    rainy:          [C(40, 170, 190, .14), C(90, 150, 255, .11), C(20, 110, 150, .12), NONE],
    pouring:        [C(40, 150, 200, .17), C(80, 120, 255, .14), C(20, 90, 160, .15), C(80, 120, 255, .05)],
    snowy:          [C(190, 225, 255, .12), C(160, 200, 255, .10), C(120, 180, 220, .09), C(220, 235, 255, .05)],
    lightning:      [C(140, 110, 255, .14), C(255, 209, 102, .09), C(70, 80, 200, .12), C(170, 140, 255, .06)],
    windy:          [C(60, 220, 190, .14), C(120, 230, 220, .09), C(20, 160, 150, .11), NONE],
  };
  const ALIAS = { 'clear-night': 'sunny', 'snowy-rainy': 'snowy', hail: 'snowy', 'lightning-rainy': 'lightning',
    'windy-variant': 'windy', exceptional: 'default' };
  // Klare/teils bewölkte Nacht: Mondlicht statt Sonne
  const NIGHT_CLEAR = [C(80, 100, 220, .12), C(110, 130, 240, .09), C(40, 60, 160, .10), C(160, 180, 255, .06)];
  const DUSK = C(255, 140, 110, .13);   // Dämmerung: rosé-orange oben rechts

  const css = (c) => `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a.toFixed(3)})`;
  const dim = (c, f) => C(c.r, c.g, c.b, c.a * f);

  function palette(state, elev) {
    const key = DAY[state] ? state : ALIAS[state] || 'default';
    let p = DAY[key].slice();
    const night = elev != null && elev < -4;
    const dusk = elev != null && elev >= -4 && elev <= 6;
    if (night) {
      p = ['sunny', 'partlycloudy'].includes(key) || state === 'clear-night' ? NIGHT_CLEAR.slice() : p.map((c) => dim(c, .6));
    } else if (dusk && ['sunny', 'partlycloudy', 'default', 'windy'].includes(key)) {
      p[1] = DUSK;
    }
    return p;
  }

  // Akzentfarben am Dashboard lesen (Theme-Tokens der View)
  let light = false;   // helles Design (--ng-is-light): Flächen etwas dunkler/zarter, sonst verschwinden helle Töne auf hellem Grund
  function readAccent() {
    const find = (root) => { for (const e of root.querySelectorAll('*')) { if (e.localName === 'hui-view-container' || e.localName === 'hui-view') return e;
      if (e.shadowRoot) { const x = find(e.shadowRoot); if (x) return x; } } return null; };
    const el = find(document);
    if (!el) return;
    const cs = getComputedStyle(el);
    light = cs.getPropertyValue('--ng-is-light').trim() === '1';
    for (const [n, v] of [[1, '--rgb-ng-acc-2'], [2, '--rgb-ng-acc'], [3, '--rgb-ng-acc-3']]) {
      const m = cs.getPropertyValue(v).match(/\d+/g); if (m && m.length >= 3) A[n] = m.slice(0, 3).map(Number);
    }
  }

  let forced = null, lastKey = '';
  function tick() {
    try {
      const h = document.querySelector('home-assistant')?.hass;
      if (!h && !forced) return;
      let state, elev;
      if (forced) [state, elev] = forced;
      else {
        const w = h.states['weather.forecast_home'] || Object.values(h.states).find((s) => s.entity_id.startsWith('weather.'));
        state = w ? w.state : 'default';
        const sun = h.states['sun.sun'];
        elev = sun ? parseFloat(sun.attributes.elevation) : null;
        if (!isFinite(elev)) elev = null;
      }
      readAccent();
      let p = palette(state, elev);
      if (light) p = p.map((c) => C(Math.round(c.r * .78), Math.round(c.g * .78), Math.round(c.b * .78), c.a * .8));
      const key = p.map(css).join('|');
      if (key === lastKey) return;
      lastKey = key;
      const st = document.documentElement.style;
      p.forEach((c, i) => st.setProperty(`--ng-amb-${i + 1}`, css(c)));
      st.setProperty('--ng-amb-state', `"${state}"`);
    } catch (e) { /* Hintergrund ist Kür — nie etwas anderes stören */ }
  }

  window.__ngAmbient = (state, elev) => { forced = state ? [state, elev ?? 30] : null; lastKey = ''; tick(); };
  setTimeout(tick, 1500);
  window.addEventListener('nullglow-design', () => { lastKey = ''; tick(); });   // Design gewechselt (nullglow-design.js)
  setInterval(tick, 30000);
})();

// ───── nullglow-aurora.js ─────
(() => {
  if (window.__ngAuroraLoaded) return;
  window.__ngAuroraLoaded = true;

  const CFG = {
    solar: [], solarPeak: 800, grid: [], monitor: null,
    fps: 30, scale: 0.5, height: "68vh",
  };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const VS = "attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }";
  const FS = `
    precision mediump float;
    uniform vec2 uRes; uniform float uTime; uniform float uPower; uniform float uCalm; uniform float uNight; uniform vec3 uAcc; uniform vec3 uAcc2; uniform float uLight;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 7.1; a *= 0.5; } return v; }

    void main() {
      vec2 uv = gl_FragCoord.xy / uRes;
      float aspect = uRes.x / uRes.y;
      float x = uv.x * aspect;
      float y = 1.0 - uv.y;                         // 0 oben … 1 unten
      float t = uTime;
      float energy = mix(0.25, 1.0, uPower);        // Lebendigkeit
      vec3 green = uAcc;                            // Akzent des Designs (Nullglow #7cffb2)
      vec3 deep = uAcc2;                            // zweiter Akzent (Nullglow #2be38f)
      vec3 cyan = vec3(0.30, 0.86, 0.95);
      vec3 violet = vec3(0.58, 0.46, 1.0);
      vec3 col = vec3(0.0);
      for (int i = 0; i < 3; i++) {
        float fi = float(i);
        float w = fi < 0.5 ? 1.0 : (fi < 1.5 ? 0.55 : 0.32);   // vorderer Vorhang hell, hintere zart
        float sp = (0.018 + 0.05 * uPower) * (1.0 + 0.35 * fi);
        // Unterkante: gefaltetes Band (zwei Wellen + Rauschen), hintere Vorhänge höher
        float base = 0.50 - 0.14 * fi
          + (0.10 - 0.02 * fi) * sin(x * (0.75 + 0.2 * fi) + t * sp * 4.0 + fi * 2.3)
          + 0.045 * sin(x * (2.1 + 0.4 * fi) - t * sp * 6.5 + fi * 5.1)
          + 0.06 * (fbm(vec2(x * 1.3 + t * sp * 2.5, fi * 4.7)) - 0.5);
        float d = base - y;                         // > 0 oberhalb der Kante
        float up = 0.14 + 0.16 * energy + 0.04 * fi;
        float prof = d > 0.0 ? exp(-d / up) : exp(d / 0.016);
        // senkrechte Strahlen, leicht schräg entlang der Faltung, ziehen seitlich
        float xs = x + d * 0.35 * sin(x * 1.7 + fi);
        float r1 = fbm(vec2(xs * 11.0 + fi * 13.0 + t * sp * 9.0, t * 0.04 + fi));
        float r2 = noise(vec2(xs * 42.0 - t * sp * 20.0, fi * 3.0 + t * 0.1));
        float rays = pow(smoothstep(0.32, 0.88, r1), 1.4) * (0.7 + 0.3 * r2);
        // Flecken entlang x: der Vorhang reißt stellenweise auf
        float patch = smoothstep(0.30, 0.72, fbm(vec2(x * 0.6 - t * sp * 1.6, fi * 9.0 + 3.0)));
        float edge = exp(-abs(d) / 0.012) * (0.5 + 0.5 * rays);            // heller Saum an der Unterkante
        float b = (prof * (0.22 + 0.78 * rays) + 0.55 * edge) * (0.2 + 0.8 * patch);
        vec3 c = mix(green, deep, smoothstep(-0.02, 0.10, d));
        c = mix(c, cyan, smoothstep(0.06, 0.26, d) * 0.75);
        c = mix(c, violet, smoothstep(0.20, 0.50, d) * (0.35 + 0.35 * energy));
        col += c * b * w;
      }
      // ruhig/blass: entsättigen; Nacht: kühler, zarter
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(col, vec3(lum) * vec3(0.75, 1.0, 0.9), 0.55 * uCalm);
      col *= mix(1.0, 1.35, uNight);              // nachts ist Nordlicht in seinem Element: etwas heller
      col *= smoothstep(1.0, 0.62, y);              // nach unten auslaufen
      col *= smoothstep(0.0, 0.10, uv.x) * smoothstep(0.0, 0.10, 1.0 - uv.x) * 0.25 + 0.75; // Ränder minimal weicher
      float master = mix(0.22, 0.9, uPower) * mix(1.0, 0.6, uCalm);
      vec3 o = col * master;
      if (uLight > 0.5) {                           // helles Design: als Farbschleier multiplizieren (Weiß = keine Änderung)
        float m = max(max(o.r, o.g), o.b);
        o = mix(vec3(1.0), o / max(m, 0.0001) * 0.9, clamp(m * 0.75, 0.0, 0.5));
      }
      gl_FragColor = vec4(o, 1.0);
    }`;

  let canvas, gl, prog, loc = {}, info = { renderer: "–", fps: 0 };
  function setup() {
    canvas = document.createElement("canvas");
    canvas.id = "ng-aurora";
    Object.assign(canvas.style, {
      position: "absolute", left: "0", top: "0", width: "100%", height: CFG.height, pointerEvents: "none",
      mixBlendMode: "screen", opacity: "0", transition: "opacity 2.5s ease",
    });
    gl = canvas.getContext("webgl", { alpha: false, antialias: false, premultipliedAlpha: false, powerPreference: "low-power" });
    if (!gl) return false;
    const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const p = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(p);
    gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);
    for (const u of ["uRes", "uTime", "uPower", "uCalm", "uNight", "uAcc", "uAcc2", "uLight"]) loc[u] = gl.getUniformLocation(prog, u);
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    info.renderer = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : "webgl";
    return true;
  }

  // Sensoren für das gerade offene Dashboard (null = hier kein Nordlicht)
  function current() {
    const base = "/" + (location.pathname.split("/")[1] || "");
    const d = (window.__nullglowDashboards || {})[base];
    if (d) return { ...CFG, ...d };
    return window.__NG_BUNDLE ? null : CFG;
  }

  // Einhängen in <hui-view-background> (wird beim View-Wechsel evtl. neu erzeugt -> Wachhund)
  const find = (root, tag) => {
    for (const e of root.querySelectorAll("*")) {
      if (e.tagName === tag) return e;
      if (e.shadowRoot) { const x = find(e.shadowRoot, tag); if (x) return x; }
    }
    return null;
  };
  function mount() {
    if (!cfg) { canvas.remove(); return; }
    const bg = find(document, "HUI-VIEW-BACKGROUND");
    if (!bg || !bg.shadowRoot) return;
    if (canvas.getRootNode() !== bg.shadowRoot) bg.shadowRoot.appendChild(canvas);
  }

  // Zielwerte aus HA, weich nachgeführt
  let forced = null;
  const target = { power: 0, calm: 0, night: 0 }, cur = { power: 0, calm: 0, night: 0 };
  let active = true, cfg = CFG;
  // Farben des aktiven Designs (Theme-Tokens am Hintergrund), Rückfall Nullglow-Grün
  const col = { acc: [0.486, 1.0, 0.698], acc2: [0.168, 0.890, 0.560], light: 0 };
  function readColors() {
    const cs = getComputedStyle(canvas), rd = (v, d) => { const m = cs.getPropertyValue(v).match(/\d+/g); return m && m.length >= 3 ? m.slice(0, 3).map((x) => x / 255) : d; };
    col.acc = rd("--rgb-ng-acc", col.acc); col.acc2 = rd("--rgb-ng-acc-2", col.acc2);
    col.light = cs.getPropertyValue("--ng-is-light").trim() === "1" ? 1 : 0;   // hell: multiplizieren statt aufhellen
    const mode = col.light ? "multiply" : "screen";
    if (canvas.style.mixBlendMode !== mode) canvas.style.mixBlendMode = mode;
  }
  function readHass() {
    const h = document.querySelector("home-assistant")?.hass;
    if (!h) return;
    const num = (id) => { const v = parseFloat(h.states[id]?.state); return isFinite(v) ? v : 0; };
    const kw = (id) => (/^kW$/i.test(h.states[id]?.attributes?.unit_of_measurement || "") ? 1000 : 1);
    const solar = Math.max(0, [].concat(cfg.solar || []).reduce((a, id) => a + num(id) * kw(id), 0));
    let grid = [].concat(cfg.grid || []).reduce((a, id) => a + num(id) * kw(id), 0);
    if (cfg.gridInvert) grid = -grid;
    grid -= [].concat(cfg.gridExport || []).reduce((a, id) => a + Math.abs(num(id) * kw(id)), 0);
    const elev = parseFloat(h.states["sun.sun"]?.attributes?.elevation);
    const mon = cfg.monitor ? h.states[cfg.monitor] : null;
    active = !!forced || !mon || mon.state !== "off";   // Test (erzwungene Werte) zeichnet immer
    if (forced) { Object.assign(target, { power: forced.power ?? 0.6, calm: forced.calm ?? 0, night: forced.night ? 1 : 0 }); return; }
    target.power = Math.min(1, Math.sqrt(solar / (cfg.solarPeak || 800)));        // Wurzel: auch 100 W sind schon sichtbar
    target.calm = solar < 30 ? Math.min(1, Math.max(0, grid) / 1200 + 0.35) : Math.max(0, 0.5 - target.power) * Math.min(1, Math.max(0, grid) / 1500);
    target.night = isFinite(elev) && elev < -4 ? 1 : 0;
  }

  let t0 = performance.now(), last = 0, frames = 0, fpsT = performance.now(), running = false;
  function frame(now) {
    running = false;
    if (document.hidden || !active) return;         // Monitor aus / Tab verdeckt: keine Bilder
    schedule();
    if (now - last < 1000 / CFG.fps - 2) return;
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    const k = 1 - Math.exp(-dt / 4);                 // ~4 s Nachführzeit
    for (const n of ["power", "calm", "night"]) cur[n] += (target[n] - cur[n]) * k;
    const w = Math.max(2, Math.round(canvas.clientWidth * CFG.scale)), h = Math.max(2, Math.round(canvas.clientHeight * CFG.scale));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; gl.viewport(0, 0, w, h); }
    // Zeit läuft je nach Energie unterschiedlich schnell weiter (kein Sprung bei Wertewechsel)
    tAcc += dt * (0.55 + 0.9 * cur.power) * (1 - 0.35 * cur.calm);
    gl.uniform2f(loc.uRes, w, h);
    gl.uniform1f(loc.uTime, tAcc);   // volle Sonne: Welle ~18 s, Strahlen ziehen langsam; nachts deutlich träger
    gl.uniform1f(loc.uPower, cur.power);
    gl.uniform1f(loc.uCalm, cur.calm);
    gl.uniform1f(loc.uNight, cur.night);
    gl.uniform3fv(loc.uAcc, col.acc);
    gl.uniform3fv(loc.uAcc2, col.acc2);
    gl.uniform1f(loc.uLight, col.light);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (canvas.style.opacity !== "1") canvas.style.opacity = "1";
    frames++;
    if (now - fpsT > 2000) { info.fps = Math.round(frames * 1000 / (now - fpsT)); frames = 0; fpsT = now; }
  }
  let tAcc = Math.random() * 100;
  function schedule() { if (!running) { running = true; requestAnimationFrame(frame); } }

  function tick() {
    try {
      cfg = current();
      mount();
      if (canvas.isConnected) readColors();
      if (!cfg && !forced) { active = false; return; }
      if (!cfg) cfg = CFG;
      readHass(); if (active && !document.hidden) schedule();
    } catch (e) { /* Kür — nie etwas anderes stören */ }
  }

  window.__ngAurora = (v) => { forced = v || null; if (v && v.snap) Object.assign(cur, { power: v.power ?? 0.6, calm: v.calm ?? 0, night: v.night ? 1 : 0 }); tick(); };
  window.__ngAurora.info = () => ({ ...info, target: { ...target }, cur: { ...cur }, active, mounted: !!canvas?.isConnected });

  try {
    if (!setup()) return;
  } catch (e) { console.warn("nullglow-aurora:", e); return; }
  document.addEventListener("visibilitychange", tick);
  setTimeout(tick, 1200);
  setInterval(tick, 2000);
})();

// ───── nullglow-covers-card.js ─────
(() => {
  if (customElements.get("nullglow-covers-card")) return;
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const STYLE = `
    :host { display: block; height: 100%; container: ngcov / inline-size; }
    .card { position: relative; height: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: var(--ha-card-border-radius, 20px);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      display: grid; grid-template-columns: auto minmax(0, 1fr) auto; grid-template-areas: "ic t btns" "bars bars bars";
      align-items: center; align-content: center; column-gap: 12px; row-gap: 10px; }
    .ic { grid-area: ic; } .mid { grid-area: t; } .btns { grid-area: btns; } .bars { grid-area: bars; }
    .card.tap { cursor: pointer; -webkit-tap-highlight-color: transparent; }
    .ic { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; flex: none;
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06); color: var(--ng-txt-dim, #93a79d); --mdc-icon-size: 22px; }
    .ic.open { background: rgba(var(--rgb-ng-acc, 124, 255, 178), .14); color: var(--ng-acc, #7cffb2); }
    .mid { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
    .mid b { font-size: 15px; font-weight: 600; color: var(--ng-txt, #e8f5ee); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .mid span { font-size: 12px; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bars { display: flex; align-items: flex-end; gap: 4px; height: 20px; min-width: 0; overflow: hidden; }
    .bars i { flex: 1 1 0; max-width: 28px; min-width: 3px; height: 100%; border-radius: 3px; position: relative; overflow: hidden;
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); }
    .bars i::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: var(--p, 0%); border-radius: 3px;
      background: var(--ng-acc, #7cffb2); opacity: .85; transition: height .6s cubic-bezier(.22,1,.36,1); }
    .bars i.na::after { background: var(--ng-txt-mute, #5f6f68); height: 100%; opacity: .25; }
    .bars i.mv::after { animation: ngcov 1.1s ease-in-out infinite; }
    @keyframes ngcov { 50% { opacity: .35; } }
    .btns { display: flex; gap: 6px; }
    .btns button { border: 0; font: inherit; font-size: 13px; font-weight: 500; min-height: 40px; padding: 0 12px; border-radius: 999px; cursor: pointer;
      display: inline-flex; align-items: center; gap: 6px; color: var(--ng-txt, #e8f5ee); background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06);
      box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255,255,255,.1)); -webkit-tap-highlight-color: transparent; white-space: nowrap;
      transition: background .2s cubic-bezier(.22,1,.36,1), color .2s; }
    .btns button ha-icon { --mdc-icon-size: 18px; }
    .btns button.arm { background: var(--ng-warn, #ffd166); color: #1a1405; box-shadow: none; }
    .btns button:active { transform: scale(.96); }
    .btns .lbl { display: inline; }
    @container ngcov (max-width: 520px) { .btns .lbl { display: none; } .btns button { padding: 0 11px; } }
  `;

  class NullglowCoversCard extends HTMLElement {
    setConfig(config) {
      if (!config?.entities?.length) throw new Error("nullglow-covers-card: entities angeben");
      this._cfg = { title: "Rollläden", icon: "mdi:window-shutter", ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = `card ${this._cfg.tap ? "tap" : ""}`;
      card.innerHTML = `
        <div class="ic"><ha-icon icon="${esc(this._cfg.icon)}"></ha-icon></div>
        <div class="mid"><b>${esc(this._cfg.title)}</b><span class="sum">–</span></div>
        <div class="bars">${this._cfg.entities.map(() => "<i></i>").join("")}</div>
        <div class="btns">
          <button data-s="open_cover" title="Alle auf"><ha-icon icon="mdi:arrow-up"></ha-icon><span class="lbl">Auf</span></button>
          <button data-s="stop_cover" title="Stopp"><ha-icon icon="mdi:stop"></ha-icon></button>
          <button data-s="close_cover" title="Alle zu"><ha-icon icon="mdi:arrow-down"></ha-icon><span class="lbl">Zu</span></button>
        </div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._card = card;
      this._bars = [...card.querySelectorAll(".bars i")];
      card.addEventListener("click", () => this._open());
      card.querySelectorAll(".btns button").forEach((b) => b.addEventListener("click", (ev) => { ev.stopPropagation(); this._press(b); }));
      this._key = null;
    }

    set hass(h) {
      this._hass = h;
      const vals = this._cfg.entities.map((id) => {
        const s = h.states[id];
        if (!s || ["unavailable", "unknown"].includes(s.state)) return null;
        const p = s.attributes.current_position;
        return { p: typeof p === "number" ? p : s.state === "closed" ? 0 : 100, mv: ["opening", "closing"].includes(s.state) };
      });
      const key = JSON.stringify(vals);
      if (key === this._key) return;
      this._key = key;
      const ok = vals.filter(Boolean), open = ok.filter((v) => v.p > 0).length, mv = ok.filter((v) => v.mv).length;
      const parts = [`${ok.length - open} zu`, `${open} offen`];
      if (mv) parts.push(`${mv} ${mv === 1 ? "fährt" : "fahren"}`);
      if (ok.length < vals.length) parts.push(`${vals.length - ok.length} nicht erreichbar`);
      this._card.querySelector(".sum").textContent = parts.join(" · ");
      this._card.querySelector(".ic").classList.toggle("open", open > 0);
      vals.forEach((v, i) => {
        const el = this._bars[i];
        el.className = v ? (v.mv ? "mv" : "") : "na";
        el.style.setProperty("--p", v ? `${Math.max(v.p, v.p > 0 ? 8 : 0)}%` : "0%");
        el.title = this._hass.states[this._cfg.entities[i]]?.attributes?.friendly_name || this._cfg.entities[i];
      });
    }

    _press(b) {
      const svc = b.dataset.s;
      if (svc !== "stop_cover" && !b.classList.contains("arm")) {   // erst scharf schalten, dann ausführen
        this._card.querySelectorAll("button.arm").forEach((x) => x.classList.remove("arm"));
        b.classList.add("arm");
        const lbl = b.querySelector(".lbl"), old = lbl.textContent;
        lbl.textContent = "Wirklich?";
        clearTimeout(this._armT);
        this._armT = setTimeout(() => { b.classList.remove("arm"); lbl.textContent = old; }, 4000);
        return;
      }
      clearTimeout(this._armT);
      b.classList.remove("arm");
      const lbl = b.querySelector(".lbl"); if (lbl) lbl.textContent = svc === "open_cover" ? "Auf" : "Zu";
      this._hass.callService("cover", svc, { entity_id: this._cfg.entities });
    }

    _open() {
      const t = this._cfg.tap;
      if (!t) return;
      if (t.startsWith("#")) {   // Bubble-Pop-up
        history.pushState(null, "", location.pathname + location.search + t);
        window.dispatchEvent(new Event("location-changed"));
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else {
        history.pushState(null, "", t);
        window.dispatchEvent(new Event("location-changed"));
      }
    }

    getCardSize() { return 2; }
    getGridOptions() { return { columns: 12, rows: 2, min_rows: 2 }; }
  }

  customElements.define("nullglow-covers-card", NullglowCoversCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-covers-card", name: "Nullglow Rollläden", description: "Viele Rollläden als eine Kachel: Zustand, Balken je Rollladen, Alle auf/zu" });
})();

// ───── nullglow-design-card.js ─────
(() => {
  if (customElements.get("nullglow-design-card")) return;
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const STYLE = `
    :host { display: block; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; padding: 4px 2px 8px; }
    .d { position: relative; border: 0; border-radius: 18px; padding: 14px 14px 12px; min-height: 104px; cursor: pointer; text-align: left;
      display: flex; flex-direction: column; justify-content: space-between; gap: 10px; font: inherit;
      transition: transform .14s cubic-bezier(.22,1,.36,1), box-shadow .26s ease;
      -webkit-tap-highlight-color: transparent; overflow: hidden; }
    .d:active { transform: scale(.97); }
    .d .sw { display: flex; gap: 6px; align-items: center; }
    .d .sw i { width: 22px; height: 22px; border-radius: 50%; display: block; }
    .d .sw i.main { width: 30px; height: 30px; }
    .d b { font-size: 15px; font-weight: 600; letter-spacing: -.01em; }
    .d small { display: block; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; opacity: .7; margin-top: 2px; }
    .d .ok { position: absolute; right: 10px; top: 10px; width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; }
    .d .ok ha-icon { --mdc-icon-size: 16px; }
    .hint { font-size: 12px; color: var(--secondary-text-color); padding: 2px 4px 6px; }
    .top { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 0 2px 8px; }
    .seg { display: inline-flex; gap: 4px; padding: 4px; border-radius: 999px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .05);
      box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255,255,255,.1)); }
    .seg button { border: 0; font: inherit; font-size: 14px; font-weight: 500; min-height: 40px; padding: 0 16px; border-radius: 999px; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--ng-txt-dim, var(--secondary-text-color));
      transition: background .2s cubic-bezier(.22,1,.36,1), color .2s cubic-bezier(.22,1,.36,1); -webkit-tap-highlight-color: transparent; }
    .seg button ha-icon { --mdc-icon-size: 18px; }
    .seg button.on { background: var(--ng-acc, var(--primary-color)); color: var(--ng-acc-ink, #fff); box-shadow: var(--ng-glow-sm, none); }
    .reset { border: 0; font: inherit; font-size: 14px; min-height: 40px; padding: 0 14px; border-radius: 999px; cursor: pointer; display: inline-flex;
      align-items: center; gap: 6px; background: transparent; color: var(--ng-txt-dim, var(--secondary-text-color));
      box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255,255,255,.1)); }
    .reset ha-icon { --mdc-icon-size: 18px; }
  `;

  // Hell/Dunkel für storage: local (Vorlage/Paket): Werte wie die Option „mode“ der Nullglow-Vorlage
  const LOCAL_MODES = [["Dunkel", "dark", "mdi:weather-night"], ["Hell", "light", "mdi:white-balance-sunny"],
    ["Sonne", "sun", "mdi:weather-sunset"], ["Gerät", "auto", "mdi:cellphone-cog"]];
  const MODE_NAME = { dark: "dunkel", light: "hell", sun: "nach Sonne", auto: "wie Gerät" };
  const readLocal = (k) => { try { return JSON.parse(localStorage.getItem(k) || "{}") || {}; } catch (e) { return {}; } };

  class NullglowDesignCard extends HTMLElement {
    setConfig(config) {
      // storage: local -> Wahl nur in diesem Browser (Schlüssel nullglow-design:<dashboard>), sonst zwei input_select-Helfer
      this._cfg = { entity: "input_select.kiosk_design", mode_entity: "input_select.kiosk_design_mode", ...config };
      this._local = this._cfg.storage === "local";
      this._lkey = `nullglow-design:${this._cfg.dashboard || "/" + (location.pathname.split("/")[1] || "lovelace")}`;
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    }

    set hass(h) {
      this._hass = h;
      const st = h.states[this._cfg.entity], md = h.states[this._cfg.mode_entity];
      const src = this._local ? JSON.stringify(readLocal(this._lkey)) : st ? `${st.state}|${(st.attributes.options || []).join(",")}|${md?.state}` : "-";
      const key = `${src}|${Object.keys(h.themes?.themes || {}).length}|${h.themes?.darkMode}`;
      if (key !== this._key) { this._key = key; this._render(); }
    }

    _theme(name) {   // Farben im gerade aktiven Modus (hell/dunkel), damit die Kacheln zeigen, was man bekommt
      const t = this._hass?.themes?.themes?.[name];
      if (!t) return null;
      const dark = this._hass.themes.darkMode !== false;
      return { ...t, ...(t.modes?.[dark ? "dark" : "light"] || t.modes?.dark || {}) };
    }

    _refresh() { window.dispatchEvent(new Event("nullglow-local-design")); this._key = null; this.hass = this._hass; }

    // Zustand + Aktionen, je nach Speicherort
    _model() {
      const h = this._hass, c = this._cfg;
      if (this._local) {
        const p = readLocal(this._lkey), all = h.themes?.themes || {};
        const options = Object.keys(all).filter((k) => all[k]?.["ng-design-title"] || all[k]?.modes?.dark?.["ng-design-title"]);
        const defD = c.default_design || "nullglow", defM = c.default_mode || "auto";
        const save = (patch) => {
          const n = { ...readLocal(this._lkey), ...patch };
          for (const k of Object.keys(n)) if (!n[k]) delete n[k];
          try { Object.keys(n).length ? localStorage.setItem(this._lkey, JSON.stringify(n)) : localStorage.removeItem(this._lkey); } catch (e) { /* privat/gesperrt */ }
          this._refresh();
        };
        const dT = String(this._theme(defD)?.["ng-design-title"] || defD).split(" — ")[0];
        return { design: p.design || defD, mode: p.mode || defM, options, modes: LOCAL_MODES,
          hint: `Gilt nur für dieses Gerät · Standard: ${dT}, ${MODE_NAME[defM] || defM}`,
          custom: !!(p.design || p.mode),
          pickDesign: (o) => save({ design: o === defD ? "" : o }), pickMode: (v) => save({ mode: v === defM ? "" : v }),
          reset: () => { try { localStorage.removeItem(this._lkey); } catch (e) { /* egal */ } this._refresh(); } };
      }
      const st = h.states[c.entity], md = h.states[c.mode_entity];
      if (!st) return null;
      const cur = String(md?.state || "");
      const modes = md ? [["Dunkel", "mdi:weather-night"], ["Hell", "mdi:white-balance-sunny"], ["Auto", "mdi:theme-light-dark"]].map(([m, i]) =>
        [m, (md.attributes.options || []).find((o) => o.toLowerCase().startsWith(m.toLowerCase())) || m, i]) : [];
      return { design: st.state, mode: cur, options: st.attributes.options || [], modes,
        hint: `Antippen wechselt sofort — auf allen Geräten, die dieses Dashboard zeigen${cur.toLowerCase().startsWith("auto") ? " · Auto: hell, solange die Sonne scheint" : ""}.`,
        pickDesign: (o) => h.callService("input_select", "select_option", { entity_id: c.entity, option: o }),
        pickMode: (v) => h.callService("input_select", "select_option", { entity_id: c.mode_entity, option: v }) };
    }

    _render() {
      const m = this._model();
      if (!m) {
        this.shadowRoot.innerHTML = `<ha-card><div class="hint" style="padding:16px">${esc(this._cfg.entity)} fehlt — Helfer anlegen und „Eingabeauswahl-Entitäten“ neu laden.</div></ha-card>`;
        return;
      }
      const tiles = m.options.map((o) => {
        const t = this._theme(o);
        if (!t) return "";
        const [name, color] = String(t["ng-design-title"] || o).split(" — ");
        const on = m.design === o;
        const bg = t["ng-bg-elev"] || t["ng-bg"] || "#0a0f14";
        const ring = on ? `box-shadow: inset 0 0 0 2px ${t["ng-acc"]}, 0 0 26px -8px ${t["ng-acc"]};` : `box-shadow: inset 0 0 0 1px ${t["ng-line-2"] || "rgba(255,255,255,.1)"}, ${t["ng-shadow"] || "none"};`;
        return `<button class="d" data-o="${esc(o)}" style="background: radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, ${t["ng-acc"]} 18%, transparent), transparent 60%), ${bg}; color: ${t["ng-txt"]}; ${ring}">
          <div class="sw"><i class="main" style="background: linear-gradient(145deg, ${t["ng-acc"]}, ${t["ng-acc-3"] || t["ng-acc-2"]}); box-shadow: 0 0 16px -2px ${t["ng-acc"]};"></i>
            <i style="background: ${t["ng-acc-2"]}"></i><i style="background: ${t["ng-txt-dim"]}"></i></div>
          <div><b style="font-family: ${esc(t["primary-font-family"] || "inherit")}">${esc(name)}</b><small>${esc(color || "")}</small></div>
          ${on ? `<span class="ok" style="background: ${t["ng-acc"]}; color: ${t["ng-acc-ink"]}"><ha-icon icon="mdi:check"></ha-icon></span>` : ""}
        </button>`;
      }).join("");
      const seg = m.modes.length ? `<div class="seg">${m.modes.map(([l, v, i]) =>
        `<button data-m="${esc(v)}" class="${m.mode === v ? "on" : ""}"><ha-icon icon="${i}"></ha-icon>${esc(l)}</button>`).join("")}</div>` : "";
      const reset = m.custom ? '<button class="reset"><ha-icon icon="mdi:backup-restore"></ha-icon>Standard</button>' : "";
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><div class="top"><div class="hint">${esc(m.hint)}</div>${seg}${reset}</div><div class="grid">${tiles}</div>`;
      this.shadowRoot.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => m.pickMode(b.dataset.m)));
      this.shadowRoot.querySelectorAll(".d").forEach((b) => b.addEventListener("click", () => m.pickDesign(b.dataset.o)));
      this.shadowRoot.querySelector(".reset")?.addEventListener("click", () => m.reset());
    }

    getCardSize() { return 6; }
    getGridOptions() { return { columns: 12, rows: "auto" }; }
  }

  customElements.define("nullglow-design-card", NullglowDesignCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-design-card", name: "Nullglow Design", description: "Design-Auswahl (Farbvarianten)" });
})();

// ───── nullglow-strategy.js ─────
(() => {
  if (customElements.get("ll-strategy-dashboard-nullglow")) return;

  // ---------- Hilfen ----------
  const WARM = "255,196,130";
  const DOMAIN = (id) => id.split(".")[0];
  const q = (s) => JSON.stringify(s); // sicher in JS-Templates (Bubble styles)
  const has = (tag) => !!customElements.get(tag);
  const AREA_ICON = [
    [/wohn|living/i, "mdi:sofa"], [/küche|kueche|kitchen/i, "mdi:stove"], [/ess|dining/i, "mdi:silverware-fork-knife"],
    [/schlaf|bed/i, "mdi:bed"], [/kind|kids|child/i, "mdi:teddy-bear"], [/gäste.?wc|\bwc\b|toilet/i, "mdi:toilet"],
    [/bad|bath/i, "mdi:shower"], [/büro|buero|office|arbeits/i, "mdi:desk"], [/flur|diele|gang|hall|treppe/i, "mdi:door"],
    [/garage/i, "mdi:garage"], [/garten|garden|terrasse|balkon/i, "mdi:flower"], [/keller|basement/i, "mdi:stairs-down"],
    [/wasch|laundry/i, "mdi:washing-machine"], [/dach|attic/i, "mdi:home-roof"], [/außen|aussen|outdoor|vorne|eingang/i, "mdi:home-export-outline"],
  ];
  const areaIcon = (a) => a.icon || (AREA_ICON.find(([re]) => re.test(a.name)) || [0, "mdi:texture-box"])[1];
  const slug = (s) => String(s).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "raum";
  const TILE_TYPO = (big) => `ha-tile-info {
  --ha-tile-info-primary-font-size: ${big}px !important; --tile-info-primary-font-size: ${big}px !important;
  --ha-tile-info-primary-line-height: ${big + 6}px !important; --tile-info-primary-line-height: ${big + 6}px !important;
  --ha-tile-info-primary-font-weight: 600 !important; --tile-info-primary-font-weight: 600 !important;
  --ha-tile-info-secondary-font-size: 11px !important; --tile-info-secondary-font-size: 11px !important;
  --ha-tile-info-secondary-letter-spacing: .12em !important; --tile-info-secondary-letter-spacing: .12em !important;
}
.content { align-items: flex-start !important; padding-top: 12px !important; }
`;
  const escRe = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Etagen-Kürzel vorne im Namen: „EG - Küche“, „OG | Bad“, „1. OG: Flur“, „Keller – Werkstatt“
  const FLOOR_RE = /^((?:[EOUDK]G|\d+\.?\s?(?:OG|Etage|Stock)|Erdgeschoss|Obergeschoss|Dachgeschoss|Untergeschoss|Kellergeschoss|Keller|Souterrain|Ground floor|First floor|Basement|Attic))\s*[-–—:|·/]+\s*/i;
  const SEP_END = /\s*[-–—:|·/]+\s*$/;
  // „EG - Badezimmer“ -> „Badezimmer“ (auch mit dem Namen der HA-Etage vorne); leer -> Original
  function shortArea(name, floorName) {
    let n = name;
    if (floorName) n = n.replace(new RegExp(`^${escRe(floorName)}\\s*[-–—:|·/]+\\s*`, "i"), "");
    n = n.replace(FLOOR_RE, "").replace(SEP_END, "").trim();
    return n || name;
  }
  // „Esszimmer Hue color lamp 4 | Hue“ -> „Hue color lamp 4“; Etage, Raum-/Gerätename vorne weg, Zusatz nach „|“ weg
  function niceName(hass, id, strip = [], short = true) {
    const full = hass.states[id]?.attributes?.friendly_name || id.split(".")[1];
    let n = full.split(" | ")[0];
    for (let k = 0; k < 2; k++) {   // zweimal: „EG - Küche - Rollladen“ -> „Küche - Rollladen“ -> „Rollladen“
      if (short) n = n.replace(FLOOR_RE, "");
      for (const x of strip.filter(Boolean)) n = n.replace(new RegExp(`^${escRe(x)}[\\s:·|/–—-]*`, "i"), "");
    }
    n = n.replace(SEP_END, "").trim();
    const fb = short ? full.split(" | ")[0].replace(FLOOR_RE, "").trim() || full : full.split(" | ")[0];   // nichts übrig: Name ohne Etage
    return n ? n.charAt(0).toUpperCase() + n.slice(1) : fb;
  }
  // „Rollladen links“ -> „links“ (für „Küche · links“)
  const coverWord = (n, room = "") => {
    let x = n.replace(/^(?:roll+[aä]den?|jalousien?|raffstores?|markisen?|shutters?|blinds?|covers?)\b[\s:·|/–—-]*/i, "").trim();
    if (room) x = x.replace(new RegExp(`^${escRe(room)}\\b[\\s:·|/–—-]*`, "i"), "").trim();
    return x;
  };
  const technical = (n) => /^[\w.-]+$/.test(n) && /[-_]/.test(n); // „buro-room-hue-scene“ o. ä.
  const num1 = (id) => `{% set x = states('${id}') %}{{ ('%.1f' | format(x | float)) | replace('.', ',') if is_number(x) else '–' }}`;
  const tempColor = (id) => `{% set t = states('${id}') | float(none) %}{{ 'grey' if t is none else 'blue' if t < 19.5 else ('grey' if t < 22.5 else ('amber' if t < 25 else 'red')) }}`;

  // ---------- Was gibt es in diesem Haus? ----------
  function inventory(hass, cfg) {
    const st = hass.states, ents = hass.entities || {}, devs = hass.devices || {};
    const areasAll = Object.values(hass.areas || {}).filter((a) => !(cfg.hide_labels || []).some((l) => a.labels?.includes(l)));
    const floors = hass.floors || {};
    // Labels zum Ausblenden (Assistent): an der Entität, ihrem Gerät oder ihrem Bereich
    const hideL = new Set(cfg.hide_labels || []);
    const labelled = (x) => !!x?.labels?.some((l) => hideL.has(l));
    const areaHidden = (aid) => hideL.size > 0 && labelled((hass.areas || {})[aid]);
    const visible = (id) => {
      const e = ents[id];
      if (!st[id] || (e && (e.hidden || e.entity_category))) return false;
      if (!hideL.size || !e) return true;
      if (labelled(e) || labelled(devs[e.device_id])) return false;
      return !areaHidden(e.area_id || devs[e.device_id]?.area_id);
    };
    const devName = (id) => { const d = devs[ents[id]?.device_id]; return d ? d.name_by_user || d.name : null; };
    const areaOf = (id) => { const e = ents[id]; return e ? (e.area_id || devs[e.device_id]?.area_id || null) : null; };
    const dc = (id) => st[id]?.attributes?.device_class;
    const ids = Object.keys(st).filter(visible);
    const isGroup = (id) => { const a = st[id]?.attributes || {}; return !!a.is_hue_group || Array.isArray(a.entity_id); };
    const lightOk = (id) => DOMAIN(id) === "light" && !/_segment_/.test(id);
    const measure = (id, cls) => DOMAIN(id) === "sensor" && dc(id) === cls && !!st[id].attributes.state_class
      && !/battery|batterie|cpu|chip|processor|device_temp|internal/i.test(id);

    const order = cfg.room_order || [];
    const floorLevel = (a) => floors[a.floor_id]?.level ?? 0;
    areasAll.sort((a, b) => {
      const ia = order.indexOf(a.area_id), ib = order.indexOf(b.area_id);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 1e3 : ia) - (ib === -1 ? 1e3 : ib);
      return floorLevel(a) - floorLevel(b) || a.name.localeCompare(b.name, "de");
    });
    const short = cfg.short_names !== false;
    const rooms = areasAll.map((a) => {
      const o = (cfg.rooms || {})[a.area_id] || {};
      const fl = floors[a.floor_id];
      const mine = ids.filter((id) => areaOf(id) === a.area_id);
      const lights = mine.filter(lightOk);
      const groups = lights.filter(isGroup);
      const avail = (id) => (st[id].state === "unavailable" ? 1 : 0); // nicht erreichbare nach hinten
      const single = lights.filter((id) => !isGroup(id)).sort((x, y) => avail(x) - avail(y));
      const climate = mine.filter((id) => DOMAIN(id) === "climate");
      const temps = mine.filter((id) => measure(id, "temperature"));
      const hums = mine.filter((id) => measure(id, "humidity"));
      const covers = mine.filter((id) => DOMAIN(id) === "cover" && !["garage", "gate", "door"].includes(dc(id)));
      const light = o.light || (groups[0] || (single.length === 1 ? single[0] : null));
      return {
        id: a.area_id, name: o.name || (short ? shortArea(a.name, fl?.name) : a.name), custom: !!o.name, icon: o.icon || areaIcon(a),
        hide: !!o.hide, hash: `#${slug(a.name)}`, floor: fl ? { id: fl.floor_id, name: fl.name, level: fl.level ?? 0, icon: fl.icon } : null,
        lights: single.length ? single : groups, light, climate,
        temperature: o.temperature || temps[0] || null, humidity: o.humidity || hums[0] || null,
        auto: { light: groups[0] || (single.length === 1 ? single[0] : null), temperature: temps[0] || null, humidity: hums[0] || null },
        covers, scenes: mine.filter((id) => DOMAIN(id) === "scene"), areaName: a.name,
        motion: mine.filter((id) => DOMAIN(id) === "binary_sensor" && ["motion", "occupancy", "presence"].includes(dc(id))),
      };
    });
    // gleiche Kurznamen (Flur im EG und OG): Etage dahinter, „Flur · OG“
    if (short) {
      const cnt = {};
      rooms.forEach((r) => { cnt[r.name] = (cnt[r.name] || 0) + 1; });
      rooms.forEach((r) => {
        if (r.custom || cnt[r.name] < 2) return;
        const a = areasAll.find((x) => x.area_id === r.id), m = a.name.match(FLOOR_RE);
        const tag = m ? m[1] : r.floor?.name;
        if (tag) r.name = `${r.name} · ${tag}`;
      });
    }
    const pick = (domain, list) => (list && list.length ? list.filter((id) => st[id]) : ids.filter((id) => DOMAIN(id) === domain));
    const onDevice = (id, test) => {
      const d = ents[id]?.device_id;
      return d ? Object.values(ents).filter((e) => e.device_id === d && st[e.entity_id] && test(e.entity_id)).map((e) => e.entity_id) : [];
    };
    const robots = ids.filter((id) => ["vacuum", "lawn_mower"].includes(DOMAIN(id)));
    const robotCams = new Set(robots.flatMap((r) => onDevice(r, (id) => DOMAIN(id) === "camera")));
    // Kamera-Karten von Saugern/Mähern gehören auf deren Seite, nicht zu den Kameras
    return {
      rooms, shown: rooms.filter((r) => !r.hide),
      weather: cfg.weather || ids.find((id) => DOMAIN(id) === "weather") || null,
      persons: pick("person", cfg.persons),
      cameras: cfg.cameras?.length ? pick("camera", cfg.cameras) : pick("camera").filter((id) => !robotCams.has(id) && !/_map$|_karte$/.test(id)),
      calendars: pick("calendar", cfg.calendars),
      vacuums: ids.filter((id) => DOMAIN(id) === "vacuum"),
      mowers: ids.filter((id) => DOMAIN(id) === "lawn_mower"),
      locks: ids.filter((id) => DOMAIN(id) === "lock"),
      garages: ids.filter((id) => DOMAIN(id) === "cover" && ["garage", "gate"].includes(dc(id))),
      lightsAll: ids.filter((id) => lightOk(id)),
      sameDevice: onDevice, devName, niceName: (id, extra = []) => niceName(hass, id, [...extra, devName(id)], short),
    };
  }

  // ---------- Bausteine ----------
  function lightTile(eid, name, icon, hold, columns = 6) {
    const s = `hass.states[${q(eid)}]`;
    const col = `((${s} && ${s}.attributes.rgb_color) || [${WARM}]).join(',')`;
    const on = `(${s} && ${s}.state === 'on')`;
    const holdAct = hold ? { action: "navigate", navigation_path: hold } : { action: "more-info" };
    return {
      type: "custom:bubble-card", card_type: "button", button_type: "slider", entity: eid, name, ...(icon ? { icon } : {}),
      show_state: true, use_accent_color: true, tap_to_slide: false, slider_live_update: false,
      button_action: { tap_action: { action: "toggle" }, hold_action: holdAct },
      tap_action: { action: "toggle" }, hold_action: holdAct,
      grid_options: { columns, rows: 1 },
      styles: [
        `.bubble-button-card-container { border-radius: 20px !important; \${(() => { const c = ${col}; return ${on} ? 'box-shadow: inset 0 0 0 1px rgba(' + c + ',.5), 0 0 30px -10px rgba(' + c + ',.7) !important;' : 'box-shadow: inset 0 0 0 1px var(--ng-line) !important;'; })()} }`,
        `.bubble-range-fill { \${(() => { const c = ${col}; return 'background: linear-gradient(90deg, rgba(' + c + ',.10) 0%, rgba(' + c + ',.36) 85%, rgba(' + c + ',.62) 100%) !important; box-shadow: inset -2px 0 0 rgba(' + c + ',.95), inset -18px 0 22px -14px rgba(' + c + ',.8);'; })()} opacity: 1 !important; border-radius: 0 !important; }`,
        ".bubble-range-slider { border-radius: 20px !important; overflow: hidden !important; }",
        `.bubble-icon { \${(() => { const c = ${col}; return ${on} ? 'color: rgb(' + c + ') !important;' : ''; })()} }`,
      ].join("\n") + "\n",
    };
  }

  // Raum mit mehreren Lampen ohne Gruppe: Knopf schaltet alle Lampen des Raums
  function roomLightsButton(room, hold, columns = 6) {
    const list = q(room.lights);
    const cnt = `${list}.filter((e) => hass.states[e] && hass.states[e].state === 'on').length`;
    return {
      type: "custom:bubble-card", card_type: "button", button_type: "name", name: room.name, icon: room.icon,
      show_state: false,
      tap_action: { action: "perform-action", perform_action: "light.toggle", target: { entity_id: room.lights } },
      button_action: { tap_action: { action: "perform-action", perform_action: "light.toggle", target: { entity_id: room.lights } },
        hold_action: hold ? { action: "navigate", navigation_path: hold } : { action: "none" } },
      hold_action: hold ? { action: "navigate", navigation_path: hold } : { action: "none" },
      grid_options: { columns, rows: 1 },
      styles: [
        `.bubble-button-card-container { border-radius: 20px !important; \${${cnt} ? 'box-shadow: inset 0 0 0 1px rgba(${WARM},.5), 0 0 30px -10px rgba(${WARM},.7) !important; background: rgba(${WARM},.12) !important;' : 'box-shadow: inset 0 0 0 1px var(--ng-line) !important;'} }`,
        `.bubble-icon { \${${cnt} ? 'color: rgb(${WARM}) !important;' : ''} }`,
        `.bubble-name::after { content: '\${(() => { const n = ${cnt}; return n ? ' · ' + n + ' an' : ' · aus'; })()}'; opacity: .6; font-weight: 400; }`,
      ].join("\n") + "\n",
    };
  }

  function coverTile(eid, name, columns = 12) {
    const s = `hass.states[${q(eid)}]`;
    const moving = `(${s} && ['opening', 'closing'].includes(${s}.state))`;
    const isOpen = `(${s} && ((${s}.attributes.current_position || 0) > 0 || ${s}.state === 'open'))`;
    const act = (svc) => ({ action: "perform-action", perform_action: "cover." + svc, target: { entity_id: eid } });
    return {
      type: "custom:bubble-card", card_type: "button", button_type: "slider", entity: eid, name, icon: "mdi:window-shutter",
      show_state: true, show_attribute: true, attribute: "current_position", read_only_slider: true, tap_to_slide: false,
      button_action: { tap_action: { action: "more-info" }, hold_action: { action: "more-info" } },
      tap_action: { action: "more-info" }, hold_action: { action: "more-info" },
      sub_button: [
        { icon: "mdi:arrow-up", name: "Auf", show_background: true, tap_action: act("open_cover") },
        { icon: "mdi:stop", name: "Stopp", show_background: true, tap_action: act("stop_cover") },
        { icon: "mdi:arrow-down", name: "Zu", show_background: true, tap_action: act("close_cover") },
      ],
      grid_options: { columns, rows: 1 },
      styles: [
        ".bubble-button-card-container { border-radius: 20px !important; box-shadow: inset 0 0 0 1px var(--ng-line) !important; }",
        ".bubble-range-slider { border-radius: 20px !important; overflow: hidden !important; }",
        ".bubble-range-fill { background: linear-gradient(90deg, rgba(var(--rgb-ng-acc, 124, 255, 178), .05) 0%, rgba(var(--rgb-ng-acc, 124, 255, 178), .20) 85%, rgba(var(--rgb-ng-acc, 124, 255, 178), .36) 100%) !important; box-shadow: inset -2px 0 0 rgba(var(--rgb-ng-acc, 124, 255, 178), .75); opacity: 1 !important; border-radius: 0 !important; }",
        `.bubble-icon { \${${isOpen} ? 'color: var(--ng-acc) !important;' : ''} }`,
        ".bubble-sub-button { background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06) !important; box-shadow: inset 0 0 0 1px var(--ng-line); width: 40px !important; height: 40px !important; }",
        "@keyframes ngshutter { 0%, 100% { transform: translateY(-2px); } 50% { transform: translateY(2px); } }",
        `\${${moving} ? '.bubble-icon { animation: ngshutter 1.1s ease-in-out infinite; color: var(--ng-acc) !important; }' : ''}`,
      ].join("\n") + "\n",
    };
  }

  // kompakte Rollladen-Kachel fürs Pop-up: Schieber = Position (ziehen), Symbol antippen = Details
  function coverSlider(eid, name, columns = 6) {
    const s = `hass.states[${q(eid)}]`;
    const moving = `(${s} && ['opening', 'closing'].includes(${s}.state))`;
    const isOpen = `(${s} && ((${s}.attributes.current_position || 0) > 0 || ${s}.state === 'open'))`;
    return {
      type: "custom:bubble-card", card_type: "button", button_type: "slider", entity: eid, name, icon: "mdi:window-shutter",
      show_state: false, show_attribute: true, attribute: "current_position", tap_to_slide: false, slider_live_update: false,
      button_action: { tap_action: { action: "more-info" }, hold_action: { action: "more-info" } },
      tap_action: { action: "more-info" }, hold_action: { action: "more-info" },
      grid_options: { columns, rows: 1 },
      styles: [
        ".bubble-button-card-container { border-radius: 20px !important; box-shadow: inset 0 0 0 1px var(--ng-line) !important; }",
        ".bubble-range-slider { border-radius: 20px !important; overflow: hidden !important; }",
        ".bubble-range-fill { background: linear-gradient(90deg, rgba(var(--rgb-ng-acc, 124, 255, 178), .05) 0%, rgba(var(--rgb-ng-acc, 124, 255, 178), .20) 85%, rgba(var(--rgb-ng-acc, 124, 255, 178), .36) 100%) !important; box-shadow: inset -2px 0 0 rgba(var(--rgb-ng-acc, 124, 255, 178), .75); opacity: 1 !important; border-radius: 0 !important; }",
        `.bubble-icon { \${${isOpen} ? 'color: var(--ng-acc) !important;' : ''} }`,
        "@keyframes ngshutter { 0%, 100% { transform: translateY(-2px); } 50% { transform: translateY(2px); } }",
        `\${${moving} ? '.bubble-icon { animation: ngshutter 1.1s ease-in-out infinite; color: var(--ng-acc) !important; }' : ''}`,
      ].join("\n") + "\n",
    };
  }

  const heatCool = (climates) => climates.length
    ? `{{ 'heat' if ${climates.map((c) => `state_attr('${c}', 'hvac_action') == 'heating'`).join(" or ")} else ('cool' if ${climates.map((c) => `state_attr('${c}', 'hvac_action') in ['cooling', 'drying', 'fan']`).join(" or ")} else 'off') }}`
    : "off";

  // Raumtemperatur groß + 24-h-Verlauf
  function roomTempCard(room, tap, big = 34) {
    const t = room.temperature;
    const temp = t ? num1(t) : `{% set x = state_attr('${room.climate[0]}', 'current_temperature') %}{{ ('%.1f' | format(x | float)) | replace('.', ',') if is_number(x) else '–' }}`;
    const hum = room.humidity ? ` · {% set x = states('${room.humidity}') %}{{ ('%.0f' | format(x | float)) if is_number(x) else '–' }} %` : "";
    const inner = {
      type: "custom:mushroom-template-card",
      primary: `${temp} °C`, secondary: `${room.name.toUpperCase()}${hum}`, icon: room.icon,
      icon_color: t ? tempColor(t) : "grey",
      tap_action: tap || (room.climate[0] ? { action: "more-info", entity: room.climate[0] } : { action: "more-info", entity: t }),
      card_mod: { style: `ha-card { --ng-state: ${heatCool(room.climate)}; }\n${TILE_TYPO(big)}` },
    };
    if (!t) return { ...inner, grid_options: { columns: "full", rows: 2 } };
    return { type: "custom:nullglow-spark-card", entity: t, min_span: 2, color_scale: "room", grid_options: { columns: "full", rows: 3 }, card: inner };
  }

  function climateCard(eid, hass) {
    const a = hass.states[eid]?.attributes || {};
    const ac = isAc(hass, eid);
    return {
      type: "custom:mushroom-climate-card", entity: eid, name: ac ? "Klimaanlage" : "Heizung", icon: ac ? "mdi:fan" : "mdi:radiator",
      show_temperature_control: true, collapsible_controls: true, hvac_modes: a.hvac_modes || [],
      grid_options: { columns: "full" },
      card_mod: { style: { ".": `ha-card { --ng-state: {% set a = state_attr(config.entity, 'hvac_action') %}{{ 'heat' if a == 'heating' else ('cool' if a in ['cooling', 'drying', 'fan'] else 'off') }};${ac
        ? ` --ng-fan: {% set f = state_attr(config.entity, 'fan_mode') %}{{ {'silent': '2.4s', 'low': '1.8s', 'auto': '1.1s', 'medium': '1.1s', 'high': '.7s', 'turbo': '.45s'}.get(f, '1.1s') if a in ['cooling', 'heating', 'drying', 'fan'] else '0s' }};` : ""} }` } },
    };
  }

  function sceneButtons(room, inv, hass, max, columns) {
    return room.scenes.map((s) => [s, inv.niceName(s, [room.name, room.areaName])]).filter(([, n]) => !technical(n)).slice(0, max)
      .map(([s, n]) => ({ type: "custom:bubble-card", card_type: "button", button_type: "name", entity: s, name: n,
        icon: hass.states[s]?.attributes?.icon || "mdi:palette-outline", show_state: false,
        tap_action: { action: "perform-action", perform_action: "scene.turn_on", target: { entity_id: s } },
        button_action: { tap_action: { action: "perform-action", perform_action: "scene.turn_on", target: { entity_id: s } } },
        grid_options: { columns, rows: 1 },
        styles: ".bubble-button-card-container { border-radius: 20px !important; box-shadow: inset 0 0 0 1px var(--ng-line) !important; }\n" }));
  }

  const isAc = (hass, id) => (hass.states[id]?.attributes?.hvac_modes || []).includes("cool");
  // je Raum eine Heizung und eine Klimaanlage (mehrere Thermostate eines Raums sind meist eine Zone)
  const climateKinds = (hass, list) => {
    const seen = {};
    return list.filter((c) => { const k = isAc(hass, c) ? "ac" : "heat"; if (seen[k]) return false; seen[k] = true; return true; });
  };

  const heading = (text, icon, nav) => ({ type: "heading", heading: text, icon, ...(nav ? { tap_action: { action: "navigate", navigation_path: nav } } : {}) });

  function clockCard(tap) {
    return {
      type: "custom:mushroom-template-card",
      primary: "{{ now().strftime('%H:%M') }}",
      secondary: "{%- set tage = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'] -%}\n"
        + "{%- set monate = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'] -%}\n"
        + "{%- set h = now().hour -%}\n"
        + "{{ tage[now().weekday()] }} · {{ now().day }}. {{ monate[now().month - 1] }} · {{ 'Gute Nacht' if h < 5 else ('Guten Morgen' if h < 11 else ('Hallo' if h < 18 else 'Guten Abend')) }}",
      tap_action: tap ? { action: "navigate", navigation_path: tap } : { action: "none" }, grid_options: { columns: "full", rows: "auto" },
      card_mod: { style: `ha-card { background: none !important; box-shadow: none !important; -webkit-backdrop-filter: none !important; backdrop-filter: none !important; }
ha-card::before, ha-card::after { display: none !important; }
ha-tile-icon { display: none !important; }
ha-tile-info {
  --ha-tile-info-primary-font-size: 64px !important; --tile-info-primary-font-size: 64px !important;
  --ha-tile-info-primary-line-height: 66px !important; --tile-info-primary-line-height: 66px !important;
  --ha-tile-info-primary-font-weight: 600 !important; --tile-info-primary-font-weight: 600 !important;
  --ha-tile-info-primary-letter-spacing: -.03em !important; --tile-info-primary-letter-spacing: -.03em !important;
  --ha-tile-info-secondary-font-size: 12px !important; --tile-info-secondary-font-size: 12px !important;
  --ha-tile-info-secondary-letter-spacing: .12em !important; --tile-info-secondary-letter-spacing: .12em !important;
  --ha-tile-info-secondary-color: var(--ng-txt-dim) !important; --tile-info-secondary-color: var(--ng-txt-dim) !important;
  text-transform: none;
}
.content { padding: 0 4px !important; align-items: flex-start !important; }
` },
    };
  }

  function calendarPro(ids, days, nav) {
    return {
      type: "custom:calendar-card-pro", entities: ids.map((e) => ({ entity: e, accent_color: "var(--ng-acc)" })),
      language: "de", time_24h: true, show_location: false, show_end_time: false, filter_duplicates: true,
      background_color: "transparent", accent_color: "var(--ng-acc)", vertical_line_width: "2px", day_spacing: "4px", event_spacing: "2px",
      weekday_font_size: "11px", weekday_color: "var(--ng-txt-dim)", day_font_size: "20px", day_color: "var(--ng-txt)",
      month_font_size: "10px", month_color: "var(--ng-txt-mute)", today_weekday_color: "var(--ng-acc)", today_day_color: "var(--ng-acc)",
      today_month_color: "var(--ng-acc)", event_font_size: "13px", event_color: "var(--ng-txt)", time_font_size: "11px",
      time_color: "var(--ng-txt-dim)", time_icon_size: "12px", empty_day_color: "var(--ng-txt-mute)", day_separator_width: "1px",
      day_separator_color: "var(--ng-line)", refresh_interval: 5, days_to_show: days, compact_events_to_show: 4,
      ...(nav ? { tap_action: { action: "navigate", navigation_path: nav } } : {}), grid_options: { columns: 12 },
    };
  }

  const LIGHTS_ON = "{%- set ns = namespace(n=0) -%}\n{%- for s in states.light if s.state == 'on' and '_segment_' not in s.entity_id\n"
    + "     and not s.attributes.get('is_hue_group') and s.attributes.get('entity_id') is none -%}\n{%- set ns.n = ns.n + 1 -%}\n{%- endfor -%}\n{{ ns.n }} Lichter an";
  const allOff = () => ({
    type: "custom:mushroom-template-card", primary: "Alles aus", secondary: LIGHTS_ON, icon: "mdi:lightbulb-group-off", icon_color: "red",
    tap_action: { action: "perform-action", perform_action: "light.turn_off", target: { entity_id: "all" },
      confirmation: { text: "Wirklich alle Lichter ausschalten?" } },
    grid_options: { columns: 6 },
  });

  // ---------- Energie (Flow-Konfiguration) ----------
  let autoEnergy = null, autoAt = 0; // Vorschlag aus dem Energie-Dashboard, 10 Min zwischengespeichert
  async function energyCfg(cfg, hass) {
    if (cfg.energy && (cfg.energy.solar || cfg.energy.grid)) return cfg.energy;
    const flow = customElements.get("nullglow-flow-card");
    if (!flow?.getStubConfig) return null;
    if (!autoEnergy || Date.now() - autoAt > 600000) {
      autoAt = Date.now();
      autoEnergy = flow.getStubConfig(hass).then((d) => (d.solar || d.grid ? d : null)).catch(() => null);
    }
    return autoEnergy;
  }
  const list = (x) => [].concat(x || []).filter(Boolean);

  // ---------- Views ----------
  const VIEWS = [
    { key: "home", title: "Übersicht", icon: "mdi:home" },
    { key: "licht", title: "Licht", icon: "mdi:lightbulb-group" },
    { key: "klima", title: "Klima", icon: "mdi:thermometer" },
    { key: "energie", title: "Energie", icon: "mdi:lightning-bolt" },
    { key: "kameras", title: "Kameras", icon: "mdi:cctv" },
    { key: "kalender", title: "Kalender", icon: "mdi:calendar-month" },
    { key: "sauger", title: "Sauger", icon: "mdi:robot-vacuum" },
    { key: "maeher", title: "Mäher", icon: "mdi:robot-mower" },
  ];

  // Welche Seiten sind möglich (Daten vorhanden) und eingeschaltet?
  function available(inv, energy) {
    return {
      home: true,
      licht: inv.lightsAll.length > 0,
      klima: inv.shown.some((r) => r.temperature || r.climate.length),
      energie: !!energy,
      kameras: inv.cameras.length > 0,
      kalender: inv.calendars.length > 0,
      sauger: inv.vacuums.length > 0,
      maeher: inv.mowers.length > 0,
    };
  }

  function navSection(views, base, extra = []) {
    // ab 600 px volle Breite (Bubble begrenzt sonst unter 871 px wie am Handy); reicht der Platz nicht für alle Namen
    // (hochkant, Seitenleiste offen), nur Symbole — so passen alle Knöpfe ohne Wischen
    const nav = { type: "custom:bubble-card", card_type: "horizontal-buttons-stack", highlight_current_view: true, hide_gradient: true,
      styles: "@media (min-width: 600px) { .card-content { max-width: 1400px !important; } }\n"
        + ".card-content { container: ngnav / inline-size; }\n"
        + `@container ngnav (max-width: ${views.length * 132}px) { .bubble-name { display: none !important; } }\n` };
    views.forEach((v, i) => {
      nav[`${i + 1}_name`] = v.title; nav[`${i + 1}_icon`] = v.icon; nav[`${i + 1}_link`] = `${base}/${v.key}`;
    });
    return { type: "grid", column_span: 4, cards: [nav, ...extra] };
  }

  function roomPopup(room, hass, inv) {
    const cards = [];
    if (room.temperature || room.climate.length) cards.push(roomTempCard(room, null, 30));
    room.climate.forEach((c) => cards.push(climateCard(c, hass)));
    if (room.light && room.lights.length > 1) cards.push(lightTile(room.light, `${room.name} · alle`, room.icon, null, 12));
    room.lights.forEach((l) => cards.push(lightTile(l, inv.niceName(l, [room.name, room.areaName]), null, null, 12)));
    room.covers.forEach((c) => cards.push(coverTile(c, inv.niceName(c, [room.name, room.areaName]) || "Rollladen")));
    cards.push(...sceneButtons(room, inv, hass, 6, 12));
    if (!cards.length) return null;
    return { type: "custom:bubble-card", card_type: "pop-up", hash: room.hash, name: room.name, icon: room.icon,
      width_desktop: "620px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 120000,
      cards };
  }

  // alle Rollläden nach Etage (HA-Etagen), je Etage Sammelkachel (Auf/Stopp/Zu) + Schieber je Rollladen
  function coversPopup(inv) {
    const groups = new Map();
    inv.shown.filter((r) => r.covers.length).forEach((r) => {
      const k = r.floor ? r.floor.id : "_";
      if (!groups.has(k)) groups.set(k, { name: r.floor ? r.floor.name : "Weitere", icon: r.floor?.icon, level: r.floor ? r.floor.level : 99, rooms: [] });
      groups.get(k).rooms.push(r);
    });
    const rank = (l) => (l < 0 ? 100 - l : l);   // EG, OG, DG …, dann Keller
    const gs = [...groups.values()].sort((a, b) => rank(a.level) - rank(b.level));
    const cards = [];
    gs.forEach((g) => {
      const ents = g.rooms.flatMap((r) => r.covers);
      cards.push({ type: "custom:nullglow-covers-card", entities: ents, title: gs.length === 1 ? "Alle Rollläden" : g.name,
        icon: g.icon || (g.level < 0 ? "mdi:home-floor-negative-1" : g.level <= 3 ? `mdi:home-floor-${g.level}` : "mdi:home-roof"),
        grid_options: { columns: 12, rows: 2 } });
      const tiles = g.rooms.flatMap((r) => r.covers.map((c, i) => {
        const n = coverWord(inv.niceName(c, [r.name, r.areaName]), r.name);
        const label = r.covers.length === 1 ? r.name : `${r.name} · ${n && n.toLowerCase() !== r.name.toLowerCase() ? n : i + 1}`;
        return coverSlider(c, label, 4);
      }));
      cards.push({ type: "grid", columns: 3, square: false, cards: tiles,
        card_mod: { style: "#root { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important; }\n" } });
    });
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#rolllaeden", name: "Rollläden", icon: "mdi:window-shutter",
      width_desktop: "980px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 180000, cards };
  }

  // Uhr antippen: Design + Hell/Dunkel für dieses Gerät (nullglow-design-card, Browser-Speicher)
  function designPopup(base, design, mode) {
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#design", name: "Design", icon: "mdi:palette",
      width_desktop: "900px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 60000,
      cards: [{ type: "custom:nullglow-design-card", storage: "local", dashboard: base, default_design: design, default_mode: mode }] };
  }

  function radarPopup() {
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#regenradar", name: "Regenradar", icon: "mdi:weather-pouring",
      width_desktop: "1100px", bg_opacity: 92, auto_close: 120000, close_by_clicking_outside: true,
      cards: [{ type: "custom:nullglow-radar-card", zoom: 8, past: 90, future: 120, step: 10, height: 430 }] };
  }

  function viewHome(inv, energy, base, on, hass, cfg, design) {
    const S = [];
    const withDesign = has("nullglow-design-card");
    const top = [clockCard(withDesign ? "#design" : null)];
    if (inv.weather) {
      top.push({ type: "weather-forecast", entity: inv.weather, name: "Heute", forecast_type: "daily", show_current: true, show_forecast: true,
        tap_action: { action: "navigate", navigation_path: "#regenradar" },
        card_mod: { style: ".state, .name { white-space: normal !important; }\n" } });
      top.push({ type: "custom:nullglow-hourly-card", entity: inv.weather, hours: 8 });
    }
    S.push({ type: "grid", cards: top });
    if (energy) S.push({ type: "grid", column_span: 2, cards: [heading("Energie", "mdi:lightning-bolt", on.energie ? `${base}/energie` : null),
      { type: "custom:nullglow-flow-card", height: 388, grid_options: { columns: "full" }, ...energy }] });

    const lightRooms = inv.shown.filter((r) => r.lights.length);
    if (lightRooms.length) {
      const cards = [heading("Licht", "mdi:lightbulb-group", on.licht ? `${base}/licht` : null)];
      lightRooms.forEach((r) => cards.push(r.light ? lightTile(r.light, r.name, r.icon, r.hash) : roomLightsButton(r, r.hash)));
      cards.push(allOff());
      cards.push({ type: "custom:nullglow-care-card", mode: "summary", tap_hash: "#wartung", battery: { warn: 30, crit: 15 },
        grid_options: { columns: 6, rows: 1 } });
      S.push({ type: "grid", cards });
    }
    const climRooms = inv.shown.filter((r) => r.temperature || r.climate.length);
    if (climRooms.length) {
      const cards = [heading("Klima", "mdi:thermometer", on.klima ? `${base}/klima` : null)];
      climRooms.forEach((r) => {
        const t = r.temperature;
        cards.push({ type: "custom:mushroom-template-card", entity: t || r.climate[0],
          primary: r.name,
          secondary: t ? `${num1(t)} °C` : `{% set x = state_attr('${r.climate[0]}', 'current_temperature') %}{{ ('%.1f' | format(x | float)) | replace('.', ',') if is_number(x) else '–' }} °C`,
          icon: r.icon, icon_color: t ? tempColor(t) : "grey",
          tap_action: { action: "navigate", navigation_path: r.hash },
          grid_options: { columns: 6 },
          card_mod: { style: `ha-card { --ng-state: ${heatCool(r.climate)}; }\n` } });
      });
      S.push({ type: "grid", cards });
    }
    const covers = inv.shown.flatMap((r) => r.covers.map((c, i) => [c, r, i]));
    const compact = covers.length && (cfg.covers === "compact" || (cfg.covers !== "list" && covers.length > 6));
    if (compact) S.push({ type: "grid", cards: [heading("Rollläden", "mdi:window-shutter", "#rolllaeden"),
      { type: "custom:nullglow-covers-card", entities: covers.map(([c]) => c), title: "Alle Rollläden", tap: "#rolllaeden", grid_options: { columns: 12, rows: 2 } }] });
    else if (covers.length) S.push({ type: "grid", cards: [heading("Rollläden", "mdi:window-shutter"), ...covers.map(([c, r, i]) => {
      const n = coverWord(inv.niceName(c, [r.name, r.areaName]), r.name);
      return coverTile(c, r.covers.length === 1 ? r.name : `${r.name} · ${n && n.toLowerCase() !== r.name.toLowerCase() ? n : i + 1}`);
    })] });
    if (inv.persons.length || inv.locks.length || inv.garages.length) {
      const cards = [heading("Zuhause", "mdi:home-account")];
      inv.persons.forEach((p) => cards.push({ type: "custom:mushroom-person-card", entity: p, icon_type: "entity-picture", grid_options: { columns: 6 } }));
      inv.locks.forEach((l) => cards.push({ type: "tile", entity: l, grid_options: { columns: 6 },
        card_mod: { style: "ha-card { --ng-state: {{ 'warn' if is_state(config.entity, 'unlocked') else 'off' }}; }\n" } }));
      inv.garages.forEach((g) => cards.push({ type: "tile", entity: g, features: [{ type: "cover-open-close" }], grid_options: { columns: 6 } }));
      S.push({ type: "grid", cards });
    }
    if (inv.calendars.length && has("calendar-card-pro"))
      S.push({ type: "grid", cards: [heading("Termine", "mdi:calendar-heart", on.kalender ? `${base}/kalender` : null), calendarPro(inv.calendars, 14, on.kalender ? `${base}/kalender` : null)] });

    const pops = [radarPopup(), { type: "custom:bubble-card", card_type: "pop-up", hash: "#wartung", name: "Batterien & Wartung",
      icon: "mdi:battery-heart-variant", width_desktop: "620px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 120000,
      cards: [{ type: "custom:nullglow-care-card", mode: "full", battery: { warn: 30, crit: 15 } }] }];
    inv.shown.forEach((r) => { const p = roomPopup(r, hass, inv); if (p) pops.push(p); });
    if (compact) pops.push(coversPopup(inv));
    if (withDesign) pops.push(designPopup(base, design, ["dark", "light", "sun"].includes(cfg.mode) ? cfg.mode : "auto"));
    return { sections: S, extra: pops };
  }

  function viewLicht(inv, hass) {
    const S = [];
    inv.shown.filter((r) => r.lights.length).forEach((r) => {
      const cards = [heading(r.name, r.icon)];
      if (r.light && r.lights.length > 1) cards.push(lightTile(r.light, `${r.name} · alle`, r.icon, null, 12));
      r.lights.forEach((l) => { // lange Namen bekommen die ganze Breite (Bubble lässt sie sonst durchlaufen)
        const n = inv.niceName(l, [r.name, r.areaName]);
        cards.push(lightTile(l, n, null, null, r.lights.length === 1 || n.length > 13 ? 12 : 6));
      });
      cards.push(...sceneButtons(r, inv, hass, 4, 6));
      S.push({ type: "grid", cards });
    });
    S.push({ type: "grid", cards: [heading("Alle", "mdi:lightbulb-group"), { ...allOff(), grid_options: { columns: 12 } }] });
    return { sections: S };
  }

  function viewKlima(inv, hass) {
    const S = [];
    inv.shown.filter((r) => r.temperature || r.climate.length).forEach((r) => {
      const cards = [roomTempCard(r)];
      climateKinds(hass, r.climate).forEach((c) => cards.push(climateCard(c, hass)));
      S.push({ type: "grid", cards });
    });
    return { sections: S };
  }

  function viewEnergie(energy, hass) {
    const S = [];
    S.push({ type: "grid", column_span: 2, cards: [heading("Energiefluss", "mdi:transmission-tower"),
      { type: "custom:nullglow-flow-card", height: 300, grid_options: { columns: "full" }, ...energy }] });
    const grid = list(energy.grid), solar = list(energy.solar), inv = energy.grid_invert ? -1 : 1;
    const sumJ = (ids, k = 1) => ids.map((id) => `states('${id}') | float(0) * ${k * (/^kW$/i.test(hass.states[id]?.attributes?.unit_of_measurement || "") ? 1000 : 1)}`).join(" + ") || "0";
    const fmtW = "{{ '{:,.0f}'.format(p | abs).replace(',', 'X').replace('.', ',').replace('X', '.') }} W";
    if (grid.length) {
      const P = `{% set p = ${sumJ(grid, inv)}${list(energy.grid_export).length ? " - (" + sumJ(list(energy.grid_export)) + ")" : ""} %}`;
      const cards = [heading(energy.grid_name || "Netz", "mdi:transmission-tower"),
        { type: "custom:nullglow-spark-card", entities: grid, min_span: 500, zero_based: true, grid_options: { columns: "full", rows: 3 },
          card: { type: "custom:mushroom-template-card", primary: `${P}${fmtW}`,
            secondary: `${P}NETZ · {{ 'EINSPEISUNG' if p < -5 else 'BEZUG' }}`, icon: energy.grid_icon || "mdi:transmission-tower",
            icon_color: `${P}{{ 'green' if p < -5 else ('amber' if p >= ${energy.warn_import || 2000} else 'grey') }}`,
            tap_action: { action: "more-info", entity: grid[0] },
            card_mod: { style: `ha-card { --ng-state: ${P}{{ 'on' if p < -50 else ('warn' if p >= ${energy.warn_import || 2000} else 'off') }}; }\n${TILE_TYPO(34)}` } } }];
      if (grid.length > 1) cards.push({ type: "custom:nullglow-bars-card", max: 3680, warn: 2300, crit: 3200,
        rows: grid.map((e, i) => ({ entity: e, name: grid.length === 3 ? `L${i + 1}` : `${i + 1}` })), grid_options: { columns: "full", rows: 2 } });
      S.push({ type: "grid", cards });
    }
    if (solar.length) {
      const P = `{% set p = ${sumJ(solar)} %}`;
      const today = list(energy.today?.solar);
      const cards = [heading(energy.solar_name || "Solar", "mdi:solar-power-variant"),
        { type: "custom:nullglow-spark-card", entity: solar[0], min_span: 100, zero_based: true, grid_options: { columns: "full", rows: 3 },
          card: { type: "custom:mushroom-template-card", primary: `${P}${fmtW}`,
            secondary: today.length ? `SOLAR · HEUTE {{ '{:,.1f}'.format(${sumJ(today)}).replace(',', 'X').replace('.', ',').replace('X', '.') }} KWH` : "SOLAR",
            icon: energy.solar_icon || "mdi:solar-power-variant", icon_color: `${P}{{ 'green' if p > 5 else 'grey' }}`,
            tap_action: { action: "more-info", entity: solar[0] },
            card_mod: { style: `ha-card { --ng-state: ${P}{{ 'on' if p > 5 else 'off' }}; }\n${TILE_TYPO(34)}` } } }];
      for (const [id, label, icon] of [[energy.forecast?.today, "PROGNOSE", "mdi:weather-sunny"], [energy.forecast?.tomorrow, "MORGEN", "mdi:weather-partly-cloudy"]]) {
        if (id) cards.push({ type: "custom:mushroom-template-card", entity: id, primary: `{{ '{:,.1f}'.format(states('${id}') | float(0)).replace(',', 'X').replace('.', ',').replace('X', '.') }} kWh`,
          secondary: label, icon, icon_color: "grey", tap_action: { action: "more-info" }, grid_options: { columns: 6 } });
      }
      S.push({ type: "grid", cards });
    }
    if (grid.length || solar.length) S.push({ type: "grid", column_span: 2, cards: [{ type: "custom:nullglow-power-card", grid, ...(solar[0] ? { solar: solar[0] } : {}),
      hours: 24, grid_options: { columns: "full", rows: 6 } }] });
    if (grid.length && energy.today) S.push({ type: "grid", column_span: 2, cards: [{ type: "custom:nullglow-month-card",
      ...(list(energy.today.solar)[0] ? { solar: list(energy.today.solar)[0] } : {}), grid, price: energy.today.price || 0.35,
      grid_options: { columns: "full", rows: 6 } }] });
    return { sections: S };
  }

  function viewKameras(inv) {
    return { sections: inv.cameras.map((c) => ({ type: "grid", column_span: 2, cards: [
      { type: "picture-entity", entity: c, camera_view: "auto", show_name: true, show_state: false, aspect_ratio: "16:9",
        tap_action: { action: "more-info" }, grid_options: { columns: "full" } }] })) };
  }

  function viewKalender(inv) {
    const S = [{ type: "grid", column_span: 3, cards: [{ type: "calendar", entities: inv.calendars, initial_view: "dayGridMonth",
      grid_options: { columns: "full", rows: 9 } }] }];
    if (has("calendar-card-pro")) S.push({ type: "grid", cards: [heading("Als Nächstes", "mdi:calendar-clock"), calendarPro(inv.calendars, 21)] });
    return { sections: S };
  }

  function robotMap(inv, hass, id) {
    const cam = inv.sameDevice(id, (x) => DOMAIN(x) === "camera")[0];
    if (!cam) return null;
    if (DOMAIN(id) === "lawn_mower" && /_map$/.test(cam) && has("nullglow-mower-map-card")) {
      const cov = inv.sameDevice(id, (x) => /_coverage$/.test(x))[0];
      return { type: "custom:nullglow-mower-map-card", camera: cam, mower: id, ...(cov ? { coverage: cov } : {}), height: 520, grid_options: { columns: "full" } };
    }
    return { type: "picture-entity", entity: cam, camera_view: "auto", show_name: false, show_state: false, tap_action: { action: "more-info" },
      grid_options: { columns: "full" } };
  }
  const wearCard = (inv, list, dev) => (list.length ? { type: "custom:nullglow-care-card", mode: "full", show: ["wear"], battery: { exclude: [".*"] },
    wear: list.map((e) => ({ entity: e, name: inv.niceName(e) })), wear_title: "Verschleiß", grid_options: { columns: "full" } } : null);

  function viewSauger(inv, hass) {
    return { sections: inv.vacuums.flatMap((v) => {
      const bat = inv.sameDevice(v, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.device_class === "battery")[0];
      const wear = inv.sameDevice(v, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.unit_of_measurement === "%"
        && /(_left|_life|remaining)$/.test(id) && !/time/.test(id));
      const cards = [heading(inv.devName(v) || hass.states[v]?.attributes?.friendly_name || "Saugroboter", "mdi:robot-vacuum"),
        { type: "custom:mushroom-vacuum-card", entity: v, name: "Status", icon_animation: true,
          commands: ["start_pause", "stop", "locate", "clean_spot", "return_home"], grid_options: { columns: "full" },
          card_mod: { style: "ha-card { --ng-state: {{ 'clean' if is_state(config.entity, 'cleaning') else ('charge' if is_state(config.entity, 'docked') else ('crit' if is_state(config.entity, 'error') else 'off')) }}; }\n" } }];
      if (bat) cards.push({ type: "tile", entity: bat, name: "Akku", grid_options: { columns: 6 } });
      const w = wearCard(inv, wear); if (w) cards.push(w);
      const map = robotMap(inv, hass, v);
      return map ? [{ type: "grid", column_span: 2, cards: [heading("Karte", "mdi:map-outline"), map] }, { type: "grid", column_span: 2, cards }]
        : [{ type: "grid", column_span: 2, cards }];
    }) };
  }

  function viewMaeher(inv, hass) {
    return { sections: inv.mowers.flatMap((m) => {
      const bat = inv.sameDevice(m, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.device_class === "battery")[0];
      const wear = inv.sameDevice(m, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.unit_of_measurement === "%"
        && /(blade|chassis|_life|_left)/.test(id));
      const cards = [heading(inv.devName(m) || hass.states[m]?.attributes?.friendly_name || "Mähroboter", "mdi:robot-mower"),
        { type: "tile", entity: m, name: "Status", features: [{ type: "lawn-mower-commands", commands: ["start_pause", "dock"] }], grid_options: { columns: "full" },
          card_mod: { style: "ha-card { --ng-state: {{ 'move' if is_state(config.entity, 'mowing') else ('crit' if is_state(config.entity, 'error') else 'off') }}; }\n" } }];
      if (bat) cards.push({ type: "tile", entity: bat, name: "Akku", grid_options: { columns: 6 } });
      const w = wearCard(inv, wear); if (w) cards.push(w);
      const map = robotMap(inv, hass, m);
      return map ? [{ type: "grid", column_span: 2, cards: [heading("Garten", "mdi:map-outline"), map] }, { type: "grid", column_span: 2, cards }]
        : [{ type: "grid", column_span: 2, cards }];
    }) };
  }

  // ---------- Theme ----------
  // Im Weitergabe-Paket liegt das Theme als window.__NULLGLOW_THEME bei (kein separates Theme nötig). Es wird nur in den
  // Browser-Speicher von HA gelegt (hass.themes), nicht auf dem Server — andere Dashboards und das Profil bleiben unberührt.
  // Designs = alle Themes mit „ng-design-title“ (tools/build-themes.py): mitgelieferte + in HA vorhandene
  function designs(hass) {
    const out = {};
    const add = (k, t) => { const title = t?.["ng-design-title"] || t?.modes?.dark?.["ng-design-title"]; if (title && !out[k]) out[k] = title; };
    for (const [k, t] of Object.entries(bundled() || {})) add(k, t);
    for (const [k, t] of Object.entries(hass?.themes?.themes || {})) add(k, t);
    if (!Object.keys(out).length) out.nullglow = "Nullglow — Grün";
    return out;
  }
  const bundled = () => window.__NULLGLOW_THEMES || (window.__NULLGLOW_THEME ? { nullglow: window.__NULLGLOW_THEME } : null);
  function ensureTheme() {
    const TS = bundled(), ha = document.querySelector("home-assistant");
    const themes = ha?.hass?.themes;
    if (!TS || !themes?.themes) return;
    const missing = Object.keys(TS).filter((k) => !themes.themes[k]);
    if (!missing.length) return;
    const add = Object.fromEntries(missing.map((k) => [k, TS[k]]));
    const neu = { ...themes, themes: { ...themes.themes, ...add } };
    if (typeof ha._updateHass === "function") ha._updateHass({ themes: neu }); // neue Identität -> Views wenden es an
    else Object.assign(themes.themes, add);
  }
  // Absicherung: HA merkt sich je Bereich den Theme-Namen (__themes.cacheKey) und überspringt die Anwendung, wenn er gleich
  // bleibt — kam der Wechsel, bevor das Design eingesetzt war, bleiben die Farben leer. Dann Merker löschen und neu anstoßen.
  function ensureApplied() {
    const TS = bundled();
    const find = (r) => { for (const e of r.querySelectorAll("*")) { if (e.localName === "hui-view-container") return e;
      if (e.shadowRoot) { const x = find(e.shadowRoot); if (x) return x; } } return null; };
    const cont = find(document);
    const key = String(cont?.__themes?.cacheKey || "").split("__")[0];
    if (!cont || !TS?.[key] || getComputedStyle(cont).getPropertyValue("--ng-acc").trim()) return;
    cont.__themes = undefined;
    const ha = document.querySelector("home-assistant");
    if (ha?.hass?.themes && typeof ha._updateHass === "function") ha._updateHass({ themes: { ...ha.hass.themes } });
  }
  if (bundled()) {
    ensureTheme();                                   // so früh wie möglich, vor dem ersten Zeichnen der Views
    setInterval(() => { ensureTheme(); ensureApplied(); }, 2000);   // auch nach „Designs neu laden“
  }

  // ---------- Hell/Dunkel je Dashboard (Option „mode“) ----------
  // Setzt hass.themes.darkMode nur im Browser und nur solange ein Dashboard mit mode ≠ auto offen ist (wie HA es sonst aus
  // Profil/System ableitet); beim Verlassen kommt der Wert von HA zurück. Profil und andere Dashboards bleiben unberührt.
  window.__nullglowModes = window.__nullglowModes || {};
  const deepEach = (root, fn) => { for (const e of root.querySelectorAll("*")) { fn(e); if (e.shadowRoot) deepEach(e.shadowRoot, fn); } };
  const deepFind = (root, tag) => {
    for (const e of root.querySelectorAll("*")) {
      if (e.localName === tag) return e;
      if (e.shadowRoot) { const x = deepFind(e.shadowRoot, tag); if (x) return x; }
    }
    return null;
  };
  const cache = {};   // gefundene Elemente merken, nicht jede Sekunde den ganzen Baum durchsuchen (CPU am Wandmonitor)
  const el = (tag) => (cache[tag]?.isConnected ? cache[tag] : (cache[tag] = deepFind(document, tag)));
  // Wahl im Uhr-Pop-up (nullglow-design-card, storage: local): { design, mode } je Dashboard, nur dieses Gerät
  const localPick = (base) => { try { return JSON.parse(localStorage.getItem(`nullglow-design:${base}`) || "{}") || {}; } catch (e) { return {}; } };
  window.addEventListener("nullglow-local-design", () => setTimeout(ensureMode, 0));
  window.__ngRepaint = window.__ngRepaint || (() => deepEach(document, (el) => {   // eigene Karten lesen Farben beim Zeichnen
    const n = el.localName;
    if (!n.startsWith("nullglow-") || !n.endsWith("-card")) return;
    try {
      el._key = null; el._lastKey = ""; el._html = null; el._readColors?.();
      if (el._fetch) el._fetch(); else if (el._draw) el._draw(); else if (el._render && el._render.length === 0) el._render();
      if (el._hass) el.hass = el._hass;
    } catch (e) { /* weiter mit der nächsten Karte */ }
  }));
  let modeOwn = false, modeHa = null;
  function ensureMode() {
    const ha = document.querySelector("home-assistant"), h = ha?.hass;
    if (!h?.themes || typeof ha._updateHass !== "function") return;
    const base = "/" + (location.pathname.split("/")[1] || "lovelace");
    const own = window.__nullglowModes[base] !== undefined, pick = own ? localPick(base) : {};
    const m = own ? (pick.mode || window.__nullglowModes[base]) : undefined;
    // Design pro Gerät: Views des Dashboards im Browser umfärben (wie beim Kiosk, nichts wird gespeichert)
    if (own && pick.design && h.themes.themes?.[pick.design]) {
      const p = el("ha-panel-lovelace"), lv = p?.lovelace;
      if (lv?.config?.views && "/" + lv.urlPath === base && typeof p._setLovelaceConfig === "function"
          && lv.config.views.some((v) => v.theme && v.theme !== pick.design)) {
        p._setLovelaceConfig({ ...lv.config, views: lv.config.views.map((v) => (v.theme ? { ...v, theme: pick.design } : v)) }, lv.rawConfig, lv.mode);
        setTimeout(() => { window.dispatchEvent(new Event("nullglow-design")); window.__ngRepaint(); }, 400);
      }
    }
    const dark = m === "dark" ? true : m === "light" ? false : m === "sun" ? (h.states["sun.sun"]?.state !== "above_horizon") : null;
    let changed = false;
    if (dark !== null) {
      if (!modeOwn) { modeHa = h.themes.darkMode; modeOwn = true; }
      if (h.themes.darkMode !== dark) { ha._updateHass({ themes: { ...h.themes, darkMode: dark } }); changed = true; }
    } else if (modeOwn) {
      modeOwn = false;
      if (modeHa !== null && h.themes.darkMode !== modeHa) { ha._updateHass({ themes: { ...h.themes, darkMode: modeHa } }); changed = true; }
    }
    if (changed) setTimeout(() => { window.dispatchEvent(new Event("nullglow-design")); window.__ngRepaint(); }, 400);
    // Pop-up-Abdunklung (Bubble-Backdrop am <body>, außerhalb des Designs) im Hellen hell — nur eigene Dashboards
    const de = document.documentElement, mine = m !== undefined && h.themes.darkMode === false;
    if (mine) {
      const hv = el("hui-view-container");
      const bg = hv && getComputedStyle(hv).getPropertyValue("--rgb-ng-bg").trim();
      if (bg) { de.style.setProperty("--bubble-backdrop-background-color", `rgba(${bg}, 0.55)`); de.dataset.ngBackdrop = "vorlage"; }
    } else if (de.dataset.ngBackdrop === "vorlage") { de.style.removeProperty("--bubble-backdrop-background-color"); delete de.dataset.ngBackdrop; }
  }
  setInterval(ensureMode, 1000);

  // ---------- Strategie ----------
  class NullglowDashboardStrategy extends HTMLElement {
    static async generate(config, hass) {
      const cfg = config || {};
      const inv = inventory(hass, cfg);
      const energy = await energyCfg(cfg, hass);
      const avail = available(inv, energy);
      const on = {};
      for (const v of VIEWS) on[v.key] = avail[v.key] && (cfg.views?.[v.key] ?? true);
      const views = VIEWS.filter((v) => on[v.key]);
      const base = "/" + (location.pathname.split("/")[1] || "lovelace");
      ensureTheme();
      const design = designs(hass)[cfg.design] ? cfg.design : "nullglow";
      window.__nullglowModes[base] = ["dark", "light", "sun"].includes(cfg.mode) ? cfg.mode : "auto";
      // Nordlicht (nullglow-aurora.js) liest hier die Sensoren dieses Dashboards
      window.__nullglowDashboards = { ...(window.__nullglowDashboards || {}), [base]: energy ? {
        solar: list(energy.solar), grid: list(energy.grid), gridExport: list(energy.grid_export), gridInvert: !!energy.grid_invert,
        solarPeak: energy.solar_peak || 800, monitor: cfg.screen_switch || null } : { solar: [], grid: [], monitor: cfg.screen_switch || null } };
      const build = {
        home: () => viewHome(inv, energy, base, on, hass, cfg, design), licht: () => viewLicht(inv, hass), klima: () => viewKlima(inv, hass),
        energie: () => viewEnergie(energy, hass), kameras: () => viewKameras(inv), kalender: () => viewKalender(inv),
        sauger: () => viewSauger(inv, hass), maeher: () => viewMaeher(inv, hass),
      };
      return {
        title: cfg.title || "Nullglow",
        views: views.map((v) => {
          const r = build[v.key]();
          return { title: v.title, path: v.key, icon: v.icon, theme: design, type: "sections", max_columns: 4,
            dense_section_placement: true, sections: [...r.sections, navSection(views, base, r.extra || [])] };
        }),
      };
    }

    static async getConfigElement() {
      return document.createElement("nullglow-strategy-editor");
    }
  }
  NullglowDashboardStrategy.configRequired = true; // Assistent öffnet sich beim Anlegen

  // ---------- Einrichtungs-Assistent ----------
  const NEEDS = [
    { tag: "bubble-card", name: "Bubble Card", repo: ["Clooos", "Bubble-Card"], must: true },
    { tag: "mushroom-template-card", name: "Mushroom", repo: ["piitaya", "lovelace-mushroom"], must: true },
    { tag: "card-mod", name: "card-mod", repo: ["thomasloven", "lovelace-card-mod"], must: true, test: () => has("card-mod") || !!window.cardMod_patch_state },
    { tag: "calendar-card-pro", name: "Calendar Card Pro", repo: ["alexpfau", "calendar-card-pro"], must: false, why: "Termine" },
    { tag: "kiosk-mode", name: "Kiosk Mode", repo: ["NemesisRE", "kiosk-mode"], must: false, why: "Wandmonitor ohne Kopfzeile",
      test: () => !!window.kioskMode || [...document.querySelectorAll("script")].some((s) => /kiosk-mode/.test(s.src)) },
  ];
  const hacsLink = ([o, r]) => `https://my.home-assistant.io/redirect/hacs_repository/?owner=${o}&repository=${r}&category=plugin`;
  const esc = (x) => String(x ?? "").replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]);
  const clone = (x) => JSON.parse(JSON.stringify(x ?? null));

  const WZ_STYLE = `
    :host { display: block; }
    .intro { font-size: 14px; line-height: 1.5; color: var(--secondary-text-color); margin: 0 0 14px; }
    .intro b { color: var(--primary-text-color); }
    ha-expansion-panel { display: block; margin-bottom: 8px; }
    .inner { padding: 4px 0 12px; }
    .req { display: flex; align-items: center; gap: 10px; padding: 6px 0; font-size: 14px; }
    .req ha-icon { --mdc-icon-size: 20px; }
    .req .ok { color: var(--success-color, #4caf50); } .req .no { color: var(--error-color, #db4437); } .req .opt { color: var(--warning-color, #ffa600); }
    .req .t { flex: 1; } .req small { color: var(--secondary-text-color); }
    .req a { color: var(--primary-color); font-weight: 500; text-decoration: none; white-space: nowrap; }
    .row { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-bottom: 1px solid var(--divider-color); }
    .row:last-child { border-bottom: 0; }
    .row ha-icon.ic { --mdc-icon-size: 22px; color: var(--primary-color); flex: none; }
    .row .t { flex: 1; min-width: 0; } .row .t b { display: block; font-weight: 500; }
    .row .t small { color: var(--secondary-text-color); font-size: 12px; }
    .row.off { opacity: .45; }
    .row button { border: 0; background: none; color: var(--secondary-text-color); cursor: pointer; padding: 6px; border-radius: 50%; }
    .row button[disabled] { opacity: .3; cursor: default; }
    .row button ha-icon { --mdc-icon-size: 20px; }
    .note { font-size: 12px; color: var(--secondary-text-color); margin: 4px 0 10px; line-height: 1.45; }
    .roomform { padding: 4px 0 10px 30px; }
    code { background: var(--secondary-background-color); padding: 1px 5px; border-radius: 4px; font-size: 12px; }
  `;

  class NullglowStrategyEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._open = new Set(["req"]);
      this._roomOpen = null;
    }

    setConfig(config) {
      const c = clone(config) || {};
      if (this._sent && JSON.stringify(c) === this._sent) return;
      this._config = c;
      this._build();
    }

    set hass(h) {
      const first = !this._hass;
      this._hass = h;
      this.shadowRoot.querySelectorAll("ha-form, nullglow-flow-card-editor").forEach((f) => { f.hass = h; });
      if (first) this._build();
    }

    _emit() {
      const c = this._config;
      for (const k of Object.keys(c)) if (c[k] === undefined || (typeof c[k] === "object" && c[k] && !Array.isArray(c[k]) && !Object.keys(c[k]).length)) delete c[k];
      this._sent = JSON.stringify(c);
      this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: clone(c) }, bubbles: true, composed: true }));
    }

    _panel(key, title, icon, secondary) {
      const p = document.createElement("ha-expansion-panel");
      p.outlined = true; p.header = title; if (secondary) p.secondary = secondary;
      p.expanded = this._open.has(key);
      p.innerHTML = `<ha-icon slot="leading-icon" icon="${icon}"></ha-icon>`;
      p.addEventListener("expanded-changed", (ev) => (ev.detail.expanded ? this._open.add(key) : this._open.delete(key)));
      const inner = document.createElement("div");
      inner.className = "inner";
      p.appendChild(inner);
      this.shadowRoot.appendChild(p);
      return inner;
    }

    _form(schema, data, onChange) {
      const f = document.createElement("ha-form");
      f.hass = this._hass; f.schema = schema; f.data = data;
      f.computeLabel = (s) => s.label ?? s.name; f.computeHelper = (s) => s.helper;
      f.addEventListener("value-changed", (ev) => { ev.stopPropagation(); onChange(ev.detail.value); });
      return f;
    }

    async _build() {
      if (!this._config || !this._hass) return;
      const c = this._config, hass = this._hass, root = this.shadowRoot;
      const token = (this._tok = (this._tok || 0) + 1);
      const inv = inventory(hass, c);
      const energy = await energyCfg(c, hass);
      if (token !== this._tok) return; // inzwischen neu aufgebaut
      const avail = available(inv, energy);
      root.innerHTML = `<style>${WZ_STYLE}</style><p class="intro"><b>Nullglow einrichten.</b> Das Dashboard baut sich aus deinen
        Bereichen, Geräten und dem Energie-Dashboard selbst — hier nur noch anpassen. Neue Geräte erscheinen später automatisch.</p>`;

      // 1. Voraussetzungen
      const missing = NEEDS.filter((n) => n.must && !(n.test ? n.test() : has(n.tag)));
      let box = this._panel("req", "1 · Voraussetzungen (HACS)", "mdi:puzzle-check-outline", missing.length ? `${missing.length} fehlt` : "alles da");
      if (missing.length) this._open.add("req");
      NEEDS.forEach((n) => {
        const ok = n.test ? n.test() : has(n.tag);
        box.insertAdjacentHTML("beforeend", `<div class="req"><ha-icon class="${ok ? "ok" : n.must ? "no" : "opt"}"
          icon="${ok ? "mdi:check-circle" : n.must ? "mdi:close-circle" : "mdi:minus-circle-outline"}"></ha-icon>
          <span class="t">${esc(n.name)}${n.must ? "" : ` <small>(optional: ${esc(n.why)})</small>`}</span>
          ${ok ? "" : `<a href="${hacsLink(n.repo)}" target="_blank" rel="noreferrer">In HACS öffnen</a>`}</div>`);
      });
      if (missing.length) box.insertAdjacentHTML("beforeend", '<div class="note">Nach der Installation in HACS die Seite neu laden (Strg+F5 bzw. App neu starten).</div>');

      // 2. Seiten
      const info = {
        home: "Uhr, Wetter, Energie, Licht, Klima, Rollläden, Personen, Termine",
        licht: `${inv.lightsAll.length} Lampen`, klima: `${inv.shown.filter((r) => r.temperature || r.climate.length).length} Räume mit Temperatur`,
        energie: energy ? "aus dem Energie-Dashboard" : "kein Solar/Netz gefunden", kameras: `${inv.cameras.length} Kameras`,
        kalender: `${inv.calendars.length} Kalender`, sauger: inv.vacuums.length ? `${inv.vacuums.length} Saugroboter` : "kein Saugroboter",
        maeher: inv.mowers.length ? `${inv.mowers.length} Mähroboter` : "kein Mähroboter",
      };
      box = this._panel("views", "2 · Seiten", "mdi:view-dashboard-outline", `${VIEWS.filter((v) => avail[v.key] && (c.views?.[v.key] ?? true)).length} aktiv`);
      box.appendChild(this._form(VIEWS.map((v) => ({ name: v.key, label: `${v.title} — ${info[v.key]}`, disabled: !avail[v.key], selector: { boolean: {} } })),
        Object.fromEntries(VIEWS.map((v) => [v.key, avail[v.key] && (c.views?.[v.key] ?? true)])), (val) => {
          c.views = Object.fromEntries(VIEWS.filter((v) => avail[v.key] && val[v.key] === false).map((v) => [v.key, false]));
          this._emit();
        }));

      // 3. Räume
      box = this._panel("rooms", "3 · Räume & Rollläden", "mdi:floor-plan", `${inv.shown.length} von ${inv.rooms.length}`);
      const nCov = inv.shown.reduce((a, r) => a + r.covers.length, 0);
      box.appendChild(this._form([
        { name: "hide_labels", label: "Mit Label ausblenden", helper: "Entitäten, Geräte oder ganze Bereiche mit diesem Label erscheinen nicht (z. B. no_dboard)",
          selector: { label: { multiple: true } } },
        { name: "short_names", label: "Namen kürzen", helper: "Etage und Raum vorne im Namen weglassen („EG - Küche - Rollladen links“ → „Küche · links“)", selector: { boolean: {} } },
        { name: "covers", label: `Rollläden auf der Übersicht (${nCov})`, helper: "Zusammengefasst = eine Kachel mit Alle auf/zu, Antippen öffnet alle nach Etage",
          selector: { select: { mode: "dropdown", options: [
            { value: "auto", label: "Automatisch (ab 7 zusammengefasst)" }, { value: "list", label: "Einzeln" }, { value: "compact", label: "Zusammengefasst" }] } } },
      ], { hide_labels: c.hide_labels || [], short_names: c.short_names !== false, covers: c.covers || "auto" }, (v) => {
        if (v.hide_labels?.length) c.hide_labels = v.hide_labels; else delete c.hide_labels;
        if (v.short_names === false) c.short_names = false; else delete c.short_names;
        if (v.covers && v.covers !== "auto") c.covers = v.covers; else delete c.covers;
        this._emit(); this._build();
      }));
      if (!inv.rooms.length) box.insertAdjacentHTML("beforeend", `<div class="note">Keine Bereiche gefunden. Lege sie unter
        <b>Einstellungen → Bereiche, Zonen &amp; Etagen</b> an und ordne deine Geräte zu — dann erscheinen hier die Räume.</div>`);
      else box.insertAdjacentHTML("beforeend", '<div class="note">Aus deinen HA-Bereichen. Auge = anzeigen, Pfeile = Reihenfolge, Raum antippen = Name, Symbol, Hauptlicht, Temperatur ändern.</div>');
      const ids = inv.rooms.map((r) => r.id);
      inv.rooms.forEach((r, i) => {
        const row = document.createElement("div");
        row.className = `row ${r.hide ? "off" : ""}`;
        const tv = r.temperature ? parseFloat(hass.states[r.temperature]?.state) : NaN;
        const temp = isFinite(tv) ? tv.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : null;
        row.innerHTML = `<ha-icon class="ic" icon="${esc(r.icon)}"></ha-icon><div class="t"><b>${esc(r.name)}</b><small>${r.lights.length} Licht${r.lights.length === 1 ? "" : "er"}${temp ? ` · ${esc(temp)} °C` : ""}${r.climate.length ? ` · ${r.climate.length} Heizung/Klima` : ""}${r.covers.length ? ` · ${r.covers.length} Rollladen` : ""}</small></div>
          <button data-a="eye" title="${r.hide ? "anzeigen" : "ausblenden"}"><ha-icon icon="${r.hide ? "mdi:eye-off-outline" : "mdi:eye-outline"}"></ha-icon></button>
          <button data-a="up" ${i ? "" : "disabled"}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button data-a="down" ${i < ids.length - 1 ? "" : "disabled"}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`;
        const setRoom = (patch) => {
          c.rooms = c.rooms || {};
          const o = { ...(c.rooms[r.id] || {}), ...patch };
          for (const k of Object.keys(o)) if (o[k] === undefined || o[k] === "" || o[k] === false) delete o[k];
          if (Object.keys(o).length) c.rooms[r.id] = o; else delete c.rooms[r.id];
          if (!Object.keys(c.rooms).length) delete c.rooms;
        };
        row.querySelectorAll("button").forEach((b) => b.addEventListener("click", (ev) => {
          ev.stopPropagation();
          const a = b.dataset.a;
          if (a === "eye") setRoom({ hide: !r.hide });
          else { const j = i + (a === "up" ? -1 : 1); [ids[i], ids[j]] = [ids[j], ids[i]]; c.room_order = [...ids]; }
          this._emit(); this._build();
        }));
        row.querySelector(".t").addEventListener("click", () => { this._roomOpen = this._roomOpen === r.id ? null : r.id; this._build(); });
        row.style.cursor = "pointer";
        box.appendChild(row);
        if (this._roomOpen === r.id) {
          const o = (c.rooms || {})[r.id] || {};
          const wrap = document.createElement("div");
          wrap.className = "roomform";
          wrap.appendChild(this._form([
            { type: "grid", name: "", schema: [
              { name: "name", label: "Name", selector: { text: {} } },
              { name: "icon", label: "Symbol", selector: { icon: { placeholder: r.icon } } },
            ] },
            { name: "light", label: "Hauptlicht (Kachel auf der Übersicht)",
              helper: `leer = automatisch: ${r.auto.light ? inv.niceName(r.auto.light) : "Knopf schaltet alle Lampen des Raums"}`,
              selector: { entity: { filter: { domain: "light" } } } },
            { name: "temperature", label: "Temperatur-Sensor", helper: `leer = automatisch: ${r.auto.temperature ? inv.niceName(r.auto.temperature) : "keiner"}`, selector: { entity: { filter: { domain: "sensor", device_class: "temperature" } } } },
            { name: "humidity", label: "Luftfeuchte-Sensor", helper: `leer = automatisch: ${r.auto.humidity ? inv.niceName(r.auto.humidity) : "keiner"}`, selector: { entity: { filter: { domain: "sensor", device_class: "humidity" } } } },
          ], { name: o.name, icon: o.icon, light: o.light, temperature: o.temperature, humidity: o.humidity }, (v) => {
            setRoom({ name: v.name, icon: v.icon, light: v.light, temperature: v.temperature, humidity: v.humidity });
            this._emit();
          }));
          box.appendChild(wrap);
        }
      });

      // 4. Energie
      box = this._panel("energy", "4 · Energie", "mdi:lightning-bolt", c.energy ? "angepasst" : energy ? "automatisch" : "nicht gefunden");
      box.insertAdjacentHTML("beforeend", '<div class="note">Leer lassen = automatisch aus dem Energie-Dashboard. Hier kannst du Punkte zuweisen und benennen — wie in der Energie-Karte.</div>');
      if (customElements.get("nullglow-flow-card-editor")) {
        const ed = document.createElement("nullglow-flow-card-editor");
        ed.setConfig(c.energy || energy || {});
        ed.hass = hass;
        ed.addEventListener("config-changed", (ev) => {
          ev.stopPropagation();
          const e = { ...ev.detail.config }; delete e.type;
          c.energy = e; this._emit();
        });
        box.appendChild(ed);
      }

      // 5. Wetter, Personen, Kameras, Kalender
      box = this._panel("more", "5 · Design, Wetter, Personen, Kameras, Kalender", "mdi:tune-variant", designs(hass)[c.design] || designs(hass).nullglow || "Nullglow");
      box.appendChild(this._form([
        { name: "weather", label: "Wetter", helper: `leer = ${inv.weather || "keins gefunden"}`, selector: { entity: { filter: { domain: "weather" } } } },
        { name: "persons", label: "Personen", helper: "leer = alle", selector: { entity: { multiple: true, filter: { domain: "person" } } } },
        { name: "cameras", label: "Kameras", helper: "leer = alle", selector: { entity: { multiple: true, filter: { domain: "camera" } } } },
        { name: "calendars", label: "Kalender", helper: "leer = alle", selector: { entity: { multiple: true, filter: { domain: "calendar" } } } },
        { name: "screen_switch", label: "Steckdose des Wandmonitors (optional)", helper: "ist sie aus, pausiert das Nordlicht im Hintergrund",
          selector: { entity: { filter: { domain: ["switch", "light", "input_boolean", "binary_sensor"] } } } },
        { name: "title", label: "Titel des Dashboards", selector: { text: {} } },
        { name: "design", label: "Design", helper: "Standard-Farbvariante — auf jedem Gerät per Uhr antippen umstellbar",
          selector: { select: { mode: "dropdown", options: Object.entries(designs(hass)).map(([value, label]) => ({ value, label })) } } },
        { name: "mode", label: "Hell / Dunkel", helper: "jedes Design gibt es hell und dunkel",
          selector: { select: { mode: "dropdown", options: [
            { value: "auto", label: "Wie Gerät / HA-Profil" }, { value: "dark", label: "Immer dunkel" },
            { value: "light", label: "Immer hell" }, { value: "sun", label: "Nach Sonne (tagsüber hell)" }] } } },
      ], { design: c.design || "nullglow", mode: c.mode || "auto", weather: c.weather, persons: c.persons || [], cameras: c.cameras || [], calendars: c.calendars || [], title: c.title,
        screen_switch: c.screen_switch }, (v) => {
        for (const k of ["weather", "title", "screen_switch"]) { if (v[k]) c[k] = v[k]; else delete c[k]; }
        if (v.design && v.design !== "nullglow") c.design = v.design; else delete c.design;
        if (v.mode && v.mode !== "auto") c.mode = v.mode; else delete c.mode;
        for (const k of ["persons", "cameras", "calendars"]) { if (v[k]?.length) c[k] = v[k]; else delete c[k]; }
        this._emit();
      }));

      // 6. Tipps
      box = this._panel("tips", "6 · Handy & Wandmonitor", "mdi:monitor-cellphone");
      box.insertAdjacentHTML("beforeend", `<div class="note"><b>Handy:</b> läuft in der HA-App, Seiten unten per Leiste wechseln (wischbar).<br>
        <b>Wandmonitor (Full HD):</b> Dashboard-Adresse mit <code>?kiosk</code> öffnen (braucht Kiosk Mode) — ohne Kopfzeile und
        Seitenleiste. Bei 1920×1080 mit 125 % Zoom sieht es aus wie im Original. Hochkant geht auch (die Leiste zeigt dann nur Symbole).<br>
        <b>Uhr antippen:</b> Design und Hell/Dunkel nur für dieses Gerät — der Standard bleibt, was hier eingestellt ist.<br>
        Ändern kannst du alles später über <b>Dashboard bearbeiten</b>; „Kontrolle übernehmen“ macht daraus ein normales, frei
        bearbeitbares Dashboard (dann ohne automatische Aktualisierung).</div>`);
    }
  }

  customElements.define("nullglow-strategy-editor", NullglowStrategyEditor);
  customElements.define("ll-strategy-dashboard-nullglow", NullglowDashboardStrategy);
  window.customStrategies = window.customStrategies || [];
  if (!window.customStrategies.some((s) => s.type === "nullglow"))
    window.customStrategies.push({ type: "nullglow", strategyType: "dashboard", name: "Nullglow",
      description: "Dunkles Glas-Dashboard mit Energiefluss, Licht, Klima, Kameras — richtet sich aus deinen Bereichen selbst ein" });
  window.__nullglowStrategy = { inventory, generate: NullglowDashboardStrategy.generate }; // Tests
})();
