<p align="center"><img src="https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/banner.png" alt="Nullglow Dashboard for Home Assistant" width="100%"></p>

<p align="center">
  <a href="https://hacs.xyz"><img src="https://img.shields.io/badge/HACS-Custom-41BDF5?logo=homeassistantcommunitystore&logoColor=white" alt="HACS Custom"></a>
  <a href="https://github.com/Waguni/nullglow-dashboard/releases"><img src="https://img.shields.io/github/v/release/Waguni/nullglow-dashboard?color=7cffb2&label=release" alt="Release"></a>
  <a href="https://ko-fi.com/waguni"><img src="https://img.shields.io/badge/Ko--fi-buy%20me%20a%20coffee-FF5E5B?logo=kofi&logoColor=white" alt="Buy me a coffee on Ko-fi"></a>
</p>

# Nullglow Dashboard for Home Assistant

A frosted-glass dashboard (dark or light) with a glowing energy flow, light tiles in each lamp's real colour, room
climate with live graphs, cameras, calendar, robot vacuum and mower — and **it builds itself from your Home Assistant**.
No YAML: areas, devices and the Energy dashboard are picked up automatically, everything else is a few clicks in the
setup wizard. Works on your **phone** (HA app) and on a **Full HD wall monitor**.

## What you get

| Page | Content |
|---|---|
| **Overview** | big clock with greeting, weather + next hours (tap = **rain radar**), energy flow, lights per room, room temperatures with 24 h graphs, blinds, people (optional map), locks, windows & doors, agenda, batteries & maintenance |
| **Lights** | every lamp per room as a slider in its real colour, scenes, "all off" |
| **Climate** | big temperature per room with a coloured 24 h curve, heating and air conditioning |
| **Energy** | particle energy flow (solar, grid, battery, consumers), grid per phase, solar with forecast, power 24 h, monthly balance with costs |
| **Cameras**, **Calendar** | all cameras / calendars |
| **Vacuum**, **Mower** | map, controls, battery, wear (only if you have one) |

Plus: **tap the clock** to pick a design, light/dark and the **glass slider** (clear ↔ frosted) for *this* device —
wall monitor and phone may look different. Room pop-ups, a background that follows the weather and an **aurora**
that grows with your solar power. Pages without matching devices simply don't appear.

**Language:** follows your Home Assistant profile — English or German (other languages fall back to English).
Room and device names come from your own setup.

## 13 designs — each dark and light

**Nullglow** (green), **Violetnoir** (violet), **Halcyon** (teal), **Emberglow** (orange), **Aurum** (gold), **Sakura** (rose),
**Nocturne** (blue), **Glacier** (ice blue), **Chartreuse** (lime), **Neonwave** (magenta), **Graphite** (silver),
**Nebula** (indigo) and **Dune** (sand) — same tiles and effects, own accent, background and font.

![13 designs](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/designs.jpg)

Every design also comes in **light** ("tinted daylight": soft page colour, white glass, stronger accent). Light/dark:
*like device / HA profile* (default), *always dark*, *always light* or *by the sun* (light during the day — nice on a
wall monitor).

![13 designs, light](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/designs-light.jpg)

## Screenshots

<sub>All screenshots use demo data.</sub>

**Overview** — clock, weather, energy flow, lights, climate, blinds, people, agenda
![Overview](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/overview.jpg)

**Energy** — particle flows, phases, solar with forecast, 24 h, monthly balance
![Energy](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/energy.jpg)

**Lights** and **Climate**
![Lights](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/lights.jpg)
![Climate](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/climate.jpg)

**Room pop-up** (long-press a light tile or tap a temperature)
![Room pop-up](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/room-popup.jpg)

**On the phone**
![Phone](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/phone.jpg)

**Setup wizard** — requirements, pages, layout, rooms, energy, design
![Setup wizard](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/wizard.jpg)

## Features in detail

- **Arrange the overview:** move groups (clock & weather, energy, cameras, lights, climate, blinds, home, agenda), hide
  them, and set each group's **width** (1–4 columns). A wider camera group = bigger live images, 1/2/3 per row.
- **Energy flow:** solar, grid (per phase, netted like your meter), **home battery** (Anker Solix, Zendure, EcoFlow, …) with
  charge ring, up to 6 consumers + "other"; totals for today / week / month with grid cost and savings; solar forecast.
- **Doorbell:** optional — when someone rings, the door camera opens full-size for 2 minutes on every page (Ring, Reolink,
  UniFi, … are detected automatically, no helper or automation needed).
