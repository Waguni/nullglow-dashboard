<p align="center"><img src="https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/banner.png" alt="Nullglow Dashboard für Home Assistant" width="100%"></p>

# Nullglow Dashboard für Home Assistant

Glas-Dashboard (dunkel oder hell) mit leuchtendem Energiefluss, Lichtkacheln in der echten Lampenfarbe, Raumklima mit
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

Dazu: **Uhr antippen** = Design und Hell/Dunkel für *dieses* Gerät wählen (Wandmonitor und Handy dürfen verschieden
aussehen), Raum-Pop-ups (Licht lange drücken oder Temperatur antippen), Hintergrund in Wetterfarben und ein
**Nordlicht**, das mit deiner Solarleistung stärker wird. Seiten ohne passende Geräte erscheinen gar nicht erst.

## 13 Designs — jeweils dunkel und hell

**Nullglow** (Grün), **Violetnoir** (Violett), **Halcyon** (Türkis), **Emberglow** (Orange), **Aurum** (Gold), **Sakura** (Rosé),
**Nocturne** (Blau), **Glacier** (Eisblau), **Chartreuse** (Limette), **Neonwave** (Magenta), **Graphite** (Silber),
**Nebula** (Indigo) und **Dune** (Sand) — gleiche Kacheln und Effekte, eigener Akzent, Hintergrund und Schrift.
Auswahl im Einrichtungs-Assistenten, jederzeit umstellbar.

![13 Designs](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/designs.jpg)

Jedes Design gibt es auch **hell** („getöntes Tageslicht“: Seite zart in der Designfarbe, weißes Glas, Akzent kräftiger
für guten Kontrast; Leuchten werden zu weichen Farbschatten, das Nordlicht zum Farbschleier). Einstellung
**Hell / Dunkel** im Assistenten: *wie Gerät / HA-Profil* (Standard), *immer dunkel*, *immer hell* oder *nach Sonne*
(tagsüber hell, nachts dunkel — praktisch für den Wandmonitor).

![13 Designs hell](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/designs-light.jpg)

## Vorschau

<sub>Alle Bilder mit Demo-Daten.</sub>

**Übersicht** — Uhr, Wetter, Energiefluss, Licht, Klima, Rollläden, Personen, Termine
![Übersicht](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/uebersicht.jpg)

**Energie** — Partikelströme, Phasen, Solar mit Prognose, 24 h, Monatsbilanz
![Energie](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/energie.jpg)

**Licht** und **Klima**
![Licht](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/licht.jpg)
![Klima](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/klima.jpg)

**Raum-Pop-up** (Licht lange drücken oder Temperatur antippen)
![Raum-Pop-up](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/raum-popup.jpg)

**Auf dem Handy**
![Handy](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/handy.jpg)

**Einrichtungs-Assistent** — Voraussetzungen, Seiten, Räume; Energie-Punkte zuweisen und benennen
![Assistent](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/assistent.jpg)

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
   3. Räume & Rollläden: ausblenden (Auge), sortieren (Pfeile), antippen für Name, Symbol, Hauptlicht, Temperatur-Sensor;
      **Mit Label ausblenden** (z. B. `no_dboard` an Entität, Gerät oder Bereich), **Namen kürzen**, Rollläden einzeln oder zusammengefasst
   4. Energie: Punkte zuweisen und **benennen** (Solar, Netz, jeder Verbraucher mit Name und Symbol)
   5. **Design** (13 Farbvarianten) und **Hell / Dunkel**, Wetter, Personen, Kameras, Kalender, Steckdose des Wandmonitors
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
- **Viele Rollläden:** ab 7 erscheinen sie auf der Übersicht als *eine* Kachel (Zustand, ein Balken je Rollladen, Alle auf ·
  Stopp · Alle zu mit Rückfrage). Antippen öffnet alle Rollläden **nach Etage** (HA-Etagen) mit Auf/Zu je Etage.
- **Namen wie „EG - Küche - Rollladen links“:** werden automatisch zu „Küche · links“ (Etage/Raum vorne weg; gleiche
  Raumnamen auf zwei Etagen bekommen die Etage dahinter, z. B. „Flur · OG“). Abschaltbar im Assistenten.
- **Batteriespeicher** (Anker Solix, Zendure, EcoFlow, Hausspeicher …): erscheint im Energiefluss unter dem Haus — Ladestand als
  leuchtender Ring (Amber unter 15 %, pulsiert beim Laden), Ströme Solar/Netz → Akku und Akku → Haus, Symbol mit Füllstand;
  Akku-Strom zählt zur Autarkie. Auf der **Energie-Seite** eine Speicher-Kachel in der Solar-Spalte (Ladestand, lädt/entlädt, 24-h-Kurve)
  und in „Leistung 24 h“ die Flächen „Akku entladen“ / „Akku laden“ — der Hausverbrauch rechnet den Akku mit. Steht der Speicher im HA-Energie-Dashboard, wird er automatisch erkannt; sonst im Assistenten
  (4. Energie → „Batteriespeicher“) Leistung und Ladestand wählen. Anker meldet Laden positiv → „Vorzeichen umdrehen“ (wird vorgeschlagen).
- **Live-Kameras:** im Assistenten (5.) eine oder mehrere Kameras für die Übersicht wählen; die Kameras-Seite kann ebenfalls
  live statt Standbild zeigen. Der Stream läuft nur, solange die Karte angezeigt wird (nichts im Hintergrund). Am Wandmonitor
  den Browser-Cache begrenzen, z. B. Chromium mit `--disk-cache-size=67108864` (64 MB). Reolink, Tapo, Ring … — alles, was
  in HA ein Livebild hat.
- **Monitor hochkant:** funktioniert; reicht der Platz nicht für alle Seitennamen, zeigt die Leiste unten nur Symbole.
- **Das Regenradar zeigt nichts:** Es nutzt den Deutschen Wetterdienst und deckt Deutschland (plus ~100 km) ab.
- **Eigene Änderungen an Kacheln:** ⋮ → Dashboard bearbeiten → „Kontrolle übernehmen“ macht daraus ein normales Dashboard,
  das du frei bearbeiten kannst — dann ohne automatische Aktualisierung.
- **Updates:** kommen über HACS; das Dashboard baut sich danach mit den Neuerungen selbst neu.

## Lizenz

MIT — siehe [LICENSE](LICENSE). Design: Nullglow (dunkel oder hell, Glas, ein Akzent).
