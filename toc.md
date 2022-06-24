

First lets create our block:

```
npx @wordpress/create-block page --namespace space-rocket-blocks --title "Page" --short-description="Basic page with Toc Sections" --category space-rocket-blocks
```

Then add it to `index.php`

index.php
```
require_once __DIR__ . '/page/page.php';
```


We want our page to accomadate a sidebar, where we can have a table of contents, meta content or ads. This should be a two column layout. Let's add the minimal HTML, CSS and content.

First, create a page template with minimal WordPress junk in it.

*page-templates/block-page.php*
```php
<?php
/**
 * Template Name: Block Page
 *
 * The template for displaying blocks
 *
 * This is for the about page, you can put more detailed description here later if you like.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Space_Rocket
 * @since 1.0.0
 */

get_header();
/* Start the Loop */
while ( have_posts() ) :
  the_post();
  the_content();

endwhile; // End of the loop.

get_footer('no-widgets');
```

Markup:

CSS:

Add InnerBlocks

Add Section


```
npx @wordpress/create-block section --namespace space-rocket-blocks --title "Section" --short-description="Basic section that displays in a TOC" --category space-rocket-blocks
```

```
npm install @wordpress/core-data --save
```
