<?php
/**
 * Plugin Name:       Space-Rocket Blocks
 * Description:       Space-Rocket Blocks Library
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Space-Rocket
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero
 *
 * @package           space-rocket-block
 */

// require_once __DIR__ . '/hero/index.php';
require_once __DIR__ . '/page/page.php';
require_once __DIR__ . '/section/section.php';

// Add space-rocket-block category
function space_rocket_blocks_categories( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'space-rocket-blocks',
                'title' => __( 'Space Rocket Blocks', 'space-rocket-blocks' ),
                'icon'  => 'wordpress',
            ),
        )
    );
}
add_filter( 'block_categories', 'space_rocket_blocks_categories', 10, 2 );

// Remove all other blocks and only use the ones listed below
function space_rocket_blocks_allowed_block_types( $allowed_block_types, $post ) {
    return array( 'core/paragraph', 'core/paragraph', 'space-rocket-blocks/hero', 'space-rocket-blocks/page', 'space-rocket-blocks/section' );
}
 
add_filter( 'allowed_block_types', 'space_rocket_blocks_allowed_block_types', 10, 2 );

