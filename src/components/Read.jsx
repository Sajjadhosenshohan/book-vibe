
import Sort from "./Sort";

import PropTypes from 'prop-types';

const Read = ({readAll}) => {
    
    console.log(readAll);

    // const [readAll, setReadAll] = useState(bloo);

    // const handleFilter = filter =>{
    //     if(filter === 'rating'){
    //         const rating = readAll.filter(book => book.rating)
    //         setReadAll(rating)
    //     }
    // }

    return (
        <div>
            {
                readAll.map(b => <Sort key={b.bookid} b={b}></Sort>)
            }
        </div>
    );
};
Read.propTypes = {
    readAll: PropTypes.object
}
export default Read;