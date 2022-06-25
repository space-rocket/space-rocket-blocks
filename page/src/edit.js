/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

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
import MyAuthorsListBase from '../../shared/MyAuthorsListBase.js'
import SidebarTOC from '../../shared/SidebarTOC.js'

const TEMPLATE = [
    [ 'core/heading', { placeholder: 'Page Title...' } ],
    [ 'core/paragraph', { placeholder: 'Page Content...' } ],
];
console.log("SidebarTOC: ", SidebarTOC)

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	return (
		<article { ...useBlockProps() } className="block-page">
      <div className="container">
        <header className="page-header">
          <RichText
              tagName="h2"
              value={ attributes.title } 
              allowedFormats={ [] }
              onChange={ ( title ) => setAttributes( { title } ) } 
              placeholder={ __( 'My Awesome Page' ) } 
          />
        </header>
        <div className="page-content">
          <div className="page-meta">
            <div className="page-author">
              <div className="author-avatar">
                 <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" />
              </div>
              <div className="author-name">
                 <MyAuthorsListBase/> 
              </div>
              <div className="published-date">
                <time datetime="" class="page-date">Thursday, June 23, 2022</time>
              </div>
            </div>
          </div>
          <InnerBlocks/>
        </div>
        <aside>
          <SidebarTOC/>
        </aside>
      </div>
		</article>
	);
}