- **Lights:** tap = on/off (default) or open a pop-up with every lamp of the room; long-press opens the room.
- **Many blinds / window contacts:** 7 or more become *one* tile with a bar/dot per device; tap opens them grouped by floor.
- **People map:** optional map of everyone's location, tinted in your design colour.
- **Glass slider:** make all tiles clearer or more frosted — per device.
- **Every card on its own:** all Nullglow cards have a visual editor and suggest matching entities — *Add card* → search
  for "Nullglow" (energy flow, power 24 h, monthly balance, phase bars, mini graph behind any tile, hourly weather,
  batteries & maintenance, rain radar, blinds, windows & doors, mower map/stats, design picker).

## Requirements

- Home Assistant (tested with 2026.9) and [HACS](https://hacs.xyz)
- From HACS (type "Dashboard") — each link opens the page directly in your HACS:
  - **Bubble Card 3.2 or newer** — [open in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=Clooos&repository=Bubble-Card&category=plugin)
  - **Mushroom** — [open in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=piitaya&repository=lovelace-mushroom&category=plugin)
  - **card-mod** — [open in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=thomasloven&repository=lovelace-card-mod&category=plugin)
  - optional **Calendar Card Pro** (agenda) — [open in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=alexpfau&repository=calendar-card-pro&category=plugin)
  - optional **Kiosk Mode** (wall monitor without header) — [open in HACS](https://my.home-assistant.io/redirect/hacs_repository/?owner=NemesisRE&repository=kiosk-mode&category=plugin)

The wizard checks all of this (including the Bubble Card version) and links anything that's missing or too old.

## Installation (about 5 minutes)

1. **Add to HACS:** [open this link](https://my.home-assistant.io/redirect/hacs_repository/?owner=Waguni&repository=nullglow-dashboard&category=plugin)
   and confirm — or manually: **HACS → ⋮ (top right) → Custom repositories**, URL
   `https://github.com/Waguni/nullglow-dashboard`, type **Dashboard** → Add.
2. Open **Nullglow Dashboard** in HACS → **Download**.
3. **Reload** your browser (Ctrl+F5; in the app: close it completely and reopen).
4. **Settings → Dashboards → Add dashboard** → at the bottom under "Custom" pick **Nullglow**.
5. The **setup wizard** opens with everything pre-filled: requirements, pages, overview layout, rooms/blinds/windows,
   energy, design & extras (weather, people, cameras, doorbell, calendars, wall-monitor plug).
6. **Save** → choose a name and icon → done.

Change anything later via **⋮ → Edit dashboard** (opens the wizard again).

**Tips:** the dashboard is organised by your HA **areas** (Settings → Areas, labels & zones) — assign devices to areas.
If the HA **Energy dashboard** is set up (including power sensors), the energy flow works immediately; otherwise use
*Auto-detect* in the wizard's energy step. Hide single entities, devices or whole areas with a label such as `no_dboard`.

## Wall monitor (Full HD)

- Open the dashboard with **`?kiosk`** (e.g. `http://homeassistant.local:8123/nullglow/home?kiosk`) — with Kiosk Mode
  there's no header or sidebar.
- At 1920×1080 it looks best at **125 % zoom** (browser zoom or `--force-device-scale-factor=1.25`).
- If the monitor is switched by a smart plug, add it in the wizard — the aurora then pauses while the monitor is off.
- With live cameras, limit the browser cache, e.g. Chromium with `--disk-cache-size=67108864` (64 MB).
- Portrait works too; if space runs out, the navigation shows icons only.

## FAQ

- **"Configuration error" or empty tiles:** Bubble Card, Mushroom or card-mod missing? Install, then hard-reload (Ctrl+F5).
- **Tapping opens no pop-up** (blinds, rooms, radar …): pop-ups come from Bubble Card — you need **3.2 or newer**.
  Update in HACS, then hard-reload (in the app: clear the app cache). The wizard shows the detected version.
- **"Nullglow" is missing under "Add dashboard":** reload the browser; check that Nullglow Dashboard is downloaded in HACS.
- **Rain radar shows nothing:** it uses the German Weather Service (DWD) and covers Germany plus ~100 km around it.
- **Want to tweak single tiles:** ⋮ → Edit dashboard → *Take control* turns it into a normal dashboard you can edit freely
  (it then no longer updates itself).
- **Updates:** come through HACS; the dashboard rebuilds itself with the new features.

## Support

If you like Nullglow, you can **[buy me a coffee on Ko-fi](https://ko-fi.com/waguni)** ☕ — thank you!
Bugs and ideas: [open an issue](https://github.com/Waguni/nullglow-dashboard/issues).

## License

MIT — see [LICENSE](LICENSE).
