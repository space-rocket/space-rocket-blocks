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
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { IconButton  } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
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
            <div className="hero container">
                <div className="content-inner">
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
                        <div className="btn-group">
                            { buttonFields }
                            {addButton}
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
