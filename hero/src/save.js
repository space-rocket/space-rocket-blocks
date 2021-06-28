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
