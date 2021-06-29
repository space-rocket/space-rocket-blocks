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
import { useBlockProps } from '@wordpress/block-editor';

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
    const { headingContent, textContent, buttons} = attributes;

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
                        <img className="featured-image" alt="Marshall's Beach, San Francisco, United States by Natalie Chaneye" title="Marshall's Beach, San Francisco, United States by Natalie Chaney" src="https://source.unsplash.com/KQVX1_pYpsA/1600x900"/>
                    </div>
                </div>
            </div>
        </div>
	);
}
