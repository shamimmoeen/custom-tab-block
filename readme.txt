=== Custom Tab Block ===
Contributors:      shamimmoeen
Tags:              block, tabs, gutenberg, accessibility, aria
Requires at least: 6.1
Tested up to:      7.0
Requires PHP:      7.0
Stable tag:        0.2.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A custom Gutenberg block that displays tabbed content with image backgrounds, accessible keyboard navigation, and ARIA support.

== Description ==

Custom Tab Block adds a tabbed content block to the WordPress block editor. Each tab trigger can use an image as its background, and every tab panel has its own title, description, and "Read More" link, all editable from the block sidebar.

The block implements the WAI-ARIA Authoring Practices tabs pattern, so it works with keyboard and assistive technologies out of the box.

Features:

* Image-backed tab triggers selected from the media library.
* Accessible markup using role="tablist", role="tab", and role="tabpanel".
* Keyboard navigation with Arrow Left/Right and Home/End keys.
* Per-tab title, description, and link edited from the Inspector sidebar.
* Translation ready.
* Wide and full alignment support.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/custom-tab-block` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Add the "Custom Tab Block" from the block inserter and configure each tab from the block settings sidebar.

== Frequently Asked Questions ==

= Is the block keyboard accessible? =

Yes. Use the Arrow Left/Right keys to move between tabs, and Home/End to jump to the first or last tab.

= Can I use my own images on the tabs? =

Yes. Each tab trigger can use an image selected from the WordPress media library as its background.

== Changelog ==

= 0.2.0 =
* Image picker now uses core MediaUpload (removed the third-party @10up/block-components dependency).
* BEM class names with a single shared markup component for editor/front-end parity.
* Accessible tabs with per-instance unique IDs and a non-clipped keyboard focus ring.
* Inactive tabs are dimmed so the active tab stands out.
* Added vertical margin support; button and text inherit the theme's styling.

= 0.1.0 =
* Initial release.
