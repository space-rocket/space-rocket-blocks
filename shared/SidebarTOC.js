import { Fragment } from '@wordpress/element'
import Slugify from './Slugify.js';

const SidebarTOC = ({sections}) => {
    let toc, 
        section_links, 
        sub_section_links,
        section_id,
        sub_section_id;
    
    if(sections.length) {
        section_links = sections.map((section, key) => {
            section.attributes.title ? section_id = Slugify(section.attributes.title) : null;
            if (section.innerBlocks.length) {
                sub_section_links = section.innerBlocks.filter((block) => {
                    return block.name === "space-rocket-blocks/section";
                }).map((sub_section, sub_key) => {
                    sub_section.attributes.title ? sub_section_id = Slugify(sub_section.attributes.title) : null;
                    return <Fragment key={sub_key}>
                        <li>
                            <a tabindex="0" data-id={sub_section_id}>
                                {sub_section.attributes.title}
                            </a>
                        </li>
                    </Fragment>
                })
            }
            return <Fragment key={key}>
                <li>
                    <a tabindex="0"data-id={section_id}>
                        {section.attributes.title}
                    </a>
                    {section.innerBlocks.length ? <ol>{sub_section_links}</ol> : null }
                </li>
            </Fragment>    
        })
        return (
            <Fragment>
                <ol>{section_links}</ol>
            </Fragment>
        )
    } else {
        return null   
    }
}
export default SidebarTOC;