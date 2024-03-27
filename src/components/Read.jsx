
import Sort from "./Sort";

import PropTypes from 'prop-types';

const Read = ({readAll}) => {
    
    console.log(readAll);

    return (
        <div className="flex flex-col gap-6 ">
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