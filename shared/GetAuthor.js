const { useSelect } = wp.data;
 
export default function MyAuthorsListBase() {
    const authorID = useSelect('core/editor').getCurrentPostAttribute('author');
    console.log("authorID: ", authorID)
    const authors = useSelect( ( select ) => {
        return select( 'core' ).getUsers( { who: 'authors' } );
    }, [] );
 
    if ( ! authors ) {
        return null;
    }
    const author = authors.find(o => o.id === authorID);
    return author;
}