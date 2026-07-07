# Custom Tab Block

A custom Gutenberg block for WordPress that displays tabbed content with image-backed tab triggers, fully accessible keyboard navigation, and proper ARIA semantics.

![WordPress](https://img.shields.io/badge/WordPress-6.1%2B-21759b?logo=wordpress&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-7.0%2B-777bb4?logo=php&logoColor=white)
![Block API](https://img.shields.io/badge/Block%20API-v3-blue)
![License](https://img.shields.io/badge/License-GPL--2.0--or--later-green)

## Features

- 🎨 **Image-backed tabs** — pick an image from the media library for each tab trigger.
- ♿ **Accessible by default** — implements the [WAI-ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- ⌨️ **Keyboard navigation** — move between tabs with `←` / `→`, jump to first/last with `Home` / `End`.
- 🧩 **Sidebar editing** — each tab's image, title, description, and link are set in the block's Inspector sidebar.
- 🌐 **Translation ready** — all strings are wrapped with `@wordpress/i18n`.
- 📐 **Alignment & spacing** — supports `wide`/`full` alignment and vertical margin controls.
- 🚀 **No third-party dependencies** — built entirely on WordPress core packages.

## How it works

The block is built with the [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) toolchain and the WordPress Block API v3:

- `src/tabs.js` — the shared BEM markup, rendered by both the editor preview and the saved output (a single source of truth).
- `src/edit.js` — the editor UI: Inspector controls for each tab's image, title, description, and link.
- `src/save.js` — the block's static markup saved to post content.
- `src/view.js` — a lightweight, dependency-free `TabsAutomatic` class that assigns the ARIA roles/ids and wires up click + keyboard interaction on the front end.
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
2. Open the block settings sidebar and fill in the **Tab 1 Data** and **Tab 2 Data** panels:
   - **Image** — the background image shown on the tab trigger.
   - **Title** — the bold heading inside the tab panel.
   - **Description** — the body copy.
   - **Link** — the destination for the "Read More" button.
3. On the front end, visitors switch tabs by clicking a tab or using the keyboard.

## Accessibility

The block follows the WAI-ARIA Authoring Practices for tabs:

| Key            | Action                        |
| -------------- | ----------------------------- |
| `←` Arrow Left | Move to the previous tab      |
| `→` Arrow Right| Move to the next tab          |
| `Home`         | Move to the first tab         |
| `End`          | Move to the last tab          |

Only the active tab is in the tab order; arrow keys move focus between tabs, and the matching panel is revealed automatically.

## Requirements

- WordPress 6.1 or higher
- PHP 7.0 or higher

## License

[GPL-2.0-or-later](https://www.gnu.org/licenses/gpl-2.0.html) © [Mainul Hassan](https://github.com/shamimmoeen)
