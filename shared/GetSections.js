const { useSelect } = wp.data;
 
export default function GetSections() {
    const sections = useSelect( ( select ) => {
        const section_block = select( 'core/block-editor' ).getBlocks()[0].innerBlocks.filter((block) => {
        	return block.name === "space-rocket-blocks/section";
        });
        return section_block;
    }, [] );
    if ( ! sections ) {
        return null;
    }
    return sections;
}