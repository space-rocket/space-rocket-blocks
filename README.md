
Our Hero block is going to consist of these elements:

- heading
- text
- buttons
- featuredImage

Let's get started

### Create a plugin

```php
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

```

### Generate block using @wordpress/create-block

From inside the space-rocket plugin directory
```bash
npx @wordpress/create-block hero --namespace space-rocket-blocks --title "Hero" --short-description="For when you need a hero" --category space-rocket-blocks
```

Now activate the `space-rocket-blocks` plugin through the WordPress dashboard plugins page.


### Add custom category

```php
# index.php
...


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
...
```

Disable all other blocks and create a `space-rocket-block` category

```php
# index.php
...
function space_rocket_blocks_allowed_block_types( $allowed_block_types, $post ) {
    return array( 'core/paragraph', 'space-rocket-blocks/hero' );
}
 
add_filter( 'allowed_block_types', 'space_rocket_blocks_allowed_block_types', 10, 2 );
...
```

### Remove all other blocks


```php
# index.php
...
function space_rocket_blocks_allowed_block_types( $allowed_block_types, $post ) {
    return array( 'core/paragraph', 'space-rocket-blocks/hero' );
}
 
add_filter( 'allowed_block_types', 'space_rocket_blocks_allowed_block_types', 10, 2 );
...
```


### Add Tailwinds CSS library


From within the `hero` directory, run this command to install the dependencies:
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

```bash
npx tailwindcss init
```

```javascript
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```
```css
@tailwind base;
@tailwind components;

// Put your styles here...
.wp-block-space-rocket-blocks-hero {
  @apply bg-pink-500;
  border: 1px dotted #f00;
}

@tailwind utilities;
.wp-block-create-block-hero {

}

```

### Unset width from editor
```css
# hero/src/editor.scss
.wp-block {
  max-width: unset;
}
```

Test it out
```bash
npm run build
```

### Add markup


```jsx
# hero/src/edit.js
export default function Edit() {
  return (
    <div { ...useBlockProps() }>
            <div className="hero container">
                <div className="content-inner">
                    <div className="content">
                        <h2>How to build custom React Gutenberg Blocks</h2>
                        <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="btn-group relative">
                            <div className="btn-primary">
                                <a className="btn-text" href="#">Get Started</a>
                            </div>
                            <div className="btn-primary">
                                <a className="btn-text" href="#">Read Tutorial</a>
                            </div>
                        </div>
                    </div>
                    <div className="featured">
                        <img className="featured-image" alt="Marshall's Beach, San Francisco, United States by Natalie Chaneye" title="Marshall's Beach, San Francisco, United States by Natalie Chaney" src="https://source.unsplash.com/KQVX1_pYpsA/1600x900"/>
                    </div>
                </div>
            </div>
    </div>
  );
}
```

```jsx
# hero/src/save.js
export default function save() {
  return (
        <div { ...useBlockProps.save() }>
            <div className="hero container">
                <div className="content-inner">
                    <div className="content">
                        <h2>How to build custom React Gutenberg Blocks</h2>
                        <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="btn-group relative">
                            <div className="btn-primary">
                                <a className="btn-text" href="#">Get Started</a>
                            </div>
                            <div className="btn-primary">
                                <a className="btn-text" href="#">Read Tutorial</a>
                            </div>
                        </div>
                    </div>
                    <div className="featured">
                        <img className="featured-image" alt="Marshall's Beach, San Francisco, United States by Natalie Chaneye" title="Marshall's Beach, San Francisco, United States by Natalie Chaney" src="https://source.unsplash.com/KQVX1_pYpsA/1600x900"/>
                    </div>
                </div>
            </div>
        </div>
  );
}
```

### Update CSS

