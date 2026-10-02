<p align="center"><img src="https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/banner.png?v=2.2.0" alt="Nullglow Dashboard for Home Assistant" width="100%"></p>

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
| **Energy** | particle energy flow (solar, grid, battery, consumers), grid per phase, solar with forecast, power 24 h, monthly balance with costs — browse past months or the whole year |
| **Cameras**, **Calendar** | all cameras / calendars |
| **Media** | what's playing right now (cover, progress, volume, source) + all players |
| **Vacuum**, **Mower** | map, controls, battery, wear (only if you have one) |

Plus a **glass navigation dock** in your design colours, room pop-ups, a background that follows the weather and an
**aurora** that grows with your solar power. Pages without matching devices simply don't appear.

## 👆 Tap the clock — make it yours

Everything you can change right on the dashboard starts with **one tap on the big clock** of the overview
(the first time you open the dashboard, a small hint points at it):

- **Design, light/dark, glass** (clear ↔ frosted) and **power saving** — for *this* device, so the wall monitor and
  your phone can look different.
- **Customize dashboard** (admins) — a panel that lists everything you can change; tap a feature to jump straight there
  (or *Edit*). The first time, a short tour explains **tiles, groups and pages** (again any time via **?** in the edit bar).
  Then, right on the dashboard:
  - **Drag tiles** where you want them. On a phone: hold a tile briefly, then drag — a normal swipe still scrolls.
  - Every **group** has a **tab** on top: drag it to move the **whole block** — energy, lights, calendar, cameras … — **on every
    page**; drag the **right edge** to make it wider or narrower (1–4 columns). Big cards like the **calendar** or the energy flow
    can be moved and resized like tiles.
  - **Arrange your pages:** drag a tile or a whole group onto a **tab at the bottom** to move it to that page. Tap the **current
    tab** to rename it, pick an icon, move it left/right or hide it; **+** next to the tabs adds a **page of your own** (and brings
    hidden ones back). New devices still sort themselves in automatically. On big screens, **Scrolls** warns you when a page no
    longer fits without scrolling.
  - **Tap a group's tab** for its settings: lights per room or as one tile, blinds and windows combined, temperature graphs,
    weather or music as a group of their own, cameras side by side. ⚙ holds the hint bar.
  - **Tap a combined tile** (all lights, blinds or windows) to look after the rooms in it: **icon**, name, main light, order,
    hide or bring back — and rename the **floors** (or give them an icon). Room tiles have an *Icon* entry too.
  - **Tap a tile** to rename or hide it — and to change what's behind it: **another device** (keeps place and size), what
    **tapping** does (on/off, details, open a page), its **icon**, a **24 h graph** behind sensors, *"since …"*, **live view**
    for cameras, *only while playing* for media cards, the **temperature sensor** or **main light** of a room, or **move it to
    another group**. **Drag its corner** to make it bigger or smaller (width and height).
  - **Groups:** rename them and pick an icon, choose **which media players, cameras and calendars** they show, set the **consumers
    of the energy flow** (up to 6, with short names) — and create **groups of your own** (⋯ → *New group*, e.g. "Garden").
  - **⋯ in the edit bar:** *select several tiles* (hide or move them together), *new group*, **phone / tablet preview** of the
    page without grabbing your phone. **✨ New devices** lists devices added since last time that aren't on the dashboard yet —
    one tap adds them to a group.
  - **＋ on every group** adds any entity as a tile — a light, a switch, a sensor, a camera …
  - **Show a group only when it matters:** someone is home, nobody is home, daytime, at night, in the morning, in the
    evening, *when active* (one of its devices is on or running), or only on large / small screens.
  - **📦 Devices without a room:** the most common reason a new dashboard looks empty. Drag a device onto a room tile
    (or pick the room) — it is assigned in Home Assistant and shows up right away.
  - **Layout per device type:** phone, tablet and large screen can each get their own arrangement of tiles and groups
    (automatic by screen width, or set per device) — or all share one. Room order and hidden rooms stay shared.
  - **Done** saves moves and sizes in one go, **Discard** drops them — and right after saving, **Undo** brings the
    previous state back. Changes from a menu (rename, hide, add, settings) are saved at once; the edit bar then offers
    **Undo** for the last one. The wizard keeps the last 8 versions (*step 9*).
  - ⚙ in the group view offers **templates**: *Wall display*, *Phone*, *Energy focus*, *Family*, *Minimal*. On a device
    with its own layout, a template only rearranges that device.

