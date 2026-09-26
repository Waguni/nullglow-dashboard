# Nullglow Dashboard für Home Assistant

Dunkles Glas-Dashboard mit leuchtendem Energiefluss, Lichtkacheln in der echten Lampenfarbe, Raumklima mit
Verlaufskurven, Kameras, Kalender, Saug- und Mähroboter — **richtet sich aus deinem Home Assistant selbst ein**.
Kein YAML: Bereiche, Geräte und das Energie-Dashboard werden automatisch übernommen, alles Weitere klickst du im
Einrichtungs-Assistenten. Läuft auf dem **Handy** (HA-App) und auf einem **Full-HD-Wandmonitor**.

## Was du bekommst

| Seite | Inhalt |
|---|---|
| **Übersicht** | große Uhr mit Begrüßung, Wetter + nächste Stunden (antippen = **Regenradar**), Energiefluss, Licht je Raum, Raumtemperaturen, Rollläden, Personen, Schlösser, Termine, Batterien & Wartung |
| **Licht** | je Raum alle Lampen als Schieberegler in ihrer echten Farbe, Szenen, „Alles aus“ |
| **Klima** | je Raum Temperatur groß mit 24-h-Kurve (farbig), Heizung und Klimaanlage |
| **Energie** | Energiefluss mit Partikeln, Netz (je Phase), Solar mit Prognose, Leistung 24 h, Monatsbilanz |
| **Kameras**, **Kalender** | alle Kameras bzw. Kalender |
| **Sauger**, **Mäher** | Karte, Steuerung, Akku, Verschleiß (nur wenn vorhanden) |

Dazu: Raum-Pop-ups (Licht lange drücken oder Temperatur antippen), Hintergrund in Wetterfarben und ein
**Nordlicht**, das mit deiner Solarleistung stärker wird. Seiten ohne passende Geräte erscheinen gar nicht erst.

## Voraussetzungen

- Home Assistant (getestet mit 2026.9) und [HACS](https://hacs.xyz)
- Aus HACS (Typ „Dashboard“) — ein Klick auf den Link öffnet die Seite direkt in deinem HACS:
  - **Bubble Card** — [in HACS öffnen](https://my.home-assistant.io/redirect/hacs_repository/?owner=Clooos&repository=Bubble-Card&category=plugin)
  - **Mushroom** — [in HACS öffnen](https://my.home-assistant.io/redirect/hacs_repository/?owner=piitaya&repository=lovelace-mushroom&category=plugin)
  - **card-mod** — [in HACS öffnen](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=plugin)
  - optional **Calendar Card Pro** (Termine) — [in HACS öffnen](https://my.home-assistant.io/redirect/hacs_repository/?owner=alexpfau&repository=calendar-card-pro&category=plugin)
  - optional **Kiosk Mode** (Wandmonitor ohne Kopfzeile) — [in HACS öffnen](https://my.home-assistant.io/redirect/hacs_repository/?owner=NemesisRE&repository=kiosk-mode&category=plugin)

Der Assistent prüft das und zeigt fehlende Teile mit Link an.

## Installation (ca. 5 Minuten)

1. **In HACS öffnen:** [diesen Link antippen](https://my.home-assistant.io/redirect/hacs_repository/?owner=Waguni&repository=nullglow-dashboard&category=plugin)
   und das Hinzufügen bestätigen — oder von Hand: **HACS → ⋮ (oben rechts) → Benutzerdefinierte Repositories**,
   URL `https://github.com/Waguni/nullglow-dashboard`, Typ **Dashboard** → Hinzufügen.
2. In HACS **Nullglow Dashboard** öffnen → **Herunterladen**.
3. Browser **neu laden** (Strg+F5; in der App: App ganz schließen und neu öffnen).
4. **Einstellungen → Dashboards → Dashboard hinzufügen** → unten bei „Benutzerdefiniert“ **Nullglow** wählen.
5. Der **Einrichtungs-Assistent** öffnet sich — alles ist schon vorausgefüllt:
   1. Voraussetzungen (grüne Haken)
   2. Seiten an/aus
   3. Räume: ausblenden (Auge), sortieren (Pfeile), antippen für Name, Symbol, Hauptlicht, Temperatur-Sensor
   4. Energie: Punkte zuweisen und **benennen** (Solar, Netz, jeder Verbraucher mit Name und Symbol)
   5. Wetter, Personen, Kameras, Kalender, Steckdose des Wandmonitors
6. **Speichern** → Namen und Symbol für das Dashboard wählen → fertig.

Ändern kannst du alles später über **⋮ → Dashboard bearbeiten** (öffnet den Assistenten wieder).

### Tipps für ein gutes Ergebnis

- **Bereiche**: Das Dashboard ordnet nach deinen HA-Bereichen (Einstellungen → Bereiche, Zonen & Etagen). Geräte ohne
  Bereich tauchen nicht in den Räumen auf — einfach zuordnen.
- **Energie**: Ist das HA-**Energie-Dashboard** eingerichtet (inkl. Leistungssensoren), ist der Energiefluss sofort fertig.
  Sonst im Assistenten unter „Energie“ auf **Automatisch erkennen** tippen oder Sensoren wählen.
- **Hauptlicht**: Hat ein Raum eine Lichtgruppe (z. B. Hue-Raum), wird sie zur Kachel auf der Übersicht; sonst schaltet
  der Knopf alle Lampen des Raums.

## Wandmonitor (Full HD)

- Dashboard-Adresse mit **`?kiosk`** öffnen (z. B. `http://homeassistant.local:8123/nullglow/home?kiosk`) — mit Kiosk Mode
  ohne Kopfzeile und Seitenleiste.
- Bei 1920×1080 wirkt es mit **125 % Zoom** am besten (Browser-Zoom bzw. `--force-device-scale-factor=1.25`).
- Schaltest du den Monitor über eine Steckdose, trag sie im Assistenten ein — dann pausiert das Nordlicht, solange sie aus ist.

## Energiefluss-Karte einzeln

Die Karte gibt es auch ohne das ganze Dashboard: Dashboard bearbeiten → **Karte hinzufügen → „Nullglow Flow“**.
Sie übernimmt Solar, Netz, Zähler, Strompreis und Verbraucher aus dem Energie-Dashboard; jeder Punkt lässt sich per Klick
zuweisen, umbenennen und sortieren.

## Häufige Fragen

- **„Konfigurationsfehler“ oder leere Kacheln:** fehlt Bubble Card, Mushroom oder card-mod? Danach Browser hart neu laden (Strg+F5).
- **„Nullglow“ fehlt bei „Dashboard hinzufügen“:** Browser neu laden; in HACS prüfen, ob Nullglow Dashboard installiert ist.
- **Das Regenradar zeigt nichts:** Es nutzt den Deutschen Wetterdienst und deckt Deutschland (plus ~100 km) ab.
- **Eigene Änderungen an Kacheln:** ⋮ → Dashboard bearbeiten → „Kontrolle übernehmen“ macht daraus ein normales Dashboard,
  das du frei bearbeiten kannst — dann ohne automatische Aktualisierung.
- **Updates:** kommen über HACS; das Dashboard baut sich danach mit den Neuerungen selbst neu.

## Lizenz

MIT — siehe [LICENSE](LICENSE). Design: Nullglow (dunkel, Glas, ein grüner Akzent).