```css
# hero/src/style.scss
@tailwind base;
@tailwind components;
.wp-block-create-block-hero {
    position: relative;
}
.hero.container {
  @apply lg:relative mx-auto;
  .content-inner {
    @apply px-4 lg:w-1/2 sm:px-8 xl:pr-16;
  }
  .row {
    @apply mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left;
  }
  .title {
    @apply text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl;
  }
  .featured {
    @apply relative w-full h-64 sm:h-72 md:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full;
  }
  .featured-image {
    @apply absolute inset-0 w-full h-full object-cover m-0;
  }
  .btn-group {
    @apply mt-10 sm:flex sm:justify-center lg:justify-start;
  }
  .btn-primary {
    @apply rounded-md shadow;
    @apply bg-indigo-600 hover:bg-indigo-700 text-white;
  }
  .btn-primary:not(:nth-of-type(1)) {
    @apply mt-3 rounded-md shadow sm:mt-0 sm:ml-3;
  }
  .btn-primary a {
    @apply w-full flex items-center justify-center;
    @apply border border-transparent rounded-md;
    @apply px-8 md:px-10 py-3 md:py-4;
    @apply text-base font-medium md:text-lg text-gray-100 no-underline;
  }
}
.content {
  @apply mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left;
}

@tailwind utilities;

```

INSERT IMAGE add-markup.png

### Add RichText fields

Add attributes
```json
# hero/block.json
{
  "attributes": {
    "headingContent": {
      "type": "string",
      "source": "text",
      "selector": "h1",
      "default": "How to build custom React Gutenberg Blocks"
    },
    "textContent": {
      "type": "string",
      "source": "text",
      "selector": "p",
      "default": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
    },
  },
}

```

Import attributes into index.js
```javascript
/**
 * Internal dependencies
 */
import metadata from '../block.json';

const { attributes } = metadata;

registerBlockType( 'space-rocket-blocks/hero', {
    attributes
    ...
} );
```


```jsx
# hero/src/edit.js
...
import { useBlockProps, RichText } from '@wordpress/block-editor';
...
export default function Edit({attributes, setAttributes}) {
  return (
    <div { ...useBlockProps() }>
          
                    <div className="content">
                        <RichText
                            className="title"
                            tagName="h2"
                            value={ attributes.headingContent }
                            onChange={(val) => setAttributes({headingContent: val})}
                        />
                        <RichText
                            tagName="p"
                            value={ attributes.textContent }
                            onChange={(val) => setAttributes({textContent: val})}
                        />
                  
                    </div>
            
  );
}
```

```jsx
# hero/src/save.js
...
export default function save({attributes}) {
    const { headingContent, textContent, buttons, featuredImage} = attributes;

    const buttonFields = buttons.map( ( button, index ) => {    
        return <div key={ index } className="btn-primary">
            <RichText.Content className="btn-text" value={ button.text } />
        </div>;
    });

    return (
        <div { ...useBlockProps.save() }>
            <div className="hero container">
                <div className="content-inner">
                    <div className="content">
                        <RichText.Content className="title" tagName="h2" value={ headingContent } />
                        <RichText.Content tagName="p" value={ textContent } />
                        <div className="btn-group relative">
                            { buttonFields }
                        </div>
                    </div>
                    <div className="featured">
                        <img className="featured-image" alt={featuredImage.alt} title={featuredImage.title} src={featuredImage.url} />
                    </div>
                </div>
            </div>
        </div>
  );
}

```


### Add Buttons

```javascript
# hero/block.json
{
  ...
  "attributes": {
    ...
    "buttons": {
      "type": "array",
      "default": [
        {
          "text": "<a href=\"#\">Get Started</a>"
        },
        {
          "text": "<a href=\"#\">Read Tutorial</a>"
        }
      ]
    }
  },
  ...
}
```

Add button fields and functions