![Edit tiles, groups and pages](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/edit.jpg?v=2.5.0)

Everything can be undone in the setup wizard (*Edit dashboard*), which also holds the device choices (energy sensors,
calendars, people, cameras, rooms) and the same **templates** as a one-click start (*step 3*).

**Language:** follows your Home Assistant profile — English or German (other languages fall back to English).
Room and device names come from your own setup.

## 13 designs — each dark and light

**Nullglow** (green), **Violetnoir** (violet), **Halcyon** (teal), **Emberglow** (orange), **Aurum** (gold), **Sakura** (rose),
**Nocturne** (blue), **Glacier** (ice blue), **Chartreuse** (lime), **Neonwave** (magenta), **Graphite** (silver),
**Nebula** (indigo) and **Dune** (sand) — same tiles and effects, own accent, background and font.

![13 designs](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/designs.jpg?v=2.2.0)

Every design also comes in **light** ("tinted daylight": soft page colour, white glass, stronger accent). Light/dark:
*like device / HA profile* (default), *always dark*, *always light* or *by the sun* (light during the day — nice on a
wall monitor).

![13 designs, light](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/designs-light.jpg?v=2.2.0)

## Screenshots

<sub>All screenshots use demo data.</sub>

**Overview** — clock, weather, energy flow, lights, climate, blinds, people, agenda
![Overview](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/overview.jpg?v=2.2.0)

**Energy** — particle flows, phases, solar with forecast, 24 h, monthly balance
![Energy](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/energy.jpg?v=2.2.0)

**Lights** and **Climate**
![Lights](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/lights.jpg?v=2.5.4)
![Climate](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/climate.jpg?v=2.2.0)

**Room pop-up** (long-press a light tile or tap a temperature)
![Room pop-up](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/room-popup.jpg?v=2.2.0)

**On the phone**
![Phone](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/phone.jpg?v=2.2.0)

**Setup wizard** — requirements, pages, layout, rooms, energy, design
![Setup wizard](https://raw.githubusercontent.com/Waguni/nullglow-dashboard/main/images/wizard.jpg?v=2.2.0)

## Features in detail

- **Arrange the overview:** move groups (clock & weather, energy, cameras, lights, climate, blinds, home, agenda), hide
  them, and set each group's **width** (1–4 columns). A wider camera group = bigger live images, 1/2/3 per row.
- **Monthly balance:** grid cost, savings and self-sufficiency per day; arrows go back to earlier months, *Year* shows one bar
  per month (tap a month to open it). Past months are loaded once and remembered; after 5 minutes it returns to the current
  month (wall displays). Costs of earlier periods use today's price.
- **Energy flow:** solar, grid (per phase, netted like your meter), **home battery** (Anker Solix, Zendure, EcoFlow, …) with
  charge ring, up to 6 consumers + "other"; totals for today / week / month with grid cost and savings; solar forecast.
- **Doorbell:** optional — when someone rings, the door camera opens full-size for 2 minutes on every page (Ring, Reolink,
  UniFi, … are detected automatically, no helper or automation needed). Separate camera, e.g. **Frigate**? Just pick the
  camera and what rings: a doorbell event, a binary sensor or a simple button (e.g. Zigbee `sensor.…_action` —
  every press counts as a ring).
- **Lights:** tap = on/off (default) or open a pop-up with every lamp of the room; long-press opens the room.
- **Many blinds / window contacts:** 7 or more become *one* tile with a bar/dot per device; tap opens them grouped by floor.
- **People map:** optional map of everyone's location, tinted in your design colour.
- **Glass slider:** make all tiles clearer or more frosted — per device.
- **Smart hints:** a bar that only appears when something needs you — windows open while it rains (or will soon),
  bins today/tomorrow (Waste Collection Schedule, a waste calendar or keywords like *Restmüll*, *Gelbe Tonne*, *recycling*),
  low batteries, devices offline, updates, nobody home but lights on / door unlocked (with a one-tap *Off*). Tapping *devices
  offline* opens a list by integration with *offline since …*: **snooze** a device for a day or a week (for things that are off on
  purpose), hide it for good, open it in Home Assistant or **reload its integration** — each with room, model, hub and entities
  so you know exactly which device it is (this only mutes the offline hint, not its battery or other hints).
  **Batteries & maintenance** works the same way: tap a battery to snooze or hide it; everything hidden stays listed under
  *Hidden* with **Bring back**. Both use the same list, so a battery hidden in one is hidden in the other. The **×** hides a
  hint for single devices (e.g. one that always reports a low battery). At the top of the overview or floating above the
  navigation (wall displays).
- **Lights page per room:** by default every room with several lights gets a **large room tile** (brightness, on/off and up to 4
  scenes as buttons), with only the lights it doesn't switch shown small below; rooms with one light sit together under *More
  rooms*. Per room you can choose *Large with scenes*, *Every light on its own* or *Small* — in the wizard (tap a room) or on
  the dashboard (tap the room tile → *Lights page*).
- **One setting for tapping room tiles** on the overview (lights, climate, blinds): *switch/details* (hold opens the room
  pop-up) or *room pop-up* (hold switches / shows details).
- **All lights as one tile** (automatic from 7 rooms, like blinds and windows; wizard → rooms & devices → *Lights*): one tile with a bar per room in
  the real light colour (height = brightness) and *Off* (asks once), tap opens all rooms by floor. Handy for big homes.
  The combined tiles for lights, blinds and windows show each **room's icon under its bars** (lit in the light colour, green
  while a blind is open, amber while a window is open), so you can tell at a glance which room it is. If tapping a room opens
  its pop-up, **tapping the room's icon still switches the light**.
