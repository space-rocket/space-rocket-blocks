<?php
/**
 * Plugin Name:       Space-Rocket Blocks
 * Description:       Space-Rocket Blocks Library
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero
 *
 * @package           space-rocket-block
 */

require_once __DIR__ . '/hero/index.php';


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


function space_rocket_blocks_allowed_block_types( $allowed_block_types, $post ) {
    return array( 'core/paragraph', 'space-rocket-blocks/hero' );
}
 
add_filter( 'allowed_block_types', 'space_rocket_blocks_allowed_block_types', 10, 2 );