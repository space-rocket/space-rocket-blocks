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
import MyAuthorsListBase from '../../shared/MyAuthorsListBase.js';
import SidebarTOC from '../../shared/SidebarTOC.js';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
  const {title} = attributes;

  return (
		<div { ...useBlockProps.save() } className="block-page">
      <div className="container">
        <header className="page-header">
          <RichText.Content
              tagName="h2"
              value={attributes.title}
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
          <InnerBlocks.Content/>
        </div>
        <aside>
          <SidebarTOC
            sections={attributes.sections}
          />
        </aside>
      </div>
		</div>
	);
}
