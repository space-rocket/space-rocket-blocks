import { Fragment } from '@wordpress/element'

const SidebarTOC = ({sections}) => {
    let toc, section_links, sub_section_links;

    if(sections.length) {
        section_links = sections.map((section, key) => {
            if (section.innerBlocks.length) {
                sub_section_links = section.innerBlocks.filter((block) => {
                    return block.name === "space-rocket-blocks/section";
                }).map((sub_section, sub_key) => {
                    return <Fragment key={sub_key}><li>{sub_section.attributes.title}</li></Fragment>
                })
            }
            return <Fragment key={key}>
                <li>
                    {section.attributes.title}
                    {section.innerBlocks.length ? <ol>{sub_section_links}</ol> : null }
                </li>

            </Fragment>    
        })
        return (
            <Fragment>
                <ul>{section_links}</ul>
            </Fragment>
        )
    } else {
        return null   
    }
}
export default SidebarTOC;