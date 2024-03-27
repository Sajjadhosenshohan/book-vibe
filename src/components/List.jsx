import Sort2 from "./Sort2";
import PropTypes from 'prop-types';
// wishList

const List = ({readAll2}) => {
    console.log(6, readAll2);
    return (
        <div className="flex flex-col gap-6 ">
            {
                readAll2.map(b => <Sort2 key={b.bookid} b={b}></Sort2>)
            }
        </div>
    );
};

List.propTypes = {
    readAll2: PropTypes.object
}
export default List;