```jsx
# hero/src/edit.js
...
import { IconButton  } from '@wordpress/components';
...
export default function Edit({attributes, setAttributes}) {
    let buttonFields, addButton

    if ( attributes.buttons.length ) {
        buttonFields = attributes.buttons.map( ( button, index ) => {
            return <Fragment key={ index }>
                <RichText
                    className="btn-primary"
                    value={ button.text }
                    onChange={ (text) => handleButtonChange(text, index) }
                />
                <IconButton
                    className="sr__remove-button-text "
                    icon="minus"
                    label="Delete button"
                    onClick={ () => handleRemoveButton( index ) }
                />
            </Fragment>;
        } );
    }

    if ( attributes.buttons.length > 1 ) {
        addButton = '';
    } else {
        addButton = <IconButton
            isDefault
            className="sr__add-button-text "
            icon="plus"
            label="Add button"
            onClick={ () => handleAddButton() }
        />;
    }
    const handleAddButton = () => {
        const buttons = [ ...attributes.buttons ];
        buttons.push( {
            text: '',
        } );
        setAttributes( { buttons } );
    };
    const handleRemoveButton = ( index ) => {
        const buttons = [ ...attributes.buttons ];
        buttons.splice( index, 1 );
        setAttributes( { buttons } );
    };
    const handleButtonChange = ( text, index ) => {
        const buttons = [ ...attributes.buttons ];
        buttons[ index ].text = text;
        setAttributes( { buttons } );
    };

  return (
    <div { ...useBlockProps() }>
                    ...
                        <div className="btn-group">
                            { buttonFields }
                            {addButton}
                        </div>
                    ...
    </div>
  );
}


```

Update save.js with dynamic buttons

```jsx
# hero/src/save.js
...
export default function save({attributes}) {
    const { headingContent, textContent, buttons} = attributes;

    const buttonFields = buttons.map( ( button, index ) => {    
        return <div key={ index } className="btn-primary">
            <RichText.Content className="btn-text" value={ button.text } />
        </div>;
    });

    return (
                    ...
                        <div className="btn-group relative">
                            { buttonFields }
                        </div>
                    ...
  );
}


```

### Add dynamic image

add attributes
```javascript
# hero/block.json
{
  ...
  "attributes": {
    ...
    "featuredImageID": {
      "type": "number"
    },
    "featuredImageURL": {
      "type": "string",
      "source": "attribute",
      "selector": "img",
      "attribute": "src"
    }
  },
  ...
}

```

```jsx
# hero/src/edit.js

...

export default function Edit({attributes, setAttributes}) {
    ...

    const onSelectFeaturedImage = function( featuredImage ) {
        return setAttributes( {
            featuredImage,
            featuredImageURL: featuredImage.url,
            featuredImageID: featuredImage.id
        } );
    };

  ...

  return (
    <div { ...useBlockProps() }>
                    ...
                    <MediaUpload
                        label={__('FeaturedImage', 'hero')}
                        onSelect={onSelectFeaturedImage}
                        allowedTypes={'image'}
                        value={ attributes.featuredImageID }
                        render={({open}) => (
                            ! attributes.featuredImageID ? 
                                <div className="featured bg-gray-100">
                                    <Button className="absolute top-1/2 left-0 right-0 mx-auto btn-primary" onClick={open}>Open Media Library</Button>
                                </div> : 
                                <div className="featured bg-gray-100">
                                    <img className="featured-image" src={attributes.featuredImageURL} />
                                    <Button className="absolute top-1/2 left-0 right-0 mx-auto btn-primary bg-pink-500" onClick={open}>Open Media Library</Button>
                                </div>  
                        )}
                    />
                    ...
  );
}

```

Update save.js

```jsx
# hero/src/save.js
...
export default function save({attributes}) {
    const { headingContent, textContent, buttons, featuredImage} = attributes;

    ...

    return (
        <div { ...useBlockProps.save() }>
                  ...
                    <div className="featured">
                        <img className="featured-image" alt={featuredImage.alt} title={featuredImage.title} src={featuredImage.url} />
                    </div>
                  ...
        </div>
  );
}
```

Add CSS style to override blocks styles from WordPress core
```css
# hero/src/editor.scss
.featured {
  .components-button {
    margin: 0 auto;
  }
}
```

### Conclusion

