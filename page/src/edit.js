/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { useEffect, Fragment } from '@wordpress/element';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import GetSections from '../../shared/GetSections.js';
import GetAuthor from '../../shared/GetAuthor.js';
import SidebarTOC from '../../shared/SidebarTOC.js';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const postDate = wp.data.select('core/editor').getCurrentPostAttribute('date');
  const date = new Date(postDate);
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const postDateFormatted = date.toLocaleDateString('en-us', options);

  setAttributes({
    sections: GetSections(),
    author: GetAuthor(),
    postDate,
    postDateFormatted
  });

	return (
		<article { ...useBlockProps()} className="block-page">
      <div className="container">
        <header className="page-header">
          <RichText
              tagName="h2"
              value={attributes.title} 
              allowedFormats={[]}
              onChange={( title ) => setAttributes({ title })} 
              placeholder={ __( 'My Awesome Page' )} 
          />
        </header>
        <div className="page-content">
          <div className="page-meta">
            <div className="page-author">
              <div className="author-avatar">
                <img src={attributes.author ? attributes.author.avatar_urls['96'] : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"} />
              </div>
              <div className="author-name">
                  <p>{attributes.author ? attributes.author.name : null}</p> 
              </div>
              <div className="published-date">
                <time datetime="" class={attributes.postDate}>{attributes.postDateFormatted}</time>
              </div>
            </div>
          </div>
          <InnerBlocks/>
        </div>
        <aside>
          <SidebarTOC
            sections={attributes.sections}
          />
        </aside>
      </div>
		</article>
	);
}
