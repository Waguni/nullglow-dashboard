/* Nullglow Dashboard — frosted-glass dashboard for Home Assistant (energy flow, lights, climate, cameras …).
 * Settings → Dashboards → Add dashboard → "Nullglow". Docs: README.md · English + German UI (follows the HA profile).
 * Built by tools/build-hacs.py — do not edit by hand. */

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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#05070a",
"ng-bg-elev": "#0a0f14",
"ng-glass": "rgba(255, 255, 255, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(255, 255, 255, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(255, 255, 255, calc(0.12 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#050507",
"ng-bg-elev": "#0d0b12",
"ng-glass": "rgba(196, 170, 255, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(196, 170, 255, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(196, 170, 255, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#0a1619",
"ng-bg-elev": "#0e2024",
"ng-glass": "rgba(180, 240, 234, calc(0.04 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(180, 240, 234, calc(0.07 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(180, 240, 234, calc(0.12 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#0a0604",
"ng-bg-elev": "#140c08",
"ng-glass": "rgba(255, 196, 160, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(255, 196, 160, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(255, 196, 160, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#080704",
"ng-bg-elev": "#12100a",
"ng-glass": "rgba(255, 230, 170, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(255, 230, 170, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(255, 230, 170, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#0a0608",
"ng-bg-elev": "#150c12",
"ng-glass": "rgba(255, 190, 220, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(255, 190, 220, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(255, 190, 220, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#04060b",
"ng-bg-elev": "#0a0f1a",
"ng-glass": "rgba(170, 200, 255, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(170, 200, 255, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(170, 200, 255, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#05090c",
"ng-bg-elev": "#0b1319",
"ng-glass": "rgba(190, 230, 255, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(190, 230, 255, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(190, 230, 255, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#060804",
"ng-bg-elev": "#0d110a",
"ng-glass": "rgba(215, 255, 170, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(215, 255, 170, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(215, 255, 170, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#08040a",
"ng-bg-elev": "#120a16",
"ng-glass": "rgba(255, 170, 240, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(255, 170, 240, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(255, 170, 240, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#060607",
"ng-bg-elev": "#0e0f11",
"ng-glass": "rgba(220, 225, 235, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(220, 225, 235, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(220, 225, 235, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#05050b",
"ng-bg-elev": "#0c0c18",
"ng-glass": "rgba(180, 180, 255, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(180, 180, 255, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(180, 180, 255, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
"card-mod-card": "ha-card {\n  position: relative;\n  transition: transform .14s cubic-bezier(.22,1,.36,1);\n}\nha-card:active:not(:has(mushroom-slider:active)) { transform: scale(.98); }\n/* Durchsichtige Karten (Überschriften, Abstandhalter/Text-Markdown) ohne Glas-Unschärfe — sonst verwischt ein unsichtbarer\n   Streifen das Hintergrund-Gitter (sichtbar auf großen Bildschirmen unter der Navigation) */\n:host(.type-heading) ha-card, ha-card.text-only { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }\n/* Navigation unten (Glas-Dock) steht NICHT hier: card-mod bringt das Theme erst einen Moment nach dem ersten Zeichnen,\n   dann blitzte die alte Bubble-Optik auf. Quelle: NAV_DOCK in nullglow-strategy.js (Vorlage), Kiosk per tools/build-nav-dock.py. */\nha-card::before {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: -1;\n  opacity: 0; transition: opacity .26s cubic-bezier(.22,1,.36,1);\n  background: radial-gradient(130% 150% at 0% 0%, rgba(var(--ng-glow-rgb, 0, 0, 0), .14), transparent 62%);\n  box-shadow: inset 0 0 0 1px rgba(var(--ng-glow-rgb, 0, 0, 0), .34), 0 0 26px -10px rgba(var(--ng-glow-rgb, 0, 0, 0), .65);\n}\n/* Lebendige Geräte-Symbole: Effekte als ::after am Symbol-Rahmen (ha-tile-icon = Mushroom-Template, mushroom-shape-icon =\n   Mushroom-Climate); Klimaanlagen setzen zusätzlich --ng-fan (Umdrehungsdauer je Lüfterstufe) -> Lüfter-Symbol dreht */\nha-tile-icon, mushroom-shape-icon { position: relative; }\nha-tile-icon::after, mushroom-shape-icon::after {\n  content: \"\"; position: absolute; pointer-events: none; opacity: 0; transition: opacity .4s ease;\n}\n@container style(--ng-state: on) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { filter: drop-shadow(0 0 6px rgba(var(--rgb-ng-acc), calc(.75 * var(--ng-glow-k, 1)))); }\n}\n/* Waschmaschine läuft: Lichtkomet kreist um die Trommel, Symbol zittert fein (Schleudern) */\n@container style(--ng-state: wash) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-shake .16s linear infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 13px; height: 13px; left: 50%; top: 50%; margin: -5px 0 0 -6.5px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 55%, rgba(var(--rgb-ng-acc), .15) 70%, rgba(var(--rgb-ng-acc), 1) 97%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n            mask: radial-gradient(circle, transparent 0 4.2px, #000 4.6px 6.5px, transparent 6.8px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin .7s linear infinite;\n  }\n}\n@container style(--ng-state: charge) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-pulse 1.6s ease-in-out infinite; }\n}\n/* Heizt: Wärmewellen steigen über dem Symbol auf (♨) */\n@container style(--ng-state: heat) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n  ha-state-icon { animation: ng-glow-warm 2.4s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 20px; height: 16px; left: 50%; bottom: 84%; margin-left: -10px;\n    background: rgba(var(--rgb-ng-warn), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'><g fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'><path d='M4 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/><path d='M10 12c-2-2 2-4 0-6s2-4 0-6'/><path d='M16 16c-2-2 2-4 0-6s2-4 0-6s1-3 0-4'/></g></svg>\") 0 0 / 20px 16px repeat-y, linear-gradient(to top, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-warn), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-rise 1.7s linear infinite;\n  }\n}\n/* Kühlt: Schneeflocken schweben aus dem Gerät nach unten */\n@container style(--ng-state: cool) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-info); opacity: 1; }\n  ha-state-icon { animation: ng-glow-cool 2.8s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 22px; height: 18px; left: 50%; top: 86%; margin-left: -11px;\n    background: rgba(var(--rgb-ng-info), .95);\n    -webkit-mask: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'><g stroke='black' stroke-width='1.1' stroke-linecap='round'><path d='M5 1v5M2.8 2.2l4.4 2.6M2.8 4.8l4.4-2.6'/><path d='M16 7v5M13.8 8.2l4.4 2.6M13.8 10.8l4.4-2.6'/><path d='M9 13.5v4M7.3 14.5l3.4 2M7.3 16.5l3.4-2'/></g></svg>\") 0 0 / 22px 20px repeat-y, linear-gradient(to bottom, #000 25%, transparent 100%);\n    -webkit-mask-composite: source-in; mask-composite: intersect;\n    filter: drop-shadow(0 0 2.5px rgba(var(--rgb-ng-info), calc(.8 * var(--ng-glow-k, 1))));\n    animation: ng-fall 2.6s linear infinite, ng-sway 3s ease-in-out infinite;\n  }\n}\n/* Lüfter dreht nur bei echten Lüfterstufen der Klimaanlagen (tools/build-klima-view.py setzt 2.4s … .45s, sonst 0s).\n   Früher lief ng-spin mit 0 s Dauer endlos auch bei Heizungen -> Stil-Neuberechnung bei jedem Bild. */\n@container (style(--ng-state: heat) or style(--ng-state: cool)) and (style(--ng-fan: 2.4s) or style(--ng-fan: 1.8s) or style(--ng-fan: 1.1s) or style(--ng-fan: .7s) or style(--ng-fan: .45s)) {\n  ha-state-icon { animation: ng-spin var(--ng-fan) linear infinite, var(--ng-glow-anim) !important; }\n}\n@container style(--ng-state: heat) { ha-state-icon { --ng-glow-anim: ng-glow-warm 2.4s ease-in-out infinite; } }\n@container style(--ng-state: cool) { ha-state-icon { --ng-glow-anim: ng-glow-cool 2.8s ease-in-out infinite; } }\n@container style(--ng-state: warn) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-warn); opacity: 1; }\n}\n@container style(--ng-state: crit) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-danger); opacity: 1; }\n  ha-state-icon { animation: ng-alarm 1.4s ease-in-out infinite; }\n}\n@container style(--ng-state: idle) {\n  mushroom-card { opacity: .45; }\n}\n/* Sauger reinigt: Roboter schlingert auf seiner Bahn, ein Lichtkomet zieht die Reinigungsrunde um ihn */\n@container style(--ng-state: clean) {\n  ha-card::before { --ng-glow-rgb: var(--rgb-ng-acc); opacity: 1; }\n  ha-state-icon { animation: ng-drive 3.2s ease-in-out infinite; }\n  ha-tile-icon::after, mushroom-shape-icon::after {\n    opacity: 1; width: 32px; height: 32px; left: 50%; top: 50%; margin: -16px 0 0 -16px; border-radius: 50%;\n    background: conic-gradient(from 0deg, transparent 0 58%, rgba(var(--rgb-ng-acc), .12) 74%, rgba(var(--rgb-ng-acc), .95) 98%, transparent 100%);\n    -webkit-mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n            mask: radial-gradient(circle, transparent 0 14.3px, #000 14.8px 16px, transparent 16.3px);\n    filter: drop-shadow(0 0 3px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1))));\n    animation: ng-spin 2.6s linear infinite;\n  }\n}\n@container style(--ng-state: move) {\n  ha-state-icon { animation: ng-slide 1.1s ease-in-out infinite; }\n}\n@keyframes ng-pulse {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-acc), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-acc), calc(.9 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-alarm {\n  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(var(--rgb-ng-danger), calc(0 * var(--ng-glow-k, 1)))); }\n  50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(var(--rgb-ng-danger), calc(.95 * var(--ng-glow-k, 1)))); }\n}\n@keyframes ng-slide { 0%, 100% { transform: translateY(1.5px); } 50% { transform: translateY(-1.5px); } }\n@keyframes ng-spin { to { transform: rotate(360deg); } }\n@keyframes ng-shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(.4px, -.3px); } 50% { transform: translate(-.3px, .3px); } 75% { transform: translate(.3px, .4px); } }\n@keyframes ng-rise { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 -16px, 0 0; } }\n@keyframes ng-sway { 0%, 100% { transform: translateX(-1px); } 50% { transform: translateX(1.2px); } }\n@keyframes ng-fall { from { -webkit-mask-position: 0 0, 0 0; } to { -webkit-mask-position: 0 20px, 0 0; } }\n@keyframes ng-glow-warm { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-warn), calc(.5 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-warn), calc(.95 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-glow-cool { 0%, 100% { filter: drop-shadow(0 0 2px rgba(var(--rgb-ng-info), calc(.45 * var(--ng-glow-k, 1)))); } 50% { filter: drop-shadow(0 0 7px rgba(var(--rgb-ng-info), calc(.9 * var(--ng-glow-k, 1)))); } }\n@keyframes ng-drive {\n  0%, 100% { transform: translate(-2px, 0) rotate(-10deg); } 25% { transform: translate(0, -1.5px) rotate(0); }\n  50% { transform: translate(2px, 0) rotate(10deg); } 75% { transform: translate(0, 1.5px) rotate(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n/* Stromsparen (Uhr-Pop-up der Vorlage): --ng-eco: 1 an <html> erbt bis hierher -> Symbole stehen still, Farben bleiben */\n@container style(--ng-eco: 1) {\n  ha-state-icon, ha-tile-icon::after, mushroom-shape-icon::after { animation: none !important; }\n}\n",
"ng-bg": "#090806",
"ng-bg-elev": "#12100c",
"ng-glass": "rgba(245, 225, 195, calc(0.045 * var(--ng-glass-k, 1)))",
"ng-glass-2": "rgba(245, 225, 195, calc(0.075 * var(--ng-glass-k, 1)))",
"ng-glass-hi": "rgba(245, 225, 195, calc(0.13 * var(--ng-glass-k, 1)))",
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
"nf-background": "var(--ng-glass)",
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
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    // Karte
    "Netz": "Grid", "Einspeisung": "Export", "Bezug": "Import", "Haus": "Home", "Akku": "Battery", "Sonstige": "Other",
    "Speicher": "Battery", "lädt {w} W": "charging {w} W", "entlädt {w} W": "discharging {w} W", "bereit": "ready",
    "Autarkie": "Self-sufficiency", "heute": "today", "Woche": "week", "Monat": "month", "morgen": "tomorrow",
    "erzeugt": "produced", "verbraucht": "consumed", "Netz kWh": "grid kWh", "Netzkosten": "grid cost", "gespart": "saved",
    "Bilanz: Zähler im Editor wählen": "Totals: pick meters in the editor", "Bilanz lädt …": "Loading totals …",
    "Karte bearbeiten → „Automatisch erkennen“ oder Solar- bzw. Netz-Sensor wählen.": "Edit card → “Auto-detect” or pick a solar or grid sensor.",
    "nullglow-flow-card: keine Konfiguration": "nullglow-flow-card: no configuration",
    "Verbraucher {n}": "Consumer {n}",
    "Live-Energiefluss mit Partikelströmen (Nullglow) — Sensoren per Klick, „Automatisch erkennen“": "Live energy flow with particle streams (Nullglow) — sensors by click, “Auto-detect”",
    // Editor
    "Suche Sensoren …": "Searching sensors …", "Automatische Erkennung fehlgeschlagen.": "Auto-detection failed.",
    "{n} Verbraucher": "{n} consumers", "Bilanz": "Totals", "Prognose": "Forecast",
    "Übernommen: {list}. Bitte prüfen, Namen nach Wunsch ändern.": "Applied: {list}. Please check and rename as you like.",
    "Nichts gefunden — Sensoren bitte unten auswählen.": "Nothing found — please pick sensors below.",
    "Alles schon eingetragen, nichts geändert.": "Everything already set, nothing changed.",
    "{label}: Sensoren vorgeschlagen — bitte prüfen.": "{label}: sensors suggested — please check.",
    "{label}: bitte Sensoren wählen.": "{label}: please pick sensors.",
    "Automatisch erkennen": "Auto-detect",
    "Übernimmt Solar, Netz, Zähler, Strompreis und Verbraucher aus dem Energie-Dashboard": "Takes solar, grid, meters, electricity price and consumers from the energy dashboard",
    "(Einstellungen → Dashboards → Energie). Vorhandene Einträge bleiben.": "(Settings → Dashboards → Energy). Existing entries are kept.",
    "{n} Sensor(en)": "{n} sensor(s)", "nicht gewählt": "not selected", "eingerichtet": "configured", "keiner": "none",
    "keine": "none", "{n} Punkte": "{n} points", "an": "on", "aus": "off", "{h} px hoch": "{h} px high",
    "Solar-Leistung (W)": "Solar power (W)", "Mehrere Wechselrichter werden addiert": "Multiple inverters are added up",
    "Symbol": "Icon", "Spitzenleistung der Anlage": "Peak power of the system", "steuert Glühen und Sonnenkranz": "controls glow and sun rays",
    "Netz-Leistung (W)": "Grid power (W)",
    "positiv = Bezug, negativ = Einspeisung; je Phase ein Sensor wird addiert": "positive = import, negative = export; one sensor per phase is added up",
    "Vorzeichen umdrehen": "Invert sign",
    "einschalten, wenn dein Zähler Einspeisung positiv meldet": "turn on if your meter reports export as positive",
    "Getrennte Einspeise-Leistung (optional)": "Separate export power (optional)",
    "nur falls Bezug und Einspeisung zwei Sensoren sind (beide positiv)": "only if import and export are two sensors (both positive)",
    "Bezug in Amber ab": "Import in amber from",
    "Batteriespeicher (optional)": "Battery storage (optional)",
    "Z. B. Anker Solix, Zendure, EcoFlow, Hausspeicher. Erscheint unter dem Haus: Ladestand als Ring, Ströme Solar/Netz → Akku und Akku → Haus.":
      "E.g. Anker Solix, Zendure, EcoFlow, home battery. Appears below the home: state of charge as a ring, flows solar/grid → battery and battery → home.",
    "Akku-Leistung (W)": "Battery power (W)", "positiv = Entladen; mehrere werden addiert": "positive = discharging; multiple are added up",
    "einschalten, wenn dein Sensor Laden positiv meldet (z. B. Anker Solix „Ladeleistung“)": "turn on if your sensor reports charging as positive (e.g. Anker Solix “charging power”)",
    "Ladestand (%)": "State of charge (%)", "leer = passt sich dem Ladestand an": "empty = follows the state of charge",
    "Getrennte Lade-Leistung (optional)": "Separate charging power (optional)",
    "nur falls Laden und Entladen zwei Sensoren sind (beide positiv)": "only if charging and discharging are two sensors (both positive)",
    "Verbraucher": "Consumers",
    "Jeder Verbraucher ist ein Punkt rechts im Bild. Leistung (W) für den Strom, Zähler (kWh) optional für die Bilanz. Je nach Kartenhöhe passen etwa 4–7 Punkte.":
      "Each consumer is a point on the right. Power (W) for the flow, meter (kWh) optional for the totals. Depending on the card height about 4–7 points fit.",
    "neu": "new", "nach oben": "move up", "nach unten": "move down", "entfernen": "remove",
    "Leistung (W)": "Power (W)", "Zähler (kWh, optional)": "Meter (kWh, optional)", "Verbraucher hinzufügen": "Add consumer",
    "Punkt „Sonstige“ (Haus minus die Verbraucher oben)": "Point “Other” (home minus the consumers above)",
    "Bilanz-Leiste (heute / Woche / Monat)": "Totals bar (today / week / month)", "Bilanz unten anzeigen": "Show totals at the bottom",
    "Solar erzeugt (kWh)": "Solar produced (kWh)", "Netzbezug (kWh)": "Grid import (kWh)",
    "je Phase ein Zähler wird addiert": "one meter per phase is added up", "Einspeisung (kWh)": "Export (kWh)",
    "Strompreis": "Electricity price", "Saldieren wie ein Zweirichtungszähler": "Net like a bidirectional meter",
    "rechnet Bezug/Einspeisung aus der Netz-Leistung aller Phasen (richtig bei Shelly 3EM & Co.); dann werden die Zähler oben nicht gebraucht":
      "computes import/export from the grid power of all phases (correct for Shelly 3EM & co.); the meters above are then not needed",
    "Solar-Prognose": "Solar forecast", "Prognose am Solar-Punkt zeigen": "Show forecast at the solar point",
    "z. B. Integration Forecast.Solar": "e.g. Forecast.Solar integration",
    "Prognose heute (kWh)": "Forecast today (kWh)", "Prognose morgen (kWh, optional)": "Forecast tomorrow (kWh, optional)",
    "Darstellung": "Appearance", "Höhe der Karte": "Card height", "Symbol Haus": "Home icon",
    "Alle Sensoren zur Auswahl anbieten": "Offer all sensors for selection",
    "(falls dein Sensor oben nicht auftaucht, weil ihm die Geräteklasse fehlt)": "(if your sensor does not show up above because it has no device class)",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass / Editor) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));

  const REF_W = 3000; // W, bei dem ein Strom als „voll“ gilt (Linienhelligkeit)
  const MAX_PARTICLES = 70; // je Strom
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fmt = (w) => Math.round(w).toLocaleString(numLoc());
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
    .cons .meta, .battery .meta { transform: translateY(-50%); text-align: left; }  /* Verbraucher/Akku: Werte rechts neben dem Knoten */
    .battery .soc { font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); font-variant-numeric: tabular-nums;
      color: var(--nf-txt, #e8f5ee); font-weight: 600; font-size: 1.15em; }
    .battery .soc small { font-size: .7em; color: var(--nf-txt-dim, #93a79d); margin-left: .1em; font-weight: 400; }
    .battery .bw { font-family: var(--ha-font-family-code, 'JetBrains Mono', ui-monospace, monospace); font-size: .85em; color: var(--nf-txt-dim, #93a79d); }
    .battery.on .bw { color: var(--nf-acc, #7cffb2); }
    .cons .lbl { font-size: 9px; letter-spacing: .04em; }
    .wrap.tight .cons .kwh, .wrap.tighter .cons .lbl { display: none; }
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
      if (hass) ngH = hass;
      try { return await detectConfig(hass); } catch (e) { return {}; }
    }

    static getConfigElement() {
      return document.createElement("nullglow-flow-card-editor");
    }

    setConfig(config) {
      if (!config) throw new Error(t("nullglow-flow-card: keine Konfiguration"));
      this._cfg = {
        height: 260, solar_peak: 800, warn_import: 2000, ...config,
        solar: list(config.solar), grid: list(config.grid), grid_export: list(config.grid_export),
        battery: list(config.battery), battery_charge: list(config.battery_charge),
        consumers: (config.consumers || []).map((c) => (typeof c === "string" ? { entity: c } : c))
          .concat(config.other ? [{ name: t("Sonstige"), icon: "mdi:dots-horizontal-circle-outline", ...config.other, virtual: true }] : []),
        today: config.today ? { price: 0, ...config.today, solar: list(config.today.solar),
          import: list(config.today.import), export: list(config.today.export) } : null,
        forecast: config.forecast || null,
      };
      this._build();
    }

    set hass(h) {
      this._hass = h;
      if (h) ngH = h;
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
          ${t("Karte bearbeiten → „Automatisch erkennen“ oder Solar- bzw. Netz-Sensor wählen.")}</div></div></ha-card>`;
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
        solar: c.solar.length ? mk("solar", "src solar", c.solar_icon || "mdi:solar-power-variant", c.solar_name || t("Solar"), c.solar[0]) : null,
        grid: c.grid.length ? mk("grid", "src grid", c.grid_icon || "mdi:transmission-tower", c.grid_name || t("Netz"), c.grid[0]) : null,
        house: mk("house", "house", c.house_icon || "mdi:home-lightning-bolt-outline", t("Haus"), null),
        battery: c.battery.length ? mk("battery", "src battery", c.battery_icon || "mdi:home-battery-outline", c.battery_name || t("Akku"), c.battery_soc || c.battery[0]) : null,
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
        this._tabs.innerHTML = `<span data-p="day">${t("heute")}</span><span data-p="week">${t("Woche")}</span><span data-p="month">${t("Monat")}</span>`;
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
      if (N.battery) { // Speicher: laden aus Solar bzw. Netz, entladen ins Haus
        if (N.solar) this._flows.push(flow(N.solar, N.battery, "bsolar"));
        if (N.grid) this._flows.push(flow(N.grid, N.battery, "bgrid"));
        this._flows.push(flow(N.battery, N.house, "bout"));
        if (N.grid) this._flows.push(flow(N.battery, N.grid, "bexp"));   // Akku speist ein (selten)
      }
      N.cons.forEach((n, i) => this._flows.push(flow(N.house, n, "cons" + i)));

      this._v = { solar: 0, grid: 0, house: 0, share: 0, battery: 0, soc: null, cons: c.consumers.map(() => 0) };
      this._d = { solar: 0, grid: 0, house: 0, share: 0, battery: 0, soc: 0, cons: c.consumers.map(() => 0) }; // angezeigte (gezählte) Werte
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
      const rB = clamp(m * 0.085, 18, 30);
      place(N.house, xh, h * (N.battery ? 0.4 : 0.46), rH, Math.round(rH * 0.4));
      if (N.battery) { // unter dem Haus, Werte rechts daneben
        place(N.battery, xh, h - rB - 16, rB, Math.round(rB * 0.95));
        N.battery.meta.style.top = "0px";
        N.battery.meta.style.left = `${rB + 12}px`;
      }
      N.house.el.querySelector(".in").style.fontSize = `${Math.round(rH * 0.42)}px`;
      N.house.meta.style.top = `${rH + 9}px`;
      const n = N.cons.length, top = h * 0.14, bot = h * 0.86;
      // Viele Verbraucher auf wenig Höhe: Beschriftungen würden sich überlappen -> erst kWh-Zeile, dann Namen weglassen
      const gapC = n > 1 ? (bot - top) / (n - 1) : 999;
      this._wrap.classList.toggle("tight", gapC < 36);
      this._wrap.classList.toggle("tighter", gapC < 25);
      N.cons.forEach((c, i) => {
        place(c, xc, n === 1 ? h * 0.46 : top + (i * (bot - top)) / (n - 1), rC, Math.round(rC * 1.05));
        c.meta.style.top = "0px";
        c.meta.style.left = `${rC + 7}px`;
      });
      const fs = clamp(m * 0.05, 11, 15);
      [N.solar, N.grid, N.battery].forEach((x) => x && (x.meta.style.fontSize = `${fs}px`));
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
        } else if (f.kind === "bout") { // Akku -> Haus: senkrecht nach oben
          const dy = b.y - a.y;
          c1 = { x: a.x, y: a.y + dy * 0.45 };
          c2 = { x: b.x, y: b.y - dy * 0.45 };
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
      const c = this._cfg, v = this._v, na = (this._na = {}), N = this._nodes;
      let s = 0;
      for (const id of c.solar) { const x = this._num(id); if (x === null) na.solar = true; else s += x; }
      let g = 0;
      for (const id of c.grid) { const x = this._num(id); if (x === null) na.grid = true; else g += x; }
      if (c.grid_invert) g = -g;
      for (const id of c.grid_export) { const x = this._num(id); if (x === null) na.grid = true; else g -= Math.abs(x); }
      // Speicher: + = Entladen (wie HA), − = Laden
      let b = 0;
      for (const id of c.battery) { const x = this._num(id); if (x === null) na.battery = true; else b += x; }
      if (c.battery_invert) b = -b;
      for (const id of c.battery_charge) { const x = this._num(id); if (x === null) na.battery = true; else b -= Math.abs(x); }
      if (!c.battery.length) b = 0;
      v.battery = b;
      v.soc = c.battery_soc ? this._num(c.battery_soc) : null;
      const bOut = Math.max(0, b), bIn = Math.max(0, -b);
      v.solar = Math.max(0, s);
      v.grid = g;
      v.house = Math.max(0, v.solar + g + bOut - bIn);
      const sToB = Math.min(bIn, v.solar);                       // lädt zuerst aus Solar …
      const gToB = Math.min(Math.max(0, bIn - sToB), Math.max(0, g)); // … den Rest aus dem Netz
      const sToH = Math.min(v.solar - sToB, v.house);
      const bToH = Math.min(bOut, Math.max(0, v.house - sToH));
      const sExp = Math.min(Math.max(0, -g), Math.max(0, v.solar - sToB - sToH));   // Einspeisung zuerst aus Solar …
      const bExp = Math.max(0, Math.max(0, -g) - sExp);                               // … den Rest aus dem Akku
      v.share = v.house > 1 ? Math.min(1, (sToH + bToH) / v.house) : v.solar > 1 || bOut > 1 ? 1 : 0;   // Akku zählt als selbst erzeugt
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
        f.target = f.kind === "solar" ? sToH : f.kind === "export" ? (N.battery ? sExp : Math.max(0, -g))
          : f.kind === "import" ? Math.max(0, g - gToB) : f.kind === "bsolar" ? sToB : f.kind === "bgrid" ? gToB
          : f.kind === "bout" ? bToH : f.kind === "bexp" ? bExp : v.cons[+f.kind.slice(4)];
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
      const fps = document.documentElement.dataset.ngEco === "1" ? 15 : 30; // Stromsparen (Uhr-Pop-up der Vorlage): halbe Bildrate
      if (this._last && ts - this._last < 1000 / fps - 2) return; // max. 30 fps
      const dt = this._last ? Math.min(0.1, (ts - this._last) / 1000) : 1 / fps;
      this._last = ts;
      this._step(dt);
      this._draw();
    }

    _step(dt) {
      const c = this._cfg, v = this._v, d = this._d;
      const ease = 1 - Math.exp(-dt * 5); // weiches Nachführen der Zahlen und Ströme
      for (const k of ["solar", "grid", "house", "share", "battery"]) d[k] += (v[k] - d[k]) * ease;
      if (v.soc !== null) d.soc += (v.soc - d.soc) * ease;
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
            else if (f.kind === "bgrid") rgb = this._rgb.txt;
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
        const rgb = f.kind === "import" && f.w > c.warn_import ? this._rgb.warn : f.kind === "import" || f.kind === "bgrid" ? this._rgb.txt : this._rgb.acc;
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

      // Ladestand-Ring um den Akku: Amber unter 15 %, pulsiert beim Laden
      if (N.battery && this._v.soc !== null) {
        const n = N.battery, rb = n.r + 5, soc = clamp(d.soc / 100, 0, 1), low = d.soc < 15;
        const charging = this._v.battery < -3, a = charging ? 0.6 + 0.35 * Math.sin(this._halo * 3) : 0.9;
        ctx.lineCap = "round";
        ctx.lineWidth = 3;
        ctx.strokeStyle = `rgba(${this._rgb.txt},0.08)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, rb, 0, Math.PI * 2);
        ctx.stroke();
        if (soc > 0.005) {
          ctx.strokeStyle = `rgba(${low ? this._rgb.warn : this._rgb.acc},${a})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, rb, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * soc);
          ctx.stroke();
        }
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
      const kwh0 = (x) => x.toLocaleString(numLoc(), { minimumFractionDigits: x < 10 ? 1 : 0, maximumFractionDigits: x < 10 ? 1 : 0 });
      this._fc = null;
      let fcHtml = "";
      if (c.forecast) { // Prognose immer auf „heute“ bezogen, unabhängig vom gewählten Zeitraum
        const ft = this._num(c.forecast.today), fm = c.forecast.tomorrow ? this._num(c.forecast.tomorrow) : null;
        const made = this._bal.day ? this._bal.day.solar : null;
        if (ft !== null && ft > 0) {
          this._fc = { frac: made !== null ? made / ft : 0 };
          fcHtml = `<div class="fc">${made !== null ? `<b>${kwh0(made)}</b> / ` : ""}${kwh0(ft)} kWh</div>`
            + (fm !== null ? `<div class="fc">${t("morgen")} ${kwh0(fm)} kWh</div>` : "");
        }
      }
      if (N.solar) {
        const g = clamp(d.solar / c.solar_peak, 0, 1);
        set(N.solar, `${na.solar ? '<span class="val">–</span>' : W(d.solar)}<div class="lbl">${N.solar.name}</div>${fcHtml}`,
          `${v.solar > 3 ? "on" : ""} ${na.solar ? "na" : ""}`, g);
      }
      if (N.grid) {
        const imp = d.grid > 25, exp = d.grid < -25;
        const lbl = exp ? t("Einspeisung") : imp ? t("Bezug") : N.grid.name;
        set(N.grid, `${na.grid ? '<span class="val">–</span>' : W(Math.abs(d.grid))}<div class="lbl">${lbl}</div>`,
          `${exp ? "on" : ""} ${imp && v.grid > c.warn_import ? "warn" : ""} ${na.grid ? "na" : ""}`,
          exp ? clamp(-d.grid / REF_W, 0.15, 1) : 0);
      }
      if (N.battery) {
        const bw = d.battery, chg = v.battery < -3, dis = v.battery > 3, soc = v.soc;
        const lvl = soc === null ? null : clamp(Math.round(soc / 10) * 10, 0, 100);
        const icon = c.battery_icon || (lvl === null ? "mdi:home-battery-outline"
          : chg ? `mdi:battery-charging-${Math.max(10, lvl)}` : lvl >= 100 ? "mdi:battery" : lvl <= 0 ? "mdi:battery-outline" : `mdi:battery-${lvl}`);
        if (N.battery.icon !== icon) { N.battery.disc.innerHTML = `<ha-icon icon="${esc(icon)}"></ha-icon>`; N.battery.icon = icon; }
        const socHtml = soc === null ? "" : `<div class="soc">${Math.round(d.soc)}<small>%</small></div>`;
        const state = na.battery ? "–" : chg ? t("lädt {w} W", { w: fmt(-bw) }) : dis ? t("entlädt {w} W", { w: fmt(bw) }) : t("bereit");
        set(N.battery, `${socHtml}<div class="bw">${state}</div><div class="lbl">${N.battery.name}</div>`,
          `${chg || dis ? "on" : ""} ${soc !== null && soc < 15 ? "warn" : ""} ${na.battery ? "na" : ""}`,
          chg || dis ? clamp(Math.sqrt(Math.abs(bw) / REF_W), 0.15, 1) : 0);
      }
      const inner = `${fmt(d.house)}<small>W</small>`;
      const hin = N.house.el.querySelector(".in");
      if (hin.dataset.v !== inner) { hin.innerHTML = inner; hin.dataset.v = inner; }
      const T = this._today, kwh = (x) => x.toLocaleString(numLoc(), { minimumFractionDigits: x < 10 ? 1 : 0, maximumFractionDigits: x < 10 ? 1 : 0 });
      let used = 0, selfUse = 0, autToday = null;
      if (T) {
        used = Math.max(0, T.solar + T.imp - T.exp);
        selfUse = Math.max(0, Math.min(T.solar - T.exp, used));
        autToday = used > 0.01 ? selfUse / used : T.solar > 0.01 ? 1 : 0;
        this._dToday += (autToday - this._dToday) * 0.08;
      }
      const pname = { day: t("heute"), week: t("Woche"), month: t("Monat") }[this._period];
      set(N.house, `<div class="lbl">${t("Autarkie")} ${Math.round(clamp(d.share, 0, 1) * 100)} %${autToday === null ? "" : ` · ${pname} ${Math.round(autToday * 100)} %`}</div>`,
        d.share > 0.02 ? "on" : "", clamp(d.share, 0, 1) * 0.8);
      N.cons.forEach((n, i) => {
        const w = d.cons[i], idle = v.cons[i] < 3;
        const e = T && T.cons[i] !== null && T.cons[i] !== undefined ? `<div class="kwh">${kwh(T.cons[i])} kWh</div>` : "";
        const nm = n.name || esc(this._hass?.states?.[n.entity]?.attributes?.friendly_name || n.entity || "");
        set(n, `${na["c" + i] ? '<span class="val">–</span>' : W(w)}<div class="lbl">${nm}</div>${e}`,
          `${idle ? "idle" : "on"} ${na["c" + i] ? "na" : ""}`, idle ? 0 : clamp(Math.sqrt(w / REF_W), 0.1, 1));
      });
      if (this._strip) {
        const money = (x) => x.toLocaleString(numLoc(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const price = this._cfg.today.price || 0;
        const html = !T ? `<div style="grid-column: 1 / -1"><span class="l">${this._noBal ? t("Bilanz: Zähler im Editor wählen") : t("Bilanz lädt …")}</span></div>` : `
          <div><span class="v acc">${kwh(T.solar)}<small>kWh</small></span><span class="l">${t("erzeugt")}</span></div>
          <div><span class="v">${kwh(used)}<small>kWh</small></span><span class="l">${t("verbraucht")}</span></div>
          <div><span class="v">${kwh(T.imp)}<small>↓</small> ${kwh(T.exp)}<small>↑</small></span><span class="l">${t("Netz kWh")}</span></div>
          <div><span class="v cost">${money(T.imp * price)}<small>€</small></span><span class="l">${t("Netzkosten")}</span></div>
          <div><span class="v acc">${money(selfUse * price)}<small>€</small></span><span class="l">${t("gespart")}</span></div>`;
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
    const isSoc = (id) => !!st[id] && id.startsWith("sensor.") && st[id].attributes.device_class === "battery" && unit(id) === "%";
    return { st, ents, isPower, isEnergy, sibling, nameOf, powerOf: (id) => sibling(id, isPower), energyOf: (id) => sibling(id, isEnergy),
      socOf: (id) => sibling(id, isSoc) };
  }

  async function detectConfig(hass) {
    if (hass) ngH = hass;
    const T = sensorTools(hass), out = { solar: [], grid: [], grid_export: [], consumers: [], battery: [], battery_charge: [] };
    const today = { solar: [], import: [], export: [] };
    let prefs = null, price = null;
    try { prefs = await hass.callWS({ type: "energy/get_prefs" }); } catch (e) { /* Energie-Dashboard nicht eingerichtet */ }
    for (const s of prefs?.energy_sources || []) {
      const pc = s.power_config || {};
      if (s.type === "solar") {
        if (s.stat_energy_from) today.solar.push(s.stat_energy_from);
        const p = pc.stat_rate || s.stat_rate || (s.stat_energy_from && T.powerOf(s.stat_energy_from));
        if (p) out.solar.push(p);
      } else if (s.type === "battery") { // HA: positiv = Entladen
        if (pc.stat_rate || s.stat_rate) out.battery.push(pc.stat_rate || s.stat_rate);
        else if (pc.stat_rate_inverted) { out.battery.push(pc.stat_rate_inverted); out.battery_invert = true; }
        else if (pc.stat_rate_from) { out.battery.push(pc.stat_rate_from); if (pc.stat_rate_to) out.battery_charge.push(pc.stat_rate_to); }
        else { const p = s.stat_energy_from && T.powerOf(s.stat_energy_from); if (p) out.battery.push(p); }
        const any = out.battery[0] || s.stat_energy_from;
        if (any && !out.battery_soc) out.battery_soc = T.socOf(any) || undefined;
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
      out.consumers.push({ entity: p, name: shortName(full) || t("Verbraucher {n}", { n: out.consumers.length + 1 }),
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
    if (out.battery.length) {
      cfg.battery = out.battery.length === 1 ? out.battery[0] : out.battery;
      if (out.battery_invert) cfg.battery_invert = true;
      if (out.battery_charge.length) cfg.battery_charge = out.battery_charge;
      if (out.battery_soc) cfg.battery_soc = out.battery_soc;
    }
    if (out.consumers.length) {
      cfg.consumers = out.consumers;
      cfg.other = { name: t("Sonstige"), icon: "mdi:dots-horizontal-circle-outline" };
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
      if (h) ngH = h;
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
      this._msg(t("Suche Sensoren …"));
      let d;
      try { d = await detectConfig(this._hass); } catch (e) { this._msg(t("Automatische Erkennung fehlgeschlagen.")); return; }
      const c = this._config, got = [];
      const take = (k, label) => { if (!empty(d[k]) && empty(c[k])) { c[k] = d[k]; got.push(label); } };
      take("solar", t("Solar")); take("grid", t("Netz"));
      if (!empty(d.battery) && empty(c.battery)) {
        for (const k of ["battery", "battery_invert", "battery_charge", "battery_soc"]) if (!empty(d[k])) c[k] = d[k];
        got.push(t("Speicher"));
      }
      if (!empty(d.grid) && c.grid === d.grid) { if (d.grid_invert) c.grid_invert = true; if (d.grid_export) c.grid_export = d.grid_export; }
      if (d.solar_peak && (!c.solar_peak || c.solar === d.solar)) c.solar_peak = d.solar_peak;
      const have = new Set((c.consumers || []).map((x) => (typeof x === "string" ? x : x.entity)));
      const add = (d.consumers || []).filter((x) => !have.has(x.entity));
      if (add.length) { c.consumers = [...(c.consumers || []), ...add].slice(0, Math.max(6, (c.consumers || []).length)); got.push(t("{n} Verbraucher", { n: add.length })); }
      if (d.other && !c.other && add.length) c.other = d.other;
      take("today", t("Bilanz")); take("forecast", t("Prognose"));
      this._msg(got.length ? t("Übernommen: {list}. Bitte prüfen, Namen nach Wunsch ändern.", { list: got.join(", ") })
        : empty(c.solar) && empty(c.grid) ? t("Nichts gefunden — Sensoren bitte unten auswählen.") : t("Alles schon eingetragen, nichts geändert."));
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
      this._msg(Object.keys(d).length ? t("{label}: Sensoren vorgeschlagen — bitte prüfen.", { label }) : t("{label}: bitte Sensoren wählen.", { label }));
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
          <button class="act fill" data-a="detect"><ha-icon icon="mdi:auto-fix"></ha-icon>${t("Automatisch erkennen")}</button>
          <div class="hint">${t("Übernimmt Solar, Netz, Zähler, Strompreis und Verbraucher aus dem Energie-Dashboard")}
            ${t("(Einstellungen → Dashboards → Energie). Vorhandene Einträge bleiben.")}</div>
          <div class="msg"></div>
        </div>`;
      root.querySelector('[data-a="detect"]').addEventListener("click", () => this._detect());
      if (this._lastMsg) this._msg(this._lastMsg);
      const set = (k, v) => { if (empty(v)) delete c[k]; else c[k] = v; };

      // Solar
      let [p, in_] = this._panel("src", t("Solar"), "mdi:solar-power-variant", arr(c.solar).length ? t("{n} Sensor(en)", { n: arr(c.solar).length }) : t("nicht gewählt"));
      in_.appendChild(this._form([
        { name: "solar", label: t("Solar-Leistung (W)"), helper: t("Mehrere Wechselrichter werden addiert"), selector: this._ent(true, "power") },
        { type: "grid", name: "", schema: [
          { name: "solar_name", label: t("Name"), selector: { text: {} } },
          { name: "solar_icon", label: t("Symbol"), selector: { icon: { placeholder: "mdi:solar-power-variant" } } },
        ] },
        { name: "solar_peak", label: t("Spitzenleistung der Anlage"), helper: t("steuert Glühen und Sonnenkranz"),
          selector: { number: { min: 100, max: 50000, step: 100, mode: "box", unit_of_measurement: "W" } } },
      ], { solar: arr(c.solar), solar_name: c.solar_name, solar_icon: c.solar_icon, solar_peak: c.solar_peak ?? 800 }, (v) => {
        set("solar", v.solar); set("solar_name", v.solar_name); set("solar_icon", v.solar_icon); set("solar_peak", v.solar_peak);
        this._emit();
      }));
      root.appendChild(p);

      // Netz
      [p, in_] = this._panel("grid", t("Netz"), "mdi:transmission-tower", arr(c.grid).length ? t("{n} Sensor(en)", { n: arr(c.grid).length }) : t("nicht gewählt"));
      in_.appendChild(this._form([
        { name: "grid", label: t("Netz-Leistung (W)"), helper: t("positiv = Bezug, negativ = Einspeisung; je Phase ein Sensor wird addiert"),
          selector: this._ent(true, "power") },
        { name: "grid_invert", label: t("Vorzeichen umdrehen"), helper: t("einschalten, wenn dein Zähler Einspeisung positiv meldet"), selector: { boolean: {} } },
        { name: "grid_export", label: t("Getrennte Einspeise-Leistung (optional)"), helper: t("nur falls Bezug und Einspeisung zwei Sensoren sind (beide positiv)"),
          selector: this._ent(true, "power") },
        { type: "grid", name: "", schema: [
          { name: "grid_name", label: t("Name"), selector: { text: {} } },
          { name: "grid_icon", label: t("Symbol"), selector: { icon: { placeholder: "mdi:transmission-tower" } } },
        ] },
        { name: "warn_import", label: t("Bezug in Amber ab"), selector: { number: { min: 0, max: 50000, step: 100, mode: "box", unit_of_measurement: "W" } } },
      ], { grid: arr(c.grid), grid_invert: !!c.grid_invert, grid_export: arr(c.grid_export), grid_name: c.grid_name, grid_icon: c.grid_icon,
        warn_import: c.warn_import ?? 2000 }, (v) => {
        set("grid", v.grid); set("grid_invert", v.grid_invert || undefined); set("grid_export", v.grid_export);
        set("grid_name", v.grid_name); set("grid_icon", v.grid_icon); set("warn_import", v.warn_import);
        this._emit();
      }));
      root.appendChild(p);

      // Batteriespeicher (optional)
      [p, in_] = this._panel("bat", t("Batteriespeicher (optional)"), "mdi:home-battery-outline", arr(c.battery).length ? t("eingerichtet") : t("keiner"));
      in_.insertAdjacentHTML("beforeend", '<div class="note">' + t("Z. B. Anker Solix, Zendure, EcoFlow, Hausspeicher. Erscheint unter dem Haus: "
        + "Ladestand als Ring, Ströme Solar/Netz → Akku und Akku → Haus.") + "</div>");
      in_.appendChild(this._form([
        { name: "battery", label: t("Akku-Leistung (W)"), helper: t("positiv = Entladen; mehrere werden addiert"), selector: this._ent(true, "power") },
        { name: "battery_invert", label: t("Vorzeichen umdrehen"), helper: t("einschalten, wenn dein Sensor Laden positiv meldet (z. B. Anker Solix „Ladeleistung“)"), selector: { boolean: {} } },
        { name: "battery_soc", label: t("Ladestand (%)"), selector: this._all ? { entity: { filter: { domain: "sensor" } } } : { entity: { filter: { domain: "sensor", device_class: "battery" } } } },
        { type: "grid", name: "", schema: [
          { name: "battery_name", label: t("Name"), selector: { text: {} } },
          { name: "battery_icon", label: t("Symbol"), helper: t("leer = passt sich dem Ladestand an"), selector: { icon: { placeholder: "mdi:battery-70" } } },
        ] },
        { name: "battery_charge", label: t("Getrennte Lade-Leistung (optional)"), helper: t("nur falls Laden und Entladen zwei Sensoren sind (beide positiv)"),
          selector: this._ent(true, "power") },
      ], { battery: arr(c.battery), battery_invert: !!c.battery_invert, battery_soc: c.battery_soc, battery_name: c.battery_name,
        battery_icon: c.battery_icon, battery_charge: arr(c.battery_charge) }, (v) => {
        const T = sensorTools(this._hass), neu = arr(v.battery).find((x) => !arr(c.battery).includes(x));
        set("battery", v.battery); set("battery_invert", v.battery_invert || undefined); set("battery_charge", v.battery_charge);
        set("battery_name", v.battery_name); set("battery_icon", v.battery_icon); set("battery_soc", v.battery_soc);
        if (neu) { // neu gewählt: Ladestand am selben Gerät suchen, Vorzeichen nach Namen raten
          if (!c.battery_soc) { const soc = T.socOf(neu); if (soc) c.battery_soc = soc; }
          const txt = `${neu} ${T.st[neu]?.attributes?.friendly_name || ""}`;
          if (/charg|lade/i.test(txt) && !/discharg|entlade/i.test(txt)) c.battery_invert = true;
          this._build();
        }
        this._emit();
      }));
      root.appendChild(p);

      // Verbraucher
      const cons = (c.consumers || []).map((x) => (typeof x === "string" ? { entity: x } : x));
      c.consumers = cons;
      [p, in_] = this._panel("cons", t("Verbraucher"), "mdi:power-plug", cons.length ? t("{n} Punkte", { n: cons.length }) : t("keine"));
      in_.insertAdjacentHTML("beforeend", '<div class="note">' + t("Jeder Verbraucher ist ein Punkt rechts im Bild. Leistung (W) für den Strom, "
        + "Zähler (kWh) optional für die Bilanz. Je nach Kartenhöhe passen etwa 4–7 Punkte.") + "</div>");
      cons.forEach((x, i) => {
        const box = document.createElement("div");
        box.className = "cons";
        box.innerHTML = `<div class="head"><ha-icon class="ic" icon="${esc(x.icon || "mdi:power-plug")}"></ha-icon>
          <span class="n">${i + 1} · ${esc(x.name || x.entity || t("neu"))}</span>
          <button data-m="-1" title="${t("nach oben")}" ${i ? "" : "disabled"}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button data-m="1" title="${t("nach unten")}" ${i < cons.length - 1 ? "" : "disabled"}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button data-m="x" title="${t("entfernen")}"><ha-icon icon="mdi:delete-outline"></ha-icon></button></div>`;
        box.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
          const m = b.dataset.m;
          if (m === "x") cons.splice(i, 1);
          else { const j = i + +m; [cons[i], cons[j]] = [cons[j], cons[i]]; }
          this._build(); this._emit();
        }));
        box.appendChild(this._form([
          { name: "entity", label: t("Leistung (W)"), selector: this._ent(false, "power") },
          { type: "grid", name: "", schema: [
            { name: "name", label: t("Name"), selector: { text: {} } },
            { name: "icon", label: t("Symbol"), selector: { icon: { placeholder: "mdi:power-plug" } } },
          ] },
          { name: "energy", label: t("Zähler (kWh, optional)"), selector: this._ent(false, "energy") },
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
          box.querySelector(".n").textContent = `${i + 1} · ${y.name || y.entity || t("neu")}`;
          box.querySelector("ha-icon.ic").setAttribute("icon", y.icon || "mdi:power-plug");
          if (neu) this._build();
          this._emit();
        }));
        in_.appendChild(box);
      });
      const addB = document.createElement("button");
      addB.className = "act";
      addB.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon>' + t("Verbraucher hinzufügen");
      addB.addEventListener("click", () => { c.consumers = cons; cons.push({}); this._open.add("cons"); this._build(); });
      in_.appendChild(addB);
      in_.appendChild(this._form([
        { name: "other_on", label: t("Punkt „Sonstige“ (Haus minus die Verbraucher oben)"), selector: { boolean: {} } },
        ...(c.other ? [{ type: "grid", name: "", schema: [
          { name: "other_name", label: t("Name"), selector: { text: {} } },
          { name: "other_icon", label: t("Symbol"), selector: { icon: { placeholder: "mdi:dots-horizontal-circle-outline" } } },
        ] }] : []),
      ], { other_on: !!c.other, other_name: c.other?.name, other_icon: c.other?.icon }, (v) => {
        const was = !!c.other;
        c.other = v.other_on ? { name: v.other_name || t("Sonstige"), icon: v.other_icon || "mdi:dots-horizontal-circle-outline" } : undefined;
        if (!c.other) delete c.other;
        if (was !== !!c.other) this._build();
        this._emit();
      }));
      root.appendChild(p);

      // Bilanz-Leiste
      const td = c.today;
      [p, in_] = this._panel("today", t("Bilanz-Leiste (heute / Woche / Monat)"), "mdi:counter", td ? t("an") : t("aus"));
      in_.appendChild(this._form([
        { name: "on", label: t("Bilanz unten anzeigen"), selector: { boolean: {} } },
        ...(td ? [
          { name: "solar", label: t("Solar erzeugt (kWh)"), selector: this._ent(true, "energy") },
          { name: "import", label: t("Netzbezug (kWh)"), helper: t("je Phase ein Zähler wird addiert"), selector: this._ent(true, "energy") },
          { name: "export", label: t("Einspeisung (kWh)"), selector: this._ent(true, "energy") },
          { name: "price", label: t("Strompreis"), selector: { number: { min: 0, max: 2, step: 0.0001, mode: "box", unit_of_measurement: "€/kWh" } } },
          { name: "net", label: t("Saldieren wie ein Zweirichtungszähler"), helper: t("rechnet Bezug/Einspeisung aus der Netz-Leistung aller Phasen "
            + "(richtig bei Shelly 3EM & Co.); dann werden die Zähler oben nicht gebraucht"), selector: { boolean: {} } },
        ] : []),
      ], { on: !!td, ...(td ? { solar: arr(td.solar), import: arr(td.import), export: arr(td.export), price: td.price ?? 0.35, net: !!td.net } : {}) }, (v) => {
        const was = !!c.today;
        if (!v.on) delete c.today;
        else c.today = { solar: v.solar, import: v.import, export: v.export, price: v.price, ...(v.net ? { net: true } : {}) };
        if (!was && c.today) return this._prefill("today", t("Bilanz"));
        if (was !== !!c.today) this._build();
        this._emit();
      }));
      root.appendChild(p);

      // Prognose
      const f = c.forecast;
      [p, in_] = this._panel("fc", t("Solar-Prognose"), "mdi:weather-sunny-alert", f ? t("an") : t("aus"));
      in_.appendChild(this._form([
        { name: "on", label: t("Prognose am Solar-Punkt zeigen"), helper: t("z. B. Integration Forecast.Solar"), selector: { boolean: {} } },
        ...(f ? [
          { name: "today", label: t("Prognose heute (kWh)"), selector: this._ent(false, "energy") },
          { name: "tomorrow", label: t("Prognose morgen (kWh, optional)"), selector: this._ent(false, "energy") },
        ] : []),
      ], { on: !!f, ...(f || {}) }, (v) => {
        const was = !!c.forecast;
        if (!v.on) delete c.forecast; else c.forecast = { today: v.today, tomorrow: v.tomorrow };
        if (!was && c.forecast) return this._prefill("forecast", t("Prognose"));
        if (was !== !!c.forecast) this._build();
        this._emit();
      }));
      root.appendChild(p);

      // Darstellung
      [p, in_] = this._panel("look", t("Darstellung"), "mdi:palette-outline", t("{h} px hoch", { h: c.height ?? 260 }));
      in_.appendChild(this._form([
        { name: "height", label: t("Höhe der Karte"), selector: { number: { min: 180, max: 700, step: 10, mode: "slider", unit_of_measurement: "px" } } },
        { name: "house_icon", label: t("Symbol Haus"), selector: { icon: { placeholder: "mdi:home-lightning-bolt-outline" } } },
      ], { height: c.height ?? 260, house_icon: c.house_icon }, (v) => { set("height", v.height); set("house_icon", v.house_icon); this._emit(); }));
      const sw = document.createElement("label");
      sw.className = "sw";
      sw.innerHTML = `<input type="checkbox" ${this._all ? "checked" : ""}> ${t("Alle Sensoren zur Auswahl anbieten")}
        ${t("(falls dein Sensor oben nicht auftaucht, weil ihm die Geräteklasse fehlt)")}`;
      sw.querySelector("input").addEventListener("change", (ev) => { this._all = ev.target.checked; this._build(); });
      in_.appendChild(sw);
      root.appendChild(p);
    }
  }

  customElements.define("nullglow-flow-card-editor", NullglowFlowCardEditor);

  customElements.define("nullglow-flow-card", NullglowFlowCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-flow-card", name: "Nullglow Flow", preview: true,
    description: t("Live-Energiefluss mit Partikelströmen (Nullglow) — Sensoren per Klick, „Automatisch erkennen“") });
})();

// ───── nullglow-spark-card.js ─────
(() => {
  if (customElements.get("nullglow-spark-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-spark-card: entity und card angeben": "nullglow-spark-card: specify entity and card",
    "24-h-Mini-Diagramm hinter einer Kachel": "24 h mini chart behind a tile",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const REFRESH_MS = 5 * 60 * 1000;
  const STYLE = `
    .ng-spark { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: -1;
      /* Kachel-Rundung ausdrücklich (inherit ergab 0 px -> eckiger Kasten um die Kachel) + Maske in derselben Form */
      border-radius: var(--ha-card-border-radius, 12px) !important; clip-path: inset(0 round var(--ha-card-border-radius, 12px)); }
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
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "entity", required: true, selector: { entity: { filter: { domain: "sensor" } } } },
        { type: "grid", name: "", schema: [
          { name: "hours", selector: { number: { min: 1, max: 168, mode: "box", unit_of_measurement: "h" } } },
          { name: "min_span", selector: { number: { min: 0, step: 0.1, mode: "box" } } } ] },
        { name: "color_scale", selector: { select: { mode: "dropdown", options: [
          { value: "room", label: "Raumtemperatur (kalt blau … warm rot)" }, { value: "outdoor", label: "Außentemperatur" }] } } },
        { name: "zero_based", selector: { boolean: {} } },
        { name: "card", required: true, selector: { object: {} } },
      ], { entity: "Verlauf von (Sensor mit Statistik)", hours: "Zeitraum", min_span: "Kleinste Spanne", color_scale: "Farben",
        zero_based: "Achse bei 0 beginnen", card: "Kachel darüber (YAML)" },
      { min_span: "verhindert, dass kleines Rauschen riesig wirkt (z. B. 2 bei °C)", color_scale: "leer = neutral in der Akzentfarbe",
        zero_based: "sinnvoll für Leistung (W)", card: "jede Karte, z. B. type: tile oder custom:mushroom-template-card" },
      { "Raumtemperatur (kalt blau … warm rot)": "Room temperature (cold blue … warm red)", "Außentemperatur": "Outdoor temperature",
        "Verlauf von (Sensor mit Statistik)": "History of (sensor with statistics)", "Zeitraum": "Time span",
        "Kleinste Spanne": "Minimum span", "Farben": "Colors", "Achse bei 0 beginnen": "Start axis at 0",
        "Kachel darüber (YAML)": "Tile on top (YAML)",
        "verhindert, dass kleines Rauschen riesig wirkt (z. B. 2 bei °C)": "keeps small noise from looking huge (e.g. 2 for °C)",
        "leer = neutral in der Akzentfarbe": "empty = neutral in the accent color", "sinnvoll für Leistung (W)": "useful for power (W)",
        "jede Karte, z. B. type: tile oder custom:mushroom-template-card": "any card, e.g. type: tile or custom:mushroom-template-card" });
    }
    static async getStubConfig(hass) {
      const t = this._ngFind(hass, (id, a) => id.startsWith("sensor.") && a.device_class === "temperature" && a.state_class)[0]
        || this._ngFind(hass, (id, a) => id.startsWith("sensor.") && a.state_class === "measurement")[0] || "";
      return { entity: t, hours: 24, min_span: 2, ...(hass?.states[t]?.attributes?.device_class === "temperature" ? { color_scale: "room" } : {}),
        card: { type: "tile", entity: t } };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config || !(config.entity || config.entities) || !config.card) throw new Error(t("nullglow-spark-card: entity und card angeben"));
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
      this._hass = h; ngH = h;
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
  window.customCards.push({ type: "nullglow-spark-card", name: "Nullglow Spark", description: t("24-h-Mini-Diagramm hinter einer Kachel") });
})();

// ───── nullglow-hourly-card.js ─────
(() => {
  if (customElements.get("nullglow-hourly-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-hourly-card: entity angeben": "nullglow-hourly-card: entity required", "Vorhersage lädt …": "Loading forecast …",
    "Keine Stundenvorhersage": "No hourly forecast", "jetzt": "now",
    "Nullglow Stunden": "Nullglow Hourly", "Kompakte Stundenvorhersage": "Compact hourly forecast",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));

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
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "entity", required: true, selector: { entity: { filter: { domain: "weather" } } } },
        { name: "hours", selector: { number: { min: 3, max: 12, mode: "slider" } } },
      ], { entity: "Wetter", hours: "Stunden" }, { hours: "Spalten ab der laufenden Stunde" },
      { "Wetter": "Weather", "Stunden": "Hours", "Spalten ab der laufenden Stunde": "Columns from the current hour" });
    }
    static async getStubConfig(hass) {
      return { entity: this._ngFind(hass, (id) => id.startsWith("weather."))[0] || "", hours: 8 };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.entity) throw new Error(t("nullglow-hourly-card: entity angeben"));
      this._cfg = { hours: 8, ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = `<div class="row"><div class="empty">${t("Vorhersage lädt …")}</div></div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._row = card.querySelector(".row");
      this._resubscribe();
    }

    set hass(h) {
      ngH = h;
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
      if (!list.length) { this._row.innerHTML = `<div class="empty">${t("Keine Stundenvorhersage")}</div>`; return; }
      const wet = list.some((f) => (f.precipitation || 0) >= 0.1);
      const num = (x, d = 0) => x.toLocaleString(numLoc(), { minimumFractionDigits: d, maximumFractionDigits: d });
      const html = list.map((f, i) => {
        const dt = new Date(f.datetime);
        const p = f.precipitation || 0;
        return `<div class="h ${i === 0 ? "now" : ""} ${TONE[f.condition] || ""}">
          <span class="t">${i === 0 ? t("jetzt") : String(dt.getHours()).padStart(2, "0")}</span>
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
  window.customCards.push({ type: "nullglow-hourly-card", name: t("Nullglow Stunden"), description: t("Kompakte Stundenvorhersage") });
})();

// ───── nullglow-month-card.js ─────
(() => {
  if (customElements.get("nullglow-month-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-month-card: solar und grid angeben": "nullglow-month-card: specify solar and grid",
    "Monatsbilanz lädt …": "Loading monthly balance …",
    "bis Monatsende ≈ {x} Netz": "≈ {x} grid by month end",
    "Netzkosten": "Grid cost",
    "gespart": "Saved",
    "Autarkie": "Self-sufficiency",
    "Verbrauch je Tag": "Consumption per day",
    "Solar selbst genutzt": "Solar self-used",
    "aus dem Netz": "from grid",
    "kWh je Tag": "kWh per day",
    "Nullglow Monat": "Nullglow Month",
    "Monatsbilanz je Tag mit Kosten und Autarkie": "Monthly balance per day with cost and self-sufficiency",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
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
  const num = (x, d = 0) => x.toLocaleString(numLoc(), { minimumFractionDigits: d, maximumFractionDigits: d });
  const dayKey = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

  class NullglowMonthCard extends HTMLElement {
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "solar", required: true, selector: { entity: { filter: { domain: "sensor", device_class: "energy" } } } },
        { name: "grid", required: true, selector: { entity: { multiple: true, filter: { domain: "sensor", device_class: "power" } } } },
        { name: "price", selector: { number: { min: 0, max: 2, step: 0.0001, mode: "box", unit_of_measurement: "€/kWh" } } },
      ], { solar: "Solar erzeugt (kWh-Zähler)", grid: "Netzleistung (W, je Phase)", price: "Strompreis" },
      { grid: "+ Bezug / − Einspeisung; mehrere Phasen werden saldiert wie beim Stromzähler" },
      { "Solar erzeugt (kWh-Zähler)": "Solar produced (kWh meter)", "Netzleistung (W, je Phase)": "Grid power (W, per phase)",
        "Strompreis": "Electricity price",
        "+ Bezug / − Einspeisung; mehrere Phasen werden saldiert wie beim Stromzähler":
          "+ import / − export; multiple phases are netted like the electricity meter does" });
    }
    static async getStubConfig(hass) {
      const e = await this._ngEnergy(hass);
      return { solar: [].concat(e.today?.solar || [])[0] || "", grid: [].concat(e.grid || []), price: e.today?.price || 0.35 };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.solar || !config?.grid) throw new Error(t("nullglow-month-card: solar und grid angeben"));
      this._cfg = { price: 0, ...config, grid: [].concat(config.grid) };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = `<div class="msg">${t("Monatsbilanz lädt …")}</div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._card = card;
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(card);
    }

    set hass(h) {
      this._hass = h; ngH = h;
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
      const month = now.toLocaleString(numLoc(), { month: "long" });

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
        axis += `<text x="${pad.l + (dd - 0.5) * cw}" y="${H - 3}" text-anchor="middle" font-size="9" fill="rgba(147,167,157,.9)" font-family="JetBrains Mono, monospace">${dd}${ngLang() === "de" ? "." : ""}</text>`;

      const html = `
        <div class="top"><span class="title">${month}</span>
          ${proj !== null ? `<span class="proj">${t("bis Monatsende ≈ {x} Netz", { x: `<b>${num(proj)} €</b>` })}</span>` : ""}</div>
        <div class="kpis">
          <div class="kpi"><span class="v">${num(cost, 2)}<small>€</small></span><span class="l">${t("Netzkosten")}</span></div>
          <div class="kpi"><span class="v acc">${num(saved, 2)}<small>€</small></span><span class="l">${t("gespart")}</span></div>
          <div class="kpi"><span class="v acc">${num(aut * 100)}<small>%</small></span><span class="l">${t("Autarkie")}</span></div>
        </div>
        <div class="chart"><svg viewBox="0 0 ${W} ${H}" aria-label="${t("Verbrauch je Tag")}">${axis}${bars}</svg></div>
        <div class="legend"><span><i style="background:rgba(${A},.85)"></i>${t("Solar selbst genutzt")}</span>
          <span><i style="background:rgba(var(--rgb-ng-txt, 232, 245, 238), .22)"></i>${t("aus dem Netz")}</span><span>${t("kWh je Tag")}</span></div>`;
      if (this._html !== html) { this._card.innerHTML = html; this._html = html; if (!box) requestAnimationFrame(() => this._render()); }
    }
  }

  customElements.define("nullglow-month-card", NullglowMonthCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-month-card", name: t("Nullglow Monat"), description: t("Monatsbilanz je Tag mit Kosten und Autarkie") });
})();

// ───── nullglow-bars-card.js ─────
(() => {
  if (customElements.get("nullglow-bars-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-bars-card: rows angeben": "nullglow-bars-card: specify rows",
    "Live-Balken, z. B. Last je Phase": "Live bars, e.g. load per phase",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
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
  const num = (x) => Math.round(x).toLocaleString(numLoc());

  class NullglowBarsCard extends HTMLElement {
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { type: "grid", name: "", schema: [
          { name: "max", selector: { number: { min: 100, step: 10, mode: "box", unit_of_measurement: "W" } } },
          { name: "warn", selector: { number: { min: 0, step: 10, mode: "box", unit_of_measurement: "W" } } },
          { name: "crit", selector: { number: { min: 0, step: 10, mode: "box", unit_of_measurement: "W" } } } ] },
        { name: "rows", required: true, selector: { object: { multiple: true, label_field: "name", fields: {
          entity: { label: "Sensor", required: true, selector: { entity: { filter: { domain: "sensor" } } } },
          name: { label: "Name", selector: { text: {} } },
          max: { label: "Vollausschlag (optional)", selector: { number: { min: 0, mode: "box" } } } } } } },
      ], { max: "Vollausschlag", warn: "Amber ab", crit: "Rot ab", rows: "Balken" },
      { max: "z. B. 3680 W = 16 A × 230 V", rows: "negative Werte (Einspeisung) laufen grün nach links" },
      { "Sensor": "Sensor", "Name": "Name", "Vollausschlag (optional)": "Full scale (optional)", "Vollausschlag": "Full scale",
        "Amber ab": "Amber from", "Rot ab": "Red from", "Balken": "Bars", "z. B. 3680 W = 16 A × 230 V": "e.g. 3680 W = 16 A × 230 V",
        "negative Werte (Einspeisung) laufen grün nach links": "negative values (export) run green to the left" });
    }
    static async getStubConfig(hass) {
      const g = [].concat((await this._ngEnergy(hass)).grid || []);
      const rows = (g.length ? g : this._ngFind(hass, (id, a) => id.startsWith("sensor.") && a.device_class === "power").slice(0, 3))
        .map((entity, i, all) => ({ entity, name: all.length === 3 ? `L${i + 1}` : `${i + 1}` }));
      return { max: 3680, warn: 2300, crit: 3200, rows };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.rows?.length) throw new Error(t("nullglow-bars-card: rows angeben"));
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
      this._hass = h; ngH = h;
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
  window.customCards.push({ type: "nullglow-bars-card", name: "Nullglow Bars", description: t("Live-Balken, z. B. Last je Phase") });
})();

// ───── nullglow-power-card.js ─────
(() => {
  if (customElements.get("nullglow-power-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-power-card: grid und solar angeben": "nullglow-power-card: specify grid and solar",
    "Leistungsverlauf lädt …": "Loading power history …",
    "Keine Statistik verfügbar": "No statistics available",
    "Leistung · {h} h": "Power · {h} h",
    "Hausverbrauch = Netz + Solar": "Home = grid + solar",
    "± Akku": "± battery",
    "jetzt": "now",
    "Spitze": "peak",
    "Grundlast": "base load",
    "Solar genutzt": "Solar used",
    "Netzbezug": "Grid import",
    "Einspeisung": "Export",
    "Akku entladen": "Battery discharge",
    "Akku laden": "Battery charge",
    "Verbrauch": "Consumption",
    "Leistung 24 h: Verbrauch, Solar, Netz": "Power 24 h: consumption, solar, grid",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
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
  const num = (x, d = 0) => x.toLocaleString(numLoc(), { minimumFractionDigits: d, maximumFractionDigits: d });
  const kw = (w) => (Math.abs(w) >= 1000 ? [num(w / 1000, 1), "kW"] : [num(w), "W"]);
  const hhmm = (ts) => new Date(ts).toLocaleTimeString(numLoc(), { hour: "2-digit", minute: "2-digit" });

  class NullglowPowerCard extends HTMLElement {
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      const pw = { entity: { filter: { domain: "sensor", device_class: "power" } } };
      return this._ngForm([
        { name: "grid", required: true, selector: { entity: { multiple: true, filter: pw.entity.filter } } },
        { name: "solar", required: true, selector: pw },
        { name: "grid_invert", selector: { boolean: {} } },
        { type: "expandable", name: "", title: "Batteriespeicher (optional)", flatten: true, schema: [
          { name: "battery", selector: { entity: { multiple: true, filter: pw.entity.filter } } },
          { name: "battery_invert", selector: { boolean: {} } },
          { name: "battery_charge", selector: { entity: { multiple: true, filter: pw.entity.filter } } } ] },
        { name: "hours", selector: { number: { min: 1, max: 168, mode: "box", unit_of_measurement: "h" } } },
      ], { grid: "Netzleistung (W, je Phase)", solar: "Solarleistung (W)", grid_invert: "Zähler meldet Einspeisung positiv",
        battery: "Speicher-Leistung", battery_invert: "Speicher: positiv = Laden", battery_charge: "Getrennte Lade-Leistung", hours: "Zeitraum" },
      { grid: "+ Bezug / − Einspeisung; mehrere Phasen werden saldiert", battery: "+ Entladen / − Laden (sonst umdrehen)" },
      { "Batteriespeicher (optional)": "Battery storage (optional)", "Netzleistung (W, je Phase)": "Grid power (W, per phase)",
        "Solarleistung (W)": "Solar power (W)", "Zähler meldet Einspeisung positiv": "Meter reports export as positive",
        "Speicher-Leistung": "Battery power", "Speicher: positiv = Laden": "Battery: positive = charging",
        "Getrennte Lade-Leistung": "Separate charging power", "Zeitraum": "Time span",
        "+ Bezug / − Einspeisung; mehrere Phasen werden saldiert": "+ import / − export; multiple phases are netted",
        "+ Entladen / − Laden (sonst umdrehen)": "+ discharging / − charging (otherwise invert)" });
    }
    static async getStubConfig(hass) {
      const e = await this._ngEnergy(hass);
      return { grid: [].concat(e.grid || []), solar: [].concat(e.solar || [])[0] || "", ...(e.grid_invert ? { grid_invert: true } : {}),
        ...([].concat(e.battery || []).length ? { battery: [].concat(e.battery), ...(e.battery_invert ? { battery_invert: true } : {}) } : {}), hours: 24 };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.grid || !config?.solar) throw new Error(t("nullglow-power-card: grid und solar angeben"));
      this._cfg = { hours: 24, warn: 3000, ...config, grid: [].concat(config.grid),
        battery: [].concat(config.battery || []), battery_charge: [].concat(config.battery_charge || []) };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = `<div class="msg">${t("Leistungsverlauf lädt …")}</div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._card = card;
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(card);
    }

    set hass(h) {
      this._hass = h; ngH = h;
      if (!this._at || Date.now() - this._at > REFRESH) this._fetch();
    }

    getCardSize() { return 5; }
    getGridOptions() { return { columns: 12, rows: 5, min_rows: 4 }; }

    async _fetch() {
      if (!this._hass || this._loading) return;
      this._loading = true;
      this._at = Date.now();
      const c = this._cfg, ids = [...c.grid, c.solar, ...c.battery, ...c.battery_charge];
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
        const bat = new Map(), bk = c.battery_invert ? -1 : 1;
        for (const id of c.battery) for (const p of res[id] || []) if (p.mean != null) bat.set(p.start, (bat.get(p.start) || 0) + bk * p.mean);
        for (const id of c.battery_charge) for (const p of res[id] || []) if (p.mean != null) bat.set(p.start, (bat.get(p.start) || 0) - Math.abs(p.mean));
        const gk = c.grid_invert ? -1 : 1;
        this._pts = [...grid.keys()].filter((t) => cnt.get(t) === this._cfg.grid.length).sort((a, b) => a - b)
          .map((t) => ({ t, net: gk * grid.get(t), sol: solar.get(t) ?? 0, bat: bat.get(t) ?? 0 }));
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
      const c = this._cfg, num = (id) => parseFloat(s[id]?.state) || 0;
      const bat = c.battery.reduce((a, id) => a + (c.battery_invert ? -1 : 1) * num(id), 0) - c.battery_charge.reduce((a, id) => a + Math.abs(num(id)), 0);
      return { t: Date.now(), net: (c.grid_invert ? -1 : 1) * g.reduce((a, b) => a + b, 0), sol, bat };
    }

    _render() {
      if (!this._card) return;
      const A = accRgb(this), A2 = accRgb(this, "--rgb-ng-info", "107, 227, 255");   // Akku: Info-Farbe des Designs
      if (!this._pts || this._pts.length < 3) {
        this._card.innerHTML = `<div class="msg">${this._pts === null ? t("Keine Statistik verfügbar") : t("Leistungsverlauf lädt …")}</div>`;
        return;
      }
      const pts = this._pts.slice();
      const cur = this._now();
      if (cur) pts.push(cur);
      const hasB = this._cfg.battery.length > 0;
      for (const p of pts) {   // Akku: laden zuerst aus Solar; ins Haus erst Solar, dann Akku, Rest Netz
        const dis = Math.max(0, p.bat || 0), chg = Math.max(0, -(p.bat || 0)), sToB = Math.min(chg, p.sol);
        p.house = Math.max(0, p.net + p.sol + (p.bat || 0));
        p.self = Math.min(p.sol - sToB, p.house);
        p.fromB = p.self + Math.min(dis, Math.max(0, p.house - p.self));   // Oberkante „aus dem Akku“
        p.exp = Math.max(0, -p.net); p.chg = chg;
      }

      // Kennzahlen
      const houses = pts.map((p) => p.house);
      const peak = pts.reduce((m, p) => (p.house > m.house ? p : m), pts[0]);
      const sorted = houses.slice().sort((a, b) => a - b);
      const base = sorted[Math.floor(sorted.length * 0.1)] || 0;
      const nowH = cur ? cur.house : pts[pts.length - 1].house;
      const [nv, nu] = kw(nowH), [pv, pu] = kw(peak.house), [bv, bu] = kw(base);

      this._card.innerHTML = `
        <div class="top"><span class="title">${t("Leistung · {h} h", { h: this._cfg.hours })}</span>
          <span class="sub">${t("Hausverbrauch = Netz + Solar")}${this._cfg.battery.length ? " " + t("± Akku") : ""}</span></div>
        <div class="kpis">
          <div class="kpi"><span class="v${nowH >= this._cfg.warn ? " warn" : ""}">${nv}<small>${nu}</small></span><span class="l">${t("jetzt")}</span></div>
          <div class="kpi"><span class="v">${pv}<small>${pu}</small></span><span class="l">${t("Spitze")} · ${hhmm(peak.t)}</span></div>
          <div class="kpi"><span class="v">${bv}<small>${bu}</small></span><span class="l">${t("Grundlast")}</span></div>
        </div>
        <div class="chart"></div>
        <div class="legend">
          <span><i style="background:rgba(${A},.55)"></i>${t("Solar genutzt")}</span>
          <span><i style="background:rgba(var(--rgb-ng-txt, 232, 245, 238), .16)"></i>${t("Netzbezug")}</span>
          <span><i style="background:rgba(${A},.22)"></i>${t("Einspeisung")}</span>
          ${hasB ? `<span><i style="background:rgba(${A2},.5)"></i>${t("Akku entladen")}</span><span><i style="background:rgba(${A2},.2)"></i>${t("Akku laden")}</span>` : ""}
          <span><i class="line" style="background:rgba(var(--rgb-ng-txt, 232, 245, 238), .85)"></i>${t("Verbrauch")}</span>
        </div>`;
      const box = this._card.querySelector(".chart");
      const W = box.clientWidth, H = box.clientHeight;
      if (W < 50 || H < 50) return;

      const padL = 44, padR = 6, padT = 6, padB = 16;
      const t0 = Date.now() - this._cfg.hours * 3600e3, t1 = Date.now();
      const minNet = Math.min(0, ...pts.map((p) => -(p.exp + p.chg)));
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
      const exportBot = pts.map((p, i) => [X[i], y(-p.exp)]);
      const chargeBot = pts.map((p, i) => [X[i], y(-(p.exp + p.chg))]);
      const batTop = pts.map((p, i) => [X[i], y(p.fromB)]);

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
          <path d="${area(houseTop, hasB ? batTop : selfTop)}" style="fill:rgba(var(--rgb-ng-txt, 232, 245, 238), .10)"/>
          <path d="${area(selfTop, zero)}" fill="url(#ngpS)"/>
          ${hasB ? `<path d="${area(batTop, selfTop)}" fill="rgba(${A2},.42)"/><path d="${area(exportBot, chargeBot)}" fill="rgba(${A2},.2)"/>` : ""}
          <path d="${area(zero, exportBot)}" fill="rgba(${A},.18)"/>
          <path d="${path(selfTop)}" fill="none" stroke="rgba(${A},.8)" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="${path(houseTop)}" fill="none" style="stroke:rgba(var(--rgb-ng-txt, 232, 245, 238), .85)" stroke-width="1.5" stroke-linejoin="round"/>
          <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="3.5" style="fill:rgb(var(--rgb-ng-txt, 232, 245, 238)); filter: drop-shadow(0 0 5px rgba(var(--rgb-ng-txt, 232, 245, 238), calc(.7 * var(--ng-glow-k, 1))))"/>
        </svg>`;
    }
  }

  customElements.define("nullglow-power-card", NullglowPowerCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-power-card", name: "Nullglow Power", description: t("Leistung 24 h: Verbrauch, Solar, Netz") });
})();

// ───── nullglow-care-card.js ─────
(() => {
  if (customElements.get("nullglow-care-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "noch ca. {n} h": "approx. {n} h left", "{n} Batterie schwach": "{n} battery low", "{n} Batterien schwach": "{n} batteries low",
    "{n}× Verschleiß": "{n}× wear", "alles in Ordnung": "all good", "Wartung": "Maintenance", "Alles in Ordnung": "All good",
    "Braucht Aufmerksamkeit": "Needs attention", "Batterien": "Batteries", "keine": "none", "Verschleiß": "Wear",
    "Nicht erreichbar": "Unavailable", "alle Geräte erreichbar": "all devices reachable",
    "Batterien, Verschleiß, nicht erreichbare Geräte": "Batteries, wear, unavailable devices",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
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
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "mode", selector: { select: { mode: "dropdown", options: [
          { value: "full", label: "Liste (alles)" }, { value: "summary", label: "Kompakte Kachel" }] } } },
        { name: "tap_hash", selector: { text: {} } },
        { name: "show", selector: { select: { multiple: true, options: [
          { value: "battery", label: "Batterien" }, { value: "wear", label: "Verschleiß" }, { value: "watch", label: "Nicht erreichbar" }] } } },
        { type: "expandable", name: "battery", title: "Batterien", schema: [
          { type: "grid", name: "", schema: [
            { name: "warn", selector: { number: { min: 0, max: 100, mode: "box", unit_of_measurement: "%" } } },
            { name: "crit", selector: { number: { min: 0, max: 100, mode: "box", unit_of_measurement: "%" } } } ] },
          { name: "exclude", selector: { text: { multiple: true } } } ] },
        { name: "wear", selector: { object: { multiple: true, label_field: "name", fields: {
          entity: { label: "Rest in %", required: true, selector: { entity: { filter: { domain: "sensor" } } } },
          time: { label: "Restzeit (optional)", selector: { entity: { filter: { domain: "sensor" } } } },
          name: { label: "Name", selector: { text: {} } },
          warn: { label: "Amber ab %", selector: { number: { min: 0, max: 100, mode: "box" } } },
          crit: { label: "Rot ab %", selector: { number: { min: 0, max: 100, mode: "box" } } } } } } },
        { name: "watch", selector: { object: { multiple: true, label_field: "name", fields: {
          entity: { label: "Gerät", required: true, selector: { entity: {} } },
          name: { label: "Name", selector: { text: {} } } } } } },
      ], { mode: "Darstellung", tap_hash: "Antippen öffnet (nur Kachel)", show: "Abschnitte (nur Liste)", warn: "Amber ab", crit: "Rot ab",
        exclude: "Nicht anzeigen (Teil der Entitäts-ID)", wear: "Verschleiß & Verbrauchsmaterial", watch: "Sollten erreichbar sein" },
      { tap_hash: "z. B. #wartung für ein Bubble-Pop-up", show: "leer = alle", exclude: "z. B. pixel_ für Handy-Akkus",
        watch: "erscheinen als Hinweis, wenn sie nicht erreichbar sind" },
      { "Liste (alles)": "List (everything)", "Kompakte Kachel": "Compact tile", "Batterien": "Batteries", "Verschleiß": "Wear",
        "Nicht erreichbar": "Unavailable", "Rest in %": "Remaining in %", "Restzeit (optional)": "Remaining time (optional)",
        "Name": "Name", "Amber ab %": "Amber from %", "Rot ab %": "Red from %", "Gerät": "Device",
        "Darstellung": "Display", "Antippen öffnet (nur Kachel)": "Tap opens (tile only)", "Abschnitte (nur Liste)": "Sections (list only)",
        "Amber ab": "Amber from", "Rot ab": "Red from", "Nicht anzeigen (Teil der Entitäts-ID)": "Hide (part of the entity ID)",
        "Verschleiß & Verbrauchsmaterial": "Wear & consumables", "Sollten erreichbar sein": "Should be reachable",
        "z. B. #wartung für ein Bubble-Pop-up": "e.g. #maintenance for a Bubble pop-up", "leer = alle": "empty = all",
        "z. B. pixel_ für Handy-Akkus": "e.g. pixel_ for phone batteries",
        "erscheinen als Hinweis, wenn sie nicht erreichbar sind": "shown as a notice when they are unavailable" });
    }
    static async getStubConfig() {
      return { mode: "full", battery: { warn: 30, crit: 15 } };
    }
    // ── Editor Ende ──
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
        const ts = w.time && S[w.time];
        let time = ts && !BAD.includes(ts.state) ? `${ts.state} ${ts.attributes.unit_of_measurement || ""}`.trim() : "";
        // ohne eigenen Zeit-Sensor: Restlaufzeit aus Wechselintervall und Laufzeit (z. B. Navimow-Messer)
        const at = s?.attributes || {};
        if (!time && isFinite(at.reminder_interval_hours) && isFinite(at.runtime_minutes))
          time = t("noch ca. {n} h", { n: Math.max(0, Math.round(at.reminder_interval_hours - at.runtime_minutes / 60)) });
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
      if (lowBat) parts.push(t(lowBat === 1 ? "{n} Batterie schwach" : "{n} Batterien schwach", { n: lowBat }));
      if (d.worn.length) parts.push(t("{n}× Verschleiß", { n: d.worn.length }));
      const offN = d.off.length + naBat;
      if (offN) parts.push(`${offN} offline`);
      return parts.length ? parts.join(" · ") : t("alles in Ordnung");
    }

    set hass(h) {
      ngH = h;
      const d = this._collect(h);
      const key = JSON.stringify(d) + ngLang();
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
      return t("alles in Ordnung");
    }

    _summary(d) {
      const icon = d.lvl === "ok" ? "mdi:shield-check-outline" : d.lvl === "crit" ? "mdi:battery-alert-variant" : "mdi:wrench-clock";
      const n = d.low.length + d.worn.length + d.off.length;
      return `<div class="sum lvl-${d.lvl}"><div class="ic"><ha-icon icon="${icon}"></ha-icon></div>
        <div class="t"><span class="p">${t("Wartung")}${n ? `<span class="cnt mono">${n}</span>` : ""}</span><span class="s">${esc(this._top(d))}</span></div></div>`;
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
      const title = d.lvl === "ok" ? t("Alles in Ordnung") : t("Braucht Aufmerksamkeit");
      const show = (k) => !this._cfg.show || ![].concat(this._cfg.show).length || [].concat(this._cfg.show).includes(k);   // leer = alle
      const bats = d.bats.map((x) => this._row(x, batIcon(x.v), x.na ? "offline" : `${x.v} %`, x.v ?? 0)).join("");
      const wear = d.wear.map((x) => this._row(x, x.lvl === "ok" ? "mdi:progress-wrench" : "mdi:wrench-clock",
        x.na ? "–" : `${x.v} %${x.time ? `<br><small>${esc(x.time)}</small>` : ""}`, x.v ?? 0)).join("");
      const off = d.off.map((x) => `<span class="chip" data-entity="${esc(x.entity)}"><ha-icon icon="mdi:lan-disconnect"></ha-icon>${esc(x.name)}</span>`).join("");
      return `<div class="full">
        <div class="hero"><div class="ic" style="color:${col};background:color-mix(in srgb, ${col} 12%, transparent)"><ha-icon icon="${icon}"></ha-icon></div>
          <div><div class="p">${title}</div><div class="s">${esc(this._summaryText(d))}</div></div></div>
        ${show("battery") ? `<div class="grp"><h3>${t("Batterien")}</h3><div class="rows">${bats || `<span class="none">${t("keine")}</span>`}</div></div>` : ""}
        ${wear && show("wear") ? `<div class="grp"><h3>${esc(this._cfg.wear_title || t("Verschleiß"))}</h3><div class="rows">${wear}</div></div>` : ""}
        ${show("watch") ? `<div class="grp"><h3>${t("Nicht erreichbar")}</h3>${off ? `<div class="chips">${off}</div>` : `<span class="none">${t("alle Geräte erreichbar")}</span>`}</div>` : ""}
      </div>`;
    }

    getCardSize() { return this._cfg?.mode === "summary" ? 1 : 8; }
    getGridOptions() { return this._cfg?.mode === "summary" ? { columns: 6, rows: 1 } : { columns: 12, rows: "auto" }; }
  }

  customElements.define("nullglow-care-card", NullglowCareCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-care-card", name: "Nullglow Care", description: t("Batterien, Verschleiß, nicht erreichbare Geräte") });
})();

// ───── nullglow-radar-card.js ─────
(() => {
  if (customElements.get("nullglow-radar-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "Regenradar": "Rain radar", "Näher": "Zoom in", "Weiter weg": "Zoom out", "Abspielen/Anhalten": "Play/Pause",
    "leicht": "light", "stark": "heavy", "lädt …": "loading …", "lädt {a}/{b}": "loading {a}/{b}",
    "vor {n} Min": "{n} min ago", "jetzt": "now", "+{n} Std Vorhersage": "+{n} h forecast",
    "Am Haus · nächste 2 Std": "At home · next 2 h",
    "Radar &amp; Vorhersage: Deutscher Wetterdienst · Niederschlag am Haus: Open-Meteo (ICON-D2) · Karte © OpenStreetMap-Mitwirkende":
      "Radar &amp; forecast: Deutscher Wetterdienst (DWD) · Precipitation at home: Open-Meteo (ICON-D2) · Map © OpenStreetMap contributors",
    "Radar derzeit nicht erreichbar": "Radar currently unavailable", "Vorhersage · in {n} Min": "Forecast · in {n} min",
    "Vorhersage nicht erreichbar": "Forecast unavailable",
    "leichter": "light", "mäßiger": "moderate", "starker": "heavy",
    "Trocken – kein Regen in Sicht": "Dry – no rain in sight",
    "Es regnet ({w} Regen) – hält die nächsten 2 Std an": "Raining ({w} rain) – continues for the next 2 h",
    "Es regnet – hört gegen {t} auf": "Raining – stops around {t}",
    "{w} Regen ab ca. {t}": "{w} rain from approx. {t}", " bis {t}": " until {t}",
    "Nullglow Regenradar": "Nullglow Rain Radar", "DWD-Radar mit 2-h-Vorhersage + Regen am Haus": "DWD radar with 2 h forecast + rain at home",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));

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
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { type: "grid", name: "", schema: [
          { name: "zoom", selector: { number: { min: 6, max: 10, mode: "box" } } },
          { name: "height", selector: { number: { min: 200, max: 900, step: 10, mode: "box", unit_of_measurement: "px" } } },
          { name: "past", selector: { number: { min: 10, max: 180, step: 5, mode: "box", unit_of_measurement: "min" } } },
          { name: "future", selector: { number: { min: 0, max: 120, step: 5, mode: "box", unit_of_measurement: "min" } } },
          { name: "step", selector: { number: { min: 5, max: 30, step: 5, mode: "box", unit_of_measurement: "min" } } } ] },
        { type: "expandable", name: "", title: "Anderer Ort (optional)", flatten: true, schema: [
          { type: "grid", name: "", schema: [
            { name: "latitude", selector: { number: { min: -90, max: 90, step: 0.0001, mode: "box" } } },
            { name: "longitude", selector: { number: { min: -180, max: 180, step: 0.0001, mode: "box" } } } ] } ] },
      ], { zoom: "Zoom", height: "Höhe", past: "Vergangenheit", future: "Vorhersage", step: "Minuten je Bild", latitude: "Breite", longitude: "Länge" },
      { future: "der DWD-Nowcast reicht 2 Stunden", latitude: "leer = Standort aus Home Assistant" },
      { "Anderer Ort (optional)": "Other location (optional)", "Zoom": "Zoom", "Höhe": "Height", "Vergangenheit": "Past",
        "Vorhersage": "Forecast", "Minuten je Bild": "Minutes per frame", "Breite": "Latitude", "Länge": "Longitude",
        "der DWD-Nowcast reicht 2 Stunden": "the DWD nowcast covers 2 hours",
        "leer = Standort aus Home Assistant": "empty = location from Home Assistant" });
    }
    static async getStubConfig() {
      return { zoom: 8, past: 90, future: 120, step: 10, height: 430 };
    }
    // ── Editor Ende ──
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
          <div class="badge"><b>–</b><span>${t("Regenradar")}</span></div>
          <div class="ctrl"><button data-a="in" title="${t("Näher")}">+</button><button data-a="out" title="${t("Weiter weg")}">−</button>
            <button data-a="play" title="${t("Abspielen/Anhalten")}"><ha-icon icon="mdi:pause"></ha-icon></button></div>
          <div class="legend">${t("leicht")} <i></i> ${t("stark")}</div><div class="status">${t("lädt …")}</div>
        </div>
        <div class="timeline"></div>
        <div class="tl-lbl"><span style="left:0">${t("vor {n} Min", { n: this._cfg.past })}</span><b>${t("jetzt")}</b><span style="right:0">${t("+{n} Std Vorhersage", { n: this._cfg.future / 60 })}</span></div>
        <div class="soon"><div><div class="sub">${t("Am Haus · nächste 2 Std")}</div><div class="sum">–</div></div><div class="bars"></div></div>
        <div class="attr">${t("Radar &amp; Vorhersage: Deutscher Wetterdienst · Niederschlag am Haus: Open-Meteo (ICON-D2) · Karte © OpenStreetMap-Mitwirkende")}</div>`;
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

    set hass(h) { ngH = h; this._hass = h; if (!this._center) this._initCenter(); }
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
      this._el.status.textContent = t("lädt …");
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
          this._el.status.textContent = done < frames.length ? t("lädt {a}/{b}", { a: done, b: frames.length }) : "";
          this._renderTimeline();
        }
      };
      await Promise.all([worker(), worker(), worker(), worker()]);
      if (gen === this._gen && frames.every((f) => f.miss)) this._el.status.textContent = t("Radar derzeit nicht erreichbar");
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
      this._el.badge.querySelector("span").textContent = fr.now ? t("jetzt") : fr.fc ? t("Vorhersage · in {n} Min", { n: mins }) : t("vor {n} Min", { n: -mins });
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
      } catch (e) { this._el.sum.textContent = t("Vorhersage nicht erreichbar"); }
    }

    _renderRain(slots) {
      const wet = (x) => x.mm >= 0.05;
      const i0 = slots.findIndex(wet);
      const peak = Math.max(...slots.map((x) => x.mm * 4));
      const word = t(peak < 2.5 ? "leichter" : peak < 10 ? "mäßiger" : "starker");
      let txt;
      if (i0 < 0) txt = t("Trocken – kein Regen in Sicht");
      else if (i0 === 0) {
        const e = slots.findIndex((x, k) => k > 0 && !wet(x));
        txt = e < 0 ? t("Es regnet ({w} Regen) – hält die nächsten 2 Std an", { w: word }) : t("Es regnet – hört gegen {t} auf", { t: hhmm(slots[e].t) });
      } else {
        const e = slots.findIndex((x, k) => k > i0 && !wet(x));
        txt = t("{w} Regen ab ca. {t}", { w: word[0].toUpperCase() + word.slice(1), t: hhmm(slots[i0].t) }) + (e > 0 ? t(" bis {t}", { t: hhmm(slots[e].t) }) : "");
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
  window.customCards.push({ type: "nullglow-radar-card", name: t("Nullglow Regenradar"), description: t("DWD-Radar mit 2-h-Vorhersage + Regen am Haus") });
})();

// ───── nullglow-mower-map-card.js ─────
(() => {
  if (customElements.get("nullglow-mower-map-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-mower-map-card: camera angeben": "nullglow-mower-map-card: specify camera",
    "Karte lädt …": "Loading map …",
    "Karte nicht erreichbar": "Map unavailable",
    "Garten": "Garden",
    "Rasen": "Lawn",
    "Rasen {a}": "Lawn {a}",
    "gemäht": "mowed",
    "Sperrzone": "No-go zone",
    "VisionFence aus": "VisionFence off",
    "Station": "Station",
    "Nullglow Gartenkarte": "Nullglow Garden Map",
    "Karte des Mähroboters (navimow_pro) im Nullglow-Look": "Robot mower map (navimow_pro) in the Nullglow look",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
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
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "camera", required: true, selector: { entity: { filter: { domain: "camera" } } } },
        { name: "mower", selector: { entity: { filter: { domain: "lawn_mower" } } } },
        { name: "coverage", selector: { entity: { filter: { domain: "sensor" } } } },
        { name: "height", selector: { number: { min: 200, max: 900, step: 10, mode: "box", unit_of_measurement: "px" } } },
      ], { camera: "Karte (Kamera der Mäher-Integration)", mower: "Mäher", coverage: "Fortschritt (optional)", height: "Höhe" },
      { camera: "SVG-Karte, z. B. von navimow_pro", mower: "Zustand bestimmt Takt und Puls beim Mähen" },
      { "Karte (Kamera der Mäher-Integration)": "Map (camera of the mower integration)", "Mäher": "Mower",
        "Fortschritt (optional)": "Progress (optional)", "Höhe": "Height", "SVG-Karte, z. B. von navimow_pro": "SVG map, e.g. from navimow_pro",
        "Zustand bestimmt Takt und Puls beim Mähen": "state sets refresh rate and pulse while mowing" });
    }
    static async getStubConfig(hass) {
      const m = this._ngFind(hass, (id) => id.startsWith("lawn_mower."))[0];
      const dev = hass?.entities?.[m]?.device_id;
      const same = (test) => Object.values(hass?.entities || {}).filter((e) => dev && e.device_id === dev && test(e.entity_id)).map((e) => e.entity_id)[0];
      return { camera: same((id) => id.startsWith("camera.")) || "", ...(m ? { mower: m } : {}),
        ...(same((id) => /_coverage$/.test(id)) ? { coverage: same((id) => /_coverage$/.test(id)) } : {}), height: 470 };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.camera) throw new Error(t("nullglow-mower-map-card: camera angeben"));
      this._cfg = { height: 470, ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = "card";
      card.innerHTML = `<div class="map" style="height:${this._cfg.height}px"><div class="empty">${t("Karte lädt …")}</div></div>
        <div class="chip"><b>–</b><span>${t("Garten")}</span></div>
        <div class="legend"><span><i style="background:rgba(var(--rgb-ng-acc, 124, 255, 178),.35);box-shadow:inset 0 0 0 1px var(--ng-acc, #7cffb2)"></i>${t("Rasen")}</span>
          <span><i style="background:rgba(255,107,107,.3);box-shadow:inset 0 0 0 1px var(--ng-danger, #ff6b6b)"></i>${t("Sperrzone")}</span>
          <span><i style="background:rgba(107,227,255,.25);box-shadow:inset 0 0 0 1px var(--ng-info, #6be3ff)"></i>${t("VisionFence aus")}</span>
          <span><i style="background:var(--ng-bg, #05070a);box-shadow:inset 0 0 0 1px ${DIM}"></i>${t("Station")}</span></div>`;
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
      this._hass = h; ngH = h;
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
      const zone = m?.attributes?.current_zone || h.states[this._cfg.zone]?.state || t("Garten");
      const a = cov?.attributes || {};
      const pct = cov && isFinite(parseFloat(cov.state)) ? Math.round(parseFloat(cov.state)) : null;
      const area = isFinite(a.total_area) ? `${Math.round(a.total_area)} m²` : "";
      this._chip.querySelector("b").textContent = pct != null ? `${zone} · ${pct} %` : zone;
      this._chip.querySelector("span").textContent = [area && t("Rasen {a}", { a: area }), pct != null ? t("gemäht") : ""].filter(Boolean).join(" · ") || t("Garten");
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
        if (!this._loadedOnce) this._map.innerHTML = `<div class="empty">${t("Karte nicht erreichbar")}</div>`;
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
  window.customCards.push({ type: "nullglow-mower-map-card", name: t("Nullglow Gartenkarte"), description: t("Karte des Mähroboters (navimow_pro) im Nullglow-Look") });
})();

// ───── nullglow-mower-stats-card.js ─────
(() => {
  if (customElements.get("nullglow-mower-stats-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-mower-stats-card: device angeben": "nullglow-mower-stats-card: specify device",
    "Fortschritt": "Progress",
    "Letzte Fahrt": "Last session",
    "Diese Woche": "This week",
    "Rasenfläche": "Lawn area",
    "{u} von {i} Std · Wechsel in ca. {r} Std": "{u} of {i} h · replace in approx. {r} h",
    "Verschleiß": "Wear",
    "Messer": "Blades",
    "Fahrwerk": "Chassis",
    "WLAN": "Wi-Fi",
    "Störung": "Fault",
    "Keine Fehler": "No errors",
    "Nächstes Mähen {x}": "Next mow {x}",
    "Kein Termin geplant": "Nothing scheduled",
    "Mähplan aus": "Schedule off",
    "Nullglow Mäher-Statistik": "Nullglow Mower Stats",
    "Fortschritt, Flächen, Verschleiß, Status (navimow_pro)": "Progress, areas, wear, status (navimow_pro)",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
  const BAD = ["unavailable", "unknown", ""];
  const n = (v, d = 1) => Number(v).toLocaleString(numLoc(), { minimumFractionDigits: d, maximumFractionDigits: d });
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
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([{ name: "device", required: true, selector: { text: {} } }],
        { device: "Gerät (Präfix der Entitäten)" }, { device: "z. B. mein_maeher für lawn_mower.mein_maeher, sensor.mein_maeher_battery …" },
        { "Gerät (Präfix der Entitäten)": "Device (entity prefix)",
          "z. B. mein_maeher für lawn_mower.mein_maeher, sensor.mein_maeher_battery …": "e.g. my_mower for lawn_mower.my_mower, sensor.my_mower_battery …" });
    }
    static async getStubConfig(hass) {
      const m = this._ngFind(hass, (id) => id.startsWith("lawn_mower."))[0];
      return { device: m ? m.split(".")[1] : "" };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.device) throw new Error(t("nullglow-mower-stats-card: device angeben"));
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
      this._hass = h; ngH = h;
      const E = this._e, S = (id) => h.states[id];
      const key = Object.values(E).map((id) => { const s = S(id); return s ? s.state + (s.attributes.runtime_minutes ?? "") : "-"; }).join("|") + ngLang();
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
        <div class="v"><div><b>${pr != null ? Math.round(pr) + " %" : "–"}</b><small>${esc(zone && zone !== "unknown" ? zone : t("Fortschritt"))}</small></div></div></div>`;
      const area = (lbl, id, d = 1) => { const v = num(id); return `<div class="a" data-entity="${id}"><span>${lbl}</span><b>${v != null ? n(v, d) : "–"}<small>m²</small></b></div>`; };
      const areas = `<div class="areas">${area(t("Letzte Fahrt"), E.session)}${area(t("Diese Woche"), E.week)}${area(t("Rasenfläche"), E.total)}</div>`;

      // Verschleiß
      const wearRow = (lbl, id) => {
        const s = S(id), v = num(id);
        const col = v == null ? "rgba(var(--rgb-ng-txt, 255, 255, 255), .2)" : v < 20 ? "var(--ng-danger, #ff6b6b)" : v < 40 ? "var(--ng-warn, #ffd166)" : "var(--ng-acc, #7cffb2)";
        const a = s?.attributes || {}, used = isFinite(a.runtime_minutes) ? a.runtime_minutes / 60 : null, iv = a.reminder_interval_hours;
        const hint = used != null && iv ? t("{u} von {i} Std · Wechsel in ca. {r} Std", { u: n(used, 0), i: iv, r: n(Math.max(0, iv - used), 0) }) : "";
        return `<div class="w" data-entity="${id}"><span>${lbl}</span><div class="track"><div class="fill" style="width:${v ?? 0}%;background:${col};box-shadow:0 0 10px ${col}"></div></div>
          <b>${v != null ? Math.round(v) + " %" : "–"}</b>${hint ? `<em>${hint}</em>` : ""}</div>`;
      };
      const wear = `<div class="sec">${t("Verschleiß")}</div><div class="wear">${wearRow(t("Messer"), E.blades)}${wearRow(t("Fahrwerk"), E.chassis)}</div>`;

      // Chips
      const on = S(E.online)?.state === "on", prob = S(E.problem)?.state === "on";
      const err = S(E.error)?.state;
      const wifi = num(E.wifi), next = S(E.next), sched = S(E.schedule);
      const nextTxt = next && !BAD.includes(next.state) ? new Date(next.state).toLocaleString(numLoc(), { weekday: "short", hour: "2-digit", minute: "2-digit" }) : null;
      const chips = `<div class="chips">
        <span class="chip ${on ? "ok" : "bad"}" data-entity="${E.online}"><i></i>${on ? "Online" : "Offline"}</span>
        <span class="chip" data-entity="${E.wifi}"><ha-icon icon="mdi:wifi"></ha-icon>${t("WLAN")} ${wifi != null ? wifi : "–"}</span>
        <span class="chip ${prob ? "bad" : "ok"}" data-entity="${E.error}"><i></i>${prob ? esc(err && err !== "No errors" ? err : t("Störung")) : t("Keine Fehler")}</span>
        <span class="chip" data-entity="${nextTxt ? E.next : E.schedule}"><ha-icon icon="mdi:calendar-clock"></ha-icon>${nextTxt ? t("Nächstes Mähen {x}", { x: esc(nextTxt) }) : sched?.state === "on" ? t("Kein Termin geplant") : t("Mähplan aus")}</span>
      </div>`;
      this._card.innerHTML = `<div class="top">${ring}${areas}</div>${wear}${chips}`;
    }

    getCardSize() { return 6; }
    getGridOptions() { return { columns: "full", rows: "auto" }; }
  }

  customElements.define("nullglow-mower-stats-card", NullglowMowerStatsCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-mower-stats-card", name: t("Nullglow Mäher-Statistik"), description: t("Fortschritt, Flächen, Verschleiß, Status (navimow_pro)") });
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
      if (document.documentElement.dataset.ngEco === '1') state = 'default';   // Stromsparen (Vorlage): ruhige Grundfarben statt Wetter
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
  window.addEventListener('nullglow-eco', () => { lastKey = ''; tick(); });      // Stromsparen an/aus (nullglow-strategy.js)
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
    // Monitor-Stecker zählt nur am Wandmonitor selbst (Benutzer „kiosk“ oder Adresse mit ?kiosk) — PC/Handy zeigen das
    // Nordlicht auch, wenn der Flur-Monitor gerade aus ist
    const wall = /kiosk/i.test(h.user?.name || "") || /(^|[?&])kiosk(=|&|$)/.test(location.search);
    const mon = cfg.monitor && wall ? h.states[cfg.monitor] : null;
    // Stromsparen (Uhr-Pop-up der Vorlage, data-ng-eco an <html>): kein Nordlicht
    const eco = document.documentElement.dataset.ngEco === "1";
    active = !!forced || (!eco && (!mon || mon.state !== "off"));   // Test (erzwungene Werte) zeichnet immer
    if (canvas.isConnected && !active && canvas.style.opacity !== "0") canvas.style.opacity = "0";
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
  window.addEventListener("nullglow-eco", tick);   // Stromsparen an/aus (nullglow-strategy.js)
  setTimeout(tick, 1200);
  setInterval(tick, 2000);
})();

// ───── nullglow-covers-card.js ─────
(() => {
  if (customElements.get("nullglow-covers-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-covers-card: entities angeben": "nullglow-covers-card: entities required", "Rollläden": "Blinds",
    "Alle auf": "Open all", "Stopp": "Stop", "Alle zu": "Close all", "Auf": "Open", "Zu": "Close", "Wirklich?": "Sure?",
    "{n} zu": "{n} closed", "{n} offen": "{n} open", "{n} fährt": "{n} moving", "{n} fahren": "{n} moving",
    "{n} nicht erreichbar": "{n} unavailable", "Nullglow Rollläden": "Nullglow Blinds",
    "Viele Rollläden als eine Kachel: Zustand, Balken je Rollladen, Alle auf/zu": "Many blinds as one tile: state, one bar per blind, open/close all",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
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
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "entities", required: true, selector: { entity: { multiple: true, filter: { domain: "cover" } } } },
        { type: "grid", name: "", schema: [{ name: "title", selector: { text: {} } }, { name: "icon", selector: { icon: {} } }] },
        { name: "tap", selector: { text: {} } },
      ], { entities: "Rollläden", title: "Titel", icon: "Symbol", tap: "Antippen öffnet" },
      { entities: "Reihenfolge = Reihenfolge der Balken", tap: "z. B. #rolllaeden für ein Bubble-Pop-up (optional)" },
      { "Rollläden": "Blinds", "Titel": "Title", "Symbol": "Icon", "Antippen öffnet": "Tap opens",
        "Reihenfolge = Reihenfolge der Balken": "order = order of the bars",
        "z. B. #rolllaeden für ein Bubble-Pop-up (optional)": "e.g. #blinds for a Bubble pop-up (optional)" });
    }
    static async getStubConfig(hass) {
      return { entities: this._ngFind(hass, (id) => id.startsWith("cover.")).slice(0, 12), title: this._ngEn() ? "Blinds" : "Rollläden" };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.entities?.length) throw new Error(t("nullglow-covers-card: entities angeben"));
      this._cfg = { title: t("Rollläden"), icon: "mdi:window-shutter", ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = `card ${this._cfg.tap ? "tap" : ""}`;
      card.innerHTML = `
        <div class="ic"><ha-icon icon="${esc(this._cfg.icon)}"></ha-icon></div>
        <div class="mid"><b>${esc(this._cfg.title)}</b><span class="sum">–</span></div>
        <div class="bars">${this._cfg.entities.map(() => "<i></i>").join("")}</div>
        <div class="btns">
          <button data-s="open_cover" title="${t("Alle auf")}"><ha-icon icon="mdi:arrow-up"></ha-icon><span class="lbl">${t("Auf")}</span></button>
          <button data-s="stop_cover" title="${t("Stopp")}"><ha-icon icon="mdi:stop"></ha-icon></button>
          <button data-s="close_cover" title="${t("Alle zu")}"><ha-icon icon="mdi:arrow-down"></ha-icon><span class="lbl">${t("Zu")}</span></button>
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
      ngH = h;
      this._hass = h;
      const vals = this._cfg.entities.map((id) => {
        const s = h.states[id];
        if (!s || ["unavailable", "unknown"].includes(s.state)) return null;
        const p = s.attributes.current_position;
        return { p: typeof p === "number" ? p : s.state === "closed" ? 0 : 100, mv: ["opening", "closing"].includes(s.state) };
      });
      const key = JSON.stringify(vals) + ngLang();
      if (key === this._key) return;
      this._key = key;
      const ok = vals.filter(Boolean), open = ok.filter((v) => v.p > 0).length, mv = ok.filter((v) => v.mv).length;
      const parts = [t("{n} zu", { n: ok.length - open }), t("{n} offen", { n: open })];
      if (mv) parts.push(t(mv === 1 ? "{n} fährt" : "{n} fahren", { n: mv }));
      if (ok.length < vals.length) parts.push(t("{n} nicht erreichbar", { n: vals.length - ok.length }));
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
        lbl.textContent = t("Wirklich?");
        clearTimeout(this._armT);
        this._armT = setTimeout(() => { b.classList.remove("arm"); lbl.textContent = old; }, 4000);
        return;
      }
      clearTimeout(this._armT);
      b.classList.remove("arm");
      const lbl = b.querySelector(".lbl"); if (lbl) lbl.textContent = t(svc === "open_cover" ? "Auf" : "Zu");
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
  window.customCards.push({ type: "nullglow-covers-card", name: t("Nullglow Rollläden"), description: t("Viele Rollläden als eine Kachel: Zustand, Balken je Rollladen, Alle auf/zu") });
})();

// ───── nullglow-lights-card.js ─────
(() => {
  if (customElements.get("nullglow-lights-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-lights-card: rooms oder entities angeben": "nullglow-lights-card: rooms or entities required", "Licht": "Lights",
    "Aus": "Off", "Alle aus": "All off", "Wirklich?": "Sure?", "alles aus": "all off", "{n} an": "{n} on",
    "{n} Raum": "{n} room", "{n} Räume": "{n} rooms", "{n} nicht erreichbar": "{n} unavailable", "Nullglow Licht": "Nullglow Lights",
    "Alle Lichter als eine Kachel: Balken je Raum in Lichtfarbe, Alle aus": "All lights as one tile: one bar per room in the light colour, all off",
    "Lampen": "Lights", "Titel": "Title", "Symbol": "Icon", "Antippen öffnet": "Tap opens",
    "je Lampe ein Balken (Räume mit mehreren Lampen: rooms in YAML)": "one bar per light (rooms with several lights: rooms in YAML)",
    "z. B. #lichter für ein Bubble-Pop-up (optional)": "e.g. #lights for a Bubble pop-up (optional)",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const WARM = [255, 196, 130];   // Lampen ohne Farbangabe: warmweiß (wie die Licht-Kacheln)
  const STYLE = `
    :host { display: block; height: 100%; container: nglit / inline-size; }
    .card { position: relative; height: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: var(--ha-card-border-radius, 20px);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      display: grid; grid-template-columns: auto minmax(0, 1fr) auto; grid-template-areas: "ic t btns" "bars bars bars";
      align-items: center; align-content: center; column-gap: 12px; row-gap: 10px; transition: box-shadow .6s ease; }
    .card.on { box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09)),
      inset 0 0 0 1px rgba(var(--lc), .35), 0 0 30px -12px rgba(var(--lc), calc(.7 * var(--ng-glow-k, 1))); }
    .ic { grid-area: ic; } .mid { grid-area: t; } .btns { grid-area: btns; } .bars { grid-area: bars; }
    .card.tap { cursor: pointer; -webkit-tap-highlight-color: transparent; }
    .ic { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; flex: none;
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06); color: var(--ng-txt-dim, #93a79d); --mdc-icon-size: 22px; }
    .on .ic { background: rgba(var(--lc), .18); color: rgb(var(--lc)); }
    .mid { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
    .mid b { font-size: 15px; font-weight: 600; color: var(--ng-txt, #e8f5ee); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .mid span { font-size: 12px; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .bars { display: flex; align-items: flex-end; gap: 5px; height: 26px; min-width: 0; overflow: hidden; }
    .bars i { flex: 1 1 0; max-width: 56px; min-width: 3px; height: 100%; border-radius: 3px; position: relative; overflow: hidden;
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); }
    .bars i::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: var(--p, 0%); border-radius: 3px;
      background: rgb(var(--c, 255, 196, 130)); opacity: .9; box-shadow: 0 0 8px rgba(var(--c, 255, 196, 130), .6);
      transition: height .6s cubic-bezier(.22,1,.36,1), background .6s; }
    .bars i.na::after { background: var(--ng-txt-mute, #5f6f68); height: 100%; opacity: .25; box-shadow: none; }
    .btns { display: flex; gap: 6px; }
    .btns button { border: 0; font: inherit; font-size: 13px; font-weight: 500; min-height: 40px; padding: 0 12px; border-radius: 999px; cursor: pointer;
      display: inline-flex; align-items: center; gap: 6px; color: var(--ng-txt, #e8f5ee); background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06);
      box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255,255,255,.1)); -webkit-tap-highlight-color: transparent; white-space: nowrap;
      transition: background .2s cubic-bezier(.22,1,.36,1), color .2s; }
    .btns button[disabled] { opacity: .35; cursor: default; }
    .btns button ha-icon { --mdc-icon-size: 18px; }
    .btns button.arm { background: var(--ng-warn, #ffd166); color: #1a1405; box-shadow: none; }
    .btns button:active { transform: scale(.96); }
    @container nglit (max-width: 300px) { .btns .lbl { display: none; } .btns button { padding: 0 11px; } }
  `;

  class NullglowLightsCard extends HTMLElement {
    // ── Editor ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static getConfigForm() {
      const en = this._ngEn(), tr = (x) => (en ? EN[x] ?? x : x);
      const labels = { entities: "Lampen", title: "Titel", icon: "Symbol", tap: "Antippen öffnet" };
      const helpers = { entities: "je Lampe ein Balken (Räume mit mehreren Lampen: rooms in YAML)", tap: "z. B. #lichter für ein Bubble-Pop-up (optional)" };
      return {
        schema: [
          { name: "entities", selector: { entity: { multiple: true, filter: { domain: "light" } } } },
          { type: "grid", name: "", schema: [{ name: "title", selector: { text: {} } }, { name: "icon", selector: { icon: {} } }] },
          { name: "tap", selector: { text: {} } },
        ],
        computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => (helpers[s.name] ? tr(helpers[s.name]) : undefined),
      };
    }
    static async getStubConfig(hass) {
      return { entities: Object.keys(hass?.states || {}).filter((id) => id.startsWith("light.") && !id.includes("_segment_")).slice(0, 12),
        title: this._ngEn() ? "Lights" : "Licht" };
    }
    // ── Editor Ende ──
    setConfig(config) {
      const rooms = config?.rooms?.length ? config.rooms.map((r) => ({ name: r.name, lights: [].concat(r.lights || r.entities || []) }))
        : (config?.entities || []).map((e) => ({ name: null, lights: [e] }));
      if (!rooms.length || !rooms.some((r) => r.lights.length)) throw new Error(t("nullglow-lights-card: rooms oder entities angeben"));
      this._cfg = { title: t("Licht"), icon: "mdi:lightbulb-group", ...config };
      this._rooms = rooms.filter((r) => r.lights.length);
      this._all = [...new Set(this._rooms.flatMap((r) => r.lights))];
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = `card ${this._cfg.tap ? "tap" : ""}`;
      card.innerHTML = `
        <div class="ic"><ha-icon icon="${esc(this._cfg.icon)}"></ha-icon></div>
        <div class="mid"><b>${esc(this._cfg.title)}</b><span class="sum">–</span></div>
        <div class="bars">${this._rooms.map(() => "<i></i>").join("")}</div>
        <div class="btns"><button class="off" title="${t("Alle aus")}"><ha-icon icon="mdi:lightbulb-group-off"></ha-icon><span class="lbl">${t("Aus")}</span></button></div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._card = card;
      this._bars = [...card.querySelectorAll(".bars i")];
      card.addEventListener("click", () => this._open());
      card.querySelector(".off").addEventListener("click", (ev) => { ev.stopPropagation(); this._press(ev.currentTarget); });
      this._key = null;
    }

    set hass(h) {
      ngH = h;
      this._hass = h;
      if (!this._rooms) return;
      // je Raum: an/aus, Helligkeit (Mittel der eingeschalteten), Farbe (Mittel), erreichbar
      const vals = this._rooms.map((r) => {
        const st = r.lights.map((id) => h.states[id]).filter(Boolean);
        const ok = st.filter((s) => !["unavailable", "unknown"].includes(s.state));
        if (!ok.length) return null;
        const on = ok.filter((s) => s.state === "on");
        const col = on.map((s) => s.attributes.rgb_color || WARM);
        const rgb = col.length ? [0, 1, 2].map((k) => Math.round(col.reduce((a, c) => a + c[k], 0) / col.length)) : null;
        const br = on.map((s) => (typeof s.attributes.brightness === "number" ? s.attributes.brightness / 255 : 1));
        return { on: on.length, p: br.length ? Math.round((br.reduce((a, b) => a + b, 0) / br.length) * 100) : 0, rgb,
          name: r.name || h.states[r.lights[0]]?.attributes?.friendly_name || r.lights[0] };
      });
      const key = JSON.stringify(vals) + ngLang();
      if (key === this._key) return;
      this._key = key;
      const ok = vals.filter(Boolean), lamps = ok.reduce((a, v) => a + v.on, 0), rooms = ok.filter((v) => v.on).length;
      const multi = this._rooms.some((r) => r.lights.length > 1);
      const parts = lamps ? [t("{n} an", { n: lamps })] : [t("alles aus")];
      if (lamps && multi) parts.push(t(rooms === 1 ? "{n} Raum" : "{n} Räume", { n: rooms }));
      if (ok.length < vals.length) parts.push(t("{n} nicht erreichbar", { n: vals.length - ok.length }));
      this._card.querySelector(".sum").textContent = parts.join(" · ");
      // Mischfarbe aller eingeschalteten Räume fürs Symbol/Glühen
      const on = ok.filter((v) => v.rgb);
      const mix = on.length ? [0, 1, 2].map((k) => Math.round(on.reduce((a, v) => a + v.rgb[k], 0) / on.length)) : null;
      this._card.classList.toggle("on", !!mix);
      if (mix) this._card.style.setProperty("--lc", mix.join(", ")); else this._card.style.removeProperty("--lc");
      this._card.querySelector(".off").disabled = !lamps;
      vals.forEach((v, i) => {
        const el = this._bars[i];
        el.className = v ? "" : "na";
        el.style.setProperty("--p", v && v.on ? `${Math.max(v.p, 12)}%` : "0%");
        if (v?.rgb) el.style.setProperty("--c", v.rgb.join(", ")); else el.style.removeProperty("--c");
        el.title = v ? `${v.name}${v.on ? ` · ${v.p} %` : ""}` : this._rooms[i].name || this._rooms[i].lights[0];
      });
    }

    _press(b) {
      if (!b.classList.contains("arm")) {   // erst scharf schalten, dann ausführen
        b.classList.add("arm");
        const lbl = b.querySelector(".lbl");
        lbl.textContent = t("Wirklich?");
        clearTimeout(this._armT);
        this._armT = setTimeout(() => { b.classList.remove("arm"); lbl.textContent = t("Aus"); }, 4000);
        return;
      }
      clearTimeout(this._armT);
      b.classList.remove("arm");
      b.querySelector(".lbl").textContent = t("Aus");
      const ids = this._all.filter((id) => this._hass.states[id]?.state === "on");
      if (ids.length) this._hass.callService("light", "turn_off", { entity_id: ids });
    }

    _open() {
      const tp = this._cfg.tap;
      if (!tp) return;
      if (tp.startsWith("#")) {   // Bubble-Pop-up
        history.pushState(null, "", location.pathname + location.search + tp);
        window.dispatchEvent(new Event("location-changed"));
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else {
        history.pushState(null, "", tp);
        window.dispatchEvent(new Event("location-changed"));
      }
    }

    getCardSize() { return 2; }
    getGridOptions() { return { columns: 12, rows: 2, min_rows: 2 }; }
  }

  customElements.define("nullglow-lights-card", NullglowLightsCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-lights-card", name: t("Nullglow Licht"), description: t("Alle Lichter als eine Kachel: Balken je Raum in Lichtfarbe, Alle aus") });
})();

// ───── nullglow-contacts-card.js ─────
(() => {
  if (customElements.get("nullglow-contacts-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "nullglow-contacts-card: entities angeben": "nullglow-contacts-card: entities required", "Fenster & Türen": "Windows & doors",
    "{n} offen": "{n} open", "Alles zu": "All closed", "{n} nicht erreichbar": "{n} unavailable",
    "Nullglow Fenster & Türen": "Nullglow Windows & Doors",
    "Viele Kontakte als eine Kachel: offen/zu, ein Punkt je Kontakt": "Many contacts as one tile: open/closed, one dot per contact",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const STYLE = `
    :host { display: block; height: 100%; }
    .card { position: relative; height: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: var(--ha-card-border-radius, 20px);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      display: grid; grid-template-columns: auto minmax(0, 1fr); grid-template-areas: "ic t" "dots dots";
      align-items: center; align-content: center; column-gap: 12px; row-gap: 10px; }
    .card.tap { cursor: pointer; -webkit-tap-highlight-color: transparent; }
    .card.open { box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-warn, 255, 209, 102), .45),
      0 0 26px -10px rgba(var(--rgb-ng-warn, 255, 209, 102), calc(.5 * var(--ng-glow-k, 1))); }
    .ic { grid-area: ic; width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center;
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06); color: var(--ng-txt-dim, #93a79d); --mdc-icon-size: 22px; }
    .open .ic { background: rgba(var(--rgb-ng-warn, 255, 209, 102), .16); color: var(--ng-warn, #ffd166); }
    .mid { grid-area: t; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
    .mid b { font-size: 15px; font-weight: 600; color: var(--ng-txt, #e8f5ee); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .mid span { font-size: 12px; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .open .mid span { color: var(--ng-warn, #ffd166); }
    .dots { grid-area: dots; display: flex; flex-wrap: wrap; gap: 5px; min-width: 0; max-height: 26px; overflow: hidden; }
    .dots i { width: 10px; height: 10px; border-radius: 3px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .12); }
    .dots i.on { background: var(--ng-warn, #ffd166); box-shadow: 0 0 8px rgba(var(--rgb-ng-warn, 255, 209, 102), calc(.7 * var(--ng-glow-k, 1))); }
    .dots i.na { background: rgba(var(--rgb-ng-txt, 255, 255, 255), .04); box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .12); }
  `;

  class NullglowContactsCard extends HTMLElement {
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "entities", required: true, selector: { entity: { multiple: true, filter: { domain: "binary_sensor", device_class: ["window", "door", "opening", "garage_door"] } } } },
        { name: "title", selector: { text: {} } },
        { name: "tap", selector: { text: {} } },
        { name: "names", selector: { object: {} } },
      ], { entities: "Fenster & Türen", title: "Titel", tap: "Antippen öffnet", names: "Kurznamen (YAML, optional)" },
      { tap: "z. B. #fenster für ein Bubble-Pop-up (optional)", names: "binary_sensor.fenster_kueche: Küche — für „2 offen · Küche, Bad“" },
      { "Fenster & Türen": "Windows & doors", "Titel": "Title", "Antippen öffnet": "Tap opens",
        "Kurznamen (YAML, optional)": "Short names (YAML, optional)",
        "z. B. #fenster für ein Bubble-Pop-up (optional)": "e.g. #windows for a Bubble pop-up (optional)",
        "binary_sensor.fenster_kueche: Küche — für „2 offen · Küche, Bad“": "binary_sensor.kitchen_window: Kitchen — for “2 open · Kitchen, Bath”" });
    }
    static async getStubConfig(hass) {
      return { entities: this._ngFind(hass, (id, a) => id.startsWith("binary_sensor.") && ["window", "door", "opening"].includes(a.device_class)).slice(0, 16),
        title: this._ngEn() ? "Windows & doors" : "Fenster & Türen" };
    }
    // ── Editor Ende ──
    setConfig(config) {
      if (!config?.entities?.length) throw new Error(t("nullglow-contacts-card: entities angeben"));
      this._cfg = { title: t("Fenster & Türen"), names: {}, ...config };
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = `card ${this._cfg.tap ? "tap" : ""}`;
      card.innerHTML = `<div class="ic"><ha-icon icon="mdi:window-closed-variant"></ha-icon></div>
        <div class="mid"><b>${esc(this._cfg.title)}</b><span class="sum">–</span></div>
        <div class="dots">${this._cfg.entities.map(() => "<i></i>").join("")}</div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      this._card = card;
      this._dots = [...card.querySelectorAll(".dots i")];
      card.addEventListener("click", () => this._open());
      this._key = null;
    }

    set hass(h) {
      ngH = h;
      this._hass = h;
      const vals = this._cfg.entities.map((id) => {
        const s = h.states[id];
        return !s || ["unavailable", "unknown"].includes(s.state) ? null : s.state === "on";
      });
      const key = vals.join(",") + ngLang();
      if (key === this._key) return;
      this._key = key;
      const open = this._cfg.entities.filter((_, i) => vals[i] === true);
      const na = vals.filter((v) => v === null).length;
      const nm = (id) => this._cfg.names[id] || h.states[id]?.attributes?.friendly_name || id;
      let sum = open.length ? `${t("{n} offen", { n: open.length })} · ${open.slice(0, 3).map(nm).join(", ")}${open.length > 3 ? " …" : ""}` : t("Alles zu");
      if (na) sum += ` · ${t("{n} nicht erreichbar", { n: na })}`;
      this._card.querySelector(".sum").textContent = sum;
      this._card.classList.toggle("open", open.length > 0);
      this._card.querySelector(".ic ha-icon").setAttribute("icon", open.length ? "mdi:window-open-variant" : "mdi:window-closed-variant");
      vals.forEach((v, i) => {
        this._dots[i].className = v === null ? "na" : v ? "on" : "";
        this._dots[i].title = nm(this._cfg.entities[i]);
      });
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

  customElements.define("nullglow-contacts-card", NullglowContactsCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-contacts-card", name: t("Nullglow Fenster & Türen"), description: t("Viele Kontakte als eine Kachel: offen/zu, ein Punkt je Kontakt") });
})();

// ───── nullglow-media-card.js ─────
(() => {
  if (customElements.get("nullglow-media-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "Spielt": "Playing", "Pausiert": "Paused", "Lädt …": "Buffering …", "Bereit": "Idle", "An": "On", "Aus": "Off",
    "Standby": "Standby", "Nicht erreichbar": "Unavailable", "Unbekannt": "Unknown", "Kein Mediaplayer": "No media player", "Nichts läuft": "Nothing playing",
    "Zurück": "Previous", "Weiter": "Next", "Wiedergabe/Pause": "Play/pause", "Einschalten": "Turn on", "Ausschalten": "Turn off",
    "Stumm": "Mute", "Lautstärke {v} %": "Volume {v}%", "Quelle": "Source", "Details": "Details",
    "Nullglow Medien": "Nullglow Media",
    "Mediaplayer mit Cover als Hintergrund, Akzentfarbe aus dem Cover": "Media player with the cover as background, accent colour taken from the cover",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // supported_features-Bits von media_player
  const F = { PAUSE: 1, VOL_SET: 4, VOL_MUTE: 8, PREV: 16, NEXT: 32, ON: 128, OFF: 256, SOURCE: 2048, PLAY: 16384 };
  const RUN = ["playing", "buffering"];
  const STATE = { playing: "Spielt", paused: "Pausiert", buffering: "Lädt …", idle: "Bereit", on: "An", off: "Aus",
    standby: "Standby", unavailable: "Nicht erreichbar", unknown: "Unbekannt" };
  const eco = () => document.documentElement.dataset.ngEco === "1";
  const fmt = (s) => { s = Math.max(0, Math.floor(s || 0)); const h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, x = String(s % 60).padStart(2, "0");
    return h ? `${h}:${String(m).padStart(2, "0")}:${x}` : `${m}:${x}`; };

  // Farben: HSL-Umrechnung für Akzent aus dem Cover
  const rgb2hsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
    if (!d) return [0, 0, l];
    const h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [(h * 60 + 360) % 360, d / (1 - Math.abs(2 * l - 1)), l];
  };
  // App ohne Bild -> Logo + Markenfarbe statt Note (Treffer über app_name/app_id, Teilstring, klein geschrieben)
  const APPS = [
    [/youtube/, "mdi:youtube", [255, 0, 51]], [/netflix/, "mdi:netflix", [229, 9, 20]], [/spotify/, "mdi:spotify", [30, 215, 96]],
    [/twitch/, "mdi:twitch", [145, 70, 255]], [/plex/, "mdi:plex", [229, 160, 13]], [/kodi/, "mdi:kodi", [23, 178, 231]],
    [/disney/, "mdi:shimmer", [17, 60, 207]], [/prime video|amazon video|primevideo/, "mdi:play-box", [0, 168, 225]],
    [/apple tv|com\.apple\.tv/, "mdi:apple", [200, 200, 210]], [/apple music|com\.apple\.music/, "mdi:apple", [250, 45, 72]],
    [/soundcloud/, "mdi:soundcloud", [255, 85, 0]], [/deezer/, "mdi:music-circle", [162, 56, 255]], [/tidal/, "mdi:music-circle", [0, 255, 255]],
    [/audible/, "mdi:book-music", [247, 153, 28]], [/tunein|radio/, "mdi:radio", [28, 203, 176]], [/\bard\b|\bzdf\b|mediathek/, "mdi:television-classic", [0, 120, 200]],
  ];
  const appLook = (a) => {
    const n = String(a.app_name || a.app_id || "").toLowerCase();
    if (!n) return null;
    const hit = APPS.find(([re]) => re.test(n));
    return hit ? { icon: hit[1], rgb: hit[2] } : null;
  };
  const hsl2rgb = (h, s, l) => {
    const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2;
    const v = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
    return v.map((q) => Math.round((q + m) * 255));
  };
  // Kräftigste, halbwegs helle Farbe: 24×24 verkleinern, Pixel nach Farbton (20°-Fächer) gewichtet sammeln (Sättigung²,
  // mittlere Helligkeit bevorzugt), bester Fächer gemittelt. Zu wenig Buntes (Graustufen-Cover) → null = Theme-Akzent.
  const COL = new Map();   // Bild-URL → Promise<[r, g, b] | null>
  const vivid = (url) => {
    if (COL.has(url)) return COL.get(url);
    const p = new Promise((res) => {
      const img = new Image();
      try { if (new URL(url, location.href).origin !== location.origin) img.crossOrigin = "anonymous"; } catch (e) { /* relativ */ }
      img.onload = () => {
        try {
          const N = 24, c = document.createElement("canvas");
          c.width = c.height = N;
          const x = c.getContext("2d", { willReadFrequently: true });
          x.drawImage(img, 0, 0, N, N);
          const d = x.getImageData(0, 0, N, N).data, bins = [];
          for (let i = 0; i < d.length; i += 4) {
            if (d[i + 3] < 128) continue;
            const [h, s, l] = rgb2hsl(d[i], d[i + 1], d[i + 2]);
            if (l < 0.12 || l > 0.9 || s < 0.22) continue;
            const w = s * s * (1 - Math.abs(l - 0.52) * 1.4);
            if (w <= 0) continue;
            const b = (bins[Math.floor(h / 20)] ||= [0, 0, 0, 0]);
            b[0] += w; b[1] += d[i] * w; b[2] += d[i + 1] * w; b[3] += d[i + 2] * w;
          }
          const best = bins.reduce((a, b) => (b && (!a || b[0] > a[0]) ? b : a), null);
          res(best && best[0] > N * N * 0.012 ? [best[1], best[2], best[3]].map((v) => Math.round(v / best[0])) : null);
        } catch (e) { res(null); }   // CORS / verunreinigtes Canvas → Theme-Akzent
      };
      img.onerror = () => res(null);
      img.src = url;
    });
    COL.set(url, p);
    if (COL.size > 60) COL.delete(COL.keys().next().value);
    return p;
  };

  const STYLE = `
    :host { display: block; height: 100%; container: ngmc / inline-size; }
    :host([hidden]) { display: none !important; }
    .card { position: relative; height: 100%; box-sizing: border-box; overflow: hidden; isolation: isolate;
      border-radius: var(--ha-card-border-radius, 20px); color: var(--ng-txt, #e8f5ee);
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      --mc-rgb: var(--rgb-ng-acc, 124, 255, 178); --mc-ink: var(--ng-acc-ink, #04140d); --art: 100px;
      transition: box-shadow .9s ease; }
    .card.run { box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09)),
      inset 0 0 0 1px rgba(var(--mc-rgb), .28), 0 0 34px -14px rgba(var(--mc-rgb), calc(.7 * var(--ng-glow-k, 1))); }
    /* Hintergrund: Cover weichgezeichnet (zwei Ebenen zum Überblenden) + Schleier in Hintergrundfarbe des Designs */
    .bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; border-radius: inherit; }
    .bg i { position: absolute; inset: -25%; background: center / cover no-repeat; opacity: 0;
      filter: blur(var(--mc-blur, 24px)) saturate(1.5); transition: opacity 1s ease; }
    .bg i.on { opacity: .62; }
    .bg::after { content: ""; position: absolute; inset: 0;
      background: linear-gradient(100deg, rgba(var(--rgb-ng-bg, 5, 7, 10), .5), rgba(var(--rgb-ng-bg, 5, 7, 10), .26) 70%, rgba(var(--rgb-ng-bg, 5, 7, 10), .38)); }
    .large .bg i { --mc-blur: 34px; }
    .body { position: relative; z-index: 1; height: 100%; box-sizing: border-box; display: grid; min-width: 0; }
    .art { grid-area: art; width: var(--art); height: var(--art); align-self: center; border-radius: 14px; overflow: hidden; position: relative;
      cursor: pointer; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .07); display: grid; place-items: center;
      box-shadow: 0 8px 22px -10px rgba(var(--rgb-ng-bg, 5, 7, 10), .8), inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .1);
      color: var(--ng-txt-dim, #93a79d); --mdc-icon-size: 34px; -webkit-tap-highlight-color: transparent; }
    .run .art { box-shadow: 0 8px 26px -8px rgba(var(--mc-rgb), calc(.55 * var(--ng-glow-k, 1))), inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .12); }
    .art img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .art img[hidden] { display: none; }
    .art.app { color: rgb(var(--mc-rgb)); --mdc-icon-size: 52px;
      background: radial-gradient(circle at 50% 42%, rgba(var(--mc-rgb), .24), rgba(var(--mc-rgb), .06) 72%);
      box-shadow: 0 8px 26px -8px rgba(var(--mc-rgb), calc(.55 * var(--ng-glow-k, 1))), inset 0 0 0 1px rgba(var(--mc-rgb), .3); }
    .large .art.app { --mdc-icon-size: 76px; }
    .card.applook .bg { background: radial-gradient(90% 160% at 0% 50%, rgba(var(--mc-rgb), .2), transparent 65%); }
    .info { grid-area: info; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 1px;
      text-shadow: 0 1px 10px rgba(var(--rgb-ng-bg, 5, 7, 10), .55); }
    .who { display: flex; align-items: center; gap: 6px; min-width: 0; height: 20px; font-size: 11px; font-weight: 600;
      letter-spacing: .06em; text-transform: uppercase; color: var(--ng-txt-dim, #93a79d); }
    .who .nm { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .eq { flex: none; display: none; align-items: flex-end; gap: 2px; height: 10px; }
    .run .eq { display: inline-flex; }
    .eq i { width: 2px; height: 100%; border-radius: 1px; background: rgb(var(--mc-rgb)); transform-origin: bottom;
      animation: ngmq 1.1s ease-in-out infinite; transition: background-color .9s ease; }
    .eq i:nth-child(2) { animation-delay: -.45s; } .eq i:nth-child(3) { animation-delay: -.8s; }
    @keyframes ngmq { 0%, 100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
    .chips { display: flex; gap: 4px; min-width: 0; overflow-x: auto; scrollbar-width: none; text-transform: none; letter-spacing: 0; }
    .chips::-webkit-scrollbar { display: none; }
    .chip { flex: none; max-width: 120px; border: 0; font: inherit; font-size: 11px; font-weight: 600; padding: 2px 9px; border-radius: 999px;
      cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--ng-txt-dim, #93a79d);
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); -webkit-tap-highlight-color: transparent;
      transition: background-color .3s ease, color .3s ease, box-shadow .9s ease; }
    .chip.sel { color: var(--ng-txt, #e8f5ee); background: rgba(var(--mc-rgb), .2); box-shadow: inset 0 0 0 1px rgba(var(--mc-rgb), .55); }
    .txt { min-width: 0; cursor: pointer; display: flex; flex-direction: column; gap: 1px; -webkit-tap-highlight-color: transparent; }
    .t { font-size: 15px; font-weight: 650; line-height: 1.25; color: var(--ng-txt, #e8f5ee); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .s, .a { font-size: 12px; line-height: 1.3; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .card .a, .card .src, .card .pw, .card .vol, .card .t0, .card .t1, .card .sp { display: none; }
    .ctl { grid-area: ctl; display: flex; align-items: center; gap: 6px; min-width: 0; }
    .btn { flex: none; width: 36px; height: 36px; padding: 0; border: 0; border-radius: 50%; display: grid; place-items: center; cursor: pointer;
      color: var(--ng-txt, #e8f5ee); background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); --mdc-icon-size: 20px;
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .08); -webkit-tap-highlight-color: transparent;
      transition: background-color .2s ease, transform .15s ease; }
    .btn[hidden] { display: none; }
    .btn:active { transform: scale(.92); }
    .btn:disabled { opacity: .35; cursor: default; }
    .btn.main { width: 42px; height: 42px; --mdc-icon-size: 24px; color: var(--mc-ink); background: rgb(var(--mc-rgb));
      box-shadow: 0 0 18px -4px rgba(var(--mc-rgb), calc(.75 * var(--ng-glow-k, 1)));
      transition: background-color .9s ease, box-shadow .9s ease, color .9s ease, transform .15s ease; }
    .btn.on { color: rgb(var(--mc-rgb)); background: rgba(var(--mc-rgb), .16); }
    .tm { margin-left: auto; padding-left: 4px; font-size: 11px; color: var(--ng-txt-dim, #93a79d); font-variant-numeric: tabular-nums; white-space: nowrap; }
    .prog { grid-area: prog; display: flex; align-items: center; gap: 10px; min-width: 0; }
    .prog[hidden] { display: none; }
    .bar { flex: 1; min-width: 0; position: relative; height: 3px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .12); }
    .bar i { position: absolute; left: 0; top: 0; bottom: 0; width: 0; border-radius: inherit; background: rgb(var(--mc-rgb));
      box-shadow: 0 0 10px rgba(var(--mc-rgb), calc(.8 * var(--ng-glow-k, 1))); transition: background-color .9s ease, box-shadow .9s ease; }
    .empty .art, .empty .ctl, .empty .prog { visibility: hidden; }
    .empty.rest .art { visibility: visible; opacity: .55; }
    .empty.rest .info { opacity: .7; }

    /* Kompakt (Übersicht): Cover links, Text rechts, Knöpfe darunter; Fortschritt als Linie an der Unterkante */
    .compact .body { padding: 10px 12px 10px 10px; grid-template-columns: var(--art) minmax(0, 1fr); grid-template-rows: minmax(0, 1fr) auto;
      grid-template-areas: "art info" "art ctl"; column-gap: 12px; row-gap: 4px; }
    .compact .prog { position: absolute; left: 0; right: 0; bottom: 0; }
    .compact .bar { height: 3px; }
    .compact .who { height: 16px; }
    .compact .btn { width: 32px; height: 32px; --mdc-icon-size: 19px; }
    .compact .btn.main { width: 38px; height: 38px; --mdc-icon-size: 22px; }
    @container ngmc (min-width: 520px) {
      .compact .body { grid-template-columns: var(--art) minmax(0, 1fr) auto; grid-template-rows: minmax(0, 1fr); grid-template-areas: "art info ctl"; column-gap: 14px; }
      .compact .tm { order: -1; margin: 0 4px 0 0; }
      .compact .btn { width: 36px; height: 36px; } .compact .btn.main { width: 44px; height: 44px; --mdc-icon-size: 26px; }
    }
    @container ngmc (max-width: 300px) { .compact .tm { display: none; } }
    @container ngmc (min-width: 520px) and (max-width: 619px) { .compact .tm { display: none; } }

    /* Groß (Medien-Seite): größeres Cover, Titel zweizeilig, Fortschritt mit Zeiten, Lautstärke + Ein/Aus + Quelle */
    .large .body { padding: 16px 18px 14px; grid-template-columns: var(--art) minmax(0, 1fr); grid-template-rows: minmax(0, 1fr) auto auto;
      grid-template-areas: "art info" "prog prog" "ctl ctl"; column-gap: 18px; row-gap: 10px; }
    .large .art { border-radius: 16px; --mdc-icon-size: 48px; }
    .large .info { gap: 3px; }
    .large .t { font-size: 20px; line-height: 1.22; white-space: normal; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
    .large .s { font-size: 14px; color: var(--ng-txt, #e8f5ee); opacity: .86; }
    .large .a { display: block; font-size: 12.5px; }
    .large .tm { display: none; }
    .large .t0, .large .t1 { display: block; flex: none; font-size: 11px; color: var(--ng-txt-dim, #93a79d); font-variant-numeric: tabular-nums; min-width: 34px; }
    .large .t1 { text-align: right; }
    .large .bar { height: 5px; border-radius: 3px; }
    .large .btn { width: 40px; height: 40px; --mdc-icon-size: 22px; }
    .large .btn.main { width: 52px; height: 52px; --mdc-icon-size: 30px; }
    .large .pw { display: grid; }
    .large .pw[hidden] { display: none; }
    .large .vol { display: flex; align-items: center; gap: 6px; flex: 1 1 auto; min-width: 0; max-width: 240px; }
    .large .vol[hidden] { display: none; }
    .large .vol.nr { flex: none; }
    .large .src { display: block; position: relative; align-self: flex-start; max-width: 100%; margin-top: 6px; }
    .large .src[hidden] { display: none; }
    .src select { appearance: none; -webkit-appearance: none; max-width: 100%; font: inherit; font-size: 12px; font-weight: 500; cursor: pointer;
      color: var(--ng-txt, #e8f5ee); background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); border: 0; border-radius: 999px;
      padding: 6px 28px 6px 12px; box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .1); text-overflow: ellipsis; }
    .src option { color: var(--ng-txt, #e8f5ee); background: var(--ng-bg, #05070a); }
    .src ha-icon { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); --mdc-icon-size: 16px; pointer-events: none; color: var(--ng-txt-dim, #93a79d); }
    input[type=range] { -webkit-appearance: none; appearance: none; flex: 1; min-width: 50px; height: 30px; margin: 0; background: transparent; cursor: pointer; --v: 0%; }
    input[type=range]::-webkit-slider-runnable-track { height: 6px; border-radius: 3px;
      background: linear-gradient(90deg, rgb(var(--mc-rgb)) var(--v), rgba(var(--rgb-ng-txt, 255, 255, 255), .14) var(--v)); }
    input[type=range]::-moz-range-track { height: 6px; border-radius: 3px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .14); }
    input[type=range]::-moz-range-progress { height: 6px; border-radius: 3px; background: rgb(var(--mc-rgb)); }
    input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; margin-top: -6px; border-radius: 50%;
      background: rgb(var(--mc-rgb)); box-shadow: 0 0 0 3px rgba(var(--rgb-ng-bg, 5, 7, 10), .55), 0 0 12px rgba(var(--mc-rgb), calc(.6 * var(--ng-glow-k, 1))); }
    input[type=range]::-moz-range-thumb { width: 18px; height: 18px; border: 0; border-radius: 50%; background: rgb(var(--mc-rgb));
      box-shadow: 0 0 0 3px rgba(var(--rgb-ng-bg, 5, 7, 10), .55); }
    .large .ctl { gap: 8px; }
    .large .sp { display: block; flex: 1 1 0; }

    /* Stromsparen: keine Übergänge, keine Animation */
    .eco, .eco * { transition: none !important; animation: none !important; }
  `;

  class NullglowMediaCard extends HTMLElement {
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "entities", selector: { entity: { multiple: true, filter: { domain: "media_player" } } } },
        { type: "grid", name: "", schema: [
          { name: "size", selector: { select: { mode: "dropdown", options: [
            { value: "compact", label: "Kompakt (Übersicht)" }, { value: "large", label: "Groß (Medien-Seite)" }] } } },
          { name: "hide_idle", selector: { boolean: {} } }] },
      ], { entities: "Mediaplayer", size: "Größe", hide_idle: "Ausblenden, wenn nichts läuft" },
      { entities: "leer = alle Mediaplayer; es zeigt der, der gerade spielt", hide_idle: "Karte verschwindet, solange nichts spielt oder pausiert" },
      { "Mediaplayer": "Media players", "Größe": "Size", "Ausblenden, wenn nichts läuft": "Hide when nothing is playing",
        "Kompakt (Übersicht)": "Compact (overview)", "Groß (Medien-Seite)": "Large (media page)",
        "leer = alle Mediaplayer; es zeigt der, der gerade spielt": "empty = all media players; shows the one that is playing",
        "Karte verschwindet, solange nichts spielt oder pausiert": "Card disappears while nothing is playing or paused" });
    }
    static async getStubConfig(hass) {
      const first = this._ngFind(hass, (id) => id.startsWith("media_player."))[0];
      return { entities: first ? [first] : [], size: "large" };
    }
    // ── Editor Ende ──
    setConfig(config) {
      const c = { size: "compact", hide_idle: false, ...config };
      c.entities = (c.entities?.length ? c.entities : c.entity ? [c.entity] : []).map((e) => (typeof e === "string" ? e : e?.entity)).filter(Boolean);
      c.size = c.size === "large" ? "large" : "compact";
      this._cfg = c;
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      const card = document.createElement(customElements.get("ha-card") ? "ha-card" : "div");
      card.className = `card ${c.size}`;
      card.innerHTML = `
        <div class="bg"><i></i><i></i></div>
        <div class="body">
          <div class="art" title="${t("Details")}"><ha-icon icon="mdi:music-note"></ha-icon><img alt="" hidden></div>
          <div class="info">
            <div class="who"><span class="eq"><i></i><i></i><i></i></span><span class="nm"></span><div class="chips"></div></div>
            <div class="txt" title="${t("Details")}"><div class="t"></div><div class="s"></div><div class="a"></div></div>
            <div class="src" hidden><select aria-label="${t("Quelle")}"></select><ha-icon icon="mdi:chevron-down"></ha-icon></div>
          </div>
          <div class="prog" hidden><span class="t0"></span><div class="bar"><i></i></div><span class="t1"></span></div>
          <div class="ctl">
            <button class="btn" data-a="media_previous_track" title="${t("Zurück")}"><ha-icon icon="mdi:skip-previous"></ha-icon></button>
            <button class="btn main" data-a="play" title="${t("Wiedergabe/Pause")}"><ha-icon icon="mdi:play"></ha-icon></button>
            <button class="btn" data-a="media_next_track" title="${t("Weiter")}"><ha-icon icon="mdi:skip-next"></ha-icon></button>
            <span class="tm"></span>
            <span class="sp"></span>
            <div class="vol"><button class="btn mute" data-a="mute" title="${t("Stumm")}"><ha-icon icon="mdi:volume-high"></ha-icon></button>
              <input type="range" min="0" max="100" step="1"></div>
            <button class="btn pw" data-a="power" title="${t("Ausschalten")}"><ha-icon icon="mdi:power"></ha-icon></button>
          </div>
        </div>`;
      this.shadowRoot.innerHTML = `<style>${STYLE}</style>`;
      this.shadowRoot.appendChild(card);
      const q = (s) => card.querySelector(s);
      this._card = card;
      this._el = { body: q(".body"), bg: [...card.querySelectorAll(".bg i")], art: q(".art"), img: q(".art img"), ph: q(".art ha-icon"),
        nm: q(".nm"), chips: q(".chips"), t: q(".t"), s: q(".s"), a: q(".a"), src: q(".src"), sel: q(".src select"),
        prog: q(".prog"), fill: q(".bar i"), t0: q(".t0"), t1: q(".t1"), tm: q(".tm"), vol: q(".vol"), rng: q("input[type=range]"),
        btn: Object.fromEntries([...card.querySelectorAll(".btn")].map((b) => [b.dataset.a, b])) };
      const E = this._el;
      E.img.addEventListener("error", () => { E.img.hidden = true; E.ph.style.display = ""; });
      E.img.addEventListener("load", () => { E.ph.style.display = "none"; });
      const more = () => this._cur && this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: this._cur }, bubbles: true, composed: true }));
      E.art.addEventListener("click", more);
      q(".txt").addEventListener("click", more);
      E.chips.addEventListener("click", (ev) => {
        const b = ev.target.closest(".chip");
        if (!b) return;
        ev.stopPropagation();
        this._sel = b.dataset.id;
        this._key = null;
        if (this._hass) this.hass = this._hass;
      });
      Object.values(E.btn).forEach((b) => b.addEventListener("click", (ev) => { ev.stopPropagation(); this._press(b.dataset.a); }));
      // Lautstärke: nur beim Loslassen senden; solange gezogen wird, keine Updates von HA übernehmen
      E.rng.addEventListener("pointerdown", () => { this._drag = true; });
      E.rng.addEventListener("input", () => E.rng.style.setProperty("--v", `${E.rng.value}%`));
      E.rng.addEventListener("change", () => {
        this._drag = false;
        if (this._cur) this._hass.callService("media_player", "volume_set", { entity_id: this._cur, volume_level: Number(E.rng.value) / 100 });
      });
      E.rng.addEventListener("pointerup", () => setTimeout(() => { this._drag = false; }, 400));
      E.sel.addEventListener("change", () => {
        if (this._cur && E.sel.value) this._hass.callService("media_player", "select_source", { entity_id: this._cur, source: E.sel.value });
      });
      this._ro?.disconnect();
      this._ro = new ResizeObserver(() => this._fit());
      if (this.isConnected) this._ro.observe(E.body);
      this._key = null; this._bgUrl = undefined; this._bgI = 0; this._raw = null; this._artPx = 0;
    }

    connectedCallback() {
      this._vis ||= () => this._timer();
      this._edit ||= () => { this._key = null; if (this._hass) this.hass = this._hass; };   // Nullglow „Kacheln bearbeiten“ an/aus
      document.addEventListener("visibilitychange", this._vis);
      window.addEventListener("nullglow-edit", this._edit);
      if (this._el) this._ro?.observe(this._el.body);
      this._timer();
    }
    disconnectedCallback() {
      document.removeEventListener("visibilitychange", this._vis);
      window.removeEventListener("nullglow-edit", this._edit);
      clearInterval(this._tm); this._tm = null;
      this._ro?.disconnect();
    }

    _ids(h) {
      return this._cfg.entities.length ? this._cfg.entities : Object.keys(h.states).filter((id) => id.startsWith("media_player."));
    }
    _isLight() {   // helles Design? (--ng-is-light), höchstens alle 2 s nachsehen
      const now = Date.now();
      if (now - (this._lightT || 0) > 2000) { this._lightT = now; this._light = getComputedStyle(this).getPropertyValue("--ng-is-light").trim() === "1"; }
      return this._light;
    }

    set hass(h) {
      ngH = h;
      this._hass = h;
      if (!this._cfg) return;
      const st = this._ids(h).map((id) => h.states[id]).filter(Boolean);
      const act = st.filter((s) => RUN.includes(s.state) || s.state === "paused");
      let cur = act.find((s) => s.entity_id === this._sel) || act.find((s) => RUN.includes(s.state)) || act[0];
      const idle = !cur;
      const hide = idle && !!this._cfg.hide_idle && !this.preview && !this.editMode && !window.__ngEdit?.on;
      if (hide !== this.hidden) {   // hui-card blendet die Karte samt Grid-Zelle aus (wie bei Bedingungen)
        this.hidden = hide;
        this.dispatchEvent(new CustomEvent("card-visibility-changed", { detail: { value: !hide }, bubbles: true, composed: true }));
      }
      if (hide) { this._cur = null; this._timer(); return; }
      const rest = idle && this._cfg.idle === "rest";
      if (idle && !rest) cur = st[0];
      const a = cur?.attributes || {};
      const light = this._isLight(), e = eco();
      const key = JSON.stringify([cur?.entity_id, cur?.state, a.media_title, a.media_artist, a.media_album_name, a.media_series_title, a.app_name,
        a.source, a.source_list, a.entity_picture, a.media_duration, a.media_position, a.media_position_updated_at, a.volume_level,
        a.is_volume_muted, a.supported_features, a.friendly_name, act.map((s) => [s.entity_id, s.attributes.friendly_name]), ngLang(), light, e]);
      if (key === this._key) return;
      this._key = key;
      this._render(cur, act, light, e);
    }

    _render(cur, act, light, e) {
      const E = this._el, card = this._card;
      card.classList.toggle("eco", e);
      card.classList.toggle("empty", !cur);
      const rest = !cur && this._cfg.idle === "rest" && this._ids(this._hass || { states: {} }).length > 0;
      card.classList.toggle("rest", rest);
      if (!cur) {
        this._cur = null;
        E.nm.textContent = ""; E.t.textContent = rest ? t("Nichts läuft") : t("Kein Mediaplayer"); E.s.textContent = ""; E.a.textContent = "";
        E.ph.setAttribute("icon", "mdi:play-circle-outline"); E.img.hidden = true; E.img.removeAttribute("src"); E.ph.style.display = "";
        card.classList.remove("run", "applook"); E.art.classList.remove("app"); this._appRgb = null; this._setBg(null, light); this._timer();
        return;
      }
      const a = cur.attributes || {}, st = cur.state, f = Number(a.supported_features) || 0, na = ["unavailable", "unknown"].includes(st);
      const run = RUN.includes(st), off = ["off", "standby"].includes(st);
      this._cur = cur.entity_id; this._a = a; this._st = st;
      card.classList.toggle("run", run);
      const name = a.friendly_name || cur.entity_id;
      E.chips.innerHTML = act.length > 1 ? act.map((s) => `<button class="chip ${s.entity_id === cur.entity_id ? "sel" : ""}" data-id="${esc(s.entity_id)}"
        title="${esc(s.attributes.friendly_name || s.entity_id)}">${esc(s.attributes.friendly_name || s.entity_id)}</button>`).join("") : "";
      // Texte: Titel, Interpret (· Album im Kompaktmodus), Album/Serie/App/Quelle
      const artist = a.media_artist || a.media_series_title || "", album = a.media_album_name || "";
      const extra = [a.app_name, a.source].find((x) => x && x !== a.media_title) || "";
      const title = a.media_title || (off || na || st === "idle" ? t(STATE[st] || st) : extra || name);
      const large = this._cfg.size === "large";
      E.t.textContent = title;
      // Kopfzeile: Playername (+ Zustand, wenn er nicht schon Titel ist) oder Chips, wenn mehrere aktiv sind
      E.nm.textContent = act.length > 1 ? "" : st === "playing" || !a.media_title ? name : `${name} · ${t(STATE[st] || st)}`;
      E.nm.style.display = act.length > 1 ? "none" : "";
      E.t.title = title;
      E.s.textContent = large ? artist || (album ? "" : extra) : [artist, album].filter(Boolean).join(" · ") || (title !== extra ? extra : "");
      E.a.textContent = large ? album || (artist ? extra : "") : "";
      // Cover + Hintergrund
      const pic = a.entity_picture ? (/^(https?:|data:|blob:)/.test(a.entity_picture) ? a.entity_picture : (this._hass.hassUrl ? this._hass.hassUrl(a.entity_picture) : a.entity_picture)) : null;
      const app = !pic && !off && !na ? appLook(a) : null;   // kein Bild, aber bekannte App: Logo + Markenfarbe
      E.ph.setAttribute("icon", app?.icon || a.icon || { tv: "mdi:television", speaker: "mdi:speaker", receiver: "mdi:audio-video" }[a.device_class] || "mdi:music-note");
      E.art.classList.toggle("app", !!app);
      card.classList.toggle("applook", !!app);
      this._appRgb = app?.rgb || null;
      if (pic) { if (E.img.getAttribute("src") !== pic) { E.img.hidden = false; E.img.src = pic; } }
      else { E.img.hidden = true; E.img.removeAttribute("src"); E.ph.style.display = ""; }
      this._setBg(pic, light);
      // Knöpfe nach supported_features
      const B = E.btn, show = (b, v) => { b.hidden = !v; b.disabled = na; };
      const power = off && f & F.ON;
      show(B.media_previous_track, f & F.PREV);
      show(B.media_next_track, f & F.NEXT);
      B.media_previous_track.disabled = B.media_next_track.disabled = na || off;
      show(B.play, power || f & (F.PLAY | F.PAUSE));
      B.play.dataset.m = power ? "turn_on" : "media_play_pause";
      B.play.querySelector("ha-icon").setAttribute("icon", power ? "mdi:power" : run ? (f & F.PAUSE ? "mdi:pause" : "mdi:stop") : "mdi:play");
      B.play.title = power ? t("Einschalten") : t("Wiedergabe/Pause");
      show(B.power, off ? !power && f & F.ON : f & F.OFF);   // aus: Einschalten sitzt schon im großen Knopf
      B.power.title = off ? t("Einschalten") : t("Ausschalten");
      B.power.classList.toggle("on", !off && !na);
      // Lautstärke + Stumm
      const vol = typeof a.volume_level === "number" ? a.volume_level : null;
      E.vol.hidden = !(f & (F.VOL_SET | F.VOL_MUTE)) || off;
      E.rng.style.display = f & F.VOL_SET && vol !== null ? "" : "none";
      E.vol.classList.toggle("nr", E.rng.style.display === "none");
      show(B.mute, f & F.VOL_MUTE);
      B.mute.classList.toggle("on", !!a.is_volume_muted);
      B.mute.querySelector("ha-icon").setAttribute("icon", a.is_volume_muted ? "mdi:volume-off" : vol === null || vol > 0.5 ? "mdi:volume-high" : vol > 0.15 ? "mdi:volume-medium" : "mdi:volume-low");
      if (vol !== null && !this._drag) {
        const v = Math.round(vol * 100);
        E.rng.value = String(v); E.rng.style.setProperty("--v", `${v}%`);
        E.rng.title = t("Lautstärke {v} %", { v: v.toLocaleString(numLoc()) });
      }
      E.rng.disabled = na;
      // Quelle
      const list = Array.isArray(a.source_list) ? a.source_list : [];
      E.src.hidden = !(f & F.SOURCE && list.length) || off;
      if (!E.src.hidden) {
        const opts = list.includes(a.source) || !a.source ? list : [a.source, ...list];
        const k = JSON.stringify(opts);
        if (this._srcK !== k) { this._srcK = k; E.sel.innerHTML = opts.map((s) => `<option value="${esc(s)}">${esc(s)}</option>`).join(""); }
        E.sel.value = a.source || "";
        E.sel.disabled = na;
      }
      // Fortschritt
      E.prog.hidden = !(Number(a.media_duration) > 0) || off || na;
      this._tick();
      this._timer();
      if (!this._artPx) this._fit();
    }

    // Cover als Hintergrund: zwei Ebenen überblenden; Akzentfarbe aus dem Bild (gemerkt je URL)
    _setBg(url, light) {
      if (url !== this._bgUrl) {
        this._bgUrl = url;
        const [x, y] = this._bgI ? [this._el.bg[1], this._el.bg[0]] : this._el.bg;
        if (url) { y.style.backgroundImage = `url(${JSON.stringify(url)})`; y.classList.add("on"); this._bgI ^= 1; }
        x.classList.remove("on");
        if (!url) { this._raw = null; this._acc(light); }
        else vivid(url).then((rgb) => { if (this._bgUrl === url) { this._raw = rgb; this._acc(this._isLight()); } });
      } else this._acc(light);
    }
    _acc(light) {
      const cs = this._card.style, raw = this._raw || this._appRgb;
      if (!raw) { cs.removeProperty("--mc-rgb"); cs.removeProperty("--mc-ink"); return; }
      const [h, s, l] = rgb2hsl(...raw);
      // dunkles Design: hell und kräftig; helles Design: dunkler, damit Balken/Knopf auf hellem Glas lesbar bleiben
      const S = Math.min(1, Math.max(s, 0.55)), L = light ? Math.min(Math.max(l, 0.3), 0.42) : Math.min(Math.max(l, 0.6), 0.72);
      cs.setProperty("--mc-rgb", hsl2rgb(h, S, L).join(", "));
      cs.setProperty("--mc-ink", `rgb(${hsl2rgb(h, 0.4, light ? 0.97 : 0.1).join(", ")})`);
    }

    // Coverkante an die Kartenhöhe anpassen (Sections geben die Höhe vor)
    _fit() {
      const b = this._el?.body;
      if (!b || !b.clientHeight) return;
      const cs = getComputedStyle(b), large = this._cfg.size === "large";
      let h = b.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      if (large) h -= this._el.prog.offsetHeight + this._el.btn.play.parentElement.offsetHeight + (parseFloat(cs.rowGap) || 0) * 2;
      const px = Math.round(Math.max(64, Math.min(h, large ? 220 : 150, b.clientWidth * (large ? 0.4 : 0.34))));
      if (px !== this._artPx) { this._artPx = px; this._card.style.setProperty("--art", `${px}px`); }
    }

    _pos() {
      const a = this._a || {}, d = Number(a.media_duration);
      if (!(d > 0)) return null;
      let p = Number(a.media_position) || 0;
      if (this._st === "playing" && a.media_position_updated_at) p += (Date.now() - Date.parse(a.media_position_updated_at)) / 1000;
      return [Math.max(0, Math.min(p, d)), d];
    }
    _tick() {
      const E = this._el, pd = this._pos();
      if (!pd) { E.tm.textContent = ""; return; }
      const [p, d] = pd;
      E.fill.style.width = `${(p / d) * 100}%`;
      E.t0.textContent = fmt(p); E.t1.textContent = fmt(d);
      E.tm.textContent = `${fmt(p)} / ${fmt(d)}`;
      if (this._tmIv && this._tmIv !== (eco() ? 5000 : 1000)) this._timer();
    }
    // Sekundentakt nur, solange etwas spielt, die Karte eingehängt und die Seite sichtbar ist
    _timer() {
      const want = this.isConnected && !this.hidden && this._cur && this._st === "playing" && document.visibilityState !== "hidden" && this._pos();
      const iv = eco() ? 5000 : 1000;
      if (!want) { clearInterval(this._tm); this._tm = null; this._tmIv = 0; return; }
      if (this._tm && this._tmIv === iv) return;
      clearInterval(this._tm);
      this._tmIv = iv;
      this._tm = setInterval(() => this._tick(), iv);
    }

    _press(act) {
      if (!this._cur || !this._hass) return;
      const id = { entity_id: this._cur }, a = this._a || {};
      if (act === "play") this._hass.callService("media_player", this._el.btn.play.dataset.m || "media_play_pause", id);
      else if (act === "mute") this._hass.callService("media_player", "volume_mute", { ...id, is_volume_muted: !a.is_volume_muted });
      else if (act === "power") this._hass.callService("media_player", ["off", "standby"].includes(this._st) ? "turn_on" : "turn_off", id);
      else this._hass.callService("media_player", act, id);
    }

    getCardSize() { return this._cfg?.size === "large" ? 4 : 2; }
    getGridOptions() { return this._cfg?.size === "large" ? { columns: 12, rows: 4 } : { columns: 12, rows: 2, min_rows: 2 }; }
  }

  customElements.define("nullglow-media-card", NullglowMediaCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-media-card", name: t("Nullglow Medien"), description: t("Mediaplayer mit Cover als Hintergrund, Akzentfarbe aus dem Cover") });
})();

// ───── nullglow-hints-card.js ─────
(() => {
  if (customElements.get("nullglow-hints-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    "Regen": "Rain", "Regen gleich": "Rain soon", "Regen in {n} Std": "Rain in {n} h",
    "Fenster offen": "window open", "{n} Fenster offen": "{n} windows open",
    "Niemand zu Hause": "Nobody home", "1 Licht an": "1 light on", "{n} Lichter an": "{n} lights on",
    "{x} aufgeschlossen": "{x} unlocked", "{x} offen": "{x} open",
    "Heute": "Today", "Morgen": "Tomorrow",
    "Akku schwach": "Battery low", "{n} Akkus schwach": "{n} batteries low",
    "Gerät offline": "Device offline", "{n} Geräte offline": "{n} devices offline",
    "Update verfügbar": "Update available", "{n} Updates verfügbar": "{n} updates available",
    "Aus": "Off", "Licht ausschalten?": "Turn light off?", "{n} Lichter ausschalten?": "Turn {n} lights off?",
    "Ja": "Yes", "Nein": "No", "Nicht mehr anzeigen:": "Stop showing:", "Für {x} nicht mehr anzeigen": "Stop showing for {x}",
    "Alle ausblenden": "Hide all", "Ausblenden": "Hide", "Schließen": "Close",
    "Keine Hinweise – alles in Ordnung": "No hints – all good",
    "Nullglow Hinweise": "Nullglow Hints",
    "Zeigt nur, was Aufmerksamkeit braucht: Regen bei offenem Fenster, Müll, Akkus, Offline-Geräte, Updates, niemand zu Hause":
      "Shows only what needs attention: rain with open windows, waste pickup, batteries, offline devices, updates, nobody home",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const HOUR = 3600e3;
  const RAIN = ["rainy", "pouring", "lightning-rainy", "snowy-rainy", "hail"];
  const OFF_DOM = ["light", "switch", "cover", "climate", "lock", "media_player", "vacuum", "lawn_mower", "camera", "fan"];
  const OFF_SENSOR = ["temperature", "humidity", "battery", "power"];
  // Müll-Stichworte: STRICT nur als ganzes Wort (+ übliche Endung wie „-tonne“) — „Bio“ ≠ „Biologie“, „Müll“ ≠ „Müller“;
  // PREFIX genügt am Wortanfang („Wertstoffhof“, „Schadstoffmobil“)
  const W_STRICT = ["Müll", "Bio", "Papier", "Glas", "Plastik", "Tonne", "waste", "trash", "bin", "bins"];
  const W_PREFIX = ["Restmüll", "Hausmüll", "Biomüll", "Biotonne", "Altpapier", "Papiertonne", "Blaue Tonne", "Gelbe Tonne",
    "Gelber Sack", "Gelbe Säcke", "Wertstoff", "Wertstoffe", "Sperrmüll", "Abfall", "Grünschnitt", "Schadstoff", "garbage", "recycling", "compost"];
  const W_END = "(?:tonnen?|abfuhr|sack|säcke|müll|abfall|container|sammlung|entsorgung|abholung|day|s|n)?";
  const reEsc = (s) => String(s).trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  const wasteRe = (extra = []) => new RegExp(`(?<![\\p{L}\\p{N}])(?:(?:${W_STRICT.map(reEsc).join("|")})${W_END}(?![\\p{L}])|(?:${
    [...W_PREFIX, ...extra.filter((k) => String(k).trim())].map(reEsc).join("|")}))`, "iu");

  const RE_WIN = /(^|[\s_-])(fensterkontakt|fenster|window|kontakt|contact|sensor|öffnung|opening)(?=$|[\s_-])/giu;
  const RE_BAT = /(^|\s)(batteriestand|batterie|battery level|battery|akku|low)(?=$|\s)/giu;
  const RE_LOCK = /(^|\s)(türschloss|schloss|smart lock|lock)(?=$|\s)/giu;
  const clean = (s, re) => String(s || "").replace(re, " ").replace(/\s{2,}/g, " ").replace(/^[\s·:_-]+|[\s·:_-]+$/g, "").trim();
  const list = (names, max = 3) => names.slice(0, max).join(", ") + (names.length > max ? ", …" : "");
  const slug = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
  const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const dayDiff = (s) => { const [y, m, d] = s.split("-").map(Number); const b = new Date(); b.setHours(0, 0, 0, 0); return Math.round((new Date(y, m - 1, d) - b) / 864e5); };
  const normDash = (d) => String(d || location.pathname.split("/")[1] || "lovelace").replace(/^\/+|\/+$/g, "").split("/")[0] || "lovelace";
  const storeKey = (d) => `nullglow-hints-ignore:${normDash(d)}`;
  const readLocal = (d) => { try { const v = JSON.parse(localStorage.getItem(storeKey(d)) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } };
  const pct = (v) => `${Math.round(v).toLocaleString(numLoc())}${ngLang() === "de" ? " " : ""}%`;

  const STYLE = `
    :host { display: block; }
    :host([hidden]) { display: none !important; }
    .bar { display: flex; flex-wrap: wrap; gap: 8px; align-items: flex-start; }
    .pill { --hc: var(--rgb-ng-txt, 255, 255, 255); position: relative; display: inline-flex; align-items: center; gap: 10px;
      height: 40px; box-sizing: border-box; max-width: min(520px, 100%); min-width: 0; padding: 0 6px 0 6px; border-radius: 999px;
      background: var(--ha-card-background, rgba(var(--rgb-ng-txt, 255, 255, 255), .045));
      box-shadow: var(--ha-card-box-shadow, inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .09));
      -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none); backdrop-filter: var(--ha-card-backdrop-filter, none);
      color: var(--ng-txt, #e8f5ee); font-size: 13.5px; line-height: 1.2; -webkit-tap-highlight-color: transparent; }
    .pill::before { content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
      box-shadow: inset 0 0 0 1px rgba(var(--hc), .34); }
    .pill.tap { cursor: pointer; }
    .lvl-warn { --hc: var(--rgb-ng-warn, 255, 209, 102); }
    .lvl-crit { --hc: var(--rgb-ng-danger, 255, 107, 107); }
    .lvl-info { --hc: var(--rgb-ng-info, 107, 227, 255); }
    .lvl-dim::before { box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .10); }
    .lvl-ok { --hc: var(--rgb-ng-acc, 124, 255, 178); }
    .lvl-ok::before { box-shadow: none; }
    .ic { flex: none; width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; --mdc-icon-size: 17px;
      background: rgba(var(--hc), .16); color: rgb(var(--hc)); }
    .lvl-dim .ic, .lvl-ok .ic { background: rgba(var(--rgb-ng-txt, 255, 255, 255), .07); color: var(--ng-txt-dim, #93a79d); }
    .lvl-crit .ic { box-shadow: 0 0 12px rgba(var(--hc), calc(.45 * var(--ng-glow-k, 1))); }
    .tx { flex: 1 1 auto; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 4px; }
    .tx b { font-weight: 600; }
    .tx span { color: var(--ng-txt-dim, #93a79d); }
    .lvl-dim .tx b, .lvl-ok .tx b { color: var(--ng-txt-dim, #93a79d); font-weight: 500; }
    button { font: inherit; border: 0; margin: 0; cursor: pointer; -webkit-tap-highlight-color: transparent; }
    .x { flex: none; width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; padding: 0;
      background: transparent; color: var(--ng-txt-mute, var(--ng-txt-dim, #93a79d)); --mdc-icon-size: 16px; }
    .x:hover { background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); color: var(--ng-txt, #e8f5ee); }
    .act { flex: none; height: 28px; padding: 0 12px; border-radius: 999px; font-size: 12.5px; font-weight: 600; white-space: nowrap;
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); color: var(--ng-txt, #e8f5ee); }
    .act.yes { background: rgba(var(--rgb-ng-acc, 124, 255, 178), .18); color: var(--ng-acc, #7cffb2);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-acc, 124, 255, 178), .45); }
    .cq { white-space: nowrap; font-weight: 600; }
    /* Mini-Menü „nicht mehr anzeigen“ (klappt die Pille auf) */
    .pill.menu { height: auto; min-height: 40px; flex-wrap: wrap; padding: 6px 6px 6px 6px; gap: 6px 8px; border-radius: 20px;
      max-width: min(760px, 100%); }
    .mt { font-size: 12.5px; color: var(--ng-txt-dim, #93a79d); white-space: nowrap; margin-right: 2px; }
    .chip { height: 28px; padding: 0 11px; border-radius: 999px; font-size: 12.5px; white-space: nowrap; max-width: 260px;
      overflow: hidden; text-overflow: ellipsis; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .07); color: var(--ng-txt, #e8f5ee);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .10); }
    .chip:hover { background: rgba(var(--rgb-ng-txt, 255, 255, 255), .12); }
    .chip.all { background: rgba(var(--hc), .14); color: rgb(var(--hc)); box-shadow: inset 0 0 0 1px rgba(var(--hc), .40); font-weight: 600; }
    .lvl-dim .chip.all { color: var(--ng-txt, #e8f5ee); }
    /* Neu: einmal kurz aufleuchten, keine Dauer-Animation */
    .pill.new { animation: ngIn .45s cubic-bezier(.22,1,.36,1) both; }
    .pill.new::after { content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0;
      box-shadow: 0 0 22px 1px rgba(var(--hc), calc(.55 * var(--ng-glow-k, 1))), inset 0 0 0 1px rgba(var(--hc), .7);
      animation: ngGlow 2.2s ease-out .15s 1; }
    @keyframes ngIn { from { opacity: 0; transform: translateY(-4px) scale(.98); } }
    @keyframes ngGlow { 20% { opacity: 1; } 100% { opacity: 0; } }
    :host(.eco) .pill, :host(.eco) .pill::after, :host(.eco) .bar { animation: none !important; transition: none !important; }
    /* Schwebend: feste Leiste oben mittig, nimmt keinen Platz, Klicks gehen daneben durch */
    :host([floating]) { height: 0; overflow: visible; }
    :host([floating]) .bar { position: fixed; top: 14px; left: 50%; transform: translateX(-50%); z-index: 5;
      width: max-content; max-width: calc(100vw - 32px); justify-content: center; pointer-events: none;
      animation: ngIn .35s cubic-bezier(.22,1,.36,1) both; }
    :host([floating]) .pill { pointer-events: auto; background: rgba(var(--rgb-ng-bg, 10, 16, 13), .78);
      -webkit-backdrop-filter: blur(18px) saturate(1.4); backdrop-filter: blur(18px) saturate(1.4);
      box-shadow: var(--ng-shadow-lg, 0 12px 32px -14px rgba(0, 0, 0, .55)), inset 0 0 0 1px rgba(var(--rgb-ng-txt, 255, 255, 255), .10); }
    /* Über der Navigation: eine Reihe, flacher, bei Platzmangel seitlich wischbar (wie Benachrichtigungen über dem Dock) */
    :host([floating="bottom"]) .bar { top: auto; bottom: var(--ng-hints-bottom, 78px); flex-wrap: nowrap; overflow-x: auto; overflow-y: visible;
      max-width: min(1400px, calc(100vw - 32px)); pointer-events: auto; scrollbar-width: none; align-items: flex-end; }
    :host([floating="bottom"]) .bar::-webkit-scrollbar { display: none; }
    :host([floating="bottom"]) .pill { flex: none; height: 34px; max-width: 470px; }
    :host([floating="bottom"]) .pill.menu { height: auto; max-width: min(760px, calc(100vw - 32px)); }
    @keyframes ngUp { from { opacity: 0; transform: translate(-50%, 6px); } }
    :host([floating="bottom"]) .bar { animation-name: ngUp; }
  `;

  class NullglowHintsCard extends HTMLElement {
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }

    static getConfigForm() {
      const bool = (name) => ({ name, selector: { boolean: {} } });
      return this._ngForm([
        { type: "expandable", name: "rules", title: "Regeln", schema: [
          { type: "grid", name: "", schema: ["rain", "waste", "battery", "offline", "updates", "away"].map(bool) } ] },
        { type: "grid", name: "", schema: [
          { name: "battery_threshold", selector: { number: { min: 1, max: 100, mode: "box", unit_of_measurement: "%" } } },
          { name: "weather", selector: { entity: { filter: { domain: "weather" } } } } ] },
        { name: "floating", selector: { select: { mode: "dropdown", options: [
          { value: "", label: "Im Raster (nimmt Platz, nur wenn es Hinweise gibt)" }, { value: "top", label: "Schwebend oben" },
          { value: "bottom", label: "Schwebend über der Navigation" }] } } },
        { name: "ignore", selector: { entity: { multiple: true } } },
        { name: "ignore_labels", selector: { label: { multiple: true } } },
        { type: "expandable", name: "waste", title: "Müllabfuhr", schema: [
          { name: "calendar", selector: { entity: { filter: { domain: "calendar" } } } },
          { name: "calendars", selector: { entity: { multiple: true, filter: { domain: "calendar" } } } },
          { name: "keywords", selector: { text: { multiple: true } } } ] },
        { type: "expandable", name: "tap", title: "Antippen öffnet", schema: [
          { type: "grid", name: "", schema: ["rain", "waste", "battery", "away", "offline", "updates"].map((name) => ({ name, selector: { text: {} } })) } ] },
        { name: "dashboard", selector: { text: {} } },
      ], { rain: "Regen & Fenster", waste: "Müllabfuhr", battery: "Akkus", offline: "Geräte offline", updates: "Updates",
        away: "Niemand zu Hause", battery_threshold: "Akku-Warnung unter", weather: "Wetter", floating: "Anzeige",
        ignore: "Nie warnen für", ignore_labels: "Labels ignorieren", calendar: "Müll-Kalender (jeder Termin)",
        calendars: "Kalender durchsuchen", keywords: "Weitere Stichworte", dashboard: "Dashboard-Schlüssel" },
      { weather: "leer = erstes Wetter-Objekt", floating: "schwebend braucht keinen Platz (Wandbildschirm)",
        ignore_labels: "leer = Label „no_hints“", calendars: "leer = alle Kalender (nur ohne Waste-Collection-Sensoren)",
        keywords: "z. B. Grünschnitt", dashboard: "für die lokale Ausblendliste, leer = aus der Adresse" },
      { "Regeln": "Rules", "Müllabfuhr": "Waste pickup", "Antippen öffnet": "Tap opens", "Regen & Fenster": "Rain & windows",
        "Akkus": "Batteries", "Geräte offline": "Devices offline", "Updates": "Updates", "Niemand zu Hause": "Nobody home",
        "Akku-Warnung unter": "Battery warning below", "Wetter": "Weather", "Anzeige": "Display", "Im Raster (nimmt Platz, nur wenn es Hinweise gibt)": "In the grid (takes space only when there are hints)",
        "Schwebend oben": "Floating at the top", "Schwebend über der Navigation": "Floating above the navigation",
        "Nie warnen für": "Never warn for", "Labels ignorieren": "Ignore labels", "Müll-Kalender (jeder Termin)": "Waste calendar (every event)",
        "Kalender durchsuchen": "Calendars to scan", "Weitere Stichworte": "Extra keywords", "Dashboard-Schlüssel": "Dashboard key",
        "leer = erstes Wetter-Objekt": "empty = first weather entity", "schwebend braucht keinen Platz (Wandbildschirm)": "floating takes no space (wall display)",
        "leer = Label „no_hints“": "empty = label “no_hints”", "leer = alle Kalender (nur ohne Waste-Collection-Sensoren)": "empty = all calendars (only without Waste Collection sensors)",
        "z. B. Grünschnitt": "e.g. green waste", "für die lokale Ausblendliste, leer = aus der Adresse": "for the local hide list, empty = from the URL" });
    }
    static async getStubConfig() {
      return { rules: { rain: true, waste: true, battery: true, offline: true, updates: true, away: true } };
    }
    // ── Editor Ende ──

    // Lokale Ausblendliste (für Assistent/Wartung): lesen und leeren
    static getLocalIgnore(dashboard) { return readLocal(dashboard); }
    static clearLocalIgnore(dashboard) {
      try { localStorage.removeItem(storeKey(dashboard)); } catch (e) { /* gesperrt */ }
      window.dispatchEvent(new CustomEvent("nullglow-hint-ignore", { detail: { entities: [], dashboard: normDash(dashboard), cleared: true } }));
    }

    setConfig(config) {
      const c = config || {};
      this._cfg = { ...c, rules: { rain: true, waste: true, battery: true, offline: true, updates: true, away: true, ...(c.rules || {}) },
        battery_threshold: Number(c.battery_threshold ?? 15), waste: c.waste || {}, tap: c.tap || {},
        ignore: [].concat(c.ignore || []), ignore_labels: [].concat(c.ignore_labels?.length ? c.ignore_labels : ["no_hints"]) };
      this._dash = normDash(c.dashboard);
      this._re = wasteRe([].concat(this._cfg.waste.keywords || []));
      if (!this.shadowRoot) {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `<style>${STYLE}</style><div class="bar"></div>`;
        this._bar = this.shadowRoot.querySelector(".bar");
        this._bar.addEventListener("click", (e) => this._click(e));
      }
      const fl = this._cfg.floating;
      if (fl) this.setAttribute("floating", fl === "bottom" ? "bottom" : "top"); else this.removeAttribute("floating");
      this._hints = []; this._key = null; this._lastSig = null; this._cal = this._cal || [];
      if (this._fcFor) this._unsubFc();
      if (this._run) this._loadCal();   // Müll-Einstellungen könnten sich geändert haben (Editor)
      if (this._hass) this._eval(true);
    }

    set preview(v) { this._preview = !!v; this._key = null; this._render(); }
    get preview() { return !!this._preview; }

    set hass(h) {
      ngH = h;
      this._hass = h;
      if (this.isConnected && !this._run) this._start();
      // Drosseln: höchstens alle 2 s auswerten (hass kommt in großen Installationen mehrmals pro Sekunde)
      const wait = 2000 - (Date.now() - (this._lastEval || 0));
      if (wait <= 0) this._eval();
      else if (!this._tm) this._tm = setTimeout(() => { this._tm = null; this._eval(); }, wait);
    }

    connectedCallback() {
      if (!this._onIgn) {
        this._onIgn = (e) => { if (e.composedPath?.()[0] !== this && normDash(e.detail?.dashboard) === this._dash) this._eval(true); };
        this._onStore = (e) => { if (e.key === storeKey(this._dash)) this._eval(true); };
      }
      window.addEventListener("nullglow-hint-ignore", this._onIgn);
      window.addEventListener("storage", this._onStore);
      if (this._hass && !this._run) { this._start(); this._eval(true); }   // _eval abonniert die Vorhersage
    }
    disconnectedCallback() {
      window.removeEventListener("nullglow-hint-ignore", this._onIgn);
      window.removeEventListener("storage", this._onStore);
      this._run = false;
      clearInterval(this._tick); clearInterval(this._calT); clearTimeout(this._tm); this._tm = null;
      Object.values(this._armT || {}).forEach(clearTimeout);
      this._unsubFc();
    }

    _start() {
      this._run = true;
      // Minutentakt: Zeitregeln (1 h offline, 10 Uhr, Tageswechsel); Kalender alle 30 min
      this._tick = setInterval(() => { if (this._calDay !== new Date().toDateString()) this._loadCal(); this._eval(true); }, 60e3);
      this._calT = setInterval(() => this._loadCal(), 30 * 60e3);
      this._loadCal();
    }

    _weatherId(h) {
      if (this._cfg.weather) return this._cfg.weather;
      if (!this._wId || !h.states[this._wId]) this._wId = Object.keys(h.states).find((id) => id.startsWith("weather.")) || null;
      return this._wId;
    }

    // ---- Stündliche Vorhersage (für „Regen in 1 Std“) ----
    _subFc() {
      const h = this._hass, w = this._weatherId(h);
      if (!this._cfg.rules.rain || !w || !h.connection?.subscribeMessage || this._fcFor === w) return;
      this._unsubFc();
      this._fcFor = w;
      try {
        const p = h.connection.subscribeMessage((m) => { this._fc = Array.isArray(m?.forecast) ? m.forecast : null; this._eval(true); },
          { type: "weather/subscribe_forecast", forecast_type: "hourly", entity_id: w });
        this._fcUnsub = p;
        Promise.resolve(p).catch(() => { this._fc = null; });   // Wetterdienst ohne Stundenwerte
      } catch (e) { this._fc = null; }
    }
    _unsubFc() {
      const p = this._fcUnsub;
      this._fcUnsub = null; this._fcFor = null; this._fc = null;
      if (p) Promise.resolve(p).then((u) => typeof u === "function" && u()).catch(() => {});
    }

    // ---- Kalender (Müll): heute + morgen, zwischengespeichert ----
    async _loadCal() {
      const h = this._hass;
      if (!h?.callApi || !this._cfg.rules.waste || this._calBusy) return;
      this._calDay = new Date().toDateString();
      const W = this._cfg.waste, ids = Object.keys(h.states), ign = this._ignTest(h);
      const wcs = ids.some((id) => id.startsWith("sensor.") && h.states[id].attributes?.daysTo !== undefined);
      const full = W.calendar ? [W.calendar] : [];
      const scan = W.calendars ? [].concat(W.calendars) : (!wcs && !full.length ? ids.filter((id) => id.startsWith("calendar.")) : []);
      const cals = [...full.map((id) => [id, true]), ...scan.filter((id) => !full.includes(id)).map((id) => [id, false])]
        .filter(([id]) => h.states[id] && h.states[id].state !== "unavailable" && !ign(id)).slice(0, 20);
      if (!cals.length) { this._cal = []; return; }
      this._calBusy = true;
      const d0 = new Date(); d0.setHours(0, 0, 0, 0);
      const d2 = new Date(d0); d2.setDate(d2.getDate() + 2);
      const q = `start=${encodeURIComponent(d0.toISOString())}&end=${encodeURIComponent(d2.toISOString())}`;
      const out = [];
      await Promise.all(cals.map(async ([id, all]) => {
        try {
          for (const ev of (await h.callApi("GET", `calendars/${id}?${q}`)) || []) {
            const s = String(ev.summary || "").trim();
            if (!s || (!all && !this._re.test(s))) continue;
            const st = ev.start || {}, date = st.date && !st.dateTime ? st.date : st.dateTime ? ymd(new Date(st.dateTime)) : null;
            if (date) out.push({ cal: id, summary: s, date });
          }
        } catch (e) { /* Kalender nicht lesbar */ }
      }));
      this._calBusy = false;
      this._cal = out;
      this._eval(true);
    }

    // ---- Ausblenden ----
    _ignTest(h) {
      const set = new Set([...this._cfg.ignore, ...readLocal(this._dash)]);
      const labs = new Set(this._cfg.ignore_labels.flatMap((l) => [String(l), slug(l)]));
      const E = h.entities || {}, D = h.devices || {};
      return (id) => {
        if (set.has(id)) return true;
        const e = E[id];
        if (!e) return false;
        const d = e.device_id && D[e.device_id];
        return [...(e.labels || []), ...((d && d.labels) || [])].some((l) => labs.has(l) || labs.has(slug(l)));
      };
    }
    _ignore(ids) {
      const cur = readLocal(this._dash);
      try { localStorage.setItem(storeKey(this._dash), JSON.stringify([...new Set([...cur, ...ids])])); } catch (e) { /* gesperrt */ }
      this.dispatchEvent(new CustomEvent("nullglow-hint-ignore", { detail: { entities: ids, dashboard: this._dash }, bubbles: true, composed: true }));
      this._eval(true);
    }

    // ---- Auswertung ----
    _eval(force) {
      const h = this._hass;
      if (!h || !this._cfg) return;
      if (this.isConnected) this._subFc();   // no-op, solange das Wetter-Objekt gleich bleibt
      const sig = [h.states, h.entities, h.devices, ngLang()];   // unverändert → nichts zu tun
      if (!force && this._lastSig && sig.every((x, i) => x === this._lastSig[i])) return;
      this._lastSig = sig;
      this._lastEval = Date.now();
      const c = this._ctx(h), R = this._cfg.rules, hints = [];
      for (const [k, fn] of [["rain", this._rain], ["away", this._away], ["waste", this._waste], ["battery", this._battery],
        ["updates", this._updates], ["offline", this._offline]]) {
        if (!R[k]) continue;
        try { const x = fn.call(this, h, c); if (x) hints.push({ rule: k, sep: " · ", rest: "", tap: null, action: null, ...x }); }
        catch (e) { console.warn("nullglow-hints-card", k, e); }
      }
      this._hints = hints;
      this._render();
    }

    // Ein Durchlauf über alle Zustände, nach Domäne sortiert
    _ctx(h) {
      const S = h.states, isIgn = this._ignTest(h), by = {};
      const want = ["binary_sensor", "sensor", "light", "lock", "cover", "person", "update"];
      for (const id in S) {
        const dom = id.slice(0, id.indexOf("."));
        if (want.includes(dom)) (by[dom] || (by[dom] = [])).push(S[id]);
      }
      const E = h.entities || {}, D = h.devices || {};
      const dev = (id) => { const e = E[id]; return e?.device_id ? D[e.device_id] : null; };
      const area = (id) => { const e = E[id], d = dev(id); return h.areas?.[e?.area_id || d?.area_id]?.name; };
      const fn = (s) => s.attributes.friendly_name || s.entity_id.split(".")[1];
      const windows = (by.binary_sensor || []).filter((s) => {
        const a = s.attributes;
        return s.state === "on" && (a.device_class === "window"
          || (a.device_class === "opening" && /fenster|window/i.test(`${s.entity_id} ${a.friendly_name || ""}`))) && !isIgn(s.entity_id);
      }).map((s) => ({ id: s.entity_id, name: clean(fn(s), RE_WIN) || area(s.entity_id) || fn(s) }));
      return { S, by, isIgn, dev, fn, windows };
    }

    _more(id) { return id ? { more: id } : null; }
    _tapFor(rule, fallback) { const x = this._cfg.tap[rule]; return x ? { nav: x } : fallback; }

    // 1) Regen + Fenster offen
    _rain(h, c) {
      if (!c.windows.length) return null;
      const ws = h.states[this._weatherId(h)];
      if (!ws) return null;
      let head = null;
      if (RAIN.includes(ws.state)) head = t("Regen");
      else if (Array.isArray(this._fc)) {
        const now = Date.now();
        const hit = this._fc.filter((f) => Date.parse(f.datetime) + HOUR > now).slice(0, 2)
          .find((f) => (f.precipitation_probability ?? 0) >= 60 || (f.precipitation ?? 0) > 0.2 || RAIN.includes(f.condition));
        if (hit) {
          const m = (Date.parse(hit.datetime) - now) / 60e3;
          head = m < 30 ? t("Regen gleich") : t("Regen in {n} Std", { n: Math.max(1, Math.round(m / 60)) });
        }
      }
      if (!head) return null;
      const n = c.windows.length;
      return { lvl: "warn", icon: "mdi:weather-pouring", head, ents: c.windows,
        rest: `${t(n === 1 ? "Fenster offen" : "{n} Fenster offen", { n })} (${list(c.windows.map((w) => w.name))})`,
        tap: this._tapFor("rain", this._more(c.windows[0].id)) };
    }

    // 6) Niemand zu Hause, aber Lichter/Schloss/Tor/Fenster offen
    _away(h, c) {
      const ps = (c.by.person || []).filter((s) => !["unknown", "unavailable"].includes(s.state));
      if (!ps.length || ps.some((s) => s.state === "home")) return null;
      const lights = (c.by.light || []).filter((s) => s.state === "on" && !s.entity_id.includes("_segment_")
        && !s.attributes.is_hue_group && !Array.isArray(s.attributes.entity_id) && !c.isIgn(s.entity_id));
      const locks = (c.by.lock || []).filter((s) => ["unlocked", "open"].includes(s.state) && !c.isIgn(s.entity_id));
      const gates = (c.by.cover || []).filter((s) => ["garage", "gate"].includes(s.attributes.device_class)
        && ["open", "opening"].includes(s.state) && !c.isIgn(s.entity_id));
      if (!lights.length && !locks.length && !gates.length && !c.windows.length) return null;
      const parts = [];
      if (lights.length) parts.push(t(lights.length === 1 ? "1 Licht an" : "{n} Lichter an", { n: lights.length }));
      locks.forEach((s) => parts.push(t("{x} aufgeschlossen", { x: clean(c.fn(s), RE_LOCK) || c.fn(s) })));
      gates.forEach((s) => parts.push(t("{x} offen", { x: c.fn(s) })));
      if (c.windows.length) parts.push(t(c.windows.length === 1 ? "Fenster offen" : "{n} Fenster offen", { n: c.windows.length }));
      const E = (s) => ({ id: s.entity_id, name: c.fn(s) });
      return { lvl: "warn", icon: "mdi:home-export-outline", head: t("Niemand zu Hause"), rest: parts.join(", "),
        ents: [...lights.map(E), ...locks.map(E), ...gates.map(E), ...c.windows],
        action: lights.length ? { ents: lights.map((s) => s.entity_id) } : null,
        tap: this._tapFor("away", null) };
    }

    // 2) Müllabfuhr heute (bis 10 Uhr) oder morgen
    _waste(h, c) {
      const early = new Date().getHours() < 10, days = [[], []], ents = [], seen = new Set();
      const add = (d, name, id, entName) => {
        if (!(d === 1 || (d === 0 && early))) return;
        const k = `${d}|${String(name).toLowerCase()}`;
        if (!seen.has(k)) { seen.add(k); days[d].push(name); }
        if (!ents.some((e) => e.id === id)) ents.push({ id, name: entName });
      };
      // a) Waste Collection Schedule: sensor.* mit daysTo
      for (const s of c.by.sensor || []) {
        const a = s.attributes;
        if (a.daysTo === undefined || a.daysTo === null || ["unavailable", "unknown"].includes(s.state) || c.isIgn(s.entity_id)) continue;
        const types = Array.isArray(a.types) ? a.types.filter(Boolean) : [];
        const nm = types.length ? types.join(", ") : c.fn(s);
        add(Number(a.daysTo), nm, s.entity_id, c.fn(s));
      }
      // b) + c) Kalender (Müll-Kalender bzw. Stichwortsuche) — Daten aus _loadCal
      for (const ev of this._cal || []) {
        if (c.isIgn(ev.cal)) continue;
        add(dayDiff(ev.date), ev.summary, ev.cal, h.states[ev.cal] ? c.fn(h.states[ev.cal]) : ev.cal);
      }
      if (!days[0].length && !days[1].length) return null;
      const lab = [t("Heute"), t("Morgen")], parts = [0, 1].filter((d) => days[d].length);
      const first = parts[0], second = parts[1];
      return { lvl: "info", icon: "mdi:trash-can-outline", head: lab[first], sep: ": ",
        rest: list(days[first], 4) + (second !== undefined ? ` · ${lab[second]}: ${list(days[second], 4)}` : ""),
        ents, tap: this._tapFor("waste", this._more(ents[0]?.id)) };
    }

    // 3) Akkus schwach
    _battery(h, c) {
      const thr = this._cfg.battery_threshold, E = h.entities || {}, items = [], devs = new Set();
      for (const s of [...(c.by.sensor || []), ...(c.by.binary_sensor || [])]) {
        if (s.attributes.device_class !== "battery") continue;
        const id = s.entity_id;
        let v;
        if (id.startsWith("sensor.")) { v = parseFloat(s.state); if (!isFinite(v) || v >= thr) continue; }
        else if (s.state === "on") v = null;
        else continue;
        if (E[id]?.hidden || c.isIgn(id)) continue;
        const d = c.dev(id);
        items.push({ id, v, dev: E[id]?.device_id, name: d?.name_by_user || d?.name || clean(c.fn(s), RE_BAT) || c.fn(s) });
      }
      items.sort((a, b) => (a.v ?? thr) - (b.v ?? thr));
      const uniq = items.filter((x) => !x.dev || (!devs.has(x.dev) && devs.add(x.dev)));   // ein Gerät nur einmal
      if (!uniq.length) return null;
      const crit = uniq.some((x) => x.v !== null && x.v <= 5), one = uniq.length === 1;
      return { lvl: crit ? "crit" : "warn", icon: crit ? "mdi:battery-alert-variant-outline" : "mdi:battery-low",
        head: one ? t("Akku schwach") : t("{n} Akkus schwach", { n: uniq.length }),
        rest: one ? `${uniq[0].name}${uniq[0].v !== null ? ` ${pct(uniq[0].v)}` : ""}` : list(uniq.map((x) => x.name), 4),
        ents: uniq.map((x) => ({ id: x.id, name: x.name })), tap: this._tapFor("battery", this._more(uniq[0].id)) };
    }

    // 5) Updates (nur Admins)
    _updates(h, c) {
      if (!h.user?.is_admin) return null;
      const ups = (c.by.update || []).filter((s) => s.state === "on" && !c.isIgn(s.entity_id));
      if (!ups.length) return null;
      const nm = (s) => s.attributes.title || clean(c.fn(s), /(^|\s)(update|firmware)(?=$|\s)/giu) || c.fn(s);
      return { lvl: "info", icon: "mdi:package-up", head: ups.length === 1 ? t("Update verfügbar") : t("{n} Updates verfügbar", { n: ups.length }),
        rest: list(ups.map(nm)), ents: ups.map((s) => ({ id: s.entity_id, name: nm(s) })),
        tap: { nav: this._cfg.tap.updates || "/config/updates" } };
    }

    // 4) Geräte > 1 h offline (alle sichtbaren Entitäten nicht erreichbar, mind. eine „wichtige“)
    _offline(h, c) {
      const E = h.entities || {}, D = h.devices || {}, S = h.states, now = Date.now(), by = new Map();
      for (const id in E) {
        const e = E[id], s = S[id];
        if (!s || !e.device_id || e.hidden || e.entity_category || e.disabled_by) continue;
        let g = by.get(e.device_id);
        if (!g) by.set(e.device_id, (g = { ids: [], key: [], ok: false, old: true }));
        g.ids.push(id);
        if (s.state !== "unavailable") { g.ok = true; continue; }
        if (now - Date.parse(s.last_changed) < HOUR) g.old = false;   // erst seit kurzem weg
        const dom = id.slice(0, id.indexOf("."));
        if (OFF_DOM.includes(dom) || (dom === "sensor" && OFF_SENSOR.includes(s.attributes.device_class))) g.key.push(id);
      }
      const devs = [];
      for (const [did, g] of by) {
        if (g.ok || !g.old || !g.key.length || D[did]?.disabled_by || g.ids.some(c.isIgn)) continue;
        devs.push({ id: g.key[0], name: D[did]?.name_by_user || D[did]?.name || c.fn(S[g.key[0]]) });
      }
      if (!devs.length) return null;
      devs.sort((a, b) => a.name.localeCompare(b.name, numLoc()));
      return { lvl: "dim", icon: "mdi:lan-disconnect", head: devs.length === 1 ? t("Gerät offline") : t("{n} Geräte offline", { n: devs.length }),
        rest: list(devs.map((d) => d.name)), ents: devs, tap: this._tapFor("offline", this._more(devs[0].id)) };
    }

    // ---- Darstellung ----
    _setVisible(v) {
      if (this._cfg.floating) { if (this.hidden) this.hidden = false; return; }   // schwebend: Host bleibt, Leiste ist fixed
      if (this.hidden === !v) return;
      this.hidden = !v;
      this.dispatchEvent(new CustomEvent("card-visibility-changed", { detail: { value: v }, bubbles: true, composed: true }));
    }

    _render() {
      if (!this._bar) return;
      const hs = this._hints || [];
      const eco = document.documentElement.dataset.ngEco === "1";
      const key = JSON.stringify(hs.map((x) => [x.rule, x.lvl, x.icon, x.head, x.rest, x.ents.map((e) => e.id), !!x.action, !!x.tap]))
        + `|${this._menu}|${this._confirm}|${ngLang()}|${this._preview}|${eco}`;
      if (key === this._key) return;
      this._key = key;
      this.classList.toggle("eco", eco);
      const sig = (x) => `${x.rule}:${x.ents.map((e) => e.id).sort().join(",")}`;
      const seen = this._seen || new Set();
      this._seen = new Set(hs.map(sig));
      if (this._menu && !hs.some((x) => x.rule === this._menu)) this._menu = null;
      if (this._confirm && !hs.some((x) => x.rule === this._confirm && x.action)) this._confirm = null;
      const empty = !hs.length && this._preview && !this._cfg.floating
        ? `<div class="pill lvl-ok"><span class="ic"><ha-icon icon="mdi:check"></ha-icon></span><span class="tx"><b>${esc(t("Keine Hinweise – alles in Ordnung"))}</b></span></div>` : "";
      this._setVisible(hs.length > 0 || !!empty);
      this._bar.innerHTML = hs.map((x) => (this._menu === x.rule ? this._menuHtml(x) : this._pill(x, !eco && !seen.has(sig(x))))).join("") + empty;
    }

    _pill(x, isNew) {
      const conf = this._confirm === x.rule && x.action;
      const n = x.action?.ents.length || 0;
      const act = !x.action ? "" : conf
        ? `<span class="cq">${esc(n === 1 ? t("Licht ausschalten?") : t("{n} Lichter ausschalten?", { n }))}</span>
           <button class="act yes" data-act="yes">${esc(t("Ja"))}</button><button class="act" data-act="no">${esc(t("Nein"))}</button>`
        : `<button class="act" data-act="off">${esc(t("Aus"))}</button>`;
      return `<div class="pill lvl-${x.lvl}${isNew ? " new" : ""}${x.tap ? " tap" : ""}" data-rule="${x.rule}" data-act="tap"${x.tap ? ' role="button"' : ""}>
        <span class="ic"><ha-icon icon="${x.icon}"></ha-icon></span>
        ${conf ? "" : `<span class="tx"><b>${esc(x.head)}</b>${x.rest ? `<span>${esc(x.sep)}${esc(x.rest)}</span>` : ""}</span>`}
        ${act}
        ${x.ents.length && !conf ? `<button class="x" data-act="x" title="${esc(t("Ausblenden"))}" aria-label="${esc(t("Ausblenden"))}"><ha-icon icon="mdi:close"></ha-icon></button>` : ""}
      </div>`;
    }

    _menuHtml(x) {
      const one = x.ents.length === 1;
      const chips = one
        ? `<button class="chip" data-act="ign" data-ent="${esc(x.ents[0].id)}">${esc(t("Für {x} nicht mehr anzeigen", { x: x.ents[0].name }))}</button>`
        : `<span class="mt">${esc(t("Nicht mehr anzeigen:"))}</span>` + x.ents.slice(0, 8).map((e) =>
          `<button class="chip" data-act="ign" data-ent="${esc(e.id)}" title="${esc(t("Für {x} nicht mehr anzeigen", { x: e.name }))}">${esc(e.name)}</button>`).join("")
          + `<button class="chip all" data-act="ign" data-ent="*">${esc(t("Alle ausblenden"))}</button>`;
      return `<div class="pill menu lvl-${x.lvl}" data-rule="${x.rule}">
        <span class="ic"><ha-icon icon="mdi:eye-off-outline"></ha-icon></span>${chips}
        <button class="x" data-act="cancel" title="${esc(t("Schließen"))}" aria-label="${esc(t("Schließen"))}"><ha-icon icon="mdi:close"></ha-icon></button>
      </div>`;
    }

    // Zustand (Menü/Rückfrage) läuft nach einer Weile von selbst ab
    _arm(prop, ms) {
      this._armT = this._armT || {};
      clearTimeout(this._armT[prop]);
      this._armT[prop] = setTimeout(() => { this[prop] = null; this._render(); }, ms);
    }

    _click(e) {
      const el = e.composedPath().find((n) => n.dataset?.act);
      if (!el) return;
      const rule = el.closest(".pill")?.dataset.rule, x = (this._hints || []).find((y) => y.rule === rule);
      if (!x) return;
      e.stopPropagation();
      switch (el.dataset.act) {
        case "tap": this._tap(x.tap); return;
        case "x": this._menu = rule; this._confirm = null; this._arm("_menu", 20000); break;
        case "cancel": this._menu = null; break;
        case "ign": this._menu = null; this._ignore(el.dataset.ent === "*" ? x.ents.map((y) => y.id) : [el.dataset.ent]); return;
        case "off": this._confirm = rule; this._arm("_confirm", 8000); break;
        case "no": this._confirm = null; break;
        case "yes":   // genau die Lichter aus dem Hinweis — erst nach der zweiten Berührung
          this._confirm = null;
          this._hass?.callService("light", "turn_off", { entity_id: x.action.ents });
          break;
        default: return;
      }
      this._render();
    }

    _tap(tp) {
      if (!tp) return;
      if (tp.more) {
        const ev = new Event("hass-more-info", { bubbles: true, composed: true });
        ev.detail = { entityId: tp.more };
        this.dispatchEvent(ev);
        return;
      }
      const p = String(tp.nav);
      if (p.startsWith("#")) {   // Bubble-Pop-up
        history.pushState(null, "", location.pathname + location.search + p);
        window.dispatchEvent(new Event("location-changed"));
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else {
        history.pushState(null, "", p);
        window.dispatchEvent(new Event("location-changed"));
      }
    }

    getCardSize() { return this._hints?.length ? 1 : 0; }
    getGridOptions() { return { columns: "full", rows: "auto" }; }
  }

  customElements.define("nullglow-hints-card", NullglowHintsCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-hints-card", name: t("Nullglow Hinweise"),
    description: t("Zeigt nur, was Aufmerksamkeit braucht: Regen bei offenem Fenster, Müll, Akkus, Offline-Geräte, Updates, niemand zu Hause") });
})();

// ───── nullglow-design-card.js ─────
(() => {
  if (customElements.get("nullglow-design-card")) return;
  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  // Nur Anzeige übersetzen: die Helfer-Optionen (Dunkel | Hell | Auto) bleiben deutsch und werden deutsch verglichen.
  const colorWord = (c) => (c ? t(c) : "");   // Farbwort des Design-Titels (lokales t = Theme im Render)
  const EN = {
    // Farbwörter der Design-Titel (ng-design-title)
    "Grün": "Green", "Violett": "Violet", "Türkis": "Teal", "Orange": "Orange", "Gold": "Gold", "Rosé": "Rose",
    "Blau": "Blue", "Eisblau": "Ice blue", "Limette": "Lime", "Magenta": "Magenta", "Silber": "Silver",
    "Indigo": "Indigo", "Sand": "Sand", "Mint": "Mint",
    "Dunkel": "Dark", "Hell": "Light", "Sonne": "Sun", "Gerät": "Device", "Auto": "Auto",
    "dunkel": "dark", "hell": "light", "nach Sonne": "by sun", "wie Gerät": "like device",
    "Gilt nur für dieses Gerät · Standard: {d}, {m}": "Applies to this device only · Default: {d}, {m}",
    "Antippen wechselt sofort — auf allen Geräten, die dieses Dashboard zeigen{x}.": "Tap to switch instantly — on all devices showing this dashboard{x}.",
    " · Auto: hell, solange die Sonne scheint": " · Auto: light while the sun is up",
    "{e} fehlt — Helfer anlegen und „Eingabeauswahl-Entitäten“ neu laden.": "{e} missing — create the helper and reload “Input select entities”.",
    "Standard": "Default", "Glas": "Glass", "klar": "clear", "milchig": "frosted", "Glas-Deckkraft": "Glass opacity",
    "Design-Auswahl (Farbvarianten)": "Design picker (color variants)",
    "Stromsparen": "Power saving", "Aus": "Off", "An": "On",
    "Nordlicht, Wetterfarben und Animationen aus — für langsame Geräte": "Aurora, weather colors and animations off — for slow devices",
    "Auto: gerade an (langsames Gerät erkannt)": "Auto: currently on (slow device detected)", "Auto: gerade aus": "Auto: currently off",
  };
  let ngH = null;   // zuletzt bekanntes hass (set hass setzt es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
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
    .glass { display: flex; align-items: center; gap: 12px; padding: 6px 4px 12px; color: var(--ng-txt-dim, var(--secondary-text-color)); font-size: 14px; }
    .glass ha-icon { --mdc-icon-size: 20px; flex: none; }
    .glass .lbl { flex: none; font-weight: 500; color: var(--ng-txt, var(--primary-text-color)); }
    .glass .end { flex: none; font-size: 12px; }
    .glass input { flex: 1; min-width: 120px; accent-color: var(--ng-acc, var(--primary-color)); height: 28px; cursor: pointer; }
    .glass .val { flex: none; min-width: 52px; text-align: right; font-variant-numeric: tabular-nums; color: var(--ng-txt, var(--primary-text-color)); }
    .eco { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; padding: 0 4px 12px; color: var(--ng-txt-dim, var(--secondary-text-color)); font-size: 12px; }
    .eco > ha-icon { --mdc-icon-size: 20px; flex: none; }
    .eco .lbl { flex: none; font-weight: 500; font-size: 14px; color: var(--ng-txt, var(--primary-text-color)); }
    .eco .seg button { min-height: 34px; padding: 0 14px; font-size: 13px; }
    .eco .note { flex: 1; min-width: 160px; }
    .glass button { border: 0; font: inherit; font-size: 13px; min-height: 34px; padding: 0 12px; border-radius: 999px; cursor: pointer; background: transparent;
      color: var(--ng-txt-dim, var(--secondary-text-color)); box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255,255,255,.1)); }
  `;
  // Glas-Deckkraft: Faktor auf die Glas-Tokens des Designs (--ng-glass-k, 1 = Standard). Wirkt an <html>, weil das Theme
  // die Tokens am View-Container auflöst (ein Wert darunter käme zu spät).
  const GLASS_MIN = 0.25, GLASS_MAX = 3;
  const pct = (k) => `${Math.round(k * 100)} %`;

  // Hell/Dunkel für storage: local (Vorlage/Paket): Werte wie die Option „mode“ der Nullglow-Vorlage
  const LOCAL_MODES = [["Dunkel", "dark", "mdi:weather-night"], ["Hell", "light", "mdi:white-balance-sunny"],
    ["Sonne", "sun", "mdi:weather-sunset"], ["Gerät", "auto", "mdi:cellphone-cog"]];
  const MODE_NAME = { dark: "dunkel", light: "hell", sun: "nach Sonne", auto: "wie Gerät" };
  const readLocal = (k) => { try { return JSON.parse(localStorage.getItem(k) || "{}") || {}; } catch (e) { return {}; } };

  class NullglowDesignCard extends HTMLElement {
    // ── Editor (tools/add-card-editors.py) ──
    static _ngEn() {
      const h = document.querySelector("home-assistant")?.hass;
      return !String(h?.locale?.language || h?.language || "de").toLowerCase().startsWith("de");
    }
    static _ngForm(schema, labels, helpers = {}, en = {}) {
      if (!this._ngEn()) return { schema, computeLabel: (s) => labels[s.name] ?? s.name, computeHelper: (s) => helpers[s.name] };
      const tr = (x) => (typeof x === "string" ? en[x] ?? x : x);
      const walk = (list) => list.map((s) => {
        const o = { ...s }, sel = s.selector;
        if (typeof o.title === "string") o.title = tr(o.title);
        if (Array.isArray(o.schema)) o.schema = walk(o.schema);
        if (sel?.select?.options) o.selector = { ...sel, select: { ...sel.select,
          options: sel.select.options.map((p) => (p && typeof p === "object" ? { ...p, label: tr(p.label) } : p)) } };
        if (sel?.object?.fields) o.selector = { ...sel, object: { ...sel.object, fields: Object.fromEntries(
          Object.entries(sel.object.fields).map(([k, f]) => [k, { ...f, ...(f.label ? { label: tr(f.label) } : {}) }])) } };
        return o;
      });
      return { schema: walk(schema), computeLabel: (s) => tr(labels[s.name]) ?? s.name, computeHelper: (s) => tr(helpers[s.name]) };
    }
    static async _ngEnergy(hass) {   // Vorschlag aus dem Energie-Dashboard (Erkennung der Flow-Card)
      try { return (await customElements.get("nullglow-flow-card")?.getStubConfig?.(hass)) || {}; } catch (e) { return {}; }
    }
    static _ngFind(hass, test) {
      return Object.keys(hass?.states || {}).filter((id) => test(id, hass.states[id].attributes || {}));
    }

    static getConfigForm() {
      return this._ngForm([
        { name: "storage", selector: { select: { mode: "dropdown", options: [
          { value: "local", label: "Nur dieses Gerät (Browser)" }, { value: "helper", label: "Für alle Geräte (input_select-Helfer)" }] } } },
        { name: "dashboard", selector: { text: {} } },
        { type: "grid", name: "", schema: [
          { name: "default_design", selector: { text: {} } },
          { name: "default_mode", selector: { select: { mode: "dropdown", options: [
            { value: "auto", label: "Wie Gerät" }, { value: "dark", label: "Dunkel" }, { value: "light", label: "Hell" }, { value: "sun", label: "Nach Sonne" }] } } } ] },
        { type: "expandable", name: "", title: "Helfer (nur „Für alle Geräte“)", flatten: true, schema: [
          { name: "entity", selector: { entity: { filter: { domain: "input_select" } } } },
          { name: "mode_entity", selector: { entity: { filter: { domain: "input_select" } } } } ] },
      ], { storage: "Wahl speichern", dashboard: "Dashboard", default_design: "Standard-Design", default_mode: "Standard Hell/Dunkel",
        entity: "Design-Helfer", mode_entity: "Hell/Dunkel-Helfer" },
      { dashboard: "Adresse, z. B. /nullglow — leer = dieses Dashboard", default_design: "z. B. nullglow, halcyon, emberglow",
        entity: "Optionen = Theme-Namen", mode_entity: "Optionen Dunkel | Hell | Auto" },
      { "Nur dieses Gerät (Browser)": "This device only (browser)", "Für alle Geräte (input_select-Helfer)": "All devices (input_select helper)",
        "Wie Gerät": "Like device", "Dunkel": "Dark", "Hell": "Light", "Nach Sonne": "By sun",
        "Helfer (nur „Für alle Geräte“)": "Helpers (only “All devices”)", "Wahl speichern": "Save choice", "Dashboard": "Dashboard",
        "Standard-Design": "Default design", "Standard Hell/Dunkel": "Default light/dark", "Design-Helfer": "Design helper",
        "Hell/Dunkel-Helfer": "Light/dark helper", "Adresse, z. B. /nullglow — leer = dieses Dashboard": "Path, e.g. /nullglow — empty = this dashboard",
        "z. B. nullglow, halcyon, emberglow": "e.g. nullglow, halcyon, emberglow", "Optionen = Theme-Namen": "Options = theme names",
        "Optionen Dunkel | Hell | Auto": "Options Dunkel | Hell | Auto" });
    }
    static async getStubConfig() {
      return { storage: "local", dashboard: "/" + (location.pathname.split("/")[1] || "lovelace"), default_design: "nullglow", default_mode: "auto" };
    }
    // ── Editor Ende ──
    setConfig(config) {
      // storage: local -> Wahl nur in diesem Browser (Schlüssel nullglow-design:<dashboard>), sonst zwei input_select-Helfer
      this._cfg = { entity: "input_select.kiosk_design", mode_entity: "input_select.kiosk_design_mode", glass_entity: "input_number.kiosk_glass", ...config };
      this._local = this._cfg.storage === "local";
      this._lkey = `nullglow-design:${this._cfg.dashboard || "/" + (location.pathname.split("/")[1] || "lovelace")}`;
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    }

    set hass(h) {
      ngH = h;
      this._hass = h;
      if (this._drag) return;   // Regler wird gerade gezogen -> nicht neu aufbauen
      const st = h.states[this._cfg.entity], md = h.states[this._cfg.mode_entity], gl = h.states[this._cfg.glass_entity];
      const src = this._local ? JSON.stringify(readLocal(this._lkey)) : st ? `${st.state}|${(st.attributes.options || []).join(",")}|${md?.state}|${gl?.state}` : "-";
      const key = `${src}|${Object.keys(h.themes?.themes || {}).length}|${h.themes?.darkMode}|${ngLang()}|${document.documentElement.dataset.ngEco || ""}`;
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
          hint: t("Gilt nur für dieses Gerät · Standard: {d}, {m}", { d: dT, m: MODE_NAME[defM] ? t(MODE_NAME[defM]) : defM }),
          custom: !!(p.design || p.mode || p.glass || p.eco),
          // Stromsparen (nullglow-strategy.js wertet aus): "on" | "off" | leer = Auto; Auto antippen misst neu
          eco: p.eco || "auto", pickEco: (v) => { if (v === "auto") window.__ngEcoRemeasure?.(); save({ eco: v === "auto" ? "" : v }); },
          glass: +p.glass || 1, setGlass: (k) => save({ glass: Math.abs(k - 1) < 0.001 ? "" : k }),
          pickDesign: (o) => save({ design: o === defD ? "" : o }), pickMode: (v) => save({ mode: v === defM ? "" : v }),
          reset: () => { try { localStorage.removeItem(this._lkey); } catch (e) { /* egal */ } this._refresh(); } };
      }
      const st = h.states[c.entity], md = h.states[c.mode_entity];
      if (!st) return null;
      const cur = String(md?.state || "");
      const modes = md ? [["Dunkel", "mdi:weather-night"], ["Hell", "mdi:white-balance-sunny"], ["Auto", "mdi:theme-light-dark"]].map(([m, i]) =>
        [m, (md.attributes.options || []).find((o) => o.toLowerCase().startsWith(m.toLowerCase())) || m, i]) : [];
      const gl = h.states[c.glass_entity], gk = parseFloat(gl?.state);
      return { design: st.state, mode: cur, options: st.attributes.options || [], modes,
        ...(gl ? { glass: isFinite(gk) ? gk : 1, setGlass: (k) => h.callService("input_number", "set_value", { entity_id: c.glass_entity, value: k }) } : {}),
        hint: t("Antippen wechselt sofort — auf allen Geräten, die dieses Dashboard zeigen{x}.", { x: cur.toLowerCase().startsWith("auto") ? t(" · Auto: hell, solange die Sonne scheint") : "" }),
        pickDesign: (o) => h.callService("input_select", "select_option", { entity_id: c.entity, option: o }),
        pickMode: (v) => h.callService("input_select", "select_option", { entity_id: c.mode_entity, option: v }) };
    }

    _render() {
      const m = this._model();
      if (!m) {
        this.shadowRoot.innerHTML = `<ha-card><div class="hint" style="padding:16px">${t("{e} fehlt — Helfer anlegen und „Eingabeauswahl-Entitäten“ neu laden.", { e: esc(this._cfg.entity) })}</div></ha-card>`;
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
          <div><b style="font-family: ${esc(t["primary-font-family"] || "inherit")}">${esc(name)}</b><small>${esc(colorWord(color))}</small></div>
          ${on ? `<span class="ok" style="background: ${t["ng-acc"]}; color: ${t["ng-acc-ink"]}"><ha-icon icon="mdi:check"></ha-icon></span>` : ""}
        </button>`;
      }).join("");
      const seg = m.modes.length ? `<div class="seg">${m.modes.map(([l, v, i]) =>
        `<button data-m="${esc(v)}" class="${m.mode === v ? "on" : ""}"><ha-icon icon="${i}"></ha-icon>${esc(t(l))}</button>`).join("")}</div>` : "";
      const reset = m.custom ? `<button class="reset"><ha-icon icon="mdi:backup-restore"></ha-icon>${t("Standard")}</button>` : "";
      const glass = m.setGlass ? `<div class="glass"><ha-icon icon="mdi:blur"></ha-icon><span class="lbl">${t("Glas")}</span><span class="end">${t("klar")}</span>
        <input type="range" min="${GLASS_MIN}" max="${GLASS_MAX}" step="0.05" value="${m.glass}" aria-label="${t("Glas-Deckkraft")}">
        <span class="end">${t("milchig")}</span><span class="val">${pct(m.glass)}</span>
        ${Math.abs(m.glass - 1) > 0.001 ? '<button class="g1">100 %</button>' : ""}</div>` : "";
      const ecoOn = document.documentElement.dataset.ngEco === "1";
      const eco = m.pickEco ? `<div class="eco"><ha-icon icon="mdi:leaf"></ha-icon><span class="lbl">${t("Stromsparen")}</span>
        <div class="seg">${[["Aus", "off"], ["An", "on"], ["Auto", "auto"]].map(([l, v]) =>
          `<button data-e="${v}" class="${m.eco === v ? "on" : ""}">${t(l)}</button>`).join("")}</div>
        <span class="note">${m.eco === "auto" ? t(ecoOn ? "Auto: gerade an (langsames Gerät erkannt)" : "Auto: gerade aus") + " · " : ""}${t("Nordlicht, Wetterfarben und Animationen aus — für langsame Geräte")}</span></div>` : "";
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><div class="top"><div class="hint">${esc(m.hint)}</div>${seg}${reset}</div>${glass}${eco}<div class="grid">${tiles}</div>`;
      const rng = this.shadowRoot.querySelector(".glass input");
      if (rng) {
        const val = this.shadowRoot.querySelector(".glass .val");
        // Ziehen: sofort sichtbar (nur hier), Loslassen: speichern (Helfer bzw. Browser) — nullglow-design.js/-strategy übernehmen dann
        rng.addEventListener("input", () => { this._drag = window.__ngGlassDrag = true; val.textContent = pct(+rng.value); document.documentElement.style.setProperty("--ng-glass-k", rng.value); });
        rng.addEventListener("change", () => {
          this._drag = false; m.setGlass(Math.round(+rng.value * 100) / 100);
          setTimeout(() => { window.__ngGlassDrag = false; }, 1500);   // bis der neue Wert aus HA/Browser zurück ist
        });
        this.shadowRoot.querySelector(".glass .g1")?.addEventListener("click", () => { document.documentElement.style.removeProperty("--ng-glass-k"); m.setGlass(1); });
      }
      this.shadowRoot.querySelectorAll(".seg button[data-m]").forEach((b) => b.addEventListener("click", () => m.pickMode(b.dataset.m)));
      this.shadowRoot.querySelectorAll(".eco button[data-e]").forEach((b) => b.addEventListener("click", () => m.pickEco(b.dataset.e)));
      this.shadowRoot.querySelectorAll(".d").forEach((b) => b.addEventListener("click", () => m.pickDesign(b.dataset.o)));
      this.shadowRoot.querySelector(".reset")?.addEventListener("click", () => m.reset());
    }

    getCardSize() { return 6; }
    getGridOptions() { return { columns: 12, rows: "auto" }; }
  }

  customElements.define("nullglow-design-card", NullglowDesignCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "nullglow-design-card", name: "Nullglow Design", description: t("Design-Auswahl (Farbvarianten)") });
})();

// ───── nullglow-strategy.js ─────
(() => {
  if (customElements.get("ll-strategy-dashboard-nullglow")) return;

  // Sprache: Deutsch, wenn das HA-Profil Deutsch ist, sonst Englisch. Texte stehen deutsch im Code, Englisch in EN.
  const EN = {
    // Farbwörter der Design-Titel (ng-design-title)
    "Grün": "Green", "Violett": "Violet", "Türkis": "Teal", "Orange": "Orange", "Gold": "Gold", "Rosé": "Rose",
    "Blau": "Blue", "Eisblau": "Ice blue", "Limette": "Lime", "Magenta": "Magenta", "Silber": "Silver",
    "Indigo": "Indigo", "Sand": "Sand", "Mint": "Mint",
    // Seiten, Überschriften, Karten
    "Übersicht": "Overview", "Licht": "Lights", "Klima": "Climate", "Energie": "Energy", "Kameras": "Cameras", "Kamera": "Camera",
    "Kalender": "Calendar", "Sauger": "Vacuum", "Mäher": "Mower", "Rollläden": "Blinds", "Zuhause": "Home", "Termine": "Agenda",
    "Uhr & Wetter": "Clock & weather", "Alle": "All", "Als Nächstes": "Up next", "Karte": "Map", "Garten": "Garden",
    "Verschleiß": "Wear", "Akku": "Battery", "Saugroboter": "Robot vacuum", "Mähroboter": "Robot mower", "Heute": "Today",
    "Energiefluss": "Energy flow", "Netz": "Grid", "Speicher": "Battery",
    "Alles aus": "All off", "Wirklich alle Lichter ausschalten?": "Really turn off all lights?", "{{ ns.n }} Lichter an": "{{ ns.n }} lights on",
    "Batterien & Wartung": "Batteries & maintenance", "Regenradar": "Rain radar", "Es hat geklingelt": "Someone's at the door",
    "Fenster & Türen": "Windows & doors", "Alle Fenster & Türen": "All windows & doors", "Alle Rollläden": "All blinds",
    "Weitere": "Other", "Rollladen": "Blind", "{n} · alle": "{n} · all", "Klimaanlage": "Air conditioning", "Heizung": "Heating",
    "Auf": "Up", "Stopp": "Stop", "Zu": "Down",
    " an": " on", " · aus": " · off",
    "offen": "open", "zu": "closed", "nicht erreichbar": "unavailable",
    "NETZ": "GRID", "EINSPEISUNG": "EXPORT", "BEZUG": "IMPORT", "lädt ": "charging ", "entlädt ": "discharging ", "bereit": "idle",
    "SOLAR · HEUTE": "SOLAR · TODAY", "PROGNOSE": "FORECAST", "MORGEN": "TOMORROW",
    "Montag": "Monday", "Dienstag": "Tuesday", "Mittwoch": "Wednesday", "Donnerstag": "Thursday", "Freitag": "Friday",
    "Samstag": "Saturday", "Sonntag": "Sunday",
    "Januar": "January", "Februar": "February", "März": "March", "April": "April", "Mai": "May", "Juni": "June", "Juli": "July",
    "August": "August", "September": "September", "Oktober": "October", "November": "November", "Dezember": "December",
    "Gute Nacht": "Good night", "Guten Morgen": "Good morning", "Hallo": "Hello", "Guten Abend": "Good evening",
    "Dunkles Glas-Dashboard mit Energiefluss, Licht, Klima, Kameras — richtet sich aus deinen Bereichen selbst ein":
      "Dark glass dashboard with energy flow, lights, climate, cameras — sets itself up from your areas",
    // Assistent: Voraussetzungen
    "Pop-ups (Rollläden, Räume, Regenradar …) öffnen sich sonst nicht": "otherwise pop-ups (blinds, rooms, rain radar …) won't open",
    "Wandmonitor ohne Kopfzeile": "wall display without header",
    "Nullglow einrichten.": "Set up Nullglow.",
    "Das Dashboard baut sich aus deinen Bereichen, Geräten und dem Energie-Dashboard selbst — hier nur noch anpassen. Neue Geräte erscheinen später automatisch.":
      "The dashboard builds itself from your areas, devices and the energy dashboard — you only fine-tune it here. New devices show up automatically later.",
    "1 · Voraussetzungen (HACS)": "1 · Requirements (HACS)", "{n} fehlt": "{n} missing", "{n} zu alt": "{n} too old", "alles da": "all set",
    " — mindestens {min} nötig: {why}": " — at least {min} required: {why}",
    "(Version nicht erkannt — mindestens {min} nötig)": "(version not detected — at least {min} required)",
    "In HACS aktualisieren": "Update in HACS", "In HACS öffnen": "Open in HACS",
    "Nach der {x} in HACS die Seite neu laden (Strg+F5, in der Handy-App den App-Cache leeren).":
      "After the {x} in HACS, reload the page (Ctrl+F5; in the mobile app, clear the app cache).",
    "Aktualisierung": "update", "Installation": "installation",
    // Assistent: Seiten
    "Uhr, Wetter, Energie, Licht, Klima, Rollläden, Personen, Termine": "Clock, weather, energy, lights, climate, blinds, people, agenda",
    "{n} Lampen": "{n} lights", "{n} Räume mit Temperatur": "{n} rooms with temperature",
    "aus dem Energie-Dashboard": "from the energy dashboard", "kein Solar/Netz gefunden": "no solar/grid found",
    "{n} Kameras": "{n} cameras", "{n} Kalender": "{n} calendars", "{n} Saugroboter": "{n} robot vacuums", "kein Saugroboter": "no robot vacuum",
    "{n} Mähroboter": "{n} robot mowers", "kein Mähroboter": "no robot mower",
    "2 · Seiten": "2 · Pages", "{n} aktiv": "{n} active",
    // Assistent: Übersicht anordnen
    "3 · Übersicht anordnen": "3 · Arrange overview", "angepasst": "customized", "Standard": "Default",
    "Reihenfolge der Gruppen auf der Übersicht (Pfeile, von links oben nach rechts unten; passt eine kleine Gruppe in eine Lücke davor, rückt sie dort hinein), Auge = ein-/ausblenden, Auswahl = Breite in Spalten. Mehr Breite = größere Kameras. Am Handy steht ohnehin alles untereinander.":
      "Order of the groups on the overview (arrows, from top left to bottom right; if a small group fits into a gap before it, it moves up there), eye = show/hide, dropdown = width in columns. More width = bigger cameras. On a phone everything is stacked anyway.",
    "1 Spalte": "1 column", "2 Spalten": "2 columns", "3 Spalten": "3 columns", "ganze Breite": "full width",
    "Kameras nebeneinander": "Cameras side by side", "{n} je Reihe": "{n} per row", "Breite": "Width",
    "anzeigen": "show", "ausblenden": "hide",
    "Kameras auf der Übersicht: unter <b>6 · … Kameras</b> „Live-Kameras auf der Übersicht“ wählen — dann erscheinen sie hier zum Anordnen.":
      "Cameras on the overview: pick them under <b>6 · … Cameras</b> “Live cameras on the overview” — then they show up here to arrange.",
    "Standard wiederherstellen": "Restore default",
    // Assistent: Räume
    "4 · Räume, Rollläden & Fenster": "4 · Rooms, blinds & windows", "{n} von {m}": "{n} of {m}",
    "Mit Label ausblenden": "Hide by label",
    "Entitäten, Geräte oder ganze Bereiche mit diesem Label erscheinen nicht (z. B. no_dboard)":
      "Entities, devices or whole areas with this label are left out (e.g. no_dboard)",
    "Namen kürzen": "Shorten names",
    "Etage und Raum vorne im Namen weglassen („EG - Küche - Rollladen links“ → „Küche · links“)":
      "Drop floor and room at the start of names (“GF - Kitchen - Blind left” → “Kitchen · left”)",
    "Rollläden auf der Übersicht ({n})": "Blinds on the overview ({n})",
    "Zusammengefasst = eine Kachel mit Alle auf/zu, Antippen öffnet alle nach Etage":
      "Combined = one tile with all up/down, tapping opens all of them by floor",
    "Automatisch (ab 7 zusammengefasst)": "Automatic (combined from 7)", "Einzeln": "Individually", "Zusammengefasst": "Combined",
    "Licht-Kachel auf der Übersicht antippen": "Tapping a light tile on the overview",
    "Pop-up = alle Lampen des Raums einzeln (dimmen, Farbe, Szenen); Halten schaltet dann den Raum an/aus":
      "Pop-up = every light in the room individually (dim, color, scenes); holding then toggles the room",
    "Licht an/aus (Standard)": "Toggle lights (default)", "Pop-up mit den Lampen des Raums": "Pop-up with the room's lights",
    "Temperatur-Verlauf in den Klima-Kacheln": "Temperature history in the climate tiles",
    "zeigt die letzten 24 Stunden als Linie hinter der Kachel (farbig nach Temperatur)":
      "shows the last 24 hours as a line behind the tile (colored by temperature)",
    "Fenster & Türen auf der Übersicht ({n})": "Windows & doors on the overview ({n})",
    "Zusammengefasst = eine Kachel „Alles zu“ / „2 offen · …“, Antippen zeigt alle nach Etage":
      "Combined = one tile “All closed” / “2 open · …”, tapping shows all of them by floor",
    "Nicht anzeigen": "Don't show",
    "Keine Bereiche gefunden. Lege sie unter <b>Einstellungen → Bereiche, Zonen &amp; Etagen</b> an und ordne deine Geräte zu — dann erscheinen hier die Räume.":
      "No areas found. Create them under <b>Settings → Areas, labels &amp; zones</b> and assign your devices — then the rooms show up here.",
    "Aus deinen HA-Bereichen. Auge = anzeigen, Pfeile = Reihenfolge, Raum antippen = Name, Symbol, Hauptlicht, Temperatur ändern.":
      "From your HA areas. Eye = show, arrows = order, tap a room = change name, icon, main light, temperature.",
    "{n} Licht": "{n} light", "{n} Lichter": "{n} lights", " · {n} Heizung/Klima": " · {n} × heating/climate",
    " · {n} Rollladen": " · {n} × blind", " · {n} Fenster/Tür": " · {n} × window/door",
    "Name": "Name", "Symbol": "Icon", "Hauptlicht (Kachel auf der Übersicht)": "Main light (tile on the overview)",
    "leer = automatisch: {x}": "empty = automatic: {x}", "Knopf schaltet alle Lampen des Raums": "button toggles all lights in the room",
    "keiner": "none", "Temperatur-Sensor": "Temperature sensor", "Luftfeuchte-Sensor": "Humidity sensor",
    // Assistent: Energie
    "5 · Energie": "5 · Energy", "automatisch": "automatic", "nicht gefunden": "not found",
    "Leer lassen = automatisch aus dem Energie-Dashboard. Hier kannst du Punkte zuweisen und benennen — wie in der Energie-Karte.":
      "Leave empty = automatic from the energy dashboard. Here you can assign and name the points — as in the energy card.",
    // Assistent: Design, Wetter, Personen, Kameras, Kalender
    "aktiv: {e} → {c} — beim Klingeln öffnet sich die Kamera groß (2 Min, auf jeder Seite)":
      "active: {e} → {c} — when the doorbell rings, the camera opens full size (2 min, on every page)",
    "keine Klingel oder Kamera gefunden — unten wählen": "no doorbell or camera found — pick them below",
    "beim Klingeln öffnet sich die Kamera groß auf jeder Seite (2 Min){x}": "when the doorbell rings, the camera opens full size on every page (2 min){x}",
    " — erkannt: {e}": " — detected: {e}",
    "6 · Design, Wetter, Personen, Kameras, Kalender": "6 · Design, weather, people, cameras, calendars",
    "Wetter": "Weather", "leer = {x}": "empty = {x}", "keins gefunden": "none found", "Personen": "People", "leer = alle": "empty = all",
    "Karte mit Personen auf der Übersicht": "Map with people on the overview",
    "zeigt, wo alle gerade sind (Standort aus der HA-App) — unter den Personen im Bereich Zuhause":
      "shows where everyone is right now (location from the HA app) — below the people in the Home group",
    "Karte in den Design-Farben": "Map in the design colors", "aus = normale Kartenfarben": "off = normal map colors",
    "Live-Kameras auf der Übersicht (optional)": "Live cameras on the overview (optional)",
    "eine oder mehrere; Stream nur, solange die Übersicht offen ist — Größe und Platz unter „3 · Übersicht anordnen“":
      "one or more; streams only while the overview is open — size and position under “3 · Arrange overview”",
    "Klingel: Kamera groß anzeigen": "Doorbell: show camera full size", "Klingel-Sensor": "Doorbell sensor",
    "Auch ein einfacher Taster geht (z. B. Zigbee „…_action“) — jeder Druck zählt als Klingeln.":
      "A simple button works too (e.g. Zigbee “…_action”) — every press counts as a ring.",
    "keiner gefunden": "none found", "Kamera für das Klingel-Fenster": "Camera for the doorbell window", "keine gefunden": "none found",
    "Kameras-Seite live": "Cameras page live",
    "aus = Standbild, das sich alle paar Sekunden erneuert (Antippen = live)": "off = still image refreshed every few seconds (tap = live)",
    "Steckdose des Wandmonitors (optional)": "Wall display power plug (optional)",
    "ist sie aus, pausiert das Nordlicht im Hintergrund": "when it is off, the aurora background pauses",
    "Titel des Dashboards": "Dashboard title",
    "Standard-Farbvariante — auf jedem Gerät per Uhr antippen umstellbar": "default color variant — tap the clock on any device to change it there",
    "Hell / Dunkel": "Light / dark", "jedes Design gibt es hell und dunkel": "every design comes in light and dark",
    "Wie Gerät / HA-Profil": "Like device / HA profile", "Immer dunkel": "Always dark", "Immer hell": "Always light",
    "Nach Sonne (tagsüber hell)": "By the sun (light during the day)",
    // Assistent: Tipps
    "9 · Handy & Wandmonitor": "9 · Phone & wall display",
    "<b>Handy:</b> läuft in der HA-App, Seiten unten per Leiste wechseln (wischbar).": "<b>Phone:</b> runs in the HA app, switch pages with the bar at the bottom (swipeable).",
    "<b>Wandmonitor (Full HD):</b> Dashboard-Adresse mit <code>?kiosk</code> öffnen (braucht Kiosk Mode) — ohne Kopfzeile und Seitenleiste. Bei 1920×1080 mit 125 % Zoom sieht es aus wie im Original. Hochkant geht auch (die Leiste zeigt dann nur Symbole).":
      "<b>Wall display (Full HD):</b> open the dashboard URL with <code>?kiosk</code> (needs Kiosk Mode) — no header and no sidebar. At 1920×1080 with 125 % zoom it looks like the original. Portrait works too (the bar then shows icons only).",
    "<b>Uhr antippen:</b> Design und Hell/Dunkel nur für dieses Gerät — der Standard bleibt, was hier eingestellt ist. Als Admin findest du dort auch <b>Kacheln bearbeiten</b>: Kacheln und ganze Gruppen per Ziehen anordnen, breiter machen, ausblenden, umbenennen — auf jeder Seite.":
      "<b>Tap the clock:</b> design and light/dark for this device only — the default stays what is set here. As an admin you also find <b>Edit tiles</b> there: drag tiles and whole groups around, make them wider, hide or rename them — on every page.",
    "Tipp: Uhr antippen": "Tip: tap the clock", "Zeigen": "Show me", "Verstanden": "Got it",
    "Design und Hell/Dunkel für dieses Gerät.": "Design and light/dark for this device.",
    "Design, Hell/Dunkel und <b>Kacheln bearbeiten</b>: Kacheln und Gruppen per Ziehen anordnen, Breite, ausblenden, umbenennen.":
      "Design, light/dark and <b>Edit tiles</b>: drag tiles and groups around, change width, hide, rename.",
    "ziehen, Gruppen anordnen, ausblenden": "drag, arrange groups, hide",
    "<b>Livebilder am Wandmonitor:</b> Browser-Cache begrenzen, z. B. Chromium mit <code>--disk-cache-size=67108864</code> (64 MB) starten.":
      "<b>Live video on the wall display:</b> limit the browser cache, e.g. start Chromium with <code>--disk-cache-size=67108864</code> (64 MB).",
    "Ändern kannst du alles später über <b>Dashboard bearbeiten</b>; „Kontrolle übernehmen“ macht daraus ein normales, frei bearbeitbares Dashboard (dann ohne automatische Aktualisierung).":
      "You can change everything later via <b>Edit dashboard</b>; “Take control” turns it into a normal, freely editable dashboard (then without automatic updates).",
    // Direkt auf der Kachel bearbeiten
    "Nur Administratoren können das Dashboard ändern.": "Only administrators can change the dashboard.",
    "Dieses Dashboard ist keine Nullglow-Vorlage.": "This dashboard is not a Nullglow dashboard.",
    "Antippen: bearbeiten · Halten und ziehen: verschieben": "Tap: edit · Hold and drag: move",
    "{n}× geändert · noch nicht gespeichert": "{n} changes · not saved yet", "Kacheln": "Tiles", "Gruppen": "Groups", "Uhr": "Clock",
    "Ziehen: verschieben · Antippen: Breite, ausblenden": "Drag: move · Tap: width, hide", "Gruppe auf der Übersicht": "Group on the overview",
    "Gruppe ausblenden": "Hide group", "Wetter als eigene Gruppe": "Weather as its own group", "Wetter zurück zur Uhr": "Weather back to the clock",
    "Medien als eigene Gruppe": "Media as its own group",
    "Alle Lichter": "All lights", "Gruppe auf dieser Seite": "Group on this page", "Grundriss": "Floor plan", "Statistik": "Statistics", "Monatsbilanz": "Monthly balance", "Leistung 24 h": "Power 24 h",
    "An": "On", "Auto": "Auto", "Bei der Uhr": "With the clock", "Eigene Gruppe": "Own group", "Musik & TV": "Music & TV", "Unter dem Wetter": "Under the weather", "Darstellung": "Layout", "Je Raum": "Per room", "Raum antippen": "Tap a room", "An/aus": "On/off", "Raum-Pop-up": "Room pop-up", "Temperatur-Verlauf": "Temperature history", "Zusammen": "Combined", "Karte „Wo sind alle?“": "Map “Where is everyone?”", "Hinweis-Leiste": "Hint bar", "Oben": "Top", "Schwebend": "Floating", "Mehr (Geräte, Räume, Energie …): Dashboard bearbeiten → Assistent": "More (devices, rooms, energy …): edit dashboard → wizard", "Licht auf der Übersicht ({n} Räume)": "Lights on the overview ({n} rooms)",
    "Zusammengefasst = eine Kachel mit Balken je Raum und „Aus“, Antippen öffnet alle Räume nach Etage": "Combined = one tile with a bar per room and “Off”, tap opens all rooms by floor",
    "Je Raum eine Kachel (Standard)": "One tile per room (default)", "Medien zurück zur Uhr": "Media back to the clock",
    "Ausgeblendete Gruppen": "Hidden groups", "Anzeigen": "Show", "Verwerfen": "Discard", "Speichere …": "Saving …", "Fertig": "Done", "Umbenennen": "Rename", "Originalname": "Original name",
    "Raum · Änderung gilt überall im Dashboard": "Room · change applies everywhere in the dashboard",
    "Früher": "Earlier", "Später": "Later", "Raum ausblenden": "Hide room", "Ausblenden": "Hide", "Abbrechen": "Cancel", "Schließen": "Close",
    "Kacheln bearbeiten": "Edit tiles", "umbenennen, verschieben, ausblenden": "rename, move, hide",
    "8 · Direkt bearbeitet": "8 · Edited on the tiles", "{a} Namen · {b} ausgeblendet": "{a} names · {b} hidden", "nichts": "nothing",
    "Auf dem Dashboard: <b>Uhr antippen → Kacheln bearbeiten</b> (nur Administratoren). Kachel antippen: umbenennen, ausblenden; halten und ziehen: verschieben. Namen gelten nur in diesem Dashboard.":
      "On the dashboard: <b>tap the clock → Edit tiles</b> (administrators only). Tap a tile: rename, hide; hold and drag: move. Names only apply in this dashboard.",
    "Ausgeblendete Kacheln": "Hidden tiles", "entfernen = wieder anzeigen": "remove = show again",
    "Reihenfolge der Kacheln zurücksetzen": "Reset tile order",
    // Medien
    "Medien": "Media", "Läuft gerade": "Now playing", "Alle Player": "All players", "{n} Medien-Player": "{n} media players", "Medien-Karte fehlt": "media card missing",
    "Musik/TV auf der Übersicht, solange etwas läuft": "Music/TV on the overview while something is playing",
    "mit Cover — die Karte färbt sich in den Farben des Covers": "with cover art — the card takes on the colors of the cover",
    "Medien-Player": "Media players", "leer = alle (Seite „Medien“ und Übersicht)": "empty = all (“Media” page and overview)",
    // Hinweise
    "7 · Hinweise": "7 · Hints", "aus": "off", "schwebend": "floating", "oben auf der Übersicht": "top of the overview",
    "Eine Leiste, die nur erscheint, wenn etwas zu tun ist: Fenster offen bei Regen, Müll morgen, Akkus schwach, Geräte offline, Updates, niemand zu Hause aber Licht an. Das × an einem Hinweis blendet ihn für einzelne Geräte aus — hier unter „Nie warnen für“ wieder entfernen.":
      "A bar that only appears when something needs attention: windows open while it rains, bins tomorrow, low batteries, devices offline, updates, nobody home but lights on. The × on a hint hides it for single devices — remove them again here under “Never warn for”.",
    "Regen & offene Fenster": "Rain & open windows", "Müll heute/morgen": "Bins today/tomorrow", "Akkus schwach": "Low batteries",
    "Geräte offline": "Devices offline", "Updates verfügbar": "Updates available", "Niemand zu Hause, Licht an / Tür offen": "Nobody home, lights on / door open",
    "Anzeige": "Display", "Oben auf der Übersicht (Standard)": "Top of the overview (default)",
    "Schwebend über der Navigation, auf jeder Seite (Wandmonitor)": "Floating above the navigation on every page (wall display)", "Aus": "Off",
    "Akku-Warnung unter (%)": "Battery warning below (%)", "Müll-Kalender (jeder Termin zählt)": "Waste calendar (every event counts)",
    "leer = automatisch: Waste Collection Schedule, sonst Stichworte (Restmüll, Gelbe Tonne, Papier, Bio …) in allen Kalendern":
      "empty = automatic: Waste Collection Schedule, otherwise keywords (waste, recycling, paper, bio …) in all calendars",
    "Weitere Müll-Stichworte": "Extra waste keywords", "z. B. Grünschnitt, Wertstoffhof": "e.g. green waste, recycling centre",
    "Nie warnen für": "Never warn for", "z. B. Geräte, die immer wenig Akku melden": "e.g. devices that always report a low battery",
    "Auf diesem Gerät zusätzlich ausgeblendet: {n}": "Additionally hidden on this device: {n}", "zurückholen": "restore",
  };
  let ngH = null;   // zuletzt bekanntes hass (generate/Editor setzen es) — Sprache für t()
  const ngLang = () => (String(ngH?.locale?.language || ngH?.language || document.querySelector("home-assistant")?.hass?.locale?.language || "de").toLowerCase().startsWith("de") ? "de" : "en");
  const t = (s, v) => { let o = ngLang() === "de" ? s : (EN[s] ?? s); if (v) for (const [k, x] of Object.entries(v)) o = o.split(`{${k}}`).join(String(x)); return o; };
  const numLoc = () => (ngLang() === "de" ? "de-DE" : (ngH?.locale?.language || "en"));
  // Jinja: Dezimalkomma bzw. deutsche Tausenderpunkte nur auf Deutsch (Englisch behält Punkt/Komma von Python)
  const dec = () => (ngLang() === "de" ? " | replace('.', ',')" : "");
  const kSep = () => (ngLang() === "de" ? ".replace(',', 'X').replace('.', ',').replace('X', '.')" : "");

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
  const num1 = (id) => `{% set x = states('${id}') %}{{ ('%.1f' | format(x | float))${dec()} if is_number(x) else '–' }}`;
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
    const hiddenE = new Set(cfg.hidden || []);   // direkt auf der Kachel ausgeblendet
    const visible = (id) => {
      const e = ents[id];
      if (!st[id] || hiddenE.has(id) || (e && (e.hidden || e.entity_category))) return false;
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
      const contacts = mine.filter((id) => DOMAIN(id) === "binary_sensor" && ["window", "door", "opening"].includes(dc(id)));
      const light = o.light || (groups[0] || (single.length === 1 ? single[0] : null));
      return {
        id: a.area_id, name: o.name || (short ? shortArea(a.name, fl?.name) : a.name), custom: !!o.name, icon: o.icon || areaIcon(a),
        hide: !!o.hide, hash: `#${slug(a.name)}`, floor: fl ? { id: fl.floor_id, name: fl.name, level: fl.level ?? 0, icon: fl.icon } : null,
        lights: single.length ? single : groups, light, climate,
        temperature: o.temperature || temps[0] || null, humidity: o.humidity || hums[0] || null,
        auto: { light: groups[0] || (single.length === 1 ? single[0] : null), temperature: temps[0] || null, humidity: hums[0] || null },
        covers, contacts, scenes: mine.filter((id) => DOMAIN(id) === "scene"), areaName: a.name,
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
    const pick = (domain, list) => (list && list.length ? list.filter((id) => st[id] && !hiddenE.has(id)) : ids.filter((id) => DOMAIN(id) === domain));
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
      media: pick("media_player", cfg.media_players),
      vacuums: ids.filter((id) => DOMAIN(id) === "vacuum"),
      mowers: ids.filter((id) => DOMAIN(id) === "lawn_mower"),
      locks: ids.filter((id) => DOMAIN(id) === "lock"),
      garages: ids.filter((id) => DOMAIN(id) === "cover" && ["garage", "gate"].includes(dc(id))),
      lightsAll: ids.filter((id) => lightOk(id)),
      sameDevice: onDevice, devName, niceName: (id, extra = []) => niceName(hass, id, [...extra, devName(id)], short),
    };
  }

  // ---------- Bausteine ----------
  // hold = Raum-Pop-up (#hash); tapPopup (Option light_tap: popup) = Antippen öffnet das Pop-up, Halten schaltet
  function lightTile(eid, name, icon, hold, columns = 6, tapPopup = false) {
    const s = `hass.states[${q(eid)}]`;
    const col = `((${s} && ${s}.attributes.rgb_color) || [${WARM}]).join(',')`;
    const on = `(${s} && ${s}.state === 'on')`;
    const pop = hold ? { action: "navigate", navigation_path: hold } : null;
    const tapAct = tapPopup && pop ? pop : { action: "toggle" };
    const holdAct = tapPopup && pop ? { action: "toggle" } : pop || { action: "more-info" };
    return {
      type: "custom:bubble-card", card_type: "button", button_type: "slider", entity: eid, name, ...(icon ? { icon } : {}),
      show_state: true, use_accent_color: true, tap_to_slide: false, slider_live_update: false,
      button_action: { tap_action: tapAct, hold_action: holdAct },
      tap_action: tapAct, hold_action: holdAct,
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
  function roomLightsButton(room, hold, columns = 6, tapPopup = false) {
    const list = q(room.lights);
    const cnt = `${list}.filter((e) => hass.states[e] && hass.states[e].state === 'on').length`;
    const toggle = { action: "perform-action", perform_action: "light.toggle", target: { entity_id: room.lights } };
    const pop = hold ? { action: "navigate", navigation_path: hold } : null;
    const tapAct = tapPopup && pop ? pop : toggle, holdAct = tapPopup && pop ? toggle : pop || { action: "none" };
    return {
      type: "custom:bubble-card", card_type: "button", button_type: "name", name: room.name, icon: room.icon,
      show_state: false,
      tap_action: tapAct,
      button_action: { tap_action: tapAct, hold_action: holdAct },
      hold_action: holdAct,
      grid_options: { columns, rows: 1 },
      styles: [
        `.bubble-button-card-container { border-radius: 20px !important; \${${cnt} ? 'box-shadow: inset 0 0 0 1px rgba(${WARM},.5), 0 0 30px -10px rgba(${WARM},.7) !important; background: rgba(${WARM},.12) !important;' : 'box-shadow: inset 0 0 0 1px var(--ng-line) !important;'} }`,
        `.bubble-icon { \${${cnt} ? 'color: rgb(${WARM}) !important;' : ''} }`,
        `.bubble-name::after { content: '\${(() => { const n = ${cnt}; return n ? ' · ' + n + '${t(" an")}' : '${t(" · aus")}'; })()}'; opacity: .6; font-weight: 400; }`,
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
        { icon: "mdi:arrow-up", name: t("Auf"), show_background: true, tap_action: act("open_cover") },
        { icon: "mdi:stop", name: t("Stopp"), show_background: true, tap_action: act("stop_cover") },
        { icon: "mdi:arrow-down", name: t("Zu"), show_background: true, tap_action: act("close_cover") },
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
    const temp = t ? num1(t) : `{% set x = state_attr('${room.climate[0]}', 'current_temperature') %}{{ ('%.1f' | format(x | float))${dec()} if is_number(x) else '–' }}`;
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
      type: "custom:mushroom-climate-card", entity: eid, name: ac ? t("Klimaanlage") : t("Heizung"), icon: ac ? "mdi:fan" : "mdi:radiator",
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

  // Kamera: live (Stream nur, solange die Karte angezeigt wird) oder Standbild (erneuert sich, Tippen = live)
  const camCard = (c, live, name = true) => ({ type: "picture-entity", entity: c, camera_view: live ? "live" : "auto",
    show_name: name, show_state: false, aspect_ratio: "16:9", tap_action: { action: "more-info" }, grid_options: { columns: "full" } });

  const heading = (text, icon, nav) => ({ type: "heading", heading: text, icon, ...(nav ? { tap_action: { action: "navigate", navigation_path: nav } } : {}) });

  function clockCard(tap) {
    const jl = (a) => `[${a.map((x) => `'${t(x)}'`).join(",")}]`;   // Jinja-Liste, übersetzt
    return {
      type: "custom:mushroom-template-card",
      primary: "{{ now().strftime('%H:%M') }}",
      secondary: `{%- set tage = ${jl(["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"])} -%}\n`
        + `{%- set monate = ${jl(["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"])} -%}\n`
        + "{%- set h = now().hour -%}\n"
        + `{{ tage[now().weekday()] }} · ${ngLang() === "de" ? "{{ now().day }}. {{ monate[now().month - 1] }}" : "{{ monate[now().month - 1] }} {{ now().day }}"}`
        + ` · {{ '${t("Gute Nacht")}' if h < 5 else ('${t("Guten Morgen")}' if h < 11 else ('${t("Hallo")}' if h < 18 else '${t("Guten Abend")}')) }}`,
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
      language: ngLang(), time_24h: true, show_location: false, show_end_time: false, filter_duplicates: true,
      background_color: "transparent", accent_color: "var(--ng-acc)", vertical_line_width: "2px", day_spacing: "4px", event_spacing: "2px",
      weekday_font_size: "11px", weekday_color: "var(--ng-txt-dim)", day_font_size: "20px", day_color: "var(--ng-txt)",
      month_font_size: "10px", month_color: "var(--ng-txt-mute)", today_weekday_color: "var(--ng-acc)", today_day_color: "var(--ng-acc)",
      today_month_color: "var(--ng-acc)", event_font_size: "13px", event_color: "var(--ng-txt)", time_font_size: "11px",
      time_color: "var(--ng-txt-dim)", time_icon_size: "12px", empty_day_color: "var(--ng-txt-mute)", day_separator_width: "1px",
      day_separator_color: "var(--ng-line)", refresh_interval: 5, days_to_show: days, compact_events_to_show: 4,
      ...(nav ? { tap_action: { action: "navigate", navigation_path: nav } } : {}), grid_options: { columns: 12 },
    };
  }

  const LIGHTS_ON = () => "{%- set ns = namespace(n=0) -%}\n{%- for s in states.light if s.state == 'on' and '_segment_' not in s.entity_id\n"
    + "     and not s.attributes.get('is_hue_group') and s.attributes.get('entity_id') is none -%}\n{%- set ns.n = ns.n + 1 -%}\n{%- endfor -%}\n" + t("{{ ns.n }} Lichter an");
  const allOff = () => ({
    type: "custom:mushroom-template-card", primary: t("Alles aus"), secondary: LIGHTS_ON(), icon: "mdi:lightbulb-group-off", icon_color: "red",
    tap_action: { action: "perform-action", perform_action: "light.turn_off", target: { entity_id: "all" },
      confirmation: { text: t("Wirklich alle Lichter ausschalten?") } },
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
    { key: "medien", title: "Medien", icon: "mdi:play-circle-outline" },
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
      medien: inv.media.length > 0 && has("nullglow-media-card"),
      sauger: inv.vacuums.length > 0,
      maeher: inv.mowers.length > 0,
    };
  }

  // ── Nav-Dock (tools/build-nav-dock.py überträgt diesen Block in die Kiosk-Navigationen) ──
  // Navigation als Glas-Dock: eine Glasleiste, Knöpfe ohne Rahmen, aktuelle Seite als Akzent-Pille. Steht in den Bubble-styles
  // der Karte (sofort beim ersten Zeichnen da; das Theme per card-mod kommt einen Moment später -> altes Aussehen blitzte auf).
  // Knöpfe als Flex-Reihe statt Bubbles berechneter Positionen, Bubbles 1-s-Übergänge aus (sonst gleiten sie zusammen).
  const NAV_DOCK = `.horizontal-buttons-stack-container { display: flex !important; gap: 6px; width: fit-content !important; margin: 0 auto; }
.bubble-button { position: relative !important; transform: none !important; left: auto !important; flex: none; animation: none !important; transition: none !important; }
.bubble-background { background: transparent !important; }
.bubble-background-color { border: none !important; transition: none !important; }
.bubble-icon, .bubble-name { color: var(--ng-txt-dim, var(--secondary-text-color)) !important; }
.bubble-button.highlight .bubble-background-color { background: var(--ng-acc, var(--primary-color)) !important; box-shadow: 0 0 22px -4px rgba(var(--rgb-ng-acc, 124, 255, 178), calc(.7 * var(--ng-glow-k, 1))); }
.bubble-button.highlight .bubble-icon, .bubble-button.highlight .bubble-name { color: var(--ng-acc-ink, #fff) !important; }
.horizontal-buttons-stack-container::before { content: ""; position: absolute; inset: 0; border-radius: 999px; pointer-events: none; background: linear-gradient(var(--ng-glass-2, rgba(255, 255, 255, .06)), var(--ng-glass-2, rgba(255, 255, 255, .06))), rgba(var(--rgb-ng-bg, 10, 14, 18), .78); backdrop-filter: blur(18px) saturate(1.4); -webkit-backdrop-filter: blur(18px) saturate(1.4); box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255, 255, 255, .1)), 0 12px 40px -12px rgba(0, 0, 0, .6); }
@media (min-width: 600px) { .card-content { overflow: visible !important; } .horizontal-buttons-stack-container::before { inset: -6px; } }
`;
  // ── Nav-Dock Ende ──
  function navSection(views, base, extra = []) {
    // ab 600 px volle Breite (Bubble begrenzt sonst unter 871 px wie am Handy); reicht der Platz nicht für alle Namen
    // (hochkant, Seitenleiste offen), nur Symbole — so passen alle Knöpfe ohne Wischen. rise_animation: aus — sonst fährt die
    // Leiste bei jeder neu geöffneten Seite von unten ins Bild.
    const nav = { type: "custom:bubble-card", card_type: "horizontal-buttons-stack", highlight_current_view: true, hide_gradient: true, rise_animation: false,
      styles: "@media (min-width: 600px) { .card-content { max-width: 1400px !important; } }\n"
        + ".card-content { container: ngnav / inline-size; }\n"
        + `@container ngnav (max-width: ${views.length * 132}px) { .bubble-name { display: none !important; } }\n` + NAV_DOCK };
    views.forEach((v, i) => {
      nav[`${i + 1}_name`] = t(v.title); nav[`${i + 1}_icon`] = v.icon; nav[`${i + 1}_link`] = `${base}/${v.key}`;
    });
    return { type: "grid", column_span: 4, cards: [nav, ...extra] };
  }

  function roomPopup(room, hass, inv) {
    const cards = [];
    if (room.temperature || room.climate.length) cards.push(roomTempCard(room, null, 30));
    room.climate.forEach((c) => cards.push(climateCard(c, hass)));
    if (room.light && room.lights.length > 1) cards.push(lightTile(room.light, t("{n} · alle", { n: room.name }), room.icon, null, 12));
    room.lights.forEach((l) => cards.push(lightTile(l, inv.niceName(l, [room.name, room.areaName]), null, null, 12)));
    room.covers.forEach((c) => cards.push(coverTile(c, inv.niceName(c, [room.name, room.areaName]) || t("Rollladen"))));
    room.contacts.forEach((c, i) => cards.push(contactTile(c, contactName(inv, room, c, i), hass, 6)));
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
      if (!groups.has(k)) groups.set(k, { name: r.floor ? r.floor.name : t("Weitere"), icon: r.floor?.icon, level: r.floor ? r.floor.level : 99, rooms: [] });
      groups.get(k).rooms.push(r);
    });
    const rank = (l) => (l < 0 ? 100 - l : l);   // EG, OG, DG …, dann Keller
    const gs = [...groups.values()].sort((a, b) => rank(a.level) - rank(b.level));
    const cards = [];
    gs.forEach((g) => {
      const ents = g.rooms.flatMap((r) => r.covers);
      cards.push({ type: "custom:nullglow-covers-card", entities: ents, title: gs.length === 1 ? t("Alle Rollläden") : g.name,
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
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#rolllaeden", name: t("Rollläden"), icon: "mdi:window-shutter",
      width_desktop: "980px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 180000, cards };
  }

  function lightsPopup(inv, cfg) {
    const groups = new Map();
    inv.shown.filter((r) => r.lights.length).forEach((r) => {
      const k = r.floor ? r.floor.id : "_";
      if (!groups.has(k)) groups.set(k, { name: r.floor ? r.floor.name : t("Weitere"), icon: r.floor?.icon, level: r.floor ? r.floor.level : 99, rooms: [] });
      groups.get(k).rooms.push(r);
    });
    const rank = (l) => (l < 0 ? 100 - l : l);   // EG, OG, DG …, dann Keller
    const gs = [...groups.values()].sort((a, b) => rank(a.level) - rank(b.level));
    const tapPop = cfg.light_tap === "popup", cards = [];
    gs.forEach((g) => {
      cards.push({ type: "custom:nullglow-lights-card", rooms: g.rooms.map((r) => ({ name: r.name, lights: r.lights })),
        title: gs.length === 1 ? t("Alle Lichter") : g.name,
        icon: g.icon || (g.level < 0 ? "mdi:home-floor-negative-1" : g.level <= 3 ? `mdi:home-floor-${g.level}` : "mdi:home-roof"),
        grid_options: { columns: 12, rows: 2 } });
      const tiles = g.rooms.map((r) => (r.light ? lightTile(r.light, r.name, r.icon, r.hash, 4, tapPop) : roomLightsButton(r, r.hash, 4, tapPop)));
      cards.push({ type: "grid", columns: 3, square: false, cards: tiles,
        card_mod: { style: "#root { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important; }\n" } });
    });
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#lichter", name: t("Licht"), icon: "mdi:lightbulb-group",
      width_desktop: "980px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 180000, cards };
  }

  // Fenster-/Türkontakt: nur Anzeige, offen = Amber (Status)
  const CONTACT_WORD = /^(?:fenster(?:kontakt)?|t(?:ü|ue)r(?:kontakt)?|kontakt|window|door|contact|sensor)\b[\s:·|/–—-]*/i;
  function contactTile(eid, name, hass, columns = 6) {
    const door = hass.states[eid]?.attributes?.device_class === "door";
    return { type: "custom:mushroom-template-card", entity: eid, primary: name,
      secondary: `{{ '${t("offen")}' if is_state(entity, 'on') else ('${t("zu")}' if is_state(entity, 'off') else '${t("nicht erreichbar")}') }}`,
      icon: door ? "{{ 'mdi:door-open' if is_state(entity, 'on') else 'mdi:door-closed' }}"
        : "{{ 'mdi:window-open-variant' if is_state(entity, 'on') else 'mdi:window-closed-variant' }}",
      icon_color: "{{ 'amber' if is_state(entity, 'on') else 'grey' }}", tap_action: { action: "more-info" },
      grid_options: { columns, rows: 1 },
      card_mod: { style: "ha-card { --ng-state: {{ 'warn' if is_state(config.entity, 'on') else ('idle' if states(config.entity) in ['unavailable', 'unknown'] else 'off') }}; }\n" } };
  }
  // „Küche · links“ bzw. „Küche“, wenn der Raum nur einen Kontakt hat
  const contactName = (inv, r, c, i) => {
    const n = inv.niceName(c, [r.name, r.areaName]).replace(CONTACT_WORD, "").trim();
    const m = n.replace(new RegExp(`^${escRe(r.name)}\\b[\\s:·|/–—-]*`, "i"), "").trim();
    return r.contacts.length === 1 ? r.name : `${r.name} · ${m && m.toLowerCase() !== r.name.toLowerCase() ? m : i + 1}`;
  };
  function contactsPopup(inv, hass) {
    const groups = new Map();
    inv.shown.filter((r) => r.contacts.length).forEach((r) => {
      const k = r.floor ? r.floor.id : "_";
      if (!groups.has(k)) groups.set(k, { name: r.floor ? r.floor.name : t("Weitere"), level: r.floor ? r.floor.level : 99, rooms: [] });
      groups.get(k).rooms.push(r);
    });
    const rank = (l) => (l < 0 ? 100 - l : l);
    const gs = [...groups.values()].sort((a, b) => rank(a.level) - rank(b.level));
    const cards = [];
    gs.forEach((g) => {
      const ents = g.rooms.flatMap((r) => r.contacts);
      cards.push({ type: "custom:nullglow-contacts-card", entities: ents, title: gs.length === 1 ? t("Alle Fenster & Türen") : g.name,
        names: Object.fromEntries(g.rooms.flatMap((r) => r.contacts.map((c, i) => [c, contactName(inv, r, c, i)]))),
        grid_options: { columns: 12, rows: 2 } });
      cards.push({ type: "grid", columns: 3, square: false,
        cards: g.rooms.flatMap((r) => r.contacts.map((c, i) => contactTile(c, contactName(inv, r, c, i), hass, 4))),
        card_mod: { style: "#root { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important; }\n" } });
    });
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#fenster", name: t("Fenster & Türen"), icon: "mdi:window-closed-variant",
      width_desktop: "980px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 180000, cards };
  }

  // Uhr antippen: Design + Hell/Dunkel für dieses Gerät (nullglow-design-card, Browser-Speicher)
  function designPopup(base, design, mode, admin) {
    const go = { action: "navigate", navigation_path: "#ng-bearbeiten" };
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#design", name: "Design", icon: "mdi:palette",
      width_desktop: "900px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 60000,
      cards: [{ type: "custom:nullglow-design-card", storage: "local", dashboard: base, default_design: design, default_mode: mode },
        ...(admin ? [{ type: "custom:bubble-card", card_type: "button", button_type: "name", name: t("Kacheln bearbeiten"), icon: "mdi:pencil-outline",
          show_state: false, tap_action: go, button_action: { tap_action: go }, grid_options: { columns: 12, rows: 1 },
          styles: ".bubble-button-card-container { border-radius: 20px !important; box-shadow: inset 0 0 0 1.5px var(--ng-acc), 0 0 22px -8px var(--ng-acc) !important; }\n"
            + ".bubble-icon { color: var(--ng-acc) !important; }\n"
            + ".bubble-name::after { content: '  ·  " + t("ziehen, Gruppen anordnen, ausblenden") + "'; opacity: .6; font-weight: 400; }\n" }] : [])] };
  }

  function radarPopup() {
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#regenradar", name: t("Regenradar"), icon: "mdi:weather-pouring",
      width_desktop: "1100px", bg_opacity: 92, auto_close: 120000, close_by_clicking_outside: true,
      cards: [{ type: "custom:nullglow-radar-card", zoom: 8, past: 90, future: 120, step: 10, height: 430 }] };
  }

  // Karte im Design: Farbton der Karte durch die Akzentfarbe ersetzt (mix-blend-mode: color, Helligkeit bleibt) — Fotos/Knöpfe bleiben farbig.
  // HA zeichnet die Karte als MapLibre-Canvas in der Tile-Pane; die Farbschicht liegt darüber (z-index). Kein Filter auf
  // der Pane (würde die Farbschicht mit entfärben).
  const MAP_TINT = `.leaflet-tile-pane::after { content: ""; position: absolute; left: -50000px; top: -50000px; width: 100000px; height: 100000px;
  background: rgb(var(--rgb-ng-acc, 124, 255, 178)); mix-blend-mode: color; opacity: .75; pointer-events: none; z-index: 1000; }
`;

  // ---------- Klingel: Kamera groß (optional) — doorbell: { enabled, event, camera } ----------
  // Klingel-Sensor: event.* mit device_class doorbell (Ring, Reolink, UniFi …), binary_sensor „…ding/doorbell/klingel“
  // oder Taster-Sensor „…doorbell/klingel…_action“ (Zigbee2MQTT); von Hand wählbar: jedes event/binary_sensor + sensor.*_action
  const DOOR_ACTION = (id) => DOMAIN(id) === "sensor" && /_action$/.test(id);
  function doorbellAuto(hass, inv) {
    const ids = Object.keys(hass.states);
    const event = ids.find((id) => DOMAIN(id) === "event" && hass.states[id].attributes.device_class === "doorbell")
      || ids.find((id) => DOMAIN(id) === "binary_sensor" && /(_ding|doorbell|klingel)/i.test(id) && hass.states[id].attributes.device_class !== "motion")
      || ids.find((id) => DOOR_ACTION(id) && /(doorbell|klingel)/i.test(id)) || null;
    return { event, camera: event ? inv.sameDevice(event, (x) => DOMAIN(x) === "camera")[0] || null : null };
  }
  function doorbellCfg(cfg, hass, inv) {
    if (!cfg.doorbell?.enabled) return null;
    const auto = doorbellAuto(hass, inv);
    const event = cfg.doorbell.event || auto.event, camera = cfg.doorbell.camera || auto.camera;
    return event && camera && hass.states[event] && hass.states[camera] ? { event, camera } : null;
  }
  function doorbellPopup(d) {
    return { type: "custom:bubble-card", card_type: "pop-up", hash: "#klingel", name: t("Es hat geklingelt"), icon: "mdi:doorbell-video",
      width_desktop: "100%", margin_top_desktop: "0px", bg_opacity: 94, auto_close: 120000, close_by_clicking_outside: true,
      cards: [{ type: "picture-entity", entity: d.camera, camera_view: "live", show_name: false, show_state: false, aspect_ratio: "16:9",
        tap_action: { action: "none" },
        card_mod: { style: "ha-card { max-width: calc((100vh - 220px) * 16 / 9); margin: 0 auto; }\n" } }] };
  }
  // Wächter: ein Abo je Browser (nur die Klingel-Entitäten); klingelt es, während ein Nullglow-Dashboard offen ist -> #klingel
  function doorbellWatch(hass, base, d) {
    const W = (window.__ngDoorbell = window.__ngDoorbell || { dash: {}, last: {} });
    W.dash[base] = d;
    W.feed = (m) => {   // Nachricht von subscribe_entities (auch zum Testen aufrufbar)
      Object.entries(m.a || {}).forEach(([id, v]) => { W.last[id] = v.s; });   // Anfangszustand: nie auslösen
      Object.entries(m.c || {}).forEach(([id, v]) => {
        const s = v["+"]?.s, prev = W.last[id];
        if (s === undefined) return;
        W.last[id] = s;
        const cur = W.dash["/" + (location.pathname.split("/")[1] || "lovelace")];
        if (!cur || cur.event !== id || prev === undefined || prev === s || [prev, s].some((x) => x === "unavailable" || x === "unknown")) return;
        if (DOMAIN(id) === "binary_sensor" && s !== "on") return;                  // Klingel an
        if (DOMAIN(id) === "sensor" && (!s || /^none$/i.test(s))) return;          // Taster: jeder neue Wert = gedrückt (Rücksetzen auf leer nicht)
        history.pushState(null, "", location.pathname + location.search + "#klingel");
        window.dispatchEvent(new Event("location-changed"));
      });
    };
    const ids = [...new Set(Object.values(W.dash).filter(Boolean).map((x) => x.event))].sort();
    if (!hass.connection || ids.join() === W.ids) return;
    W.ids = ids.join();
    Promise.resolve(W.unsub).then((u) => typeof u === "function" && u()).catch(() => {});
    W.unsub = ids.length ? hass.connection.subscribeMessage((m) => W.feed(m), { type: "subscribe_entities", entity_ids: ids }) : null;
  }

  // Gruppen der Übersicht: Schlüssel, Name, Symbol, Standardbreite (Spalten) — Reihenfolge = Standard
  const HOME_PARTS = [
    { key: "uhr", name: "Uhr & Wetter", icon: "mdi:clock-outline", width: 1 },
    { key: "wetter", name: "Wetter", icon: "mdi:weather-partly-cloudy", width: 1 },   // nur mit split_weather (sonst in „uhr“)
    { key: "media", name: "Medien", icon: "mdi:play-circle-outline", width: 1 },      // nur mit split_media (sonst in „uhr“)
    { key: "energie", name: "Energie", icon: "mdi:lightning-bolt", width: 2 },
    { key: "kameras", name: "Kameras", icon: "mdi:cctv", width: 1 },
    { key: "licht", name: "Licht", icon: "mdi:lightbulb-group", width: 1 },
    { key: "klima", name: "Klima", icon: "mdi:thermometer", width: 1 },
    { key: "rolllaeden", name: "Rollläden", icon: "mdi:window-shutter", width: 1 },
    { key: "zuhause", name: "Zuhause", icon: "mdi:home-account", width: 1 },
    { key: "termine", name: "Termine", icon: "mdi:calendar-heart", width: 1 },
  ];
  // home_layout: { order: [key…], width: {key: 1–4}, hide: [key…], cam_cols: 1–3 } — nur Abweichungen vom Standard
  function applyHomeLayout(parts, layout) {
    const L = layout || {}, order = L.order || [], hide = new Set(L.hide || []), width = L.width || {};
    const rank = (k) => { const i = order.indexOf(k); return i === -1 ? 100 + HOME_PARTS.findIndex((p) => p.key === k) : i; };
    return parts.filter((p) => !hide.has(p.key)).sort((a, b) => rank(a.key) - rank(b.key)).map((p) => {
      const w = Math.min(4, Math.max(1, Math.round(+width[p.key] || HOME_PARTS.find((h) => h.key === p.key).width)));
      const sec = { ...p.sec };
      if (w > 1) sec.column_span = w; else delete sec.column_span;
      // Kameras nebeneinander: eine Section über w Spalten hat 12·w Rasterspalten
      const cc = Math.min(3, Math.max(1, Math.round(+L.cam_cols || 1)));
      if (p.key === "kameras" && cc > 1) sec.cards = sec.cards.map((c) => (c.type === "picture-entity" ? { ...c, grid_options: { columns: (12 * w) / cc } } : c));
      if (sec.cards?.length) sec.cards = [{ ...sec.cards[0], view_layout: { ...(sec.cards[0].view_layout || {}), ng_group: p.key } }, ...sec.cards.slice(1)];
      return sec;
    });
  }
  // Gruppen auf den anderen Seiten (Übersicht hat home_layout): jede Section ist eine Gruppe. Schlüssel aus dem Inhalt
  // (Raum, sonst Kartentyp + erste Entität — sprachunabhängig), Name aus der Überschrift. Marker an der ersten Karte wie auf der Übersicht.
  const GROUP_TYPE_NAMES = { "nullglow-power-card": "Leistung 24 h", "nullglow-month-card": "Monatsbilanz", "nullglow-flow-card": "Energiefluss",
    "nullglow-media-card": "Medien", "nullglow-mower-map-card": "Garten", "nullglow-mower-stats-card": "Statistik", "calendar": "Kalender",
    "calendar-card-pro": "Termine", "nullglow-floorplan-card": "Grundriss" };
  function applyViewLayout(view, sections, L, hass) {
    L = L || {};
    const used = new Set(), order = L.order || [], hide = new Set(L.hide || []), width = L.width || {};
    const names = ((window.__ngGroupNames = window.__ngGroupNames || {})[view] = {});
    const items = sections.map((sec, i) => {
      const cards = Array.isArray(sec.cards) ? sec.cards : [];
      if (!cards.length) return { sec, i };
      const room = cards.map((c) => c.view_layout?.ng_edit).find((m) => m?.kind === "room");
      const h = cards.find((c) => c.type === "heading");
      const c0 = cards.find((c) => c.type !== "heading") || cards[0], inner = c0.card || c0;   // Verlauf-Hülle: Karte steckt innen
      const e0 = inner.entity || (Array.isArray(inner.entities) ? inner.entities[0] : null), ent = e0?.entity || e0;
      let key = room ? room.id : String(inner.type || "karte").replace("custom:", "").replace("nullglow-", "") + (typeof ent === "string" ? ":" + ent : "");
      for (let n = 2; used.has(key); n++) key = key.replace(/#\d+$/, "") + "#" + n;
      used.add(key);
      const name = String(h?.heading || (typeof inner.name === "string" && !/[{]/.test(inner.name) ? inner.name : "")
        || (typeof ent === "string" && hass.states[ent]?.attributes?.friendly_name) || inner.title
        || t(GROUP_TYPE_NAMES[String(inner.type || "").replace("custom:", "")] || "") || key);
      names[key] = name;
      return { sec, i, key, name, w0: sec.column_span || 1 };
    });
    const first = items.findIndex((x) => x.key);
    const rank = (x) => (!x.key ? (x.i < first ? -1e6 + x.i : 1e6 + x.i) : order.includes(x.key) ? order.indexOf(x.key) : 1000 + x.i);
    return items.filter((x) => !x.key || !hide.has(x.key)).sort((a, b) => rank(a) - rank(b)).map((x) => {
      if (!x.key) return x.sec;
      const sec = { ...x.sec }, w = Math.min(4, Math.max(1, Math.round(+width[x.key] || x.w0)));
      if (w > 1) sec.column_span = w; else delete sec.column_span;
      sec.cards = [{ ...sec.cards[0], view_layout: { ...(sec.cards[0].view_layout || {}), ng_group: x.key, ng_view: view, ng_name: x.name, ng_w: x.w0 } },
        ...sec.cards.slice(1)];
      return sec;
    });
  }
  // Nur Abweichungen vom Standard behalten (Assistent und Bearbeiten-Modus)
  function tidyLayout(n) {
    if (n.order && n.order.join() === HOME_PARTS.map((p) => p.key).filter((k) => n.order.includes(k)).join()) delete n.order;
    for (const [k, w] of Object.entries(n.width || {})) if (+w === HOME_PARTS.find((p) => p.key === k)?.width) delete n.width[k];
    if (n.width && !Object.keys(n.width).length) delete n.width;
    if (n.hide && !n.hide.length) delete n.hide;
    if (!(+n.cam_cols > 1)) delete n.cam_cols;
    for (const [flag, key] of SPLITS) {
      if (n[flag]) continue;   // wieder bei der Uhr: Einträge der Gruppe verfallen
      delete n[flag];
      if (n.order) n.order = n.order.filter((k) => k !== key);
      if (n.width) delete n.width[key];
      if (n.hide) n.hide = n.hide.filter((k) => k !== key);
      if (n.order && !n.order.length) delete n.order;
      if (n.width && !Object.keys(n.width).length) delete n.width;
      if (n.hide && !n.hide.length) delete n.hide;
    }
    return n;
  }
  const SPLITS = [["split_weather", "wetter"], ["split_media", "media"]];
  // Wetter/Medien ab-/zurücktrennen: abgetrennt stehen sie direkt hinter der Uhr (bzw. dem Wetter), auch bei eigener Reihenfolge
  function splitPart(n, key, on) {
    const flag = SPLITS.find(([, k]) => k === key)[0];
    if (!on) { delete n[flag]; return tidyLayout(n); }
    n[flag] = true;
    if (n.order && !n.order.includes(key)) {
      const i = Math.max(n.order.indexOf("uhr"), key === "media" ? n.order.indexOf("wetter") : -1);
      n.order.splice(i + 1, 0, key);
    }
    return n;
  }
  const groupName = (key, layout) => t(key === "uhr" && !layout?.split_weather ? "Uhr & Wetter" : key === "uhr" ? "Uhr" : HOME_PARTS.find((p) => p.key === key)?.name || key);

  // Hinweis-Leiste (nullglow-hints-card): hints: { mode: top (Standard) | float | off, rules, battery_threshold, waste, ignore }
  function hintsCard(cfg, base, on, contactsPopup) {
    const h = cfg.hints || {};
    if (h.mode === "off" || !has("nullglow-hints-card")) return null;
    return { type: "custom:nullglow-hints-card", dashboard: base, ...(h.mode === "float" ? { floating: "bottom" } : {}),
      ...(h.rules ? { rules: h.rules } : {}), ...(h.battery_threshold ? { battery_threshold: h.battery_threshold } : {}),
      ...(h.waste ? { waste: h.waste } : {}), ...(h.ignore?.length ? { ignore: h.ignore } : {}),
      tap: { battery: "#wartung", ...(contactsPopup ? { rain: "#fenster" } : {}), ...(on.kalender ? { waste: `${base}/kalender` } : {}) },
      grid_options: { columns: "full", rows: "auto" } };
  }

  // Lücken füllt HA weiter auf (dense): Reihenfolge bleibt, kleine Gruppen rücken ggf. in eine Lücke davor
  function viewHome(inv, energy, base, on, hass, cfg, design) {
    const { parts, extra } = homeParts(inv, energy, base, on, hass, cfg, design);
    const sections = applyHomeLayout(parts, cfg.home_layout);
    // Hinweise oben über die ganze Breite (leer = Karte unsichtbar); schwebend kommt sie auf jede Seite (generate)
    const hc = (cfg.hints || {}).mode !== "float" && hintsCard(cfg, base, on, extra.some((p) => p.hash === "#fenster"));
    return { sections: hc ? [{ type: "grid", column_span: 4, cards: [hc] }, ...sections] : sections, extra };
  }

  function homeParts(inv, energy, base, on, hass, cfg, design) {
    const P = [];
    const S = { push: (key, sec) => P.push({ key, sec }) };
    const withDesign = has("nullglow-design-card");
    const top = [clockCard(withDesign ? "#design" : null)];
    const split = !!(cfg.home_layout?.split_weather && inv.weather), wx = split ? [] : top;
    if (inv.weather) {
      wx.push({ type: "weather-forecast", entity: inv.weather, name: t("Heute"), forecast_type: "daily", show_current: true, show_forecast: true,
        tap_action: { action: "navigate", navigation_path: "#regenradar" },
        card_mod: { style: ".state, .name { white-space: normal !important; }\n" } });
      wx.push({ type: "custom:nullglow-hourly-card", entity: inv.weather, hours: 8 });
    }
    const media = cfg.media_home !== false && inv.media.length && has("nullglow-media-card")
      ? { type: "custom:nullglow-media-card", entities: inv.media, hide_idle: true, size: "compact", grid_options: { columns: 12, rows: 2 } } : null;
    const splitM = !!(media && cfg.home_layout?.split_media);
    if (media && !splitM) top.push(media);
    S.push("uhr", { type: "grid", cards: top });
    if (split) S.push("wetter", { type: "grid", cards: wx });
    if (splitM) S.push("media", { type: "grid", cards: [{ ...media, hide_idle: false, idle: "rest" }] });   // eigene Gruppe: Platz halten, Layout springt nicht
    if (energy) S.push("energie", { type: "grid", cards: [heading(t("Energie"), "mdi:lightning-bolt", on.energie ? `${base}/energie` : null),
      { type: "custom:nullglow-flow-card", height: 388, grid_options: { columns: "full" }, ...energy }] });

    // Live-Kameras: Größe über die Breite der Gruppe, nebeneinander über cam_cols (beides applyHomeLayout)
    const live = (cfg.live_cameras || []).filter((c) => hass.states[c]);
    if (live.length) S.push("kameras", { type: "grid", cards: [heading(t(live.length > 1 ? "Kameras" : "Kamera"), "mdi:cctv", on.kameras ? `${base}/kameras` : null),
      ...live.map((c) => camCard(c, true, live.length > 1))] });

    const lightRooms = inv.shown.filter((r) => r.lights.length);
    const lightsCompact = cfg.lights === "compact" && has("nullglow-lights-card") && lightRooms.length > 0;
    if (lightRooms.length) {
      const cards = [heading(t("Licht"), "mdi:lightbulb-group", on.licht ? `${base}/licht` : null)];
      const tapPop = cfg.light_tap === "popup";   // Standard: Antippen schaltet den Raum an/aus
      if (lightsCompact) cards.push({ type: "custom:nullglow-lights-card", rooms: lightRooms.map((r) => ({ name: r.name, lights: r.lights })),
        title: t("Alle Lichter"), tap: "#lichter", grid_options: { columns: 12, rows: 2 } });   // „Aus“ steckt in der Sammelkachel
      else {
        lightRooms.forEach((r) => cards.push(markRoom(r.light ? lightTile(r.light, r.name, r.icon, r.hash, 6, tapPop) : roomLightsButton(r, r.hash, 6, tapPop), r)));
        cards.push(allOff());
      }
      cards.push({ type: "custom:nullglow-care-card", mode: "summary", tap_hash: "#wartung", battery: { warn: 30, crit: 15 },
        grid_options: { columns: 6, rows: 1 } });
      S.push("licht", { type: "grid", cards });
    }
    const climRooms = inv.shown.filter((r) => r.temperature || r.climate.length);
    if (climRooms.length) {
      const cards = [heading(t("Klima"), "mdi:thermometer", on.klima ? `${base}/klima` : null)];
      // Verlauf 24 h hinter der Kachel (Standard an, climate_graph: false = aus) — nur mit Temperatur-Sensor (Statistik)
      const graph = cfg.climate_graph !== false && has("nullglow-spark-card");
      climRooms.forEach((r) => {
        const t = r.temperature;
        const tile = { type: "custom:mushroom-template-card", entity: t || r.climate[0],
          primary: r.name,
          secondary: t ? `${num1(t)} °C` : `{% set x = state_attr('${r.climate[0]}', 'current_temperature') %}{{ ('%.1f' | format(x | float))${dec()} if is_number(x) else '–' }} °C`,
          icon: r.icon, icon_color: t ? tempColor(t) : "grey",
          tap_action: { action: "navigate", navigation_path: r.hash },
          card_mod: { style: `ha-card { --ng-state: ${heatCool(r.climate)}; }\n` } };
        cards.push(markRoom(graph && t
          ? { type: "custom:nullglow-spark-card", entity: t, color_scale: "room", min_span: 2, grid_options: { columns: 6 }, card: tile }
          : { ...tile, grid_options: { columns: 6 } }, r));
      });
      S.push("klima", { type: "grid", cards });
    }
    const covers = inv.shown.flatMap((r) => r.covers.map((c, i) => [c, r, i]));
    const compact = covers.length && (cfg.covers === "compact" || (cfg.covers !== "list" && covers.length > 6));
    if (compact) S.push("rolllaeden", { type: "grid", cards: [heading(t("Rollläden"), "mdi:window-shutter", "#rolllaeden"),
      { type: "custom:nullglow-covers-card", entities: covers.map(([c]) => c), title: t("Alle Rollläden"), tap: "#rolllaeden", grid_options: { columns: 12, rows: 2 } }] });
    else if (covers.length) S.push("rolllaeden", { type: "grid", cards: [heading(t("Rollläden"), "mdi:window-shutter"), ...covers.map(([c, r, i]) => {
      const n = coverWord(inv.niceName(c, [r.name, r.areaName]), r.name);
      return coverTile(c, r.covers.length === 1 ? r.name : `${r.name} · ${n && n.toLowerCase() !== r.name.toLowerCase() ? n : i + 1}`);
    })] });
    const contacts = cfg.contacts === "off" ? [] : inv.shown.flatMap((r) => r.contacts.map((c, i) => [c, r, i]));
    const cCompact = contacts.length && (cfg.contacts === "compact" || (cfg.contacts !== "list" && contacts.length > 6));
    if (inv.persons.length || inv.locks.length || inv.garages.length || contacts.length) {
      const cards = [heading(t("Zuhause"), "mdi:home-account")];
      inv.persons.forEach((p) => cards.push({ type: "custom:mushroom-person-card", entity: p, icon_type: "entity-picture", grid_options: { columns: 6 } }));
      // optional (person_map: true): Karte „Wo sind alle?“ — nur Personen mit Standort (GPS aus der HA-App)
      const located = inv.persons.filter((p) => hass.states[p]?.attributes?.latitude != null);
      if (cfg.person_map && located.length) cards.push({ type: "map", entities: located, theme_mode: "auto", hours_to_show: 0,
        auto_fit: true, fit_zones: true, default_zoom: 14, grid_options: { columns: 12, rows: 3 },
        ...(cfg.map_tint !== false ? { card_mod: { style: { "ha-map $": MAP_TINT } } } : {}) });
      inv.locks.forEach((l) => cards.push({ type: "tile", entity: l, grid_options: { columns: 6 },
        card_mod: { style: "ha-card { --ng-state: {{ 'warn' if is_state(config.entity, 'unlocked') else 'off' }}; }\n" } }));
      inv.garages.forEach((g) => cards.push({ type: "tile", entity: g, features: [{ type: "cover-open-close" }], grid_options: { columns: 6 } }));
      if (cCompact) cards.push({ type: "custom:nullglow-contacts-card", entities: contacts.map(([c]) => c), tap: "#fenster",
        names: Object.fromEntries(contacts.map(([c, r, i]) => [c, contactName(inv, r, c, i)])), grid_options: { columns: 12, rows: 2 } });
      else contacts.forEach(([c, r, i]) => cards.push(contactTile(c, contactName(inv, r, c, i), hass, 6)));
      S.push("zuhause", { type: "grid", cards });
    }
    if (inv.calendars.length && has("calendar-card-pro"))
      S.push("termine", { type: "grid", cards: [heading(t("Termine"), "mdi:calendar-heart", on.kalender ? `${base}/kalender` : null), calendarPro(inv.calendars, 14, on.kalender ? `${base}/kalender` : null)] });

    const pops = [radarPopup(), { type: "custom:bubble-card", card_type: "pop-up", hash: "#wartung", name: t("Batterien & Wartung"),
      icon: "mdi:battery-heart-variant", width_desktop: "620px", bg_opacity: 92, close_by_clicking_outside: true, auto_close: 120000,
      cards: [{ type: "custom:nullglow-care-card", mode: "full", battery: { warn: 30, crit: 15 } }] }];
    inv.shown.forEach((r) => { const p = roomPopup(r, hass, inv); if (p) pops.push(p); });
    if (compact) pops.push(coversPopup(inv));
    if (lightsCompact) pops.push(lightsPopup(inv, cfg));
    if (cCompact) pops.push(contactsPopup(inv, hass));
    if (withDesign) pops.push(designPopup(base, design, ["dark", "light", "sun"].includes(cfg.mode) ? cfg.mode : "auto", !!hass.user?.is_admin));
    return { parts: P, extra: pops };
  }

  function viewLicht(inv, hass) {
    const S = [];
    inv.shown.filter((r) => r.lights.length).forEach((r) => {
      const cards = [heading(r.name, r.icon)];
      if (r.light && r.lights.length > 1) cards.push(markRoom(lightTile(r.light, t("{n} · alle", { n: r.name }), r.icon, null, 12), r));
      r.lights.forEach((l) => { // lange Namen bekommen die ganze Breite (Bubble lässt sie sonst durchlaufen)
        const n = inv.niceName(l, [r.name, r.areaName]);
        cards.push(lightTile(l, n, null, null, r.lights.length === 1 || n.length > 13 ? 12 : 6));
      });
      cards.push(...sceneButtons(r, inv, hass, 4, 6));
      S.push({ type: "grid", cards });
    });
    S.push({ type: "grid", cards: [heading(t("Alle"), "mdi:lightbulb-group"), { ...allOff(), grid_options: { columns: 12 } }] });
    return { sections: S };
  }

  function viewKlima(inv, hass) {
    const S = [];
    inv.shown.filter((r) => r.temperature || r.climate.length).forEach((r) => {
      const cards = [markRoom(roomTempCard(r), r)];
      climateKinds(hass, r.climate).forEach((c) => cards.push(climateCard(c, hass)));
      S.push({ type: "grid", cards });
    });
    return { sections: S };
  }

  function viewEnergie(energy, hass) {
    const S = [];
    S.push({ type: "grid", column_span: 2, cards: [heading(t("Energiefluss"), "mdi:transmission-tower"),
      { type: "custom:nullglow-flow-card", height: 300, grid_options: { columns: "full" }, ...energy }] });
    const grid = list(energy.grid), solar = list(energy.solar), inv = energy.grid_invert ? -1 : 1;
    const sumJ = (ids, k = 1) => ids.map((id) => `states('${id}') | float(0) * ${k * (/^kW$/i.test(hass.states[id]?.attributes?.unit_of_measurement || "") ? 1000 : 1)}`).join(" + ") || "0";
    const fmtW = `{{ '{:,.0f}'.format(p | abs)${kSep()} }} W`;
    if (grid.length) {
      const P = `{% set p = ${sumJ(grid, inv)}${list(energy.grid_export).length ? " - (" + sumJ(list(energy.grid_export)) + ")" : ""} %}`;
      const cards = [heading(energy.grid_name || t("Netz"), "mdi:transmission-tower"),
        { type: "custom:nullglow-spark-card", entities: grid, min_span: 500, zero_based: true, grid_options: { columns: "full", rows: 3 },
          card: { type: "custom:mushroom-template-card", primary: `${P}${fmtW}`,
            secondary: `${P}${t("NETZ")} · {{ '${t("EINSPEISUNG")}' if p < -5 else '${t("BEZUG")}' }}`, icon: energy.grid_icon || "mdi:transmission-tower",
            icon_color: `${P}{{ 'green' if p < -5 else ('amber' if p >= ${energy.warn_import || 2000} else 'grey') }}`,
            tap_action: { action: "more-info", entity: grid[0] },
            card_mod: { style: `ha-card { --ng-state: ${P}{{ 'on' if p < -50 else ('warn' if p >= ${energy.warn_import || 2000} else 'off') }}; }\n${TILE_TYPO(34)}` } } }];
      if (grid.length > 1) cards.push({ type: "custom:nullglow-bars-card", max: 3680, warn: 2300, crit: 3200,
        rows: grid.map((e, i) => ({ entity: e, name: grid.length === 3 ? `L${i + 1}` : `${i + 1}` })), grid_options: { columns: "full", rows: 2 } });
      S.push({ type: "grid", cards });
    }
    const bat = list(energy.battery), bcharge = list(energy.battery_charge);
    let batCard = null;
    if (bat.length) {
      const soc = energy.battery_soc && hass.states[energy.battery_soc] ? energy.battery_soc : null;
      const B = `{% set b = ${sumJ(bat, energy.battery_invert ? -1 : 1)}${bcharge.length ? " - (" + sumJ(bcharge) + ")" : ""} %}`;
      const Sx = soc ? `{% set s = states('${soc}') | float(0) %}` : "{% set s = none %}";
      const bw = `{{ '{:,.0f}'.format(b | abs)${kSep()} }} W`;
      const icon = energy.battery_icon || `${B}${Sx}{% if s is none %}mdi:home-battery-outline{% else %}{% set l = ((s / 10) | round(0) | int) * 10 %}`
        + "{% if b < -3 %}mdi:battery-charging-{{ [l, 10] | max }}{% elif l >= 100 %}mdi:battery{% elif l <= 0 %}mdi:battery-outline"
        + "{% else %}mdi:battery-{{ l }}{% endif %}{% endif %}";
      // kompakt (eine Kachelreihe) in der Solar-Spalte — ein eigener Abschnitt schöbe die Monatskarte unter die Navigation
      const hero = { type: "custom:mushroom-template-card",
        primary: soc ? `${Sx}{{ s | round(0) | int }} % · ${energy.battery_name || t("Speicher")}` : `${B}${bw}`,
        secondary: `${B}{{ '${t("lädt ")}' if b < -3 else ('${t("entlädt ")}' if b > 3 else '${t("bereit")}') }}{% if b | abs > 3 %}${bw}{% endif %}`,
        icon, icon_color: `${B}${Sx}{{ 'amber' if s is not none and s < 15 else ('green' if b | abs > 3 else 'grey') }}`,
        tap_action: { action: "more-info", entity: soc || bat[0] },
        card_mod: { style: `ha-card { --ng-state: ${B}${Sx}{{ 'warn' if s is not none and s < 15 else ('charge' if b < -3 else ('on' if b > 3 else 'off')) }}; }\n` } };
      batCard = { type: "custom:nullglow-spark-card", entity: soc || bat[0], min_span: soc ? 20 : 100, zero_based: true,
        grid_options: { columns: "full", rows: 1 }, card: hero };
    }
    if (solar.length) {
      const P = `{% set p = ${sumJ(solar)} %}`;
      const today = list(energy.today?.solar);
      const cards = [heading(energy.solar_name || "Solar", "mdi:solar-power-variant"),
        { type: "custom:nullglow-spark-card", entity: solar[0], min_span: 100, zero_based: true, grid_options: { columns: "full", rows: 3 },
          card: { type: "custom:mushroom-template-card", primary: `${P}${fmtW}`,
            secondary: today.length ? `${t("SOLAR · HEUTE")} {{ '{:,.1f}'.format(${sumJ(today)})${kSep()} }} KWH` : "SOLAR",
            icon: energy.solar_icon || "mdi:solar-power-variant", icon_color: `${P}{{ 'green' if p > 5 else 'grey' }}`,
            tap_action: { action: "more-info", entity: solar[0] },
            card_mod: { style: `ha-card { --ng-state: ${P}{{ 'on' if p > 5 else 'off' }}; }\n${TILE_TYPO(34)}` } } }];
      for (const [id, label, icon] of [[energy.forecast?.today, t("PROGNOSE"), "mdi:weather-sunny"], [energy.forecast?.tomorrow, t("MORGEN"), "mdi:weather-partly-cloudy"]]) {
        if (id) cards.push({ type: "custom:mushroom-template-card", entity: id, primary: `{{ '{:,.1f}'.format(states('${id}') | float(0))${kSep()} }} kWh`,
          secondary: label, icon, icon_color: "grey", tap_action: { action: "more-info" }, grid_options: { columns: 6 } });
      }
      if (batCard) cards.push(batCard);
      S.push({ type: "grid", cards });
    } else if (batCard) S.push({ type: "grid", cards: [heading(energy.battery_name || t("Speicher"), "mdi:home-battery-outline"), batCard] });
    if (grid.length || solar.length) S.push({ type: "grid", column_span: 2, cards: [{ type: "custom:nullglow-power-card", grid, ...(solar[0] ? { solar: solar[0] } : {}),
      ...(energy.grid_invert ? { grid_invert: true } : {}),
      ...(bat.length ? { battery: bat, ...(energy.battery_invert ? { battery_invert: true } : {}), ...(bcharge.length ? { battery_charge: bcharge } : {}) } : {}),
      hours: 24, grid_options: { columns: "full", rows: 6 } }] });
    if (grid.length && energy.today) S.push({ type: "grid", column_span: 2, cards: [{ type: "custom:nullglow-month-card",
      ...(list(energy.today.solar)[0] ? { solar: list(energy.today.solar)[0] } : {}), grid, price: energy.today.price || 0.35,
      grid_options: { columns: "full", rows: 6 } }] });
    return { sections: S };
  }

  function viewKameras(inv, cfg) {
    return { sections: inv.cameras.map((c) => ({ type: "grid", column_span: 2, cards: [camCard(c, !!cfg.cameras_live)] })) };
  }

  // Medien: oben groß, was gerade läuft (mehrere aktive = Chips zum Wechseln), darunter alle Player klein
  function viewMedien(inv, hass) {
    const all = inv.media.filter((m) => hass.states[m]?.state !== "unavailable");
    return { sections: [
      { type: "grid", column_span: 2, cards: [heading(t("Läuft gerade"), "mdi:play-circle-outline"),
        { type: "custom:nullglow-media-card", entities: inv.media, size: "large", grid_options: { columns: "full", rows: 4 } }] },
      { type: "grid", column_span: 2, cards: [heading(t("Alle Player"), "mdi:speaker-multiple"),
        ...all.map((m) => ({ type: "custom:nullglow-media-card", entity: m, size: "compact", grid_options: { columns: 12, rows: 2 } }))] },
    ] };
  }

  function viewKalender(inv) {
    const S = [{ type: "grid", column_span: 3, cards: [{ type: "calendar", entities: inv.calendars, initial_view: "dayGridMonth",
      grid_options: { columns: "full", rows: 9 } }] }];
    if (has("calendar-card-pro")) S.push({ type: "grid", cards: [heading(t("Als Nächstes"), "mdi:calendar-clock"), calendarPro(inv.calendars, 21)] });
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
    wear: list.map((e) => ({ entity: e, name: inv.niceName(e) })), wear_title: t("Verschleiß"), grid_options: { columns: "full" } } : null);

  function viewSauger(inv, hass) {
    return { sections: inv.vacuums.flatMap((v) => {
      const bat = inv.sameDevice(v, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.device_class === "battery")[0];
      const wear = inv.sameDevice(v, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.unit_of_measurement === "%"
        && /(_left|_life|remaining)$/.test(id) && !/time/.test(id));
      const cards = [heading(inv.devName(v) || hass.states[v]?.attributes?.friendly_name || t("Saugroboter"), "mdi:robot-vacuum"),
        { type: "custom:mushroom-vacuum-card", entity: v, name: "Status", icon_animation: true,
          commands: ["start_pause", "stop", "locate", "clean_spot", "return_home"], grid_options: { columns: "full" },
          card_mod: { style: "ha-card { --ng-state: {{ 'clean' if is_state(config.entity, 'cleaning') else ('charge' if is_state(config.entity, 'docked') else ('crit' if is_state(config.entity, 'error') else 'off')) }}; }\n" } }];
      if (bat) cards.push({ type: "tile", entity: bat, name: t("Akku"), grid_options: { columns: 6 } });
      const w = wearCard(inv, wear); if (w) cards.push(w);
      const map = robotMap(inv, hass, v);
      return map ? [{ type: "grid", column_span: 2, cards: [heading(t("Karte"), "mdi:map-outline"), map] }, { type: "grid", column_span: 2, cards }]
        : [{ type: "grid", column_span: 2, cards }];
    }) };
  }

  function viewMaeher(inv, hass) {
    return { sections: inv.mowers.flatMap((m) => {
      const bat = inv.sameDevice(m, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.device_class === "battery")[0];
      const wear = inv.sameDevice(m, (id) => DOMAIN(id) === "sensor" && hass.states[id].attributes.unit_of_measurement === "%"
        && /(blade|chassis|_life|_left)/.test(id));
      const cards = [heading(inv.devName(m) || hass.states[m]?.attributes?.friendly_name || t("Mähroboter"), "mdi:robot-mower"),
        { type: "tile", entity: m, name: "Status", features: [{ type: "lawn-mower-commands", commands: ["start_pause", "dock"] }], grid_options: { columns: "full" },
          card_mod: { style: "ha-card { --ng-state: {{ 'move' if is_state(config.entity, 'mowing') else ('crit' if is_state(config.entity, 'error') else 'off') }}; }\n" } }];
      if (bat) cards.push({ type: "tile", entity: bat, name: t("Akku"), grid_options: { columns: 6 } });
      const w = wearCard(inv, wear); if (w) cards.push(w);
      const map = robotMap(inv, hass, m);
      return map ? [{ type: "grid", column_span: 2, cards: [heading(t("Garten"), "mdi:map-outline"), map] }, { type: "grid", column_span: 2, cards }]
        : [{ type: "grid", column_span: 2, cards }];
    }) };
  }

  // ---------- Theme ----------
  // Im Weitergabe-Paket liegt das Theme als window.__NULLGLOW_THEME bei (kein separates Theme nötig). Es wird nur in den
  // Browser-Speicher von HA gelegt (hass.themes), nicht auf dem Server — andere Dashboards und das Profil bleiben unberührt.
  // Designs = alle Themes mit „ng-design-title“ (tools/build-themes.py): mitgelieferte + in HA vorhandene
  // Farbwort im Design-Titel („Nullglow — Grün“) übersetzen — Name bleibt
  const designTitle = (s) => { const [n, c] = String(s).split(" — "); return c ? `${n} — ${t(c)}` : String(s); };
  function designs(hass) {
    const out = {};
    const add = (k, th) => { const title = th?.["ng-design-title"] || th?.modes?.dark?.["ng-design-title"]; if (title && !out[k]) out[k] = designTitle(title); };
    for (const [k, th] of Object.entries(bundled() || {})) add(k, th);
    for (const [k, th] of Object.entries(hass?.themes?.themes || {})) add(k, th);
    if (!Object.keys(out).length) out.nullglow = designTitle("Nullglow — Grün");
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
  // Stromsparen automatisch: an bei „Bewegung reduzieren“, sehr schwacher Hardware (≤ 2 Kerne/GB) oder wenn das Gerät auf dem
  // Dashboard gemessen unter ~22 Bildern/s bleibt (einmal 3 s, 8 s nach dem Laden, nur sichtbar). Ergebnis bleibt im Browser
  // (nullglow-eco-auto); „Auto“ im Uhr-Pop-up misst neu. Stromsparen: Nordlicht aus, Wetterfarben ruhig, Kachel-Animationen
  // stehen, Energiefluss 15 statt 30 Bilder/s.
  const ECO_KEY = "nullglow-eco-auto";
  function ecoAuto() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || (navigator.hardwareConcurrency || 8) <= 2 || (navigator.deviceMemory || 8) <= 2) return true;
    let v = null;
    try { v = localStorage.getItem(ECO_KEY); } catch (e) { /* gesperrt */ }
    if (v === "1" || v === "0") return v === "1";
    ecoMeasure();
    return false;
  }
  function ecoMeasure() {
    if (window.__ngEcoMeasuring) return;
    window.__ngEcoMeasuring = true;
    const run = () => {
      if (document.hidden) { setTimeout(run, 5000); return; }
      const d = [], end = performance.now() + 3000;
      let last = 0;
      const step = (now) => {
        if (document.hidden) { setTimeout(run, 5000); return; }   // verdeckt: später neu messen
        if (last) d.push(now - last);
        last = now;
        if (now < end) { requestAnimationFrame(step); return; }
        d.sort((a, b) => a - b);
        const slow = d.length > 0 && d[d.length >> 1] > 45;
        try { localStorage.setItem(ECO_KEY, slow ? "1" : "0"); } catch (e) { /* gesperrt */ }
        window.__ngEcoMeasuring = false;
        window.__ngEcoMs = Math.round(d[d.length >> 1] || 0);
        ensureMode();
      };
      requestAnimationFrame(step);
    };
    setTimeout(run, 8000);
  }
  window.__ngEcoRemeasure = () => { try { localStorage.removeItem(ECO_KEY); } catch (e) { /* gesperrt */ } };
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
    // Glas-Deckkraft je Gerät (Uhr-Pop-up, Browser-Speicher): Faktor --ng-glass-k an <html>, nur auf eigenen Dashboards
    const de = document.documentElement, gk = own ? +pick.glass || 1 : 1;
    if (!window.__ngGlassDrag) {
      if (own && Math.abs(gk - 1) > 0.001) {
        if (de.style.getPropertyValue("--ng-glass-k") !== String(gk)) { de.style.setProperty("--ng-glass-k", String(gk)); changed = true; }
        de.dataset.ngGlass = "vorlage";
      } else if (de.dataset.ngGlass === "vorlage" || (own && de.style.getPropertyValue("--ng-glass-k"))) {
        de.style.removeProperty("--ng-glass-k"); delete de.dataset.ngGlass; changed = true;
      }
    }
    // Stromsparen je Gerät (Uhr-Pop-up): pick.eco "on" | "off" | leer = automatisch -> data-ng-eco + --ng-eco an <html>
    const eco = own && (pick.eco === "on" || (pick.eco !== "off" && ecoAuto()));
    if (eco !== (de.dataset.ngEco === "1")) {
      if (eco) { de.dataset.ngEco = "1"; de.style.setProperty("--ng-eco", "1"); } else { delete de.dataset.ngEco; de.style.removeProperty("--ng-eco"); }
      window.dispatchEvent(new Event("nullglow-eco"));
    }
    if (changed) setTimeout(() => { window.dispatchEvent(new Event("nullglow-design")); window.__ngRepaint(); }, 400);
    // Pop-up-Abdunklung (Bubble-Backdrop am <body>, außerhalb des Designs) im Hellen hell — nur eigene Dashboards
    const mine = m !== undefined && h.themes.darkMode === false;
    if (mine) {
      const hv = el("hui-view-container");
      const bg = hv && getComputedStyle(hv).getPropertyValue("--rgb-ng-bg").trim();
      if (bg) { de.style.setProperty("--bubble-backdrop-background-color", `rgba(${bg}, 0.55)`); de.dataset.ngBackdrop = "vorlage"; }
    } else if (de.dataset.ngBackdrop === "vorlage") { de.style.removeProperty("--bubble-backdrop-background-color"); delete de.dataset.ngBackdrop; }
  }
  setInterval(ensureMode, 1000);

  // ---------- Strategie ----------
  // ---------- Direkt auf der Kachel bearbeiten ----------
  // Jede bearbeitbare Kachel trägt view_layout.ng_edit = { id, kind: "entity" | "room", room } (view_layout lassen alle
  // Karten zu und ignorieren es in Sections). Gespeichert wird nur in der Dashboard-Einstellung (strategy):
  //   names: { <entity>: "Name" }   hidden: [<entity>]   tile_order: [<entity> …] (relative Reihenfolge, überall gleich)
  // Raum-Kacheln (Licht/Klima der Übersicht, „· alle“, Klima-Seite) ändern stattdessen rooms.<id>.name/hide bzw. room_order.
  const markRoom = (card, r) => ({ ...card, view_layout: { ...(card.view_layout || {}), ng_edit: { id: `room:${r.id}`, kind: "room", room: r.id } } });
  const LABEL = { "custom:bubble-card": "name", tile: "name", "custom:mushroom-person-card": "name", "picture-entity": "name",
    "custom:mushroom-climate-card": "name", "custom:mushroom-vacuum-card": "name", "custom:mushroom-template-card": "primary" };
  const labelKey = (c) => { const k = LABEL[c?.type]; return k && !(k === "primary" && /[{]/.test(String(c.primary || ""))) ? k : null; };
  const editCard = (c) => (c?.type === "custom:nullglow-spark-card" && c.card ? c.card : c);   // Verlauf-Hülle: Name steht innen
  function applyEdits(sections, cfg) {
    const names = cfg.names || {}, order = cfg.tile_order || [];
    return sections.map((sec) => {
      if (!Array.isArray(sec.cards)) return sec;
      let cards = sec.cards.map((c) => {
        if (c.view_layout?.ng_edit) return c;
        const inner = editCard(c), id = inner?.entity;
        if (!id || !labelKey(inner)) return c;
        const named = names[id] ? (c === inner ? { ...c, [labelKey(c)]: names[id] } : { ...c, card: { ...inner, [labelKey(inner)]: names[id] } }) : c;
        return { ...named, view_layout: { ...(c.view_layout || {}), ng_edit: { id, kind: "entity" } } };
      });
      // Reihenfolge: nur die Kacheln aus tile_order tauschen ihre Plätze untereinander, alles andere bleibt stehen
      const slots = cards.map((c, i) => [i, order.indexOf(c.view_layout?.ng_edit?.id)]).filter(([, k]) => k !== -1);
      if (slots.length > 1) {
        const sorted = [...slots].sort((a, b) => a[1] - b[1]).map(([i]) => cards[i]);
        const next = [...cards];
        slots.forEach(([i], k) => { next[i] = sorted[k]; });
        cards = next;
      }
      return { ...sec, cards };
    });
  }

  // Einstellung des gerade offenen Dashboards lesen/ändern/speichern (nur Admins; HA baut das Dashboard danach neu)
  async function saveStrategy(patch) {
    const hass = document.querySelector("home-assistant")?.hass;
    if (!hass?.user?.is_admin) throw new Error(t("Nur Administratoren können das Dashboard ändern."));
    const seg = location.pathname.split("/")[1] || "lovelace", url_path = seg === "lovelace" ? null : seg;
    const conf = await hass.callWS({ type: "lovelace/config", url_path, force: true });
    if (!conf?.strategy || conf.strategy.type !== "custom:nullglow") throw new Error(t("Dieses Dashboard ist keine Nullglow-Vorlage."));
    const s = clone(conf.strategy);
    patch(s);
    for (const k of ["names", "rooms", "hints"]) if (s[k] && typeof s[k] === "object" && !Array.isArray(s[k]) && !Object.keys(s[k]).length) delete s[k];
    for (const k of ["hidden", "tile_order", "room_order"]) if (Array.isArray(s[k]) && !s[k].length) delete s[k];
    await hass.callWS({ type: "lovelace/config/save", url_path, config: { ...conf, strategy: s } });
  }
  window.__ngSaveStrategy = saveStrategy;

  // Rahmen, Menü und Leiste liegen in Seiten-Koordinaten (scrollen nativ mit), nur die Leiste steht fest oben.
  // Verschieben (Ziehen oder Früher/Später) ist sofort sichtbar (CSS order im Section-Grid) und wird erst bei „Fertig“
  // gespeichert — eine Speicherung statt einer je Schritt (HA baut das Dashboard danach komplett neu).
  const EDIT_CSS = `
    :host { position: absolute; top: 0; left: 0; width: 0; height: 0; z-index: 7; pointer-events: none; font-family: var(--ng-font, inherit); }
    .bar { position: fixed; top: 12px; left: 50%; transform: translateX(-50%); z-index: 2; pointer-events: auto; display: flex; align-items: center; gap: 12px;
      padding: 8px 8px 8px 18px; border-radius: 999px; font-size: 14px; color: var(--ng-txt, #e8f5ee); white-space: nowrap;
      background: linear-gradient(var(--ng-glass-2, rgba(255,255,255,.07)), var(--ng-glass-2, rgba(255,255,255,.07))), rgba(var(--rgb-ng-bg, 10, 14, 18), .82);
      backdrop-filter: blur(18px) saturate(1.4); -webkit-backdrop-filter: blur(18px) saturate(1.4);
      box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-acc, 124, 255, 178), .45), 0 12px 40px -12px rgba(0, 0, 0, .6); }
    .bar ha-icon { --mdc-icon-size: 18px; color: var(--ng-acc, #7cffb2); }
    .bar .msg { color: var(--ng-txt-dim, #93a79d); }
    .bar .msg.on { color: var(--ng-txt, #e8f5ee); }
    button { font: inherit; font-size: 14px; border: 0; cursor: pointer; border-radius: 999px; min-height: 36px; padding: 0 14px;
      display: inline-flex; align-items: center; gap: 6px; color: var(--ng-txt, #e8f5ee); background: rgba(var(--rgb-ng-txt, 255, 255, 255), .07); }
    button[hidden] { display: none; }
    button:hover { background: rgba(var(--rgb-ng-txt, 255, 255, 255), .12); }
    button.pri { background: var(--ng-acc, #7cffb2); color: var(--ng-acc-ink, #04140d); font-weight: 600; }
    button[disabled] { opacity: .35; cursor: default; }
    button ha-icon { --mdc-icon-size: 18px; }
    .bar button ha-icon { color: inherit; }
    .box { position: absolute; pointer-events: auto; cursor: grab; border-radius: 18px; box-sizing: border-box; transition: opacity .15s;
      user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent;
      box-shadow: inset 0 0 0 2px rgba(var(--rgb-ng-acc, 124, 255, 178), .55), 0 0 18px -6px rgba(var(--rgb-ng-acc, 124, 255, 178), .6);
      background: rgba(var(--rgb-ng-acc, 124, 255, 178), .05); }
    .box:hover, .box.sel { background: rgba(var(--rgb-ng-acc, 124, 255, 178), .14); box-shadow: inset 0 0 0 2px var(--ng-acc, #7cffb2), 0 0 24px -4px rgba(var(--rgb-ng-acc, 124, 255, 178), .8); }
    .box i { position: absolute; top: -9px; right: -9px; width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center;
      background: var(--ng-acc, #7cffb2); color: var(--ng-acc-ink, #04140d); }
    .box i ha-icon { --mdc-icon-size: 14px; }
    .box.edge i { top: 4px; right: 4px; }
    .box.grp { border-radius: 26px; }
    .box .lbl { position: absolute; top: 10px; left: 50%; transform: translateX(-50%); display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 14px 5px 8px; border-radius: 999px; font-size: 13px; font-weight: 600; white-space: nowrap; pointer-events: none;
      background: var(--ng-acc, #7cffb2); color: var(--ng-acc-ink, #04140d); box-shadow: 0 6px 18px -6px rgba(0, 0, 0, .6); }
    .box .lbl ha-icon { --mdc-icon-size: 16px; }
    .seg { display: inline-flex; padding: 3px; gap: 2px; border-radius: 999px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06); }
    .seg[hidden] { display: none; }
    .seg button { min-height: 30px; padding: 0 12px; background: transparent; }
    .seg button.on { background: rgba(var(--rgb-ng-acc, 124, 255, 178), .2); color: var(--ng-acc, #7cffb2); font-weight: 600; }
    .menu .wrow span { flex: 1; text-align: center; align-self: center; }
    .menu .wrow button { flex: none; width: 44px; padding: 0; }
    .menu .hl { display: flex; align-items: center; gap: 8px; } .menu .hl span { flex: 1; }
    .menu .opt { display: flex; flex-direction: column; gap: 4px; margin-top: 2px; }
    .menu .opt small { margin: 0; }
    .seg2 { display: flex; gap: 2px; padding: 3px; border-radius: 14px; background: rgba(var(--rgb-ng-txt, 255, 255, 255), .06); }
    .seg2 button { flex: 1; min-height: 32px; padding: 0 6px; border-radius: 11px; font-size: 13px; background: transparent; justify-content: center; }
    .seg2 button.on { background: rgba(var(--rgb-ng-acc, 124, 255, 178), .2); color: var(--ng-acc, #7cffb2); font-weight: 600; opacity: 1; }
    .menu .st { color: var(--ng-txt-dim, #93a79d); font-size: 12px; }
    .menu .st:empty, .menu .err:empty { display: none; }
    .menu .hl button { flex: none; }
    .box.under { visibility: hidden; pointer-events: none; }
    .boxes.dragging .box:not(.drag) { opacity: 0; pointer-events: none; }
    .box.drag { cursor: grabbing; transition: none; background: rgba(var(--rgb-ng-acc, 124, 255, 178), .10);
      box-shadow: inset 0 0 0 2px var(--ng-acc, #7cffb2), 0 22px 44px -14px rgba(0, 0, 0, .75), 0 0 28px -6px rgba(var(--rgb-ng-acc, 124, 255, 178), .7); }
    .menu { position: absolute; pointer-events: auto; width: 280px; padding: 14px; border-radius: 20px; display: flex; flex-direction: column; gap: 8px;
      color: var(--ng-txt, #e8f5ee); box-sizing: border-box;
      background: linear-gradient(var(--ng-glass-2, rgba(255,255,255,.07)), var(--ng-glass-2, rgba(255,255,255,.07))), rgba(var(--rgb-ng-bg, 10, 14, 18), .9);
      backdrop-filter: blur(20px) saturate(1.4); -webkit-backdrop-filter: blur(20px) saturate(1.4);
      box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255,255,255,.12)), 0 20px 50px -14px rgba(0, 0, 0, .7); }
    .menu b { font-size: 15px; font-weight: 600; } .menu small { color: var(--ng-txt-dim, #93a79d); font-size: 12px; margin-top: -4px; }
    .menu .row { display: flex; gap: 8px; } .menu .row button { flex: 1; justify-content: center; }
    .menu input { font: inherit; font-size: 15px; padding: 9px 12px; border-radius: 12px; border: 0; outline: 0; color: var(--ng-txt, #e8f5ee);
      background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); box-shadow: inset 0 0 0 1px var(--ng-line, rgba(255,255,255,.12)); }
    .menu input:focus { box-shadow: inset 0 0 0 1.5px var(--ng-acc, #7cffb2); }
    .menu .err { color: var(--ng-danger, #ff6b6b); font-size: 12px; }
    .bar .cnt { display: none; font-variant-numeric: tabular-nums; }
    @media (max-width: 600px) { .bar .msg, .bar > ha-icon, .bar .tx { display: none; } .bar .cnt { display: inline; } .bar { gap: 6px; padding-left: 8px; }
      .bar button { padding: 0 11px; } .seg button { padding: 0 10px; } }
  `;
  const EDIT_TOKENS = ["--ng-acc", "--rgb-ng-acc", "--ng-acc-ink", "--ng-txt", "--rgb-ng-txt", "--ng-txt-dim", "--ng-line", "--ng-glass-2",
    "--rgb-ng-bg", "--ng-danger", "--ng-font"];
  const ngEdit = (window.__ngEdit = window.__ngEdit || { on: false });
  const FLIP_MS = 180, FLIP_EASE = "cubic-bezier(.2, .8, .2, 1)";
  function editStart() {
    const hass = document.querySelector("home-assistant")?.hass, base = "/" + (location.pathname.split("/")[1] || "lovelace");
    if (!hass?.user?.is_admin || window.__nullglowModes[base] === undefined) return;
    if (ngEdit.on) return;
    Object.assign(ngEdit, { on: true, base, pend: [], moves: 0, grids: new Set(), drag: null, press: null, busy: false,
      mode: "tiles", lay: { width: {}, hide: [] }, prev: new Map(), hasGroups: false });
    const host = document.createElement("div");
    host.id = "ng-edit";
    const root = host.attachShadow({ mode: "open" });
    root.innerHTML = `<style>${EDIT_CSS}</style><div class="bar"><ha-icon icon="mdi:pencil"></ha-icon>
      <div class="seg" hidden><button data-m="tiles" class="on">${esc(t("Kacheln"))}</button><button data-m="groups">${esc(t("Gruppen"))}</button></div>
      <span class="msg"></span>
      <button class="cfg" hidden title="${esc(t("Übersicht"))}"><ha-icon icon="mdi:cog-outline"></ha-icon></button>
      <button class="hid" hidden title="${esc(t("Ausgeblendete Gruppen"))}"><ha-icon icon="mdi:eye-off-outline"></ha-icon><span></span></button>
      <button class="undo" hidden><ha-icon icon="mdi:undo"></ha-icon><span class="tx">${esc(t("Verwerfen"))}</span></button>
      <button class="pri done"><ha-icon icon="mdi:check"></ha-icon>${esc(t("Fertig"))}<span class="cnt"></span></button></div><div class="boxes"></div>`;
    document.body.appendChild(host);
    ngEdit.host = host; ngEdit.root = root;
    root.querySelector(".done").addEventListener("click", editDone);
    root.querySelector(".undo").addEventListener("click", () => { discardOrder(); closeMenu(); });
    root.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.m)));
    root.querySelector(".hid").addEventListener("click", openHiddenMenu);
    root.querySelector(".cfg").addEventListener("click", openCfgMenu);
    ngEdit.key = (ev) => { if (ev.key === "Escape") { if (ngEdit.drag) return; if (root.querySelector(".menu")) closeMenu(); else editStop(); } };
    ngEdit.resize = () => placeBoxes();
    ngEdit.scroll = () => clipBoxes();
    window.addEventListener("keydown", ngEdit.key);
    window.addEventListener("resize", ngEdit.resize);
    window.addEventListener("scroll", ngEdit.scroll, { passive: true });
    ngEdit.timer = setInterval(placeBoxes, 500);
    updateBar();
    window.dispatchEvent(new Event("nullglow-edit"));
    setTimeout(placeBoxes, 300);   // Media-Karte taucht ggf. erst auf
    placeBoxes();
  }
  // Beenden ohne Speichern: Vorschau-Reihenfolge verwerfen
  function editStop() {
    if (!ngEdit.on) return;
    if (ngEdit.drag) endDrag();
    discardOrder(true);
    ngEdit.on = false;
    clearInterval(ngEdit.timer);
    window.removeEventListener("keydown", ngEdit.key);
    window.removeEventListener("resize", ngEdit.resize);
    window.removeEventListener("scroll", ngEdit.scroll);
    ngEdit.host?.remove();
    ngEdit.host = ngEdit.root = null;
    window.dispatchEvent(new Event("nullglow-edit"));
  }
  const hasPending = () => !!(ngEdit.pend.length || Object.keys(ngEdit.lay?.width || {}).length || ngEdit.lay?.hide.length);
  function setMode(m) {
    if (ngEdit.drag || ngEdit.mode === m) return;
    closeMenu(true);
    ngEdit.mode = m;
    ngEdit.root.querySelector(".boxes").replaceChildren();   // Rahmen je Modus anders aufgebaut
    placeBoxes();
    updateBar();
  }
  async function editDone() {
    if (!hasPending()) { editStop(); return; }
    const msg = ngEdit.root.querySelector(".msg");
    ngEdit.root.querySelectorAll(".bar button").forEach((b) => { b.disabled = true; });
    msg.textContent = t("Speichere …"); msg.classList.add("on");
    try { await saveEdits(() => {}); editStop(); }
    catch (e) { msg.textContent = String(e?.message || e); ngEdit.root?.querySelectorAll(".bar button").forEach((b) => { b.disabled = false; }); }
  }
  function updateBar() {
    const root = ngEdit.root;
    if (!root) return;
    const n = hasPending() ? ngEdit.moves : 0, msg = root.querySelector(".msg"), grp = ngEdit.mode === "groups";
    msg.textContent = n ? t("{n}× geändert · noch nicht gespeichert", { n }) : grp ? t("Ziehen: verschieben · Antippen: Breite, ausblenden") : t("Antippen: bearbeiten · Halten und ziehen: verschieben");
    root.querySelector(".seg").hidden = !ngEdit.hasGroups && !grp;
    root.querySelectorAll(".seg button").forEach((b) => b.classList.toggle("on", b.dataset.m === ngEdit.mode));
    const hid = hiddenGroups(), hb = root.querySelector(".hid");
    hb.hidden = !grp || !hid.length;
    root.querySelector(".cfg").hidden = !grp || curView() !== "home" || !groupSettings(null).length;
    hb.querySelector("span").textContent = hid.length;
    msg.classList.toggle("on", !!n);
    root.querySelector(".cnt").textContent = n ? ` · ${n}` : "";   // am Handy ist das die einzige Anzeige
    root.querySelector(".undo").hidden = !n;
  }

  // Speichern: offene Reihenfolge + Änderung aus dem Menü in einem Rutsch
  function applyPending(s) {
    for (const g of ngEdit.pend) {
      if (g.kind === "group") {   // sichtbare Gruppen in neuer Reihenfolge, ausgeblendete dahinter
        const L = layoutOf(s, g.view || "home"), rest = (L.order || (g.view === "home" ? HOME_PARTS.map((p) => p.key) : [])).filter((k) => !g.ids.includes(k));
        L.order = [...g.ids, ...rest];
      } else if (g.kind === "room") {   // Räume: gemeinsame Raum-Reihenfolge (wie im Assistenten)
        const all = window.__ngLastRooms || [];
        const cur = (s.room_order && s.room_order.length ? s.room_order : all).filter((r) => all.includes(r));
        all.forEach((r) => { if (!cur.includes(r)) cur.push(r); });
        const rid = g.ids.map((x) => x.replace(/^room:/, ""));
        const at = rid.map((r) => cur.indexOf(r)).filter((k) => k !== -1).sort((a, b) => a - b);
        at.forEach((k, n) => { cur[k] = rid[n]; });
        s.room_order = cur;
      } else {
        const o = (s.tile_order || []).filter((x) => !g.ids.includes(x));
        const first = (s.tile_order || []).findIndex((x) => g.ids.includes(x));
        o.splice(first === -1 ? o.length : Math.min(first, o.length), 0, ...g.ids);
        s.tile_order = o;
      }
    }
    const lay = ngEdit.lay || { width: {}, hide: [] }, split = (x) => [x.slice(0, x.indexOf("|")), x.slice(x.indexOf("|") + 1)];
    for (const [x, w] of Object.entries(lay.width)) { const [v, k] = split(x), L = layoutOf(s, v); L.width = { ...(L.width || {}), [k]: w }; }
    for (const x of lay.hide) { const [v, k] = split(x), L = layoutOf(s, v); L.hide = [...new Set([...(L.hide || []), k])]; }
  }
  // Seiten-Layouts aufräumen (leere Teile weg)
  function tidyLayouts(st) {
    for (const [v, L] of Object.entries(st.layouts || {})) {
      if (L.width) for (const k of Object.keys(L.width)) if (!(+L.width[k] >= 1)) delete L.width[k];
      for (const k of ["order", "hide"]) if (Array.isArray(L[k]) && !L[k].length) delete L[k];
      if (L.width && !Object.keys(L.width).length) delete L.width;
      if (!Object.keys(L).length) delete st.layouts[v];
    }
    if (st.layouts && !Object.keys(st.layouts).length) delete st.layouts;
  }
  async function saveEdits(fn) {
    await saveStrategy((s) => {
      applyPending(s); fn(s);
      if (s.home_layout) { tidyLayout(s.home_layout); if (!Object.keys(s.home_layout).length) delete s.home_layout; }
      tidyLayouts(s);
    });
    // HA baut das Dashboard neu; wiederverwendete Elemente verlieren die Vorschau erst, wenn die neue Fassung steht
    const grids = [...ngEdit.grids], prev = [...ngEdit.prev.values()], was = window.__ngLastCfg;
    ngEdit.pend = []; ngEdit.moves = 0; ngEdit.grids = new Set(); ngEdit.lay = { width: {}, hide: [] }; ngEdit.prev = new Map();
    updateBar();
    let n = 0;
    const iv = setInterval(() => {
      if (window.__ngLastCfg === was && ++n < 60) return;
      clearInterval(iv);
      setTimeout(() => {
        grids.forEach((g) => { if (g.isConnected) [...g.children].forEach((w) => { w.style.order = ""; }); });
        prev.forEach((w) => { w.style.gridColumn = ""; w.style.display = ""; });
      }, 400);
    }, 100);
  }

  // Bearbeitbare Kacheln der sichtbaren Seite (ohne Pop-ups) mit Position in Seiten-Koordinaten; Section = Nachbarn fürs Verschieben
  const cardRect = (el) => {   // größte Fläche der Karte (Bubble-Karten sind als Element flach, der Inhalt ragt heraus)
    const card = el.firstElementChild || el.shadowRoot?.firstElementChild;
    let r = el.getBoundingClientRect();
    for (const x of [card, ...(card?.shadowRoot ? [...card.shadowRoot.children] : [])]) {
      const b = x?.getBoundingClientRect?.();
      if (b && b.width * b.height > r.width * r.height) r = b;
    }
    return r;
  };
  const docRect = (r) => ({ left: r.left + scrollX, top: r.top + scrollY, width: r.width, height: r.height });
  const groupKey = (el) => el.localName === "hui-section" && el.config?.cards?.[0]?.view_layout?.ng_group;
  function editGroups(view) {
    const out = [];
    deepEach(view, (el) => {
      dockOf(el);
      const key = groupKey(el);
      if (!key) return;
      let wrap = el;   // Kind des Rasters der Übersicht (div.section in div.content)
      while (wrap.parentElement && getComputedStyle(wrap.parentElement).display !== "grid") wrap = wrap.parentElement;
      const r = wrap.getBoundingClientRect();
      if (!wrap.parentElement || !r.width || !r.height) return;
      const m = el.config.cards[0].view_layout;
      out.push({ el, wrap, r: docRect(r), meta: { id: key, kind: "group", view: m.ng_view || "home", name: m.ng_name, w0: m.ng_w },
        config: el.config, section: wrap.parentElement });
    });
    ngEdit.hasGroups = out.length > 0;
    return out;
  }
  function dockOf(el) {
    if (el.localName !== "hui-card" || el.config?.card_type !== "horizontal-buttons-stack") return;   // Navigation (fest unten)
    let bar = null;
    deepEach(el, (x) => { if (!bar && x.classList?.contains("horizontal-buttons-stack-card")) bar = x; });
    const r = bar?.getBoundingClientRect();
    if (r?.height) ngEdit.dock = r;
  }
  function editCards() {
    const out = [];
    const view = deepFind(document, "hui-view-container") || document;
    ngEdit.dock = null;
    if (ngEdit.mode === "groups") return editGroups(view);
    let groups = false;
    deepEach(view, (el) => {
      if (!groups && groupKey(el)) groups = true;
      dockOf(el);
      if (el.localName !== "hui-card" || !el.config?.view_layout?.ng_edit) return;
      const r = cardRect(el);
      if (!r.width || !r.height) return;
      if (el.closest?.("bubble-card") || el.getRootNode()?.host?.closest?.("bubble-card")) return;
      // Section = nächster hui-grid-section/hui-section darüber; Wrapper = Kind des Section-Grids (dort greift CSS order)
      let sec = el;
      while (sec && !["hui-grid-section", "hui-section"].includes(sec.localName)) sec = sec.parentElement || sec.getRootNode()?.host;
      let wrap = el;
      while (wrap.parentElement && getComputedStyle(wrap.parentElement).display !== "grid") wrap = wrap.parentElement;
      if (!wrap.parentElement) wrap = el;
      out.push({ el, wrap, r: docRect(r), meta: el.config.view_layout.ng_edit, config: el.config, section: sec || el.parentElement });
    });
    if (groups !== ngEdit.hasGroups) { ngEdit.hasGroups = groups; updateBar(); }
    return out;
  }
  // Nachbarn gleicher Art in derselben Section, in angezeigter Reihenfolge
  function siblings(c) {
    const sib = (ngEdit.cards || []).filter((x) => x.section === c.section && x.meta.kind === c.meta.kind);
    const p = ngEdit.pend.find((g) => g.section === c.section && g.kind === c.meta.kind);
    return p ? [...sib].sort((a, b) => p.ids.indexOf(a.meta.id) - p.ids.indexOf(b.meta.id)) : sib;
  }
  // Reihenfolge ids für diese Nachbarn anzeigen (CSS order über alle Kinder des Grids; andere Karten behalten ihren Platz)
  function showOrder(sib, ids) {
    const grid = sib[0].wrap.parentElement;
    if (!grid || sib.some((x) => x.wrap.parentElement !== grid)) return false;
    const kids = [...grid.children];
    const cur = kids.map((w, i) => [w, w.style.order === "" ? i : +w.style.order]).sort((a, b) => a[1] - b[1]).map(([w]) => w);
    const byId = new Map(sib.map((x) => [x.meta.id, x.wrap]));
    const pos = sib.map((x) => cur.indexOf(x.wrap)).sort((a, b) => a - b);
    pos.forEach((p, k) => { cur[p] = byId.get(ids[k]); });
    cur.forEach((w, i) => { w.style.order = i; });
    ngEdit.grids.add(grid);
    return true;
  }
  // Umstellen mit Gleit-Animation der übrigen Kacheln (FLIP)
  function flip(wraps, change, skip, settled) {
    const before = new Map(wraps.map((w) => [w, w.getBoundingClientRect()]));
    wraps.forEach((w) => w.getAnimations?.().forEach((a) => a.cancel()));
    change();
    const after = new Map(wraps.map((w) => [w, w.getBoundingClientRect()]));
    settled?.();   // Endlage messen, bevor die Animationen laufen
    for (const w of wraps) {
      if (w === skip) continue;
      const a = before.get(w), b = after.get(w), dx = a.left - b.left, dy = a.top - b.top;
      if (Math.abs(dx) + Math.abs(dy) > 0.5) w.animate?.([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], { duration: FLIP_MS, easing: FLIP_EASE });
    }
  }
  function setPending(c, ids) {
    const g = ngEdit.pend.find((x) => x.section === c.section && x.kind === c.meta.kind);
    if (g) g.ids = ids; else ngEdit.pend.push({ section: c.section, kind: c.meta.kind, view: c.meta.view, ids });
    ngEdit.moves++;
    updateBar();
  }
  function discardOrder(quiet) {
    const prev = [...(ngEdit.prev?.values() || [])].filter((w) => w.isConnected);
    const grids = [...new Set([...(ngEdit.grids || []), ...prev.map((w) => w.parentElement)])].filter((g) => g?.isConnected);
    const kids = grids.flatMap((g) => [...g.children]);
    const undo = () => { kids.forEach((w) => { w.style.order = ""; }); prev.forEach((w) => { w.style.gridColumn = ""; w.style.display = ""; }); };
    if (kids.length) (quiet ? (f) => f() : (f) => flip(kids, f))(undo); else undo();
    ngEdit.pend = []; ngEdit.moves = 0; ngEdit.grids = new Set(); ngEdit.lay = { width: {}, hide: [] }; ngEdit.prev = new Map();
    updateBar();
    if (!quiet) { placeBoxes(); setTimeout(placeBoxes, FLIP_MS + 40); }
  }

  function placeBoxes() {
    if (!ngEdit.on || !ngEdit.root || ngEdit.drag) return;
    const base = "/" + (location.pathname.split("/")[1] || "lovelace");
    if (base !== ngEdit.base) { editStop(); return; }
    // Farben des Designs (liegen am View-Container, nicht an <body>)
    const hv = deepFind(document, "hui-view-container");
    if (hv) { const cs = getComputedStyle(hv); EDIT_TOKENS.forEach((k) => { const v = cs.getPropertyValue(k).trim(); if (v) ngEdit.host.style.setProperty(k, v); }); }
    const list = editCards();
    ngEdit.cards = list;
    const wrap = ngEdit.root.querySelector(".boxes");
    while (wrap.children.length > list.length) wrap.lastChild.remove();
    list.forEach((c, i) => {
      let b = wrap.children[i];
      const grp = c.meta.kind === "group";
      if (!b) {
        b = document.createElement("div"); b.className = grp ? "box grp" : "box";
        b.innerHTML = grp ? `<b class="lbl"><ha-icon icon="mdi:drag"></ha-icon><span></span></b>` : `<i><ha-icon icon="mdi:pencil"></ha-icon></i>`;
        boxEvents(b); wrap.appendChild(b);
      }
      if (grp) b.querySelector(".lbl span").textContent = c.meta.view === "home" ? groupName(c.meta.id, layoutNow()) : c.meta.name || c.meta.id;
      b.dataset.i = i;
      b.classList.toggle("sel", ngEdit.sel === c.meta.id && ngEdit.selSec === c.section);
      b.classList.toggle("edge", !grp && c.r.left + c.r.width + 10 > scrollX + document.documentElement.clientWidth);   // Stift nicht über den Rand (sonst Quer-Scrollen)
      Object.assign(b.style, { left: `${c.r.left}px`, top: `${c.r.top}px`, width: `${c.r.width}px`, height: `${c.r.height}px` });
    });
    clipBoxes();
  }
  // Rahmen, die unter der Navigation lägen, ausblenden — sonst fangen sie deren Tipper ab
  function clipBoxes() {
    const dock = ngEdit.dock, wrap = ngEdit.root?.querySelector(".boxes");
    if (!wrap) return;
    [...wrap.children].forEach((b) => {
      const c = ngEdit.cards?.[+b.dataset.i];
      if (!c) return;
      const cut = dock && c && !b.classList.contains("drag") && c.r.left - scrollX < dock.left + dock.width && c.r.left + c.r.width - scrollX > dock.left
        ? c.r.top + c.r.height - scrollY - (dock.top - 12) : 0;
      b.classList.toggle("under", cut >= c.r.height - 20);
      b.style.clipPath = cut > 0 ? `inset(-40px -40px ${cut}px -40px)` : "";
    });
  }

  // Antippen = Menü · Maus: drücken und ziehen · Finger: kurz halten, dann ziehen (sonst scrollt die Seite normal)
  const HOLD_MS = 280;
  function boxEvents(b) {
    b.addEventListener("contextmenu", (ev) => ev.preventDefault());
    b.addEventListener("touchmove", (ev) => { if (ngEdit.drag) ev.preventDefault(); }, { passive: false });
    b.addEventListener("pointerdown", (ev) => {
      if (ev.button > 0 || ngEdit.busy || ngEdit.drag) return;
      const c = ngEdit.cards?.[+b.dataset.i];
      if (!c) return;
      const p = (ngEdit.press = { b, c, id: ev.pointerId, touch: ev.pointerType === "touch", x0: ev.clientX, y0: ev.clientY, x: ev.clientX, y: ev.clientY });
      if (p.touch) p.timer = setTimeout(() => { if (ngEdit.press === p) { navigator.vibrate?.(12); startDrag(p); } }, HOLD_MS);
      else try { b.setPointerCapture?.(ev.pointerId); } catch (e) { /* künstliches Ereignis */ }
    });
    b.addEventListener("pointermove", (ev) => {
      const p = ngEdit.press;
      if (!p || p.b !== b || p.id !== ev.pointerId) return;
      p.x = ev.clientX; p.y = ev.clientY;
      if (ngEdit.drag) { ngEdit.drag.x = p.x; ngEdit.drag.y = p.y; dragMove(); return; }
      const dist = Math.hypot(p.x - p.x0, p.y - p.y0);
      if (p.touch && dist > 10) { clearTimeout(p.timer); ngEdit.press = null; }   // Finger wischt: Seite scrollt
      else if (!p.touch && dist > 5) startDrag(p);
    });
    const up = (ev, cancel) => {
      const p = ngEdit.press;
      if (!p || p.b !== b || p.id !== ev.pointerId) return;
      clearTimeout(p.timer);
      ngEdit.press = null;
      if (ngEdit.drag) endDrag();
      else if (!cancel) openMenu(p.c);
    };
    b.addEventListener("pointerup", (ev) => up(ev, false));
    b.addEventListener("pointercancel", (ev) => up(ev, true));
  }
  function measure(sib) { return new Map(sib.map((x) => [x.meta.id, docRect(x.wrap.getBoundingClientRect())])); }
  function startDrag(p) {
    closeMenu(true);
    const c = p.c, sib = siblings(c);
    const d = { c, id: c.meta.id, wrap: c.wrap, box: p.b, sib, ids: sib.map((x) => x.meta.id), x: p.x, y: p.y, last: null };
    d.orig = d.ids.join("\n");
    d.rects = measure(sib);
    const w = d.rects.get(d.id);
    d.gx = p.x + scrollX - w.left; d.gy = p.y + scrollY - w.top;   // Griffpunkt auf der Kachel
    d.off = { x: c.r.left - w.left, y: c.r.top - w.top };           // Rahmen relativ zum Wrapper
    Object.assign(d.wrap.style, { zIndex: 5, position: "relative", willChange: "transform" });
    ngEdit.drag = d;
    ngEdit.root.querySelector(".boxes").classList.add("dragging");
    p.b.classList.add("drag");
    const tick = () => {   // Auto-Scroll am oberen/unteren Rand
      if (ngEdit.drag !== d) return;
      const top = 80, bottom = innerHeight - 120;
      const v = d.y < top ? -Math.min(18, (top - d.y) / 4 + 2) : d.y > bottom ? Math.min(18, (d.y - bottom) / 4 + 2) : 0;
      if (v) { const y0 = scrollY; scrollBy(0, v); if (scrollY !== y0) dragMove(); }
      d.raf = requestAnimationFrame(tick);
    };
    d.raf = requestAnimationFrame(tick);
    dragMove();
  }
  function dragMove() {
    const d = ngEdit.drag;
    if (!d) return;
    const X = d.x + scrollX, Y = d.y + scrollY;
    const inR = (r) => r && X >= r.left && X <= r.left + r.width && Y >= r.top && Y <= r.top + r.height;
    const hit = d.sib.find((x) => x.meta.id !== d.id && inR(d.rects.get(x.meta.id)));
    if (hit && hit.meta.id !== d.last) {
      const ids = d.ids.filter((x) => x !== d.id);
      ids.splice(d.ids.indexOf(hit.meta.id), 0, d.id);
      d.wrap.style.transform = "none";
      let ok = false;
      flip([...d.wrap.parentElement.children], () => { ok = showOrder(d.sib, ids); }, d.wrap, () => { if (ok) { d.ids = ids; d.rects = measure(d.sib); } });
      d.last = hit.meta.id;
    } else if (!hit) d.last = null;
    const w = d.rects.get(d.id), tx = X - d.gx - w.left, ty = Y - d.gy - w.top;
    d.wrap.style.transform = `translate(${tx}px, ${ty}px)`;
    Object.assign(d.box.style, { left: `${w.left + tx + d.off.x}px`, top: `${w.top + ty + d.off.y}px` });
  }
  function endDrag() {
    const d = ngEdit.drag;
    if (!d) return;
    ngEdit.drag = null;
    cancelAnimationFrame(d.raf);
    const from = d.wrap.style.transform;
    d.wrap.style.transform = "";
    if (from && from !== "none") d.wrap.animate?.([{ transform: from }, { transform: "none" }], { duration: FLIP_MS, easing: FLIP_EASE });
    setTimeout(() => Object.assign(d.wrap.style, { zIndex: "", position: "", willChange: "" }), FLIP_MS + 20);
    d.box.classList.remove("drag");
    ngEdit.root?.querySelector(".boxes").classList.remove("dragging");
    if (d.ids.join("\n") !== d.orig) setPending(d.c, d.ids);
    placeBoxes();
    setTimeout(placeBoxes, FLIP_MS + 40);
  }

  function closeMenu(quiet) { ngEdit.root?.querySelector(".menu")?.remove(); ngEdit.sel = ngEdit.selSec = null; if (!quiet) placeBoxes(); }
  function openMenu(c) {
    if (c.meta.kind === "group") { openGroupMenu(c); return; }
    const hass = document.querySelector("home-assistant").hass, root = ngEdit.root, m = c.meta, room = m.kind === "room";
    root.querySelector(".menu")?.remove();
    ngEdit.sel = m.id; ngEdit.selSec = c.section;
    const inner = editCard(c.config), key = labelKey(inner);
    const cur = room ? (inner.name || inner.primary || "") : (key && inner[key]) || hass.states[m.id]?.attributes?.friendly_name || m.id;
    const label = room ? String(cur).replace(/ · .*$/, "") : String(cur);
    const sib = siblings(c), pos = sib.findIndex((x) => x.meta.id === m.id);
    const menu = document.createElement("div");
    menu.className = "menu";
    menu.innerHTML = `<b>${esc(label)}</b><small>${esc(room ? t("Raum · Änderung gilt überall im Dashboard") : m.id)}</small>
      <input class="name" value="${esc(label)}" placeholder="${esc(t("Name"))}">
      <div class="row"><button class="pri save"><ha-icon icon="mdi:content-save-outline"></ha-icon>${esc(t("Umbenennen"))}</button>
        ${!room && (window.__ngLastCfg?.names || {})[m.id] ? `<button class="orig" title="${esc(t("Originalname"))}"><ha-icon icon="mdi:backup-restore"></ha-icon></button>` : ""}</div>
      <div class="row"><button class="up" ${pos > 0 ? "" : "disabled"}><ha-icon icon="mdi:arrow-left"></ha-icon>${esc(t("Früher"))}</button>
        <button class="down" ${pos >= 0 && pos < sib.length - 1 ? "" : "disabled"}>${esc(t("Später"))}<ha-icon icon="mdi:arrow-right"></ha-icon></button></div>
      <div class="row"><button class="hide"><ha-icon icon="mdi:eye-off-outline"></ha-icon>${esc(room ? t("Raum ausblenden") : t("Ausblenden"))}</button></div>
      <div class="row"><button class="close">${esc(t("Schließen"))}</button></div><div class="err"></div>`;
    root.appendChild(menu);
    // neben die Kachel, im Bild halten (Seiten-Koordinaten: scrollt mit der Kachel)
    const VW = document.documentElement.clientWidth;   // ohne Scrollleiste (innerWidth zählt sie mit -> Quer-Scrollen)
    const W = Math.min(280, VW - 16), H = menu.offsetHeight || 300, r = { ...c.r, left: c.r.left - scrollX, top: c.r.top - scrollY };
    menu.style.width = `${W}px`;
    let x = r.left + r.width + 12, y = r.top;
    if (x + W > VW - 8) x = r.left - W - 12;
    if (x < 8) { x = Math.max(8, Math.min(VW - W - 8, r.left)); y = r.top + r.height + 10; }   // kein Platz daneben: darunter
    if (y + H > innerHeight - 8) y = Math.max(8, innerHeight - H - 8);
    y = Math.max(y, barBottom());
    Object.assign(menu.style, { left: `${x + scrollX}px`, top: `${y + scrollY}px` });
    const input = menu.querySelector("input.name");
    const err = menu.querySelector(".err");
    const run = async (fn) => {
      ngEdit.busy = true;
      menu.querySelectorAll("button").forEach((b) => { b.disabled = true; });
      try { await saveEdits(fn); closeMenu(); } catch (e) { err.textContent = String(e?.message || e); menu.querySelectorAll("button").forEach((b) => { b.disabled = false; }); }
      ngEdit.busy = false;
    };
    const rename = () => {
      const v = input.value.trim();
      run((s) => {
        if (room) { s.rooms = s.rooms || {}; const o = { ...(s.rooms[m.room] || {}) }; if (v) o.name = v; else delete o.name; if (Object.keys(o).length) s.rooms[m.room] = o; else delete s.rooms[m.room]; }
        else { s.names = { ...(s.names || {}) }; if (v && v !== hass.states[m.id]?.attributes?.friendly_name) s.names[m.id] = v; else delete s.names[m.id]; }
      });
    };
    menu.querySelector(".save").addEventListener("click", rename);
    input.addEventListener("keydown", (ev) => { if (ev.key === "Enter") rename(); });
    menu.querySelector(".orig")?.addEventListener("click", () => run((s) => { if (s.names) delete s.names[m.id]; }));
    // Früher/Später: sofort sichtbar, Menü bleibt offen (gespeichert wird bei „Fertig“)
    const move = (dlt) => {
      const ids = sib.map((x) => x.meta.id), j = pos + dlt;
      [ids[pos], ids[j]] = [ids[j], ids[pos]];
      let ok = false;
      flip([...c.wrap.parentElement.children], () => { ok = showOrder(sib, ids); });
      if (!ok) return;
      setPending(c, ids);
      placeBoxes();
      const again = ngEdit.cards.find((x) => x.meta.id === m.id && x.section === c.section);
      setTimeout(() => { placeBoxes(); const k = ngEdit.cards.find((x) => x.meta.id === m.id && x.section === c.section); if (k && ngEdit.sel === m.id) openMenu(k); }, FLIP_MS + 40);
      if (again) openMenu(again);
    };
    menu.querySelector(".up").addEventListener("click", () => move(-1));
    menu.querySelector(".down").addEventListener("click", () => move(1));
    menu.querySelector(".hide").addEventListener("click", () => run((s) => {
      if (room) { s.rooms = s.rooms || {}; s.rooms[m.room] = { ...(s.rooms[m.room] || {}), hide: true }; }
      else s.hidden = [...new Set([...(s.hidden || []), m.id])];
    }));
    menu.querySelector(".close").addEventListener("click", () => closeMenu());
    placeBoxes();
    if (matchMedia("(hover: hover)").matches) setTimeout(() => input.focus(), 30);   // am Handy keine Tastatur aufspringen lassen
  }
  // Menü neben/unter ein Rechteck (Seiten-Koordinaten) setzen, im Bild halten
  const barBottom = () => (ngEdit.root?.querySelector(".bar")?.getBoundingClientRect().bottom || 0) + 8;   // Menüs nie unter der Leiste
  function placeMenu(menu, rr) {
    const VW = document.documentElement.clientWidth, W = Math.min(280, VW - 16), r = { ...rr, left: rr.left - scrollX, top: rr.top - scrollY };
    menu.style.width = `${W}px`;
    const H = menu.offsetHeight || 300;
    let x = r.left + r.width + 12, y = r.top;
    if (x + W > VW - 8) x = r.left - W - 12;
    if (x < 8) { x = Math.max(8, Math.min(VW - W - 8, r.left + (r.width - W) / 2)); y = r.top + 56; }   // kein Platz daneben: in die Gruppe
    if (y + H > innerHeight - 8) y = Math.max(8, innerHeight - H - 8);
    y = Math.max(y, barBottom());
    Object.assign(menu.style, { left: `${x + scrollX}px`, top: `${y + scrollY}px` });
  }
  // Layout einer Seite (Übersicht: home_layout, sonst layouts.<seite>); Vorschau-Schlüssel „seite|gruppe“
  const viewLayout = (view) => (view === "home" ? window.__ngLastCfg?.home_layout : window.__ngLastCfg?.layouts?.[view]) || {};
  const layoutNow = () => viewLayout("home");
  const fk = (c) => `${c.meta.view || "home"}|${c.meta.id}`;
  const curView = () => ngEdit.cards?.find((c) => c.meta.kind === "group")?.meta.view
    || ((x) => (x && isNaN(+x) ? x : "home"))(location.pathname.split("/")[2]);
  const nameOf = (view, key) => (view === "home" ? groupName(key, layoutNow()) : window.__ngGroupNames?.[view]?.[key] || key);
  function layoutOf(st, view) {   // beschreibbares Layout einer Seite in der Dashboard-Einstellung
    if (view === "home") return (st.home_layout = { ...(st.home_layout || {}) });
    st.layouts = { ...(st.layouts || {}) };
    return (st.layouts[view] = { ...(st.layouts[view] || {}) });
  }
  // Einstellungen im Gruppen-Menü: [Beschriftung, aktueller Wert, [[Wert, Text] …], (strategy, Wert) => ändern]. Speichern sofort
  // (ändert den Aufbau, keine Vorschau möglich). key = Gruppe, null = Übersicht allgemein (⚙ in der Leiste).
  function groupSettings(key) {
    const cfg = window.__ngLastCfg || {}, L = cfg.home_layout || {}, info = window.__ngLastInfo || {}, out = [];
    const opt = (label, value, options, set) => out.push([label, value, options, set]);
    const layout = (st) => (st.home_layout = clone(st.home_layout || {}));
    const onOff = [["on", t("An")], ["off", t("Aus")]];
    if (key === null) {
      if (info.hints) opt(t("Hinweis-Leiste"), cfg.hints?.mode === "float" ? "float" : cfg.hints?.mode === "off" ? "off" : "top",
        [["top", t("Oben")], ["float", t("Schwebend")], ["off", t("Aus")]],
        (st, v) => { const h = { ...(st.hints || {}) }; if (v === "top") delete h.mode; else h.mode = v; if (Object.keys(h).length) st.hints = h; else delete st.hints; });
      return out;
    }
    if (["uhr", "wetter"].includes(key) && info.weather)
      opt(t("Wetter"), L.split_weather ? "own" : "clock", [["clock", t("Bei der Uhr")], ["own", t("Eigene Gruppe")]],
        (st, v) => { st.home_layout = splitPart(layout(st), "wetter", v === "own"); });
    if (["uhr", "media"].includes(key) && info.media)
      opt(t("Musik & TV"), cfg.media_home === false ? "off" : L.split_media ? "own" : "clock",
        [["clock", t("Unter dem Wetter")], ["own", t("Eigene Gruppe")], ["off", t("Aus")]],
        (st, v) => { if (v === "off") st.media_home = false; else delete st.media_home; st.home_layout = splitPart(layout(st), "media", v === "own"); });
    if (key === "licht") {
      if (info.lightsCard) opt(t("Darstellung"), cfg.lights === "compact" ? "compact" : "rooms", [["rooms", t("Je Raum")], ["compact", t("Zusammengefasst")]],
        (st, v) => { if (v === "compact") st.lights = "compact"; else delete st.lights; });
      opt(t("Raum antippen"), cfg.light_tap === "popup" ? "popup" : "toggle", [["toggle", t("An/aus")], ["popup", t("Raum-Pop-up")]],
        (st, v) => { if (v === "popup") st.light_tap = "popup"; else delete st.light_tap; });
    }
    if (key === "klima") opt(t("Temperatur-Verlauf"), cfg.climate_graph === false ? "off" : "on", onOff,
      (st, v) => { if (v === "off") st.climate_graph = false; else delete st.climate_graph; });
    if (key === "rolllaeden") opt(t("Darstellung"), cfg.covers || "auto", [["auto", t("Auto")], ["list", t("Einzeln")], ["compact", t("Zusammengefasst")]],
      (st, v) => { if (v !== "auto") st.covers = v; else delete st.covers; });
    if (key === "zuhause") {
      if (info.contacts) opt(t("Fenster & Türen"), cfg.contacts || "auto", [["auto", t("Auto")], ["list", t("Einzeln")], ["compact", t("Zusammen")], ["off", t("Aus")]],
        (st, v) => { if (v !== "auto") st.contacts = v; else delete st.contacts; });
      if (info.persons) opt(t("Karte „Wo sind alle?“"), cfg.person_map ? "on" : "off", onOff,
        (st, v) => { if (v === "on") st.person_map = true; else delete st.person_map; });
    }
    if (key === "kameras" && info.cams > 1) opt(t("Kameras nebeneinander"), String(Math.min(3, Math.max(1, +L.cam_cols || 1))), [["1", "1"], ["2", "2"], ["3", "3"]],
      (st, v) => { const n = layout(st); if (+v > 1) n.cam_cols = +v; else delete n.cam_cols; });
    return out;
  }
  const settingsHtml = (list) => list.map(([label, value, options], i) => `<div class="opt"><small>${esc(label)}</small><div class="seg2">${options.map(([v, l]) =>
    `<button data-i="${i}" data-v="${esc(v)}" class="${v === value ? "on" : ""}">${esc(l)}</button>`).join("")}</div></div>`).join("");
  // Einstellung speichern, auf den Neuaufbau warten, Menü mit neuem Stand wieder öffnen
  function bindSettings(menu, list, key) {
    menu.querySelectorAll(".seg2 button").forEach((b) => b.addEventListener("click", async () => {
      if (b.classList.contains("on") || ngEdit.busy) return;
      const [, , , set] = list[+b.dataset.i], v = b.dataset.v, st = menu.querySelector(".st"), was = window.__ngLastCfg;
      ngEdit.busy = true;
      menu.querySelectorAll("button").forEach((x) => { x.disabled = true; });
      b.classList.add("on");
      if (st) st.textContent = t("Speichere …");
      try { await saveEdits((strategy) => set(strategy, v)); }
      catch (e) { if (st) st.textContent = String(e?.message || e); menu.querySelectorAll("button").forEach((x) => { x.disabled = false; }); ngEdit.busy = false; return; }
      for (let i = 0; i < 50 && window.__ngLastCfg === was; i++) await new Promise((r) => setTimeout(r, 100));
      await new Promise((r) => setTimeout(r, 500));
      ngEdit.busy = false;
      if (!ngEdit.on) return;
      closeMenu(true); placeBoxes();
      const k = key && ngEdit.cards?.find((x) => x.meta.id === key);
      if (k) openGroupMenu(k); else if (key === null) openCfgMenu(); else updateBar();
    }));
  }
  // ⚙ in der Leiste (Gruppen-Modus): Einstellungen der ganzen Übersicht + Hinweis auf den Assistenten
  function openCfgMenu() {
    const root = ngEdit.root;
    if (root.querySelector(".menu.cm")) { closeMenu(); return; }
    root.querySelector(".menu")?.remove();
    const list = groupSettings(null), menu = document.createElement("div");
    menu.className = "menu cm";
    menu.innerHTML = `<b>${esc(t("Übersicht"))}</b>${settingsHtml(list)}
      <small>${esc(t("Mehr (Geräte, Räume, Energie …): Dashboard bearbeiten → Assistent"))}</small>
      <div class="row"><button class="close">${esc(t("Schließen"))}</button></div><div class="st"></div>`;
    root.appendChild(menu);
    const bar = root.querySelector(".bar").getBoundingClientRect(), W = Math.min(280, document.documentElement.clientWidth - 16);
    Object.assign(menu.style, { width: `${W}px`, left: `${scrollX + Math.max(8, bar.left + (bar.width - W) / 2)}px`, top: `${scrollY + bar.bottom + 8}px` });
    bindSettings(menu, list, null);
    menu.querySelector(".close").addEventListener("click", () => closeMenu());
  }
  const groupWidth = (c) => +(ngEdit.lay.width[fk(c)] ?? viewLayout(c.meta.view).width?.[c.meta.id] ?? c.meta.w0
    ?? HOME_PARTS.find((p) => p.key === c.meta.id)?.width ?? 1);
  function hiddenGroups() {
    if (ngEdit.mode !== "groups") return [];
    const v = curView(), pend = (ngEdit.lay?.hide || []).filter((x) => x.startsWith(v + "|")).map((x) => x.slice(v.length + 1));
    return [...new Set([...(viewLayout(v).hide || []), ...pend])];
  }
  // Gruppe: Breite, Früher/Später (sofort sichtbar, gespeichert bei „Fertig“), Ausblenden, Einstellungen der Gruppe (speichern sofort)
  function openGroupMenu(c) {
    const root = ngEdit.root, key = c.meta.id, home = c.meta.view === "home", L = viewLayout(c.meta.view);
    root.querySelector(".menu")?.remove();
    ngEdit.sel = key; ngEdit.selSec = c.section;
    const sib = siblings(c), pos = sib.findIndex((x) => x.meta.id === key), w = groupWidth(c);
    const WL = ["", t("1 Spalte"), t("2 Spalten"), t("3 Spalten"), t("ganze Breite")];
    const cols = +getComputedStyle(c.wrap).getPropertyValue("--column-count") || 4;   // Handy: eine Spalte -> keine Breite
    const opts = home ? groupSettings(key) : [];
    const menu = document.createElement("div");
    menu.className = "menu";
    menu.innerHTML = `<b>${esc(home ? groupName(key, L) : c.meta.name || key)}</b><small>${esc(home ? t("Gruppe auf der Übersicht") : t("Gruppe auf dieser Seite"))}</small>
      ${cols < 2 ? "" : `<div class="row wrow"><button class="nar" ${w > 1 ? "" : "disabled"}><ha-icon icon="mdi:minus"></ha-icon></button><span>${esc(WL[w])}</span>
        <button class="wid" ${w < 4 ? "" : "disabled"}><ha-icon icon="mdi:plus"></ha-icon></button></div>`}
      <div class="row"><button class="up" ${pos > 0 ? "" : "disabled"}><ha-icon icon="mdi:arrow-left"></ha-icon>${esc(t("Früher"))}</button>
        <button class="down" ${pos >= 0 && pos < sib.length - 1 ? "" : "disabled"}>${esc(t("Später"))}<ha-icon icon="mdi:arrow-right"></ha-icon></button></div>
      <div class="row"><button class="hide"><ha-icon icon="mdi:eye-off-outline"></ha-icon>${esc(t("Gruppe ausblenden"))}</button></div>
      ${settingsHtml(opts)}
      <div class="row"><button class="close">${esc(t("Schließen"))}</button></div><div class="st"></div><div class="err"></div>`;
    root.appendChild(menu);
    placeMenu(menu, c.r);
    const kids = () => [...c.wrap.parentElement.children];
    const again = () => {   // nach dem Umbau: Rahmen neu, Menü an die neue Stelle
      placeBoxes();
      setTimeout(() => { placeBoxes(); const k = ngEdit.cards.find((x) => x.meta.id === key && x.meta.view === c.meta.view); if (k && ngEdit.sel === key) openGroupMenu(k); }, FLIP_MS + 40);
    };
    const width = (d) => {
      const n = Math.min(4, Math.max(1, w + d));
      ngEdit.lay.width[fk(c)] = n;
      ngEdit.prev.set(fk(c), c.wrap);
      flip(kids(), () => { c.wrap.style.gridColumn = `span min(${n}, var(--column-count, 4))`; });
      ngEdit.moves++; updateBar(); again();
    };
    menu.querySelector(".nar")?.addEventListener("click", () => width(-1));
    menu.querySelector(".wid")?.addEventListener("click", () => width(1));
    const move = (dlt) => {
      const ids = sib.map((x) => x.meta.id), j = pos + dlt;
      [ids[pos], ids[j]] = [ids[j], ids[pos]];
      let ok = false;
      flip(kids(), () => { ok = showOrder(sib, ids); });
      if (!ok) return;
      setPending(c, ids); again();
    };
    menu.querySelector(".up").addEventListener("click", () => move(-1));
    menu.querySelector(".down").addEventListener("click", () => move(1));
    menu.querySelector(".hide").addEventListener("click", () => {
      ngEdit.lay.hide = [...new Set([...ngEdit.lay.hide, fk(c)])];
      ngEdit.prev.set(fk(c), c.wrap);
      flip(kids(), () => { c.wrap.style.display = "none"; });
      ngEdit.moves++; closeMenu(); updateBar(); setTimeout(placeBoxes, FLIP_MS + 40);
    });
    bindSettings(menu, opts, key);
    menu.querySelector(".close").addEventListener("click", () => closeMenu());
    placeBoxes();
  }
  // Ausgeblendete Gruppen zurückholen: gerade erst ausgeblendet -> nur Vorschau zurück, gespeichert -> sofort speichern
  function openHiddenMenu() {
    const root = ngEdit.root, hid = hiddenGroups(), view = curView();
    if (root.querySelector(".menu.hm")) { closeMenu(); return; }
    root.querySelector(".menu")?.remove();
    const menu = document.createElement("div");
    menu.className = "menu hm";
    menu.innerHTML = `<b>${esc(t("Ausgeblendete Gruppen"))}</b>${hid.map((k) => `<div class="hl"><span>${esc(nameOf(view, k))}</span>
      <button data-k="${esc(k)}"><ha-icon icon="mdi:eye-outline"></ha-icon>${esc(t("Anzeigen"))}</button></div>`).join("")}<div class="err"></div>`;
    root.appendChild(menu);
    const bar = root.querySelector(".bar").getBoundingClientRect();
    placeMenu(menu, { left: bar.left + scrollX + (bar.width - 280) / 2, top: bar.bottom + scrollY + 8, width: 280, height: 0 });
    const W = Math.min(280, document.documentElement.clientWidth - 16);
    Object.assign(menu.style, { left: `${scrollX + Math.max(8, bar.left + (bar.width - W) / 2)}px`, top: `${scrollY + bar.bottom + 8}px` });
    menu.querySelectorAll("button[data-k]").forEach((b) => b.addEventListener("click", async () => {
      const k = b.dataset.k, fkey = `${view}|${k}`;
      if (ngEdit.lay.hide.includes(fkey)) {
        ngEdit.lay.hide = ngEdit.lay.hide.filter((x) => x !== fkey);
        const w = ngEdit.prev.get(fkey);
        if (w?.isConnected) flip([...w.parentElement.children], () => { w.style.display = ""; });
        ngEdit.moves = Math.max(0, ngEdit.moves - 1);
        closeMenu(); updateBar(); setTimeout(placeBoxes, FLIP_MS + 40);
        return;
      }
      ngEdit.busy = true;
      try { await saveEdits((s) => { const n = layoutOf(s, view); n.hide = (n.hide || []).filter((x) => x !== k); }); closeMenu(); }
      catch (e) { menu.querySelector(".err").textContent = String(e?.message || e); }
      ngEdit.busy = false;
    }));
  }
  // Erste Besuche: Sprechblase unter der Uhr „Tipp: Uhr antippen“ (+ pulsierender Ring). Je Gerät höchstens 3×, weg nach 25 s,
  // „Verstanden“ oder sobald das Uhr-Pop-up einmal offen war. Admins erfahren dabei von „Kacheln bearbeiten“.
  const TIP_KEY = "nullglow-tip-clock";
  const tipGet = () => { try { return localStorage.getItem(TIP_KEY) || ""; } catch (e) { return "done"; } };
  const tipSet = (v) => { try { localStorage.setItem(TIP_KEY, v); } catch (e) { /* privat */ } };
  let tipShown = false;
  function clockTip() {
    if (tipShown || document.getElementById("ng-tip")) return;
    const base = "/" + (location.pathname.split("/")[1] || "lovelace"), seen = tipGet();
    if (window.__nullglowModes?.[base] === undefined || seen === "done" || +seen >= 3 || window.__ngEdit?.on || location.hash) return;
    let clock = null;
    const view = deepFind(document, "hui-view-container");
    if (view) deepEach(view, (el) => { if (!clock && el.localName === "hui-card" && el.config?.tap_action?.navigation_path === "#design") clock = el; });
    const r = clock && cardRect(clock);
    if (!r?.width || r.top > innerHeight) return;
    tipShown = true;
    tipSet(String((+seen || 0) + 1));
    const admin = !!document.querySelector("home-assistant")?.hass?.user?.is_admin;
    const host = document.createElement("div");
    host.id = "ng-tip";
    const root = host.attachShadow({ mode: "open" });
    const W = Math.min(340, document.documentElement.clientWidth - 16);
    const ring = { left: r.left + scrollX - 10, top: r.top + scrollY - 8, width: Math.min(r.width, 420) + 20, height: r.height + 16 };
    root.innerHTML = `<style>
      :host { position: absolute; top: 0; left: 0; width: 0; height: 0; z-index: 6; font-family: var(--ng-font, inherit); }
      .ring { position: absolute; border-radius: 22px; pointer-events: none; box-shadow: 0 0 0 2px var(--ng-acc, #7cffb2);
        animation: ngtip 1.8s ease-in-out infinite; }
      @keyframes ngtip { 50% { box-shadow: 0 0 0 2px var(--ng-acc, #7cffb2), 0 0 0 10px rgba(var(--rgb-ng-acc, 124, 255, 178), 0), 0 0 34px -4px var(--ng-acc, #7cffb2); } }
      .tip { position: absolute; box-sizing: border-box; padding: 14px 16px; border-radius: 20px; color: var(--ng-txt, #e8f5ee); font-size: 14px; line-height: 1.45;
        background: linear-gradient(var(--ng-glass-2, rgba(255,255,255,.07)), var(--ng-glass-2, rgba(255,255,255,.07))), rgba(var(--rgb-ng-bg, 10, 14, 18), .9);
        backdrop-filter: blur(20px) saturate(1.4); -webkit-backdrop-filter: blur(20px) saturate(1.4);
        box-shadow: inset 0 0 0 1px rgba(var(--rgb-ng-acc, 124, 255, 178), .5), 0 18px 44px -14px rgba(0, 0, 0, .7); transition: opacity .4s; }
      .tip::before { content: ""; position: absolute; top: -7px; left: 34px; width: 14px; height: 14px; transform: rotate(45deg);
        background: rgba(var(--rgb-ng-bg, 10, 14, 18), .95); box-shadow: -1px -1px 0 0 rgba(var(--rgb-ng-acc, 124, 255, 178), .5); }
      b.h { display: flex; align-items: center; gap: 8px; font-size: 15px; margin-bottom: 4px; color: var(--ng-acc, #7cffb2); }
      b.h ha-icon { --mdc-icon-size: 20px; }
      p { margin: 0 0 12px; color: var(--ng-txt-dim, #93a79d); } p b { color: var(--ng-txt, #e8f5ee); }
      .row { display: flex; gap: 8px; justify-content: flex-end; }
      button { font: inherit; font-size: 14px; border: 0; cursor: pointer; border-radius: 999px; min-height: 36px; padding: 0 16px;
        color: var(--ng-txt, #e8f5ee); background: rgba(var(--rgb-ng-txt, 255, 255, 255), .08); }
      button.pri { background: var(--ng-acc, #7cffb2); color: var(--ng-acc-ink, #04140d); font-weight: 600; }
      .off { opacity: 0; }
    </style><div class="ring" style="left:${ring.left}px;top:${ring.top}px;width:${ring.width}px;height:${ring.height}px"></div>
    <div class="tip" style="left:${Math.max(8, Math.min(r.left + scrollX, scrollX + document.documentElement.clientWidth - W - 8))}px;top:${r.bottom + scrollY + 14}px;width:${W}px">
      <b class="h"><ha-icon icon="mdi:gesture-tap"></ha-icon>${esc(t("Tipp: Uhr antippen"))}</b>
      <p>${admin ? t("Design, Hell/Dunkel und <b>Kacheln bearbeiten</b>: Kacheln und Gruppen per Ziehen anordnen, Breite, ausblenden, umbenennen.") : esc(t("Design und Hell/Dunkel für dieses Gerät."))}</p>
      <div class="row"><button class="ok">${esc(t("Verstanden"))}</button><button class="pri go">${esc(t("Zeigen"))}</button></div></div>`;
    const hv = deepFind(document, "hui-view-container");   // Farben des Designs
    if (hv) { const cs = getComputedStyle(hv); EDIT_TOKENS.forEach((k) => { const v = cs.getPropertyValue(k).trim(); if (v) host.style.setProperty(k, v); }); }
    document.body.appendChild(host);
    const close = (done) => {
      if (done) tipSet("done");
      window.removeEventListener("location-changed", onNav); window.removeEventListener("hashchange", onNav);
      root.querySelector(".tip")?.classList.add("off");
      setTimeout(() => host.remove(), 400);
    };
    const onNav = () => { if (location.hash === "#design") close(true); else if (!location.pathname.startsWith(base)) close(false); };
    window.addEventListener("location-changed", onNav); window.addEventListener("hashchange", onNav);
    root.querySelector(".ok").addEventListener("click", () => close(true));
    root.querySelector(".go").addEventListener("click", () => {
      close(true);
      history.pushState(null, "", location.pathname + location.search + "#design");
      window.dispatchEvent(new Event("location-changed")); window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
    setTimeout(() => close(false), 25000);
  }
  window.__ngClockTip = (again) => { if (again) tipShown = false; clockTip(); };   // again: zum Testen erneut zeigen

  // × an einem Hinweis: dauerhaft in der Dashboard-Einstellung (nur Admins); die Karte merkt es sich ohnehin lokal
  window.addEventListener("nullglow-hint-ignore", (ev) => {
    const base = "/" + (location.pathname.split("/")[1] || "lovelace"), ids = ev.detail?.entities || [];
    if (!ids.length || window.__nullglowModes[base] === undefined || !document.querySelector("home-assistant")?.hass?.user?.is_admin) return;
    saveStrategy((s) => { s.hints = { ...(s.hints || {}), ignore: [...new Set([...(s.hints?.ignore || []), ...ids])] }; }).catch(() => {});
  });
  // Start: Uhr-Pop-up → „Kacheln bearbeiten“ navigiert zu #ng-bearbeiten
  const editHash = () => {
    if (location.hash !== "#ng-bearbeiten") return;
    history.replaceState(null, "", location.pathname + location.search);
    setTimeout(editStart, 350);   // Pop-up schließt sich erst
  };
  window.addEventListener("location-changed", editHash);
  window.addEventListener("hashchange", editHash);

  class NullglowDashboardStrategy extends HTMLElement {
    static async generate(config, hass) {
      ngH = hass;
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
        energie: () => viewEnergie(energy, hass), kameras: () => viewKameras(inv, cfg), kalender: () => viewKalender(inv), medien: () => viewMedien(inv, hass),
        sauger: () => viewSauger(inv, hass), maeher: () => viewMaeher(inv, hass),
      };
      const door = doorbellCfg(cfg, hass, inv);   // Klingel-Pop-up auf jeder Seite
      doorbellWatch(hass, base, door);
      window.__ngLastCfg = cfg; window.__ngLastRooms = inv.rooms.map((r) => r.id); window.__ngLastWeather = !!inv.weather;
      window.__ngLastMedia = cfg.media_home !== false && !!inv.media.length && has("nullglow-media-card");
      window.__ngLastInfo = { weather: !!inv.weather, media: !!inv.media.length && has("nullglow-media-card"), lightsCard: has("nullglow-lights-card"),
        contacts: inv.shown.reduce((a, r) => a + r.contacts.length, 0), persons: inv.persons.length, hints: has("nullglow-hints-card"),
        cams: (cfg.live_cameras || []).filter((c) => hass.states[c]).length };   // fürs Bearbeiten auf der Kachel
      const floatHints = (cfg.hints || {}).mode === "float" ? hintsCard(cfg, base, on, false) : null;
      if (on.home && has("nullglow-design-card")) setTimeout(clockTip, 3500);   // Tipp „Uhr antippen“ (erste Besuche)
      return {
        title: cfg.title || "Nullglow",
        views: views.map((v) => {
          const r = build[v.key]();
          if (v.key !== "home") r.sections = applyViewLayout(v.key, r.sections, (cfg.layouts || {})[v.key], hass);
          return { title: t(v.title), path: v.key, icon: v.icon, theme: design, type: "sections", max_columns: 4,
            dense_section_placement: true, sections: [...applyEdits(r.sections, cfg), navSection(views, base, [...(r.extra || []), ...(door ? [doorbellPopup(door)] : []), ...(floatHints ? [floatHints] : [])])] };
        }),
      };
    }

    static async getConfigElement() {
      return document.createElement("nullglow-strategy-editor");
    }
  }
  NullglowDashboardStrategy.configRequired = true; // Assistent öffnet sich beim Anlegen

  // ---------- Einrichtungs-Assistent ----------
  // Versionen der Fremdkarten: steht nur als lokale Variable in der Datei (`let o="v3.4.1"`) → geladene Datei lesen.
  // Bubble-Pop-ups der Vorlage (card_type pop-up + cards) gibt es erst ab Bubble Card 3.2 — darunter öffnet sich nichts.
  const verCache = {};
  function cardVersion(hass, file) {
    return (verCache[file] ??= (async () => {
      const re = new RegExp(`/${file}[^/?#]*\\.js`, "i");
      let urls = [...performance.getEntriesByType("resource").map((e) => e.name), ...[...document.scripts].map((s) => s.src)];
      if (!urls.some((u) => re.test(u))) {
        try { urls = (await hass.callWS({ type: "lovelace/resources" })).map((r) => new URL(r.url, location.origin).href); } catch (e) { urls = []; }
      }
      for (const u of new Set(urls.filter((x) => re.test(x)))) {
        try {
          const m = (await (await fetch(u, { cache: "force-cache" })).text()).match(/(?:let|var|const)\s+\w+\s*=\s*"v(\d+)\.(\d+)\.(\d+)/);
          if (m) return m.slice(1, 4).map(Number);
        } catch (e) { /* nächste Quelle */ }
      }
      return null;
    })());
  }
  const older = (v, min) => { for (let i = 0; i < min.length; i++) if ((v[i] || 0) !== min[i]) return (v[i] || 0) < min[i]; return false; };

  const NEEDS = [
    { tag: "bubble-card", name: "Bubble Card", repo: ["Clooos", "Bubble-Card"], must: true, file: "bubble-card", min: [3, 2, 0],
      why_min: "Pop-ups (Rollläden, Räume, Regenradar …) öffnen sich sonst nicht" },
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
    .row select { font: inherit; font-size: 13px; color: var(--primary-text-color); background: var(--secondary-background-color);
      border: 1px solid var(--divider-color); border-radius: 8px; padding: 4px 6px; max-width: 128px; }
    @media (max-width: 560px) { .row.lay { flex-wrap: wrap; } .row.lay .t { flex-basis: calc(100% - 40px); } .row.lay select { max-width: 112px; } }
    button.reset { font: inherit; font-size: 13px; color: var(--primary-color); background: none; border: 1px solid var(--divider-color);
      border-radius: 8px; padding: 6px 12px; cursor: pointer; }
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
      ngH = h;
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
      ngH = this._hass;
      const c = this._config, hass = this._hass, root = this.shadowRoot;
      const token = (this._tok = (this._tok || 0) + 1);
      const inv = inventory(hass, c);
      const [energy, vers] = await Promise.all([energyCfg(c, hass),
        Promise.all(NEEDS.map((n) => (n.file && has(n.tag) ? cardVersion(hass, n.file) : null)))]);
      if (token !== this._tok) return; // inzwischen neu aufgebaut
      const avail = available(inv, energy);
      root.innerHTML = `<style>${WZ_STYLE}</style><p class="intro"><b>${t("Nullglow einrichten.")}</b> ${t("Das Dashboard baut sich aus deinen Bereichen, Geräten und dem Energie-Dashboard selbst — hier nur noch anpassen. Neue Geräte erscheinen später automatisch.")}</p>`;

      // 1. Voraussetzungen
      const state = NEEDS.map((n, i) => {
        const inst = n.test ? n.test() : has(n.tag), v = vers[i];
        return { inst, v, old: !!(inst && v && n.min && older(v, n.min)) };
      });
      const missing = NEEDS.filter((n, i) => n.must && (!state[i].inst || state[i].old));
      const anyOld = state.some((s) => s.old);
      const nMiss = NEEDS.filter((n, i) => n.must && !state[i].inst).length, nOld = state.filter((s) => s.old).length;
      let box = this._panel("req", t("1 · Voraussetzungen (HACS)"), "mdi:puzzle-check-outline",
        [nMiss && t("{n} fehlt", { n: nMiss }), nOld && t("{n} zu alt", { n: nOld })].filter(Boolean).join(" · ") || t("alles da"));
      if (missing.length) this._open.add("req");
      NEEDS.forEach((n, i) => {
        const { inst, v, old } = state[i], ok = inst && !old;
        const vtxt = v ? ` <small>v${v.join(".")}${old ? t(" — mindestens {min} nötig: {why}", { min: n.min.join("."), why: esc(t(n.why_min)) }) : ""}</small>`
          : inst && n.min ? ` <small>${t("(Version nicht erkannt — mindestens {min} nötig)", { min: n.min.join(".") })}</small>` : "";
        box.insertAdjacentHTML("beforeend", `<div class="req"><ha-icon class="${ok ? "ok" : n.must ? "no" : "opt"}"
          icon="${ok ? "mdi:check-circle" : old ? "mdi:update" : n.must ? "mdi:close-circle" : "mdi:minus-circle-outline"}"></ha-icon>
          <span class="t">${esc(n.name)}${vtxt}${n.must ? "" : ` <small>(optional: ${esc(t(n.why))})</small>`}</span>
          ${ok ? "" : `<a href="${hacsLink(n.repo)}" target="_blank" rel="noreferrer">${old ? t("In HACS aktualisieren") : t("In HACS öffnen")}</a>`}</div>`);
      });
      if (missing.length) box.insertAdjacentHTML("beforeend", `<div class="note">${t("Nach der {x} in HACS die Seite neu laden (Strg+F5, in der Handy-App den App-Cache leeren).",
        { x: t(anyOld ? "Aktualisierung" : "Installation") })}</div>`);

      // 2. Seiten
      const info = {
        home: t("Uhr, Wetter, Energie, Licht, Klima, Rollläden, Personen, Termine"),
        licht: t("{n} Lampen", { n: inv.lightsAll.length }), klima: t("{n} Räume mit Temperatur", { n: inv.shown.filter((r) => r.temperature || r.climate.length).length }),
        energie: energy ? t("aus dem Energie-Dashboard") : t("kein Solar/Netz gefunden"), kameras: t("{n} Kameras", { n: inv.cameras.length }),
        kalender: t("{n} Kalender", { n: inv.calendars.length }),
        medien: has("nullglow-media-card") ? t("{n} Medien-Player", { n: inv.media.length }) : t("Medien-Karte fehlt"), sauger: inv.vacuums.length ? t("{n} Saugroboter", { n: inv.vacuums.length }) : t("kein Saugroboter"),
        maeher: inv.mowers.length ? t("{n} Mähroboter", { n: inv.mowers.length }) : t("kein Mähroboter"),
      };
      box = this._panel("views", t("2 · Seiten"), "mdi:view-dashboard-outline", t("{n} aktiv", { n: VIEWS.filter((v) => avail[v.key] && (c.views?.[v.key] ?? true)).length }));
      box.appendChild(this._form(VIEWS.map((v) => ({ name: v.key, label: `${t(v.title)} — ${info[v.key]}`, disabled: !avail[v.key], selector: { boolean: {} } })),
        Object.fromEntries(VIEWS.map((v) => [v.key, avail[v.key] && (c.views?.[v.key] ?? true)])), (val) => {
          c.views = Object.fromEntries(VIEWS.filter((v) => avail[v.key] && val[v.key] === false).map((v) => [v.key, false]));
          this._emit();
        }));

      // 3. Übersicht anordnen: Reihenfolge, Breite, ein-/ausblenden — gespeichert werden nur Abweichungen (home_layout)
      const L = c.home_layout || {};
      const present = homeParts(inv, energy, "", {}, hass, c, c.design || "nullglow").parts.map((p) => p.key);
      const rank = (k) => { const i = (L.order || []).indexOf(k); return i === -1 ? 100 + HOME_PARTS.findIndex((p) => p.key === k) : i; };
      const keys = HOME_PARTS.map((p) => p.key).filter((k) => present.includes(k)).sort((a, b) => rank(a) - rank(b));
      const setLayout = (fn) => {
        const n = clone(L); fn(n); tidyLayout(n);
        if (Object.keys(n).length) c.home_layout = n; else delete c.home_layout;
        this._emit(); this._build();
      };
      box = this._panel("layout", t("3 · Übersicht anordnen"), "mdi:view-grid-plus-outline", c.home_layout ? t("angepasst") : t("Standard"));
      box.insertAdjacentHTML("beforeend", `<div class="note">${t("Reihenfolge der Gruppen auf der Übersicht (Pfeile, von links oben nach rechts unten; passt eine kleine Gruppe in eine Lücke davor, rückt sie dort hinein), Auge = ein-/ausblenden, Auswahl = Breite in Spalten. Mehr Breite = größere Kameras. Am Handy steht ohnehin alles untereinander.")}</div>`);
      const WOPT = [[1, t("1 Spalte")], [2, t("2 Spalten")], [3, t("3 Spalten")], [4, t("ganze Breite")]];
      keys.forEach((k, i) => {
        const p = HOME_PARTS.find((h) => h.key === k), off = (L.hide || []).includes(k);
        const w = +(L.width || {})[k] || p.width, nCam = (c.live_cameras || []).filter((x) => hass.states[x]).length;
        const row = document.createElement("div");
        row.className = `row lay ${off ? "off" : ""}`;
        row.innerHTML = `<ha-icon class="ic" icon="${p.icon}"></ha-icon><div class="t"><b>${esc(groupName(k, L))}</b></div>
          ${k === "kameras" && nCam > 1 ? `<select data-a="cams" title="${t("Kameras nebeneinander")}">${[1, 2, 3].map((n) =>
            `<option value="${n}" ${(+L.cam_cols || 1) === n ? "selected" : ""}>${t("{n} je Reihe", { n })}</option>`).join("")}</select>` : ""}
          <select data-a="width" title="${t("Breite")}">${WOPT.map(([v, t]) => `<option value="${v}" ${w === v ? "selected" : ""}>${t}</option>`).join("")}</select>
          <button data-a="eye" title="${off ? t("anzeigen") : t("ausblenden")}"><ha-icon icon="${off ? "mdi:eye-off-outline" : "mdi:eye-outline"}"></ha-icon></button>
          <button data-a="up" ${i ? "" : "disabled"}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button data-a="down" ${i < keys.length - 1 ? "" : "disabled"}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`;
        row.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => setLayout((n) => {
          if (b.dataset.a === "eye") n.hide = off ? (n.hide || []).filter((x) => x !== k) : [...(n.hide || []), k];
          else { const o = [...keys], j = i + (b.dataset.a === "up" ? -1 : 1); [o[i], o[j]] = [o[j], o[i]]; n.order = o; }
        })));
        row.querySelectorAll("select").forEach((s) => s.addEventListener("change", () => setLayout((n) => {
          if (s.dataset.a === "width") n.width = { ...(n.width || {}), [k]: +s.value }; else n.cam_cols = +s.value;
        })));
        box.appendChild(row);
      });
      const canMedia = c.media_home !== false && inv.media.length && has("nullglow-media-card");
      [[inv.weather, "wetter", "split_weather", t("Wetter zurück zur Uhr"), t("Wetter als eigene Gruppe")],
        [canMedia, "media", "split_media", t("Medien zurück zur Uhr"), t("Medien als eigene Gruppe")]].forEach(([ok, key, flag, back, own]) => {
        if (!ok) return;
        const nt = document.createElement("div");
        nt.className = "note";
        nt.innerHTML = `<button class="split">${esc(L[flag] ? back : own)}</button>`;
        nt.querySelector("button").addEventListener("click", () => setLayout((n) => splitPart(n, key, !n[flag])));
        box.appendChild(nt);
      });
      if (!present.includes("kameras")) box.insertAdjacentHTML("beforeend", `<div class="note">${t("Kameras auf der Übersicht: unter <b>6 · … Kameras</b> „Live-Kameras auf der Übersicht“ wählen — dann erscheinen sie hier zum Anordnen.")}</div>`);
      if (c.home_layout) {
        box.insertAdjacentHTML("beforeend", `<div class="note"><button class="reset">${t("Standard wiederherstellen")}</button></div>`);
        box.querySelector("button.reset").addEventListener("click", () => { delete c.home_layout; this._emit(); this._build(); });
      }

      // 4. Räume
      box = this._panel("rooms", t("4 · Räume, Rollläden & Fenster"), "mdi:floor-plan", t("{n} von {m}", { n: inv.shown.length, m: inv.rooms.length }));
      const nCov = inv.shown.reduce((a, r) => a + r.covers.length, 0), nCon = inv.shown.reduce((a, r) => a + r.contacts.length, 0);
      box.appendChild(this._form([
        { name: "hide_labels", label: t("Mit Label ausblenden"), helper: t("Entitäten, Geräte oder ganze Bereiche mit diesem Label erscheinen nicht (z. B. no_dboard)"),
          selector: { label: { multiple: true } } },
        { name: "short_names", label: t("Namen kürzen"), helper: t("Etage und Raum vorne im Namen weglassen („EG - Küche - Rollladen links“ → „Küche · links“)"), selector: { boolean: {} } },
        { name: "covers", label: t("Rollläden auf der Übersicht ({n})", { n: nCov }), helper: t("Zusammengefasst = eine Kachel mit Alle auf/zu, Antippen öffnet alle nach Etage"),
          selector: { select: { mode: "dropdown", options: [
            { value: "auto", label: t("Automatisch (ab 7 zusammengefasst)") }, { value: "list", label: t("Einzeln") }, { value: "compact", label: t("Zusammengefasst") }] } } },
        ...(has("nullglow-lights-card") ? [{ name: "lights", label: t("Licht auf der Übersicht ({n} Räume)", { n: inv.shown.filter((r) => r.lights.length).length }),
          helper: t("Zusammengefasst = eine Kachel mit Balken je Raum und „Aus“, Antippen öffnet alle Räume nach Etage"),
          selector: { select: { mode: "dropdown", options: [
            { value: "rooms", label: t("Je Raum eine Kachel (Standard)") }, { value: "compact", label: t("Zusammengefasst") }] } } }] : []),
        { name: "light_tap", label: t("Licht-Kachel auf der Übersicht antippen"),
          helper: t("Pop-up = alle Lampen des Raums einzeln (dimmen, Farbe, Szenen); Halten schaltet dann den Raum an/aus"),
          selector: { select: { mode: "dropdown", options: [
            { value: "toggle", label: t("Licht an/aus (Standard)") }, { value: "popup", label: t("Pop-up mit den Lampen des Raums") }] } } },
        { name: "climate_graph", label: t("Temperatur-Verlauf in den Klima-Kacheln"),
          helper: t("zeigt die letzten 24 Stunden als Linie hinter der Kachel (farbig nach Temperatur)"), selector: { boolean: {} } },
        { name: "contacts", label: t("Fenster & Türen auf der Übersicht ({n})", { n: nCon }), helper: t("Zusammengefasst = eine Kachel „Alles zu“ / „2 offen · …“, Antippen zeigt alle nach Etage"),
          selector: { select: { mode: "dropdown", options: [
            { value: "auto", label: t("Automatisch (ab 7 zusammengefasst)") }, { value: "list", label: t("Einzeln") },
            { value: "compact", label: t("Zusammengefasst") }, { value: "off", label: t("Nicht anzeigen") }] } } },
      ], { hide_labels: c.hide_labels || [], short_names: c.short_names !== false, covers: c.covers || "auto", contacts: c.contacts || "auto",
        light_tap: c.light_tap || "toggle", climate_graph: c.climate_graph !== false, lights: c.lights || "rooms" }, (v) => {
        if (v.lights === "compact") c.lights = "compact"; else delete c.lights;
        if (v.contacts && v.contacts !== "auto") c.contacts = v.contacts; else delete c.contacts;
        if (v.climate_graph === false) c.climate_graph = false; else delete c.climate_graph;
        if (v.light_tap === "popup") c.light_tap = "popup"; else delete c.light_tap;
        if (v.hide_labels?.length) c.hide_labels = v.hide_labels; else delete c.hide_labels;
        if (v.short_names === false) c.short_names = false; else delete c.short_names;
        if (v.covers && v.covers !== "auto") c.covers = v.covers; else delete c.covers;
        this._emit(); this._build();
      }));
      if (!inv.rooms.length) box.insertAdjacentHTML("beforeend", `<div class="note">${t("Keine Bereiche gefunden. Lege sie unter <b>Einstellungen → Bereiche, Zonen &amp; Etagen</b> an und ordne deine Geräte zu — dann erscheinen hier die Räume.")}</div>`);
      else box.insertAdjacentHTML("beforeend", `<div class="note">${t("Aus deinen HA-Bereichen. Auge = anzeigen, Pfeile = Reihenfolge, Raum antippen = Name, Symbol, Hauptlicht, Temperatur ändern.")}</div>`);
      const ids = inv.rooms.map((r) => r.id);
      inv.rooms.forEach((r, i) => {
        const row = document.createElement("div");
        row.className = `row ${r.hide ? "off" : ""}`;
        const tv = r.temperature ? parseFloat(hass.states[r.temperature]?.state) : NaN;
        const temp = isFinite(tv) ? tv.toLocaleString(numLoc(), { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : null;
        row.innerHTML = `<ha-icon class="ic" icon="${esc(r.icon)}"></ha-icon><div class="t"><b>${esc(r.name)}</b><small>${t(r.lights.length === 1 ? "{n} Licht" : "{n} Lichter", { n: r.lights.length })}${temp ? ` · ${esc(temp)} °C` : ""}${r.climate.length ? t(" · {n} Heizung/Klima", { n: r.climate.length }) : ""}${r.covers.length ? t(" · {n} Rollladen", { n: r.covers.length }) : ""}${r.contacts.length ? t(" · {n} Fenster/Tür", { n: r.contacts.length }) : ""}</small></div>
          <button data-a="eye" title="${r.hide ? t("anzeigen") : t("ausblenden")}"><ha-icon icon="${r.hide ? "mdi:eye-off-outline" : "mdi:eye-outline"}"></ha-icon></button>
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
              { name: "name", label: t("Name"), selector: { text: {} } },
              { name: "icon", label: t("Symbol"), selector: { icon: { placeholder: r.icon } } },
            ] },
            { name: "light", label: t("Hauptlicht (Kachel auf der Übersicht)"),
              helper: t("leer = automatisch: {x}", { x: r.auto.light ? inv.niceName(r.auto.light) : t("Knopf schaltet alle Lampen des Raums") }),
              selector: { entity: { filter: { domain: "light" } } } },
            { name: "temperature", label: t("Temperatur-Sensor"), helper: t("leer = automatisch: {x}", { x: r.auto.temperature ? inv.niceName(r.auto.temperature) : t("keiner") }), selector: { entity: { filter: { domain: "sensor", device_class: "temperature" } } } },
            { name: "humidity", label: t("Luftfeuchte-Sensor"), helper: t("leer = automatisch: {x}", { x: r.auto.humidity ? inv.niceName(r.auto.humidity) : t("keiner") }), selector: { entity: { filter: { domain: "sensor", device_class: "humidity" } } } },
          ], { name: o.name, icon: o.icon, light: o.light, temperature: o.temperature, humidity: o.humidity }, (v) => {
            setRoom({ name: v.name, icon: v.icon, light: v.light, temperature: v.temperature, humidity: v.humidity });
            this._emit();
          }));
          box.appendChild(wrap);
        }
      });

      // 5. Energie
      box = this._panel("energy", t("5 · Energie"), "mdi:lightning-bolt", c.energy ? t("angepasst") : energy ? t("automatisch") : t("nicht gefunden"));
      box.insertAdjacentHTML("beforeend", `<div class="note">${t("Leer lassen = automatisch aus dem Energie-Dashboard. Hier kannst du Punkte zuweisen und benennen — wie in der Energie-Karte.")}</div>`);
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

      // 6. Wetter, Personen, Kameras, Kalender
      this._doorAuto = doorbellAuto(hass, inv);
      const door = doorbellCfg(c, hass, inv);
      this._doorHelp = c.doorbell?.enabled
        ? (door ? t("aktiv: {e} → {c} — beim Klingeln öffnet sich die Kamera groß (2 Min, auf jeder Seite)", { e: door.event, c: door.camera })
          : t("keine Klingel oder Kamera gefunden — unten wählen"))
        : t("beim Klingeln öffnet sich die Kamera groß auf jeder Seite (2 Min){x}", { x: this._doorAuto.event ? t(" — erkannt: {e}", { e: this._doorAuto.event }) : "" });
      box = this._panel("more", t("6 · Design, Wetter, Personen, Kameras, Kalender"), "mdi:tune-variant", designs(hass)[c.design] || designs(hass).nullglow || "Nullglow");
      box.appendChild(this._form([
        { name: "weather", label: t("Wetter"), helper: t("leer = {x}", { x: inv.weather || t("keins gefunden") }), selector: { entity: { filter: { domain: "weather" } } } },
        { name: "persons", label: t("Personen"), helper: t("leer = alle"), selector: { entity: { multiple: true, filter: { domain: "person" } } } },
        { name: "person_map", label: t("Karte mit Personen auf der Übersicht"), helper: t("zeigt, wo alle gerade sind (Standort aus der HA-App) — unter den Personen im Bereich Zuhause"),
          selector: { boolean: {} } },
        ...(c.person_map ? [{ name: "map_tint", label: t("Karte in den Design-Farben"), helper: t("aus = normale Kartenfarben"), selector: { boolean: {} } }] : []),
        { name: "cameras", label: t("Kameras"), helper: t("leer = alle"), selector: { entity: { multiple: true, filter: { domain: "camera" } } } },
        { name: "live_cameras", label: t("Live-Kameras auf der Übersicht (optional)"), helper: t("eine oder mehrere; Stream nur, solange die Übersicht offen ist — Größe und Platz unter „3 · Übersicht anordnen“"),
          selector: { entity: { multiple: true, filter: { domain: "camera" } } } },
        { name: "doorbell_on", label: t("Klingel: Kamera groß anzeigen"), helper: this._doorHelp, selector: { boolean: {} } },
        ...(c.doorbell?.enabled ? [
          { name: "doorbell_event", label: t("Klingel-Sensor"),
            helper: t("leer = automatisch: {x}", { x: this._doorAuto.event || t("keiner gefunden") }) + ". "
              + t("Auch ein einfacher Taster geht (z. B. Zigbee „…_action“) — jeder Druck zählt als Klingeln."),
            selector: { entity: { include_entities: Object.keys(hass.states).filter((id) =>
              ["event", "binary_sensor"].includes(DOMAIN(id)) || DOOR_ACTION(id) || id === c.doorbell?.event) } } },
          { name: "doorbell_camera", label: t("Kamera für das Klingel-Fenster"), helper: t("leer = automatisch: {x}", { x: this._doorAuto.camera || t("keine gefunden") }),
            selector: { entity: { filter: { domain: "camera" } } } }] : []),
        { name: "cameras_live", label: t("Kameras-Seite live"), helper: t("aus = Standbild, das sich alle paar Sekunden erneuert (Antippen = live)"), selector: { boolean: {} } },
        { name: "calendars", label: t("Kalender"), helper: t("leer = alle"), selector: { entity: { multiple: true, filter: { domain: "calendar" } } } },
        { name: "media_home", label: t("Musik/TV auf der Übersicht, solange etwas läuft"), helper: t("mit Cover — die Karte färbt sich in den Farben des Covers"), selector: { boolean: {} } },
        { name: "media_players", label: t("Medien-Player"), helper: t("leer = alle (Seite „Medien“ und Übersicht)"), selector: { entity: { multiple: true, filter: { domain: "media_player" } } } },
        { name: "screen_switch", label: t("Steckdose des Wandmonitors (optional)"), helper: t("ist sie aus, pausiert das Nordlicht im Hintergrund"),
          selector: { entity: { filter: { domain: ["switch", "light", "input_boolean", "binary_sensor"] } } } },
        { name: "title", label: t("Titel des Dashboards"), selector: { text: {} } },
        { name: "design", label: "Design", helper: t("Standard-Farbvariante — auf jedem Gerät per Uhr antippen umstellbar"),
          selector: { select: { mode: "dropdown", options: Object.entries(designs(hass)).map(([value, label]) => ({ value, label })) } } },
        { name: "mode", label: t("Hell / Dunkel"), helper: t("jedes Design gibt es hell und dunkel"),
          selector: { select: { mode: "dropdown", options: [
            { value: "auto", label: t("Wie Gerät / HA-Profil") }, { value: "dark", label: t("Immer dunkel") },
            { value: "light", label: t("Immer hell") }, { value: "sun", label: t("Nach Sonne (tagsüber hell)") }] } } },
      ], { design: c.design || "nullglow", mode: c.mode || "auto", weather: c.weather, persons: c.persons || [], cameras: c.cameras || [], live_cameras: c.live_cameras || [], cameras_live: !!c.cameras_live, person_map: !!c.person_map, map_tint: c.map_tint !== false, calendars: c.calendars || [], title: c.title, media_home: c.media_home !== false, media_players: c.media_players || [],
        doorbell_on: !!c.doorbell?.enabled, doorbell_event: c.doorbell?.event, doorbell_camera: c.doorbell?.camera,
        screen_switch: c.screen_switch }, (v) => {
        for (const k of ["weather", "title", "screen_switch"]) { if (v[k]) c[k] = v[k]; else delete c[k]; }
        if (v.design && v.design !== "nullglow") c.design = v.design; else delete c.design;
        if (v.mode && v.mode !== "auto") c.mode = v.mode; else delete c.mode;
        for (const k of ["persons", "cameras", "calendars", "live_cameras", "media_players"]) { if (v[k]?.length) c[k] = v[k]; else delete c[k]; }
        if (v.media_home === false) c.media_home = false; else delete c.media_home;
        if (v.cameras_live) c.cameras_live = true; else delete c.cameras_live;
        const wasMap = !!c.person_map;
        if (v.person_map) c.person_map = true; else delete c.person_map;
        if (v.map_tint === false) c.map_tint = false; else delete c.map_tint;
        if (wasMap !== !!v.person_map) { this._emit(); this._build(); return; }   // Schalter „Design-Farben“ ein-/ausblenden
        const wasDoor = !!c.doorbell?.enabled;
        if (v.doorbell_on) c.doorbell = { enabled: true, ...(v.doorbell_event ? { event: v.doorbell_event } : {}), ...(v.doorbell_camera ? { camera: v.doorbell_camera } : {}) };
        else delete c.doorbell;
        if (wasDoor !== !!v.doorbell_on) { this._emit(); this._build(); return; }   // Felder für Sensor/Kamera ein-/ausblenden
        this._emit();
      }));

      // 7. Hinweise (nullglow-hints-card) — nur Abweichungen speichern
      const H = c.hints || {}, RULES = ["rain", "waste", "battery", "offline", "updates", "away"];
      const setHints = (fn) => {
        const n = clone(H); fn(n);
        if (n.rules) { for (const k of Object.keys(n.rules)) if (n.rules[k] !== false) delete n.rules[k]; if (!Object.keys(n.rules).length) delete n.rules; }
        if (n.waste) { for (const k of Object.keys(n.waste)) if (!n.waste[k] || (Array.isArray(n.waste[k]) && !n.waste[k].length)) delete n.waste[k]; if (!Object.keys(n.waste).length) delete n.waste; }
        if (!n.mode || n.mode === "top") delete n.mode;
        if (!(+n.battery_threshold) || +n.battery_threshold === 15) delete n.battery_threshold;
        if (!n.ignore?.length) delete n.ignore;
        if (Object.keys(n).length) c.hints = n; else delete c.hints;
        this._emit();
      };
      box = this._panel("hints", t("7 · Hinweise"), "mdi:bell-badge-outline", H.mode === "off" ? t("aus") : H.mode === "float" ? t("schwebend") : t("oben auf der Übersicht"));
      box.insertAdjacentHTML("beforeend", `<div class="note">${t("Eine Leiste, die nur erscheint, wenn etwas zu tun ist: Fenster offen bei Regen, Müll morgen, Akkus schwach, Geräte offline, Updates, niemand zu Hause aber Licht an. Das × an einem Hinweis blendet ihn für einzelne Geräte aus — hier unter „Nie warnen für“ wieder entfernen.")}</div>`);
      const HLAB = { rain: t("Regen & offene Fenster"), waste: t("Müll heute/morgen"), battery: t("Akkus schwach"), offline: t("Geräte offline"),
        updates: t("Updates verfügbar"), away: t("Niemand zu Hause, Licht an / Tür offen") };
      const hform = this._form([
        { name: "mode", label: t("Anzeige"), selector: { select: { mode: "dropdown", options: [
          { value: "top", label: t("Oben auf der Übersicht (Standard)") }, { value: "float", label: t("Schwebend über der Navigation, auf jeder Seite (Wandmonitor)") },
          { value: "off", label: t("Aus") }] } } },
        { type: "grid", name: "", schema: RULES.map((k) => ({ name: k, label: HLAB[k], selector: { boolean: {} } })) },
        { name: "battery_threshold", label: t("Akku-Warnung unter (%)"), selector: { number: { min: 5, max: 50, mode: "box" } } },
        { name: "waste_calendar", label: t("Müll-Kalender (jeder Termin zählt)"),
          helper: t("leer = automatisch: Waste Collection Schedule, sonst Stichworte (Restmüll, Gelbe Tonne, Papier, Bio …) in allen Kalendern"),
          selector: { entity: { filter: { domain: "calendar" } } } },
        { name: "waste_keywords", label: t("Weitere Müll-Stichworte"), helper: t("z. B. Grünschnitt, Wertstoffhof"), selector: { text: { multiple: true } } },
        { name: "ignore", label: t("Nie warnen für"), helper: t("z. B. Geräte, die immer wenig Akku melden"), selector: { entity: { multiple: true } } },
      ], { mode: H.mode || "top", ...Object.fromEntries(RULES.map((k) => [k, H.rules?.[k] !== false])),
        battery_threshold: H.battery_threshold || 15, waste_calendar: H.waste?.calendar, waste_keywords: H.waste?.keywords || [], ignore: H.ignore || [] },
      (v) => setHints((n) => {
        n.mode = v.mode; n.rules = Object.fromEntries(RULES.map((k) => [k, v[k] !== false])); n.battery_threshold = v.battery_threshold;
        n.waste = { calendar: v.waste_calendar, keywords: v.waste_keywords }; n.ignore = v.ignore;
      }));
      box.appendChild(hform);
      const HC = customElements.get("nullglow-hints-card"), dkey = "/" + (location.pathname.split("/")[1] || "lovelace");
      const local = HC?.getLocalIgnore?.(dkey) || [];
      if (local.length) {
        box.insertAdjacentHTML("beforeend", `<div class="note">${t("Auf diesem Gerät zusätzlich ausgeblendet: {n}", { n: local.length })} <button class="reset hl">${t("zurückholen")}</button></div>`);
        box.querySelector("button.hl").addEventListener("click", () => { HC.clearLocalIgnore(dkey); this._build(); });
      }

      // 8. Direkt auf der Kachel bearbeitet: Überblick + zurücksetzen
      const nNames = Object.keys(c.names || {}).length, nHidden = (c.hidden || []).length, nOrder = (c.tile_order || []).length;
      box = this._panel("edited", t("8 · Direkt bearbeitet"), "mdi:pencil-outline",
        nNames + nHidden + nOrder ? t("{a} Namen · {b} ausgeblendet", { a: nNames, b: nHidden }) : t("nichts"));
      box.insertAdjacentHTML("beforeend", `<div class="note">${t("Auf dem Dashboard: <b>Uhr antippen → Kacheln bearbeiten</b> (nur Administratoren). Kachel antippen: umbenennen, ausblenden; halten und ziehen: verschieben. Namen gelten nur in diesem Dashboard.")}</div>`);
      if (nNames) {
        Object.entries(c.names).forEach(([id, n]) => {
          const row = document.createElement("div");
          row.className = "row";
          row.innerHTML = `<ha-icon class="ic" icon="mdi:rename-outline"></ha-icon><div class="t"><b>${esc(n)}</b><small>${esc(hass.states[id]?.attributes?.friendly_name || id)}</small></div>
            <button title="${t("Originalname")}"><ha-icon icon="mdi:backup-restore"></ha-icon></button>`;
          row.querySelector("button").addEventListener("click", () => { delete c.names[id]; if (!Object.keys(c.names).length) delete c.names; this._emit(); this._build(); });
          box.appendChild(row);
        });
      }
      box.appendChild(this._form([{ name: "hidden", label: t("Ausgeblendete Kacheln"), helper: t("entfernen = wieder anzeigen"), selector: { entity: { multiple: true } } }],
        { hidden: c.hidden || [] }, (v) => { if (v.hidden?.length) c.hidden = v.hidden; else delete c.hidden; this._emit(); }));
      if (nOrder) {
        box.insertAdjacentHTML("beforeend", `<div class="note"><button class="reset ord">${t("Reihenfolge der Kacheln zurücksetzen")}</button></div>`);
        box.querySelector("button.ord").addEventListener("click", () => { delete c.tile_order; this._emit(); this._build(); });
      }

      // 9. Tipps
      box = this._panel("tips", t("9 · Handy & Wandmonitor"), "mdi:monitor-cellphone");
      box.insertAdjacentHTML("beforeend", `<div class="note">${t("<b>Handy:</b> läuft in der HA-App, Seiten unten per Leiste wechseln (wischbar).")}<br>
        ${t("<b>Wandmonitor (Full HD):</b> Dashboard-Adresse mit <code>?kiosk</code> öffnen (braucht Kiosk Mode) — ohne Kopfzeile und Seitenleiste. Bei 1920×1080 mit 125 % Zoom sieht es aus wie im Original. Hochkant geht auch (die Leiste zeigt dann nur Symbole).")}<br>
        ${t("<b>Uhr antippen:</b> Design und Hell/Dunkel nur für dieses Gerät — der Standard bleibt, was hier eingestellt ist. Als Admin findest du dort auch <b>Kacheln bearbeiten</b>: Kacheln und ganze Gruppen per Ziehen anordnen, breiter machen, ausblenden, umbenennen — auf jeder Seite.")}<br>
        ${t("<b>Livebilder am Wandmonitor:</b> Browser-Cache begrenzen, z. B. Chromium mit <code>--disk-cache-size=67108864</code> (64 MB) starten.")}<br>
        ${t("Ändern kannst du alles später über <b>Dashboard bearbeiten</b>; „Kontrolle übernehmen“ macht daraus ein normales, frei bearbeitbares Dashboard (dann ohne automatische Aktualisierung).")}</div>`);
    }
  }

  customElements.define("nullglow-strategy-editor", NullglowStrategyEditor);
  customElements.define("ll-strategy-dashboard-nullglow", NullglowDashboardStrategy);
  window.customStrategies = window.customStrategies || [];
  if (!window.customStrategies.some((s) => s.type === "nullglow"))
    window.customStrategies.push({ type: "nullglow", strategyType: "dashboard", name: "Nullglow",
      description: t("Dunkles Glas-Dashboard mit Energiefluss, Licht, Klima, Kameras — richtet sich aus deinen Bereichen selbst ein") });
  window.__nullglowStrategy = { inventory, generate: NullglowDashboardStrategy.generate }; // Tests
})();
