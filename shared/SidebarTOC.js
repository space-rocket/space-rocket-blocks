const { useSelect } = wp.data;
 
export default function SidebarTOC() {
    const blocks = useSelect( ( select ) => {
        const data = select( 'core/block-editor' ).getBlocks()
        const sections = data[0].innerBlocks.filter((block) => {
        	return block.name === "space-rocket-blocks/section";
        });
        return sections;
    }, [] );
    if ( ! blocks ) {
        return null;
    }

    return (
        <ul>
            { blocks.map( ( block ) => (
                <li key={ block.id }>{ block.attributes.title }</li>
            ) ) }
        </ul>
    );
}