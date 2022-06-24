const { useSelect } = wp.data;
 
export default function MyAuthorsListBase() {
    const authors = useSelect( ( select ) => {
        return select( 'core' ).getUsers( { who: 'authors' } );
    }, [] );
 
    if ( ! authors ) {
        return null;
    }
 
    return (
        <ul>
            { authors.map( ( author ) => (
                <li key={ author.id }>{ author.name }</li>
            ) ) }
        </ul>
    );
}