- **Media:** while music or TV is playing, a card with the cover appears under the weather — the card takes on the colors of
  the cover. Without cover art (e.g. YouTube cast to a Chromecast only reports title and channel) it shows the app's logo in
  its brand color instead — YouTube, Netflix, Spotify, Twitch, Plex, Kodi and a few more. Switch it off in the wizard; the
  *Media* page is always there when you have media players.
- **Edit tiles directly** (see *Tap the clock* above): moves and widths show up instantly and are saved together with
  *Done*; group settings apply right away. Names only apply in this dashboard. Hidden groups come back via the eye button
  in the edit bar, hidden tiles in the wizard (step 8). Weather and music can become groups of their own (tap the clock
  group); a separate music group keeps its place and shows a calm *Nothing playing* while idle, so the layout never jumps.
- **Power saving** for slow PCs and old tablets: tap the clock → *Power saving* **Off / On / Auto**. It turns off the
  aurora and the weather colors, stops the tile animations and runs the energy flow at 15 instead of 30 fps. *Auto*
  (default) switches it on by itself when the device is too slow (measured once on the dashboard), has very weak hardware
  or has "reduce motion" enabled — tapping *Auto* measures again.
- **Every card on its own:** all Nullglow cards have a visual editor and suggest matching entities — *Add card* → search
  for "Nullglow" (energy flow, power 24 h, monthly balance, phase bars, mini graph behind any tile, hourly weather,
  batteries & maintenance, hints, media, lights, rain radar, blinds, windows & doors, mower map/stats, design picker).
  Tip for the hints card: `battery_exclude` (like `battery.exclude` of the batteries card) skips phones, watches etc.

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
5. The **setup wizard** opens with everything pre-filled, in ten steps: requirements, pages, overview layout (with
   templates), rooms/blinds/windows, energy, design & extras (weather, people, cameras, doorbell, calendars, wall-monitor
   plug), hints, what you edited on the tiles, versions, and tips for phone & wall display.
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
- **Tapping opens no pop-up** (blinds, rooms, radar …): pop-ups come from Bubble Card — you need **3.2 or newer**. The dashboard
  shows a warning at the top of every page when Bubble Card is missing or too old.
  Update in HACS, then hard-reload (in the app: clear the app cache). The wizard shows the detected version.
- **"Nullglow" is missing under "Add dashboard":** reload the browser; check that Nullglow Dashboard is downloaded in HACS.
- **Slow or stuttering on an older PC/tablet:** tap the clock → *Power saving* → **On**. The aurora missing? *Auto* may
  have switched power saving on for a slow device — pick **Off** to get it back.
- **Rain radar shows nothing:** it uses the German Weather Service (DWD) and covers Germany plus ~100 km around it.
- **Want to tweak single tiles:** ⋮ → Edit dashboard → *Take control* turns it into a normal dashboard you can edit freely
  (it then no longer updates itself).
- **Updates:** come through HACS; the dashboard rebuilds itself with the new features. Which version is loaded? The
  browser console (F12) shows `NULLGLOW v…`.

## Support

If you like Nullglow, you can **[buy me a coffee on Ko-fi](https://ko-fi.com/waguni)** ☕ — thank you!
Bugs and ideas: [open an issue](https://github.com/Waguni/nullglow-dashboard/issues).

## License

MIT — see [LICENSE](LICENSE).
