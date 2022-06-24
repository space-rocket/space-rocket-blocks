<?php
/**
 * Plugin Name:       Page
 * Description:       Basic page with Toc Sections
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       page
 *
 * @package           space-rocket-blocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function space_rocket_blocks_page_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'space_rocket_blocks_page_block_init' );
