# Custom Tab Block

A custom Gutenberg block for WordPress that displays tabbed content with image-backed tab triggers, fully accessible keyboard navigation, and proper ARIA semantics.

![WordPress](https://img.shields.io/badge/WordPress-6.1%2B-21759b?logo=wordpress&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-7.0%2B-777bb4?logo=php&logoColor=white)
![Block API](https://img.shields.io/badge/Block%20API-v3-blue)
![License](https://img.shields.io/badge/License-GPL--2.0--or--later-green)

## Live demo

**[▶ Try it live in WordPress Playground](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/shamimmoeen/custom-tab-block/master/_playground/blueprint.json)** — spins up a disposable WordPress in your browser with the plugin installed and a ready-made demo page showing the block in action.

## Features

- 🎨 **Image-backed tabs** — pick an image from the media library for each tab trigger.
- ♿ **Accessible by default** — implements the [WAI-ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- ⌨️ **Keyboard navigation** — move between tabs with `←` / `→`, jump to first/last with `Home` / `End`.
- 🧩 **Sidebar editing** — each tab's image, title, description, and link are set in the block's Inspector sidebar.
- 🌐 **Translation ready** — all strings are wrapped with `@wordpress/i18n`, with a `.pot` template included.
- ↔️ **RTL ready** — built with CSS logical properties, and the tab arrow keys mirror in right-to-left languages.
- 📐 **Alignment & spacing** — supports `wide`/`full` alignment and vertical margin controls.
- 🚀 **No third-party dependencies** — built entirely on WordPress core packages.

## How it works

The block is built with the [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) toolchain and the WordPress Block API v3:

- `src/tabs.js` — the shared BEM markup, rendered by both the editor preview and the saved output (a single source of truth). Each tab renders a real `<img>` with `wp-image-{id}` and the `hidden` attribute is used to hide inactive panels.
- `src/edit.js` — the editor UI: Inspector controls for the **Tab Group** label, plus a panel per tab with image, alt text, title, description, and link.
- `src/save.js` — the block's static markup saved to post content.
- `src/view.js` — a lightweight, dependency-free `TabsAutomatic` class that assigns per-instance unique IDs, ARIA roles, and wires up click + keyboard interaction on the front end (including `tab.focus( { preventScroll: true } )` so activation does not scroll the page).
- `src/block.json` — block metadata, attributes, supports, and asset registration.

## Installation

### From source

1. Clone the repository into your `wp-content/plugins` directory:
   ```bash
   git clone https://github.com/shamimmoeen/custom-tab-block.git
   ```
2. Install dependencies and build:
   ```bash
   cd custom-tab-block
   npm install
   npm run build
   ```
3. Activate **Custom Tab Block** from the Plugins screen in WordPress.

The repository ships with a pre-built `build/` directory, so the plugin works immediately after activation even without running the build step.

## Development

This project uses [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/). The common commands:

```bash
npm start          # Start the development build with file watching
npm run build      # Create a production build
npm run format     # Format source files
npm run lint:js    # Lint JavaScript
npm run lint:css   # Lint styles
npm run plugin-zip # Create a distributable plugin .zip
```

## Usage

1. Add the **Custom Tab Block** from the block inserter.
2. Open the block settings sidebar and fill in the **Tab Group** label (used by screen readers to describe the group of tabs) and the **Tab 1 Data** / **Tab 2 Data** panels:
   - **Image** — selected from the media library; shown on the tab trigger.
   - **Image alt text** — describe the image for screen readers, or leave empty if decorative.
   - **Title** — the bold heading inside the tab panel.
   - **Description** — the body copy.
   - **Link** — the destination for the "Read More" button (leave empty to hide the button).
3. On the front end, visitors switch tabs by clicking a tab or using the keyboard.

## Accessibility

The block follows the WAI-ARIA Authoring Practices for tabs:

| Key            | Action                        |
| -------------- | ----------------------------- |
| `←` Arrow Left | Move to the previous tab      |
| `→` Arrow Right| Move to the next tab          |
| `Home`         | Move to the first tab         |
| `End`          | Move to the last tab          |

Only the active tab is in the tab order within the tablist. Pressing Tab moves focus to the active panel (which is itself in the page tab sequence, per the [WAI-ARIA APG Tabs Keyboard Interaction notes](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction)), then to any focusable children inside it — for example, the "Read More" link. Arrow keys move focus between tabs, and the matching panel is revealed automatically.

Each tab trigger carries an `aria-label` of `Tab N: <title>` so screen readers announce position and content together. The `<img>` inside each tab trigger uses the alt text supplied from the media library (or `alt=""` if marked decorative).

## Requirements

- WordPress 6.1 or higher
- PHP 7.0 or higher

## Image Credits

The demo images used in the [live preview](#live-demo) are free stock photos from [Pexels](https://www.pexels.com/):

- **[Charming Mountain Chapel in the Dolomites](https://www.pexels.com/photo/charming-mountain-chapel-in-the-dolomites-36369882/)** — photo by Ivan Palchuk.
- **[Bikes Parked by a River](https://www.pexels.com/photo/bikes-parked-by-a-river-26744424/)** — photo by Ersin.

## License

[GPL-2.0-or-later](https://www.gnu.org/licenses/gpl-2.0.html) © [Mainul Hassan](https://github.com/shamimmoeen)
